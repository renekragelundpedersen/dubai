/*
<script type="text/javascript" src="./scripts/jquery-latest.js"></script>
<script type="text/javascript" src="./scripts/jquery.calendar.js"></script>
<script type="text/javascript" src="./scripts/jquery-ui.custom.js"></script>
<script type="text/javascript" src="./scripts/jquery.event.drag-2.0.min.js"></script>
<script type="text/javascript" src="./scripts/jquery.hotkeys.js"></script>
<script type="text/javascript" src="./scripts/jquery.scrollTo.js"></script>
<script type="text/javascript" src="./scripts/jquery.caret.1.02.js"></script>
<script type="text/javascript" src="./scripts/jquery.zclip.js"></script>
<script type="text/javascript" src="./scripts/jquery.pulse.js"></script>
<script type="text/javascript" src="./scripts/jquery.minicolors.js"></script>
<script type="text/javascript" src="./scripts/jquery.metro.js"></script>
<script type="text/javascript" src="./scripts/jquery.json.js"></script>
<script type="text/javascript" src="./scripts/jquery.jstorage.js"></script>
<script type="text/javascript" src="../scripts/jquery.bubbletip.js"></script>
<script type="text/javascript" src="./scripts/jquery.lavalamp.js"></script>
<script type="text/javascript" src="./scripts/md5.js"></script>
<script type="text/javascript" src="./scripts/buzz.js"></script>
<script type="text/javascript" src="./scripts/amcharts.js"></script>
<script type="text/javascript" src="./scripts/date.js"></script>
<script type="text/javascript" src="./scripts/slick.core.js"></script>
<script type="text/javascript" src="./scripts/slick.grid.js"></script>
<script type="text/javascript" src="./scripts/slick.formatters.js"></script>
<script type="text/javascript" src="./scripts/slick.dataview.js"></script>
<script type="text/javascript" src="./scripts/slick.groupitemmetadataprovider.js"></script>
<script type="text/javascript" src="./scripts/slick.rowselectionmodel.js"></script>
<script type="text/javascript" src="./scripts/jquery.fileupload.js"></script>
<script type="text/javascript" src="./scripts/jquery.iframe-transport.js"></script>
<script type="text/javascript" src="./scripts/bootstrap.js"></script>
<script type="text/javascript" src="./scripts/bootstrap-dropdown.js"></script>
*/

/*! jQuery v1.7.1 jquery.com | jquery.org/license */
(function(a,b){function cy(a){return f.isWindow(a)?a:a.nodeType===9?a.defaultView||a.parentWindow:!1}function cv(a){if(!ck[a]){var b=c.body,d=f("<"+a+">").appendTo(b),e=d.css("display");d.remove();if(e==="none"||e===""){cl||(cl=c.createElement("iframe"),cl.frameBorder=cl.width=cl.height=0),b.appendChild(cl);if(!cm||!cl.createElement)cm=(cl.contentWindow||cl.contentDocument).document,cm.write((c.compatMode==="CSS1Compat"?"<!doctype html>":"")+"<html><body>"),cm.close();d=cm.createElement(a),cm.body.appendChild(d),e=f.css(d,"display"),b.removeChild(cl)}ck[a]=e}return ck[a]}function cu(a,b){var c={};f.each(cq.concat.apply([],cq.slice(0,b)),function(){c[this]=a});return c}function ct(){cr=b}function cs(){setTimeout(ct,0);return cr=f.now()}function cj(){try{return new a.ActiveXObject("Microsoft.XMLHTTP")}catch(b){}}function ci(){try{return new a.XMLHttpRequest}catch(b){}}function cc(a,c){a.dataFilter&&(c=a.dataFilter(c,a.dataType));var d=a.dataTypes,e={},g,h,i=d.length,j,k=d[0],l,m,n,o,p;for(g=1;g<i;g++){if(g===1)for(h in a.converters)typeof h=="string"&&(e[h.toLowerCase()]=a.converters[h]);l=k,k=d[g];if(k==="*")k=l;else if(l!=="*"&&l!==k){m=l+" "+k,n=e[m]||e["* "+k];if(!n){p=b;for(o in e){j=o.split(" ");if(j[0]===l||j[0]==="*"){p=e[j[1]+" "+k];if(p){o=e[o],o===!0?n=p:p===!0&&(n=o);break}}}}!n&&!p&&f.error("No conversion from "+m.replace(" "," to ")),n!==!0&&(c=n?n(c):p(o(c)))}}return c}function cb(a,c,d){var e=a.contents,f=a.dataTypes,g=a.responseFields,h,i,j,k;for(i in g)i in d&&(c[g[i]]=d[i]);while(f[0]==="*")f.shift(),h===b&&(h=a.mimeType||c.getResponseHeader("content-type"));if(h)for(i in e)if(e[i]&&e[i].test(h)){f.unshift(i);break}if(f[0]in d)j=f[0];else{for(i in d){if(!f[0]||a.converters[i+" "+f[0]]){j=i;break}k||(k=i)}j=j||k}if(j){j!==f[0]&&f.unshift(j);return d[j]}}function ca(a,b,c,d){if(f.isArray(b))f.each(b,function(b,e){c||bE.test(a)?d(a,e):ca(a+"["+(typeof e=="object"||f.isArray(e)?b:"")+"]",e,c,d)});else if(!c&&b!=null&&typeof b=="object")for(var e in b)ca(a+"["+e+"]",b[e],c,d);else d(a,b)}function b_(a,c){var d,e,g=f.ajaxSettings.flatOptions||{};for(d in c)c[d]!==b&&((g[d]?a:e||(e={}))[d]=c[d]);e&&f.extend(!0,a,e)}function b$(a,c,d,e,f,g){f=f||c.dataTypes[0],g=g||{},g[f]=!0;var h=a[f],i=0,j=h?h.length:0,k=a===bT,l;for(;i<j&&(k||!l);i++)l=h[i](c,d,e),typeof l=="string"&&(!k||g[l]?l=b:(c.dataTypes.unshift(l),l=b$(a,c,d,e,l,g)));(k||!l)&&!g["*"]&&(l=b$(a,c,d,e,"*",g));return l}function bZ(a){return function(b,c){typeof b!="string"&&(c=b,b="*");if(f.isFunction(c)){var d=b.toLowerCase().split(bP),e=0,g=d.length,h,i,j;for(;e<g;e++)h=d[e],j=/^\+/.test(h),j&&(h=h.substr(1)||"*"),i=a[h]=a[h]||[],i[j?"unshift":"push"](c)}}}function bC(a,b,c){var d=b==="width"?a.offsetWidth:a.offsetHeight,e=b==="width"?bx:by,g=0,h=e.length;if(d>0){if(c!=="border")for(;g<h;g++)c||(d-=parseFloat(f.css(a,"padding"+e[g]))||0),c==="margin"?d+=parseFloat(f.css(a,c+e[g]))||0:d-=parseFloat(f.css(a,"border"+e[g]+"Width"))||0;return d+"px"}d=bz(a,b,b);if(d<0||d==null)d=a.style[b]||0;d=parseFloat(d)||0;if(c)for(;g<h;g++)d+=parseFloat(f.css(a,"padding"+e[g]))||0,c!=="padding"&&(d+=parseFloat(f.css(a,"border"+e[g]+"Width"))||0),c==="margin"&&(d+=parseFloat(f.css(a,c+e[g]))||0);return d+"px"}function bp(a,b){b.src?f.ajax({url:b.src,async:!1,dataType:"script"}):f.globalEval((b.text||b.textContent||b.innerHTML||"").replace(bf,"/*$0*/")),b.parentNode&&b.parentNode.removeChild(b)}function bo(a){var b=c.createElement("div");bh.appendChild(b),b.innerHTML=a.outerHTML;return b.firstChild}function bn(a){var b=(a.nodeName||"").toLowerCase();b==="input"?bm(a):b!=="script"&&typeof a.getElementsByTagName!="undefined"&&f.grep(a.getElementsByTagName("input"),bm)}function bm(a){if(a.type==="checkbox"||a.type==="radio")a.defaultChecked=a.checked}function bl(a){return typeof a.getElementsByTagName!="undefined"?a.getElementsByTagName("*"):typeof a.querySelectorAll!="undefined"?a.querySelectorAll("*"):[]}function bk(a,b){var c;if(b.nodeType===1){b.clearAttributes&&b.clearAttributes(),b.mergeAttributes&&b.mergeAttributes(a),c=b.nodeName.toLowerCase();if(c==="object")b.outerHTML=a.outerHTML;else if(c!=="input"||a.type!=="checkbox"&&a.type!=="radio"){if(c==="option")b.selected=a.defaultSelected;else if(c==="input"||c==="textarea")b.defaultValue=a.defaultValue}else a.checked&&(b.defaultChecked=b.checked=a.checked),b.value!==a.value&&(b.value=a.value);b.removeAttribute(f.expando)}}function bj(a,b){if(b.nodeType===1&&!!f.hasData(a)){var c,d,e,g=f._data(a),h=f._data(b,g),i=g.events;if(i){delete h.handle,h.events={};for(c in i)for(d=0,e=i[c].length;d<e;d++)f.event.add(b,c+(i[c][d].namespace?".":"")+i[c][d].namespace,i[c][d],i[c][d].data)}h.data&&(h.data=f.extend({},h.data))}}function bi(a,b){return f.nodeName(a,"table")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function U(a){var b=V.split("|"),c=a.createDocumentFragment();if(c.createElement)while(b.length)c.createElement(b.pop());return c}function T(a,b,c){b=b||0;if(f.isFunction(b))return f.grep(a,function(a,d){var e=!!b.call(a,d,a);return e===c});if(b.nodeType)return f.grep(a,function(a,d){return a===b===c});if(typeof b=="string"){var d=f.grep(a,function(a){return a.nodeType===1});if(O.test(b))return f.filter(b,d,!c);b=f.filter(b,d)}return f.grep(a,function(a,d){return f.inArray(a,b)>=0===c})}function S(a){return!a||!a.parentNode||a.parentNode.nodeType===11}function K(){return!0}function J(){return!1}function n(a,b,c){var d=b+"defer",e=b+"queue",g=b+"mark",h=f._data(a,d);h&&(c==="queue"||!f._data(a,e))&&(c==="mark"||!f._data(a,g))&&setTimeout(function(){!f._data(a,e)&&!f._data(a,g)&&(f.removeData(a,d,!0),h.fire())},0)}function m(a){for(var b in a){if(b==="data"&&f.isEmptyObject(a[b]))continue;if(b!=="toJSON")return!1}return!0}function l(a,c,d){if(d===b&&a.nodeType===1){var e="data-"+c.replace(k,"-$1").toLowerCase();d=a.getAttribute(e);if(typeof d=="string"){try{d=d==="true"?!0:d==="false"?!1:d==="null"?null:f.isNumeric(d)?parseFloat(d):j.test(d)?f.parseJSON(d):d}catch(g){}f.data(a,c,d)}else d=b}return d}function h(a){var b=g[a]={},c,d;a=a.split(/\s+/);for(c=0,d=a.length;c<d;c++)b[a[c]]=!0;return b}var c=a.document,d=a.navigator,e=a.location,f=function(){function J(){if(!e.isReady){try{c.documentElement.doScroll("left")}catch(a){setTimeout(J,1);return}e.ready()}}var e=function(a,b){return new e.fn.init(a,b,h)},f=a.jQuery,g=a.$,h,i=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,j=/\S/,k=/^\s+/,l=/\s+$/,m=/^<(\w+)\s*\/?>(?:<\/\1>)?$/,n=/^[\],:{}\s]*$/,o=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,p=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,q=/(?:^|:|,)(?:\s*\[)+/g,r=/(webkit)[ \/]([\w.]+)/,s=/(opera)(?:.*version)?[ \/]([\w.]+)/,t=/(msie) ([\w.]+)/,u=/(mozilla)(?:.*? rv:([\w.]+))?/,v=/-([a-z]|[0-9])/ig,w=/^-ms-/,x=function(a,b){return(b+"").toUpperCase()},y=d.userAgent,z,A,B,C=Object.prototype.toString,D=Object.prototype.hasOwnProperty,E=Array.prototype.push,F=Array.prototype.slice,G=String.prototype.trim,H=Array.prototype.indexOf,I={};e.fn=e.prototype={constructor:e,init:function(a,d,f){var g,h,j,k;if(!a)return this;if(a.nodeType){this.context=this[0]=a,this.length=1;return this}if(a==="body"&&!d&&c.body){this.context=c,this[0]=c.body,this.selector=a,this.length=1;return this}if(typeof a=="string"){a.charAt(0)!=="<"||a.charAt(a.length-1)!==">"||a.length<3?g=i.exec(a):g=[null,a,null];if(g&&(g[1]||!d)){if(g[1]){d=d instanceof e?d[0]:d,k=d?d.ownerDocument||d:c,j=m.exec(a),j?e.isPlainObject(d)?(a=[c.createElement(j[1])],e.fn.attr.call(a,d,!0)):a=[k.createElement(j[1])]:(j=e.buildFragment([g[1]],[k]),a=(j.cacheable?e.clone(j.fragment):j.fragment).childNodes);return e.merge(this,a)}h=c.getElementById(g[2]);if(h&&h.parentNode){if(h.id!==g[2])return f.find(a);this.length=1,this[0]=h}this.context=c,this.selector=a;return this}return!d||d.jquery?(d||f).find(a):this.constructor(d).find(a)}if(e.isFunction(a))return f.ready(a);a.selector!==b&&(this.selector=a.selector,this.context=a.context);return e.makeArray(a,this)},selector:"",jquery:"1.7.1",length:0,size:function(){return this.length},toArray:function(){return F.call(this,0)},get:function(a){return a==null?this.toArray():a<0?this[this.length+a]:this[a]},pushStack:function(a,b,c){var d=this.constructor();e.isArray(a)?E.apply(d,a):e.merge(d,a),d.prevObject=this,d.context=this.context,b==="find"?d.selector=this.selector+(this.selector?" ":"")+c:b&&(d.selector=this.selector+"."+b+"("+c+")");return d},each:function(a,b){return e.each(this,a,b)},ready:function(a){e.bindReady(),A.add(a);return this},eq:function(a){a=+a;return a===-1?this.slice(a):this.slice(a,a+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(F.apply(this,arguments),"slice",F.call(arguments).join(","))},map:function(a){return this.pushStack(e.map(this,function(b,c){return a.call(b,c,b)}))},end:function(){return this.prevObject||this.constructor(null)},push:E,sort:[].sort,splice:[].splice},e.fn.init.prototype=e.fn,e.extend=e.fn.extend=function(){var a,c,d,f,g,h,i=arguments[0]||{},j=1,k=arguments.length,l=!1;typeof i=="boolean"&&(l=i,i=arguments[1]||{},j=2),typeof i!="object"&&!e.isFunction(i)&&(i={}),k===j&&(i=this,--j);for(;j<k;j++)if((a=arguments[j])!=null)for(c in a){d=i[c],f=a[c];if(i===f)continue;l&&f&&(e.isPlainObject(f)||(g=e.isArray(f)))?(g?(g=!1,h=d&&e.isArray(d)?d:[]):h=d&&e.isPlainObject(d)?d:{},i[c]=e.extend(l,h,f)):f!==b&&(i[c]=f)}return i},e.extend({noConflict:function(b){a.$===e&&(a.$=g),b&&a.jQuery===e&&(a.jQuery=f);return e},isReady:!1,readyWait:1,holdReady:function(a){a?e.readyWait++:e.ready(!0)},ready:function(a){if(a===!0&&!--e.readyWait||a!==!0&&!e.isReady){if(!c.body)return setTimeout(e.ready,1);e.isReady=!0;if(a!==!0&&--e.readyWait>0)return;A.fireWith(c,[e]),e.fn.trigger&&e(c).trigger("ready").off("ready")}},bindReady:function(){if(!A){A=e.Callbacks("once memory");if(c.readyState==="complete")return setTimeout(e.ready,1);if(c.addEventListener)c.addEventListener("DOMContentLoaded",B,!1),a.addEventListener("load",e.ready,!1);else if(c.attachEvent){c.attachEvent("onreadystatechange",B),a.attachEvent("onload",e.ready);var b=!1;try{b=a.frameElement==null}catch(d){}c.documentElement.doScroll&&b&&J()}}},isFunction:function(a){return e.type(a)==="function"},isArray:Array.isArray||function(a){return e.type(a)==="array"},isWindow:function(a){return a&&typeof a=="object"&&"setInterval"in a},isNumeric:function(a){return!isNaN(parseFloat(a))&&isFinite(a)},type:function(a){return a==null?String(a):I[C.call(a)]||"object"},isPlainObject:function(a){if(!a||e.type(a)!=="object"||a.nodeType||e.isWindow(a))return!1;try{if(a.constructor&&!D.call(a,"constructor")&&!D.call(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}var d;for(d in a);return d===b||D.call(a,d)},isEmptyObject:function(a){for(var b in a)return!1;return!0},error:function(a){throw new Error(a)},parseJSON:function(b){if(typeof b!="string"||!b)return null;b=e.trim(b);if(a.JSON&&a.JSON.parse)return a.JSON.parse(b);if(n.test(b.replace(o,"@").replace(p,"]").replace(q,"")))return(new Function("return "+b))();e.error("Invalid JSON: "+b)},parseXML:function(c){var d,f;try{a.DOMParser?(f=new DOMParser,d=f.parseFromString(c,"text/xml")):(d=new ActiveXObject("Microsoft.XMLDOM"),d.async="false",d.loadXML(c))}catch(g){d=b}(!d||!d.documentElement||d.getElementsByTagName("parsererror").length)&&e.error("Invalid XML: "+c);return d},noop:function(){},globalEval:function(b){b&&j.test(b)&&(a.execScript||function(b){a.eval.call(a,b)})(b)},camelCase:function(a){return a.replace(w,"ms-").replace(v,x)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toUpperCase()===b.toUpperCase()},each:function(a,c,d){var f,g=0,h=a.length,i=h===b||e.isFunction(a);if(d){if(i){for(f in a)if(c.apply(a[f],d)===!1)break}else for(;g<h;)if(c.apply(a[g++],d)===!1)break}else if(i){for(f in a)if(c.call(a[f],f,a[f])===!1)break}else for(;g<h;)if(c.call(a[g],g,a[g++])===!1)break;return a},trim:G?function(a){return a==null?"":G.call(a)}:function(a){return a==null?"":(a+"").replace(k,"").replace(l,"")},makeArray:function(a,b){var c=b||[];if(a!=null){var d=e.type(a);a.length==null||d==="string"||d==="function"||d==="regexp"||e.isWindow(a)?E.call(c,a):e.merge(c,a)}return c},inArray:function(a,b,c){var d;if(b){if(H)return H.call(b,a,c);d=b.length,c=c?c<0?Math.max(0,d+c):c:0;for(;c<d;c++)if(c in b&&b[c]===a)return c}return-1},merge:function(a,c){var d=a.length,e=0;if(typeof c.length=="number")for(var f=c.length;e<f;e++)a[d++]=c[e];else while(c[e]!==b)a[d++]=c[e++];a.length=d;return a},grep:function(a,b,c){var d=[],e;c=!!c;for(var f=0,g=a.length;f<g;f++)e=!!b(a[f],f),c!==e&&d.push(a[f]);return d},map:function(a,c,d){var f,g,h=[],i=0,j=a.length,k=a instanceof e||j!==b&&typeof j=="number"&&(j>0&&a[0]&&a[j-1]||j===0||e.isArray(a));if(k)for(;i<j;i++)f=c(a[i],i,d),f!=null&&(h[h.length]=f);else for(g in a)f=c(a[g],g,d),f!=null&&(h[h.length]=f);return h.concat.apply([],h)},guid:1,proxy:function(a,c){if(typeof c=="string"){var d=a[c];c=a,a=d}if(!e.isFunction(a))return b;var f=F.call(arguments,2),g=function(){return a.apply(c,f.concat(F.call(arguments)))};g.guid=a.guid=a.guid||g.guid||e.guid++;return g},access:function(a,c,d,f,g,h){var i=a.length;if(typeof c=="object"){for(var j in c)e.access(a,j,c[j],f,g,d);return a}if(d!==b){f=!h&&f&&e.isFunction(d);for(var k=0;k<i;k++)g(a[k],c,f?d.call(a[k],k,g(a[k],c)):d,h);return a}return i?g(a[0],c):b},now:function(){return(new Date).getTime()},uaMatch:function(a){a=a.toLowerCase();var b=r.exec(a)||s.exec(a)||t.exec(a)||a.indexOf("compatible")<0&&u.exec(a)||[];return{browser:b[1]||"",version:b[2]||"0"}},sub:function(){function a(b,c){return new a.fn.init(b,c)}e.extend(!0,a,this),a.superclass=this,a.fn=a.prototype=this(),a.fn.constructor=a,a.sub=this.sub,a.fn.init=function(d,f){f&&f instanceof e&&!(f instanceof a)&&(f=a(f));return e.fn.init.call(this,d,f,b)},a.fn.init.prototype=a.fn;var b=a(c);return a},browser:{}}),e.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(a,b){I["[object "+b+"]"]=b.toLowerCase()}),z=e.uaMatch(y),z.browser&&(e.browser[z.browser]=!0,e.browser.version=z.version),e.browser.webkit&&(e.browser.safari=!0),j.test(" ")&&(k=/^[\s\xA0]+/,l=/[\s\xA0]+$/),h=e(c),c.addEventListener?B=function(){c.removeEventListener("DOMContentLoaded",B,!1),e.ready()}:c.attachEvent&&(B=function(){c.readyState==="complete"&&(c.detachEvent("onreadystatechange",B),e.ready())});return e}(),g={};f.Callbacks=function(a){a=a?g[a]||h(a):{};var c=[],d=[],e,i,j,k,l,m=function(b){var d,e,g,h,i;for(d=0,e=b.length;d<e;d++)g=b[d],h=f.type(g),h==="array"?m(g):h==="function"&&(!a.unique||!o.has(g))&&c.push(g)},n=function(b,f){f=f||[],e=!a.memory||[b,f],i=!0,l=j||0,j=0,k=c.length;for(;c&&l<k;l++)if(c[l].apply(b,f)===!1&&a.stopOnFalse){e=!0;break}i=!1,c&&(a.once?e===!0?o.disable():c=[]:d&&d.length&&(e=d.shift(),o.fireWith(e[0],e[1])))},o={add:function(){if(c){var a=c.length;m(arguments),i?k=c.length:e&&e!==!0&&(j=a,n(e[0],e[1]))}return this},remove:function(){if(c){var b=arguments,d=0,e=b.length;for(;d<e;d++)for(var f=0;f<c.length;f++)if(b[d]===c[f]){i&&f<=k&&(k--,f<=l&&l--),c.splice(f--,1);if(a.unique)break}}return this},has:function(a){if(c){var b=0,d=c.length;for(;b<d;b++)if(a===c[b])return!0}return!1},empty:function(){c=[];return this},disable:function(){c=d=e=b;return this},disabled:function(){return!c},lock:function(){d=b,(!e||e===!0)&&o.disable();return this},locked:function(){return!d},fireWith:function(b,c){d&&(i?a.once||d.push([b,c]):(!a.once||!e)&&n(b,c));return this},fire:function(){o.fireWith(this,arguments);return this},fired:function(){return!!e}};return o};var i=[].slice;f.extend({Deferred:function(a){var b=f.Callbacks("once memory"),c=f.Callbacks("once memory"),d=f.Callbacks("memory"),e="pending",g={resolve:b,reject:c,notify:d},h={done:b.add,fail:c.add,progress:d.add,state:function(){return e},isResolved:b.fired,isRejected:c.fired,then:function(a,b,c){i.done(a).fail(b).progress(c);return this},always:function(){i.done.apply(i,arguments).fail.apply(i,arguments);return this},pipe:function(a,b,c){return f.Deferred(function(d){f.each({done:[a,"resolve"],fail:[b,"reject"],progress:[c,"notify"]},function(a,b){var c=b[0],e=b[1],g;f.isFunction(c)?i[a](function(){g=c.apply(this,arguments),g&&f.isFunction(g.promise)?g.promise().then(d.resolve,d.reject,d.notify):d[e+"With"](this===i?d:this,[g])}):i[a](d[e])})}).promise()},promise:function(a){if(a==null)a=h;else for(var b in h)a[b]=h[b];return a}},i=h.promise({}),j;for(j in g)i[j]=g[j].fire,i[j+"With"]=g[j].fireWith;i.done(function(){e="resolved"},c.disable,d.lock).fail(function(){e="rejected"},b.disable,d.lock),a&&a.call(i,i);return i},when:function(a){function m(a){return function(b){e[a]=arguments.length>1?i.call(arguments,0):b,j.notifyWith(k,e)}}function l(a){return function(c){b[a]=arguments.length>1?i.call(arguments,0):c,--g||j.resolveWith(j,b)}}var b=i.call(arguments,0),c=0,d=b.length,e=Array(d),g=d,h=d,j=d<=1&&a&&f.isFunction(a.promise)?a:f.Deferred(),k=j.promise();if(d>1){for(;c<d;c++)b[c]&&b[c].promise&&f.isFunction(b[c].promise)?b[c].promise().then(l(c),j.reject,m(c)):--g;g||j.resolveWith(j,b)}else j!==a&&j.resolveWith(j,d?[a]:[]);return k}}),f.support=function(){var b,d,e,g,h,i,j,k,l,m,n,o,p,q=c.createElement("div"),r=c.documentElement;q.setAttribute("className","t"),q.innerHTML="   <link/><table></table><a href='/a' style='top:1px;float:left;opacity:.55;'>a</a><input type='checkbox'/>",d=q.getElementsByTagName("*"),e=q.getElementsByTagName("a")[0];if(!d||!d.length||!e)return{};g=c.createElement("select"),h=g.appendChild(c.createElement("option")),i=q.getElementsByTagName("input")[0],b={leadingWhitespace:q.firstChild.nodeType===3,tbody:!q.getElementsByTagName("tbody").length,htmlSerialize:!!q.getElementsByTagName("link").length,style:/top/.test(e.getAttribute("style")),hrefNormalized:e.getAttribute("href")==="/a",opacity:/^0.55/.test(e.style.opacity),cssFloat:!!e.style.cssFloat,checkOn:i.value==="on",optSelected:h.selected,getSetAttribute:q.className!=="t",enctype:!!c.createElement("form").enctype,html5Clone:c.createElement("nav").cloneNode(!0).outerHTML!=="<:nav></:nav>",submitBubbles:!0,changeBubbles:!0,focusinBubbles:!1,deleteExpando:!0,noCloneEvent:!0,inlineBlockNeedsLayout:!1,shrinkWrapBlocks:!1,reliableMarginRight:!0},i.checked=!0,b.noCloneChecked=i.cloneNode(!0).checked,g.disabled=!0,b.optDisabled=!h.disabled;try{delete q.test}catch(s){b.deleteExpando=!1}!q.addEventListener&&q.attachEvent&&q.fireEvent&&(q.attachEvent("onclick",function(){b.noCloneEvent=!1}),q.cloneNode(!0).fireEvent("onclick")),i=c.createElement("input"),i.value="t",i.setAttribute("type","radio"),b.radioValue=i.value==="t",i.setAttribute("checked","checked"),q.appendChild(i),k=c.createDocumentFragment(),k.appendChild(q.lastChild),b.checkClone=k.cloneNode(!0).cloneNode(!0).lastChild.checked,b.appendChecked=i.checked,k.removeChild(i),k.appendChild(q),q.innerHTML="",a.getComputedStyle&&(j=c.createElement("div"),j.style.width="0",j.style.marginRight="0",q.style.width="2px",q.appendChild(j),b.reliableMarginRight=(parseInt((a.getComputedStyle(j,null)||{marginRight:0}).marginRight,10)||0)===0);if(q.attachEvent)for(o in{submit:1,change:1,focusin:1})n="on"+o,p=n in q,p||(q.setAttribute(n,"return;"),p=typeof q[n]=="function"),b[o+"Bubbles"]=p;k.removeChild(q),k=g=h=j=q=i=null,f(function(){var a,d,e,g,h,i,j,k,m,n,o,r=c.getElementsByTagName("body")[0];!r||(j=1,k="position:absolute;top:0;left:0;width:1px;height:1px;margin:0;",m="visibility:hidden;border:0;",n="style='"+k+"border:5px solid #000;padding:0;'",o="<div "+n+"><div></div></div>"+"<table "+n+" cellpadding='0' cellspacing='0'>"+"<tr><td></td></tr></table>",a=c.createElement("div"),a.style.cssText=m+"width:0;height:0;position:static;top:0;margin-top:"+j+"px",r.insertBefore(a,r.firstChild),q=c.createElement("div"),a.appendChild(q),q.innerHTML="<table><tr><td style='padding:0;border:0;display:none'></td><td>t</td></tr></table>",l=q.getElementsByTagName("td"),p=l[0].offsetHeight===0,l[0].style.display="",l[1].style.display="none",b.reliableHiddenOffsets=p&&l[0].offsetHeight===0,q.innerHTML="",q.style.width=q.style.paddingLeft="1px",f.boxModel=b.boxModel=q.offsetWidth===2,typeof q.style.zoom!="undefined"&&(q.style.display="inline",q.style.zoom=1,b.inlineBlockNeedsLayout=q.offsetWidth===2,q.style.display="",q.innerHTML="<div style='width:4px;'></div>",b.shrinkWrapBlocks=q.offsetWidth!==2),q.style.cssText=k+m,q.innerHTML=o,d=q.firstChild,e=d.firstChild,h=d.nextSibling.firstChild.firstChild,i={doesNotAddBorder:e.offsetTop!==5,doesAddBorderForTableAndCells:h.offsetTop===5},e.style.position="fixed",e.style.top="20px",i.fixedPosition=e.offsetTop===20||e.offsetTop===15,e.style.position=e.style.top="",d.style.overflow="hidden",d.style.position="relative",i.subtractsBorderForOverflowNotVisible=e.offsetTop===-5,i.doesNotIncludeMarginInBodyOffset=r.offsetTop!==j,r.removeChild(a),q=a=null,f.extend(b,i))});return b}();var j=/^(?:\{.*\}|\[.*\])$/,k=/([A-Z])/g;f.extend({cache:{},uuid:0,expando:"jQuery"+(f.fn.jquery+Math.random()).replace(/\D/g,""),noData:{embed:!0,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:!0},hasData:function(a){a=a.nodeType?f.cache[a[f.expando]]:a[f.expando];return!!a&&!m(a)},data:function(a,c,d,e){if(!!f.acceptData(a)){var g,h,i,j=f.expando,k=typeof c=="string",l=a.nodeType,m=l?f.cache:a,n=l?a[j]:a[j]&&j,o=c==="events";if((!n||!m[n]||!o&&!e&&!m[n].data)&&k&&d===b)return;n||(l?a[j]=n=++f.uuid:n=j),m[n]||(m[n]={},l||(m[n].toJSON=f.noop));if(typeof c=="object"||typeof c=="function")e?m[n]=f.extend(m[n],c):m[n].data=f.extend(m[n].data,c);g=h=m[n],e||(h.data||(h.data={}),h=h.data),d!==b&&(h[f.camelCase(c)]=d);if(o&&!h[c])return g.events;k?(i=h[c],i==null&&(i=h[f.camelCase(c)])):i=h;return i}},removeData:function(a,b,c){if(!!f.acceptData(a)){var d,e,g,h=f.expando,i=a.nodeType,j=i?f.cache:a,k=i?a[h]:h;if(!j[k])return;if(b){d=c?j[k]:j[k].data;if(d){f.isArray(b)||(b in d?b=[b]:(b=f.camelCase(b),b in d?b=[b]:b=b.split(" ")));for(e=0,g=b.length;e<g;e++)delete d[b[e]];if(!(c?m:f.isEmptyObject)(d))return}}if(!c){delete j[k].data;if(!m(j[k]))return}f.support.deleteExpando||!j.setInterval?delete j[k]:j[k]=null,i&&(f.support.deleteExpando?delete a[h]:a.removeAttribute?a.removeAttribute(h):a[h]=null)}},_data:function(a,b,c){return f.data(a,b,c,!0)},acceptData:function(a){if(a.nodeName){var b=f.noData[a.nodeName.toLowerCase()];if(b)return b!==!0&&a.getAttribute("classid")===b}return!0}}),f.fn.extend({data:function(a,c){var d,e,g,h=null;if(typeof a=="undefined"){if(this.length){h=f.data(this[0]);if(this[0].nodeType===1&&!f._data(this[0],"parsedAttrs")){e=this[0].attributes;for(var i=0,j=e.length;i<j;i++)g=e[i].name,g.indexOf("data-")===0&&(g=f.camelCase(g.substring(5)),l(this[0],g,h[g]));f._data(this[0],"parsedAttrs",!0)}}return h}if(typeof a=="object")return this.each(function(){f.data(this,a)});d=a.split("."),d[1]=d[1]?"."+d[1]:"";if(c===b){h=this.triggerHandler("getData"+d[1]+"!",[d[0]]),h===b&&this.length&&(h=f.data(this[0],a),h=l(this[0],a,h));return h===b&&d[1]?this.data(d[0]):h}return this.each(function(){var b=f(this),e=[d[0],c];b.triggerHandler("setData"+d[1]+"!",e),f.data(this,a,c),b.triggerHandler("changeData"+d[1]+"!",e)})},removeData:function(a){return this.each(function(){f.removeData(this,a)})}}),f.extend({_mark:function(a,b){a&&(b=(b||"fx")+"mark",f._data(a,b,(f._data(a,b)||0)+1))},_unmark:function(a,b,c){a!==!0&&(c=b,b=a,a=!1);if(b){c=c||"fx";var d=c+"mark",e=a?0:(f._data(b,d)||1)-1;e?f._data(b,d,e):(f.removeData(b,d,!0),n(b,c,"mark"))}},queue:function(a,b,c){var d;if(a){b=(b||"fx")+"queue",d=f._data(a,b),c&&(!d||f.isArray(c)?d=f._data(a,b,f.makeArray(c)):d.push(c));return d||[]}},dequeue:function(a,b){b=b||"fx";var c=f.queue(a,b),d=c.shift(),e={};d==="inprogress"&&(d=c.shift()),d&&(b==="fx"&&c.unshift("inprogress"),f._data(a,b+".run",e),d.call(a,function(){f.dequeue(a,b)},e)),c.length||(f.removeData(a,b+"queue "+b+".run",!0),n(a,b,"queue"))}}),f.fn.extend({queue:function(a,c){typeof a!="string"&&(c=a,a="fx");if(c===b)return f.queue(this[0],a);return this.each(function(){var b=f.queue(this,a,c);a==="fx"&&b[0]!=="inprogress"&&f.dequeue(this,a)})},dequeue:function(a){return this.each(function(){f.dequeue(this,a)})},delay:function(a,b){a=f.fx?f.fx.speeds[a]||a:a,b=b||"fx";return this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,c){function m(){--h||d.resolveWith(e,[e])}typeof a!="string"&&(c=a,a=b),a=a||"fx";var d=f.Deferred(),e=this,g=e.length,h=1,i=a+"defer",j=a+"queue",k=a+"mark",l;while(g--)if(l=f.data(e[g],i,b,!0)||(f.data(e[g],j,b,!0)||f.data(e[g],k,b,!0))&&f.data(e[g],i,f.Callbacks("once memory"),!0))h++,l.add(m);m();return d.promise()}});var o=/[\n\t\r]/g,p=/\s+/,q=/\r/g,r=/^(?:button|input)$/i,s=/^(?:button|input|object|select|textarea)$/i,t=/^a(?:rea)?$/i,u=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,v=f.support.getSetAttribute,w,x,y;f.fn.extend({attr:function(a,b){return f.access(this,a,b,!0,f.attr)},removeAttr:function(a){return this.each(function(){f.removeAttr(this,a)})},prop:function(a,b){return f.access(this,a,b,!0,f.prop)},removeProp:function(a){a=f.propFix[a]||a;return this.each(function(){try{this[a]=b,delete this[a]}catch(c){}})},addClass:function(a){var b,c,d,e,g,h,i;if(f.isFunction(a))return this.each(function(b){f(this).addClass(a.call(this,b,this.className))});if(a&&typeof a=="string"){b=a.split(p);for(c=0,d=this.length;c<d;c++){e=this[c];if(e.nodeType===1)if(!e.className&&b.length===1)e.className=a;else{g=" "+e.className+" ";for(h=0,i=b.length;h<i;h++)~g.indexOf(" "+b[h]+" ")||(g+=b[h]+" ");e.className=f.trim(g)}}}return this},removeClass:function(a){var c,d,e,g,h,i,j;if(f.isFunction(a))return this.each(function(b){f(this).removeClass(a.call(this,b,this.className))});if(a&&typeof a=="string"||a===b){c=(a||"").split(p);for(d=0,e=this.length;d<e;d++){g=this[d];if(g.nodeType===1&&g.className)if(a){h=(" "+g.className+" ").replace(o," ");for(i=0,j=c.length;i<j;i++)h=h.replace(" "+c[i]+" "," ");g.className=f.trim(h)}else g.className=""}}return this},toggleClass:function(a,b){var c=typeof a,d=typeof b=="boolean";if(f.isFunction(a))return this.each(function(c){f(this).toggleClass(a.call(this,c,this.className,b),b)});return this.each(function(){if(c==="string"){var e,g=0,h=f(this),i=b,j=a.split(p);while(e=j[g++])i=d?i:!h.hasClass(e),h[i?"addClass":"removeClass"](e)}else if(c==="undefined"||c==="boolean")this.className&&f._data(this,"__className__",this.className),this.className=this.className||a===!1?"":f._data(this,"__className__")||""})},hasClass:function(a){var b=" "+a+" ",c=0,d=this.length;for(;c<d;c++)if(this[c].nodeType===1&&(" "+this[c].className+" ").replace(o," ").indexOf(b)>-1)return!0;return!1},val:function(a){var c,d,e,g=this[0];{if(!!arguments.length){e=f.isFunction(a);return this.each(function(d){var g=f(this),h;if(this.nodeType===1){e?h=a.call(this,d,g.val()):h=a,h==null?h="":typeof h=="number"?h+="":f.isArray(h)&&(h=f.map(h,function(a){return a==null?"":a+""})),c=f.valHooks[this.nodeName.toLowerCase()]||f.valHooks[this.type];if(!c||!("set"in c)||c.set(this,h,"value")===b)this.value=h}})}if(g){c=f.valHooks[g.nodeName.toLowerCase()]||f.valHooks[g.type];if(c&&"get"in c&&(d=c.get(g,"value"))!==b)return d;d=g.value;return typeof d=="string"?d.replace(q,""):d==null?"":d}}}}),f.extend({valHooks:{option:{get:function(a){var b=a.attributes.value;return!b||b.specified?a.value:a.text}},select:{get:function(a){var b,c,d,e,g=a.selectedIndex,h=[],i=a.options,j=a.type==="select-one";if(g<0)return null;c=j?g:0,d=j?g+1:i.length;for(;c<d;c++){e=i[c];if(e.selected&&(f.support.optDisabled?!e.disabled:e.getAttribute("disabled")===null)&&(!e.parentNode.disabled||!f.nodeName(e.parentNode,"optgroup"))){b=f(e).val();if(j)return b;h.push(b)}}if(j&&!h.length&&i.length)return f(i[g]).val();return h},set:function(a,b){var c=f.makeArray(b);f(a).find("option").each(function(){this.selected=f.inArray(f(this).val(),c)>=0}),c.length||(a.selectedIndex=-1);return c}}},attrFn:{val:!0,css:!0,html:!0,text:!0,data:!0,width:!0,height:!0,offset:!0},attr:function(a,c,d,e){var g,h,i,j=a.nodeType;if(!!a&&j!==3&&j!==8&&j!==2){if(e&&c in f.attrFn)return f(a)[c](d);if(typeof a.getAttribute=="undefined")return f.prop(a,c,d);i=j!==1||!f.isXMLDoc(a),i&&(c=c.toLowerCase(),h=f.attrHooks[c]||(u.test(c)?x:w));if(d!==b){if(d===null){f.removeAttr(a,c);return}if(h&&"set"in h&&i&&(g=h.set(a,d,c))!==b)return g;a.setAttribute(c,""+d);return d}if(h&&"get"in h&&i&&(g=h.get(a,c))!==null)return g;g=a.getAttribute(c);return g===null?b:g}},removeAttr:function(a,b){var c,d,e,g,h=0;if(b&&a.nodeType===1){d=b.toLowerCase().split(p),g=d.length;for(;h<g;h++)e=d[h],e&&(c=f.propFix[e]||e,f.attr(a,e,""),a.removeAttribute(v?e:c),u.test(e)&&c in a&&(a[c]=!1))}},attrHooks:{type:{set:function(a,b){if(r.test(a.nodeName)&&a.parentNode)f.error("type property can't be changed");else if(!f.support.radioValue&&b==="radio"&&f.nodeName(a,"input")){var c=a.value;a.setAttribute("type",b),c&&(a.value=c);return b}}},value:{get:function(a,b){if(w&&f.nodeName(a,"button"))return w.get(a,b);return b in a?a.value:null},set:function(a,b,c){if(w&&f.nodeName(a,"button"))return w.set(a,b,c);a.value=b}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(a,c,d){var e,g,h,i=a.nodeType;if(!!a&&i!==3&&i!==8&&i!==2){h=i!==1||!f.isXMLDoc(a),h&&(c=f.propFix[c]||c,g=f.propHooks[c]);return d!==b?g&&"set"in g&&(e=g.set(a,d,c))!==b?e:a[c]=d:g&&"get"in g&&(e=g.get(a,c))!==null?e:a[c]}},propHooks:{tabIndex:{get:function(a){var c=a.getAttributeNode("tabindex");return c&&c.specified?parseInt(c.value,10):s.test(a.nodeName)||t.test(a.nodeName)&&a.href?0:b}}}}),f.attrHooks.tabindex=f.propHooks.tabIndex,x={get:function(a,c){var d,e=f.prop(a,c);return e===!0||typeof e!="boolean"&&(d=a.getAttributeNode(c))&&d.nodeValue!==!1?c.toLowerCase():b},set:function(a,b,c){var d;b===!1?f.removeAttr(a,c):(d=f.propFix[c]||c,d in a&&(a[d]=!0),a.setAttribute(c,c.toLowerCase()));return c}},v||(y={name:!0,id:!0},w=f.valHooks.button={get:function(a,c){var d;d=a.getAttributeNode(c);return d&&(y[c]?d.nodeValue!=="":d.specified)?d.nodeValue:b},set:function(a,b,d){var e=a.getAttributeNode(d);e||(e=c.createAttribute(d),a.setAttributeNode(e));return e.nodeValue=b+""}},f.attrHooks.tabindex.set=w.set,f.each(["width","height"],function(a,b){f.attrHooks[b]=f.extend(f.attrHooks[b],{set:function(a,c){if(c===""){a.setAttribute(b,"auto");return c}}})}),f.attrHooks.contenteditable={get:w.get,set:function(a,b,c){b===""&&(b="false"),w.set(a,b,c)}}),f.support.hrefNormalized||f.each(["href","src","width","height"],function(a,c){f.attrHooks[c]=f.extend(f.attrHooks[c],{get:function(a){var d=a.getAttribute(c,2);return d===null?b:d}})}),f.support.style||(f.attrHooks.style={get:function(a){return a.style.cssText.toLowerCase()||b},set:function(a,b){return a.style.cssText=""+b}}),f.support.optSelected||(f.propHooks.selected=f.extend(f.propHooks.selected,{get:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);return null}})),f.support.enctype||(f.propFix.enctype="encoding"),f.support.checkOn||f.each(["radio","checkbox"],function(){f.valHooks[this]={get:function(a){return a.getAttribute("value")===null?"on":a.value}}}),f.each(["radio","checkbox"],function(){f.valHooks[this]=f.extend(f.valHooks[this],{set:function(a,b){if(f.isArray(b))return a.checked=f.inArray(f(a).val(),b)>=0}})});var z=/^(?:textarea|input|select)$/i,A=/^([^\.]*)?(?:\.(.+))?$/,B=/\bhover(\.\S+)?\b/,C=/^key/,D=/^(?:mouse|contextmenu)|click/,E=/^(?:focusinfocus|focusoutblur)$/,F=/^(\w*)(?:#([\w\-]+))?(?:\.([\w\-]+))?$/,G=function(a){var b=F.exec(a);b&&(b[1]=(b[1]||"").toLowerCase(),b[3]=b[3]&&new RegExp("(?:^|\\s)"+b[3]+"(?:\\s|$)"));return b},H=function(a,b){var c=a.attributes||{};return(!b[1]||a.nodeName.toLowerCase()===b[1])&&(!b[2]||(c.id||{}).value===b[2])&&(!b[3]||b[3].test((c["class"]||{}).value))},I=function(a){return f.event.special.hover?a:a.replace(B,"mouseenter$1 mouseleave$1")};
f.event={add:function(a,c,d,e,g){var h,i,j,k,l,m,n,o,p,q,r,s;if(!(a.nodeType===3||a.nodeType===8||!c||!d||!(h=f._data(a)))){d.handler&&(p=d,d=p.handler),d.guid||(d.guid=f.guid++),j=h.events,j||(h.events=j={}),i=h.handle,i||(h.handle=i=function(a){return typeof f!="undefined"&&(!a||f.event.triggered!==a.type)?f.event.dispatch.apply(i.elem,arguments):b},i.elem=a),c=f.trim(I(c)).split(" ");for(k=0;k<c.length;k++){l=A.exec(c[k])||[],m=l[1],n=(l[2]||"").split(".").sort(),s=f.event.special[m]||{},m=(g?s.delegateType:s.bindType)||m,s=f.event.special[m]||{},o=f.extend({type:m,origType:l[1],data:e,handler:d,guid:d.guid,selector:g,quick:G(g),namespace:n.join(".")},p),r=j[m];if(!r){r=j[m]=[],r.delegateCount=0;if(!s.setup||s.setup.call(a,e,n,i)===!1)a.addEventListener?a.addEventListener(m,i,!1):a.attachEvent&&a.attachEvent("on"+m,i)}s.add&&(s.add.call(a,o),o.handler.guid||(o.handler.guid=d.guid)),g?r.splice(r.delegateCount++,0,o):r.push(o),f.event.global[m]=!0}a=null}},global:{},remove:function(a,b,c,d,e){var g=f.hasData(a)&&f._data(a),h,i,j,k,l,m,n,o,p,q,r,s;if(!!g&&!!(o=g.events)){b=f.trim(I(b||"")).split(" ");for(h=0;h<b.length;h++){i=A.exec(b[h])||[],j=k=i[1],l=i[2];if(!j){for(j in o)f.event.remove(a,j+b[h],c,d,!0);continue}p=f.event.special[j]||{},j=(d?p.delegateType:p.bindType)||j,r=o[j]||[],m=r.length,l=l?new RegExp("(^|\\.)"+l.split(".").sort().join("\\.(?:.*\\.)?")+"(\\.|$)"):null;for(n=0;n<r.length;n++)s=r[n],(e||k===s.origType)&&(!c||c.guid===s.guid)&&(!l||l.test(s.namespace))&&(!d||d===s.selector||d==="**"&&s.selector)&&(r.splice(n--,1),s.selector&&r.delegateCount--,p.remove&&p.remove.call(a,s));r.length===0&&m!==r.length&&((!p.teardown||p.teardown.call(a,l)===!1)&&f.removeEvent(a,j,g.handle),delete o[j])}f.isEmptyObject(o)&&(q=g.handle,q&&(q.elem=null),f.removeData(a,["events","handle"],!0))}},customEvent:{getData:!0,setData:!0,changeData:!0},trigger:function(c,d,e,g){if(!e||e.nodeType!==3&&e.nodeType!==8){var h=c.type||c,i=[],j,k,l,m,n,o,p,q,r,s;if(E.test(h+f.event.triggered))return;h.indexOf("!")>=0&&(h=h.slice(0,-1),k=!0),h.indexOf(".")>=0&&(i=h.split("."),h=i.shift(),i.sort());if((!e||f.event.customEvent[h])&&!f.event.global[h])return;c=typeof c=="object"?c[f.expando]?c:new f.Event(h,c):new f.Event(h),c.type=h,c.isTrigger=!0,c.exclusive=k,c.namespace=i.join("."),c.namespace_re=c.namespace?new RegExp("(^|\\.)"+i.join("\\.(?:.*\\.)?")+"(\\.|$)"):null,o=h.indexOf(":")<0?"on"+h:"";if(!e){j=f.cache;for(l in j)j[l].events&&j[l].events[h]&&f.event.trigger(c,d,j[l].handle.elem,!0);return}c.result=b,c.target||(c.target=e),d=d!=null?f.makeArray(d):[],d.unshift(c),p=f.event.special[h]||{};if(p.trigger&&p.trigger.apply(e,d)===!1)return;r=[[e,p.bindType||h]];if(!g&&!p.noBubble&&!f.isWindow(e)){s=p.delegateType||h,m=E.test(s+h)?e:e.parentNode,n=null;for(;m;m=m.parentNode)r.push([m,s]),n=m;n&&n===e.ownerDocument&&r.push([n.defaultView||n.parentWindow||a,s])}for(l=0;l<r.length&&!c.isPropagationStopped();l++)m=r[l][0],c.type=r[l][1],q=(f._data(m,"events")||{})[c.type]&&f._data(m,"handle"),q&&q.apply(m,d),q=o&&m[o],q&&f.acceptData(m)&&q.apply(m,d)===!1&&c.preventDefault();c.type=h,!g&&!c.isDefaultPrevented()&&(!p._default||p._default.apply(e.ownerDocument,d)===!1)&&(h!=="click"||!f.nodeName(e,"a"))&&f.acceptData(e)&&o&&e[h]&&(h!=="focus"&&h!=="blur"||c.target.offsetWidth!==0)&&!f.isWindow(e)&&(n=e[o],n&&(e[o]=null),f.event.triggered=h,e[h](),f.event.triggered=b,n&&(e[o]=n));return c.result}},dispatch:function(c){c=f.event.fix(c||a.event);var d=(f._data(this,"events")||{})[c.type]||[],e=d.delegateCount,g=[].slice.call(arguments,0),h=!c.exclusive&&!c.namespace,i=[],j,k,l,m,n,o,p,q,r,s,t;g[0]=c,c.delegateTarget=this;if(e&&!c.target.disabled&&(!c.button||c.type!=="click")){m=f(this),m.context=this.ownerDocument||this;for(l=c.target;l!=this;l=l.parentNode||this){o={},q=[],m[0]=l;for(j=0;j<e;j++)r=d[j],s=r.selector,o[s]===b&&(o[s]=r.quick?H(l,r.quick):m.is(s)),o[s]&&q.push(r);q.length&&i.push({elem:l,matches:q})}}d.length>e&&i.push({elem:this,matches:d.slice(e)});for(j=0;j<i.length&&!c.isPropagationStopped();j++){p=i[j],c.currentTarget=p.elem;for(k=0;k<p.matches.length&&!c.isImmediatePropagationStopped();k++){r=p.matches[k];if(h||!c.namespace&&!r.namespace||c.namespace_re&&c.namespace_re.test(r.namespace))c.data=r.data,c.handleObj=r,n=((f.event.special[r.origType]||{}).handle||r.handler).apply(p.elem,g),n!==b&&(c.result=n,n===!1&&(c.preventDefault(),c.stopPropagation()))}}return c.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){a.which==null&&(a.which=b.charCode!=null?b.charCode:b.keyCode);return a}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,d){var e,f,g,h=d.button,i=d.fromElement;a.pageX==null&&d.clientX!=null&&(e=a.target.ownerDocument||c,f=e.documentElement,g=e.body,a.pageX=d.clientX+(f&&f.scrollLeft||g&&g.scrollLeft||0)-(f&&f.clientLeft||g&&g.clientLeft||0),a.pageY=d.clientY+(f&&f.scrollTop||g&&g.scrollTop||0)-(f&&f.clientTop||g&&g.clientTop||0)),!a.relatedTarget&&i&&(a.relatedTarget=i===a.target?d.toElement:i),!a.which&&h!==b&&(a.which=h&1?1:h&2?3:h&4?2:0);return a}},fix:function(a){if(a[f.expando])return a;var d,e,g=a,h=f.event.fixHooks[a.type]||{},i=h.props?this.props.concat(h.props):this.props;a=f.Event(g);for(d=i.length;d;)e=i[--d],a[e]=g[e];a.target||(a.target=g.srcElement||c),a.target.nodeType===3&&(a.target=a.target.parentNode),a.metaKey===b&&(a.metaKey=a.ctrlKey);return h.filter?h.filter(a,g):a},special:{ready:{setup:f.bindReady},load:{noBubble:!0},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(a,b,c){f.isWindow(this)&&(this.onbeforeunload=c)},teardown:function(a,b){this.onbeforeunload===b&&(this.onbeforeunload=null)}}},simulate:function(a,b,c,d){var e=f.extend(new f.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?f.event.trigger(e,null,b):f.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},f.event.handle=f.event.dispatch,f.removeEvent=c.removeEventListener?function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)}:function(a,b,c){a.detachEvent&&a.detachEvent("on"+b,c)},f.Event=function(a,b){if(!(this instanceof f.Event))return new f.Event(a,b);a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||a.returnValue===!1||a.getPreventDefault&&a.getPreventDefault()?K:J):this.type=a,b&&f.extend(this,b),this.timeStamp=a&&a.timeStamp||f.now(),this[f.expando]=!0},f.Event.prototype={preventDefault:function(){this.isDefaultPrevented=K;var a=this.originalEvent;!a||(a.preventDefault?a.preventDefault():a.returnValue=!1)},stopPropagation:function(){this.isPropagationStopped=K;var a=this.originalEvent;!a||(a.stopPropagation&&a.stopPropagation(),a.cancelBubble=!0)},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=K,this.stopPropagation()},isDefaultPrevented:J,isPropagationStopped:J,isImmediatePropagationStopped:J},f.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(a,b){f.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c=this,d=a.relatedTarget,e=a.handleObj,g=e.selector,h;if(!d||d!==c&&!f.contains(c,d))a.type=e.origType,h=e.handler.apply(this,arguments),a.type=b;return h}}}),f.support.submitBubbles||(f.event.special.submit={setup:function(){if(f.nodeName(this,"form"))return!1;f.event.add(this,"click._submit keypress._submit",function(a){var c=a.target,d=f.nodeName(c,"input")||f.nodeName(c,"button")?c.form:b;d&&!d._submit_attached&&(f.event.add(d,"submit._submit",function(a){this.parentNode&&!a.isTrigger&&f.event.simulate("submit",this.parentNode,a,!0)}),d._submit_attached=!0)})},teardown:function(){if(f.nodeName(this,"form"))return!1;f.event.remove(this,"._submit")}}),f.support.changeBubbles||(f.event.special.change={setup:function(){if(z.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio")f.event.add(this,"propertychange._change",function(a){a.originalEvent.propertyName==="checked"&&(this._just_changed=!0)}),f.event.add(this,"click._change",function(a){this._just_changed&&!a.isTrigger&&(this._just_changed=!1,f.event.simulate("change",this,a,!0))});return!1}f.event.add(this,"beforeactivate._change",function(a){var b=a.target;z.test(b.nodeName)&&!b._change_attached&&(f.event.add(b,"change._change",function(a){this.parentNode&&!a.isSimulated&&!a.isTrigger&&f.event.simulate("change",this.parentNode,a,!0)}),b._change_attached=!0)})},handle:function(a){var b=a.target;if(this!==b||a.isSimulated||a.isTrigger||b.type!=="radio"&&b.type!=="checkbox")return a.handleObj.handler.apply(this,arguments)},teardown:function(){f.event.remove(this,"._change");return z.test(this.nodeName)}}),f.support.focusinBubbles||f.each({focus:"focusin",blur:"focusout"},function(a,b){var d=0,e=function(a){f.event.simulate(b,a.target,f.event.fix(a),!0)};f.event.special[b]={setup:function(){d++===0&&c.addEventListener(a,e,!0)},teardown:function(){--d===0&&c.removeEventListener(a,e,!0)}}}),f.fn.extend({on:function(a,c,d,e,g){var h,i;if(typeof a=="object"){typeof c!="string"&&(d=c,c=b);for(i in a)this.on(i,c,d,a[i],g);return this}d==null&&e==null?(e=c,d=c=b):e==null&&(typeof c=="string"?(e=d,d=b):(e=d,d=c,c=b));if(e===!1)e=J;else if(!e)return this;g===1&&(h=e,e=function(a){f().off(a);return h.apply(this,arguments)},e.guid=h.guid||(h.guid=f.guid++));return this.each(function(){f.event.add(this,a,e,d,c)})},one:function(a,b,c,d){return this.on.call(this,a,b,c,d,1)},off:function(a,c,d){if(a&&a.preventDefault&&a.handleObj){var e=a.handleObj;f(a.delegateTarget).off(e.namespace?e.type+"."+e.namespace:e.type,e.selector,e.handler);return this}if(typeof a=="object"){for(var g in a)this.off(g,c,a[g]);return this}if(c===!1||typeof c=="function")d=c,c=b;d===!1&&(d=J);return this.each(function(){f.event.remove(this,a,d,c)})},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},live:function(a,b,c){f(this.context).on(a,this.selector,b,c);return this},die:function(a,b){f(this.context).off(a,this.selector||"**",b);return this},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return arguments.length==1?this.off(a,"**"):this.off(b,a,c)},trigger:function(a,b){return this.each(function(){f.event.trigger(a,b,this)})},triggerHandler:function(a,b){if(this[0])return f.event.trigger(a,b,this[0],!0)},toggle:function(a){var b=arguments,c=a.guid||f.guid++,d=0,e=function(c){var e=(f._data(this,"lastToggle"+a.guid)||0)%d;f._data(this,"lastToggle"+a.guid,e+1),c.preventDefault();return b[e].apply(this,arguments)||!1};e.guid=c;while(d<b.length)b[d++].guid=c;return this.click(e)},hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),f.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){f.fn[b]=function(a,c){c==null&&(c=a,a=null);return arguments.length>0?this.on(b,null,a,c):this.trigger(b)},f.attrFn&&(f.attrFn[b]=!0),C.test(b)&&(f.event.fixHooks[b]=f.event.keyHooks),D.test(b)&&(f.event.fixHooks[b]=f.event.mouseHooks)}),function(){function x(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}if(j.nodeType===1){g||(j[d]=c,j.sizset=h);if(typeof b!="string"){if(j===b){k=!0;break}}else if(m.filter(b,[j]).length>0){k=j;break}}j=j[a]}e[h]=k}}}function w(a,b,c,e,f,g){for(var h=0,i=e.length;h<i;h++){var j=e[h];if(j){var k=!1;j=j[a];while(j){if(j[d]===c){k=e[j.sizset];break}j.nodeType===1&&!g&&(j[d]=c,j.sizset=h);if(j.nodeName.toLowerCase()===b){k=j;break}j=j[a]}e[h]=k}}}var a=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g,d="sizcache"+(Math.random()+"").replace(".",""),e=0,g=Object.prototype.toString,h=!1,i=!0,j=/\\/g,k=/\r\n/g,l=/\W/;[0,0].sort(function(){i=!1;return 0});var m=function(b,d,e,f){e=e||[],d=d||c;var h=d;if(d.nodeType!==1&&d.nodeType!==9)return[];if(!b||typeof b!="string")return e;var i,j,k,l,n,q,r,t,u=!0,v=m.isXML(d),w=[],x=b;do{a.exec(""),i=a.exec(x);if(i){x=i[3],w.push(i[1]);if(i[2]){l=i[3];break}}}while(i);if(w.length>1&&p.exec(b))if(w.length===2&&o.relative[w[0]])j=y(w[0]+w[1],d,f);else{j=o.relative[w[0]]?[d]:m(w.shift(),d);while(w.length)b=w.shift(),o.relative[b]&&(b+=w.shift()),j=y(b,j,f)}else{!f&&w.length>1&&d.nodeType===9&&!v&&o.match.ID.test(w[0])&&!o.match.ID.test(w[w.length-1])&&(n=m.find(w.shift(),d,v),d=n.expr?m.filter(n.expr,n.set)[0]:n.set[0]);if(d){n=f?{expr:w.pop(),set:s(f)}:m.find(w.pop(),w.length===1&&(w[0]==="~"||w[0]==="+")&&d.parentNode?d.parentNode:d,v),j=n.expr?m.filter(n.expr,n.set):n.set,w.length>0?k=s(j):u=!1;while(w.length)q=w.pop(),r=q,o.relative[q]?r=w.pop():q="",r==null&&(r=d),o.relative[q](k,r,v)}else k=w=[]}k||(k=j),k||m.error(q||b);if(g.call(k)==="[object Array]")if(!u)e.push.apply(e,k);else if(d&&d.nodeType===1)for(t=0;k[t]!=null;t++)k[t]&&(k[t]===!0||k[t].nodeType===1&&m.contains(d,k[t]))&&e.push(j[t]);else for(t=0;k[t]!=null;t++)k[t]&&k[t].nodeType===1&&e.push(j[t]);else s(k,e);l&&(m(l,h,e,f),m.uniqueSort(e));return e};m.uniqueSort=function(a){if(u){h=i,a.sort(u);if(h)for(var b=1;b<a.length;b++)a[b]===a[b-1]&&a.splice(b--,1)}return a},m.matches=function(a,b){return m(a,null,null,b)},m.matchesSelector=function(a,b){return m(b,null,null,[a]).length>0},m.find=function(a,b,c){var d,e,f,g,h,i;if(!a)return[];for(e=0,f=o.order.length;e<f;e++){h=o.order[e];if(g=o.leftMatch[h].exec(a)){i=g[1],g.splice(1,1);if(i.substr(i.length-1)!=="\\"){g[1]=(g[1]||"").replace(j,""),d=o.find[h](g,b,c);if(d!=null){a=a.replace(o.match[h],"");break}}}}d||(d=typeof b.getElementsByTagName!="undefined"?b.getElementsByTagName("*"):[]);return{set:d,expr:a}},m.filter=function(a,c,d,e){var f,g,h,i,j,k,l,n,p,q=a,r=[],s=c,t=c&&c[0]&&m.isXML(c[0]);while(a&&c.length){for(h in o.filter)if((f=o.leftMatch[h].exec(a))!=null&&f[2]){k=o.filter[h],l=f[1],g=!1,f.splice(1,1);if(l.substr(l.length-1)==="\\")continue;s===r&&(r=[]);if(o.preFilter[h]){f=o.preFilter[h](f,s,d,r,e,t);if(!f)g=i=!0;else if(f===!0)continue}if(f)for(n=0;(j=s[n])!=null;n++)j&&(i=k(j,f,n,s),p=e^i,d&&i!=null?p?g=!0:s[n]=!1:p&&(r.push(j),g=!0));if(i!==b){d||(s=r),a=a.replace(o.match[h],"");if(!g)return[];break}}if(a===q)if(g==null)m.error(a);else break;q=a}return s},m.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)};var n=m.getText=function(a){var b,c,d=a.nodeType,e="";if(d){if(d===1||d===9){if(typeof a.textContent=="string")return a.textContent;if(typeof a.innerText=="string")return a.innerText.replace(k,"");for(a=a.firstChild;a;a=a.nextSibling)e+=n(a)}else if(d===3||d===4)return a.nodeValue}else for(b=0;c=a[b];b++)c.nodeType!==8&&(e+=n(c));return e},o=m.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF\-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF\-]|\\.)+)\s*(?:(\S?=)\s*(?:(['"])(.*?)\3|(#?(?:[\w\u00c0-\uFFFF\-]|\\.)*)|)|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*\-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\(\s*(even|odd|(?:[+\-]?\d+|(?:[+\-]?\d*)?n\s*(?:[+\-]\s*\d+)?))\s*\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^\-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF\-]|\\.)+)(?:\((['"]?)((?:\([^\)]+\)|[^\(\)]*)+)\2\))?/},leftMatch:{},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(a){return a.getAttribute("href")},type:function(a){return a.getAttribute("type")}},relative:{"+":function(a,b){var c=typeof b=="string",d=c&&!l.test(b),e=c&&!d;d&&(b=b.toLowerCase());for(var f=0,g=a.length,h;f<g;f++)if(h=a[f]){while((h=h.previousSibling)&&h.nodeType!==1);a[f]=e||h&&h.nodeName.toLowerCase()===b?h||!1:h===b}e&&m.filter(b,a,!0)},">":function(a,b){var c,d=typeof b=="string",e=0,f=a.length;if(d&&!l.test(b)){b=b.toLowerCase();for(;e<f;e++){c=a[e];if(c){var g=c.parentNode;a[e]=g.nodeName.toLowerCase()===b?g:!1}}}else{for(;e<f;e++)c=a[e],c&&(a[e]=d?c.parentNode:c.parentNode===b);d&&m.filter(b,a,!0)}},"":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("parentNode",b,f,a,d,c)},"~":function(a,b,c){var d,f=e++,g=x;typeof b=="string"&&!l.test(b)&&(b=b.toLowerCase(),d=b,g=w),g("previousSibling",b,f,a,d,c)}},find:{ID:function(a,b,c){if(typeof b.getElementById!="undefined"&&!c){var d=b.getElementById(a[1]);return d&&d.parentNode?[d]:[]}},NAME:function(a,b){if(typeof b.getElementsByName!="undefined"){var c=[],d=b.getElementsByName(a[1]);for(var e=0,f=d.length;e<f;e++)d[e].getAttribute("name")===a[1]&&c.push(d[e]);return c.length===0?null:c}},TAG:function(a,b){if(typeof b.getElementsByTagName!="undefined")return b.getElementsByTagName(a[1])}},preFilter:{CLASS:function(a,b,c,d,e,f){a=" "+a[1].replace(j,"")+" ";if(f)return a;for(var g=0,h;(h=b[g])!=null;g++)h&&(e^(h.className&&(" "+h.className+" ").replace(/[\t\n\r]/g," ").indexOf(a)>=0)?c||d.push(h):c&&(b[g]=!1));return!1},ID:function(a){return a[1].replace(j,"")},TAG:function(a,b){return a[1].replace(j,"").toLowerCase()},CHILD:function(a){if(a[1]==="nth"){a[2]||m.error(a[0]),a[2]=a[2].replace(/^\+|\s*/g,"");var b=/(-?)(\d*)(?:n([+\-]?\d*))?/.exec(a[2]==="even"&&"2n"||a[2]==="odd"&&"2n+1"||!/\D/.test(a[2])&&"0n+"+a[2]||a[2]);a[2]=b[1]+(b[2]||1)-0,a[3]=b[3]-0}else a[2]&&m.error(a[0]);a[0]=e++;return a},ATTR:function(a,b,c,d,e,f){var g=a[1]=a[1].replace(j,"");!f&&o.attrMap[g]&&(a[1]=o.attrMap[g]),a[4]=(a[4]||a[5]||"").replace(j,""),a[2]==="~="&&(a[4]=" "+a[4]+" ");return a},PSEUDO:function(b,c,d,e,f){if(b[1]==="not")if((a.exec(b[3])||"").length>1||/^\w/.test(b[3]))b[3]=m(b[3],null,null,c);else{var g=m.filter(b[3],c,d,!0^f);d||e.push.apply(e,g);return!1}else if(o.match.POS.test(b[0])||o.match.CHILD.test(b[0]))return!0;return b},POS:function(a){a.unshift(!0);return a}},filters:{enabled:function(a){return a.disabled===!1&&a.type!=="hidden"},disabled:function(a){return a.disabled===!0},checked:function(a){return a.checked===!0},selected:function(a){a.parentNode&&a.parentNode.selectedIndex;return a.selected===!0},parent:function(a){return!!a.firstChild},empty:function(a){return!a.firstChild},has:function(a,b,c){return!!m(c[3],a).length},header:function(a){return/h\d/i.test(a.nodeName)},text:function(a){var b=a.getAttribute("type"),c=a.type;return a.nodeName.toLowerCase()==="input"&&"text"===c&&(b===c||b===null)},radio:function(a){return a.nodeName.toLowerCase()==="input"&&"radio"===a.type},checkbox:function(a){return a.nodeName.toLowerCase()==="input"&&"checkbox"===a.type},file:function(a){return a.nodeName.toLowerCase()==="input"&&"file"===a.type},password:function(a){return a.nodeName.toLowerCase()==="input"&&"password"===a.type},submit:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"submit"===a.type},image:function(a){return a.nodeName.toLowerCase()==="input"&&"image"===a.type},reset:function(a){var b=a.nodeName.toLowerCase();return(b==="input"||b==="button")&&"reset"===a.type},button:function(a){var b=a.nodeName.toLowerCase();return b==="input"&&"button"===a.type||b==="button"},input:function(a){return/input|select|textarea|button/i.test(a.nodeName)},focus:function(a){return a===a.ownerDocument.activeElement}},setFilters:{first:function(a,b){return b===0},last:function(a,b,c,d){return b===d.length-1},even:function(a,b){return b%2===0},odd:function(a,b){return b%2===1},lt:function(a,b,c){return b<c[3]-0},gt:function(a,b,c){return b>c[3]-0},nth:function(a,b,c){return c[3]-0===b},eq:function(a,b,c){return c[3]-0===b}},filter:{PSEUDO:function(a,b,c,d){var e=b[1],f=o.filters[e];if(f)return f(a,c,b,d);if(e==="contains")return(a.textContent||a.innerText||n([a])||"").indexOf(b[3])>=0;if(e==="not"){var g=b[3];for(var h=0,i=g.length;h<i;h++)if(g[h]===a)return!1;return!0}m.error(e)},CHILD:function(a,b){var c,e,f,g,h,i,j,k=b[1],l=a;switch(k){case"only":case"first":while(l=l.previousSibling)if(l.nodeType===1)return!1;if(k==="first")return!0;l=a;case"last":while(l=l.nextSibling)if(l.nodeType===1)return!1;return!0;case"nth":c=b[2],e=b[3];if(c===1&&e===0)return!0;f=b[0],g=a.parentNode;if(g&&(g[d]!==f||!a.nodeIndex)){i=0;for(l=g.firstChild;l;l=l.nextSibling)l.nodeType===1&&(l.nodeIndex=++i);g[d]=f}j=a.nodeIndex-e;return c===0?j===0:j%c===0&&j/c>=0}},ID:function(a,b){return a.nodeType===1&&a.getAttribute("id")===b},TAG:function(a,b){return b==="*"&&a.nodeType===1||!!a.nodeName&&a.nodeName.toLowerCase()===b},CLASS:function(a,b){return(" "+(a.className||a.getAttribute("class"))+" ").indexOf(b)>-1},ATTR:function(a,b){var c=b[1],d=m.attr?m.attr(a,c):o.attrHandle[c]?o.attrHandle[c](a):a[c]!=null?a[c]:a.getAttribute(c),e=d+"",f=b[2],g=b[4];return d==null?f==="!=":!f&&m.attr?d!=null:f==="="?e===g:f==="*="?e.indexOf(g)>=0:f==="~="?(" "+e+" ").indexOf(g)>=0:g?f==="!="?e!==g:f==="^="?e.indexOf(g)===0:f==="$="?e.substr(e.length-g.length)===g:f==="|="?e===g||e.substr(0,g.length+1)===g+"-":!1:e&&d!==!1},POS:function(a,b,c,d){var e=b[2],f=o.setFilters[e];if(f)return f(a,c,b,d)}}},p=o.match.POS,q=function(a,b){return"\\"+(b-0+1)};for(var r in o.match)o.match[r]=new RegExp(o.match[r].source+/(?![^\[]*\])(?![^\(]*\))/.source),o.leftMatch[r]=new RegExp(/(^(?:.|\r|\n)*?)/.source+o.match[r].source.replace(/\\(\d+)/g,q));var s=function(a,b){a=Array.prototype.slice.call(a,0);if(b){b.push.apply(b,a);return b}return a};try{Array.prototype.slice.call(c.documentElement.childNodes,0)[0].nodeType}catch(t){s=function(a,b){var c=0,d=b||[];if(g.call(a)==="[object Array]")Array.prototype.push.apply(d,a);else if(typeof a.length=="number")for(var e=a.length;c<e;c++)d.push(a[c]);else for(;a[c];c++)d.push(a[c]);return d}}var u,v;c.documentElement.compareDocumentPosition?u=function(a,b){if(a===b){h=!0;return 0}if(!a.compareDocumentPosition||!b.compareDocumentPosition)return a.compareDocumentPosition?-1:1;return a.compareDocumentPosition(b)&4?-1:1}:(u=function(a,b){if(a===b){h=!0;return 0}if(a.sourceIndex&&b.sourceIndex)return a.sourceIndex-b.sourceIndex;var c,d,e=[],f=[],g=a.parentNode,i=b.parentNode,j=g;if(g===i)return v(a,b);if(!g)return-1;if(!i)return 1;while(j)e.unshift(j),j=j.parentNode;j=i;while(j)f.unshift(j),j=j.parentNode;c=e.length,d=f.length;for(var k=0;k<c&&k<d;k++)if(e[k]!==f[k])return v(e[k],f[k]);return k===c?v(a,f[k],-1):v(e[k],b,1)},v=function(a,b,c){if(a===b)return c;var d=a.nextSibling;while(d){if(d===b)return-1;d=d.nextSibling}return 1}),function(){var a=c.createElement("div"),d="script"+(new Date).getTime(),e=c.documentElement;a.innerHTML="<a name='"+d+"'/>",e.insertBefore(a,e.firstChild),c.getElementById(d)&&(o.find.ID=function(a,c,d){if(typeof c.getElementById!="undefined"&&!d){var e=c.getElementById(a[1]);return e?e.id===a[1]||typeof e.getAttributeNode!="undefined"&&e.getAttributeNode("id").nodeValue===a[1]?[e]:b:[]}},o.filter.ID=function(a,b){var c=typeof a.getAttributeNode!="undefined"&&a.getAttributeNode("id");return a.nodeType===1&&c&&c.nodeValue===b}),e.removeChild(a),e=a=null}(),function(){var a=c.createElement("div");a.appendChild(c.createComment("")),a.getElementsByTagName("*").length>0&&(o.find.TAG=function(a,b){var c=b.getElementsByTagName(a[1]);if(a[1]==="*"){var d=[];for(var e=0;c[e];e++)c[e].nodeType===1&&d.push(c[e]);c=d}return c}),a.innerHTML="<a href='#'></a>",a.firstChild&&typeof a.firstChild.getAttribute!="undefined"&&a.firstChild.getAttribute("href")!=="#"&&(o.attrHandle.href=function(a){return a.getAttribute("href",2)}),a=null}(),c.querySelectorAll&&function(){var a=m,b=c.createElement("div"),d="__sizzle__";b.innerHTML="<p class='TEST'></p>";if(!b.querySelectorAll||b.querySelectorAll(".TEST").length!==0){m=function(b,e,f,g){e=e||c;if(!g&&!m.isXML(e)){var h=/^(\w+$)|^\.([\w\-]+$)|^#([\w\-]+$)/.exec(b);if(h&&(e.nodeType===1||e.nodeType===9)){if(h[1])return s(e.getElementsByTagName(b),f);if(h[2]&&o.find.CLASS&&e.getElementsByClassName)return s(e.getElementsByClassName(h[2]),f)}if(e.nodeType===9){if(b==="body"&&e.body)return s([e.body],f);if(h&&h[3]){var i=e.getElementById(h[3]);if(!i||!i.parentNode)return s([],f);if(i.id===h[3])return s([i],f)}try{return s(e.querySelectorAll(b),f)}catch(j){}}else if(e.nodeType===1&&e.nodeName.toLowerCase()!=="object"){var k=e,l=e.getAttribute("id"),n=l||d,p=e.parentNode,q=/^\s*[+~]/.test(b);l?n=n.replace(/'/g,"\\$&"):e.setAttribute("id",n),q&&p&&(e=e.parentNode);try{if(!q||p)return s(e.querySelectorAll("[id='"+n+"'] "+b),f)}catch(r){}finally{l||k.removeAttribute("id")}}}return a(b,e,f,g)};for(var e in a)m[e]=a[e];b=null}}(),function(){var a=c.documentElement,b=a.matchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||a.msMatchesSelector;if(b){var d=!b.call(c.createElement("div"),"div"),e=!1;try{b.call(c.documentElement,"[test!='']:sizzle")}catch(f){e=!0}m.matchesSelector=function(a,c){c=c.replace(/\=\s*([^'"\]]*)\s*\]/g,"='$1']");if(!m.isXML(a))try{if(e||!o.match.PSEUDO.test(c)&&!/!=/.test(c)){var f=b.call(a,c);if(f||!d||a.document&&a.document.nodeType!==11)return f}}catch(g){}return m(c,null,null,[a]).length>0}}}(),function(){var a=c.createElement("div");a.innerHTML="<div class='test e'></div><div class='test'></div>";if(!!a.getElementsByClassName&&a.getElementsByClassName("e").length!==0){a.lastChild.className="e";if(a.getElementsByClassName("e").length===1)return;o.order.splice(1,0,"CLASS"),o.find.CLASS=function(a,b,c){if(typeof b.getElementsByClassName!="undefined"&&!c)return b.getElementsByClassName(a[1])},a=null}}(),c.documentElement.contains?m.contains=function(a,b){return a!==b&&(a.contains?a.contains(b):!0)}:c.documentElement.compareDocumentPosition?m.contains=function(a,b){return!!(a.compareDocumentPosition(b)&16)}:m.contains=function(){return!1},m.isXML=function(a){var b=(a?a.ownerDocument||a:0).documentElement;return b?b.nodeName!=="HTML":!1};var y=function(a,b,c){var d,e=[],f="",g=b.nodeType?[b]:b;while(d=o.match.PSEUDO.exec(a))f+=d[0],a=a.replace(o.match.PSEUDO,"");a=o.relative[a]?a+"*":a;for(var h=0,i=g.length;h<i;h++)m(a,g[h],e,c);return m.filter(f,e)};m.attr=f.attr,m.selectors.attrMap={},f.find=m,f.expr=m.selectors,f.expr[":"]=f.expr.filters,f.unique=m.uniqueSort,f.text=m.getText,f.isXMLDoc=m.isXML,f.contains=m.contains}();var L=/Until$/,M=/^(?:parents|prevUntil|prevAll)/,N=/,/,O=/^.[^:#\[\.,]*$/,P=Array.prototype.slice,Q=f.expr.match.POS,R={children:!0,contents:!0,next:!0,prev:!0};f.fn.extend({find:function(a){var b=this,c,d;if(typeof a!="string")return f(a).filter(function(){for(c=0,d=b.length;c<d;c++)if(f.contains(b[c],this))return!0});var e=this.pushStack("","find",a),g,h,i;for(c=0,d=this.length;c<d;c++){g=e.length,f.find(a,this[c],e);if(c>0)for(h=g;h<e.length;h++)for(i=0;i<g;i++)if(e[i]===e[h]){e.splice(h--,1);break}}return e},has:function(a){var b=f(a);return this.filter(function(){for(var a=0,c=b.length;a<c;a++)if(f.contains(this,b[a]))return!0})},not:function(a){return this.pushStack(T(this,a,!1),"not",a)},filter:function(a){return this.pushStack(T(this,a,!0),"filter",a)},is:function(a){return!!a&&(typeof a=="string"?Q.test(a)?f(a,this.context).index(this[0])>=0:f.filter(a,this).length>0:this.filter(a).length>0)},closest:function(a,b){var c=[],d,e,g=this[0];if(f.isArray(a)){var h=1;while(g&&g.ownerDocument&&g!==b){for(d=0;d<a.length;d++)f(g).is(a[d])&&c.push({selector:a[d],elem:g,level:h});g=g.parentNode,h++}return c}var i=Q.test(a)||typeof a!="string"?f(a,b||this.context):0;for(d=0,e=this.length;d<e;d++){g=this[d];while(g){if(i?i.index(g)>-1:f.find.matchesSelector(g,a)){c.push(g);break}g=g.parentNode;if(!g||!g.ownerDocument||g===b||g.nodeType===11)break}}c=c.length>1?f.unique(c):c;return this.pushStack(c,"closest",a)},index:function(a){if(!a)return this[0]&&this[0].parentNode?this.prevAll().length:-1;if(typeof a=="string")return f.inArray(this[0],f(a));return f.inArray(a.jquery?a[0]:a,this)},add:function(a,b){var c=typeof a=="string"?f(a,b):f.makeArray(a&&a.nodeType?[a]:a),d=f.merge(this.get(),c);return this.pushStack(S(c[0])||S(d[0])?d:f.unique(d))},andSelf:function(){return this.add(this.prevObject)}}),f.each({parent:function(a){var b=a.parentNode;return b&&b.nodeType!==11?b:null},parents:function(a){return f.dir(a,"parentNode")},parentsUntil:function(a,b,c){return f.dir(a,"parentNode",c)},next:function(a){return f.nth(a,2,"nextSibling")},prev:function(a){return f.nth(a,2,"previousSibling")},nextAll:function(a){return f.dir(a,"nextSibling")},prevAll:function(a){return f.dir(a,"previousSibling")},nextUntil:function(a,b,c){return f.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return f.dir(a,"previousSibling",c)},siblings:function(a){return f.sibling(a.parentNode.firstChild,a)},children:function(a){return f.sibling(a.firstChild)},contents:function(a){return f.nodeName(a,"iframe")?a.contentDocument||a.contentWindow.document:f.makeArray(a.childNodes)}},function(a,b){f.fn[a]=function(c,d){var e=f.map(this,b,c);L.test(a)||(d=c),d&&typeof d=="string"&&(e=f.filter(d,e)),e=this.length>1&&!R[a]?f.unique(e):e,(this.length>1||N.test(d))&&M.test(a)&&(e=e.reverse());return this.pushStack(e,a,P.call(arguments).join(","))}}),f.extend({filter:function(a,b,c){c&&(a=":not("+a+")");return b.length===1?f.find.matchesSelector(b[0],a)?[b[0]]:[]:f.find.matches(a,b)},dir:function(a,c,d){var e=[],g=a[c];while(g&&g.nodeType!==9&&(d===b||g.nodeType!==1||!f(g).is(d)))g.nodeType===1&&e.push(g),g=g[c];return e},nth:function(a,b,c,d){b=b||1;var e=0;for(;a;a=a[c])if(a.nodeType===1&&++e===b)break;return a},sibling:function(a,b){var c=[];for(;a;a=a.nextSibling)a.nodeType===1&&a!==b&&c.push(a);return c}});var V="abbr|article|aside|audio|canvas|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",W=/ jQuery\d+="(?:\d+|null)"/g,X=/^\s+/,Y=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/ig,Z=/<([\w:]+)/,$=/<tbody/i,_=/<|&#?\w+;/,ba=/<(?:script|style)/i,bb=/<(?:script|object|embed|option|style)/i,bc=new RegExp("<(?:"+V+")","i"),bd=/checked\s*(?:[^=]|=\s*.checked.)/i,be=/\/(java|ecma)script/i,bf=/^\s*<!(?:\[CDATA\[|\-\-)/,bg={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},bh=U(c);bg.optgroup=bg.option,bg.tbody=bg.tfoot=bg.colgroup=bg.caption=bg.thead,bg.th=bg.td,f.support.htmlSerialize||(bg._default=[1,"div<div>","</div>"]),f.fn.extend({text:function(a){if(f.isFunction(a))return this.each(function(b){var c=f(this);c.text(a.call(this,b,c.text()))});if(typeof a!="object"&&a!==b)return this.empty().append((this[0]&&this[0].ownerDocument||c).createTextNode(a));return f.text(this)},wrapAll:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapAll(a.call(this,b))});if(this[0]){var b=f(a,this[0].ownerDocument).eq(0).clone(!0);this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstChild&&a.firstChild.nodeType===1)a=a.firstChild;return a}).append(this)}return this},wrapInner:function(a){if(f.isFunction(a))return this.each(function(b){f(this).wrapInner(a.call(this,b))});return this.each(function(){var b=f(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=f.isFunction(a);return this.each(function(c){f(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){f.nodeName(this,"body")||f(this).replaceWith(this.childNodes)}).end()},append:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.appendChild(a)})},prepend:function(){return this.domManip(arguments,!0,function(a){this.nodeType===1&&this.insertBefore(a,this.firstChild)})},before:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this)});if(arguments.length){var a=f.clean(arguments);a.push.apply(a,this.toArray());return this.pushStack(a,"before",arguments)}},after:function(){if(this[0]&&this[0].parentNode)return this.domManip(arguments,!1,function(a){this.parentNode.insertBefore(a,this.nextSibling)});if(arguments.length){var a=this.pushStack(this,"after",arguments);a.push.apply(a,f.clean(arguments));return a}},remove:function(a,b){for(var c=0,d;(d=this[c])!=null;c++)if(!a||f.filter(a,[d]).length)!b&&d.nodeType===1&&(f.cleanData(d.getElementsByTagName("*")),f.cleanData([d])),d.parentNode&&d.parentNode.removeChild(d);return this},empty:function()
{for(var a=0,b;(b=this[a])!=null;a++){b.nodeType===1&&f.cleanData(b.getElementsByTagName("*"));while(b.firstChild)b.removeChild(b.firstChild)}return this},clone:function(a,b){a=a==null?!1:a,b=b==null?a:b;return this.map(function(){return f.clone(this,a,b)})},html:function(a){if(a===b)return this[0]&&this[0].nodeType===1?this[0].innerHTML.replace(W,""):null;if(typeof a=="string"&&!ba.test(a)&&(f.support.leadingWhitespace||!X.test(a))&&!bg[(Z.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(Y,"<$1></$2>");try{for(var c=0,d=this.length;c<d;c++)this[c].nodeType===1&&(f.cleanData(this[c].getElementsByTagName("*")),this[c].innerHTML=a)}catch(e){this.empty().append(a)}}else f.isFunction(a)?this.each(function(b){var c=f(this);c.html(a.call(this,b,c.html()))}):this.empty().append(a);return this},replaceWith:function(a){if(this[0]&&this[0].parentNode){if(f.isFunction(a))return this.each(function(b){var c=f(this),d=c.html();c.replaceWith(a.call(this,b,d))});typeof a!="string"&&(a=f(a).detach());return this.each(function(){var b=this.nextSibling,c=this.parentNode;f(this).remove(),b?f(b).before(a):f(c).append(a)})}return this.length?this.pushStack(f(f.isFunction(a)?a():a),"replaceWith",a):this},detach:function(a){return this.remove(a,!0)},domManip:function(a,c,d){var e,g,h,i,j=a[0],k=[];if(!f.support.checkClone&&arguments.length===3&&typeof j=="string"&&bd.test(j))return this.each(function(){f(this).domManip(a,c,d,!0)});if(f.isFunction(j))return this.each(function(e){var g=f(this);a[0]=j.call(this,e,c?g.html():b),g.domManip(a,c,d)});if(this[0]){i=j&&j.parentNode,f.support.parentNode&&i&&i.nodeType===11&&i.childNodes.length===this.length?e={fragment:i}:e=f.buildFragment(a,this,k),h=e.fragment,h.childNodes.length===1?g=h=h.firstChild:g=h.firstChild;if(g){c=c&&f.nodeName(g,"tr");for(var l=0,m=this.length,n=m-1;l<m;l++)d.call(c?bi(this[l],g):this[l],e.cacheable||m>1&&l<n?f.clone(h,!0,!0):h)}k.length&&f.each(k,bp)}return this}}),f.buildFragment=function(a,b,d){var e,g,h,i,j=a[0];b&&b[0]&&(i=b[0].ownerDocument||b[0]),i.createDocumentFragment||(i=c),a.length===1&&typeof j=="string"&&j.length<512&&i===c&&j.charAt(0)==="<"&&!bb.test(j)&&(f.support.checkClone||!bd.test(j))&&(f.support.html5Clone||!bc.test(j))&&(g=!0,h=f.fragments[j],h&&h!==1&&(e=h)),e||(e=i.createDocumentFragment(),f.clean(a,i,e,d)),g&&(f.fragments[j]=h?e:1);return{fragment:e,cacheable:g}},f.fragments={},f.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){f.fn[a]=function(c){var d=[],e=f(c),g=this.length===1&&this[0].parentNode;if(g&&g.nodeType===11&&g.childNodes.length===1&&e.length===1){e[b](this[0]);return this}for(var h=0,i=e.length;h<i;h++){var j=(h>0?this.clone(!0):this).get();f(e[h])[b](j),d=d.concat(j)}return this.pushStack(d,a,e.selector)}}),f.extend({clone:function(a,b,c){var d,e,g,h=f.support.html5Clone||!bc.test("<"+a.nodeName)?a.cloneNode(!0):bo(a);if((!f.support.noCloneEvent||!f.support.noCloneChecked)&&(a.nodeType===1||a.nodeType===11)&&!f.isXMLDoc(a)){bk(a,h),d=bl(a),e=bl(h);for(g=0;d[g];++g)e[g]&&bk(d[g],e[g])}if(b){bj(a,h);if(c){d=bl(a),e=bl(h);for(g=0;d[g];++g)bj(d[g],e[g])}}d=e=null;return h},clean:function(a,b,d,e){var g;b=b||c,typeof b.createElement=="undefined"&&(b=b.ownerDocument||b[0]&&b[0].ownerDocument||c);var h=[],i;for(var j=0,k;(k=a[j])!=null;j++){typeof k=="number"&&(k+="");if(!k)continue;if(typeof k=="string")if(!_.test(k))k=b.createTextNode(k);else{k=k.replace(Y,"<$1></$2>");var l=(Z.exec(k)||["",""])[1].toLowerCase(),m=bg[l]||bg._default,n=m[0],o=b.createElement("div");b===c?bh.appendChild(o):U(b).appendChild(o),o.innerHTML=m[1]+k+m[2];while(n--)o=o.lastChild;if(!f.support.tbody){var p=$.test(k),q=l==="table"&&!p?o.firstChild&&o.firstChild.childNodes:m[1]==="<table>"&&!p?o.childNodes:[];for(i=q.length-1;i>=0;--i)f.nodeName(q[i],"tbody")&&!q[i].childNodes.length&&q[i].parentNode.removeChild(q[i])}!f.support.leadingWhitespace&&X.test(k)&&o.insertBefore(b.createTextNode(X.exec(k)[0]),o.firstChild),k=o.childNodes}var r;if(!f.support.appendChecked)if(k[0]&&typeof (r=k.length)=="number")for(i=0;i<r;i++)bn(k[i]);else bn(k);k.nodeType?h.push(k):h=f.merge(h,k)}if(d){g=function(a){return!a.type||be.test(a.type)};for(j=0;h[j];j++)if(e&&f.nodeName(h[j],"script")&&(!h[j].type||h[j].type.toLowerCase()==="text/javascript"))e.push(h[j].parentNode?h[j].parentNode.removeChild(h[j]):h[j]);else{if(h[j].nodeType===1){var s=f.grep(h[j].getElementsByTagName("script"),g);h.splice.apply(h,[j+1,0].concat(s))}d.appendChild(h[j])}}return h},cleanData:function(a){var b,c,d=f.cache,e=f.event.special,g=f.support.deleteExpando;for(var h=0,i;(i=a[h])!=null;h++){if(i.nodeName&&f.noData[i.nodeName.toLowerCase()])continue;c=i[f.expando];if(c){b=d[c];if(b&&b.events){for(var j in b.events)e[j]?f.event.remove(i,j):f.removeEvent(i,j,b.handle);b.handle&&(b.handle.elem=null)}g?delete i[f.expando]:i.removeAttribute&&i.removeAttribute(f.expando),delete d[c]}}}});var bq=/alpha\([^)]*\)/i,br=/opacity=([^)]*)/,bs=/([A-Z]|^ms)/g,bt=/^-?\d+(?:px)?$/i,bu=/^-?\d/,bv=/^([\-+])=([\-+.\de]+)/,bw={position:"absolute",visibility:"hidden",display:"block"},bx=["Left","Right"],by=["Top","Bottom"],bz,bA,bB;f.fn.css=function(a,c){if(arguments.length===2&&c===b)return this;return f.access(this,a,c,!0,function(a,c,d){return d!==b?f.style(a,c,d):f.css(a,c)})},f.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=bz(a,"opacity","opacity");return c===""?"1":c}return a.style.opacity}}},cssNumber:{fillOpacity:!0,fontWeight:!0,lineHeight:!0,opacity:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":f.support.cssFloat?"cssFloat":"styleFloat"},style:function(a,c,d,e){if(!!a&&a.nodeType!==3&&a.nodeType!==8&&!!a.style){var g,h,i=f.camelCase(c),j=a.style,k=f.cssHooks[i];c=f.cssProps[i]||i;if(d===b){if(k&&"get"in k&&(g=k.get(a,!1,e))!==b)return g;return j[c]}h=typeof d,h==="string"&&(g=bv.exec(d))&&(d=+(g[1]+1)*+g[2]+parseFloat(f.css(a,c)),h="number");if(d==null||h==="number"&&isNaN(d))return;h==="number"&&!f.cssNumber[i]&&(d+="px");if(!k||!("set"in k)||(d=k.set(a,d))!==b)try{j[c]=d}catch(l){}}},css:function(a,c,d){var e,g;c=f.camelCase(c),g=f.cssHooks[c],c=f.cssProps[c]||c,c==="cssFloat"&&(c="float");if(g&&"get"in g&&(e=g.get(a,!0,d))!==b)return e;if(bz)return bz(a,c)},swap:function(a,b,c){var d={};for(var e in b)d[e]=a.style[e],a.style[e]=b[e];c.call(a);for(e in b)a.style[e]=d[e]}}),f.curCSS=f.css,f.each(["height","width"],function(a,b){f.cssHooks[b]={get:function(a,c,d){var e;if(c){if(a.offsetWidth!==0)return bC(a,b,d);f.swap(a,bw,function(){e=bC(a,b,d)});return e}},set:function(a,b){if(!bt.test(b))return b;b=parseFloat(b);if(b>=0)return b+"px"}}}),f.support.opacity||(f.cssHooks.opacity={get:function(a,b){return br.test((b&&a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100+"":b?"1":""},set:function(a,b){var c=a.style,d=a.currentStyle,e=f.isNumeric(b)?"alpha(opacity="+b*100+")":"",g=d&&d.filter||c.filter||"";c.zoom=1;if(b>=1&&f.trim(g.replace(bq,""))===""){c.removeAttribute("filter");if(d&&!d.filter)return}c.filter=bq.test(g)?g.replace(bq,e):g+" "+e}}),f(function(){f.support.reliableMarginRight||(f.cssHooks.marginRight={get:function(a,b){var c;f.swap(a,{display:"inline-block"},function(){b?c=bz(a,"margin-right","marginRight"):c=a.style.marginRight});return c}})}),c.defaultView&&c.defaultView.getComputedStyle&&(bA=function(a,b){var c,d,e;b=b.replace(bs,"-$1").toLowerCase(),(d=a.ownerDocument.defaultView)&&(e=d.getComputedStyle(a,null))&&(c=e.getPropertyValue(b),c===""&&!f.contains(a.ownerDocument.documentElement,a)&&(c=f.style(a,b)));return c}),c.documentElement.currentStyle&&(bB=function(a,b){var c,d,e,f=a.currentStyle&&a.currentStyle[b],g=a.style;f===null&&g&&(e=g[b])&&(f=e),!bt.test(f)&&bu.test(f)&&(c=g.left,d=a.runtimeStyle&&a.runtimeStyle.left,d&&(a.runtimeStyle.left=a.currentStyle.left),g.left=b==="fontSize"?"1em":f||0,f=g.pixelLeft+"px",g.left=c,d&&(a.runtimeStyle.left=d));return f===""?"auto":f}),bz=bA||bB,f.expr&&f.expr.filters&&(f.expr.filters.hidden=function(a){var b=a.offsetWidth,c=a.offsetHeight;return b===0&&c===0||!f.support.reliableHiddenOffsets&&(a.style&&a.style.display||f.css(a,"display"))==="none"},f.expr.filters.visible=function(a){return!f.expr.filters.hidden(a)});var bD=/%20/g,bE=/\[\]$/,bF=/\r?\n/g,bG=/#.*$/,bH=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,bI=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,bJ=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,bK=/^(?:GET|HEAD)$/,bL=/^\/\//,bM=/\?/,bN=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bO=/^(?:select|textarea)/i,bP=/\s+/,bQ=/([?&])_=[^&]*/,bR=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+))?)?/,bS=f.fn.load,bT={},bU={},bV,bW,bX=["*/"]+["*"];try{bV=e.href}catch(bY){bV=c.createElement("a"),bV.href="",bV=bV.href}bW=bR.exec(bV.toLowerCase())||[],f.fn.extend({load:function(a,c,d){if(typeof a!="string"&&bS)return bS.apply(this,arguments);if(!this.length)return this;var e=a.indexOf(" ");if(e>=0){var g=a.slice(e,a.length);a=a.slice(0,e)}var h="GET";c&&(f.isFunction(c)?(d=c,c=b):typeof c=="object"&&(c=f.param(c,f.ajaxSettings.traditional),h="POST"));var i=this;f.ajax({url:a,type:h,dataType:"html",data:c,complete:function(a,b,c){c=a.responseText,a.isResolved()&&(a.done(function(a){c=a}),i.html(g?f("<div>").append(c.replace(bN,"")).find(g):c)),d&&i.each(d,[c,b,a])}});return this},serialize:function(){return f.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?f.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||bO.test(this.nodeName)||bI.test(this.type))}).map(function(a,b){var c=f(this).val();return c==null?null:f.isArray(c)?f.map(c,function(a,c){return{name:b.name,value:a.replace(bF,"\r\n")}}):{name:b.name,value:c.replace(bF,"\r\n")}}).get()}}),f.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(a,b){f.fn[b]=function(a){return this.on(b,a)}}),f.each(["get","post"],function(a,c){f[c]=function(a,d,e,g){f.isFunction(d)&&(g=g||e,e=d,d=b);return f.ajax({type:c,url:a,data:d,success:e,dataType:g})}}),f.extend({getScript:function(a,c){return f.get(a,b,c,"script")},getJSON:function(a,b,c){return f.get(a,b,c,"json")},ajaxSetup:function(a,b){b?b_(a,f.ajaxSettings):(b=a,a=f.ajaxSettings),b_(a,b);return a},ajaxSettings:{url:bV,isLocal:bJ.test(bW[1]),global:!0,type:"GET",contentType:"application/x-www-form-urlencoded",processData:!0,async:!0,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":bX},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":a.String,"text html":!0,"text json":f.parseJSON,"text xml":f.parseXML},flatOptions:{context:!0,url:!0}},ajaxPrefilter:bZ(bT),ajaxTransport:bZ(bU),ajax:function(a,c){function w(a,c,l,m){if(s!==2){s=2,q&&clearTimeout(q),p=b,n=m||"",v.readyState=a>0?4:0;var o,r,u,w=c,x=l?cb(d,v,l):b,y,z;if(a>=200&&a<300||a===304){if(d.ifModified){if(y=v.getResponseHeader("Last-Modified"))f.lastModified[k]=y;if(z=v.getResponseHeader("Etag"))f.etag[k]=z}if(a===304)w="notmodified",o=!0;else try{r=cc(d,x),w="success",o=!0}catch(A){w="parsererror",u=A}}else{u=w;if(!w||a)w="error",a<0&&(a=0)}v.status=a,v.statusText=""+(c||w),o?h.resolveWith(e,[r,w,v]):h.rejectWith(e,[v,w,u]),v.statusCode(j),j=b,t&&g.trigger("ajax"+(o?"Success":"Error"),[v,d,o?r:u]),i.fireWith(e,[v,w]),t&&(g.trigger("ajaxComplete",[v,d]),--f.active||f.event.trigger("ajaxStop"))}}typeof a=="object"&&(c=a,a=b),c=c||{};var d=f.ajaxSetup({},c),e=d.context||d,g=e!==d&&(e.nodeType||e instanceof f)?f(e):f.event,h=f.Deferred(),i=f.Callbacks("once memory"),j=d.statusCode||{},k,l={},m={},n,o,p,q,r,s=0,t,u,v={readyState:0,setRequestHeader:function(a,b){if(!s){var c=a.toLowerCase();a=m[c]=m[c]||a,l[a]=b}return this},getAllResponseHeaders:function(){return s===2?n:null},getResponseHeader:function(a){var c;if(s===2){if(!o){o={};while(c=bH.exec(n))o[c[1].toLowerCase()]=c[2]}c=o[a.toLowerCase()]}return c===b?null:c},overrideMimeType:function(a){s||(d.mimeType=a);return this},abort:function(a){a=a||"abort",p&&p.abort(a),w(0,a);return this}};h.promise(v),v.success=v.done,v.error=v.fail,v.complete=i.add,v.statusCode=function(a){if(a){var b;if(s<2)for(b in a)j[b]=[j[b],a[b]];else b=a[v.status],v.then(b,b)}return this},d.url=((a||d.url)+"").replace(bG,"").replace(bL,bW[1]+"//"),d.dataTypes=f.trim(d.dataType||"*").toLowerCase().split(bP),d.crossDomain==null&&(r=bR.exec(d.url.toLowerCase()),d.crossDomain=!(!r||r[1]==bW[1]&&r[2]==bW[2]&&(r[3]||(r[1]==="http:"?80:443))==(bW[3]||(bW[1]==="http:"?80:443)))),d.data&&d.processData&&typeof d.data!="string"&&(d.data=f.param(d.data,d.traditional)),b$(bT,d,c,v);if(s===2)return!1;t=d.global,d.type=d.type.toUpperCase(),d.hasContent=!bK.test(d.type),t&&f.active++===0&&f.event.trigger("ajaxStart");if(!d.hasContent){d.data&&(d.url+=(bM.test(d.url)?"&":"?")+d.data,delete d.data),k=d.url;if(d.cache===!1){var x=f.now(),y=d.url.replace(bQ,"$1_="+x);d.url=y+(y===d.url?(bM.test(d.url)?"&":"?")+"_="+x:"")}}(d.data&&d.hasContent&&d.contentType!==!1||c.contentType)&&v.setRequestHeader("Content-Type",d.contentType),d.ifModified&&(k=k||d.url,f.lastModified[k]&&v.setRequestHeader("If-Modified-Since",f.lastModified[k]),f.etag[k]&&v.setRequestHeader("If-None-Match",f.etag[k])),v.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+(d.dataTypes[0]!=="*"?", "+bX+"; q=0.01":""):d.accepts["*"]);for(u in d.headers)v.setRequestHeader(u,d.headers[u]);if(d.beforeSend&&(d.beforeSend.call(e,v,d)===!1||s===2)){v.abort();return!1}for(u in{success:1,error:1,complete:1})v[u](d[u]);p=b$(bU,d,c,v);if(!p)w(-1,"No Transport");else{v.readyState=1,t&&g.trigger("ajaxSend",[v,d]),d.async&&d.timeout>0&&(q=setTimeout(function(){v.abort("timeout")},d.timeout));try{s=1,p.send(l,w)}catch(z){if(s<2)w(-1,z);else throw z}}return v},param:function(a,c){var d=[],e=function(a,b){b=f.isFunction(b)?b():b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};c===b&&(c=f.ajaxSettings.traditional);if(f.isArray(a)||a.jquery&&!f.isPlainObject(a))f.each(a,function(){e(this.name,this.value)});else for(var g in a)ca(g,a[g],c,e);return d.join("&").replace(bD,"+")}}),f.extend({active:0,lastModified:{},etag:{}});var cd=f.now(),ce=/(\=)\?(&|$)|\?\?/i;f.ajaxSetup({jsonp:"callback",jsonpCallback:function(){return f.expando+"_"+cd++}}),f.ajaxPrefilter("json jsonp",function(b,c,d){var e=b.contentType==="application/x-www-form-urlencoded"&&typeof b.data=="string";if(b.dataTypes[0]==="jsonp"||b.jsonp!==!1&&(ce.test(b.url)||e&&ce.test(b.data))){var g,h=b.jsonpCallback=f.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,i=a[h],j=b.url,k=b.data,l="$1"+h+"$2";b.jsonp!==!1&&(j=j.replace(ce,l),b.url===j&&(e&&(k=k.replace(ce,l)),b.data===k&&(j+=(/\?/.test(j)?"&":"?")+b.jsonp+"="+h))),b.url=j,b.data=k,a[h]=function(a){g=[a]},d.always(function(){a[h]=i,g&&f.isFunction(i)&&a[h](g[0])}),b.converters["script json"]=function(){g||f.error(h+" was not called");return g[0]},b.dataTypes[0]="json";return"script"}}),f.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(a){f.globalEval(a);return a}}}),f.ajaxPrefilter("script",function(a){a.cache===b&&(a.cache=!1),a.crossDomain&&(a.type="GET",a.global=!1)}),f.ajaxTransport("script",function(a){if(a.crossDomain){var d,e=c.head||c.getElementsByTagName("head")[0]||c.documentElement;return{send:function(f,g){d=c.createElement("script"),d.async="async",a.scriptCharset&&(d.charset=a.scriptCharset),d.src=a.url,d.onload=d.onreadystatechange=function(a,c){if(c||!d.readyState||/loaded|complete/.test(d.readyState))d.onload=d.onreadystatechange=null,e&&d.parentNode&&e.removeChild(d),d=b,c||g(200,"success")},e.insertBefore(d,e.firstChild)},abort:function(){d&&d.onload(0,1)}}}});var cf=a.ActiveXObject?function(){for(var a in ch)ch[a](0,1)}:!1,cg=0,ch;f.ajaxSettings.xhr=a.ActiveXObject?function(){return!this.isLocal&&ci()||cj()}:ci,function(a){f.extend(f.support,{ajax:!!a,cors:!!a&&"withCredentials"in a})}(f.ajaxSettings.xhr()),f.support.ajax&&f.ajaxTransport(function(c){if(!c.crossDomain||f.support.cors){var d;return{send:function(e,g){var h=c.xhr(),i,j;c.username?h.open(c.type,c.url,c.async,c.username,c.password):h.open(c.type,c.url,c.async);if(c.xhrFields)for(j in c.xhrFields)h[j]=c.xhrFields[j];c.mimeType&&h.overrideMimeType&&h.overrideMimeType(c.mimeType),!c.crossDomain&&!e["X-Requested-With"]&&(e["X-Requested-With"]="XMLHttpRequest");try{for(j in e)h.setRequestHeader(j,e[j])}catch(k){}h.send(c.hasContent&&c.data||null),d=function(a,e){var j,k,l,m,n;try{if(d&&(e||h.readyState===4)){d=b,i&&(h.onreadystatechange=f.noop,cf&&delete ch[i]);if(e)h.readyState!==4&&h.abort();else{j=h.status,l=h.getAllResponseHeaders(),m={},n=h.responseXML,n&&n.documentElement&&(m.xml=n),m.text=h.responseText;try{k=h.statusText}catch(o){k=""}!j&&c.isLocal&&!c.crossDomain?j=m.text?200:404:j===1223&&(j=204)}}}catch(p){e||g(-1,p)}m&&g(j,k,m,l)},!c.async||h.readyState===4?d():(i=++cg,cf&&(ch||(ch={},f(a).unload(cf)),ch[i]=d),h.onreadystatechange=d)},abort:function(){d&&d(0,1)}}}});var ck={},cl,cm,cn=/^(?:toggle|show|hide)$/,co=/^([+\-]=)?([\d+.\-]+)([a-z%]*)$/i,cp,cq=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]],cr;f.fn.extend({show:function(a,b,c){var d,e;if(a||a===0)return this.animate(cu("show",3),a,b,c);for(var g=0,h=this.length;g<h;g++)d=this[g],d.style&&(e=d.style.display,!f._data(d,"olddisplay")&&e==="none"&&(e=d.style.display=""),e===""&&f.css(d,"display")==="none"&&f._data(d,"olddisplay",cv(d.nodeName)));for(g=0;g<h;g++){d=this[g];if(d.style){e=d.style.display;if(e===""||e==="none")d.style.display=f._data(d,"olddisplay")||""}}return this},hide:function(a,b,c){if(a||a===0)return this.animate(cu("hide",3),a,b,c);var d,e,g=0,h=this.length;for(;g<h;g++)d=this[g],d.style&&(e=f.css(d,"display"),e!=="none"&&!f._data(d,"olddisplay")&&f._data(d,"olddisplay",e));for(g=0;g<h;g++)this[g].style&&(this[g].style.display="none");return this},_toggle:f.fn.toggle,toggle:function(a,b,c){var d=typeof a=="boolean";f.isFunction(a)&&f.isFunction(b)?this._toggle.apply(this,arguments):a==null||d?this.each(function(){var b=d?a:f(this).is(":hidden");f(this)[b?"show":"hide"]()}):this.animate(cu("toggle",3),a,b,c);return this},fadeTo:function(a,b,c,d){return this.filter(":hidden").css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){function g(){e.queue===!1&&f._mark(this);var b=f.extend({},e),c=this.nodeType===1,d=c&&f(this).is(":hidden"),g,h,i,j,k,l,m,n,o;b.animatedProperties={};for(i in a){g=f.camelCase(i),i!==g&&(a[g]=a[i],delete a[i]),h=a[g],f.isArray(h)?(b.animatedProperties[g]=h[1],h=a[g]=h[0]):b.animatedProperties[g]=b.specialEasing&&b.specialEasing[g]||b.easing||"swing";if(h==="hide"&&d||h==="show"&&!d)return b.complete.call(this);c&&(g==="height"||g==="width")&&(b.overflow=[this.style.overflow,this.style.overflowX,this.style.overflowY],f.css(this,"display")==="inline"&&f.css(this,"float")==="none"&&(!f.support.inlineBlockNeedsLayout||cv(this.nodeName)==="inline"?this.style.display="inline-block":this.style.zoom=1))}b.overflow!=null&&(this.style.overflow="hidden");for(i in a)j=new f.fx(this,b,i),h=a[i],cn.test(h)?(o=f._data(this,"toggle"+i)||(h==="toggle"?d?"show":"hide":0),o?(f._data(this,"toggle"+i,o==="show"?"hide":"show"),j[o]()):j[h]()):(k=co.exec(h),l=j.cur(),k?(m=parseFloat(k[2]),n=k[3]||(f.cssNumber[i]?"":"px"),n!=="px"&&(f.style(this,i,(m||1)+n),l=(m||1)/j.cur()*l,f.style(this,i,l+n)),k[1]&&(m=(k[1]==="-="?-1:1)*m+l),j.custom(l,m,n)):j.custom(l,h,""));return!0}var e=f.speed(b,c,d);if(f.isEmptyObject(a))return this.each(e.complete,[!1]);a=f.extend({},a);return e.queue===!1?this.each(g):this.queue(e.queue,g)},stop:function(a,c,d){typeof a!="string"&&(d=c,c=a,a=b),c&&a!==!1&&this.queue(a||"fx",[]);return this.each(function(){function h(a,b,c){var e=b[c];f.removeData(a,c,!0),e.stop(d)}var b,c=!1,e=f.timers,g=f._data(this);d||f._unmark(!0,this);if(a==null)for(b in g)g[b]&&g[b].stop&&b.indexOf(".run")===b.length-4&&h(this,g,b);else g[b=a+".run"]&&g[b].stop&&h(this,g,b);for(b=e.length;b--;)e[b].elem===this&&(a==null||e[b].queue===a)&&(d?e[b](!0):e[b].saveState(),c=!0,e.splice(b,1));(!d||!c)&&f.dequeue(this,a)})}}),f.each({slideDown:cu("show",1),slideUp:cu("hide",1),slideToggle:cu("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){f.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),f.extend({speed:function(a,b,c){var d=a&&typeof a=="object"?f.extend({},a):{complete:c||!c&&b||f.isFunction(a)&&a,duration:a,easing:c&&b||b&&!f.isFunction(b)&&b};d.duration=f.fx.off?0:typeof d.duration=="number"?d.duration:d.duration in f.fx.speeds?f.fx.speeds[d.duration]:f.fx.speeds._default;if(d.queue==null||d.queue===!0)d.queue="fx";d.old=d.complete,d.complete=function(a){f.isFunction(d.old)&&d.old.call(this),d.queue?f.dequeue(this,d.queue):a!==!1&&f._unmark(this)};return d},easing:{linear:function(a,b,c,d){return c+d*a},swing:function(a,b,c,d){return(-Math.cos(a*Math.PI)/2+.5)*d+c}},timers:[],fx:function(a,b,c){this.options=b,this.elem=a,this.prop=c,b.orig=b.orig||{}}}),f.fx.prototype={update:function(){this.options.step&&this.options.step.call(this.elem,this.now,this),(f.fx.step[this.prop]||f.fx.step._default)(this)},cur:function(){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null))return this.elem[this.prop];var a,b=f.css(this.elem,this.prop);return isNaN(a=parseFloat(b))?!b||b==="auto"?0:b:a},custom:function(a,c,d){function h(a){return e.step(a)}var e=this,g=f.fx;this.startTime=cr||cs(),this.end=c,this.now=this.start=a,this.pos=this.state=0,this.unit=d||this.unit||(f.cssNumber[this.prop]?"":"px"),h.queue=this.options.queue,h.elem=this.elem,h.saveState=function(){e.options.hide&&f._data(e.elem,"fxshow"+e.prop)===b&&f._data(e.elem,"fxshow"+e.prop,e.start)},h()&&f.timers.push(h)&&!cp&&(cp=setInterval(g.tick,g.interval))},show:function(){var a=f._data(this.elem,"fxshow"+this.prop);this.options.orig[this.prop]=a||f.style(this.elem,this.prop),this.options.show=!0,a!==b?this.custom(this.cur(),a):this.custom(this.prop==="width"||this.prop==="height"?1:0,this.cur()),f(this.elem).show()},hide:function(){this.options.orig[this.prop]=f._data(this.elem,"fxshow"+this.prop)||f.style(this.elem,this.prop),this.options.hide=!0,this.custom(this.cur(),0)},step:function(a){var b,c,d,e=cr||cs(),g=!0,h=this.elem,i=this.options;if(a||e>=i.duration+this.startTime){this.now=this.end,this.pos=this.state=1,this.update(),i.animatedProperties[this.prop]=!0;for(b in i.animatedProperties)i.animatedProperties[b]!==!0&&(g=!1);if(g){i.overflow!=null&&!f.support.shrinkWrapBlocks&&f.each(["","X","Y"],function(a,b){h.style["overflow"+b]=i.overflow[a]}),i.hide&&f(h).hide();if(i.hide||i.show)for(b in i.animatedProperties)f.style(h,b,i.orig[b]),f.removeData(h,"fxshow"+b,!0),f.removeData(h,"toggle"+b,!0);d=i.complete,d&&(i.complete=!1,d.call(h))}return!1}i.duration==Infinity?this.now=e:(c=e-this.startTime,this.state=c/i.duration,this.pos=f.easing[i.animatedProperties[this.prop]](this.state,c,0,1,i.duration),this.now=this.start+(this.end-this.start)*this.pos),this.update();return!0}},f.extend(f.fx,{tick:function(){var a,b=f.timers,c=0;for(;c<b.length;c++)a=b[c],!a()&&b[c]===a&&b.splice(c--,1);b.length||f.fx.stop()},interval:13,stop:function(){clearInterval(cp),cp=null},speeds:{slow:600,fast:200,_default:400},step:{opacity:function(a){f.style(a.elem,"opacity",a.now)},_default:function(a){a.elem.style&&a.elem.style[a.prop]!=null?a.elem.style[a.prop]=a.now+a.unit:a.elem[a.prop]=a.now}}}),f.each(["width","height"],function(a,b){f.fx.step[b]=function(a){f.style(a.elem,b,Math.max(0,a.now)+a.unit)}}),f.expr&&f.expr.filters&&(f.expr.filters.animated=function(a){return f.grep(f.timers,function(b){return a===b.elem}).length});var cw=/^t(?:able|d|h)$/i,cx=/^(?:body|html)$/i;"getBoundingClientRect"in c.documentElement?f.fn.offset=function(a){var b=this[0],c;if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);try{c=b.getBoundingClientRect()}catch(d){}var e=b.ownerDocument,g=e.documentElement;if(!c||!f.contains(g,b))return c?{top:c.top,left:c.left}:{top:0,left:0};var h=e.body,i=cy(e),j=g.clientTop||h.clientTop||0,k=g.clientLeft||h.clientLeft||0,l=i.pageYOffset||f.support.boxModel&&g.scrollTop||h.scrollTop,m=i.pageXOffset||f.support.boxModel&&g.scrollLeft||h.scrollLeft,n=c.top+l-j,o=c.left+m-k;return{top:n,left:o}}:f.fn.offset=function(a){var b=this[0];if(a)return this.each(function(b){f.offset.setOffset(this,a,b)});if(!b||!b.ownerDocument)return null;if(b===b.ownerDocument.body)return f.offset.bodyOffset(b);var c,d=b.offsetParent,e=b,g=b.ownerDocument,h=g.documentElement,i=g.body,j=g.defaultView,k=j?j.getComputedStyle(b,null):b.currentStyle,l=b.offsetTop,m=b.offsetLeft;while((b=b.parentNode)&&b!==i&&b!==h){if(f.support.fixedPosition&&k.position==="fixed")break;c=j?j.getComputedStyle(b,null):b.currentStyle,l-=b.scrollTop,m-=b.scrollLeft,b===d&&(l+=b.offsetTop,m+=b.offsetLeft,f.support.doesNotAddBorder&&(!f.support.doesAddBorderForTableAndCells||!cw.test(b.nodeName))&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),e=d,d=b.offsetParent),f.support.subtractsBorderForOverflowNotVisible&&c.overflow!=="visible"&&(l+=parseFloat(c.borderTopWidth)||0,m+=parseFloat(c.borderLeftWidth)||0),k=c}if(k.position==="relative"||k.position==="static")l+=i.offsetTop,m+=i.offsetLeft;f.support.fixedPosition&&k.position==="fixed"&&(l+=Math.max(h.scrollTop,i.scrollTop),m+=Math.max(h.scrollLeft,i.scrollLeft));return{top:l,left:m}},f.offset={bodyOffset:function(a){var b=a.offsetTop,c=a.offsetLeft;f.support.doesNotIncludeMarginInBodyOffset&&(b+=parseFloat(f.css(a,"marginTop"))||0,c+=parseFloat(f.css(a,"marginLeft"))||0);return{top:b,left:c}},setOffset:function(a,b,c){var d=f.css(a,"position");d==="static"&&(a.style.position="relative");var e=f(a),g=e.offset(),h=f.css(a,"top"),i=f.css(a,"left"),j=(d==="absolute"||d==="fixed")&&f.inArray("auto",[h,i])>-1,k={},l={},m,n;j?(l=e.position(),m=l.top,n=l.left):(m=parseFloat(h)||0,n=parseFloat(i)||0),f.isFunction(b)&&(b=b.call(a,c,g)),b.top!=null&&(k.top=b.top-g.top+m),b.left!=null&&(k.left=b.left-g.left+n),"using"in b?b.using.call(a,k):e.css(k)}},f.fn.extend({position:function(){if(!this[0])return null;var a=this[0],b=this.offsetParent(),c=this.offset(),d=cx.test(b[0].nodeName)?{top:0,left:0}:b.offset();c.top-=parseFloat(f.css(a,"marginTop"))||0,c.left-=parseFloat(f.css(a,"marginLeft"))||0,d.top+=parseFloat(f.css(b[0],"borderTopWidth"))||0,d.left+=parseFloat(f.css(b[0],"borderLeftWidth"))||0;return{top:c.top-d.top,left:c.left-d.left}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||c.body;while(a&&!cx.test(a.nodeName)&&f.css(a,"position")==="static")a=a.offsetParent;return a})}}),f.each(["Left","Top"],function(a,c){var d="scroll"+c;f.fn[d]=function(c){var e,g;if(c===b){e=this[0];if(!e)return null;g=cy(e);return g?"pageXOffset"in g?g[a?"pageYOffset":"pageXOffset"]:f.support.boxModel&&g.document.documentElement[d]||g.document.body[d]:e[d]}return this.each(function(){g=cy(this),g?g.scrollTo(a?f(g).scrollLeft():c,a?c:f(g).scrollTop()):this[d]=c})}}),f.each(["Height","Width"],function(a,c){var d=c.toLowerCase();f.fn["inner"+c]=function(){var a=this[0];return a?a.style?parseFloat(f.css(a,d,"padding")):this[d]():null},f.fn["outer"+c]=function(a){var b=this[0];return b?b.style?parseFloat(f.css(b,d,a?"margin":"border")):this[d]():null},f.fn[d]=function(a){var e=this[0];if(!e)return a==null?null:this;if(f.isFunction(a))return this.each(function(b){var c=f(this);c[d](a.call(this,b,c[d]()))});if(f.isWindow(e)){var g=e.document.documentElement["client"+c],h=e.document.body;return e.document.compatMode==="CSS1Compat"&&g||h&&h["client"+c]||g}if(e.nodeType===9)return Math.max(e.documentElement["client"+c],e.body["scroll"+c],e.documentElement["scroll"+c],e.body["offset"+c],e.documentElement["offset"+c]);if(a===b){var i=f.css(e,d),j=parseFloat(i);return f.isNumeric(j)?j:i}return this.css(d,typeof a=="string"?a:a+"px")}}),a.jQuery=a.$=f,typeof define=="function"&&define.amd&&define.amd.jQuery&&define("jquery",[],function(){return f})})(window);

/*
* jQuery Calendar (iCal)
*
* @author Maarten Hus
* @source https://github.com/MrHus/jquery-monthly-ical
*/
(function($){
    var eventdates = {};
    
    $.fn.ical = function(options){
        $.fn.ical.defaults = {
           daynames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], //default short names for the days of the week
           monthnames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
           startdate: new Date(), // The date the calender should take as start point
           eventdates: {},
           startOnSunday: false,
           beforeDay: function (insdate) {},
           beforeMonth: function(insdate) {},
           beforeYear: function(insdate) {}
        };
        
        var options = $.extend({}, $.fn.ical.defaults, options);
          
        return this.each(function(){
            var obj = $(this); //get the object
            eventdates = options.eventdates;
            
            var insdate = options.startdate; //The date that gets used for calculating the month

            createCalendar(obj, insdate);
        });
        
        /**
        * Create the calendar
        */
        function createCalendar(obj, insdate){
            obj.html('');
            createNavigation(obj, insdate);
            createTable(obj); //create table
            addDatesToTable(obj, insdate);
            codabubble();
        };
        
        /**
        * Create the navigation and handle its clicks
        */
        function createNavigation(obj, insdate){

            obj.prepend("<div id='nav-calendar'><div id='year'><span id='year-left-arrow' class='year-buttons'></span><span id='currentyear'>"+ insdate.getFullYear() +"</span><span id='year-right-arrow' class='year-buttons'></span></div>" + "<div id='month'><span id='month-left-arrow'></span><span id='currentmonth'>"+ options.monthnames[insdate.getMonth()] +"</span><span id='month-right-arrow'></span></div></div>");
                      
            $("#year-right-arrow", obj).click(function()
            {

                var month = insdate.getMonth() + 12;

                var presentMonth = insdate.getMonth();
                
                if (month > 11)
                {
                    month = presentMonth;
                    var year = insdate.getFullYear() + 1;
                    options.beforeYear(formatDate(year, month, 1));
                }
                else
                {
                    var year = insdate.getFullYear();    
                }
                
                options.beforeMonth(formatDate(year, month, 1));
                
                date = new Date(year, month, 1);
                createCalendar(obj, date);
            });

            $("#year-left-arrow", obj).click(function()
            {

                var month = insdate.getMonth() - 12;

                var presentMonth = insdate.getMonth();
                
                if (month < 0)
                {
                    month = presentMonth;
                    var year = insdate.getFullYear() - 1;
                    options.beforeYear(formatDate(year, month, 1));
                }
                else
                {
                    var year = insdate.getFullYear();    
                }
                
                options.beforeMonth(formatDate(year, month, 1));
                
                date = new Date(year, month, 1);
                createCalendar(obj, date);
            });

            $("#month-right-arrow", obj).click(function()
            {
                var month = insdate.getMonth() + 1;
                
                if (month > 11)
                {
                    month = 0;
                    var year = insdate.getFullYear() + 1;
                    options.beforeYear(formatDate(year, month, 1));
                }
                else
                {
                    var year = insdate.getFullYear();    
                }
                
                options.beforeMonth(formatDate(year, month, 1));
                
                date = new Date(year, month, 1);
                createCalendar(obj, date);
            }); 
            
            $("#month-left-arrow", obj).click(function()
            {
                var month = insdate.getMonth() - 1;
                
                if (month < 0)
                {
                    month = 11;
                    var year = insdate.getFullYear() - 1;
                    options.beforeYear(formatDate(year, month, 1));
                }
                else
                {
                    var year = insdate.getFullYear();    
                }
                
                options.beforeMonth(formatDate(year, month, 1));
                
                date = new Date(year, month, 1);
                createCalendar(obj, date);
            });         
        };
        
        /**
        * Create the table for the calendar
        */
        function createTable(obj){
            obj.append("<table class='icaltable'><thead><tr id='week-days'></tr></thead></table>"); //add a table 
            
            for (var i = 0; i < options.daynames.length; i++) 
            {
               $(".icaltable tr", obj).append("<th>"+ options.daynames[i] +"</th>"); //add the day header
            }

            $(".icaltable", obj).append("<tr><td colspan='7' id='separator'></td></tr>");
            $(".icaltable", obj).append("<tr><td colspan='7' id='clear-separator'></td></tr>");

        };
        
        function addDatesToTable(obj, insdate){
            var month = insdate.getMonth();
            var year  = insdate.getFullYear();
            
            var days = getDaysInMonth(year, month);
            var first = getFirstDayOfMonth(year, month); // 0 - 6
            var last = getLastDayOfMonth(year, month, days);// 0 - 6 
            
            var afterpadding = 6 - last; // week minus the last day of the month = afterpadding
            
            var firstrow = true;
            
            var startOnSunday = 0;
                        
            if (options.startOnSunday){
                if (first == 6)
                {
                    startOnSunday = -6;
                }
                else
                {
                    startOnSunday = 1;
                }
            }   

            for (var i = 1; i <= days; i++) //each day in month
            {
                if ((first + i - 1 + startOnSunday) % 7 === 0 || firstrow === true ) //add new tr for each new monday our if i is zero
                {
                    $(".icaltable", obj).append("<tr></tr>");
                }
                
                for(var j = 0; j < first + startOnSunday && firstrow; j++) //add pre padding
                {
                    $(".icaltable tr:last", obj).append("<td class = 'padding'></td");
                }
                
                firstrow = false; //no more pre padding
                
                var month = getMonthNumber($("#currentmonth", obj).text());
                var year = $("#currentyear", obj).text();
                
                var formatdate = formatDate(year, month, i);
                
                var jsondates  = getEventDates(formatdate)
                
                if (jsondates.length === 0)
                {
                    options.beforeDay(formatdate);
                    $(".icaltable tr:last", obj).append("<td id = '"+formatdate+"'>"+i+"</td"); //add day
                }
                else
                {
                    var firstEvent = true;
                    for (var k = 0; k < jsondates.length; k++)
                    {
                        var datejson = jsondates[k];
                        options.beforeDay(formatdate);
                        
                        //alert(datejson.title);
                            
                        var str = "<li><span class='title'>"+ datejson.title +"</span><span class='desc'>"+ datejson.desc +"</span></li>"
                        
                        if (firstEvent)
                        {
                            $(".icaltable tr:last", obj).append("<td class='date_has_event " + datejson.className + "' id = '"+ formatdate +"'>"+i+"<div class='events'><ul id ='ul-"+ formatdate +"'>"+ str +"</ul></div></td>"); //add day  
                            firstEvent = false;
                        }
                        else
                        {
                            $("#ul-" + formatdate, obj).append(str);
                        }
                    }
                }
            };
            
            if (options.startOnSunday){
                startOnSunday = 1;
            } 

            for (var i = 0; i < afterpadding - startOnSunday; i++) //add after padding
            {
                $(".icaltable tr:last", obj).append("<td class = 'padding'></td");
            }
            
            highlightToday(obj);
        };
        
        function getMonthNumber(month){
            for (var i = 0; i < options.monthnames.length; i++)
            {
                if (options.monthnames[i] === month)
                {
                    return i;
                }
            }
        };
        
        function getDaysInMonth(year, month){
            return 32 - new Date(year, month, 32).getDate();
        };
        
        function highlightToday(obj){
            var today = new Date();
            today = formatDate(today.getFullYear(), today.getMonth(), today.getDate());
            $("#"+today, obj).addClass("today");
        };
        
        function getEventDates(date){
            
            var results = [];
            
            for (var i = 0;  i < eventdates.length; i++)
            {     
                var evaldate = evaluateEventDate(eventdates[i]["date"], date);
                if (date === evaldate)
                {
                    results.push(eventdates[i]);
                } 
            }
            
            return results;
        };
        
        function evaluateEventDate(eventdate, date){
            var eventdate = eventdate.split('-');
            var date = date.split('-');
            
            if (eventdate[0] === 'yyyy')
            {
                eventdate[0] = date[0];
            }
            
            if (eventdate[1] === 'mm') 
            {
                eventdate[1] = date[1];
            }
            
            if (eventdate[2] === 'dd')
            {
                eventdate[2] = date[2];
            }
            
            return eventdate[0]+'-'+eventdate[1]+'-'+eventdate[2];
        };

        function getLastDayOfMonth(year, month, days){
            var date = new Date(year, month, days);
            if (date.getDay() == 0)//we start on monday!
            {
                return 6;
            }
            else
            {
                return date.getDay() -1;
            }
        };
            
        function getFirstDayOfMonth(year, month){
            var date = new Date(year, month, 1);
            if (date.getDay() == 0) //we start on monday!
            {
                return 6;
            }
            else
            {
                return date.getDay() -1;
            }
        };
        
        function formatDate (year, month, day){    
            return year+'-'+formatMonth(month)+'-'+formatDay(day);
        };
        
        function formatMonth(month){
            month = month + 1;
            
            if (month < 10)
            {
                month = '0'+month;
            }
            
            return month; 
        };
        
        function formatDay(day){
            if (day < 10) 
            {
                day = '0'+day;
            }
            
            return day;
        };
        
        function codabubble(){ //Stefano Verna
            $('.date_has_event').each(function () {
                // options
                var distance = 10;
                var time = 250;
                var hideDelay = 175;

                var hideDelayTimer = null;

                // tracker
                var beingShown = false;
                var shown = false;

                var trigger = $(this);
                var popup = $('.events ul', this).css('opacity', 0);

                // set the mouseover and mouseout on both element
                $([trigger.get(0), popup.get(0)]).mouseover(function () {
                    // stops the hide event if we move from the trigger to the popup element
                    if (hideDelayTimer) clearTimeout(hideDelayTimer);

                    // don't trigger the animation again if we're being shown, or already visible
                    if (beingShown || shown) {
                        return;
                    } else {
                        beingShown = true;

                        // reset position of popup box
                        popup.css({
                            bottom: 5,
                            left: -105,
                            display: 'block' // brings the popup back in to view
                        })

                        // (we're using chaining on the popup) now animate it's opacity and position
                        .animate({
                            bottom: '+=' + distance + 'px',
                            opacity: 1
                        }, time, 'swing', function() {
                            // once the animation is complete, set the tracker variables
                            beingShown = false;
                            shown = true;
                        });
                    }
                }).mouseout(function () {
                    // reset the timer if we get fired again - avoids double animations
                    if (hideDelayTimer) clearTimeout(hideDelayTimer);

                    // store the timer so that it can be cleared in the mouseover if required
                    hideDelayTimer = setTimeout(function () {
                        hideDelayTimer = null;
                        popup.animate({
                            bottom: '-=' + distance + 'px',
                            opacity: 0
                        }, time, 'swing', function () {
                            // once the animate is complete, set the tracker variables
                            shown = false;
                            // hide the popup entirely after the effect (opacity alone doesn't do the job)
                            popup.css('display', 'none');
                        });
                    }, hideDelay);
                });
            });  
        };
    };
    
    $.fn.ical.changeEventDates = function(array){
       eventdates = array;
    };
    
})(jQuery);

/*
 * jQuery UI 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI
 */
(function( $, undefined ) {

// prevent duplicate loading
// this is only a problem because we proxy existing functions
// and we don't want to double proxy them
$.ui = $.ui || {};
if ( $.ui.version ) {
	return;
}

$.extend( $.ui, {
	version: "1.8.20",

	keyCode: {
		ALT: 18,
		BACKSPACE: 8,
		CAPS_LOCK: 20,
		COMMA: 188,
		COMMAND: 91,
		COMMAND_LEFT: 91, // COMMAND
		COMMAND_RIGHT: 93,
		CONTROL: 17,
		DELETE: 46,
		DOWN: 40,
		END: 35,
		ENTER: 13,
		ESCAPE: 27,
		HOME: 36,
		INSERT: 45,
		LEFT: 37,
		MENU: 93, // COMMAND_RIGHT
		NUMPAD_ADD: 107,
		NUMPAD_DECIMAL: 110,
		NUMPAD_DIVIDE: 111,
		NUMPAD_ENTER: 108,
		NUMPAD_MULTIPLY: 106,
		NUMPAD_SUBTRACT: 109,
		PAGE_DOWN: 34,
		PAGE_UP: 33,
		PERIOD: 190,
		RIGHT: 39,
		SHIFT: 16,
		SPACE: 32,
		TAB: 9,
		UP: 38,
		WINDOWS: 91 // COMMAND
	}
});

// plugins
$.fn.extend({
	propAttr: $.fn.prop || $.fn.attr,

	_focus: $.fn.focus,
	focus: function( delay, fn ) {
		return typeof delay === "number" ?
			this.each(function() {
				var elem = this;
				setTimeout(function() {
					$( elem ).focus();
					if ( fn ) {
						fn.call( elem );
					}
				}, delay );
			}) :
			this._focus.apply( this, arguments );
	},

	scrollParent: function() {
		var scrollParent;
		if (($.browser.msie && (/(static|relative)/).test(this.css('position'))) || (/absolute/).test(this.css('position'))) {
			scrollParent = this.parents().filter(function() {
				return (/(relative|absolute|fixed)/).test($.curCSS(this,'position',1)) && (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		} else {
			scrollParent = this.parents().filter(function() {
				return (/(auto|scroll)/).test($.curCSS(this,'overflow',1)+$.curCSS(this,'overflow-y',1)+$.curCSS(this,'overflow-x',1));
			}).eq(0);
		}

		return (/fixed/).test(this.css('position')) || !scrollParent.length ? $(document) : scrollParent;
	},

	zIndex: function( zIndex ) {
		if ( zIndex !== undefined ) {
			return this.css( "zIndex", zIndex );
		}

		if ( this.length ) {
			var elem = $( this[ 0 ] ), position, value;
			while ( elem.length && elem[ 0 ] !== document ) {
				// Ignore z-index if position is set to a value where z-index is ignored by the browser
				// This makes behavior of this function consistent across browsers
				// WebKit always returns auto if the element is positioned
				position = elem.css( "position" );
				if ( position === "absolute" || position === "relative" || position === "fixed" ) {
					// IE returns 0 when zIndex is not specified
					// other browsers return a string
					// we ignore the case of nested elements with an explicit value of 0
					// <div style="z-index: -10;"><div style="z-index: 0;"></div></div>
					value = parseInt( elem.css( "zIndex" ), 10 );
					if ( !isNaN( value ) && value !== 0 ) {
						return value;
					}
				}
				elem = elem.parent();
			}
		}

		return 0;
	},

	disableSelection: function() {
		return this.bind( ( $.support.selectstart ? "selectstart" : "mousedown" ) +
			".ui-disableSelection", function( event ) {
				event.preventDefault();
			});
	},

	enableSelection: function() {
		return this.unbind( ".ui-disableSelection" );
	}
});

$.each( [ "Width", "Height" ], function( i, name ) {
	var side = name === "Width" ? [ "Left", "Right" ] : [ "Top", "Bottom" ],
		type = name.toLowerCase(),
		orig = {
			innerWidth: $.fn.innerWidth,
			innerHeight: $.fn.innerHeight,
			outerWidth: $.fn.outerWidth,
			outerHeight: $.fn.outerHeight
		};

	function reduce( elem, size, border, margin ) {
		$.each( side, function() {
			size -= parseFloat( $.curCSS( elem, "padding" + this, true) ) || 0;
			if ( border ) {
				size -= parseFloat( $.curCSS( elem, "border" + this + "Width", true) ) || 0;
			}
			if ( margin ) {
				size -= parseFloat( $.curCSS( elem, "margin" + this, true) ) || 0;
			}
		});
		return size;
	}

	$.fn[ "inner" + name ] = function( size ) {
		if ( size === undefined ) {
			return orig[ "inner" + name ].call( this );
		}

		return this.each(function() {
			$( this ).css( type, reduce( this, size ) + "px" );
		});
	};

	$.fn[ "outer" + name] = function( size, margin ) {
		if ( typeof size !== "number" ) {
			return orig[ "outer" + name ].call( this, size );
		}

		return this.each(function() {
			$( this).css( type, reduce( this, size, true, margin ) + "px" );
		});
	};
});

// selectors
function focusable( element, isTabIndexNotNaN ) {
	var nodeName = element.nodeName.toLowerCase();
	if ( "area" === nodeName ) {
		var map = element.parentNode,
			mapName = map.name,
			img;
		if ( !element.href || !mapName || map.nodeName.toLowerCase() !== "map" ) {
			return false;
		}
		img = $( "img[usemap=#" + mapName + "]" )[0];
		return !!img && visible( img );
	}
	return ( /input|select|textarea|button|object/.test( nodeName )
		? !element.disabled
		: "a" == nodeName
			? element.href || isTabIndexNotNaN
			: isTabIndexNotNaN)
		// the element and all of its ancestors must be visible
		&& visible( element );
}

function visible( element ) {
	return !$( element ).parents().andSelf().filter(function() {
		return $.curCSS( this, "visibility" ) === "hidden" ||
			$.expr.filters.hidden( this );
	}).length;
}

$.extend( $.expr[ ":" ], {
	data: function( elem, i, match ) {
		return !!$.data( elem, match[ 3 ] );
	},

	focusable: function( element ) {
		return focusable( element, !isNaN( $.attr( element, "tabindex" ) ) );
	},

	tabbable: function( element ) {
		var tabIndex = $.attr( element, "tabindex" ),
			isTabIndexNaN = isNaN( tabIndex );
		return ( isTabIndexNaN || tabIndex >= 0 ) && focusable( element, !isTabIndexNaN );
	}
});

// support
$(function() {
	var body = document.body,
		div = body.appendChild( div = document.createElement( "div" ) );

	// access offsetHeight before setting the style to prevent a layout bug
	// in IE 9 which causes the elemnt to continue to take up space even
	// after it is removed from the DOM (#8026)
	div.offsetHeight;

	$.extend( div.style, {
		minHeight: "100px",
		height: "auto",
		padding: 0,
		borderWidth: 0
	});

	$.support.minHeight = div.offsetHeight === 100;
	$.support.selectstart = "onselectstart" in div;

	// set display to none to avoid a layout bug in IE
	// http://dev.jquery.com/ticket/4014
	body.removeChild( div ).style.display = "none";
});





// deprecated
$.extend( $.ui, {
	// $.ui.plugin is deprecated.  Use the proxy pattern instead.
	plugin: {
		add: function( module, option, set ) {
			var proto = $.ui[ module ].prototype;
			for ( var i in set ) {
				proto.plugins[ i ] = proto.plugins[ i ] || [];
				proto.plugins[ i ].push( [ option, set[ i ] ] );
			}
		},
		call: function( instance, name, args ) {
			var set = instance.plugins[ name ];
			if ( !set || !instance.element[ 0 ].parentNode ) {
				return;
			}
	
			for ( var i = 0; i < set.length; i++ ) {
				if ( instance.options[ set[ i ][ 0 ] ] ) {
					set[ i ][ 1 ].apply( instance.element, args );
				}
			}
		}
	},
	
	// will be deprecated when we switch to jQuery 1.4 - use jQuery.contains()
	contains: function( a, b ) {
		return document.compareDocumentPosition ?
			a.compareDocumentPosition( b ) & 16 :
			a !== b && a.contains( b );
	},
	
	// only used by resizable
	hasScroll: function( el, a ) {
	
		//If overflow is hidden, the element might have extra content, but the user wants to hide it
		if ( $( el ).css( "overflow" ) === "hidden") {
			return false;
		}
	
		var scroll = ( a && a === "left" ) ? "scrollLeft" : "scrollTop",
			has = false;
	
		if ( el[ scroll ] > 0 ) {
			return true;
		}
	
		// TODO: determine which cases actually cause this to happen
		// if the element doesn't have the scroll set, see if it's possible to
		// set the scroll
		el[ scroll ] = 1;
		has = ( el[ scroll ] > 0 );
		el[ scroll ] = 0;
		return has;
	},
	
	// these are odd functions, fix the API or move into individual plugins
	isOverAxis: function( x, reference, size ) {
		//Determines when x coordinate is over "b" element axis
		return ( x > reference ) && ( x < ( reference + size ) );
	},
	isOver: function( y, x, top, left, height, width ) {
		//Determines when x, y coordinates is over "b" element
		return $.ui.isOverAxis( y, top, height ) && $.ui.isOverAxis( x, left, width );
	}
});

})( jQuery );
/*!
 * jQuery UI Widget 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Widget
 */
(function( $, undefined ) {

// jQuery 1.4+
if ( $.cleanData ) {
	var _cleanData = $.cleanData;
	$.cleanData = function( elems ) {
		for ( var i = 0, elem; (elem = elems[i]) != null; i++ ) {
			try {
				$( elem ).triggerHandler( "remove" );
			// http://bugs.jquery.com/ticket/8235
			} catch( e ) {}
		}
		_cleanData( elems );
	};
} else {
	var _remove = $.fn.remove;
	$.fn.remove = function( selector, keepData ) {
		return this.each(function() {
			if ( !keepData ) {
				if ( !selector || $.filter( selector, [ this ] ).length ) {
					$( "*", this ).add( [ this ] ).each(function() {
						try {
							$( this ).triggerHandler( "remove" );
						// http://bugs.jquery.com/ticket/8235
						} catch( e ) {}
					});
				}
			}
			return _remove.call( $(this), selector, keepData );
		});
	};
}

$.widget = function( name, base, prototype ) {
	var namespace = name.split( "." )[ 0 ],
		fullName;
	name = name.split( "." )[ 1 ];
	fullName = namespace + "-" + name;

	if ( !prototype ) {
		prototype = base;
		base = $.Widget;
	}

	// create selector for plugin
	$.expr[ ":" ][ fullName ] = function( elem ) {
		return !!$.data( elem, name );
	};

	$[ namespace ] = $[ namespace ] || {};
	$[ namespace ][ name ] = function( options, element ) {
		// allow instantiation without initializing for simple inheritance
		if ( arguments.length ) {
			this._createWidget( options, element );
		}
	};

	var basePrototype = new base();
	// we need to make the options hash a property directly on the new instance
	// otherwise we'll modify the options hash on the prototype that we're
	// inheriting from
//	$.each( basePrototype, function( key, val ) {
//		if ( $.isPlainObject(val) ) {
//			basePrototype[ key ] = $.extend( {}, val );
//		}
//	});
	basePrototype.options = $.extend( true, {}, basePrototype.options );
	$[ namespace ][ name ].prototype = $.extend( true, basePrototype, {
		namespace: namespace,
		widgetName: name,
		widgetEventPrefix: $[ namespace ][ name ].prototype.widgetEventPrefix || name,
		widgetBaseClass: fullName
	}, prototype );

	$.widget.bridge( name, $[ namespace ][ name ] );
};

$.widget.bridge = function( name, object ) {
	$.fn[ name ] = function( options ) {
		var isMethodCall = typeof options === "string",
			args = Array.prototype.slice.call( arguments, 1 ),
			returnValue = this;

		// allow multiple hashes to be passed on init
		options = !isMethodCall && args.length ?
			$.extend.apply( null, [ true, options ].concat(args) ) :
			options;

		// prevent calls to internal methods
		if ( isMethodCall && options.charAt( 0 ) === "_" ) {
			return returnValue;
		}

		if ( isMethodCall ) {
			this.each(function() {
				var instance = $.data( this, name ),
					methodValue = instance && $.isFunction( instance[options] ) ?
						instance[ options ].apply( instance, args ) :
						instance;
				// TODO: add this back in 1.9 and use $.error() (see #5972)
//				if ( !instance ) {
//					throw "cannot call methods on " + name + " prior to initialization; " +
//						"attempted to call method '" + options + "'";
//				}
//				if ( !$.isFunction( instance[options] ) ) {
//					throw "no such method '" + options + "' for " + name + " widget instance";
//				}
//				var methodValue = instance[ options ].apply( instance, args );
				if ( methodValue !== instance && methodValue !== undefined ) {
					returnValue = methodValue;
					return false;
				}
			});
		} else {
			this.each(function() {
				var instance = $.data( this, name );
				if ( instance ) {
					instance.option( options || {} )._init();
				} else {
					$.data( this, name, new object( options, this ) );
				}
			});
		}

		return returnValue;
	};
};

$.Widget = function( options, element ) {
	// allow instantiation without initializing for simple inheritance
	if ( arguments.length ) {
		this._createWidget( options, element );
	}
};

$.Widget.prototype = {
	widgetName: "widget",
	widgetEventPrefix: "",
	options: {
		disabled: false
	},
	_createWidget: function( options, element ) {
		// $.widget.bridge stores the plugin instance, but we do it anyway
		// so that it's stored even before the _create function runs
		$.data( element, this.widgetName, this );
		this.element = $( element );
		this.options = $.extend( true, {},
			this.options,
			this._getCreateOptions(),
			options );

		var self = this;
		this.element.bind( "remove." + this.widgetName, function() {
			self.destroy();
		});

		this._create();
		this._trigger( "create" );
		this._init();
	},
	_getCreateOptions: function() {
		return $.metadata && $.metadata.get( this.element[0] )[ this.widgetName ];
	},
	_create: function() {},
	_init: function() {},

	destroy: function() {
		this.element
			.unbind( "." + this.widgetName )
			.removeData( this.widgetName );
		this.widget()
			.unbind( "." + this.widgetName )
			.removeAttr( "aria-disabled" )
			.removeClass(
				this.widgetBaseClass + "-disabled " +
				"ui-state-disabled" );
	},

	widget: function() {
		return this.element;
	},

	option: function( key, value ) {
		var options = key;

		if ( arguments.length === 0 ) {
			// don't return a reference to the internal hash
			return $.extend( {}, this.options );
		}

		if  (typeof key === "string" ) {
			if ( value === undefined ) {
				return this.options[ key ];
			}
			options = {};
			options[ key ] = value;
		}

		this._setOptions( options );

		return this;
	},
	_setOptions: function( options ) {
		var self = this;
		$.each( options, function( key, value ) {
			self._setOption( key, value );
		});

		return this;
	},
	_setOption: function( key, value ) {
		this.options[ key ] = value;

		if ( key === "disabled" ) {
			this.widget()
				[ value ? "addClass" : "removeClass"](
					this.widgetBaseClass + "-disabled" + " " +
					"ui-state-disabled" )
				.attr( "aria-disabled", value );
		}

		return this;
	},

	enable: function() {
		return this._setOption( "disabled", false );
	},
	disable: function() {
		return this._setOption( "disabled", true );
	},

	_trigger: function( type, event, data ) {
		var prop, orig,
			callback = this.options[ type ];

		data = data || {};
		event = $.Event( event );
		event.type = ( type === this.widgetEventPrefix ?
			type :
			this.widgetEventPrefix + type ).toLowerCase();
		// the original event may come from any element
		// so we need to reset the target on the new event
		event.target = this.element[ 0 ];

		// copy original event properties over to the new event
		orig = event.originalEvent;
		if ( orig ) {
			for ( prop in orig ) {
				if ( !( prop in event ) ) {
					event[ prop ] = orig[ prop ];
				}
			}
		}

		this.element.trigger( event, data );

		return !( $.isFunction(callback) &&
			callback.call( this.element[0], event, data ) === false ||
			event.isDefaultPrevented() );
	}
};

})( jQuery );
/*!
 * jQuery UI Mouse 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Mouse
 *
 * Depends:
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

var mouseHandled = false;
$( document ).mouseup( function( e ) {
	mouseHandled = false;
});

$.widget("ui.mouse", {
	options: {
		cancel: ':input,option',
		distance: 1,
		delay: 0
	},
	_mouseInit: function() {
		var self = this;

		this.element
			.bind('mousedown.'+this.widgetName, function(event) {
				return self._mouseDown(event);
			})
			.bind('click.'+this.widgetName, function(event) {
				if (true === $.data(event.target, self.widgetName + '.preventClickEvent')) {
				    $.removeData(event.target, self.widgetName + '.preventClickEvent');
					event.stopImmediatePropagation();
					return false;
				}
			});

		this.started = false;
	},

	// TODO: make sure destroying one instance of mouse doesn't mess with
	// other instances of mouse
	_mouseDestroy: function() {
		this.element.unbind('.'+this.widgetName);
		$(document)
			.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);
	},

	_mouseDown: function(event) {
		// don't let more than one widget handle mouseStart
		if( mouseHandled ) { return };

		// we may have missed mouseup (out of window)
		(this._mouseStarted && this._mouseUp(event));

		this._mouseDownEvent = event;

		var self = this,
			btnIsLeft = (event.which == 1),
			// event.target.nodeName works around a bug in IE 8 with
			// disabled inputs (#7620)
			elIsCancel = (typeof this.options.cancel == "string" && event.target.nodeName ? $(event.target).closest(this.options.cancel).length : false);
		if (!btnIsLeft || elIsCancel || !this._mouseCapture(event)) {
			return true;
		}

		this.mouseDelayMet = !this.options.delay;
		if (!this.mouseDelayMet) {
			this._mouseDelayTimer = setTimeout(function() {
				self.mouseDelayMet = true;
			}, this.options.delay);
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted = (this._mouseStart(event) !== false);
			if (!this._mouseStarted) {
				event.preventDefault();
				return true;
			}
		}

		// Click event may never have fired (Gecko & Opera)
		if (true === $.data(event.target, this.widgetName + '.preventClickEvent')) {
			$.removeData(event.target, this.widgetName + '.preventClickEvent');
		}

		// these delegates are required to keep context
		this._mouseMoveDelegate = function(event) {
			return self._mouseMove(event);
		};
		this._mouseUpDelegate = function(event) {
			return self._mouseUp(event);
		};
		$(document)
			.bind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.bind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		event.preventDefault();
		
		mouseHandled = true;
		return true;
	},

	_mouseMove: function(event) {
		// IE mouseup check - mouseup happened when mouse was out of window
		if ($.browser.msie && !(document.documentMode >= 9) && !event.button) {
			return this._mouseUp(event);
		}

		if (this._mouseStarted) {
			this._mouseDrag(event);
			return event.preventDefault();
		}

		if (this._mouseDistanceMet(event) && this._mouseDelayMet(event)) {
			this._mouseStarted =
				(this._mouseStart(this._mouseDownEvent, event) !== false);
			(this._mouseStarted ? this._mouseDrag(event) : this._mouseUp(event));
		}

		return !this._mouseStarted;
	},

	_mouseUp: function(event) {
		$(document)
			.unbind('mousemove.'+this.widgetName, this._mouseMoveDelegate)
			.unbind('mouseup.'+this.widgetName, this._mouseUpDelegate);

		if (this._mouseStarted) {
			this._mouseStarted = false;

			if (event.target == this._mouseDownEvent.target) {
			    $.data(event.target, this.widgetName + '.preventClickEvent', true);
			}

			this._mouseStop(event);
		}

		return false;
	},

	_mouseDistanceMet: function(event) {
		return (Math.max(
				Math.abs(this._mouseDownEvent.pageX - event.pageX),
				Math.abs(this._mouseDownEvent.pageY - event.pageY)
			) >= this.options.distance
		);
	},

	_mouseDelayMet: function(event) {
		return this.mouseDelayMet;
	},

	// These are placeholder methods, to be overriden by extending plugin
	_mouseStart: function(event) {},
	_mouseDrag: function(event) {},
	_mouseStop: function(event) {},
	_mouseCapture: function(event) { return true; }
});

})(jQuery);
/*!
 * jQuery UI Position 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Position
 */
(function( $, undefined ) {

$.ui = $.ui || {};

var horizontalPositions = /left|center|right/,
	verticalPositions = /top|center|bottom/,
	center = "center",
	support = {},
	_position = $.fn.position,
	_offset = $.fn.offset;

$.fn.position = function( options ) {
	if ( !options || !options.of ) {
		return _position.apply( this, arguments );
	}

	// make a copy, we don't want to modify arguments
	options = $.extend( {}, options );

	var target = $( options.of ),
		targetElem = target[0],
		collision = ( options.collision || "flip" ).split( " " ),
		offset = options.offset ? options.offset.split( " " ) : [ 0, 0 ],
		targetWidth,
		targetHeight,
		basePosition;

	if ( targetElem.nodeType === 9 ) {
		targetWidth = target.width();
		targetHeight = target.height();
		basePosition = { top: 0, left: 0 };
	// TODO: use $.isWindow() in 1.9
	} else if ( targetElem.setTimeout ) {
		targetWidth = target.width();
		targetHeight = target.height();
		basePosition = { top: target.scrollTop(), left: target.scrollLeft() };
	} else if ( targetElem.preventDefault ) {
		// force left top to allow flipping
		options.at = "left top";
		targetWidth = targetHeight = 0;
		basePosition = { top: options.of.pageY, left: options.of.pageX };
	} else {
		targetWidth = target.outerWidth();
		targetHeight = target.outerHeight();
		basePosition = target.offset();
	}

	// force my and at to have valid horizontal and veritcal positions
	// if a value is missing or invalid, it will be converted to center 
	$.each( [ "my", "at" ], function() {
		var pos = ( options[this] || "" ).split( " " );
		if ( pos.length === 1) {
			pos = horizontalPositions.test( pos[0] ) ?
				pos.concat( [center] ) :
				verticalPositions.test( pos[0] ) ?
					[ center ].concat( pos ) :
					[ center, center ];
		}
		pos[ 0 ] = horizontalPositions.test( pos[0] ) ? pos[ 0 ] : center;
		pos[ 1 ] = verticalPositions.test( pos[1] ) ? pos[ 1 ] : center;
		options[ this ] = pos;
	});

	// normalize collision option
	if ( collision.length === 1 ) {
		collision[ 1 ] = collision[ 0 ];
	}

	// normalize offset option
	offset[ 0 ] = parseInt( offset[0], 10 ) || 0;
	if ( offset.length === 1 ) {
		offset[ 1 ] = offset[ 0 ];
	}
	offset[ 1 ] = parseInt( offset[1], 10 ) || 0;

	if ( options.at[0] === "right" ) {
		basePosition.left += targetWidth;
	} else if ( options.at[0] === center ) {
		basePosition.left += targetWidth / 2;
	}

	if ( options.at[1] === "bottom" ) {
		basePosition.top += targetHeight;
	} else if ( options.at[1] === center ) {
		basePosition.top += targetHeight / 2;
	}

	basePosition.left += offset[ 0 ];
	basePosition.top += offset[ 1 ];

	return this.each(function() {
		var elem = $( this ),
			elemWidth = elem.outerWidth(),
			elemHeight = elem.outerHeight(),
			marginLeft = parseInt( $.curCSS( this, "marginLeft", true ) ) || 0,
			marginTop = parseInt( $.curCSS( this, "marginTop", true ) ) || 0,
			collisionWidth = elemWidth + marginLeft +
				( parseInt( $.curCSS( this, "marginRight", true ) ) || 0 ),
			collisionHeight = elemHeight + marginTop +
				( parseInt( $.curCSS( this, "marginBottom", true ) ) || 0 ),
			position = $.extend( {}, basePosition ),
			collisionPosition;

		if ( options.my[0] === "right" ) {
			position.left -= elemWidth;
		} else if ( options.my[0] === center ) {
			position.left -= elemWidth / 2;
		}

		if ( options.my[1] === "bottom" ) {
			position.top -= elemHeight;
		} else if ( options.my[1] === center ) {
			position.top -= elemHeight / 2;
		}

		// prevent fractions if jQuery version doesn't support them (see #5280)
		if ( !support.fractions ) {
			position.left = Math.round( position.left );
			position.top = Math.round( position.top );
		}

		collisionPosition = {
			left: position.left - marginLeft,
			top: position.top - marginTop
		};

		$.each( [ "left", "top" ], function( i, dir ) {
			if ( $.ui.position[ collision[i] ] ) {
				$.ui.position[ collision[i] ][ dir ]( position, {
					targetWidth: targetWidth,
					targetHeight: targetHeight,
					elemWidth: elemWidth,
					elemHeight: elemHeight,
					collisionPosition: collisionPosition,
					collisionWidth: collisionWidth,
					collisionHeight: collisionHeight,
					offset: offset,
					my: options.my,
					at: options.at
				});
			}
		});

		if ( $.fn.bgiframe ) {
			elem.bgiframe();
		}
		elem.offset( $.extend( position, { using: options.using } ) );
	});
};

$.ui.position = {
	fit: {
		left: function( position, data ) {
			var win = $( window ),
				over = data.collisionPosition.left + data.collisionWidth - win.width() - win.scrollLeft();
			position.left = over > 0 ? position.left - over : Math.max( position.left - data.collisionPosition.left, position.left );
		},
		top: function( position, data ) {
			var win = $( window ),
				over = data.collisionPosition.top + data.collisionHeight - win.height() - win.scrollTop();
			position.top = over > 0 ? position.top - over : Math.max( position.top - data.collisionPosition.top, position.top );
		}
	},

	flip: {
		left: function( position, data ) {
			if ( data.at[0] === center ) {
				return;
			}
			var win = $( window ),
				over = data.collisionPosition.left + data.collisionWidth - win.width() - win.scrollLeft(),
				myOffset = data.my[ 0 ] === "left" ?
					-data.elemWidth :
					data.my[ 0 ] === "right" ?
						data.elemWidth :
						0,
				atOffset = data.at[ 0 ] === "left" ?
					data.targetWidth :
					-data.targetWidth,
				offset = -2 * data.offset[ 0 ];
			position.left += data.collisionPosition.left < 0 ?
				myOffset + atOffset + offset :
				over > 0 ?
					myOffset + atOffset + offset :
					0;
		},
		top: function( position, data ) {
			if ( data.at[1] === center ) {
				return;
			}
			var win = $( window ),
				over = data.collisionPosition.top + data.collisionHeight - win.height() - win.scrollTop(),
				myOffset = data.my[ 1 ] === "top" ?
					-data.elemHeight :
					data.my[ 1 ] === "bottom" ?
						data.elemHeight :
						0,
				atOffset = data.at[ 1 ] === "top" ?
					data.targetHeight :
					-data.targetHeight,
				offset = -2 * data.offset[ 1 ];
			position.top += data.collisionPosition.top < 0 ?
				myOffset + atOffset + offset :
				over > 0 ?
					myOffset + atOffset + offset :
					0;
		}
	}
};

// offset setter from jQuery 1.4
if ( !$.offset.setOffset ) {
	$.offset.setOffset = function( elem, options ) {
		// set position first, in-case top/left are set even on static elem
		if ( /static/.test( $.curCSS( elem, "position" ) ) ) {
			elem.style.position = "relative";
		}
		var curElem   = $( elem ),
			curOffset = curElem.offset(),
			curTop    = parseInt( $.curCSS( elem, "top",  true ), 10 ) || 0,
			curLeft   = parseInt( $.curCSS( elem, "left", true ), 10)  || 0,
			props     = {
				top:  (options.top  - curOffset.top)  + curTop,
				left: (options.left - curOffset.left) + curLeft
			};
		
		if ( 'using' in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	};

	$.fn.offset = function( options ) {
		var elem = this[ 0 ];
		if ( !elem || !elem.ownerDocument ) { return null; }
		if ( options ) { 
			return this.each(function() {
				$.offset.setOffset( this, options );
			});
		}
		return _offset.call( this );
	};
}

// fraction support test (older versions of jQuery don't support fractions)
(function () {
	var body = document.getElementsByTagName( "body" )[ 0 ], 
		div = document.createElement( "div" ),
		testElement, testElementParent, testElementStyle, offset, offsetTotal;

	//Create a "fake body" for testing based on method used in jQuery.support
	testElement = document.createElement( body ? "div" : "body" );
	testElementStyle = {
		visibility: "hidden",
		width: 0,
		height: 0,
		border: 0,
		margin: 0,
		background: "none"
	};
	if ( body ) {
		$.extend( testElementStyle, {
			position: "absolute",
			left: "-1000px",
			top: "-1000px"
		});
	}
	for ( var i in testElementStyle ) {
		testElement.style[ i ] = testElementStyle[ i ];
	}
	testElement.appendChild( div );
	testElementParent = body || document.documentElement;
	testElementParent.insertBefore( testElement, testElementParent.firstChild );

	div.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;";

	offset = $( div ).offset( function( _, offset ) {
		return offset;
	}).offset();

	testElement.innerHTML = "";
	testElementParent.removeChild( testElement );

	offsetTotal = offset.top + offset.left + ( body ? 2000 : 0 );
	support.fractions = offsetTotal > 21 && offsetTotal < 22;
})();

}( jQuery ));
/*!
 * jQuery UI Draggable 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Draggables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.draggable", $.ui.mouse, {
	widgetEventPrefix: "drag",
	options: {
		addClasses: true,
		appendTo: "parent",
		axis: false,
		connectToSortable: false,
		containment: false,
		cursor: "auto",
		cursorAt: false,
		grid: false,
		handle: false,
		helper: "original",
		iframeFix: false,
		opacity: false,
		refreshPositions: false,
		revert: false,
		revertDuration: 500,
		scope: "default",
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		snap: false,
		snapMode: "both",
		snapTolerance: 20,
		stack: false,
		zIndex: false
	},
	_create: function() {

		if (this.options.helper == 'original' && !(/^(?:r|a|f)/).test(this.element.css("position")))
			this.element[0].style.position = 'relative';

		(this.options.addClasses && this.element.addClass("ui-draggable"));
		(this.options.disabled && this.element.addClass("ui-draggable-disabled"));

		this._mouseInit();

	},

	destroy: function() {
		if(!this.element.data('draggable')) return;
		this.element
			.removeData("draggable")
			.unbind(".draggable")
			.removeClass("ui-draggable"
				+ " ui-draggable-dragging"
				+ " ui-draggable-disabled");
		this._mouseDestroy();

		return this;
	},

	_mouseCapture: function(event) {

		var o = this.options;

		// among others, prevent a drag on a resizable-handle
		if (this.helper || o.disabled || $(event.target).is('.ui-resizable-handle'))
			return false;

		//Quit if we're not on a valid handle
		this.handle = this._getHandle(event);
		if (!this.handle)
			return false;
		
		if ( o.iframeFix ) {
			$(o.iframeFix === true ? "iframe" : o.iframeFix).each(function() {
				$('<div class="ui-draggable-iframeFix" style="background: #fff;"></div>')
				.css({
					width: this.offsetWidth+"px", height: this.offsetHeight+"px",
					position: "absolute", opacity: "0.001", zIndex: 1000
				})
				.css($(this).offset())
				.appendTo("body");
			});
		}

		return true;

	},

	_mouseStart: function(event) {

		var o = this.options;

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		//If ddmanager is used for droppables, set the global draggable
		if($.ui.ddmanager)
			$.ui.ddmanager.current = this;

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Store the helper's css position
		this.cssPosition = this.helper.css("position");
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.positionAbs = this.element.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		//Generate the original position
		this.originalPosition = this.position = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Set a containment if given in the options
		if(o.containment)
			this._setContainment();

		//Trigger event + callbacks
		if(this._trigger("start", event) === false) {
			this._clear();
			return false;
		}

		//Recache the helper size
		this._cacheHelperProportions();

		//Prepare the droppable offsets
		if ($.ui.ddmanager && !o.dropBehaviour)
			$.ui.ddmanager.prepareOffsets(this, event);

		this.helper.addClass("ui-draggable-dragging");
		this._mouseDrag(event, true); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		
		//If the ddmanager is used for droppables, inform the manager that dragging has started (see #5003)
		if ( $.ui.ddmanager ) $.ui.ddmanager.dragStart(this, event);
		
		return true;
	},

	_mouseDrag: function(event, noPropagation) {

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		//Call plugins and callbacks and use the resulting position if something is returned
		if (!noPropagation) {
			var ui = this._uiHash();
			if(this._trigger('drag', event, ui) === false) {
				this._mouseUp({});
				return false;
			}
			this.position = ui.position;
		}

		if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
		if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';
		if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

		return false;
	},

	_mouseStop: function(event) {

		//If we are using droppables, inform the manager about the drop
		var dropped = false;
		if ($.ui.ddmanager && !this.options.dropBehaviour)
			dropped = $.ui.ddmanager.drop(this, event);

		//if a drop comes from outside (a sortable)
		if(this.dropped) {
			dropped = this.dropped;
			this.dropped = false;
		}
		
		//if the original element is no longer in the DOM don't bother to continue (see #8269)
		var element = this.element[0], elementInDom = false;
		while ( element && (element = element.parentNode) ) {
			if (element == document ) {
				elementInDom = true;
			}
		}
		if ( !elementInDom && this.options.helper === "original" )
			return false;

		if((this.options.revert == "invalid" && !dropped) || (this.options.revert == "valid" && dropped) || this.options.revert === true || ($.isFunction(this.options.revert) && this.options.revert.call(this.element, dropped))) {
			var self = this;
			$(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
				if(self._trigger("stop", event) !== false) {
					self._clear();
				}
			});
		} else {
			if(this._trigger("stop", event) !== false) {
				this._clear();
			}
		}

		return false;
	},
	
	_mouseUp: function(event) {
		if (this.options.iframeFix === true) {
			$("div.ui-draggable-iframeFix").each(function() { 
				this.parentNode.removeChild(this); 
			}); //Remove frame helpers
		}
		
		//If the ddmanager is used for droppables, inform the manager that dragging has stopped (see #5003)
		if( $.ui.ddmanager ) $.ui.ddmanager.dragStop(this, event);
		
		return $.ui.mouse.prototype._mouseUp.call(this, event);
	},
	
	cancel: function() {
		
		if(this.helper.is(".ui-draggable-dragging")) {
			this._mouseUp({});
		} else {
			this._clear();
		}
		
		return this;
		
	},

	_getHandle: function(event) {

		var handle = !this.options.handle || !$(this.options.handle, this.element).length ? true : false;
		$(this.options.handle, this.element)
			.find("*")
			.andSelf()
			.each(function() {
				if(this == event.target) handle = true;
			});

		return handle;

	},

	_createHelper: function(event) {

		var o = this.options;
		var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event])) : (o.helper == 'clone' ? this.element.clone().removeAttr('id') : this.element);

		if(!helper.parents('body').length)
			helper.appendTo((o.appendTo == 'parent' ? this.element[0].parentNode : o.appendTo));

		if(helper[0] != this.element[0] && !(/(fixed|absolute)/).test(helper.css("position")))
			helper.css("position", "absolute");

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj == 'string') {
			obj = obj.split(' ');
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ('left' in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ('right' in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ('top' in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ('bottom' in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {

		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition == 'absolute' && this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if((this.offsetParent[0] == document.body) //This needs to be actually done for all browsers, since pageX/pageY includes this information
		|| (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.browser.msie)) //Ugly IE fix
			po = { top: 0, left: 0 };

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition == "relative") {
			var p = this.element.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.element.css("marginLeft"),10) || 0),
			top: (parseInt(this.element.css("marginTop"),10) || 0),
			right: (parseInt(this.element.css("marginRight"),10) || 0),
			bottom: (parseInt(this.element.css("marginBottom"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var o = this.options;
		if(o.containment == 'parent') o.containment = this.helper[0].parentNode;
		if(o.containment == 'document' || o.containment == 'window') this.containment = [
			o.containment == 'document' ? 0 : $(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left,
			o.containment == 'document' ? 0 : $(window).scrollTop() - this.offset.relative.top - this.offset.parent.top,
			(o.containment == 'document' ? 0 : $(window).scrollLeft()) + $(o.containment == 'document' ? document : window).width() - this.helperProportions.width - this.margins.left,
			(o.containment == 'document' ? 0 : $(window).scrollTop()) + ($(o.containment == 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
		];

		if(!(/^(document|window|parent)$/).test(o.containment) && o.containment.constructor != Array) {
		        var c = $(o.containment);
			var ce = c[0]; if(!ce) return;
			var co = c.offset();
			var over = ($(ce).css("overflow") != 'hidden');

			this.containment = [
				(parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0),
				(parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0),
				(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right,
				(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top  - this.margins.bottom
			];
			this.relative_container = c;

		} else if(o.containment.constructor == Array) {
			this.containment = o.containment;
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) pos = this.position;
		var mod = d == "absolute" ? 1 : -1;
		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top																	// The absolute mouse position
				+ this.offset.relative.top * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.top * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left																// The absolute mouse position
				+ this.offset.relative.left * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.left * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);
		var pageX = event.pageX;
		var pageY = event.pageY;

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options
		         var containment;
		         if(this.containment) {
				 if (this.relative_container){
				     var co = this.relative_container.offset();
				     containment = [ this.containment[0] + co.left,
						     this.containment[1] + co.top,
						     this.containment[2] + co.left,
						     this.containment[3] + co.top ];
				 }
				 else {
				     containment = this.containment;
				 }

				if(event.pageX - this.offset.click.left < containment[0]) pageX = containment[0] + this.offset.click.left;
				if(event.pageY - this.offset.click.top < containment[1]) pageY = containment[1] + this.offset.click.top;
				if(event.pageX - this.offset.click.left > containment[2]) pageX = containment[2] + this.offset.click.left;
				if(event.pageY - this.offset.click.top > containment[3]) pageY = containment[3] + this.offset.click.top;
			}

			if(o.grid) {
				//Check for grid elements set to 0 to prevent divide by 0 error causing invalid argument errors in IE (see ticket #6950)
				var top = o.grid[1] ? this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY;
				pageY = containment ? (!(top - this.offset.click.top < containment[1] || top - this.offset.click.top > containment[3]) ? top : (!(top - this.offset.click.top < containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				var left = o.grid[0] ? this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX;
				pageX = containment ? (!(left - this.offset.click.left < containment[0] || left - this.offset.click.left > containment[2]) ? left : (!(left - this.offset.click.left < containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY																// The absolute mouse position
				- this.offset.click.top													// Click offset (relative to the element)
				- this.offset.relative.top												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.top												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX																// The absolute mouse position
				- this.offset.click.left												// Click offset (relative to the element)
				- this.offset.relative.left												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.left												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && $.browser.version < 526 && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_clear: function() {
		this.helper.removeClass("ui-draggable-dragging");
		if(this.helper[0] != this.element[0] && !this.cancelHelperRemoval) this.helper.remove();
		//if($.ui.ddmanager) $.ui.ddmanager.current = null;
		this.helper = null;
		this.cancelHelperRemoval = false;
	},

	// From now on bulk stuff - mainly helpers

	_trigger: function(type, event, ui) {
		ui = ui || this._uiHash();
		$.ui.plugin.call(this, type, [event, ui]);
		if(type == "drag") this.positionAbs = this._convertPositionTo("absolute"); //The absolute position has to be recalculated after plugins
		return $.Widget.prototype._trigger.call(this, type, event, ui);
	},

	plugins: {},

	_uiHash: function(event) {
		return {
			helper: this.helper,
			position: this.position,
			originalPosition: this.originalPosition,
			offset: this.positionAbs
		};
	}

});

$.extend($.ui.draggable, {
	version: "1.8.20"
});

$.ui.plugin.add("draggable", "connectToSortable", {
	start: function(event, ui) {

		var inst = $(this).data("draggable"), o = inst.options,
			uiSortable = $.extend({}, ui, { item: inst.element });
		inst.sortables = [];
		$(o.connectToSortable).each(function() {
			var sortable = $.data(this, 'sortable');
			if (sortable && !sortable.options.disabled) {
				inst.sortables.push({
					instance: sortable,
					shouldRevert: sortable.options.revert
				});
				sortable.refreshPositions();	// Call the sortable's refreshPositions at drag start to refresh the containerCache since the sortable container cache is used in drag and needs to be up to date (this will ensure it's initialised as well as being kept in step with any changes that might have happened on the page).
				sortable._trigger("activate", event, uiSortable);
			}
		});

	},
	stop: function(event, ui) {

		//If we are still over the sortable, we fake the stop event of the sortable, but also remove helper
		var inst = $(this).data("draggable"),
			uiSortable = $.extend({}, ui, { item: inst.element });

		$.each(inst.sortables, function() {
			if(this.instance.isOver) {

				this.instance.isOver = 0;

				inst.cancelHelperRemoval = true; //Don't remove the helper in the draggable instance
				this.instance.cancelHelperRemoval = false; //Remove it in the sortable instance (so sortable plugins like revert still work)

				//The sortable revert is supported, and we have to set a temporary dropped variable on the draggable to support revert: 'valid/invalid'
				if(this.shouldRevert) this.instance.options.revert = true;

				//Trigger the stop of the sortable
				this.instance._mouseStop(event);

				this.instance.options.helper = this.instance.options._helper;

				//If the helper has been the original item, restore properties in the sortable
				if(inst.options.helper == 'original')
					this.instance.currentItem.css({ top: 'auto', left: 'auto' });

			} else {
				this.instance.cancelHelperRemoval = false; //Remove the helper in the sortable instance
				this.instance._trigger("deactivate", event, uiSortable);
			}

		});

	},
	drag: function(event, ui) {

		var inst = $(this).data("draggable"), self = this;

		var checkPos = function(o) {
			var dyClick = this.offset.click.top, dxClick = this.offset.click.left;
			var helperTop = this.positionAbs.top, helperLeft = this.positionAbs.left;
			var itemHeight = o.height, itemWidth = o.width;
			var itemTop = o.top, itemLeft = o.left;

			return $.ui.isOver(helperTop + dyClick, helperLeft + dxClick, itemTop, itemLeft, itemHeight, itemWidth);
		};

		$.each(inst.sortables, function(i) {
			
			//Copy over some variables to allow calling the sortable's native _intersectsWith
			this.instance.positionAbs = inst.positionAbs;
			this.instance.helperProportions = inst.helperProportions;
			this.instance.offset.click = inst.offset.click;
			
			if(this.instance._intersectsWith(this.instance.containerCache)) {

				//If it intersects, we use a little isOver variable and set it once, so our move-in stuff gets fired only once
				if(!this.instance.isOver) {

					this.instance.isOver = 1;
					//Now we fake the start of dragging for the sortable instance,
					//by cloning the list group item, appending it to the sortable and using it as inst.currentItem
					//We can then fire the start event of the sortable with our passed browser event, and our own helper (so it doesn't create a new one)
					this.instance.currentItem = $(self).clone().removeAttr('id').appendTo(this.instance.element).data("sortable-item", true);
					this.instance.options._helper = this.instance.options.helper; //Store helper option to later restore it
					this.instance.options.helper = function() { return ui.helper[0]; };

					event.target = this.instance.currentItem[0];
					this.instance._mouseCapture(event, true);
					this.instance._mouseStart(event, true, true);

					//Because the browser event is way off the new appended portlet, we modify a couple of variables to reflect the changes
					this.instance.offset.click.top = inst.offset.click.top;
					this.instance.offset.click.left = inst.offset.click.left;
					this.instance.offset.parent.left -= inst.offset.parent.left - this.instance.offset.parent.left;
					this.instance.offset.parent.top -= inst.offset.parent.top - this.instance.offset.parent.top;

					inst._trigger("toSortable", event);
					inst.dropped = this.instance.element; //draggable revert needs that
					//hack so receive/update callbacks work (mostly)
					inst.currentItem = inst.element;
					this.instance.fromOutside = inst;

				}

				//Provided we did all the previous steps, we can fire the drag event of the sortable on every draggable drag, when it intersects with the sortable
				if(this.instance.currentItem) this.instance._mouseDrag(event);

			} else {

				//If it doesn't intersect with the sortable, and it intersected before,
				//we fake the drag stop of the sortable, but make sure it doesn't remove the helper by using cancelHelperRemoval
				if(this.instance.isOver) {

					this.instance.isOver = 0;
					this.instance.cancelHelperRemoval = true;
					
					//Prevent reverting on this forced stop
					this.instance.options.revert = false;
					
					// The out event needs to be triggered independently
					this.instance._trigger('out', event, this.instance._uiHash(this.instance));
					
					this.instance._mouseStop(event, true);
					this.instance.options.helper = this.instance.options._helper;

					//Now we remove our currentItem, the list group clone again, and the placeholder, and animate the helper back to it's original size
					this.instance.currentItem.remove();
					if(this.instance.placeholder) this.instance.placeholder.remove();

					inst._trigger("fromSortable", event);
					inst.dropped = false; //draggable revert needs that
				}

			};

		});

	}
});

$.ui.plugin.add("draggable", "cursor", {
	start: function(event, ui) {
		var t = $('body'), o = $(this).data('draggable').options;
		if (t.css("cursor")) o._cursor = t.css("cursor");
		t.css("cursor", o.cursor);
	},
	stop: function(event, ui) {
		var o = $(this).data('draggable').options;
		if (o._cursor) $('body').css("cursor", o._cursor);
	}
});

$.ui.plugin.add("draggable", "opacity", {
	start: function(event, ui) {
		var t = $(ui.helper), o = $(this).data('draggable').options;
		if(t.css("opacity")) o._opacity = t.css("opacity");
		t.css('opacity', o.opacity);
	},
	stop: function(event, ui) {
		var o = $(this).data('draggable').options;
		if(o._opacity) $(ui.helper).css('opacity', o._opacity);
	}
});

$.ui.plugin.add("draggable", "scroll", {
	start: function(event, ui) {
		var i = $(this).data("draggable");
		if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') i.overflowOffset = i.scrollParent.offset();
	},
	drag: function(event, ui) {

		var i = $(this).data("draggable"), o = i.options, scrolled = false;

		if(i.scrollParent[0] != document && i.scrollParent[0].tagName != 'HTML') {

			if(!o.axis || o.axis != 'x') {
				if((i.overflowOffset.top + i.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop + o.scrollSpeed;
				else if(event.pageY - i.overflowOffset.top < o.scrollSensitivity)
					i.scrollParent[0].scrollTop = scrolled = i.scrollParent[0].scrollTop - o.scrollSpeed;
			}

			if(!o.axis || o.axis != 'y') {
				if((i.overflowOffset.left + i.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft + o.scrollSpeed;
				else if(event.pageX - i.overflowOffset.left < o.scrollSensitivity)
					i.scrollParent[0].scrollLeft = scrolled = i.scrollParent[0].scrollLeft - o.scrollSpeed;
			}

		} else {

			if(!o.axis || o.axis != 'x') {
				if(event.pageY - $(document).scrollTop() < o.scrollSensitivity)
					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity)
					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);
			}

			if(!o.axis || o.axis != 'y') {
				if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity)
					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity)
					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);
			}

		}

		if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
			$.ui.ddmanager.prepareOffsets(i, event);

	}
});

$.ui.plugin.add("draggable", "snap", {
	start: function(event, ui) {

		var i = $(this).data("draggable"), o = i.options;
		i.snapElements = [];

		$(o.snap.constructor != String ? ( o.snap.items || ':data(draggable)' ) : o.snap).each(function() {
			var $t = $(this); var $o = $t.offset();
			if(this != i.element[0]) i.snapElements.push({
				item: this,
				width: $t.outerWidth(), height: $t.outerHeight(),
				top: $o.top, left: $o.left
			});
		});

	},
	drag: function(event, ui) {

		var inst = $(this).data("draggable"), o = inst.options;
		var d = o.snapTolerance;

		var x1 = ui.offset.left, x2 = x1 + inst.helperProportions.width,
			y1 = ui.offset.top, y2 = y1 + inst.helperProportions.height;

		for (var i = inst.snapElements.length - 1; i >= 0; i--){

			var l = inst.snapElements[i].left, r = l + inst.snapElements[i].width,
				t = inst.snapElements[i].top, b = t + inst.snapElements[i].height;

			//Yes, I know, this is insane ;)
			if(!((l-d < x1 && x1 < r+d && t-d < y1 && y1 < b+d) || (l-d < x1 && x1 < r+d && t-d < y2 && y2 < b+d) || (l-d < x2 && x2 < r+d && t-d < y1 && y1 < b+d) || (l-d < x2 && x2 < r+d && t-d < y2 && y2 < b+d))) {
				if(inst.snapElements[i].snapping) (inst.options.snap.release && inst.options.snap.release.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
				inst.snapElements[i].snapping = false;
				continue;
			}

			if(o.snapMode != 'inner') {
				var ts = Math.abs(t - y2) <= d;
				var bs = Math.abs(b - y1) <= d;
				var ls = Math.abs(l - x2) <= d;
				var rs = Math.abs(r - x1) <= d;
				if(ts) ui.position.top = inst._convertPositionTo("relative", { top: t - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
				if(bs) ui.position.top = inst._convertPositionTo("relative", { top: b, left: 0 }).top - inst.margins.top;
				if(ls) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l - inst.helperProportions.width }).left - inst.margins.left;
				if(rs) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r }).left - inst.margins.left;
			}

			var first = (ts || bs || ls || rs);

			if(o.snapMode != 'outer') {
				var ts = Math.abs(t - y1) <= d;
				var bs = Math.abs(b - y2) <= d;
				var ls = Math.abs(l - x1) <= d;
				var rs = Math.abs(r - x2) <= d;
				if(ts) ui.position.top = inst._convertPositionTo("relative", { top: t, left: 0 }).top - inst.margins.top;
				if(bs) ui.position.top = inst._convertPositionTo("relative", { top: b - inst.helperProportions.height, left: 0 }).top - inst.margins.top;
				if(ls) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: l }).left - inst.margins.left;
				if(rs) ui.position.left = inst._convertPositionTo("relative", { top: 0, left: r - inst.helperProportions.width }).left - inst.margins.left;
			}

			if(!inst.snapElements[i].snapping && (ts || bs || ls || rs || first))
				(inst.options.snap.snap && inst.options.snap.snap.call(inst.element, event, $.extend(inst._uiHash(), { snapItem: inst.snapElements[i].item })));
			inst.snapElements[i].snapping = (ts || bs || ls || rs || first);

		};

	}
});

$.ui.plugin.add("draggable", "stack", {
	start: function(event, ui) {

		var o = $(this).data("draggable").options;

		var group = $.makeArray($(o.stack)).sort(function(a,b) {
			return (parseInt($(a).css("zIndex"),10) || 0) - (parseInt($(b).css("zIndex"),10) || 0);
		});
		if (!group.length) { return; }
		
		var min = parseInt(group[0].style.zIndex) || 0;
		$(group).each(function(i) {
			this.style.zIndex = min + i;
		});

		this[0].style.zIndex = min + group.length;

	}
});

$.ui.plugin.add("draggable", "zIndex", {
	start: function(event, ui) {
		var t = $(ui.helper), o = $(this).data("draggable").options;
		if(t.css("zIndex")) o._zIndex = t.css("zIndex");
		t.css('zIndex', o.zIndex);
	},
	stop: function(event, ui) {
		var o = $(this).data("draggable").options;
		if(o._zIndex) $(ui.helper).css('zIndex', o._zIndex);
	}
});

})(jQuery);
/*!
 * jQuery UI Droppable 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Droppables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.widget.js
 *	jquery.ui.mouse.js
 *	jquery.ui.draggable.js
 */
(function( $, undefined ) {

$.widget("ui.droppable", {
	widgetEventPrefix: "drop",
	options: {
		accept: '*',
		activeClass: false,
		addClasses: true,
		greedy: false,
		hoverClass: false,
		scope: 'default',
		tolerance: 'intersect'
	},
	_create: function() {

		var o = this.options, accept = o.accept;
		this.isover = 0; this.isout = 1;

		this.accept = $.isFunction(accept) ? accept : function(d) {
			return d.is(accept);
		};

		//Store the droppable's proportions
		this.proportions = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight };

		// Add the reference and positions to the manager
		$.ui.ddmanager.droppables[o.scope] = $.ui.ddmanager.droppables[o.scope] || [];
		$.ui.ddmanager.droppables[o.scope].push(this);

		(o.addClasses && this.element.addClass("ui-droppable"));

	},

	destroy: function() {
		var drop = $.ui.ddmanager.droppables[this.options.scope];
		for ( var i = 0; i < drop.length; i++ )
			if ( drop[i] == this )
				drop.splice(i, 1);

		this.element
			.removeClass("ui-droppable ui-droppable-disabled")
			.removeData("droppable")
			.unbind(".droppable");

		return this;
	},

	_setOption: function(key, value) {

		if(key == 'accept') {
			this.accept = $.isFunction(value) ? value : function(d) {
				return d.is(value);
			};
		}
		$.Widget.prototype._setOption.apply(this, arguments);
	},

	_activate: function(event) {
		var draggable = $.ui.ddmanager.current;
		if(this.options.activeClass) this.element.addClass(this.options.activeClass);
		(draggable && this._trigger('activate', event, this.ui(draggable)));
	},

	_deactivate: function(event) {
		var draggable = $.ui.ddmanager.current;
		if(this.options.activeClass) this.element.removeClass(this.options.activeClass);
		(draggable && this._trigger('deactivate', event, this.ui(draggable)));
	},

	_over: function(event) {

		var draggable = $.ui.ddmanager.current;
		if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) return; // Bail if draggable and droppable are same element

		if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
			if(this.options.hoverClass) this.element.addClass(this.options.hoverClass);
			this._trigger('over', event, this.ui(draggable));
		}

	},

	_out: function(event) {

		var draggable = $.ui.ddmanager.current;
		if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) return; // Bail if draggable and droppable are same element

		if (this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
			if(this.options.hoverClass) this.element.removeClass(this.options.hoverClass);
			this._trigger('out', event, this.ui(draggable));
		}

	},

	_drop: function(event,custom) {

		var draggable = custom || $.ui.ddmanager.current;
		if (!draggable || (draggable.currentItem || draggable.element)[0] == this.element[0]) return false; // Bail if draggable and droppable are same element

		var childrenIntersection = false;
		this.element.find(":data(droppable)").not(".ui-draggable-dragging").each(function() {
			var inst = $.data(this, 'droppable');
			if(
				inst.options.greedy
				&& !inst.options.disabled
				&& inst.options.scope == draggable.options.scope
				&& inst.accept.call(inst.element[0], (draggable.currentItem || draggable.element))
				&& $.ui.intersect(draggable, $.extend(inst, { offset: inst.element.offset() }), inst.options.tolerance)
			) { childrenIntersection = true; return false; }
		});
		if(childrenIntersection) return false;

		if(this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
			if(this.options.activeClass) this.element.removeClass(this.options.activeClass);
			if(this.options.hoverClass) this.element.removeClass(this.options.hoverClass);
			this._trigger('drop', event, this.ui(draggable));
			return this.element;
		}

		return false;

	},

	ui: function(c) {
		return {
			draggable: (c.currentItem || c.element),
			helper: c.helper,
			position: c.position,
			offset: c.positionAbs
		};
	}

});

$.extend($.ui.droppable, {
	version: "1.8.20"
});

$.ui.intersect = function(draggable, droppable, toleranceMode) {

	if (!droppable.offset) return false;

	var x1 = (draggable.positionAbs || draggable.position.absolute).left, x2 = x1 + draggable.helperProportions.width,
		y1 = (draggable.positionAbs || draggable.position.absolute).top, y2 = y1 + draggable.helperProportions.height;
	var l = droppable.offset.left, r = l + droppable.proportions.width,
		t = droppable.offset.top, b = t + droppable.proportions.height;

	switch (toleranceMode) {
		case 'fit':
			return (l <= x1 && x2 <= r
				&& t <= y1 && y2 <= b);
			break;
		case 'intersect':
			return (l < x1 + (draggable.helperProportions.width / 2) // Right Half
				&& x2 - (draggable.helperProportions.width / 2) < r // Left Half
				&& t < y1 + (draggable.helperProportions.height / 2) // Bottom Half
				&& y2 - (draggable.helperProportions.height / 2) < b ); // Top Half
			break;
		case 'pointer':
			var draggableLeft = ((draggable.positionAbs || draggable.position.absolute).left + (draggable.clickOffset || draggable.offset.click).left),
				draggableTop = ((draggable.positionAbs || draggable.position.absolute).top + (draggable.clickOffset || draggable.offset.click).top),
				isOver = $.ui.isOver(draggableTop, draggableLeft, t, l, droppable.proportions.height, droppable.proportions.width);
			return isOver;
			break;
		case 'touch':
			return (
					(y1 >= t && y1 <= b) ||	// Top edge touching
					(y2 >= t && y2 <= b) ||	// Bottom edge touching
					(y1 < t && y2 > b)		// Surrounded vertically
				) && (
					(x1 >= l && x1 <= r) ||	// Left edge touching
					(x2 >= l && x2 <= r) ||	// Right edge touching
					(x1 < l && x2 > r)		// Surrounded horizontally
				);
			break;
		default:
			return false;
			break;
		}

};

/*
	This manager tracks offsets of draggables and droppables
*/
$.ui.ddmanager = {
	current: null,
	droppables: { 'default': [] },
	prepareOffsets: function(t, event) {

		var m = $.ui.ddmanager.droppables[t.options.scope] || [];
		var type = event ? event.type : null; // workaround for #2317
		var list = (t.currentItem || t.element).find(":data(droppable)").andSelf();

		droppablesLoop: for (var i = 0; i < m.length; i++) {

			if(m[i].options.disabled || (t && !m[i].accept.call(m[i].element[0],(t.currentItem || t.element)))) continue;	//No disabled and non-accepted
			for (var j=0; j < list.length; j++) { if(list[j] == m[i].element[0]) { m[i].proportions.height = 0; continue droppablesLoop; } }; //Filter out elements in the current dragged item
			m[i].visible = m[i].element.css("display") != "none"; if(!m[i].visible) continue; 									//If the element is not visible, continue

			if(type == "mousedown") m[i]._activate.call(m[i], event); //Activate the droppable if used directly from draggables

			m[i].offset = m[i].element.offset();
			m[i].proportions = { width: m[i].element[0].offsetWidth, height: m[i].element[0].offsetHeight };

		}

	},
	drop: function(draggable, event) {

		var dropped = false;
		$.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

			if(!this.options) return;
			if (!this.options.disabled && this.visible && $.ui.intersect(draggable, this, this.options.tolerance))
				dropped = this._drop.call(this, event) || dropped;

			if (!this.options.disabled && this.visible && this.accept.call(this.element[0],(draggable.currentItem || draggable.element))) {
				this.isout = 1; this.isover = 0;
				this._deactivate.call(this, event);
			}

		});
		return dropped;

	},
	dragStart: function( draggable, event ) {
		//Listen for scrolling so that if the dragging causes scrolling the position of the droppables can be recalculated (see #5003)
		draggable.element.parents( ":not(body,html)" ).bind( "scroll.droppable", function() {
			if( !draggable.options.refreshPositions ) $.ui.ddmanager.prepareOffsets( draggable, event );
		});
	},
	drag: function(draggable, event) {

		//If you have a highly dynamic page, you might try this option. It renders positions every time you move the mouse.
		if(draggable.options.refreshPositions) $.ui.ddmanager.prepareOffsets(draggable, event);

		//Run through all droppables and check their positions based on specific tolerance options
		$.each($.ui.ddmanager.droppables[draggable.options.scope] || [], function() {

			if(this.options.disabled || this.greedyChild || !this.visible) return;
			var intersects = $.ui.intersect(draggable, this, this.options.tolerance);

			var c = !intersects && this.isover == 1 ? 'isout' : (intersects && this.isover == 0 ? 'isover' : null);
			if(!c) return;

			var parentInstance;
			if (this.options.greedy) {
				var parent = this.element.parents(':data(droppable):eq(0)');
				if (parent.length) {
					parentInstance = $.data(parent[0], 'droppable');
					parentInstance.greedyChild = (c == 'isover' ? 1 : 0);
				}
			}

			// we just moved into a greedy child
			if (parentInstance && c == 'isover') {
				parentInstance['isover'] = 0;
				parentInstance['isout'] = 1;
				parentInstance._out.call(parentInstance, event);
			}

			this[c] = 1; this[c == 'isout' ? 'isover' : 'isout'] = 0;
			this[c == "isover" ? "_over" : "_out"].call(this, event);

			// we just moved out of a greedy child
			if (parentInstance && c == 'isout') {
				parentInstance['isout'] = 0;
				parentInstance['isover'] = 1;
				parentInstance._over.call(parentInstance, event);
			}
		});

	},
	dragStop: function( draggable, event ) {
		draggable.element.parents( ":not(body,html)" ).unbind( "scroll.droppable" );
		//Call prepareOffsets one final time since IE does not fire return scroll events when overflow was caused by drag (see #5003)
		if( !draggable.options.refreshPositions ) $.ui.ddmanager.prepareOffsets( draggable, event );
	}
};

})(jQuery);
/*!
 * jQuery UI Resizable 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Resizables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.resizable", $.ui.mouse, {
	widgetEventPrefix: "resize",
	options: {
		alsoResize: false,
		animate: false,
		animateDuration: "slow",
		animateEasing: "swing",
		aspectRatio: false,
		autoHide: false,
		containment: false,
		ghost: false,
		grid: false,
		handles: "e,s,se",
		helper: false,
		maxHeight: null,
		maxWidth: null,
		minHeight: 10,
		minWidth: 10,
		zIndex: 1000
	},
	_create: function() {

		var self = this, o = this.options;
		this.element.addClass("ui-resizable");

		$.extend(this, {
			_aspectRatio: !!(o.aspectRatio),
			aspectRatio: o.aspectRatio,
			originalElement: this.element,
			_proportionallyResizeElements: [],
			_helper: o.helper || o.ghost || o.animate ? o.helper || 'ui-resizable-helper' : null
		});

		//Wrap the element if it cannot hold child nodes
		if(this.element[0].nodeName.match(/canvas|textarea|input|select|button|img/i)) {

			//Create a wrapper element and set the wrapper to the new current internal element
			this.element.wrap(
				$('<div class="ui-wrapper" style="overflow: hidden;"></div>').css({
					position: this.element.css('position'),
					width: this.element.outerWidth(),
					height: this.element.outerHeight(),
					top: this.element.css('top'),
					left: this.element.css('left')
				})
			);

			//Overwrite the original this.element
			this.element = this.element.parent().data(
				"resizable", this.element.data('resizable')
			);

			this.elementIsWrapper = true;

			//Move margins to the wrapper
			this.element.css({ marginLeft: this.originalElement.css("marginLeft"), marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom") });
			this.originalElement.css({ marginLeft: 0, marginTop: 0, marginRight: 0, marginBottom: 0});

			//Prevent Safari textarea resize
			this.originalResizeStyle = this.originalElement.css('resize');
			this.originalElement.css('resize', 'none');

			//Push the actual element to our proportionallyResize internal array
			this._proportionallyResizeElements.push(this.originalElement.css({ position: 'static', zoom: 1, display: 'block' }));

			// avoid IE jump (hard set the margin)
			this.originalElement.css({ margin: this.originalElement.css('margin') });

			// fix handlers offset
			this._proportionallyResize();

		}

		this.handles = o.handles || (!$('.ui-resizable-handle', this.element).length ? "e,s,se" : { n: '.ui-resizable-n', e: '.ui-resizable-e', s: '.ui-resizable-s', w: '.ui-resizable-w', se: '.ui-resizable-se', sw: '.ui-resizable-sw', ne: '.ui-resizable-ne', nw: '.ui-resizable-nw' });
		if(this.handles.constructor == String) {

			if(this.handles == 'all') this.handles = 'n,e,s,w,se,sw,ne,nw';
			var n = this.handles.split(","); this.handles = {};

			for(var i = 0; i < n.length; i++) {

				var handle = $.trim(n[i]), hname = 'ui-resizable-'+handle;
				var axis = $('<div class="ui-resizable-handle ' + hname + '"></div>');

				// Apply zIndex to all handles - see #7960
				axis.css({ zIndex: o.zIndex });

				//TODO : What's going on here?
				if ('se' == handle) {
					axis.addClass('ui-icon ui-icon-gripsmall-diagonal-se');
				};

				//Insert into internal handles object and append to element
				this.handles[handle] = '.ui-resizable-'+handle;
				this.element.append(axis);
			}

		}

		this._renderAxis = function(target) {

			target = target || this.element;

			for(var i in this.handles) {

				if(this.handles[i].constructor == String)
					this.handles[i] = $(this.handles[i], this.element).show();

				//Apply pad to wrapper element, needed to fix axis position (textarea, inputs, scrolls)
				if (this.elementIsWrapper && this.originalElement[0].nodeName.match(/textarea|input|select|button/i)) {

					var axis = $(this.handles[i], this.element), padWrapper = 0;

					//Checking the correct pad and border
					padWrapper = /sw|ne|nw|se|n|s/.test(i) ? axis.outerHeight() : axis.outerWidth();

					//The padding type i have to apply...
					var padPos = [ 'padding',
						/ne|nw|n/.test(i) ? 'Top' :
						/se|sw|s/.test(i) ? 'Bottom' :
						/^e$/.test(i) ? 'Right' : 'Left' ].join("");

					target.css(padPos, padWrapper);

					this._proportionallyResize();

				}

				//TODO: What's that good for? There's not anything to be executed left
				if(!$(this.handles[i]).length)
					continue;

			}
		};

		//TODO: make renderAxis a prototype function
		this._renderAxis(this.element);

		this._handles = $('.ui-resizable-handle', this.element)
			.disableSelection();

		//Matching axis name
		this._handles.mouseover(function() {
			if (!self.resizing) {
				if (this.className)
					var axis = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i);
				//Axis, default = se
				self.axis = axis && axis[1] ? axis[1] : 'se';
			}
		});

		//If we want to auto hide the elements
		if (o.autoHide) {
			this._handles.hide();
			$(this.element)
				.addClass("ui-resizable-autohide")
				.hover(function() {
					if (o.disabled) return;
					$(this).removeClass("ui-resizable-autohide");
					self._handles.show();
				},
				function(){
					if (o.disabled) return;
					if (!self.resizing) {
						$(this).addClass("ui-resizable-autohide");
						self._handles.hide();
					}
				});
		}

		//Initialize the mouse interaction
		this._mouseInit();

	},

	destroy: function() {

		this._mouseDestroy();

		var _destroy = function(exp) {
			$(exp).removeClass("ui-resizable ui-resizable-disabled ui-resizable-resizing")
				.removeData("resizable").unbind(".resizable").find('.ui-resizable-handle').remove();
		};

		//TODO: Unwrap at same DOM position
		if (this.elementIsWrapper) {
			_destroy(this.element);
			var wrapper = this.element;
			wrapper.after(
				this.originalElement.css({
					position: wrapper.css('position'),
					width: wrapper.outerWidth(),
					height: wrapper.outerHeight(),
					top: wrapper.css('top'),
					left: wrapper.css('left')
				})
			).remove();
		}

		this.originalElement.css('resize', this.originalResizeStyle);
		_destroy(this.originalElement);

		return this;
	},

	_mouseCapture: function(event) {
		var handle = false;
		for (var i in this.handles) {
			if ($(this.handles[i])[0] == event.target) {
				handle = true;
			}
		}

		return !this.options.disabled && handle;
	},

	_mouseStart: function(event) {

		var o = this.options, iniPos = this.element.position(), el = this.element;

		this.resizing = true;
		this.documentScroll = { top: $(document).scrollTop(), left: $(document).scrollLeft() };

		// bugfix for http://dev.jquery.com/ticket/1749
		if (el.is('.ui-draggable') || (/absolute/).test(el.css('position'))) {
			el.css({ position: 'absolute', top: iniPos.top, left: iniPos.left });
		}

		this._renderProxy();

		var curleft = num(this.helper.css('left')), curtop = num(this.helper.css('top'));

		if (o.containment) {
			curleft += $(o.containment).scrollLeft() || 0;
			curtop += $(o.containment).scrollTop() || 0;
		}

		//Store needed variables
		this.offset = this.helper.offset();
		this.position = { left: curleft, top: curtop };
		this.size = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
		this.originalSize = this._helper ? { width: el.outerWidth(), height: el.outerHeight() } : { width: el.width(), height: el.height() };
		this.originalPosition = { left: curleft, top: curtop };
		this.sizeDiff = { width: el.outerWidth() - el.width(), height: el.outerHeight() - el.height() };
		this.originalMousePosition = { left: event.pageX, top: event.pageY };

		//Aspect Ratio
		this.aspectRatio = (typeof o.aspectRatio == 'number') ? o.aspectRatio : ((this.originalSize.width / this.originalSize.height) || 1);

	    var cursor = $('.ui-resizable-' + this.axis).css('cursor');
	    $('body').css('cursor', cursor == 'auto' ? this.axis + '-resize' : cursor);

		el.addClass("ui-resizable-resizing");
		this._propagate("start", event);
		return true;
	},

	_mouseDrag: function(event) {

		//Increase performance, avoid regex
		var el = this.helper, o = this.options, props = {},
			self = this, smp = this.originalMousePosition, a = this.axis;

		var dx = (event.pageX-smp.left)||0, dy = (event.pageY-smp.top)||0;
		var trigger = this._change[a];
		if (!trigger) return false;

		// Calculate the attrs that will be change
		var data = trigger.apply(this, [event, dx, dy]), ie6 = $.browser.msie && $.browser.version < 7, csdif = this.sizeDiff;

		// Put this in the mouseDrag handler since the user can start pressing shift while resizing
		this._updateVirtualBoundaries(event.shiftKey);
		if (this._aspectRatio || event.shiftKey)
			data = this._updateRatio(data, event);

		data = this._respectSize(data, event);

		// plugins callbacks need to be called first
		this._propagate("resize", event);

		el.css({
			top: this.position.top + "px", left: this.position.left + "px",
			width: this.size.width + "px", height: this.size.height + "px"
		});

		if (!this._helper && this._proportionallyResizeElements.length)
			this._proportionallyResize();

		this._updateCache(data);

		// calling the user callback at the end
		this._trigger('resize', event, this.ui());

		return false;
	},

	_mouseStop: function(event) {

		this.resizing = false;
		var o = this.options, self = this;

		if(this._helper) {
			var pr = this._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
				soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : self.sizeDiff.height,
				soffsetw = ista ? 0 : self.sizeDiff.width;

			var s = { width: (self.helper.width()  - soffsetw), height: (self.helper.height() - soffseth) },
				left = (parseInt(self.element.css('left'), 10) + (self.position.left - self.originalPosition.left)) || null,
				top = (parseInt(self.element.css('top'), 10) + (self.position.top - self.originalPosition.top)) || null;

			if (!o.animate)
				this.element.css($.extend(s, { top: top, left: left }));

			self.helper.height(self.size.height);
			self.helper.width(self.size.width);

			if (this._helper && !o.animate) this._proportionallyResize();
		}

		$('body').css('cursor', 'auto');

		this.element.removeClass("ui-resizable-resizing");

		this._propagate("stop", event);

		if (this._helper) this.helper.remove();
		return false;

	},

    _updateVirtualBoundaries: function(forceAspectRatio) {
        var o = this.options, pMinWidth, pMaxWidth, pMinHeight, pMaxHeight, b;

        b = {
            minWidth: isNumber(o.minWidth) ? o.minWidth : 0,
            maxWidth: isNumber(o.maxWidth) ? o.maxWidth : Infinity,
            minHeight: isNumber(o.minHeight) ? o.minHeight : 0,
            maxHeight: isNumber(o.maxHeight) ? o.maxHeight : Infinity
        };

        if(this._aspectRatio || forceAspectRatio) {
            // We want to create an enclosing box whose aspect ration is the requested one
            // First, compute the "projected" size for each dimension based on the aspect ratio and other dimension
            pMinWidth = b.minHeight * this.aspectRatio;
            pMinHeight = b.minWidth / this.aspectRatio;
            pMaxWidth = b.maxHeight * this.aspectRatio;
            pMaxHeight = b.maxWidth / this.aspectRatio;

            if(pMinWidth > b.minWidth) b.minWidth = pMinWidth;
            if(pMinHeight > b.minHeight) b.minHeight = pMinHeight;
            if(pMaxWidth < b.maxWidth) b.maxWidth = pMaxWidth;
            if(pMaxHeight < b.maxHeight) b.maxHeight = pMaxHeight;
        }
        this._vBoundaries = b;
    },

	_updateCache: function(data) {
		var o = this.options;
		this.offset = this.helper.offset();
		if (isNumber(data.left)) this.position.left = data.left;
		if (isNumber(data.top)) this.position.top = data.top;
		if (isNumber(data.height)) this.size.height = data.height;
		if (isNumber(data.width)) this.size.width = data.width;
	},

	_updateRatio: function(data, event) {

		var o = this.options, cpos = this.position, csize = this.size, a = this.axis;

		if (isNumber(data.height)) data.width = (data.height * this.aspectRatio);
		else if (isNumber(data.width)) data.height = (data.width / this.aspectRatio);

		if (a == 'sw') {
			data.left = cpos.left + (csize.width - data.width);
			data.top = null;
		}
		if (a == 'nw') {
			data.top = cpos.top + (csize.height - data.height);
			data.left = cpos.left + (csize.width - data.width);
		}

		return data;
	},

	_respectSize: function(data, event) {

		var el = this.helper, o = this._vBoundaries, pRatio = this._aspectRatio || event.shiftKey, a = this.axis,
				ismaxw = isNumber(data.width) && o.maxWidth && (o.maxWidth < data.width), ismaxh = isNumber(data.height) && o.maxHeight && (o.maxHeight < data.height),
					isminw = isNumber(data.width) && o.minWidth && (o.minWidth > data.width), isminh = isNumber(data.height) && o.minHeight && (o.minHeight > data.height);

		if (isminw) data.width = o.minWidth;
		if (isminh) data.height = o.minHeight;
		if (ismaxw) data.width = o.maxWidth;
		if (ismaxh) data.height = o.maxHeight;

		var dw = this.originalPosition.left + this.originalSize.width, dh = this.position.top + this.size.height;
		var cw = /sw|nw|w/.test(a), ch = /nw|ne|n/.test(a);

		if (isminw && cw) data.left = dw - o.minWidth;
		if (ismaxw && cw) data.left = dw - o.maxWidth;
		if (isminh && ch)	data.top = dh - o.minHeight;
		if (ismaxh && ch)	data.top = dh - o.maxHeight;

		// fixing jump error on top/left - bug #2330
		var isNotwh = !data.width && !data.height;
		if (isNotwh && !data.left && data.top) data.top = null;
		else if (isNotwh && !data.top && data.left) data.left = null;

		return data;
	},

	_proportionallyResize: function() {

		var o = this.options;
		if (!this._proportionallyResizeElements.length) return;
		var element = this.helper || this.element;

		for (var i=0; i < this._proportionallyResizeElements.length; i++) {

			var prel = this._proportionallyResizeElements[i];

			if (!this.borderDif) {
				var b = [prel.css('borderTopWidth'), prel.css('borderRightWidth'), prel.css('borderBottomWidth'), prel.css('borderLeftWidth')],
					p = [prel.css('paddingTop'), prel.css('paddingRight'), prel.css('paddingBottom'), prel.css('paddingLeft')];

				this.borderDif = $.map(b, function(v, i) {
					var border = parseInt(v,10)||0, padding = parseInt(p[i],10)||0;
					return border + padding;
				});
			}

			if ($.browser.msie && !(!($(element).is(':hidden') || $(element).parents(':hidden').length)))
				continue;

			prel.css({
				height: (element.height() - this.borderDif[0] - this.borderDif[2]) || 0,
				width: (element.width() - this.borderDif[1] - this.borderDif[3]) || 0
			});

		};

	},

	_renderProxy: function() {

		var el = this.element, o = this.options;
		this.elementOffset = el.offset();

		if(this._helper) {

			this.helper = this.helper || $('<div style="overflow:hidden;"></div>');

			// fix ie6 offset TODO: This seems broken
			var ie6 = $.browser.msie && $.browser.version < 7, ie6offset = (ie6 ? 1 : 0),
			pxyoffset = ( ie6 ? 2 : -1 );

			this.helper.addClass(this._helper).css({
				width: this.element.outerWidth() + pxyoffset,
				height: this.element.outerHeight() + pxyoffset,
				position: 'absolute',
				left: this.elementOffset.left - ie6offset +'px',
				top: this.elementOffset.top - ie6offset +'px',
				zIndex: ++o.zIndex //TODO: Don't modify option
			});

			this.helper
				.appendTo("body")
				.disableSelection();

		} else {
			this.helper = this.element;
		}

	},

	_change: {
		e: function(event, dx, dy) {
			return { width: this.originalSize.width + dx };
		},
		w: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			return { left: sp.left + dx, width: cs.width - dx };
		},
		n: function(event, dx, dy) {
			var o = this.options, cs = this.originalSize, sp = this.originalPosition;
			return { top: sp.top + dy, height: cs.height - dy };
		},
		s: function(event, dx, dy) {
			return { height: this.originalSize.height + dy };
		},
		se: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
		},
		sw: function(event, dx, dy) {
			return $.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
		},
		ne: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [event, dx, dy]));
		},
		nw: function(event, dx, dy) {
			return $.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [event, dx, dy]));
		}
	},

	_propagate: function(n, event) {
		$.ui.plugin.call(this, n, [event, this.ui()]);
		(n != "resize" && this._trigger(n, event, this.ui()));
	},

	plugins: {},

	ui: function() {
		return {
			originalElement: this.originalElement,
			element: this.element,
			helper: this.helper,
			position: this.position,
			size: this.size,
			originalSize: this.originalSize,
			originalPosition: this.originalPosition
		};
	}

});

$.extend($.ui.resizable, {
	version: "1.8.20"
});

/*
 * Resizable Extensions
 */

$.ui.plugin.add("resizable", "alsoResize", {

	start: function (event, ui) {
		var self = $(this).data("resizable"), o = self.options;

		var _store = function (exp) {
			$(exp).each(function() {
				var el = $(this);
				el.data("resizable-alsoresize", {
					width: parseInt(el.width(), 10), height: parseInt(el.height(), 10),
					left: parseInt(el.css('left'), 10), top: parseInt(el.css('top'), 10)
				});
			});
		};

		if (typeof(o.alsoResize) == 'object' && !o.alsoResize.parentNode) {
			if (o.alsoResize.length) { o.alsoResize = o.alsoResize[0]; _store(o.alsoResize); }
			else { $.each(o.alsoResize, function (exp) { _store(exp); }); }
		}else{
			_store(o.alsoResize);
		}
	},

	resize: function (event, ui) {
		var self = $(this).data("resizable"), o = self.options, os = self.originalSize, op = self.originalPosition;

		var delta = {
			height: (self.size.height - os.height) || 0, width: (self.size.width - os.width) || 0,
			top: (self.position.top - op.top) || 0, left: (self.position.left - op.left) || 0
		},

		_alsoResize = function (exp, c) {
			$(exp).each(function() {
				var el = $(this), start = $(this).data("resizable-alsoresize"), style = {}, 
					css = c && c.length ? c : el.parents(ui.originalElement[0]).length ? ['width', 'height'] : ['width', 'height', 'top', 'left'];

				$.each(css, function (i, prop) {
					var sum = (start[prop]||0) + (delta[prop]||0);
					if (sum && sum >= 0)
						style[prop] = sum || null;
				});

				el.css(style);
			});
		};

		if (typeof(o.alsoResize) == 'object' && !o.alsoResize.nodeType) {
			$.each(o.alsoResize, function (exp, c) { _alsoResize(exp, c); });
		}else{
			_alsoResize(o.alsoResize);
		}
	},

	stop: function (event, ui) {
		$(this).removeData("resizable-alsoresize");
	}
});

$.ui.plugin.add("resizable", "animate", {

	stop: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options;

		var pr = self._proportionallyResizeElements, ista = pr.length && (/textarea/i).test(pr[0].nodeName),
					soffseth = ista && $.ui.hasScroll(pr[0], 'left') /* TODO - jump height */ ? 0 : self.sizeDiff.height,
						soffsetw = ista ? 0 : self.sizeDiff.width;

		var style = { width: (self.size.width - soffsetw), height: (self.size.height - soffseth) },
					left = (parseInt(self.element.css('left'), 10) + (self.position.left - self.originalPosition.left)) || null,
						top = (parseInt(self.element.css('top'), 10) + (self.position.top - self.originalPosition.top)) || null;

		self.element.animate(
			$.extend(style, top && left ? { top: top, left: left } : {}), {
				duration: o.animateDuration,
				easing: o.animateEasing,
				step: function() {

					var data = {
						width: parseInt(self.element.css('width'), 10),
						height: parseInt(self.element.css('height'), 10),
						top: parseInt(self.element.css('top'), 10),
						left: parseInt(self.element.css('left'), 10)
					};

					if (pr && pr.length) $(pr[0]).css({ width: data.width, height: data.height });

					// propagating resize, and updating values for each animation step
					self._updateCache(data);
					self._propagate("resize", event);

				}
			}
		);
	}

});

$.ui.plugin.add("resizable", "containment", {

	start: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options, el = self.element;
		var oc = o.containment,	ce = (oc instanceof $) ? oc.get(0) : (/parent/.test(oc)) ? el.parent().get(0) : oc;
		if (!ce) return;

		self.containerElement = $(ce);

		if (/document/.test(oc) || oc == document) {
			self.containerOffset = { left: 0, top: 0 };
			self.containerPosition = { left: 0, top: 0 };

			self.parentData = {
				element: $(document), left: 0, top: 0,
				width: $(document).width(), height: $(document).height() || document.body.parentNode.scrollHeight
			};
		}

		// i'm a node, so compute top, left, right, bottom
		else {
			var element = $(ce), p = [];
			$([ "Top", "Right", "Left", "Bottom" ]).each(function(i, name) { p[i] = num(element.css("padding" + name)); });

			self.containerOffset = element.offset();
			self.containerPosition = element.position();
			self.containerSize = { height: (element.innerHeight() - p[3]), width: (element.innerWidth() - p[1]) };

			var co = self.containerOffset, ch = self.containerSize.height,	cw = self.containerSize.width,
						width = ($.ui.hasScroll(ce, "left") ? ce.scrollWidth : cw ), height = ($.ui.hasScroll(ce) ? ce.scrollHeight : ch);

			self.parentData = {
				element: ce, left: co.left, top: co.top, width: width, height: height
			};
		}
	},

	resize: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options,
				ps = self.containerSize, co = self.containerOffset, cs = self.size, cp = self.position,
				pRatio = self._aspectRatio || event.shiftKey, cop = { top:0, left:0 }, ce = self.containerElement;

		if (ce[0] != document && (/static/).test(ce.css('position'))) cop = co;

		if (cp.left < (self._helper ? co.left : 0)) {
			self.size.width = self.size.width + (self._helper ? (self.position.left - co.left) : (self.position.left - cop.left));
			if (pRatio) self.size.height = self.size.width / self.aspectRatio;
			self.position.left = o.helper ? co.left : 0;
		}

		if (cp.top < (self._helper ? co.top : 0)) {
			self.size.height = self.size.height + (self._helper ? (self.position.top - co.top) : self.position.top);
			if (pRatio) self.size.width = self.size.height * self.aspectRatio;
			self.position.top = self._helper ? co.top : 0;
		}

		self.offset.left = self.parentData.left+self.position.left;
		self.offset.top = self.parentData.top+self.position.top;

		var woset = Math.abs( (self._helper ? self.offset.left - cop.left : (self.offset.left - cop.left)) + self.sizeDiff.width ),
					hoset = Math.abs( (self._helper ? self.offset.top - cop.top : (self.offset.top - co.top)) + self.sizeDiff.height );

		var isParent = self.containerElement.get(0) == self.element.parent().get(0),
		    isOffsetRelative = /relative|absolute/.test(self.containerElement.css('position'));

		if(isParent && isOffsetRelative) woset -= self.parentData.left;

		if (woset + self.size.width >= self.parentData.width) {
			self.size.width = self.parentData.width - woset;
			if (pRatio) self.size.height = self.size.width / self.aspectRatio;
		}

		if (hoset + self.size.height >= self.parentData.height) {
			self.size.height = self.parentData.height - hoset;
			if (pRatio) self.size.width = self.size.height * self.aspectRatio;
		}
	},

	stop: function(event, ui){
		var self = $(this).data("resizable"), o = self.options, cp = self.position,
				co = self.containerOffset, cop = self.containerPosition, ce = self.containerElement;

		var helper = $(self.helper), ho = helper.offset(), w = helper.outerWidth() - self.sizeDiff.width, h = helper.outerHeight() - self.sizeDiff.height;

		if (self._helper && !o.animate && (/relative/).test(ce.css('position')))
			$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

		if (self._helper && !o.animate && (/static/).test(ce.css('position')))
			$(this).css({ left: ho.left - cop.left - co.left, width: w, height: h });

	}
});

$.ui.plugin.add("resizable", "ghost", {

	start: function(event, ui) {

		var self = $(this).data("resizable"), o = self.options, cs = self.size;

		self.ghost = self.originalElement.clone();
		self.ghost
			.css({ opacity: .25, display: 'block', position: 'relative', height: cs.height, width: cs.width, margin: 0, left: 0, top: 0 })
			.addClass('ui-resizable-ghost')
			.addClass(typeof o.ghost == 'string' ? o.ghost : '');

		self.ghost.appendTo(self.helper);

	},

	resize: function(event, ui){
		var self = $(this).data("resizable"), o = self.options;
		if (self.ghost) self.ghost.css({ position: 'relative', height: self.size.height, width: self.size.width });
	},

	stop: function(event, ui){
		var self = $(this).data("resizable"), o = self.options;
		if (self.ghost && self.helper) self.helper.get(0).removeChild(self.ghost.get(0));
	}

});

$.ui.plugin.add("resizable", "grid", {

	resize: function(event, ui) {
		var self = $(this).data("resizable"), o = self.options, cs = self.size, os = self.originalSize, op = self.originalPosition, a = self.axis, ratio = o._aspectRatio || event.shiftKey;
		o.grid = typeof o.grid == "number" ? [o.grid, o.grid] : o.grid;
		var ox = Math.round((cs.width - os.width) / (o.grid[0]||1)) * (o.grid[0]||1), oy = Math.round((cs.height - os.height) / (o.grid[1]||1)) * (o.grid[1]||1);

		if (/^(se|s|e)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
		}
		else if (/^(ne)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.top = op.top - oy;
		}
		else if (/^(sw)$/.test(a)) {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.left = op.left - ox;
		}
		else {
			self.size.width = os.width + ox;
			self.size.height = os.height + oy;
			self.position.top = op.top - oy;
			self.position.left = op.left - ox;
		}
	}

});

var num = function(v) {
	return parseInt(v, 10) || 0;
};

var isNumber = function(value) {
	return !isNaN(parseInt(value, 10));
};

})(jQuery);
/*!
 * jQuery UI Selectable 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Selectables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.selectable", $.ui.mouse, {
	options: {
		appendTo: 'body',
		autoRefresh: true,
		distance: 0,
		filter: '*',
		tolerance: 'touch'
	},
	_create: function() {
		var self = this;

		this.element.addClass("ui-selectable");

		this.dragged = false;

		// cache selectee children based on filter
		var selectees;
		this.refresh = function() {
			selectees = $(self.options.filter, self.element[0]);
			selectees.addClass("ui-selectee");
			selectees.each(function() {
				var $this = $(this);
				var pos = $this.offset();
				$.data(this, "selectable-item", {
					element: this,
					$element: $this,
					left: pos.left,
					top: pos.top,
					right: pos.left + $this.outerWidth(),
					bottom: pos.top + $this.outerHeight(),
					startselected: false,
					selected: $this.hasClass('ui-selected'),
					selecting: $this.hasClass('ui-selecting'),
					unselecting: $this.hasClass('ui-unselecting')
				});
			});
		};
		this.refresh();

		this.selectees = selectees.addClass("ui-selectee");

		this._mouseInit();

		this.helper = $("<div class='ui-selectable-helper'></div>");
	},

	destroy: function() {
		this.selectees
			.removeClass("ui-selectee")
			.removeData("selectable-item");
		this.element
			.removeClass("ui-selectable ui-selectable-disabled")
			.removeData("selectable")
			.unbind(".selectable");
		this._mouseDestroy();

		return this;
	},

	_mouseStart: function(event) {
		var self = this;

		this.opos = [event.pageX, event.pageY];

		if (this.options.disabled)
			return;

		var options = this.options;

		this.selectees = $(options.filter, this.element[0]);

		this._trigger("start", event);

		$(options.appendTo).append(this.helper);
		// position helper (lasso)
		this.helper.css({
			"left": event.clientX,
			"top": event.clientY,
			"width": 0,
			"height": 0
		});

		if (options.autoRefresh) {
			this.refresh();
		}

		this.selectees.filter('.ui-selected').each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.startselected = true;
			if (!event.metaKey && !event.ctrlKey) {
				selectee.$element.removeClass('ui-selected');
				selectee.selected = false;
				selectee.$element.addClass('ui-unselecting');
				selectee.unselecting = true;
				// selectable UNSELECTING callback
				self._trigger("unselecting", event, {
					unselecting: selectee.element
				});
			}
		});

		$(event.target).parents().andSelf().each(function() {
			var selectee = $.data(this, "selectable-item");
			if (selectee) {
				var doSelect = (!event.metaKey && !event.ctrlKey) || !selectee.$element.hasClass('ui-selected');
				selectee.$element
					.removeClass(doSelect ? "ui-unselecting" : "ui-selected")
					.addClass(doSelect ? "ui-selecting" : "ui-unselecting");
				selectee.unselecting = !doSelect;
				selectee.selecting = doSelect;
				selectee.selected = doSelect;
				// selectable (UN)SELECTING callback
				if (doSelect) {
					self._trigger("selecting", event, {
						selecting: selectee.element
					});
				} else {
					self._trigger("unselecting", event, {
						unselecting: selectee.element
					});
				}
				return false;
			}
		});

	},

	_mouseDrag: function(event) {
		var self = this;
		this.dragged = true;

		if (this.options.disabled)
			return;

		var options = this.options;

		var x1 = this.opos[0], y1 = this.opos[1], x2 = event.pageX, y2 = event.pageY;
		if (x1 > x2) { var tmp = x2; x2 = x1; x1 = tmp; }
		if (y1 > y2) { var tmp = y2; y2 = y1; y1 = tmp; }
		this.helper.css({left: x1, top: y1, width: x2-x1, height: y2-y1});

		this.selectees.each(function() {
			var selectee = $.data(this, "selectable-item");
			//prevent helper from being selected if appendTo: selectable
			if (!selectee || selectee.element == self.element[0])
				return;
			var hit = false;
			if (options.tolerance == 'touch') {
				hit = ( !(selectee.left > x2 || selectee.right < x1 || selectee.top > y2 || selectee.bottom < y1) );
			} else if (options.tolerance == 'fit') {
				hit = (selectee.left > x1 && selectee.right < x2 && selectee.top > y1 && selectee.bottom < y2);
			}

			if (hit) {
				// SELECT
				if (selectee.selected) {
					selectee.$element.removeClass('ui-selected');
					selectee.selected = false;
				}
				if (selectee.unselecting) {
					selectee.$element.removeClass('ui-unselecting');
					selectee.unselecting = false;
				}
				if (!selectee.selecting) {
					selectee.$element.addClass('ui-selecting');
					selectee.selecting = true;
					// selectable SELECTING callback
					self._trigger("selecting", event, {
						selecting: selectee.element
					});
				}
			} else {
				// UNSELECT
				if (selectee.selecting) {
					if ((event.metaKey || event.ctrlKey) && selectee.startselected) {
						selectee.$element.removeClass('ui-selecting');
						selectee.selecting = false;
						selectee.$element.addClass('ui-selected');
						selectee.selected = true;
					} else {
						selectee.$element.removeClass('ui-selecting');
						selectee.selecting = false;
						if (selectee.startselected) {
							selectee.$element.addClass('ui-unselecting');
							selectee.unselecting = true;
						}
						// selectable UNSELECTING callback
						self._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
				}
				if (selectee.selected) {
					if (!event.metaKey && !event.ctrlKey && !selectee.startselected) {
						selectee.$element.removeClass('ui-selected');
						selectee.selected = false;

						selectee.$element.addClass('ui-unselecting');
						selectee.unselecting = true;
						// selectable UNSELECTING callback
						self._trigger("unselecting", event, {
							unselecting: selectee.element
						});
					}
				}
			}
		});

		return false;
	},

	_mouseStop: function(event) {
		var self = this;

		this.dragged = false;

		var options = this.options;

		$('.ui-unselecting', this.element[0]).each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.$element.removeClass('ui-unselecting');
			selectee.unselecting = false;
			selectee.startselected = false;
			self._trigger("unselected", event, {
				unselected: selectee.element
			});
		});
		$('.ui-selecting', this.element[0]).each(function() {
			var selectee = $.data(this, "selectable-item");
			selectee.$element.removeClass('ui-selecting').addClass('ui-selected');
			selectee.selecting = false;
			selectee.selected = true;
			selectee.startselected = true;
			self._trigger("selected", event, {
				selected: selectee.element
			});
		});
		this._trigger("stop", event);

		this.helper.remove();

		return false;
	}

});

$.extend($.ui.selectable, {
	version: "1.8.20"
});

})(jQuery);
/*!
 * jQuery UI Sortable 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Sortables
 *
 * Depends:
 *	jquery.ui.core.js
 *	jquery.ui.mouse.js
 *	jquery.ui.widget.js
 */
(function( $, undefined ) {

$.widget("ui.sortable", $.ui.mouse, {
	widgetEventPrefix: "sort",
	ready: false,
	options: {
		appendTo: "parent",
		axis: false,
		connectWith: false,
		containment: false,
		cursor: 'auto',
		cursorAt: false,
		dropOnEmpty: true,
		forcePlaceholderSize: false,
		forceHelperSize: false,
		grid: false,
		handle: false,
		helper: "original",
		items: '> *',
		opacity: false,
		placeholder: false,
		revert: false,
		scroll: true,
		scrollSensitivity: 20,
		scrollSpeed: 20,
		scope: "default",
		tolerance: "intersect",
		zIndex: 1000
	},
	_create: function() {

		var o = this.options;
		this.containerCache = {};
		this.element.addClass("ui-sortable");

		//Get the items
		this.refresh();

		//Let's determine if the items are being displayed horizontally
		this.floating = this.items.length ? o.axis === 'x' || (/left|right/).test(this.items[0].item.css('float')) || (/inline|table-cell/).test(this.items[0].item.css('display')) : false;

		//Let's determine the parent's offset
		this.offset = this.element.offset();

		//Initialize mouse events for interaction
		this._mouseInit();
		
		//We're ready to go
		this.ready = true

	},

	destroy: function() {
		$.Widget.prototype.destroy.call( this );
		this.element
			.removeClass("ui-sortable ui-sortable-disabled");
		this._mouseDestroy();

		for ( var i = this.items.length - 1; i >= 0; i-- )
			this.items[i].item.removeData(this.widgetName + "-item");

		return this;
	},

	_setOption: function(key, value){
		if ( key === "disabled" ) {
			this.options[ key ] = value;
	
			this.widget()
				[ value ? "addClass" : "removeClass"]( "ui-sortable-disabled" );
		} else {
			// Don't call widget base _setOption for disable as it adds ui-state-disabled class
			$.Widget.prototype._setOption.apply(this, arguments);
		}
	},

	_mouseCapture: function(event, overrideHandle) {
		var that = this;

		if (this.reverting) {
			return false;
		}

		if(this.options.disabled || this.options.type == 'static') return false;

		//We have to refresh the items data once first
		this._refreshItems(event);

		//Find out if the clicked node (or one of its parents) is a actual item in this.items
		var currentItem = null, self = this, nodes = $(event.target).parents().each(function() {
			if($.data(this, that.widgetName + '-item') == self) {
				currentItem = $(this);
				return false;
			}
		});
		if($.data(event.target, that.widgetName + '-item') == self) currentItem = $(event.target);

		if(!currentItem) return false;
		if(this.options.handle && !overrideHandle) {
			var validHandle = false;

			$(this.options.handle, currentItem).find("*").andSelf().each(function() { if(this == event.target) validHandle = true; });
			if(!validHandle) return false;
		}

		this.currentItem = currentItem;
		this._removeCurrentsFromItems();
		return true;

	},

	_mouseStart: function(event, overrideHandle, noActivation) {

		var o = this.options, self = this;
		this.currentContainer = this;

		//We only need to call refreshPositions, because the refreshItems call has been moved to mouseCapture
		this.refreshPositions();

		//Create and append the visible helper
		this.helper = this._createHelper(event);

		//Cache the helper size
		this._cacheHelperProportions();

		/*
		 * - Position generation -
		 * This block generates everything position related - it's the core of draggables.
		 */

		//Cache the margins of the original element
		this._cacheMargins();

		//Get the next scrolling parent
		this.scrollParent = this.helper.scrollParent();

		//The element's absolute position on the page minus margins
		this.offset = this.currentItem.offset();
		this.offset = {
			top: this.offset.top - this.margins.top,
			left: this.offset.left - this.margins.left
		};

		// Only after we got the offset, we can change the helper's position to absolute
		// TODO: Still need to figure out a way to make relative sorting possible
		this.helper.css("position", "absolute");
		this.cssPosition = this.helper.css("position");

		$.extend(this.offset, {
			click: { //Where the click happened, relative to the element
				left: event.pageX - this.offset.left,
				top: event.pageY - this.offset.top
			},
			parent: this._getParentOffset(),
			relative: this._getRelativeOffset() //This is a relative to absolute position minus the actual position calculation - only used for relative positioned helper
		});

		//Generate the original position
		this.originalPosition = this._generatePosition(event);
		this.originalPageX = event.pageX;
		this.originalPageY = event.pageY;

		//Adjust the mouse offset relative to the helper if 'cursorAt' is supplied
		(o.cursorAt && this._adjustOffsetFromHelper(o.cursorAt));

		//Cache the former DOM position
		this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] };

		//If the helper is not the original, hide the original so it's not playing any role during the drag, won't cause anything bad this way
		if(this.helper[0] != this.currentItem[0]) {
			this.currentItem.hide();
		}

		//Create the placeholder
		this._createPlaceholder();

		//Set a containment if given in the options
		if(o.containment)
			this._setContainment();

		if(o.cursor) { // cursor option
			if ($('body').css("cursor")) this._storedCursor = $('body').css("cursor");
			$('body').css("cursor", o.cursor);
		}

		if(o.opacity) { // opacity option
			if (this.helper.css("opacity")) this._storedOpacity = this.helper.css("opacity");
			this.helper.css("opacity", o.opacity);
		}

		if(o.zIndex) { // zIndex option
			if (this.helper.css("zIndex")) this._storedZIndex = this.helper.css("zIndex");
			this.helper.css("zIndex", o.zIndex);
		}

		//Prepare scrolling
		if(this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML')
			this.overflowOffset = this.scrollParent.offset();

		//Call callbacks
		this._trigger("start", event, this._uiHash());

		//Recache the helper size
		if(!this._preserveHelperProportions)
			this._cacheHelperProportions();


		//Post 'activate' events to possible containers
		if(!noActivation) {
			 for (var i = this.containers.length - 1; i >= 0; i--) { this.containers[i]._trigger("activate", event, self._uiHash(this)); }
		}

		//Prepare possible droppables
		if($.ui.ddmanager)
			$.ui.ddmanager.current = this;

		if ($.ui.ddmanager && !o.dropBehaviour)
			$.ui.ddmanager.prepareOffsets(this, event);

		this.dragging = true;

		this.helper.addClass("ui-sortable-helper");
		this._mouseDrag(event); //Execute the drag once - this causes the helper not to be visible before getting its correct position
		return true;

	},

	_mouseDrag: function(event) {

		//Compute the helpers position
		this.position = this._generatePosition(event);
		this.positionAbs = this._convertPositionTo("absolute");

		if (!this.lastPositionAbs) {
			this.lastPositionAbs = this.positionAbs;
		}

		//Do scrolling
		if(this.options.scroll) {
			var o = this.options, scrolled = false;
			if(this.scrollParent[0] != document && this.scrollParent[0].tagName != 'HTML') {

				if((this.overflowOffset.top + this.scrollParent[0].offsetHeight) - event.pageY < o.scrollSensitivity)
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop + o.scrollSpeed;
				else if(event.pageY - this.overflowOffset.top < o.scrollSensitivity)
					this.scrollParent[0].scrollTop = scrolled = this.scrollParent[0].scrollTop - o.scrollSpeed;

				if((this.overflowOffset.left + this.scrollParent[0].offsetWidth) - event.pageX < o.scrollSensitivity)
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft + o.scrollSpeed;
				else if(event.pageX - this.overflowOffset.left < o.scrollSensitivity)
					this.scrollParent[0].scrollLeft = scrolled = this.scrollParent[0].scrollLeft - o.scrollSpeed;

			} else {

				if(event.pageY - $(document).scrollTop() < o.scrollSensitivity)
					scrolled = $(document).scrollTop($(document).scrollTop() - o.scrollSpeed);
				else if($(window).height() - (event.pageY - $(document).scrollTop()) < o.scrollSensitivity)
					scrolled = $(document).scrollTop($(document).scrollTop() + o.scrollSpeed);

				if(event.pageX - $(document).scrollLeft() < o.scrollSensitivity)
					scrolled = $(document).scrollLeft($(document).scrollLeft() - o.scrollSpeed);
				else if($(window).width() - (event.pageX - $(document).scrollLeft()) < o.scrollSensitivity)
					scrolled = $(document).scrollLeft($(document).scrollLeft() + o.scrollSpeed);

			}

			if(scrolled !== false && $.ui.ddmanager && !o.dropBehaviour)
				$.ui.ddmanager.prepareOffsets(this, event);
		}

		//Regenerate the absolute position used for position checks
		this.positionAbs = this._convertPositionTo("absolute");

		//Set the helper position
		if(!this.options.axis || this.options.axis != "y") this.helper[0].style.left = this.position.left+'px';
		if(!this.options.axis || this.options.axis != "x") this.helper[0].style.top = this.position.top+'px';

		//Rearrange
		for (var i = this.items.length - 1; i >= 0; i--) {

			//Cache variables and intersection, continue if no intersection
			var item = this.items[i], itemElement = item.item[0], intersection = this._intersectsWithPointer(item);
			if (!intersection) continue;

			if(itemElement != this.currentItem[0] //cannot intersect with itself
				&&	this.placeholder[intersection == 1 ? "next" : "prev"]()[0] != itemElement //no useless actions that have been done before
				&&	!$.ui.contains(this.placeholder[0], itemElement) //no action if the item moved is the parent of the item checked
				&& (this.options.type == 'semi-dynamic' ? !$.ui.contains(this.element[0], itemElement) : true)
				//&& itemElement.parentNode == this.placeholder[0].parentNode // only rearrange items within the same container
			) {

				this.direction = intersection == 1 ? "down" : "up";

				if (this.options.tolerance == "pointer" || this._intersectsWithSides(item)) {
					this._rearrange(event, item);
				} else {
					break;
				}

				this._trigger("change", event, this._uiHash());
				break;
			}
		}

		//Post events to containers
		this._contactContainers(event);

		//Interconnect with droppables
		if($.ui.ddmanager) $.ui.ddmanager.drag(this, event);

		//Call callbacks
		this._trigger('sort', event, this._uiHash());

		this.lastPositionAbs = this.positionAbs;
		return false;

	},

	_mouseStop: function(event, noPropagation) {

		if(!event) return;

		//If we are using droppables, inform the manager about the drop
		if ($.ui.ddmanager && !this.options.dropBehaviour)
			$.ui.ddmanager.drop(this, event);

		if(this.options.revert) {
			var self = this;
			var cur = self.placeholder.offset();

			self.reverting = true;

			$(this.helper).animate({
				left: cur.left - this.offset.parent.left - self.margins.left + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollLeft),
				top: cur.top - this.offset.parent.top - self.margins.top + (this.offsetParent[0] == document.body ? 0 : this.offsetParent[0].scrollTop)
			}, parseInt(this.options.revert, 10) || 500, function() {
				self._clear(event);
			});
		} else {
			this._clear(event, noPropagation);
		}

		return false;

	},

	cancel: function() {

		var self = this;

		if(this.dragging) {

			this._mouseUp({ target: null });

			if(this.options.helper == "original")
				this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
			else
				this.currentItem.show();

			//Post deactivating events to containers
			for (var i = this.containers.length - 1; i >= 0; i--){
				this.containers[i]._trigger("deactivate", null, self._uiHash(this));
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", null, self._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}

		if (this.placeholder) {
			//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
			if(this.placeholder[0].parentNode) this.placeholder[0].parentNode.removeChild(this.placeholder[0]);
			if(this.options.helper != "original" && this.helper && this.helper[0].parentNode) this.helper.remove();

			$.extend(this, {
				helper: null,
				dragging: false,
				reverting: false,
				_noFinalSort: null
			});

			if(this.domPosition.prev) {
				$(this.domPosition.prev).after(this.currentItem);
			} else {
				$(this.domPosition.parent).prepend(this.currentItem);
			}
		}

		return this;

	},

	serialize: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected);
		var str = []; o = o || {};

		$(items).each(function() {
			var res = ($(o.item || this).attr(o.attribute || 'id') || '').match(o.expression || (/(.+)[-=_](.+)/));
			if(res) str.push((o.key || res[1]+'[]')+'='+(o.key && o.expression ? res[1] : res[2]));
		});

		if(!str.length && o.key) {
			str.push(o.key + '=');
		}

		return str.join('&');

	},

	toArray: function(o) {

		var items = this._getItemsAsjQuery(o && o.connected);
		var ret = []; o = o || {};

		items.each(function() { ret.push($(o.item || this).attr(o.attribute || 'id') || ''); });
		return ret;

	},

	/* Be careful with the following core functions */
	_intersectsWith: function(item) {

		var x1 = this.positionAbs.left,
			x2 = x1 + this.helperProportions.width,
			y1 = this.positionAbs.top,
			y2 = y1 + this.helperProportions.height;

		var l = item.left,
			r = l + item.width,
			t = item.top,
			b = t + item.height;

		var dyClick = this.offset.click.top,
			dxClick = this.offset.click.left;

		var isOverElement = (y1 + dyClick) > t && (y1 + dyClick) < b && (x1 + dxClick) > l && (x1 + dxClick) < r;

		if(	   this.options.tolerance == "pointer"
			|| this.options.forcePointerForContainers
			|| (this.options.tolerance != "pointer" && this.helperProportions[this.floating ? 'width' : 'height'] > item[this.floating ? 'width' : 'height'])
		) {
			return isOverElement;
		} else {

			return (l < x1 + (this.helperProportions.width / 2) // Right Half
				&& x2 - (this.helperProportions.width / 2) < r // Left Half
				&& t < y1 + (this.helperProportions.height / 2) // Bottom Half
				&& y2 - (this.helperProportions.height / 2) < b ); // Top Half

		}
	},

	_intersectsWithPointer: function(item) {

		var isOverElementHeight = (this.options.axis === 'x') || $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top, item.height),
			isOverElementWidth = (this.options.axis === 'y') || $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left, item.width),
			isOverElement = isOverElementHeight && isOverElementWidth,
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (!isOverElement)
			return false;

		return this.floating ?
			( ((horizontalDirection && horizontalDirection == "right") || verticalDirection == "down") ? 2 : 1 )
			: ( verticalDirection && (verticalDirection == "down" ? 2 : 1) );

	},

	_intersectsWithSides: function(item) {

		var isOverBottomHalf = $.ui.isOverAxis(this.positionAbs.top + this.offset.click.top, item.top + (item.height/2), item.height),
			isOverRightHalf = $.ui.isOverAxis(this.positionAbs.left + this.offset.click.left, item.left + (item.width/2), item.width),
			verticalDirection = this._getDragVerticalDirection(),
			horizontalDirection = this._getDragHorizontalDirection();

		if (this.floating && horizontalDirection) {
			return ((horizontalDirection == "right" && isOverRightHalf) || (horizontalDirection == "left" && !isOverRightHalf));
		} else {
			return verticalDirection && ((verticalDirection == "down" && isOverBottomHalf) || (verticalDirection == "up" && !isOverBottomHalf));
		}

	},

	_getDragVerticalDirection: function() {
		var delta = this.positionAbs.top - this.lastPositionAbs.top;
		return delta != 0 && (delta > 0 ? "down" : "up");
	},

	_getDragHorizontalDirection: function() {
		var delta = this.positionAbs.left - this.lastPositionAbs.left;
		return delta != 0 && (delta > 0 ? "right" : "left");
	},

	refresh: function(event) {
		this._refreshItems(event);
		this.refreshPositions();
		return this;
	},

	_connectWith: function() {
		var options = this.options;
		return options.connectWith.constructor == String
			? [options.connectWith]
			: options.connectWith;
	},
	
	_getItemsAsjQuery: function(connected) {

		var self = this;
		var items = [];
		var queries = [];
		var connectWith = this._connectWith();

		if(connectWith && connected) {
			for (var i = connectWith.length - 1; i >= 0; i--){
				var cur = $(connectWith[i]);
				for (var j = cur.length - 1; j >= 0; j--){
					var inst = $.data(cur[j], this.widgetName);
					if(inst && inst != this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element) : $(inst.options.items, inst.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'), inst]);
					}
				};
			};
		}

		queries.push([$.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : $(this.options.items, this.element).not(".ui-sortable-helper").not('.ui-sortable-placeholder'), this]);

		for (var i = queries.length - 1; i >= 0; i--){
			queries[i][0].each(function() {
				items.push(this);
			});
		};

		return $(items);

	},

	_removeCurrentsFromItems: function() {

		var list = this.currentItem.find(":data(" + this.widgetName + "-item)");

		for (var i=0; i < this.items.length; i++) {

			for (var j=0; j < list.length; j++) {
				if(list[j] == this.items[i].item[0])
					this.items.splice(i,1);
			};

		};

	},

	_refreshItems: function(event) {

		this.items = [];
		this.containers = [this];
		var items = this.items;
		var self = this;
		var queries = [[$.isFunction(this.options.items) ? this.options.items.call(this.element[0], event, { item: this.currentItem }) : $(this.options.items, this.element), this]];
		var connectWith = this._connectWith();

		if(connectWith && this.ready) { //Shouldn't be run the first time through due to massive slow-down
			for (var i = connectWith.length - 1; i >= 0; i--){
				var cur = $(connectWith[i]);
				for (var j = cur.length - 1; j >= 0; j--){
					var inst = $.data(cur[j], this.widgetName);
					if(inst && inst != this && !inst.options.disabled) {
						queries.push([$.isFunction(inst.options.items) ? inst.options.items.call(inst.element[0], event, { item: this.currentItem }) : $(inst.options.items, inst.element), inst]);
						this.containers.push(inst);
					}
				};
			};
		}

		for (var i = queries.length - 1; i >= 0; i--) {
			var targetData = queries[i][1];
			var _queries = queries[i][0];

			for (var j=0, queriesLength = _queries.length; j < queriesLength; j++) {
				var item = $(_queries[j]);

				item.data(this.widgetName + '-item', targetData); // Data for target checking (mouse manager)

				items.push({
					item: item,
					instance: targetData,
					width: 0, height: 0,
					left: 0, top: 0
				});
			};
		};

	},

	refreshPositions: function(fast) {

		//This has to be redone because due to the item being moved out/into the offsetParent, the offsetParent's position will change
		if(this.offsetParent && this.helper) {
			this.offset.parent = this._getParentOffset();
		}

		for (var i = this.items.length - 1; i >= 0; i--){
			var item = this.items[i];

			//We ignore calculating positions of all connected containers when we're not over them
			if(item.instance != this.currentContainer && this.currentContainer && item.item[0] != this.currentItem[0])
				continue;

			var t = this.options.toleranceElement ? $(this.options.toleranceElement, item.item) : item.item;

			if (!fast) {
				item.width = t.outerWidth();
				item.height = t.outerHeight();
			}

			var p = t.offset();
			item.left = p.left;
			item.top = p.top;
		};

		if(this.options.custom && this.options.custom.refreshContainers) {
			this.options.custom.refreshContainers.call(this);
		} else {
			for (var i = this.containers.length - 1; i >= 0; i--){
				var p = this.containers[i].element.offset();
				this.containers[i].containerCache.left = p.left;
				this.containers[i].containerCache.top = p.top;
				this.containers[i].containerCache.width	= this.containers[i].element.outerWidth();
				this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
			};
		}

		return this;
	},

	_createPlaceholder: function(that) {

		var self = that || this, o = self.options;

		if(!o.placeholder || o.placeholder.constructor == String) {
			var className = o.placeholder;
			o.placeholder = {
				element: function() {

					var el = $(document.createElement(self.currentItem[0].nodeName))
						.addClass(className || self.currentItem[0].className+" ui-sortable-placeholder")
						.removeClass("ui-sortable-helper")[0];

					if(!className)
						el.style.visibility = "hidden";

					return el;
				},
				update: function(container, p) {

					// 1. If a className is set as 'placeholder option, we don't force sizes - the class is responsible for that
					// 2. The option 'forcePlaceholderSize can be enabled to force it even if a class name is specified
					if(className && !o.forcePlaceholderSize) return;

					//If the element doesn't have a actual height by itself (without styles coming from a stylesheet), it receives the inline height from the dragged item
					if(!p.height()) { p.height(self.currentItem.innerHeight() - parseInt(self.currentItem.css('paddingTop')||0, 10) - parseInt(self.currentItem.css('paddingBottom')||0, 10)); };
					if(!p.width()) { p.width(self.currentItem.innerWidth() - parseInt(self.currentItem.css('paddingLeft')||0, 10) - parseInt(self.currentItem.css('paddingRight')||0, 10)); };
				}
			};
		}

		//Create the placeholder
		self.placeholder = $(o.placeholder.element.call(self.element, self.currentItem));

		//Append it after the actual current item
		self.currentItem.after(self.placeholder);

		//Update the size of the placeholder (TODO: Logic to fuzzy, see line 316/317)
		o.placeholder.update(self, self.placeholder);

	},

	_contactContainers: function(event) {
		
		// get innermost container that intersects with item 
		var innermostContainer = null, innermostIndex = null;		
		
		
		for (var i = this.containers.length - 1; i >= 0; i--){

			// never consider a container that's located within the item itself 
			if($.ui.contains(this.currentItem[0], this.containers[i].element[0]))
				continue;

			if(this._intersectsWith(this.containers[i].containerCache)) {

				// if we've already found a container and it's more "inner" than this, then continue 
				if(innermostContainer && $.ui.contains(this.containers[i].element[0], innermostContainer.element[0]))
					continue;

				innermostContainer = this.containers[i]; 
				innermostIndex = i;
					
			} else {
				// container doesn't intersect. trigger "out" event if necessary 
				if(this.containers[i].containerCache.over) {
					this.containers[i]._trigger("out", event, this._uiHash(this));
					this.containers[i].containerCache.over = 0;
				}
			}

		}
		
		// if no intersecting containers found, return 
		if(!innermostContainer) return; 

		// move the item into the container if it's not there already
		if(this.containers.length === 1) {
			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this));
			this.containers[innermostIndex].containerCache.over = 1;
		} else if(this.currentContainer != this.containers[innermostIndex]) { 

			//When entering a new container, we will find the item with the least distance and append our item near it 
			var dist = 10000; var itemWithLeastDistance = null; var base = this.positionAbs[this.containers[innermostIndex].floating ? 'left' : 'top']; 
			for (var j = this.items.length - 1; j >= 0; j--) { 
				if(!$.ui.contains(this.containers[innermostIndex].element[0], this.items[j].item[0])) continue; 
				var cur = this.items[j][this.containers[innermostIndex].floating ? 'left' : 'top']; 
				if(Math.abs(cur - base) < dist) { 
					dist = Math.abs(cur - base); itemWithLeastDistance = this.items[j]; 
				} 
			} 

			if(!itemWithLeastDistance && !this.options.dropOnEmpty) //Check if dropOnEmpty is enabled 
				return; 

			this.currentContainer = this.containers[innermostIndex]; 
			itemWithLeastDistance ? this._rearrange(event, itemWithLeastDistance, null, true) : this._rearrange(event, null, this.containers[innermostIndex].element, true); 
			this._trigger("change", event, this._uiHash()); 
			this.containers[innermostIndex]._trigger("change", event, this._uiHash(this)); 

			//Update the placeholder 
			this.options.placeholder.update(this.currentContainer, this.placeholder); 
		
			this.containers[innermostIndex]._trigger("over", event, this._uiHash(this)); 
			this.containers[innermostIndex].containerCache.over = 1;
		} 
	
		
	},

	_createHelper: function(event) {

		var o = this.options;
		var helper = $.isFunction(o.helper) ? $(o.helper.apply(this.element[0], [event, this.currentItem])) : (o.helper == 'clone' ? this.currentItem.clone() : this.currentItem);

		if(!helper.parents('body').length) //Add the helper to the DOM if that didn't happen already
			$(o.appendTo != 'parent' ? o.appendTo : this.currentItem[0].parentNode)[0].appendChild(helper[0]);

		if(helper[0] == this.currentItem[0])
			this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") };

		if(helper[0].style.width == '' || o.forceHelperSize) helper.width(this.currentItem.width());
		if(helper[0].style.height == '' || o.forceHelperSize) helper.height(this.currentItem.height());

		return helper;

	},

	_adjustOffsetFromHelper: function(obj) {
		if (typeof obj == 'string') {
			obj = obj.split(' ');
		}
		if ($.isArray(obj)) {
			obj = {left: +obj[0], top: +obj[1] || 0};
		}
		if ('left' in obj) {
			this.offset.click.left = obj.left + this.margins.left;
		}
		if ('right' in obj) {
			this.offset.click.left = this.helperProportions.width - obj.right + this.margins.left;
		}
		if ('top' in obj) {
			this.offset.click.top = obj.top + this.margins.top;
		}
		if ('bottom' in obj) {
			this.offset.click.top = this.helperProportions.height - obj.bottom + this.margins.top;
		}
	},

	_getParentOffset: function() {


		//Get the offsetParent and cache its position
		this.offsetParent = this.helper.offsetParent();
		var po = this.offsetParent.offset();

		// This is a special case where we need to modify a offset calculated on start, since the following happened:
		// 1. The position of the helper is absolute, so it's position is calculated based on the next positioned parent
		// 2. The actual offset parent is a child of the scroll parent, and the scroll parent isn't the document, which means that
		//    the scroll is included in the initial calculation of the offset of the parent, and never recalculated upon drag
		if(this.cssPosition == 'absolute' && this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) {
			po.left += this.scrollParent.scrollLeft();
			po.top += this.scrollParent.scrollTop();
		}

		if((this.offsetParent[0] == document.body) //This needs to be actually done for all browsers, since pageX/pageY includes this information
		|| (this.offsetParent[0].tagName && this.offsetParent[0].tagName.toLowerCase() == 'html' && $.browser.msie)) //Ugly IE fix
			po = { top: 0, left: 0 };

		return {
			top: po.top + (parseInt(this.offsetParent.css("borderTopWidth"),10) || 0),
			left: po.left + (parseInt(this.offsetParent.css("borderLeftWidth"),10) || 0)
		};

	},

	_getRelativeOffset: function() {

		if(this.cssPosition == "relative") {
			var p = this.currentItem.position();
			return {
				top: p.top - (parseInt(this.helper.css("top"),10) || 0) + this.scrollParent.scrollTop(),
				left: p.left - (parseInt(this.helper.css("left"),10) || 0) + this.scrollParent.scrollLeft()
			};
		} else {
			return { top: 0, left: 0 };
		}

	},

	_cacheMargins: function() {
		this.margins = {
			left: (parseInt(this.currentItem.css("marginLeft"),10) || 0),
			top: (parseInt(this.currentItem.css("marginTop"),10) || 0)
		};
	},

	_cacheHelperProportions: function() {
		this.helperProportions = {
			width: this.helper.outerWidth(),
			height: this.helper.outerHeight()
		};
	},

	_setContainment: function() {

		var o = this.options;
		if(o.containment == 'parent') o.containment = this.helper[0].parentNode;
		if(o.containment == 'document' || o.containment == 'window') this.containment = [
			0 - this.offset.relative.left - this.offset.parent.left,
			0 - this.offset.relative.top - this.offset.parent.top,
			$(o.containment == 'document' ? document : window).width() - this.helperProportions.width - this.margins.left,
			($(o.containment == 'document' ? document : window).height() || document.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top
		];

		if(!(/^(document|window|parent)$/).test(o.containment)) {
			var ce = $(o.containment)[0];
			var co = $(o.containment).offset();
			var over = ($(ce).css("overflow") != 'hidden');

			this.containment = [
				co.left + (parseInt($(ce).css("borderLeftWidth"),10) || 0) + (parseInt($(ce).css("paddingLeft"),10) || 0) - this.margins.left,
				co.top + (parseInt($(ce).css("borderTopWidth"),10) || 0) + (parseInt($(ce).css("paddingTop"),10) || 0) - this.margins.top,
				co.left+(over ? Math.max(ce.scrollWidth,ce.offsetWidth) : ce.offsetWidth) - (parseInt($(ce).css("borderLeftWidth"),10) || 0) - (parseInt($(ce).css("paddingRight"),10) || 0) - this.helperProportions.width - this.margins.left,
				co.top+(over ? Math.max(ce.scrollHeight,ce.offsetHeight) : ce.offsetHeight) - (parseInt($(ce).css("borderTopWidth"),10) || 0) - (parseInt($(ce).css("paddingBottom"),10) || 0) - this.helperProportions.height - this.margins.top
			];
		}

	},

	_convertPositionTo: function(d, pos) {

		if(!pos) pos = this.position;
		var mod = d == "absolute" ? 1 : -1;
		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		return {
			top: (
				pos.top																	// The absolute mouse position
				+ this.offset.relative.top * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.top * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ) * mod)
			),
			left: (
				pos.left																// The absolute mouse position
				+ this.offset.relative.left * mod										// Only for relative positioned nodes: Relative offset from element to offset parent
				+ this.offset.parent.left * mod											// The offsetParent's offset without borders (offset + border)
				- ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ) * mod)
			)
		};

	},

	_generatePosition: function(event) {

		var o = this.options, scroll = this.cssPosition == 'absolute' && !(this.scrollParent[0] != document && $.ui.contains(this.scrollParent[0], this.offsetParent[0])) ? this.offsetParent : this.scrollParent, scrollIsRootNode = (/(html|body)/i).test(scroll[0].tagName);

		// This is another very weird special case that only happens for relative elements:
		// 1. If the css position is relative
		// 2. and the scroll parent is the document or similar to the offset parent
		// we have to refresh the relative offset during the scroll so there are no jumps
		if(this.cssPosition == 'relative' && !(this.scrollParent[0] != document && this.scrollParent[0] != this.offsetParent[0])) {
			this.offset.relative = this._getRelativeOffset();
		}

		var pageX = event.pageX;
		var pageY = event.pageY;

		/*
		 * - Position constraining -
		 * Constrain the position to a mix of grid, containment.
		 */

		if(this.originalPosition) { //If we are not dragging yet, we won't check for options

			if(this.containment) {
				if(event.pageX - this.offset.click.left < this.containment[0]) pageX = this.containment[0] + this.offset.click.left;
				if(event.pageY - this.offset.click.top < this.containment[1]) pageY = this.containment[1] + this.offset.click.top;
				if(event.pageX - this.offset.click.left > this.containment[2]) pageX = this.containment[2] + this.offset.click.left;
				if(event.pageY - this.offset.click.top > this.containment[3]) pageY = this.containment[3] + this.offset.click.top;
			}

			if(o.grid) {
				var top = this.originalPageY + Math.round((pageY - this.originalPageY) / o.grid[1]) * o.grid[1];
				pageY = this.containment ? (!(top - this.offset.click.top < this.containment[1] || top - this.offset.click.top > this.containment[3]) ? top : (!(top - this.offset.click.top < this.containment[1]) ? top - o.grid[1] : top + o.grid[1])) : top;

				var left = this.originalPageX + Math.round((pageX - this.originalPageX) / o.grid[0]) * o.grid[0];
				pageX = this.containment ? (!(left - this.offset.click.left < this.containment[0] || left - this.offset.click.left > this.containment[2]) ? left : (!(left - this.offset.click.left < this.containment[0]) ? left - o.grid[0] : left + o.grid[0])) : left;
			}

		}

		return {
			top: (
				pageY																// The absolute mouse position
				- this.offset.click.top													// Click offset (relative to the element)
				- this.offset.relative.top												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.top												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollTop() : ( scrollIsRootNode ? 0 : scroll.scrollTop() ) ))
			),
			left: (
				pageX																// The absolute mouse position
				- this.offset.click.left												// Click offset (relative to the element)
				- this.offset.relative.left												// Only for relative positioned nodes: Relative offset from element to offset parent
				- this.offset.parent.left												// The offsetParent's offset without borders (offset + border)
				+ ($.browser.safari && this.cssPosition == 'fixed' ? 0 : ( this.cssPosition == 'fixed' ? -this.scrollParent.scrollLeft() : scrollIsRootNode ? 0 : scroll.scrollLeft() ))
			)
		};

	},

	_rearrange: function(event, i, a, hardRefresh) {

		a ? a[0].appendChild(this.placeholder[0]) : i.item[0].parentNode.insertBefore(this.placeholder[0], (this.direction == 'down' ? i.item[0] : i.item[0].nextSibling));

		//Various things done here to improve the performance:
		// 1. we create a setTimeout, that calls refreshPositions
		// 2. on the instance, we have a counter variable, that get's higher after every append
		// 3. on the local scope, we copy the counter variable, and check in the timeout, if it's still the same
		// 4. this lets only the last addition to the timeout stack through
		this.counter = this.counter ? ++this.counter : 1;
		var self = this, counter = this.counter;

		window.setTimeout(function() {
			if(counter == self.counter) self.refreshPositions(!hardRefresh); //Precompute after each DOM insertion, NOT on mousemove
		},0);

	},

	_clear: function(event, noPropagation) {

		this.reverting = false;
		// We delay all events that have to be triggered to after the point where the placeholder has been removed and
		// everything else normalized again
		var delayedTriggers = [], self = this;

		// We first have to update the dom position of the actual currentItem
		// Note: don't do it if the current item is already removed (by a user), or it gets reappended (see #4088)
		if(!this._noFinalSort && this.currentItem.parent().length) this.placeholder.before(this.currentItem);
		this._noFinalSort = null;

		if(this.helper[0] == this.currentItem[0]) {
			for(var i in this._storedCSS) {
				if(this._storedCSS[i] == 'auto' || this._storedCSS[i] == 'static') this._storedCSS[i] = '';
			}
			this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper");
		} else {
			this.currentItem.show();
		}

		if(this.fromOutside && !noPropagation) delayedTriggers.push(function(event) { this._trigger("receive", event, this._uiHash(this.fromOutside)); });
		if((this.fromOutside || this.domPosition.prev != this.currentItem.prev().not(".ui-sortable-helper")[0] || this.domPosition.parent != this.currentItem.parent()[0]) && !noPropagation) delayedTriggers.push(function(event) { this._trigger("update", event, this._uiHash()); }); //Trigger update callback if the DOM position has changed
		if(!$.ui.contains(this.element[0], this.currentItem[0])) { //Node was moved out of the current element
			if(!noPropagation) delayedTriggers.push(function(event) { this._trigger("remove", event, this._uiHash()); });
			for (var i = this.containers.length - 1; i >= 0; i--){
				if($.ui.contains(this.containers[i].element[0], this.currentItem[0]) && !noPropagation) {
					delayedTriggers.push((function(c) { return function(event) { c._trigger("receive", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
					delayedTriggers.push((function(c) { return function(event) { c._trigger("update", event, this._uiHash(this));  }; }).call(this, this.containers[i]));
				}
			};
		};

		//Post events to containers
		for (var i = this.containers.length - 1; i >= 0; i--){
			if(!noPropagation) delayedTriggers.push((function(c) { return function(event) { c._trigger("deactivate", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
			if(this.containers[i].containerCache.over) {
				delayedTriggers.push((function(c) { return function(event) { c._trigger("out", event, this._uiHash(this)); };  }).call(this, this.containers[i]));
				this.containers[i].containerCache.over = 0;
			}
		}

		//Do what was originally in plugins
		if(this._storedCursor) $('body').css("cursor", this._storedCursor); //Reset cursor
		if(this._storedOpacity) this.helper.css("opacity", this._storedOpacity); //Reset opacity
		if(this._storedZIndex) this.helper.css("zIndex", this._storedZIndex == 'auto' ? '' : this._storedZIndex); //Reset z-index

		this.dragging = false;
		if(this.cancelHelperRemoval) {
			if(!noPropagation) {
				this._trigger("beforeStop", event, this._uiHash());
				for (var i=0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }; //Trigger all delayed events
				this._trigger("stop", event, this._uiHash());
			}
			return false;
		}

		if(!noPropagation) this._trigger("beforeStop", event, this._uiHash());

		//$(this.placeholder[0]).remove(); would have been the jQuery way - unfortunately, it unbinds ALL events from the original node!
		this.placeholder[0].parentNode.removeChild(this.placeholder[0]);

		if(this.helper[0] != this.currentItem[0]) this.helper.remove(); this.helper = null;

		if(!noPropagation) {
			for (var i=0; i < delayedTriggers.length; i++) { delayedTriggers[i].call(this, event); }; //Trigger all delayed events
			this._trigger("stop", event, this._uiHash());
		}

		this.fromOutside = false;
		return true;

	},

	_trigger: function() {
		if ($.Widget.prototype._trigger.apply(this, arguments) === false) {
			this.cancel();
		}
	},

	_uiHash: function(inst) {
		var self = inst || this;
		return {
			helper: self.helper,
			placeholder: self.placeholder || $([]),
			position: self.position,
			originalPosition: self.originalPosition,
			offset: self.positionAbs,
			item: self.currentItem,
			sender: inst ? inst.element : null
		};
	}

});

$.extend($.ui.sortable, {
	version: "1.8.20"
});

})(jQuery);
/*!
 * jQuery UI Effects 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/
 */
;jQuery.effects || (function($, undefined) {

$.effects = {};



/******************************************************************************/
/****************************** COLOR ANIMATIONS ******************************/
/******************************************************************************/

// override the animation for color styles
$.each(['backgroundColor', 'borderBottomColor', 'borderLeftColor',
	'borderRightColor', 'borderTopColor', 'borderColor', 'color', 'outlineColor'],
function(i, attr) {
	$.fx.step[attr] = function(fx) {
		if (!fx.colorInit) {
			fx.start = getColor(fx.elem, attr);
			fx.end = getRGB(fx.end);
			fx.colorInit = true;
		}

		fx.elem.style[attr] = 'rgb(' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[0] - fx.start[0])) + fx.start[0], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[1] - fx.start[1])) + fx.start[1], 10), 255), 0) + ',' +
			Math.max(Math.min(parseInt((fx.pos * (fx.end[2] - fx.start[2])) + fx.start[2], 10), 255), 0) + ')';
	};
});

// Color Conversion functions from highlightFade
// By Blair Mitchelmore
// http://jquery.offput.ca/highlightFade/

// Parse strings looking for color tuples [255,255,255]
function getRGB(color) {
		var result;

		// Check if we're already dealing with an array of colors
		if ( color && color.constructor == Array && color.length == 3 )
				return color;

		// Look for rgb(num,num,num)
		if (result = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(color))
				return [parseInt(result[1],10), parseInt(result[2],10), parseInt(result[3],10)];

		// Look for rgb(num%,num%,num%)
		if (result = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(color))
				return [parseFloat(result[1])*2.55, parseFloat(result[2])*2.55, parseFloat(result[3])*2.55];

		// Look for #a0b1c2
		if (result = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(color))
				return [parseInt(result[1],16), parseInt(result[2],16), parseInt(result[3],16)];

		// Look for #fff
		if (result = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(color))
				return [parseInt(result[1]+result[1],16), parseInt(result[2]+result[2],16), parseInt(result[3]+result[3],16)];

		// Look for rgba(0, 0, 0, 0) == transparent in Safari 3
		if (result = /rgba\(0, 0, 0, 0\)/.exec(color))
				return colors['transparent'];

		// Otherwise, we're most likely dealing with a named color
		return colors[$.trim(color).toLowerCase()];
}

function getColor(elem, attr) {
		var color;

		do {
				color = $.curCSS(elem, attr);

				// Keep going until we find an element that has color, or we hit the body
				if ( color != '' && color != 'transparent' || $.nodeName(elem, "body") )
						break;

				attr = "backgroundColor";
		} while ( elem = elem.parentNode );

		return getRGB(color);
};

// Some named colors to work with
// From Interface by Stefan Petre
// http://interface.eyecon.ro/

var colors = {
	aqua:[0,255,255],
	azure:[240,255,255],
	beige:[245,245,220],
	black:[0,0,0],
	blue:[0,0,255],
	brown:[165,42,42],
	cyan:[0,255,255],
	darkblue:[0,0,139],
	darkcyan:[0,139,139],
	darkgrey:[169,169,169],
	darkgreen:[0,100,0],
	darkkhaki:[189,183,107],
	darkmagenta:[139,0,139],
	darkolivegreen:[85,107,47],
	darkorange:[255,140,0],
	darkorchid:[153,50,204],
	darkred:[139,0,0],
	darksalmon:[233,150,122],
	darkviolet:[148,0,211],
	fuchsia:[255,0,255],
	gold:[255,215,0],
	green:[0,128,0],
	indigo:[75,0,130],
	khaki:[240,230,140],
	lightblue:[173,216,230],
	lightcyan:[224,255,255],
	lightgreen:[144,238,144],
	lightgrey:[211,211,211],
	lightpink:[255,182,193],
	lightyellow:[255,255,224],
	lime:[0,255,0],
	magenta:[255,0,255],
	maroon:[128,0,0],
	navy:[0,0,128],
	olive:[128,128,0],
	orange:[255,165,0],
	pink:[255,192,203],
	purple:[128,0,128],
	violet:[128,0,128],
	red:[255,0,0],
	silver:[192,192,192],
	white:[255,255,255],
	yellow:[255,255,0],
	transparent: [255,255,255]
};



/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/

var classAnimationActions = ['add', 'remove', 'toggle'],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

function getElementStyles() {
	var style = document.defaultView
			? document.defaultView.getComputedStyle(this, null)
			: this.currentStyle,
		newStyle = {},
		key,
		camelCase;

	// webkit enumerates style porperties
	if (style && style.length && style[0] && style[style[0]]) {
		var len = style.length;
		while (len--) {
			key = style[len];
			if (typeof style[key] == 'string') {
				camelCase = key.replace(/\-(\w)/g, function(all, letter){
					return letter.toUpperCase();
				});
				newStyle[camelCase] = style[key];
			}
		}
	} else {
		for (key in style) {
			if (typeof style[key] === 'string') {
				newStyle[key] = style[key];
			}
		}
	}
	
	return newStyle;
}

function filterStyles(styles) {
	var name, value;
	for (name in styles) {
		value = styles[name];
		if (
			// ignore null and undefined values
			value == null ||
			// ignore functions (when does this occur?)
			$.isFunction(value) ||
			// shorthand styles that need to be expanded
			name in shorthandStyles ||
			// ignore scrollbars (break in IE)
			(/scrollbar/).test(name) ||

			// only colors or values that can be converted to numbers
			(!(/color/i).test(name) && isNaN(parseFloat(value)))
		) {
			delete styles[name];
		}
	}
	
	return styles;
}

function styleDifference(oldStyle, newStyle) {
	var diff = { _: 0 }, // http://dev.jquery.com/ticket/5459
		name;

	for (name in newStyle) {
		if (oldStyle[name] != newStyle[name]) {
			diff[name] = newStyle[name];
		}
	}

	return diff;
}

$.effects.animateClass = function(value, duration, easing, callback) {
	if ($.isFunction(easing)) {
		callback = easing;
		easing = null;
	}

	return this.queue(function() {
		var that = $(this),
			originalStyleAttr = that.attr('style') || ' ',
			originalStyle = filterStyles(getElementStyles.call(this)),
			newStyle,
			className = that.attr('class') || "";

		$.each(classAnimationActions, function(i, action) {
			if (value[action]) {
				that[action + 'Class'](value[action]);
			}
		});
		newStyle = filterStyles(getElementStyles.call(this));
		that.attr('class', className);

		that.animate(styleDifference(originalStyle, newStyle), {
			queue: false,
			duration: duration,
			easing: easing,
			complete: function() {
				$.each(classAnimationActions, function(i, action) {
					if (value[action]) { that[action + 'Class'](value[action]); }
				});
				// work around bug in IE by clearing the cssText before setting it
				if (typeof that.attr('style') == 'object') {
					that.attr('style').cssText = '';
					that.attr('style').cssText = originalStyleAttr;
				} else {
					that.attr('style', originalStyleAttr);
				}
				if (callback) { callback.apply(this, arguments); }
				$.dequeue( this );
			}
		});
	});
};

$.fn.extend({
	_addClass: $.fn.addClass,
	addClass: function(classNames, speed, easing, callback) {
		return speed ? $.effects.animateClass.apply(this, [{ add: classNames },speed,easing,callback]) : this._addClass(classNames);
	},

	_removeClass: $.fn.removeClass,
	removeClass: function(classNames,speed,easing,callback) {
		return speed ? $.effects.animateClass.apply(this, [{ remove: classNames },speed,easing,callback]) : this._removeClass(classNames);
	},

	_toggleClass: $.fn.toggleClass,
	toggleClass: function(classNames, force, speed, easing, callback) {
		if ( typeof force == "boolean" || force === undefined ) {
			if ( !speed ) {
				// without speed parameter;
				return this._toggleClass(classNames, force);
			} else {
				return $.effects.animateClass.apply(this, [(force?{add:classNames}:{remove:classNames}),speed,easing,callback]);
			}
		} else {
			// without switch parameter;
			return $.effects.animateClass.apply(this, [{ toggle: classNames },force,speed,easing]);
		}
	},

	switchClass: function(remove,add,speed,easing,callback) {
		return $.effects.animateClass.apply(this, [{ add: add, remove: remove },speed,easing,callback]);
	}
});



/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

$.extend($.effects, {
	version: "1.8.20",

	// Saves a set of properties in a data storage
	save: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.data("ec.storage."+set[i], element[0].style[set[i]]);
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function(element, set) {
		for(var i=0; i < set.length; i++) {
			if(set[i] !== null) element.css(set[i], element.data("ec.storage."+set[i]));
		}
	},

	setMode: function(el, mode) {
		if (mode == 'toggle') mode = el.is(':hidden') ? 'show' : 'hide'; // Set for toggle
		return mode;
	},

	getBaseline: function(origin, original) { // Translates a [top,left] array into a baseline value
		// this should be a little more flexible in the future to handle a string & hash
		var y, x;
		switch (origin[0]) {
			case 'top': y = 0; break;
			case 'middle': y = 0.5; break;
			case 'bottom': y = 1; break;
			default: y = origin[0] / original.height;
		};
		switch (origin[1]) {
			case 'left': x = 0; break;
			case 'center': x = 0.5; break;
			case 'right': x = 1; break;
			default: x = origin[1] / original.width;
		};
		return {x: x, y: y};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function(element) {

		// if the element is already wrapped, return it
		if (element.parent().is('.ui-effects-wrapper')) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				'float': element.css('float')
			},
			wrapper = $('<div></div>')
				.addClass('ui-effects-wrapper')
				.css({
					fontSize: '100%',
					background: 'transparent',
					border: 'none',
					margin: 0,
					padding: 0
				}),
			active = document.activeElement;

		element.wrap(wrapper);

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}
		
		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually loose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if (element.css('position') == 'static') {
			wrapper.css({ position: 'relative' });
			element.css({ position: 'relative' });
		} else {
			$.extend(props, {
				position: element.css('position'),
				zIndex: element.css('z-index')
			});
			$.each(['top', 'left', 'bottom', 'right'], function(i, pos) {
				props[pos] = element.css(pos);
				if (isNaN(parseInt(props[pos], 10))) {
					props[pos] = 'auto';
				}
			});
			element.css({position: 'relative', top: 0, left: 0, right: 'auto', bottom: 'auto' });
		}

		return wrapper.css(props).show();
	},

	removeWrapper: function(element) {
		var parent,
			active = document.activeElement;
		
		if (element.parent().is('.ui-effects-wrapper')) {
			parent = element.parent().replaceWith(element);
			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
			return parent;
		}
			
		return element;
	},

	setTransition: function(element, list, factor, value) {
		value = value || {};
		$.each(list, function(i, x){
			var unit = element.cssUnit(x);
			if (unit[0] > 0) value[x] = unit[0] * factor + unit[1];
		});
		return value;
	}
});


function _normalizeArguments(effect, options, speed, callback) {
	// shift params for method overloading
	if (typeof effect == 'object') {
		callback = options;
		speed = null;
		options = effect;
		effect = options.effect;
	}
	if ($.isFunction(options)) {
		callback = options;
		speed = null;
		options = {};
	}
        if (typeof options == 'number' || $.fx.speeds[options]) {
		callback = speed;
		speed = options;
		options = {};
	}
	if ($.isFunction(speed)) {
		callback = speed;
		speed = null;
	}

	options = options || {};

	speed = speed || options.duration;
	speed = $.fx.off ? 0 : typeof speed == 'number'
		? speed : speed in $.fx.speeds ? $.fx.speeds[speed] : $.fx.speeds._default;

	callback = callback || options.complete;

	return [effect, options, speed, callback];
}

function standardSpeed( speed ) {
	// valid standard speeds
	if ( !speed || typeof speed === "number" || $.fx.speeds[ speed ] ) {
		return true;
	}
	
	// invalid strings - treat as "normal" speed
	if ( typeof speed === "string" && !$.effects[ speed ] ) {
		return true;
	}
	
	return false;
}

$.fn.extend({
	effect: function(effect, options, speed, callback) {
		var args = _normalizeArguments.apply(this, arguments),
			// TODO: make effects take actual parameters instead of a hash
			args2 = {
				options: args[1],
				duration: args[2],
				callback: args[3]
			},
			mode = args2.options.mode,
			effectMethod = $.effects[effect];
		
		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args2.duration, args2.callback );
			} else {
				return this.each(function() {
					if ( args2.callback ) {
						args2.callback.call( this );
					}
				});
			}
		}
		
		return effectMethod.call(this, args2);
	},

	_show: $.fn.show,
	show: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._show.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'show';
			return this.effect.apply(this, args);
		}
	},

	_hide: $.fn.hide,
	hide: function(speed) {
		if ( standardSpeed( speed ) ) {
			return this._hide.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'hide';
			return this.effect.apply(this, args);
		}
	},

	// jQuery core overloads toggle and creates _toggle
	__toggle: $.fn.toggle,
	toggle: function(speed) {
		if ( standardSpeed( speed ) || typeof speed === "boolean" || $.isFunction( speed ) ) {
			return this.__toggle.apply(this, arguments);
		} else {
			var args = _normalizeArguments.apply(this, arguments);
			args[1].mode = 'toggle';
			return this.effect.apply(this, args);
		}
	},

	// helper functions
	cssUnit: function(key) {
		var style = this.css(key), val = [];
		$.each( ['em','px','%','pt'], function(i, unit){
			if(style.indexOf(unit) > 0)
				val = [parseFloat(style), unit];
		});
		return val;
	}
});



/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright 2008 George McGinley Smith
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
$.easing.jswing = $.easing.swing;

$.extend($.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert($.easing.default);
		return $.easing[$.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - $.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return $.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return $.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 * COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 * GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
 */

})(jQuery);
/*!
 * jQuery UI Effects Blind 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Blind
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.blind = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
		var direction = o.options.direction || 'vertical'; // Default direction

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		var wrapper = $.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
		var ref = (direction == 'vertical') ? 'height' : 'width';
		var distance = (direction == 'vertical') ? wrapper.height() : wrapper.width();
		if(mode == 'show') wrapper.css(ref, 0); // Shift

		// Animation
		var animation = {};
		animation[ref] = mode == 'show' ? distance : 0;

		// Animate
		wrapper.animate(animation, o.duration, o.options.easing, function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(el[0], arguments); // Callback
			el.dequeue();
		});

	});

};

})(jQuery);
/*!
 * jQuery UI Effects Bounce 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Bounce
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.bounce = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'effect'); // Set Mode
		var direction = o.options.direction || 'up'; // Default direction
		var distance = o.options.distance || 20; // Default distance
		var times = o.options.times || 5; // Default # of times
		var speed = o.duration || 250; // Default speed per bounce
		if (/show|hide/.test(mode)) props.push('opacity'); // Avoid touching opacity to prevent clearType and PNG issues in IE

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		$.effects.createWrapper(el); // Create Wrapper
		var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
		var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
		var distance = o.options.distance || (ref == 'top' ? el.outerHeight({margin:true}) / 3 : el.outerWidth({margin:true}) / 3);
		if (mode == 'show') el.css('opacity', 0).css(ref, motion == 'pos' ? -distance : distance); // Shift
		if (mode == 'hide') distance = distance / (times * 2);
		if (mode != 'hide') times--;

		// Animate
		if (mode == 'show') { // Show Bounce
			var animation = {opacity: 1};
			animation[ref] = (motion == 'pos' ? '+=' : '-=') + distance;
			el.animate(animation, speed / 2, o.options.easing);
			distance = distance / 2;
			times--;
		};
		for (var i = 0; i < times; i++) { // Bounces
			var animation1 = {}, animation2 = {};
			animation1[ref] = (motion == 'pos' ? '-=' : '+=') + distance;
			animation2[ref] = (motion == 'pos' ? '+=' : '-=') + distance;
			el.animate(animation1, speed / 2, o.options.easing).animate(animation2, speed / 2, o.options.easing);
			distance = (mode == 'hide') ? distance * 2 : distance / 2;
		};
		if (mode == 'hide') { // Last Bounce
			var animation = {opacity: 0};
			animation[ref] = (motion == 'pos' ? '-=' : '+=')  + distance;
			el.animate(animation, speed / 2, o.options.easing, function(){
				el.hide(); // Hide
				$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
				if(o.callback) o.callback.apply(this, arguments); // Callback
			});
		} else {
			var animation1 = {}, animation2 = {};
			animation1[ref] = (motion == 'pos' ? '-=' : '+=') + distance;
			animation2[ref] = (motion == 'pos' ? '+=' : '-=') + distance;
			el.animate(animation1, speed / 2, o.options.easing).animate(animation2, speed / 2, o.options.easing, function(){
				$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
				if(o.callback) o.callback.apply(this, arguments); // Callback
			});
		};
		el.queue('fx', function() { el.dequeue(); });
		el.dequeue();
	});

};

})(jQuery);
/*!
 * jQuery UI Effects Clip 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Clip
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.clip = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right','height','width'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
		var direction = o.options.direction || 'vertical'; // Default direction

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		var wrapper = $.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
		var animate = el[0].tagName == 'IMG' ? wrapper : el;
		var ref = {
			size: (direction == 'vertical') ? 'height' : 'width',
			position: (direction == 'vertical') ? 'top' : 'left'
		};
		var distance = (direction == 'vertical') ? animate.height() : animate.width();
		if(mode == 'show') { animate.css(ref.size, 0); animate.css(ref.position, distance / 2); } // Shift

		// Animation
		var animation = {};
		animation[ref.size] = mode == 'show' ? distance : 0;
		animation[ref.position] = mode == 'show' ? 0 : distance / 2;

		// Animate
		animate.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(el[0], arguments); // Callback
			el.dequeue();
		}});

	});

};

})(jQuery);
/*!
 * jQuery UI Effects Drop 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Drop
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.drop = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right','opacity'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
		var direction = o.options.direction || 'left'; // Default Direction

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		$.effects.createWrapper(el); // Create Wrapper
		var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
		var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
		var distance = o.options.distance || (ref == 'top' ? el.outerHeight({margin:true}) / 2 : el.outerWidth({margin:true}) / 2);
		if (mode == 'show') el.css('opacity', 0).css(ref, motion == 'pos' ? -distance : distance); // Shift

		// Animation
		var animation = {opacity: mode == 'show' ? 1 : 0};
		animation[ref] = (mode == 'show' ? (motion == 'pos' ? '+=' : '-=') : (motion == 'pos' ? '-=' : '+=')) + distance;

		// Animate
		el.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(this, arguments); // Callback
			el.dequeue();
		}});

	});

};

})(jQuery);
/*!
 * jQuery UI Effects Explode 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Explode
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.explode = function(o) {

	return this.queue(function() {

	var rows = o.options.pieces ? Math.round(Math.sqrt(o.options.pieces)) : 3;
	var cells = o.options.pieces ? Math.round(Math.sqrt(o.options.pieces)) : 3;

	o.options.mode = o.options.mode == 'toggle' ? ($(this).is(':visible') ? 'hide' : 'show') : o.options.mode;
	var el = $(this).show().css('visibility', 'hidden');
	var offset = el.offset();

	//Substract the margins - not fixing the problem yet.
	offset.top -= parseInt(el.css("marginTop"),10) || 0;
	offset.left -= parseInt(el.css("marginLeft"),10) || 0;

	var width = el.outerWidth(true);
	var height = el.outerHeight(true);

	for(var i=0;i<rows;i++) { // =
		for(var j=0;j<cells;j++) { // ||
			el
				.clone()
				.appendTo('body')
				.wrap('<div></div>')
				.css({
					position: 'absolute',
					visibility: 'visible',
					left: -j*(width/cells),
					top: -i*(height/rows)
				})
				.parent()
				.addClass('ui-effects-explode')
				.css({
					position: 'absolute',
					overflow: 'hidden',
					width: width/cells,
					height: height/rows,
					left: offset.left + j*(width/cells) + (o.options.mode == 'show' ? (j-Math.floor(cells/2))*(width/cells) : 0),
					top: offset.top + i*(height/rows) + (o.options.mode == 'show' ? (i-Math.floor(rows/2))*(height/rows) : 0),
					opacity: o.options.mode == 'show' ? 0 : 1
				}).animate({
					left: offset.left + j*(width/cells) + (o.options.mode == 'show' ? 0 : (j-Math.floor(cells/2))*(width/cells)),
					top: offset.top + i*(height/rows) + (o.options.mode == 'show' ? 0 : (i-Math.floor(rows/2))*(height/rows)),
					opacity: o.options.mode == 'show' ? 1 : 0
				}, o.duration || 500);
		}
	}

	// Set a timeout, to call the callback approx. when the other animations have finished
	setTimeout(function() {

		o.options.mode == 'show' ? el.css({ visibility: 'visible' }) : el.css({ visibility: 'visible' }).hide();
				if(o.callback) o.callback.apply(el[0]); // Callback
				el.dequeue();

				$('div.ui-effects-explode').remove();

	}, o.duration || 500);


	});

};

})(jQuery);
/*!
 * jQuery UI Effects Fade 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fade
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.fade = function(o) {
	return this.queue(function() {
		var elem = $(this),
			mode = $.effects.setMode(elem, o.options.mode || 'hide');

		elem.animate({ opacity: mode }, {
			queue: false,
			duration: o.duration,
			easing: o.options.easing,
			complete: function() {
				(o.callback && o.callback.apply(this, arguments));
				elem.dequeue();
			}
		});
	});
};

})(jQuery);
/*!
 * jQuery UI Effects Fold 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Fold
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.fold = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'hide'); // Set Mode
		var size = o.options.size || 15; // Default fold size
		var horizFirst = !(!o.options.horizFirst); // Ensure a boolean value
		var duration = o.duration ? o.duration / 2 : $.fx.speeds._default / 2;

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		var wrapper = $.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
		var widthFirst = ((mode == 'show') != horizFirst);
		var ref = widthFirst ? ['width', 'height'] : ['height', 'width'];
		var distance = widthFirst ? [wrapper.width(), wrapper.height()] : [wrapper.height(), wrapper.width()];
		var percent = /([0-9]+)%/.exec(size);
		if(percent) size = parseInt(percent[1],10) / 100 * distance[mode == 'hide' ? 0 : 1];
		if(mode == 'show') wrapper.css(horizFirst ? {height: 0, width: size} : {height: size, width: 0}); // Shift

		// Animation
		var animation1 = {}, animation2 = {};
		animation1[ref[0]] = mode == 'show' ? distance[0] : size;
		animation2[ref[1]] = mode == 'show' ? distance[1] : 0;

		// Animate
		wrapper.animate(animation1, duration, o.options.easing)
		.animate(animation2, duration, o.options.easing, function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(el[0], arguments); // Callback
			el.dequeue();
		});

	});

};

})(jQuery);
/*!
 * jQuery UI Effects Highlight 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Highlight
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.highlight = function(o) {
	return this.queue(function() {
		var elem = $(this),
			props = ['backgroundImage', 'backgroundColor', 'opacity'],
			mode = $.effects.setMode(elem, o.options.mode || 'show'),
			animation = {
				backgroundColor: elem.css('backgroundColor')
			};

		if (mode == 'hide') {
			animation.opacity = 0;
		}

		$.effects.save(elem, props);
		elem
			.show()
			.css({
				backgroundImage: 'none',
				backgroundColor: o.options.color || '#ffff99'
			})
			.animate(animation, {
				queue: false,
				duration: o.duration,
				easing: o.options.easing,
				complete: function() {
					(mode == 'hide' && elem.hide());
					$.effects.restore(elem, props);
					(mode == 'show' && !$.support.opacity && this.style.removeAttribute('filter'));
					(o.callback && o.callback.apply(this, arguments));
					elem.dequeue();
				}
			});
	});
};

})(jQuery);
/*!
 * jQuery UI Effects Pulsate 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Pulsate
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.pulsate = function(o) {
	return this.queue(function() {
		var elem = $(this),
			mode = $.effects.setMode(elem, o.options.mode || 'show'),
			times = ((o.options.times || 5) * 2) - 1,
			duration = o.duration ? o.duration / 2 : $.fx.speeds._default / 2,
			isVisible = elem.is(':visible'),
			animateTo = 0;

		if (!isVisible) {
			elem.css('opacity', 0).show();
			animateTo = 1;
		}

		if ((mode == 'hide' && isVisible) || (mode == 'show' && !isVisible)) {
			times--;
		}

		for (var i = 0; i < times; i++) {
			elem.animate({ opacity: animateTo }, duration, o.options.easing);
			animateTo = (animateTo + 1) % 2;
		}

		elem.animate({ opacity: animateTo }, duration, o.options.easing, function() {
			if (animateTo == 0) {
				elem.hide();
			}
			(o.callback && o.callback.apply(this, arguments));
		});

		elem
			.queue('fx', function() { elem.dequeue(); })
			.dequeue();
	});
};

})(jQuery);
/*!
 * jQuery UI Effects Scale 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Scale
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.puff = function(o) {
	return this.queue(function() {
		var elem = $(this),
			mode = $.effects.setMode(elem, o.options.mode || 'hide'),
			percent = parseInt(o.options.percent, 10) || 150,
			factor = percent / 100,
			original = { height: elem.height(), width: elem.width() };

		$.extend(o.options, {
			fade: true,
			mode: mode,
			percent: mode == 'hide' ? percent : 100,
			from: mode == 'hide'
				? original
				: {
					height: original.height * factor,
					width: original.width * factor
				}
		});

		elem.effect('scale', o.options, o.duration, o.callback);
		elem.dequeue();
	});
};

$.effects.scale = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this);

		// Set options
		var options = $.extend(true, {}, o.options);
		var mode = $.effects.setMode(el, o.options.mode || 'effect'); // Set Mode
		var percent = parseInt(o.options.percent,10) || (parseInt(o.options.percent,10) == 0 ? 0 : (mode == 'hide' ? 0 : 100)); // Set default scaling percent
		var direction = o.options.direction || 'both'; // Set default axis
		var origin = o.options.origin; // The origin of the scaling
		if (mode != 'effect') { // Set default origin and restore for show/hide
			options.origin = origin || ['middle','center'];
			options.restore = true;
		}
		var original = {height: el.height(), width: el.width()}; // Save original
		el.from = o.options.from || (mode == 'show' ? {height: 0, width: 0} : original); // Default from state

		// Adjust
		var factor = { // Set scaling factor
			y: direction != 'horizontal' ? (percent / 100) : 1,
			x: direction != 'vertical' ? (percent / 100) : 1
		};
		el.to = {height: original.height * factor.y, width: original.width * factor.x}; // Set to state

		if (o.options.fade) { // Fade option to support puff
			if (mode == 'show') {el.from.opacity = 0; el.to.opacity = 1;};
			if (mode == 'hide') {el.from.opacity = 1; el.to.opacity = 0;};
		};

		// Animation
		options.from = el.from; options.to = el.to; options.mode = mode;

		// Animate
		el.effect('size', options, o.duration, o.callback);
		el.dequeue();
	});

};

$.effects.size = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right','width','height','overflow','opacity'];
		var props1 = ['position','top','bottom','left','right','overflow','opacity']; // Always restore
		var props2 = ['width','height','overflow']; // Copy for children
		var cProps = ['fontSize'];
		var vProps = ['borderTopWidth', 'borderBottomWidth', 'paddingTop', 'paddingBottom'];
		var hProps = ['borderLeftWidth', 'borderRightWidth', 'paddingLeft', 'paddingRight'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'effect'); // Set Mode
		var restore = o.options.restore || false; // Default restore
		var scale = o.options.scale || 'both'; // Default scale mode
		var origin = o.options.origin; // The origin of the sizing
		var original = {height: el.height(), width: el.width()}; // Save original
		el.from = o.options.from || original; // Default from state
		el.to = o.options.to || original; // Default to state
		// Adjust
		if (origin) { // Calculate baseline shifts
			var baseline = $.effects.getBaseline(origin, original);
			el.from.top = (original.height - el.from.height) * baseline.y;
			el.from.left = (original.width - el.from.width) * baseline.x;
			el.to.top = (original.height - el.to.height) * baseline.y;
			el.to.left = (original.width - el.to.width) * baseline.x;
		};
		var factor = { // Set scaling factor
			from: {y: el.from.height / original.height, x: el.from.width / original.width},
			to: {y: el.to.height / original.height, x: el.to.width / original.width}
		};
		if (scale == 'box' || scale == 'both') { // Scale the css box
			if (factor.from.y != factor.to.y) { // Vertical props scaling
				props = props.concat(vProps);
				el.from = $.effects.setTransition(el, vProps, factor.from.y, el.from);
				el.to = $.effects.setTransition(el, vProps, factor.to.y, el.to);
			};
			if (factor.from.x != factor.to.x) { // Horizontal props scaling
				props = props.concat(hProps);
				el.from = $.effects.setTransition(el, hProps, factor.from.x, el.from);
				el.to = $.effects.setTransition(el, hProps, factor.to.x, el.to);
			};
		};
		if (scale == 'content' || scale == 'both') { // Scale the content
			if (factor.from.y != factor.to.y) { // Vertical props scaling
				props = props.concat(cProps);
				el.from = $.effects.setTransition(el, cProps, factor.from.y, el.from);
				el.to = $.effects.setTransition(el, cProps, factor.to.y, el.to);
			};
		};
		$.effects.save(el, restore ? props : props1); el.show(); // Save & Show
		$.effects.createWrapper(el); // Create Wrapper
		el.css('overflow','hidden').css(el.from); // Shift

		// Animate
		if (scale == 'content' || scale == 'both') { // Scale the children
			vProps = vProps.concat(['marginTop','marginBottom']).concat(cProps); // Add margins/font-size
			hProps = hProps.concat(['marginLeft','marginRight']); // Add margins
			props2 = props.concat(vProps).concat(hProps); // Concat
			el.find("*[width]").each(function(){
				var child = $(this);
				if (restore) $.effects.save(child, props2);
				var c_original = {height: child.height(), width: child.width()}; // Save original
				child.from = {height: c_original.height * factor.from.y, width: c_original.width * factor.from.x};
				child.to = {height: c_original.height * factor.to.y, width: c_original.width * factor.to.x};
				if (factor.from.y != factor.to.y) { // Vertical props scaling
					child.from = $.effects.setTransition(child, vProps, factor.from.y, child.from);
					child.to = $.effects.setTransition(child, vProps, factor.to.y, child.to);
				};
				if (factor.from.x != factor.to.x) { // Horizontal props scaling
					child.from = $.effects.setTransition(child, hProps, factor.from.x, child.from);
					child.to = $.effects.setTransition(child, hProps, factor.to.x, child.to);
				};
				child.css(child.from); // Shift children
				child.animate(child.to, o.duration, o.options.easing, function(){
					if (restore) $.effects.restore(child, props2); // Restore children
				}); // Animate children
			});
		};

		// Animate
		el.animate(el.to, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
			if (el.to.opacity === 0) {
				el.css('opacity', el.from.opacity);
			}
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, restore ? props : props1); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(this, arguments); // Callback
			el.dequeue();
		}});

	});

};

})(jQuery);
/*!
 * jQuery UI Effects Shake 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Shake
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.shake = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'effect'); // Set Mode
		var direction = o.options.direction || 'left'; // Default direction
		var distance = o.options.distance || 20; // Default distance
		var times = o.options.times || 3; // Default # of times
		var speed = o.duration || o.options.duration || 140; // Default speed per shake

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		$.effects.createWrapper(el); // Create Wrapper
		var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
		var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';

		// Animation
		var animation = {}, animation1 = {}, animation2 = {};
		animation[ref] = (motion == 'pos' ? '-=' : '+=')  + distance;
		animation1[ref] = (motion == 'pos' ? '+=' : '-=')  + distance * 2;
		animation2[ref] = (motion == 'pos' ? '-=' : '+=')  + distance * 2;

		// Animate
		el.animate(animation, speed, o.options.easing);
		for (var i = 1; i < times; i++) { // Shakes
			el.animate(animation1, speed, o.options.easing).animate(animation2, speed, o.options.easing);
		};
		el.animate(animation1, speed, o.options.easing).
		animate(animation, speed / 2, o.options.easing, function(){ // Last shake
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(this, arguments); // Callback
		});
		el.queue('fx', function() { el.dequeue(); });
		el.dequeue();
	});

};

})(jQuery);
/*!
 * jQuery UI Effects Slide 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Slide
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.slide = function(o) {

	return this.queue(function() {

		// Create element
		var el = $(this), props = ['position','top','bottom','left','right'];

		// Set options
		var mode = $.effects.setMode(el, o.options.mode || 'show'); // Set Mode
		var direction = o.options.direction || 'left'; // Default Direction

		// Adjust
		$.effects.save(el, props); el.show(); // Save & Show
		$.effects.createWrapper(el).css({overflow:'hidden'}); // Create Wrapper
		var ref = (direction == 'up' || direction == 'down') ? 'top' : 'left';
		var motion = (direction == 'up' || direction == 'left') ? 'pos' : 'neg';
		var distance = o.options.distance || (ref == 'top' ? el.outerHeight({margin:true}) : el.outerWidth({margin:true}));
		if (mode == 'show') el.css(ref, motion == 'pos' ? (isNaN(distance) ? "-" + distance : -distance) : distance); // Shift

		// Animation
		var animation = {};
		animation[ref] = (mode == 'show' ? (motion == 'pos' ? '+=' : '-=') : (motion == 'pos' ? '-=' : '+=')) + distance;

		// Animate
		el.animate(animation, { queue: false, duration: o.duration, easing: o.options.easing, complete: function() {
			if(mode == 'hide') el.hide(); // Hide
			$.effects.restore(el, props); $.effects.removeWrapper(el); // Restore
			if(o.callback) o.callback.apply(this, arguments); // Callback
			el.dequeue();
		}});

	});

};

})(jQuery);
/*!
 * jQuery UI Effects Transfer 1.8.20
 *
 * Copyright 2012, AUTHORS.txt (http://jqueryui.com/about)
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * http://docs.jquery.com/UI/Effects/Transfer
 *
 * Depends:
 *	jquery.effects.core.js
 */
(function( $, undefined ) {

$.effects.transfer = function(o) {
	return this.queue(function() {
		var elem = $(this),
			target = $(o.options.to),
			endPosition = target.offset(),
			animation = {
				top: endPosition.top,
				left: endPosition.left,
				height: target.innerHeight(),
				width: target.innerWidth()
			},
			startPosition = elem.offset(),
			transfer = $('<div class="ui-effects-transfer"></div>')
				.appendTo(document.body)
				.addClass(o.options.className)
				.css({
					top: startPosition.top,
					left: startPosition.left,
					height: elem.innerHeight(),
					width: elem.innerWidth(),
					position: 'absolute'
				})
				.animate(animation, o.duration, o.options.easing, function() {
					transfer.remove();
					(o.callback && o.callback.apply(elem[0], arguments));
					elem.dequeue();
				});
	});
};

})(jQuery);

/*! 
 * jquery.event.drag - v 2.0.0 
 * Copyright (c) 2010 Three Dub Media - http://threedubmedia.com
 * Open Source MIT License - http://threedubmedia.com/code/license
 */
;(function(f){f.fn.drag=function(b,a,d){var e=typeof b=="string"?b:"",k=f.isFunction(b)?b:f.isFunction(a)?a:null;if(e.indexOf("drag")!==0)e="drag"+e;d=(b==k?a:d)||{};return k?this.bind(e,d,k):this.trigger(e)};var i=f.event,h=i.special,c=h.drag={defaults:{which:1,distance:0,not:":input",handle:null,relative:false,drop:true,click:false},datakey:"dragdata",livekey:"livedrag",add:function(b){var a=f.data(this,c.datakey),d=b.data||{};a.related+=1;if(!a.live&&b.selector){a.live=true;i.add(this,"draginit."+ c.livekey,c.delegate)}f.each(c.defaults,function(e){if(d[e]!==undefined)a[e]=d[e]})},remove:function(){f.data(this,c.datakey).related-=1},setup:function(){if(!f.data(this,c.datakey)){var b=f.extend({related:0},c.defaults);f.data(this,c.datakey,b);i.add(this,"mousedown",c.init,b);this.attachEvent&&this.attachEvent("ondragstart",c.dontstart)}},teardown:function(){if(!f.data(this,c.datakey).related){f.removeData(this,c.datakey);i.remove(this,"mousedown",c.init);i.remove(this,"draginit",c.delegate);c.textselect(true); this.detachEvent&&this.detachEvent("ondragstart",c.dontstart)}},init:function(b){var a=b.data,d;if(!(a.which>0&&b.which!=a.which))if(!f(b.target).is(a.not))if(!(a.handle&&!f(b.target).closest(a.handle,b.currentTarget).length)){a.propagates=1;a.interactions=[c.interaction(this,a)];a.target=b.target;a.pageX=b.pageX;a.pageY=b.pageY;a.dragging=null;d=c.hijack(b,"draginit",a);if(a.propagates){if((d=c.flatten(d))&&d.length){a.interactions=[];f.each(d,function(){a.interactions.push(c.interaction(this,a))})}a.propagates= a.interactions.length;a.drop!==false&&h.drop&&h.drop.handler(b,a);c.textselect(false);i.add(document,"mousemove mouseup",c.handler,a);return false}}},interaction:function(b,a){return{drag:b,callback:new c.callback,droppable:[],offset:f(b)[a.relative?"position":"offset"]()||{top:0,left:0}}},handler:function(b){var a=b.data;switch(b.type){case !a.dragging&&"mousemove":if(Math.pow(b.pageX-a.pageX,2)+Math.pow(b.pageY-a.pageY,2)<Math.pow(a.distance,2))break;b.target=a.target;c.hijack(b,"dragstart",a); if(a.propagates)a.dragging=true;case "mousemove":if(a.dragging){c.hijack(b,"drag",a);if(a.propagates){a.drop!==false&&h.drop&&h.drop.handler(b,a);break}b.type="mouseup"}case "mouseup":i.remove(document,"mousemove mouseup",c.handler);if(a.dragging){a.drop!==false&&h.drop&&h.drop.handler(b,a);c.hijack(b,"dragend",a)}c.textselect(true);if(a.click===false&&a.dragging){jQuery.event.triggered=true;setTimeout(function(){jQuery.event.triggered=false},20);a.dragging=false}break}},delegate:function(b){var a= [],d,e=f.data(this,"events")||{};f.each(e.live||[],function(k,j){if(j.preType.indexOf("drag")===0)if(d=f(b.target).closest(j.selector,b.currentTarget)[0]){i.add(d,j.origType+"."+c.livekey,j.origHandler,j.data);f.inArray(d,a)<0&&a.push(d)}});if(!a.length)return false;return f(a).bind("dragend."+c.livekey,function(){i.remove(this,"."+c.livekey)})},hijack:function(b,a,d,e,k){if(d){var j={event:b.originalEvent,type:b.type},n=a.indexOf("drop")?"drag":"drop",l,o=e||0,g,m;e=!isNaN(e)?e:d.interactions.length; b.type=a;b.originalEvent=null;d.results=[];do if(g=d.interactions[o])if(!(a!=="dragend"&&g.cancelled)){m=c.properties(b,d,g);g.results=[];f(k||g[n]||d.droppable).each(function(q,p){l=(m.target=p)?i.handle.call(p,b,m):null;if(l===false){if(n=="drag"){g.cancelled=true;d.propagates-=1}if(a=="drop")g[n][q]=null}else if(a=="dropinit")g.droppable.push(c.element(l)||p);if(a=="dragstart")g.proxy=f(c.element(l)||g.drag)[0];g.results.push(l);delete b.result;if(a!=="dropinit")return l});d.results[o]=c.flatten(g.results); if(a=="dropinit")g.droppable=c.flatten(g.droppable);a=="dragstart"&&!g.cancelled&&m.update()}while(++o<e);b.type=j.type;b.originalEvent=j.event;return c.flatten(d.results)}},properties:function(b,a,d){var e=d.callback;e.drag=d.drag;e.proxy=d.proxy||d.drag;e.startX=a.pageX;e.startY=a.pageY;e.deltaX=b.pageX-a.pageX;e.deltaY=b.pageY-a.pageY;e.originalX=d.offset.left;e.originalY=d.offset.top;e.offsetX=b.pageX-(a.pageX-e.originalX);e.offsetY=b.pageY-(a.pageY-e.originalY);e.drop=c.flatten((d.drop||[]).slice()); e.available=c.flatten((d.droppable||[]).slice());return e},element:function(b){if(b&&(b.jquery||b.nodeType==1))return b},flatten:function(b){return f.map(b,function(a){return a&&a.jquery?f.makeArray(a):a&&a.length?c.flatten(a):a})},textselect:function(b){f(document)[b?"unbind":"bind"]("selectstart",c.dontstart).attr("unselectable",b?"off":"on").css("MozUserSelect",b?"":"none")},dontstart:function(){return false},callback:function(){}};c.callback.prototype={update:function(){h.drop&&this.available.length&& f.each(this.available,function(b){h.drop.locate(this,b)})}};h.draginit=h.dragstart=h.dragend=c})(jQuery);

/*
 * jQuery Hotkeys Plugin
 * Copyright 2010, John Resig
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 * Based upon the plugin by Tzury Bar Yochay:
 * http://github.com/tzuryby/hotkeys
 *
 * Original idea by:
 * Binny V A, http://www.openjs.com/scripts/events/keyboard_shortcuts/
*/

(function(jQuery){
	
	jQuery.hotkeys = {
		version: "0.8",

		specialKeys: {
			8: "backspace", 9: "tab", 13: "return", 16: "shift", 17: "ctrl", 18: "alt", 19: "pause",
			20: "capslock", 27: "esc", 32: "space", 33: "pageup", 34: "pagedown", 35: "end", 36: "home",
			37: "left", 38: "up", 39: "right", 40: "down", 45: "insert", 46: "del", 
			96: "0", 97: "1", 98: "2", 99: "3", 100: "4", 101: "5", 102: "6", 103: "7",
			104: "8", 105: "9", 106: "*", 107: "+", 109: "-", 110: ".", 111 : "/", 
			112: "f1", 113: "f2", 114: "f3", 115: "f4", 116: "f5", 117: "f6", 118: "f7", 119: "f8", 
			120: "f9", 121: "f10", 122: "f11", 123: "f12", 144: "numlock", 145: "scroll", 191: "/", 224: "meta"
		},
	
		shiftNums: {
			"`": "~", "1": "!", "2": "@", "3": "#", "4": "$", "5": "%", "6": "^", "7": "&", 
			"8": "*", "9": "(", "0": ")", "-": "_", "=": "+", ";": ": ", "'": "\"", ",": "<", 
			".": ">",  "/": "?",  "\\": "|"
		}
	};

	function keyHandler( handleObj ) {
		// Only care when a possible input has been specified
		if ( typeof handleObj.data !== "string" ) {
			return;
		}
		
		var origHandler = handleObj.handler,
			keys = handleObj.data.toLowerCase().split(" ");
	
		handleObj.handler = function( event ) {
			// Don't fire in text-accepting inputs that we didn't directly bind to
			if ( this !== event.target && (/textarea|select/i.test( event.target.nodeName ) ||
				 event.target.type === "text") ) {
				return;
			}
			
			// Keypress represents characters, not special keys
			var special = event.type !== "keypress" && jQuery.hotkeys.specialKeys[ event.which ],
				character = String.fromCharCode( event.which ).toLowerCase(),
				key, modif = "", possible = {};

			// check combinations (alt|ctrl|shift+anything)
			if ( event.altKey && special !== "alt" ) {
				modif += "alt+";
			}

			if ( event.ctrlKey && special !== "ctrl" ) {
				modif += "ctrl+";
			}
			
			// TODO: Need to make sure this works consistently across platforms
			if ( event.metaKey && !event.ctrlKey && special !== "meta" ) {
				modif += "meta+";
			}

			if ( event.shiftKey && special !== "shift" ) {
				modif += "shift+";
			}

			if ( special ) {
				possible[ modif + special ] = true;

			} else {
				possible[ modif + character ] = true;
				possible[ modif + jQuery.hotkeys.shiftNums[ character ] ] = true;

				// "$" can be triggered as "Shift+4" or "Shift+$" or just "$"
				if ( modif === "shift+" ) {
					possible[ jQuery.hotkeys.shiftNums[ character ] ] = true;
				}
			}

			for ( var i = 0, l = keys.length; i < l; i++ ) {
				if ( possible[ keys[i] ] ) {
					return origHandler.apply( this, arguments );
				}
			}
		};
	}

	jQuery.each([ "keydown", "keyup", "keypress" ], function() {
		jQuery.event.special[ this ] = { add: keyHandler };
	});

})( jQuery );

/*
 * jQuery.ScrollTo
 * Copyright (c) 2007-2008 Ariel Flesler - aflesler(at)gmail(dot)com | http://flesler.blogspot.com
 * Dual licensed under MIT and GPL.
 * Date: 9/11/2008
 *
 * @projectDescription Easy element scrolling using jQuery.
 * http://flesler.blogspot.com/2007/10/jqueryscrollto.html
 * Tested with jQuery 1.2.6. On FF 2/3, IE 6/7, Opera 9.2/5 and Safari 3. on Windows.
 *
 * @author Ariel Flesler
 * @version 1.4
 *
 * @id jQuery.scrollTo
 * @id jQuery.fn.scrollTo
 * @param {String, Number, DOMElement, jQuery, Object} target Where to scroll the matched elements.
 *	  The different options for target are:
 *		- A number position (will be applied to all axes).
 *		- A string position ('44', '100px', '+=90', etc ) will be applied to all axes
 *		- A jQuery/DOM element ( logically, child of the element to scroll )
 *		- A string selector, that will be relative to the element to scroll ( 'li:eq(2)', etc )
 *		- A hash { top:x, left:y }, x and y can be any kind of number/string like above.
 * @param {Number} duration The OVERALL length of the animation, this argument can be the settings object instead.
 * @param {Object,Function} settings Optional set of settings or the onAfter callback.
 *	 @option {String} axis Which axis must be scrolled, use 'x', 'y', 'xy' or 'yx'.
 *	 @option {Number} duration The OVERALL length of the animation.
 *	 @option {String} easing The easing method for the animation.
 *	 @option {Boolean} margin If true, the margin of the target element will be deducted from the final position.
 *	 @option {Object, Number} offset Add/deduct from the end position. One number for both axes or { top:x, left:y }.
 *	 @option {Object, Number} over Add/deduct the height/width multiplied by 'over', can be { top:x, left:y } when using both axes.
 *	 @option {Boolean} queue If true, and both axis are given, the 2nd axis will only be animated after the first one ends.
 *	 @option {Function} onAfter Function to be called after the scrolling ends. 
 *	 @option {Function} onAfterFirst If queuing is activated, this function will be called after the first scrolling ends.
 * @return {jQuery} Returns the same jQuery object, for chaining.
 *
 * @desc Scroll to a fixed position
 * @example $('div').scrollTo( 340 );
 *
 * @desc Scroll relatively to the actual position
 * @example $('div').scrollTo( '+=340px', { axis:'y' } );
 *
 * @dec Scroll using a selector (relative to the scrolled element)
 * @example $('div').scrollTo( 'p.paragraph:eq(2)', 500, { easing:'swing', queue:true, axis:'xy' } );
 *
 * @ Scroll to a DOM element (same for jQuery object)
 * @example var second_child = document.getElementById('container').firstChild.nextSibling;
 *			$('#container').scrollTo( second_child, { duration:500, axis:'x', onAfter:function(){
 *				alert('scrolled!!');																   
 *			}});
 *
 * @desc Scroll on both axes, to different values
 * @example $('div').scrollTo( { top: 300, left:'+=200' }, { axis:'xy', offset:-20 } );
 */
;(function( $ ){
	
	var $scrollTo = $.scrollTo = function( target, duration, settings ){
		$(window).scrollTo( target, duration, settings );
	};

	$scrollTo.defaults = {
		axis:'y',
		duration:1
	};

	// Returns the element that needs to be animated to scroll the window.
	// Kept for backwards compatibility (specially for localScroll & serialScroll)
	$scrollTo.window = function( scope ){
		return $(window).scrollable();
	};

	// Hack, hack, hack... stay away!
	// Returns the real elements to scroll (supports window/iframes, documents and regular nodes)
	$.fn.scrollable = function(){
		return this.map(function(){
			// Just store it, we might need it
			var win = this.parentWindow || this.defaultView,
				// If it's a document, get its iframe or the window if it's THE document
				elem = this.nodeName == '#document' ? win.frameElement || win : this,
				// Get the corresponding document
				doc = elem.contentDocument || (elem.contentWindow || elem).document,
				isWin = elem.setInterval;

			return elem.nodeName == 'IFRAME' || isWin && $.browser.safari ? doc.body
				: isWin ? doc.documentElement
				: this;
		});
	};

	$.fn.scrollTo = function( target, duration, settings ){
		if( typeof duration == 'object' ){
			settings = duration;
			duration = 0;
		}
		if( typeof settings == 'function' )
			settings = { onAfter:settings };
			
		settings = $.extend( {}, $scrollTo.defaults, settings );
		// Speed is still recognized for backwards compatibility
		duration = duration || settings.speed || settings.duration;
		// Make sure the settings are given right
		settings.queue = settings.queue && settings.axis.length > 1;
		
		if( settings.queue )
			// Let's keep the overall duration
			duration /= 2;
		settings.offset = both( settings.offset );
		settings.over = both( settings.over );

		return this.scrollable().each(function(){
			var elem = this,
				$elem = $(elem),
				targ = target, toff, attr = {},
				win = $elem.is('html,body');

			switch( typeof targ ){
				// A number will pass the regex
				case 'number':
				case 'string':
					if( /^([+-]=)?\d+(px)?$/.test(targ) ){
						targ = both( targ );
						// We are done
						break;
					}
					// Relative selector, no break!
					targ = $(targ,this);
				case 'object':
					// DOMElement / jQuery
					if( targ.is || targ.style )
						// Get the real position of the target 
						toff = (targ = $(targ)).offset();
			}
			$.each( settings.axis.split(''), function( i, axis ){
				var Pos	= axis == 'x' ? 'Left' : 'Top',
					pos = Pos.toLowerCase(),
					key = 'scroll' + Pos,
					old = elem[key],
					Dim = axis == 'x' ? 'Width' : 'Height',
					dim = Dim.toLowerCase();

				if( toff ){// jQuery / DOMElement
					attr[key] = toff[pos] + ( win ? 0 : old - $elem.offset()[pos] );

					// If it's a dom element, reduce the margin
					if( settings.margin ){
						attr[key] -= parseInt(targ.css('margin'+Pos)) || 0;
						attr[key] -= parseInt(targ.css('border'+Pos+'Width')) || 0;
					}
					
					attr[key] += settings.offset[pos] || 0;
					
					if( settings.over[pos] )
						// Scroll to a fraction of its width/height
						attr[key] += targ[dim]() * settings.over[pos];
				}else
					attr[key] = targ[pos];

				// Number or 'number'
				if( /^\d+$/.test(attr[key]) )
					// Check the limits
					attr[key] = attr[key] <= 0 ? 0 : Math.min( attr[key], max(Dim) );

				// Queueing axes
				if( !i && settings.queue ){
					// Don't waste time animating, if there's no need.
					if( old != attr[key] )
						// Intermediate animation
						animate( settings.onAfterFirst );
					// Don't animate this axis again in the next iteration.
					delete attr[key];
				}
			});			
			animate( settings.onAfter );			

			function animate( callback ){
				$elem.animate( attr, duration, settings.easing, callback && function(){
					callback.call(this, target, settings);
				});
			};
			function max( Dim ){
				var attr ='scroll'+Dim,
					doc = elem.ownerDocument;
				
				return win
						? Math.max( doc.documentElement[attr], doc.body[attr]  )
						: elem[attr];
			};
		}).end();
	};

	function both( val ){
		return typeof val == 'object' ? val : { top:val, left:val };
	};

})( jQuery );

/*
 *
 * Copyright (c) 2010 C. F., Wong (<a href="http://cloudgen.w0ng.hk">Cloudgen Examplet Store</a>)
 * Licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */
﻿(function($,len,createRange,duplicate){
	$.fn.caret=function(options,opt2){
		var start,end,t=this[0],browser=$.browser.msie;
		if(typeof options==="object" && typeof options.start==="number" && typeof options.end==="number") {
			start=options.start;
			end=options.end;
		} else if(typeof options==="number" && typeof opt2==="number"){
			start=options;
			end=opt2;
		} else if(typeof options==="string"){
			if((start=t.value.indexOf(options))>-1) end=start+options[len];
			else start=null;
		} else if(Object.prototype.toString.call(options)==="[object RegExp]"){
			var re=options.exec(t.value);
			if(re != null) {
				start=re.index;
				end=start+re[0][len];
			}
		}
		if(typeof start!="undefined"){
			if(browser){
				var selRange = this[0].createTextRange();
				selRange.collapse(true);
				selRange.moveStart('character', start);
				selRange.moveEnd('character', end-start);
				selRange.select();
			} else {
				this[0].selectionStart=start;
				this[0].selectionEnd=end;
			}
			this[0].focus();
			return this
		} else {
			// Modification as suggested by Андрей Юткин
           if(browser){
				var selection=document.selection;
                if (this[0].tagName.toLowerCase() != "textarea") {
                    var val = this.val(),
                    range = selection[createRange]()[duplicate]();
                    range.moveEnd("character", val[len]);
                    var s = (range.text == "" ? val[len]:val.lastIndexOf(range.text));
                    range = selection[createRange]()[duplicate]();
                    range.moveStart("character", -val[len]);
                    var e = range.text[len];
                } else {
                    var range = selection[createRange](),
                    stored_range = range[duplicate]();
                    stored_range.moveToElementText(this[0]);
                    stored_range.setEndPoint('EndToEnd', range);
                    var s = stored_range.text[len] - range.text[len],
                    e = s + range.text[len]
                }
			// End of Modification
            } else {
				var s=t.selectionStart,
					e=t.selectionEnd;
			}
			var te=t.value.substring(s,e);
			return {start:s,end:e,text:te,replace:function(st){
				return t.value.substring(0,s)+st+t.value.substring(e,t.value[len])
			}}
		}
	}
})(jQuery,"length","createRange","duplicate");

/*
 * zClip :: jQuery ZeroClipboard v1.1.1
 * http://steamdev.com/zclip
 *
 * Copyright 2011, SteamDev
 * Released under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Date: Wed Jun 01, 2011
 */


(function ($) {

    $.fn.zclip = function (params) {

        if (typeof params == "object" && !params.length) {

            var settings = $.extend({

                path: 'ZeroClipboard.swf',
                copy: null,
                beforeCopy: null,
                afterCopy: null,
                clickAfter: true,
                setHandCursor: true,
                setCSSEffects: true

            }, params);
			

            return this.each(function () {

                var o = $(this);

                if (o.is(':visible') && (typeof settings.copy == 'string' || $.isFunction(settings.copy))) {

                    ZeroClipboard.setMoviePath(settings.path);
                    var clip = new ZeroClipboard.Client();
                    
                    if($.isFunction(settings.copy)){
                    	o.bind('zClip_copy',settings.copy);
                    }
                    if($.isFunction(settings.beforeCopy)){
                    	o.bind('zClip_beforeCopy',settings.beforeCopy);
                    }
                    if($.isFunction(settings.afterCopy)){
                    	o.bind('zClip_afterCopy',settings.afterCopy);
                    }                    

                    clip.setHandCursor(settings.setHandCursor);
                    clip.setCSSEffects(settings.setCSSEffects);
                    clip.addEventListener('mouseOver', function (client) {
                        o.trigger('mouseenter');
                    });
                    clip.addEventListener('mouseOut', function (client) {
                        o.trigger('mouseleave');
                    });
                    clip.addEventListener('mouseDown', function (client) {

                        o.trigger('mousedown');
                        
			if(!$.isFunction(settings.copy)){
			   clip.setText(settings.copy);
			} else {
			   clip.setText(o.triggerHandler('zClip_copy'));
			}                        
                        
                        if ($.isFunction(settings.beforeCopy)) {
                            o.trigger('zClip_beforeCopy');                            
                        }

                    });

                    clip.addEventListener('complete', function (client, text) {

                        if ($.isFunction(settings.afterCopy)) {
                            
                            o.trigger('zClip_afterCopy');

                        } else {
                            if (text.length > 500) {
                                text = text.substr(0, 500) + "...\n\n(" + (text.length - 500) + " characters not shown)";
                            }
							
			    o.removeClass('hover');
                            alert("Copied text to clipboard:\n\n " + text);
                        }

                        if (settings.clickAfter) {
                            o.trigger('click');
                        }

                    });

					
                    clip.glue(o[0], o.parent()[0]);
					
		    $(window).bind('load resize',function(){clip.reposition();});
					

                }

            });

        } else if (typeof params == "string") {

            return this.each(function () {

                var o = $(this);

                params = params.toLowerCase();
                var zclipId = o.data('zclipId');
                var clipElm = $('#' + zclipId + '.zclip');

                if (params == "remove") {

                    clipElm.remove();
                    o.removeClass('active hover');
					
					o.unbind('zClip_beforeCopy');
					o.unbind('zClip_afterCopy');

                } else if (params == "hide") {

                    clipElm.hide();
                    o.removeClass('active hover');

                } else if (params == "show") {

                    clipElm.show();

                }

            });

        }

    }	
	
	

})(jQuery);







// ZeroClipboard
// Simple Set Clipboard System
// Author: Joseph Huckaby
var ZeroClipboard = {

    version: "1.0.7",
    clients: {},
    // registered upload clients on page, indexed by id
    moviePath: 'ZeroClipboard.swf',
    // URL to movie
    nextId: 1,
    // ID of next movie
    $: function (thingy) {
        // simple DOM lookup utility function
        if (typeof(thingy) == 'string') thingy = document.getElementById(thingy);
        if (!thingy.addClass) {
            // extend element with a few useful methods
            thingy.hide = function () {
                this.style.display = 'none';
            };
            thingy.show = function () {
                this.style.display = '';
            };
            thingy.addClass = function (name) {
                this.removeClass(name);
                this.className += ' ' + name;
            };
            thingy.removeClass = function (name) {
                var classes = this.className.split(/\s+/);
                var idx = -1;
                for (var k = 0; k < classes.length; k++) {
                    if (classes[k] == name) {
                        idx = k;
                        k = classes.length;
                    }
                }
                if (idx > -1) {
                    classes.splice(idx, 1);
                    this.className = classes.join(' ');
                }
                return this;
            };
            thingy.hasClass = function (name) {
                return !!this.className.match(new RegExp("\\s*" + name + "\\s*"));
            };
        }
        return thingy;
    },

    setMoviePath: function (path) {
        // set path to ZeroClipboard.swf
        this.moviePath = path;
    },

    dispatch: function (id, eventName, args) {
        // receive event from flash movie, send to client		
        var client = this.clients[id];
        if (client) {
            client.receiveEvent(eventName, args);
        }
    },

    register: function (id, client) {
        // register new client to receive events
        this.clients[id] = client;
    },

    getDOMObjectPosition: function (obj, stopObj) {
        // get absolute coordinates for dom element
        var info = {
            left: 0,
            top: 0,
            width: obj.width ? obj.width : obj.offsetWidth,
            height: obj.height ? obj.height : obj.offsetHeight
        };

        if (obj && (obj != stopObj)) {
			info.left += obj.offsetLeft;
            info.top += obj.offsetTop;
        }

        return info;
    },

    Client: function (elem) {
        // constructor for new simple upload client
        this.handlers = {};

        // unique ID
        this.id = ZeroClipboard.nextId++;
        this.movieId = 'ZeroClipboardMovie_' + this.id;

        // register client with singleton to receive flash events
        ZeroClipboard.register(this.id, this);

        // create movie
        if (elem) this.glue(elem);
    }
};

ZeroClipboard.Client.prototype = {

    id: 0,
    // unique ID for us
    ready: false,
    // whether movie is ready to receive events or not
    movie: null,
    // reference to movie object
    clipText: '',
    // text to copy to clipboard
    handCursorEnabled: true,
    // whether to show hand cursor, or default pointer cursor
    cssEffects: true,
    // enable CSS mouse effects on dom container
    handlers: null,
    // user event handlers
    glue: function (elem, appendElem, stylesToAdd) {
        // glue to DOM element
        // elem can be ID or actual DOM element object
        this.domElement = ZeroClipboard.$(elem);

        // float just above object, or zIndex 99 if dom element isn't set
        var zIndex = 99;
        if (this.domElement.style.zIndex) {
            zIndex = parseInt(this.domElement.style.zIndex, 10) + 1;
        }

        if (typeof(appendElem) == 'string') {
            appendElem = ZeroClipboard.$(appendElem);
        } else if (typeof(appendElem) == 'undefined') {
            appendElem = document.getElementsByTagName('body')[0];
        }

        // find X/Y position of domElement
        var box = ZeroClipboard.getDOMObjectPosition(this.domElement, appendElem);

        // create floating DIV above element
        this.div = document.createElement('div');
        this.div.className = "zclip";
        this.div.id = "zclip-" + this.movieId;
        $(this.domElement).data('zclipId', 'zclip-' + this.movieId);
        var style = this.div.style;
        style.position = 'absolute';
        style.left = '' + box.left + 'px';
        style.top = '' + box.top + 'px';
        style.width = '' + box.width + 'px';
        style.height = '' + box.height + 'px';
        style.zIndex = zIndex;

        if (typeof(stylesToAdd) == 'object') {
            for (addedStyle in stylesToAdd) {
                style[addedStyle] = stylesToAdd[addedStyle];
            }
        }

        // style.backgroundColor = '#f00'; // debug
        appendElem.appendChild(this.div);

        this.div.innerHTML = this.getHTML(box.width, box.height);
    },

    getHTML: function (width, height) {
        // return HTML for movie
        var html = '';
        var flashvars = 'id=' + this.id + '&width=' + width + '&height=' + height;

        if (navigator.userAgent.match(/MSIE/)) {
            // IE gets an OBJECT tag
            var protocol = location.href.match(/^https/i) ? 'https://' : 'http://';
            html += '<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="' + protocol + 'download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + width + '" height="' + height + '" id="' + this.movieId + '" align="middle"><param name="allowScriptAccess" value="always" /><param name="allowFullScreen" value="false" /><param name="movie" value="' + ZeroClipboard.moviePath + '" /><param name="loop" value="false" /><param name="menu" value="false" /><param name="quality" value="best" /><param name="bgcolor" value="#ffffff" /><param name="flashvars" value="' + flashvars + '"/><param name="wmode" value="transparent"/></object>';
        } else {
            // all other browsers get an EMBED tag
            html += '<embed id="' + this.movieId + '" src="' + ZeroClipboard.moviePath + '" loop="false" menu="false" quality="best" bgcolor="#ffffff" width="' + width + '" height="' + height + '" name="' + this.movieId + '" align="middle" allowScriptAccess="always" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" flashvars="' + flashvars + '" wmode="transparent" />';
        }
        return html;
    },

    hide: function () {
        // temporarily hide floater offscreen
        if (this.div) {
            this.div.style.left = '-2000px';
        }
    },

    show: function () {
        // show ourselves after a call to hide()
        this.reposition();
    },

    destroy: function () {
        // destroy control and floater
        if (this.domElement && this.div) {
            this.hide();
            this.div.innerHTML = '';

            var body = document.getElementsByTagName('body')[0];
            try {
                body.removeChild(this.div);
            } catch (e) {;
            }

            this.domElement = null;
            this.div = null;
        }
    },

    reposition: function (elem) {
        // reposition our floating div, optionally to new container
        // warning: container CANNOT change size, only position
        if (elem) {
            this.domElement = ZeroClipboard.$(elem);
            if (!this.domElement) this.hide();
        }

        if (this.domElement && this.div) {
            var box = ZeroClipboard.getDOMObjectPosition(this.domElement);
            var style = this.div.style;
            style.left = '' + box.left + 'px';
            style.top = '' + box.top + 'px';
        }
    },

    setText: function (newText) {
        // set text to be copied to clipboard
        this.clipText = newText;
        if (this.ready) {
            this.movie.setText(newText);
        }
    },

    addEventListener: function (eventName, func) {
        // add user event listener for event
        // event types: load, queueStart, fileStart, fileComplete, queueComplete, progress, error, cancel
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');
        if (!this.handlers[eventName]) {
            this.handlers[eventName] = [];
        }
        this.handlers[eventName].push(func);
    },

    setHandCursor: function (enabled) {
        // enable hand cursor (true), or default arrow cursor (false)
        this.handCursorEnabled = enabled;
        if (this.ready) {
            this.movie.setHandCursor(enabled);
        }
    },

    setCSSEffects: function (enabled) {
        // enable or disable CSS effects on DOM container
        this.cssEffects = !! enabled;
    },

    receiveEvent: function (eventName, args) {
        // receive event from flash
        eventName = eventName.toString().toLowerCase().replace(/^on/, '');

        // special behavior for certain events
        switch (eventName) {
        case 'load':
            // movie claims it is ready, but in IE this isn't always the case...
            // bug fix: Cannot extend EMBED DOM elements in Firefox, must use traditional function
            this.movie = document.getElementById(this.movieId);
            if (!this.movie) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 1);
                return;
            }

            // firefox on pc needs a "kick" in order to set these in certain cases
            if (!this.ready && navigator.userAgent.match(/Firefox/) && navigator.userAgent.match(/Windows/)) {
                var self = this;
                setTimeout(function () {
                    self.receiveEvent('load', null);
                }, 100);
                this.ready = true;
                return;
            }

            this.ready = true;
            try {
                this.movie.setText(this.clipText);
            } catch (e) {}
            try {
                this.movie.setHandCursor(this.handCursorEnabled);
            } catch (e) {}
            break;

        case 'mouseover':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('hover');
                if (this.recoverActive) {
                    this.domElement.addClass('active');
                }


            }


            break;

        case 'mouseout':
            if (this.domElement && this.cssEffects) {
                this.recoverActive = false;
                if (this.domElement.hasClass('active')) {
                    this.domElement.removeClass('active');
                    this.recoverActive = true;
                }
                this.domElement.removeClass('hover');

            }
            break;

        case 'mousedown':
            if (this.domElement && this.cssEffects) {
                this.domElement.addClass('active');
            }
            break;

        case 'mouseup':
            if (this.domElement && this.cssEffects) {
                this.domElement.removeClass('active');
                this.recoverActive = false;
            }
            break;
        } // switch eventName
        if (this.handlers[eventName]) {
            for (var idx = 0, len = this.handlers[eventName].length; idx < len; idx++) {
                var func = this.handlers[eventName][idx];

                if (typeof(func) == 'function') {
                    // actual function reference
                    func(this, args);
                } else if ((typeof(func) == 'object') && (func.length == 2)) {
                    // PHP style object + method, i.e. [myObject, 'myMethod']
                    func[0][func[1]](this, args);
                } else if (typeof(func) == 'string') {
                    // name of function
                    window[func](this, args);
                }
            } // foreach event handler defined
        } // user defined handler for event
    }

};	

/*
 * Pulse plugin for jQuery 
 * ---
 * @author James Padolsey (http://james.padolsey.com)
 * @version 0.1
 * @updated 16-DEC-09
 * ---
 * Note: In order to animate color properties, you need
 * the color plugin from here: http://plugins.jquery.com/project/color
 * ---
 * @info http://james.padolsey.com/javascript/simple-pulse-plugin-for-jquery/
 */
jQuery.fn.pulse = function( prop, speed, times, easing, callback ) {
    
    if ( isNaN(times) ) {
        callback = easing;
        easing = times;
        times = 1;
    }
    
    var optall = jQuery.speed(speed, easing, callback),
        queue = optall.queue !== false,
        largest = 0;
        
    for (var p in prop) {
        largest = Math.max(prop[p].length, largest);
    }
    
    optall.times = optall.times || times;
    
    return this[queue?'queue':'each'](function(){
        
        var counts = {},
            opt = jQuery.extend({}, optall),
            self = jQuery(this);
            
        pulse();
        
        function pulse() {
            
            var propsSingle = {},
                doAnimate = false;
            
            for (var p in prop) {
                
                // Make sure counter is setup for current prop
                counts[p] = counts[p] || {runs:0,cur:-1};
                
                // Set "cur" to reflect new position in pulse array
                if ( counts[p].cur < prop[p].length - 1 ) {
                    ++counts[p].cur;
                } else {
                    // Reset to beginning of pulse array
                    counts[p].cur = 0;
                    ++counts[p].runs;
                }
                
                if ( prop[p].length === largest ) {
                    doAnimate = opt.times > counts[p].runs;
                }
                
                propsSingle[p] = prop[p][counts[p].cur];
                
            }
            
            opt.complete = pulse;
            opt.queue = false;
            
            if (doAnimate) {
                self.animate(propsSingle, opt);
            } else {
                optall.complete.call(self[0]);
            }
            
        }
            
    });
    
};

/*
 * jQuery miniColors: A small color selector
 *
 * Copyright 2011 Cory LaViska for A Beautiful Site, LLC. (http://abeautifulsite.net/)
 *
 * Dual licensed under the MIT or GPL Version 2 licenses
 *
*/
if(jQuery) (function($) {
	
	$.extend($.fn, {
		
		miniColors: function(o, data) {
			
			var create = function(input, o, data) {
				//
				// Creates a new instance of the miniColors selector
				//
				
				// Determine initial color (defaults to white)
				var color = expandHex(input.val());
				if( !color ) color = 'ffffff';
				var hsb = hex2hsb(color);
				
				// Create trigger
				var trigger = $('<a class="miniColors-trigger" style="background-color: #' + color + '" href="#"></a>');
				trigger.insertAfter(input);
				
				// Set input data and update attributes
				input
					.addClass('miniColors')
					.data('original-maxlength', input.attr('maxlength') || null)
					.data('original-autocomplete', input.attr('autocomplete') || null)
					.data('letterCase', 'uppercase')
					.data('trigger', trigger)
					.data('hsb', hsb)
					.data('change', o.change ? o.change : null)
					.data('close', o.close ? o.close : null)
					.data('open', o.open ? o.open : null)
					.attr('maxlength', 7)
					.attr('autocomplete', 'off')
					.val('#' + convertCase(color, o.letterCase));
				
				// Handle options
				if( o.readonly ) input.prop('readonly', true);
				if( o.disabled ) disable(input);
				
				// Show selector when trigger is clicked
				trigger.bind('click.miniColors', function(event) {
					event.preventDefault();
					if( input.val() === '' ) input.val('#');
					show(input);

				});
				
				// Show selector when input receives focus
				input.bind('focus.miniColors', function(event) {
					if( input.val() === '' ) input.val('#');
					show(input);
				});
				
				// Hide on blur
				input.bind('blur.miniColors', function(event) {
					var hex = expandHex( hsb2hex(input.data('hsb')) );
					input.val( hex ? '#' + convertCase(hex, input.data('letterCase')) : '' );
				});
				
				// Hide when tabbing out of the input
				input.bind('keydown.miniColors', function(event) {
					if( event.keyCode === 9 ) hide(input);
				});
				
				// Update when color is typed in
				input.bind('keyup.miniColors', function(event) {
					setColorFromInput(input);
				});
				
				// Handle pasting
				input.bind('paste.miniColors', function(event) {
					// Short pause to wait for paste to complete
					setTimeout( function() {
						setColorFromInput(input);
					}, 5);
				});
				
			};
			
			var destroy = function(input) {
				//
				// Destroys an active instance of the miniColors selector
				//
				
				hide();
				input = $(input);
				
				// Restore to original state
				input.data('trigger').remove();
				input
					.attr('autocomplete', input.data('original-autocomplete'))
					.attr('maxlength', input.data('original-maxlength'))
					.removeData()
					.removeClass('miniColors')
					.unbind('.miniColors');
				$(document).unbind('.miniColors');
			};
			
			var enable = function(input) {
				//
				// Enables the input control and the selector
				//
				input
					.prop('disabled', false)
					.data('trigger')
					.css('opacity', 1);
			};
			
			var disable = function(input) {
				//
				// Disables the input control and the selector
				//
				hide(input);
				input
					.prop('disabled', true)
					.data('trigger')
					.css('opacity', 0.5);
			};
			
			var show = function(input) {
				//
				// Shows the miniColors selector
				//
				if( input.prop('disabled') ) return false;
				
				// Hide all other instances 
				hide();				
				
				// Generate the selector
				var selector = $('<div class="miniColors-selector"></div>');
				selector
					.append('<div class="miniColors-colors" style="background-color: #FFF;"><div class="miniColors-colorPicker"><div class="miniColors-colorPicker-inner"></div></div>')
					.append('<div class="miniColors-hues"><div class="miniColors-huePicker"></div></div>')
					.css({
						top: input.is(':visible') ? input.offset().top + input.outerHeight() : input.data('trigger').offset().top + input.data('trigger').outerHeight(),
						left: input.is(':visible') ? input.offset().left : input.data('trigger').offset().left,
						display: 'none'
					})
					.addClass( input.attr('class') );
				
				// Set background for colors
				var hsb = input.data('hsb');
				selector
					.find('.miniColors-colors')
					.css('backgroundColor', '#' + hsb2hex({ h: hsb.h, s: 100, b: 100 }));
				
				// Set colorPicker position
				var colorPosition = input.data('colorPosition');
				if( !colorPosition ) colorPosition = getColorPositionFromHSB(hsb);
				selector.find('.miniColors-colorPicker')
					.css('top', colorPosition.y + 'px')
					.css('left', colorPosition.x + 'px');
				
				// Set huePicker position
				var huePosition = input.data('huePosition');
				if( !huePosition ) huePosition = getHuePositionFromHSB(hsb);
				selector.find('.miniColors-huePicker').css('top', huePosition.y + 'px');
				
				// Set input data
				input
					.data('selector', selector)
					.data('huePicker', selector.find('.miniColors-huePicker'))
					.data('colorPicker', selector.find('.miniColors-colorPicker'))
					.data('mousebutton', 0);
					
				$('BODY').append(selector);
				selector.fadeIn(100);
				
				// Prevent text selection in IE
				selector.bind('selectstart', function() { return false; });
				
				$(document).bind('mousedown.miniColors touchstart.miniColors', function(event) {
					
					input.data('mousebutton', 1);
					var testSubject = $(event.target).parents().andSelf();
					
					if( testSubject.hasClass('miniColors-colors') ) {
						event.preventDefault();
						input.data('moving', 'colors');
						moveColor(input, event);
					}
					
					if( testSubject.hasClass('miniColors-hues') ) {
						event.preventDefault();
						input.data('moving', 'hues');
						moveHue(input, event);
					}
					
					if( testSubject.hasClass('miniColors-selector') ) {
						event.preventDefault();
						return;
					}
					
					if( testSubject.hasClass('miniColors') ) return;
					
					hide(input);
				});
				
				$(document)
					.bind('mouseup.miniColors touchend.miniColors', function(event) {
					    event.preventDefault();
						input.data('mousebutton', 0).removeData('moving');
					})
					.bind('mousemove.miniColors touchmove.miniColors', function(event) {
						event.preventDefault();
						if( input.data('mousebutton') === 1 ) {
							if( input.data('moving') === 'colors' ) moveColor(input, event);
							if( input.data('moving') === 'hues' ) moveHue(input, event);
						}
					});
				
				// Fire open callback
				if( input.data('open') ) {
					input.data('open').call(input.get(0), '#' + hsb2hex(hsb), hsb2rgb(hsb));
				}
				
			};
			
			var hide = function(input) {
				
				//
				// Hides one or more miniColors selectors
				//
				
				// Hide all other instances if input isn't specified
				if( !input ) input = $('.miniColors');
				
				$(input).each( function() {
					var selector = $(this).data('selector');
					$(this).removeData('selector');
					$(selector).fadeOut(100, function() {
						// Fire close callback
						if( input.data('close') ) {
							var hsb = input.data('hsb'), hex = hsb2hex(hsb);	
							input.data('close').call(input.get(0), '#' + hex, hsb2rgb(hsb));
						}
						$(this).remove();
					});
				});
				
				$(document).unbind('.miniColors');
				
			};
			
			var moveColor = function(input, event) {

				var colorPicker = input.data('colorPicker');
				
				colorPicker.hide();
				
				var position = {
					x: event.pageX,
					y: event.pageY
				};
				
				// Touch support
				if( event.originalEvent.changedTouches ) {
					position.x = event.originalEvent.changedTouches[0].pageX;
					position.y = event.originalEvent.changedTouches[0].pageY;
				}
				position.x = position.x - input.data('selector').find('.miniColors-colors').offset().left - 5;
				position.y = position.y - input.data('selector').find('.miniColors-colors').offset().top - 5;
				if( position.x <= -5 ) position.x = -5;
				if( position.x >= 144 ) position.x = 144;
				if( position.y <= -5 ) position.y = -5;
				if( position.y >= 144 ) position.y = 144;
				
				input.data('colorPosition', position);
				colorPicker.css('left', position.x).css('top', position.y).show();
				
				// Calculate saturation
				var s = Math.round((position.x + 5) * 0.67);
				if( s < 0 ) s = 0;
				if( s > 100 ) s = 100;
				
				// Calculate brightness
				var b = 100 - Math.round((position.y + 5) * 0.67);
				if( b < 0 ) b = 0;
				if( b > 100 ) b = 100;
				
				// Update HSB values
				var hsb = input.data('hsb');
				hsb.s = s;
				hsb.b = b;
				
				// Set color
				setColor(input, hsb, true);
			};
			
			var moveHue = function(input, event) {
				
				var huePicker = input.data('huePicker');
				
				huePicker.hide();
				
				var position = {
					y: event.pageY
				};
				
				// Touch support
				if( event.originalEvent.changedTouches ) {
					position.y = event.originalEvent.changedTouches[0].pageY;
				}
				
				position.y = position.y - input.data('selector').find('.miniColors-colors').offset().top - 1;
				if( position.y <= -1 ) position.y = -1;
				if( position.y >= 149 ) position.y = 149;
				input.data('huePosition', position);
				huePicker.css('top', position.y).show();
				
				// Calculate hue
				var h = Math.round((150 - position.y - 1) * 2.4);
				if( h < 0 ) h = 0;
				if( h > 360 ) h = 360;
				
				// Update HSB values
				var hsb = input.data('hsb');
				hsb.h = h;
				
				// Set color
				setColor(input, hsb, true);
				
			};
			
			var setColor = function(input, hsb, updateInput) {
				input.data('hsb', hsb);
				var hex = hsb2hex(hsb);	
				if( updateInput ) input.val( '#' + convertCase(hex, input.data('letterCase')) );
				input.data('trigger').css('backgroundColor', '#' + hex);
				if( input.data('selector') ) input.data('selector').find('.miniColors-colors').css('backgroundColor', '#' + hsb2hex({ h: hsb.h, s: 100, b: 100 }));
				
				// Fire change callback
				if( input.data('change') ) {
					if( hex === input.data('lastChange') ) return;
					input.data('change').call(input.get(0), '#' + hex, hsb2rgb(hsb));
					input.data('lastChange', hex);
				}
				
			};
			
			var setColorFromInput = function(input) {
				
				input.val('#' + cleanHex(input.val()));
				var hex = expandHex(input.val());
				if( !hex ) return false;
				
				// Get HSB equivalent
				var hsb = hex2hsb(hex);
				
				// If color is the same, no change required
				var currentHSB = input.data('hsb');
				if( hsb.h === currentHSB.h && hsb.s === currentHSB.s && hsb.b === currentHSB.b ) return true;
				
				// Set colorPicker position
				var colorPosition = getColorPositionFromHSB(hsb);
				var colorPicker = $(input.data('colorPicker'));
				colorPicker.css('top', colorPosition.y + 'px').css('left', colorPosition.x + 'px');
				input.data('colorPosition', colorPosition);
				
				// Set huePosition position
				var huePosition = getHuePositionFromHSB(hsb);
				var huePicker = $(input.data('huePicker'));
				huePicker.css('top', huePosition.y + 'px');
				input.data('huePosition', huePosition);
				
				setColor(input, hsb);
				
				return true;
				
			};
			
			var convertCase = function(string, letterCase) {
				if( letterCase === 'lowercase' ) return string.toLowerCase();
				if( letterCase === 'uppercase' ) return string.toUpperCase();
				return string;
			};
			
			var getColorPositionFromHSB = function(hsb) {				
				var x = Math.ceil(hsb.s / 0.67);
				if( x < 0 ) x = 0;
				if( x > 150 ) x = 150;
				var y = 150 - Math.ceil(hsb.b / 0.67);
				if( y < 0 ) y = 0;
				if( y > 150 ) y = 150;
				return { x: x - 5, y: y - 5 };
			};
			
			var getHuePositionFromHSB = function(hsb) {
				var y = 150 - (hsb.h / 2.4);
				if( y < 0 ) h = 0;
				if( y > 150 ) h = 150;				
				return { y: y - 1 };
			};
			
			var cleanHex = function(hex) {
				return hex.replace(/[^A-F0-9]/ig, '');
			};
			
			var expandHex = function(hex) {
				hex = cleanHex(hex);
				if( !hex ) return null;
				if( hex.length === 3 ) hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
				return hex.length === 6 ? hex : null;
			};			
			
			var hsb2rgb = function(hsb) {
				var rgb = {};
				var h = Math.round(hsb.h);
				var s = Math.round(hsb.s*255/100);
				var v = Math.round(hsb.b*255/100);
				if(s === 0) {
					rgb.r = rgb.g = rgb.b = v;
				} else {
					var t1 = v;
					var t2 = (255 - s) * v / 255;
					var t3 = (t1 - t2) * (h % 60) / 60;
					if( h === 360 ) h = 0;
					if( h < 60 ) { rgb.r = t1; rgb.b = t2; rgb.g = t2 + t3; }
					else if( h < 120 ) {rgb.g = t1; rgb.b = t2; rgb.r = t1 - t3; }
					else if( h < 180 ) {rgb.g = t1; rgb.r = t2; rgb.b = t2 + t3; }
					else if( h < 240 ) {rgb.b = t1; rgb.r = t2; rgb.g = t1 - t3; }
					else if( h < 300 ) {rgb.b = t1; rgb.g = t2; rgb.r = t2 + t3; }
					else if( h < 360 ) {rgb.r = t1; rgb.g = t2; rgb.b = t1 - t3; }
					else { rgb.r = 0; rgb.g = 0; rgb.b = 0; }
				}
				return {
					r: Math.round(rgb.r),
					g: Math.round(rgb.g),
					b: Math.round(rgb.b)
				};
			};
			
			var rgb2hex = function(rgb) {
				var hex = [
					rgb.r.toString(16),
					rgb.g.toString(16),
					rgb.b.toString(16)
				];
				$.each(hex, function(nr, val) {
					if (val.length === 1) hex[nr] = '0' + val;
				});
				return hex.join('');
			};
			
			var hex2rgb = function(hex) {
				hex = parseInt(((hex.indexOf('#') > -1) ? hex.substring(1) : hex), 16);
				
				return {
					r: hex >> 16,
					g: (hex & 0x00FF00) >> 8,
					b: (hex & 0x0000FF)
				};
			};
			
			var rgb2hsb = function(rgb) {
				var hsb = { h: 0, s: 0, b: 0 };
				var min = Math.min(rgb.r, rgb.g, rgb.b);
				var max = Math.max(rgb.r, rgb.g, rgb.b);
				var delta = max - min;
				hsb.b = max;
				hsb.s = max !== 0 ? 255 * delta / max : 0;
				if( hsb.s !== 0 ) {
					if( rgb.r === max ) {
						hsb.h = (rgb.g - rgb.b) / delta;
					} else if( rgb.g === max ) {
						hsb.h = 2 + (rgb.b - rgb.r) / delta;
					} else {
						hsb.h = 4 + (rgb.r - rgb.g) / delta;
					}
				} else {
					hsb.h = -1;
				}
				hsb.h *= 60;
				if( hsb.h < 0 ) {
					hsb.h += 360;
				}
				hsb.s *= 100/255;
				hsb.b *= 100/255;
				return hsb;
			};			
			
			var hex2hsb = function(hex) {
				var hsb = rgb2hsb(hex2rgb(hex));
				// Zero out hue marker for black, white, and grays (saturation === 0)
				if( hsb.s === 0 ) hsb.h = 360;
				return hsb;
			};
			
			var hsb2hex = function(hsb) {
				return rgb2hex(hsb2rgb(hsb));
			};

			
			// Handle calls to $([selector]).miniColors()
			switch(o) {
			
				case 'readonly':
					
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						$(this).prop('readonly', data);
					});
					
					return $(this);
				
				case 'disabled':
					
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						if( data ) {
							disable($(this));
						} else {
							enable($(this));
						}
					});
										
					return $(this);
			
				case 'value':
					
					// Getter
					if( data === undefined ) {
						if( !$(this).hasClass('miniColors') ) return;
						var input = $(this),
							hex = expandHex(input.val());
						return hex ? '#' + convertCase(hex, input.data('letterCase')) : null;
					}
					
					// Setter
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						$(this).val(data);
						setColorFromInput($(this));
					});
					
					return $(this);
					
				case 'destroy':
					
					$(this).each( function() {
						if( !$(this).hasClass('miniColors') ) return;
						destroy($(this));
					});
										
					return $(this);
				
				default:
					
					if( !o ) o = {};
					
					$(this).each( function() {
						
						// Must be called on an input element
						if( $(this)[0].tagName.toLowerCase() !== 'input' ) return;
						
						// If a trigger is present, the control was already created
						if( $(this).data('trigger') ) return;
						
						// Create the control
						create($(this), o, data);
						
					});
					
					return $(this);
					
			}
			
		}
			
	});
	
})(jQuery);

/**
 * jqMetro
 * JQUERY PLUGIN FOR METRO UI CONTROLS
 *
 * Copyright (c) 2011 Mohammad Valipour (http://manorey.net/mohblog)
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 *
 */

;(function ($) {
    var defaults = {
        animationDuration: 150,
        headerOpacity: 0.5,
        fixedHeaders: false,
        headerSelector: function (item) { return item.children("h3").first(); },
        itemSelector: function (item) { return item.children(".pivot-item"); },
        headerItemTemplate: function () { return $("<span class='header' />"); },
        pivotItemTemplate: function () { return $("<div class='pivotItem' />"); },
        itemsTemplate: function () { return $("<div class='items' />"); },
        headersTemplate: function () { return $("<div class='headers' />"); },
        controlInitialized: undefined,
        selectedItemChanged: undefined
    };

    $.fn.metroPivot = function (settings) {
        if(this.length > 1)
        {
            return this.each(function(index, el){ $(el).wp7Pivot(settings); });
        }

        $.extend(this, defaults, settings);
        $.extend(this,{
            animating : false,
            headers : undefined,
            items : undefined,
            goToNext: function(){
                if(this.animating) return;
                this.headers.children(".current").next().trigger("click");
            },
            goToPrevious: function(){
                if(this.animating) return;
                this.headers.children(".header").last().trigger("click");
            },
            goToItemByName:function(header){
                if(this.animating) return;
                this.headers.children(":contains("+header+")").first().trigger("click");
            },
            goToItemByIndex:function(index){
                if(this.animating) return;
                this.headers.children().eq(index).trigger("click");
            },
            initialize : function () {
                var pivot = this;
                // define sections

                var headers = pivot.headersTemplate();
                var items = pivot.itemsTemplate();

                pivot.itemSelector(pivot).each(function (index, el) {
                    el = $(el);

                    var h3Element = pivot.headerSelector(el);
                    if (h3Element.length == 0) return;

                    var headerItem = pivot.headerItemTemplate().html(h3Element.html()).fadeTo(0, pivot.headerOpacity);
                    var pivotItem = pivot.pivotItemTemplate().append(el).hide();

                    if (index == 0) {
                        headerItem.addClass("current").fadeTo(0, 1);
                        pivotItem.addClass("current").show();
                    }
                    headerItem.attr("index", index);
                    headerItem.click(function() { pivot.pivotHeader_Click($(this)); });

                    headers.append(headerItem);
                    items.append(pivotItem);

                    h3Element.remove();
                });

                pivot.append(headers).append(items);
                pivot.headers = headers;
                pivot.items = items;

                this.data("controller", pivot);

                if(this.controlInitialized != undefined)
                {
                    this.controlInitialized();
                }
            },
            setCurrentHeader: function(header){
                var pivot = this;

                // make current header a normal one
                this.headers.children(".header.current").removeClass("current").fadeTo(0, this.headerOpacity);

                // make selected header to current
                header.addClass("current").fadeTo(0, 1);

                if(pivot.fixedHeaders == false)
                {
                    // create a copy for fadeout navigation
                    var copy = header.prevAll().clone();
                    // detach items to move to end of headers
                    var detached = $(header.prevAll().detach().toArray().reverse());

                    // copy animation items to beginning and animate them
                    $("<span />").append(copy).prependTo(pivot.headers).animate({ width: 0, opacity: 0 }, pivot.animationDuration, function () {
                        // when finished: delete animation objects
                        $(this).remove();

                        // and attach detached items to the end of headers
                        detached.fadeTo(0, 0).appendTo(pivot.headers).fadeTo(200, pivot.headerOpacity);
                    });
                }
            },
            setCurrentItem: function(item, index){
                var pivot = this;
                
                // hide current item immediately
                pivot.items.children(".pivotItem.current").hide().removeClass("current");

                // after a little delay
                setTimeout(function () {
                    // move the item to far right and make it visible
                    item.css({ marginLeft: item.outerWidth() }).show().addClass("current");

                    // animate it to left
                    item.animate( { marginLeft: 0 }, pivot.animationDuration, function() { pivot.currentItemChanged(index);});

                }, 200);                
            },
            currentItemChanged: function(index) {
                this.animating = false;
                if(this.selectedItemChanged != undefined)
                {
                    this.selectedItemChanged(index);
                }
            },
            pivotHeader_Click : function (me) {
                // ignore if already current
                if (me.is(".current")) return;

                // ignore if still animating
                if (this.animating) return;
                this.animating = true;

                // set current header
                this.setCurrentHeader(me);

                var index = me.attr("index");
                // find and set current item
                var item = this.items.children(".pivotItem:nth(" + index + ")");
                this.setCurrentItem(item, index);
            },
        });

        return this.initialize();
    };
})(jQuery);

/*
 * jQuery JSON Plugin
 * version: 2.3 (2011-09-17)
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 *
 * Brantley Harris wrote this plugin. It is based somewhat on the JSON.org
 * website's http://www.json.org/json2.js, which proclaims:
 * "NO WARRANTY EXPRESSED OR IMPLIED. USE AT YOUR OWN RISK.", a sentiment that
 * I uphold.
 *
 * It is also influenced heavily by MochiKit's serializeJSON, which is
 * copyrighted 2005 by Bob Ippolito.
 */

(function ($) {

	var	escapeable = /["\\\x00-\x1f\x7f-\x9f]/g,
		meta = {
			'\b': '\\b',
			'\t': '\\t',
			'\n': '\\n',
			'\f': '\\f',
			'\r': '\\r',
			'"' : '\\"',
			'\\': '\\\\'
		};

	/**
	 * jQuery.toJSON
	 * Converts the given argument into a JSON respresentation.
	 *
	 * @param o {Mixed} The json-serializble *thing* to be converted
	 *
	 * If an object has a toJSON prototype, that will be used to get the representation.
	 * Non-integer/string keys are skipped in the object, as are keys that point to a
	 * function.
	 *
	 */
	$.toJSON = typeof JSON === 'object' && JSON.stringify
		? JSON.stringify
		: function( o ) {

		if ( o === null ) {
			return 'null';
		}

		var type = typeof o;

		if ( type === 'undefined' ) {
			return undefined;
		}
		if ( type === 'number' || type === 'boolean' ) {
			return '' + o;
		}
		if ( type === 'string') {
			return $.quoteString( o );
		}
		if ( type === 'object' ) {
			if ( typeof o.toJSON === 'function' ) {
				return $.toJSON( o.toJSON() );
			}
			if ( o.constructor === Date ) {
				var	month = o.getUTCMonth() + 1,
					day = o.getUTCDate(),
					year = o.getUTCFullYear(),
					hours = o.getUTCHours(),
					minutes = o.getUTCMinutes(),
					seconds = o.getUTCSeconds(),
					milli = o.getUTCMilliseconds();

				if ( month < 10 ) {
					month = '0' + month;
				}
				if ( day < 10 ) {
					day = '0' + day;
				}
				if ( hours < 10 ) {
					hours = '0' + hours;
				}
				if ( minutes < 10 ) {
					minutes = '0' + minutes;
				}
				if ( seconds < 10 ) {
					seconds = '0' + seconds;
				}
				if ( milli < 100 ) {
					milli = '0' + milli;
				}
				if ( milli < 10 ) {
					milli = '0' + milli;
				}
				return '"' + year + '-' + month + '-' + day + 'T' +
					hours + ':' + minutes + ':' + seconds +
					'.' + milli + 'Z"';
			}
			if ( o.constructor === Array ) {
				var ret = [];
				for ( var i = 0; i < o.length; i++ ) {
					ret.push( $.toJSON( o[i] ) || 'null' );
				}
				return '[' + ret.join(',') + ']';
			}
			var	name,
				val,
				pairs = [];
			for ( var k in o ) {
				type = typeof k;
				if ( type === 'number' ) {
					name = '"' + k + '"';
				} else if (type === 'string') {
					name = $.quoteString(k);
				} else {
					// Keys must be numerical or string. Skip others
					continue;
				}
				type = typeof o[k];

				if ( type === 'function' || type === 'undefined' ) {
					// Invalid values like these return undefined
					// from toJSON, however those object members
					// shouldn't be included in the JSON string at all.
					continue;
				}
				val = $.toJSON( o[k] );
				pairs.push( name + ':' + val );
			}
			return '{' + pairs.join( ',' ) + '}';
		}
	};

	/**
	 * jQuery.evalJSON
	 * Evaluates a given piece of json source.
	 *
	 * @param src {String}
	 */
	$.evalJSON = typeof JSON === 'object' && JSON.parse
		? JSON.parse
		: function( src ) {
		return (new Function('return ' + src))();
	};

	/**
	 * jQuery.secureEvalJSON
	 * Evals JSON in a way that is *more* secure.
	 *
	 * @param src {String}
	 */
	$.secureEvalJSON = typeof JSON === 'object' && JSON.parse
		? JSON.parse
		: function( src ) {

		var filtered = 
			src
			.replace( /\\["\\\/bfnrtu]/g, '@' )
			.replace( /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']')
			.replace( /(?:^|:|,)(?:\s*\[)+/g, '');

		if ( /^[\],:{}\s]*$/.test( filtered ) ) {
			return (new Function('return ' + src))();
		} else {
			throw new SyntaxError( 'Error parsing JSON, source is not valid.' );
		}
	};

	/**
	 * jQuery.quoteString
	 * Returns a string-repr of a string, escaping quotes intelligently.
	 * Mostly a support function for toJSON.
	 * Examples:
	 * >>> jQuery.quoteString('apple')
	 * "apple"
	 *
	 * >>> jQuery.quoteString('"Where are we going?", she asked.')
	 * "\"Where are we going?\", she asked."
	 */
	$.quoteString = function( string ) {
		if ( string.match( escapeable ) ) {
			return '"' + string.replace( escapeable, function( a ) {
				var c = meta[a];
				if ( typeof c === 'string' ) {
					return c;
				}
				c = a.charCodeAt();
				return '\\u00' + Math.floor(c / 16).toString(16) + (c % 16).toString(16);
			}) + '"';
		}
		return '"' + string + '"';
	};

})( jQuery );

/*
 * ----------------------------- JSTORAGE -------------------------------------
 * Simple local storage wrapper to save data on the browser side, supporting
 * all major browsers - IE6+, Firefox2+, Safari4+, Chrome4+ and Opera 10.5+
 *
 * Copyright (c) 2010 Andris Reinman, andris.reinman@gmail.com
 * Project homepage: www.jstorage.info
 *
 * Licensed under MIT-style license:
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/*
 * $.jStorage
 *
 * USAGE:
 *
 * jStorage requires Prototype, MooTools or jQuery! If jQuery is used, then
 * jQuery-JSON (http://code.google.com/p/jquery-json/) is also needed.
 * (jQuery-JSON needs to be loaded BEFORE jStorage!)
 *
 * Methods:
 *
 * -set(key, value)
 * $.jStorage.set(key, value) -> saves a value
 *
 * -get(key[, default])
 * value = $.jStorage.get(key [, default]) ->
 *    retrieves value if key exists, or default if it doesn't
 *
 * -deleteKey(key)
 * $.jStorage.deleteKey(key) -> removes a key from the storage
 *
 * -flush()
 * $.jStorage.flush() -> clears the cache
 *
 * -storageObj()
 * $.jStorage.storageObj() -> returns a read-ony copy of the actual storage
 *
 * -storageSize()
 * $.jStorage.storageSize() -> returns the size of the storage in bytes
 *
 * -index()
 * $.jStorage.index() -> returns the used keys as an array
 *
 * -storageAvailable()
 * $.jStorage.storageAvailable() -> returns true if storage is available
 *
 * -reInit()
 * $.jStorage.reInit() -> reloads the data from browser storage
 *
 * <value> can be any JSON-able value, including objects and arrays.
 *
 */

(function($){
    if(!$ || !($.toJSON || Object.toJSON || window.JSON)){
        throw new Error("jQuery, MooTools or Prototype needs to be loaded before jStorage!");
    }

    var
        /* This is the object, that holds the cached values */
        _storage = {},

        /* Actual browser storage (localStorage or globalStorage['domain']) */
        _storage_service = {jStorage:"{}"},

        /* DOM element for older IE versions, holds userData behavior */
        _storage_elm = null,

        /* How much space does the storage take */
        _storage_size = 0,

        /* function to encode objects to JSON strings */
        json_encode = $.toJSON || Object.toJSON || (window.JSON && (JSON.encode || JSON.stringify)),

        /* function to decode objects from JSON strings */
        json_decode = $.evalJSON || (window.JSON && (JSON.decode || JSON.parse)) || function(str){
            return String(str).evalJSON();
        },

        /* which backend is currently used */
        _backend = false,

        /* Next check for TTL */
        _ttl_timeout,

        /**
         * XML encoding and decoding as XML nodes can't be JSON'ized
         * XML nodes are encoded and decoded if the node is the value to be saved
         * but not if it's as a property of another object
         * Eg. -
         *   $.jStorage.set("key", xmlNode);        // IS OK
         *   $.jStorage.set("key", {xml: xmlNode}); // NOT OK
         */
        _XMLService = {

            /**
             * Validates a XML node to be XML
             * based on jQuery.isXML function
             */
            isXML: function(elm){
                var documentElement = (elm ? elm.ownerDocument || elm : 0).documentElement;
                return documentElement ? documentElement.nodeName !== "HTML" : false;
            },

            /**
             * Encodes a XML node to string
             * based on http://www.mercurytide.co.uk/news/article/issues-when-working-ajax/
             */
            encode: function(xmlNode) {
                if(!this.isXML(xmlNode)){
                    return false;
                }
                try{ // Mozilla, Webkit, Opera
                    return new XMLSerializer().serializeToString(xmlNode);
                }catch(E1) {
                    try {  // IE
                        return xmlNode.xml;
                    }catch(E2){}
                }
                return false;
            },

            /**
             * Decodes a XML node from string
             * loosely based on http://outwestmedia.com/jquery-plugins/xmldom/
             */
            decode: function(xmlString){
                var dom_parser = ("DOMParser" in window && (new DOMParser()).parseFromString) ||
                        (window.ActiveXObject && function(_xmlString) {
                    var xml_doc = new ActiveXObject('Microsoft.XMLDOM');
                    xml_doc.async = 'false';
                    xml_doc.loadXML(_xmlString);
                    return xml_doc;
                }),
                resultXML;
                if(!dom_parser){
                    return false;
                }
                resultXML = dom_parser.call("DOMParser" in window && (new DOMParser()) || window, xmlString, 'text/xml');
                return this.isXML(resultXML)?resultXML:false;
            }
        };

    ////////////////////////// PRIVATE METHODS ////////////////////////

    /**
     * Initialization function. Detects if the browser supports DOM Storage
     * or userData behavior and behaves accordingly.
     * @returns undefined
     */
    function _init(){
        /* Check if browser supports localStorage */
        var localStorageReallyWorks = false;
        if("localStorage" in window){
            try {
                window.localStorage.setItem('_tmptest', 'tmpval');
                localStorageReallyWorks = true;
                window.localStorage.removeItem('_tmptest');
            } catch(BogusQuotaExceededErrorOnIos5) {
                // Thanks be to iOS5 Private Browsing mode which throws
                // QUOTA_EXCEEDED_ERRROR DOM Exception 22.
            }
        }
        if(localStorageReallyWorks){
            try {
                if(window.localStorage) {
                    _storage_service = window.localStorage;
                    _backend = "localStorage";
                }
            } catch(E3) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports globalStorage */
        else if("globalStorage" in window){
            try {
                if(window.globalStorage) {
                    _storage_service = window.globalStorage[window.location.hostname];
                    _backend = "globalStorage";
                }
            } catch(E4) {/* Firefox fails when touching localStorage and cookies are disabled */}
        }
        /* Check if browser supports userData behavior */
        else {
            _storage_elm = document.createElement('link');
            if(_storage_elm.addBehavior){

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                var data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }else{
                _storage_elm = null;
                return;
            }
        }

        _load_storage();

        // remove dead keys
        _handleTTL();
    }

    /**
     * Loads the data from the storage based on the supported mechanism
     * @returns undefined
     */
    function _load_storage(){
        /* if jStorage string is retrieved, then decode it */
        if(_storage_service.jStorage){
            try{
                _storage = json_decode(String(_storage_service.jStorage));
            }catch(E6){_storage_service.jStorage = "{}";}
        }else{
            _storage_service.jStorage = "{}";
        }
        _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;
    }

    /**
     * This functions provides the "save" mechanism to store the jStorage object
     * @returns undefined
     */
    function _save(){
        try{
            _storage_service.jStorage = json_encode(_storage);
            // If userData is used as the storage engine, additional
            if(_storage_elm) {
                _storage_elm.setAttribute("jStorage",_storage_service.jStorage);
                _storage_elm.save("jStorage");
            }
            _storage_size = _storage_service.jStorage?String(_storage_service.jStorage).length:0;
        }catch(E7){/* probably cache is full, nothing is saved this way*/}
    }

    /**
     * Function checks if a key is set and is string or numberic
     */
    function _checkKey(key){
        if(!key || (typeof key != "string" && typeof key != "number")){
            throw new TypeError('Key name must be string or numeric');
        }
        if(key == "__jstorage_meta"){
            throw new TypeError('Reserved key name');
        }
        return true;
    }

    /**
     * Removes expired keys
     */
    function _handleTTL(){
        var curtime, i, TTL, nextExpire = Infinity, changed = false;

        clearTimeout(_ttl_timeout);

        if(!_storage.__jstorage_meta || typeof _storage.__jstorage_meta.TTL != "object"){
            // nothing to do here
            return;
        }

        curtime = +new Date();
        TTL = _storage.__jstorage_meta.TTL;
        for(i in TTL){
            if(TTL.hasOwnProperty(i)){
                if(TTL[i] <= curtime){
                    delete TTL[i];
                    delete _storage[i];
                    changed = true;
                }else if(TTL[i] < nextExpire){
                    nextExpire = TTL[i];
                }
            }
        }

        // set next check
        if(nextExpire != Infinity){
            _ttl_timeout = setTimeout(_handleTTL, nextExpire - curtime);
        }

        // save changes
        if(changed){
            _save();
        }
    }

    ////////////////////////// PUBLIC INTERFACE /////////////////////////

    $.jStorage = {
        /* Version number */
        version: "0.1.6.1",

        /**
         * Sets a key's value.
         *
         * @param {String} key - Key to set. If this value is not set or not
         *              a string an exception is raised.
         * @param value - Value to set. This can be any value that is JSON
         *              compatible (Numbers, Strings, Objects etc.).
         * @returns the used value
         */
        set: function(key, value){
            _checkKey(key);
            if(_XMLService.isXML(value)){
                value = {_is_xml:true,xml:_XMLService.encode(value)};
            }else if(typeof value == "function"){
                value = null; // functions can't be saved!
            }else if(value && typeof value == "object"){
                // clone the object before saving to _storage tree
                value = json_decode(json_encode(value));
            }
            _storage[key] = value;
            _save();
            return value;
        },

        /**
         * Looks up a key in cache
         *
         * @param {String} key - Key to look up.
         * @param {mixed} def - Default value to return, if key didn't exist.
         * @returns the key value, default value or <null>
         */
        get: function(key, def){
            _checkKey(key);
            if(key in _storage){
                if(_storage[key] && typeof _storage[key] == "object" &&
                        _storage[key]._is_xml &&
                            _storage[key]._is_xml){
                    return _XMLService.decode(_storage[key].xml);
                }else{
                    return _storage[key];
                }
            }
            return typeof(def) == 'undefined' ? null : def;
        },

        /**
         * Deletes a key from cache.
         *
         * @param {String} key - Key to delete.
         * @returns true if key existed or false if it didn't
         */
        deleteKey: function(key){
            _checkKey(key);
            if(key in _storage){
                delete _storage[key];
                // remove from TTL list
                if(_storage.__jstorage_meta &&
                  typeof _storage.__jstorage_meta.TTL == "object" &&
                  key in _storage.__jstorage_meta.TTL){
                    delete _storage.__jstorage_meta.TTL[key];
                }
                _save();
                return true;
            }
            return false;
        },

        /**
         * Sets a TTL for a key, or remove it if ttl value is 0 or below
         *
         * @param {String} key - key to set the TTL for
         * @param {Number} ttl - TTL timeout in milliseconds
         * @returns true if key existed or false if it didn't
         */
        setTTL: function(key, ttl){
            var curtime = +new Date();
            _checkKey(key);
            ttl = Number(ttl) || 0;
            if(key in _storage){

                if(!_storage.__jstorage_meta){
                    _storage.__jstorage_meta = {};
                }
                if(!_storage.__jstorage_meta.TTL){
                    _storage.__jstorage_meta.TTL = {};
                }

                // Set TTL value for the key
                if(ttl>0){
                    _storage.__jstorage_meta.TTL[key] = curtime + ttl;
                }else{
                    delete _storage.__jstorage_meta.TTL[key];
                }

                _save();

                _handleTTL();
                return true;
            }
            return false;
        },

        /**
         * Deletes everything in cache.
         *
         * @return true
         */
        flush: function(){
            _storage = {};
            _save();
            return true;
        },

        /**
         * Returns a read-only copy of _storage
         *
         * @returns Object
        */
        storageObj: function(){
            function F() {}
            F.prototype = _storage;
            return new F();
        },

        /**
         * Returns an index of all used keys as an array
         * ['key1', 'key2',..'keyN']
         *
         * @returns Array
        */
        index: function(){
            var index = [], i;
            for(i in _storage){
                if(_storage.hasOwnProperty(i) && i != "__jstorage_meta"){
                    index.push(i);
                }
            }
            return index;
        },

        /**
         * How much space in bytes does the storage take?
         *
         * @returns Number
         */
        storageSize: function(){
            return _storage_size;
        },

        /**
         * Which backend is currently in use?
         *
         * @returns String
         */
        currentBackend: function(){
            return _backend;
        },

        /**
         * Test if storage is available
         *
         * @returns Boolean
         */
        storageAvailable: function(){
            return !!_backend;
        },

        /**
         * Reloads the data from browser storage
         *
         * @returns undefined
         */
        reInit: function(){
            var new_storage_elm, data;
            if(_storage_elm && _storage_elm.addBehavior){
                new_storage_elm = document.createElement('link');

                _storage_elm.parentNode.replaceChild(new_storage_elm, _storage_elm);
                _storage_elm = new_storage_elm;

                /* Use a DOM element to act as userData storage */
                _storage_elm.style.behavior = 'url(#default#userData)';

                /* userData element needs to be inserted into the DOM! */
                document.getElementsByTagName('head')[0].appendChild(_storage_elm);

                _storage_elm.load("jStorage");
                data = "{}";
                try{
                    data = _storage_elm.getAttribute("jStorage");
                }catch(E5){}
                _storage_service.jStorage = data;
                _backend = "userDataBehavior";
            }

            _load_storage();
        }
    };

    // Initialize jStorage
    _init();

})(window.jQuery || window.$);

/*
 * bubbletip
 *
 *	Copyright (c) 2009-2010, UhLeeKa.
 *	Version: 1.0.6
 *	Licensed under the GNU Lesser General Public License:
 *		http://www.gnu.org/licenses/lgpl-3.0.html
 *	Author Website: 
 *		http://www.uhleeka.com
 *	Project Hosting on Google Code: 
 *		http://code.google.com/p/bubbletip/
 */

(function ($) {
	var bindIndex = 0;
	$.fn.extend({
		open: function () {
			$(this).trigger('open.bubbletip');
		},
		close: function () {
			$(this).trigger('close.bubbletip');
		},
		bubbletip: function (tip, options) {
			$(this).data('tip', $(tip).get(0).id);
			
			// check to see if the tip is a descendant of 
			// a table.bubbletip element and therefore
			// has already been instantiated as a bubbletip
			if ($('table.bubbletip #' + $(tip).get(0).id).length > 0) {
				return this;
			}
			var _this, _tip, _options, _calc, _timeoutAnimate, _timeoutRefresh, _isActive, _isHiding, _wrapper, _bindIndex;
			// hack for IE6,IE7
			var _windowWidth, _windowHeight;

			_this = $(this);
			_tip = $(tip);
			_bindIndex = bindIndex++;  // for window.resize namespace binding
			_options = {
				id: '',
				position: 'absolute', // absolute | fixed
				fixedHorizontal: 'right', // left | right
				fixedVertical: 'bottom', // top | bottom
				positionAt: 'element', // element | body | mouse
				positionAtElement: _this,
				offsetTop: 0,
				offsetLeft: 0,
				deltaPosition: 30,
				deltaDirection: 'up', // direction: up | down | left | right
				animationDuration: 250,
				animationEasing: 'swing', // linear | swing
				delayShow: 0,
				delayHide: 500,
				calculateOnShow: false
			};
			if (options) {
				_options = $.extend(_options, options);
			}
			// calculated values
			_calc = {
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				delta: 0,
				mouseTop: 0,
				mouseLeft: 0,
				tipHeight: 0
			};
			_timeoutAnimate = null;
			_timeoutRefresh = null;
			_isActive = false;
			_isHiding = false;

			// store the tip id for removeBubbletip
			if (!_this.data('bubbletip_tips')) {
				_this.data('bubbletip_tips', [[_tip.get(0).id, _bindIndex]]);
			} else {
				_this.data('bubbletip_tips', $.merge(_this.data('bubbletip_tips'), [[_tip.get(0).id, _bindIndex]]));
			}


			// validate _options
			if (!_options.fixedVertical.match(/^top|bottom$/i)) {
				_options.positionAt = 'top';
			}
			if (!_options.fixedHorizontal.match(/^left|right$/i)) {
				_options.positionAt = 'left';
			}
			if (!_options.positionAt.match(/^element|body|mouse$/i)) {
				_options.positionAt = 'element';
			}
			if (!_options.deltaDirection.match(/^up|down|left|right$/i)) {
				_options.deltaDirection = 'up';
			}
			if (_options.id.length > 0) {
				_options.id = ' id="' + _options.id + '"';
			}

			// create the wrapper table element
			if (_options.deltaDirection.match(/^up$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td><table class="bt-bottom" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-bottomright"></td></tr></tbody></table>');
			} else if (_options.deltaDirection.match(/^down$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td><table class="bt-top" cellspacing="0" cellpadding="0"><tr><th></th><td><div></div></td><th></th></tr></table></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>');
			} else if (_options.deltaDirection.match(/^left$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left"></td><td class="bt-content"></td><td class="bt-right-tail"><div class="bt-right"></div><div class="bt-right-tail"></div><div class="bt-right"></div></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>');
			} else if (_options.deltaDirection.match(/^right$/i)) {
				_wrapper = $('<table' + _options.id + ' class="bubbletip" cellspacing="0" cellpadding="0"><tbody><tr><td class="bt-topleft"></td><td class="bt-top"></td><td class="bt-topright"></td></tr><tr><td class="bt-left-tail"><div class="bt-left"></div><div class="bt-left-tail"></div><div class="bt-left"></div></td><td class="bt-content"></td><td class="bt-right"></td></tr><tr><td class="bt-bottomleft"></td><td class="bt-bottom"></td><td class="bt-bottomright"></td></tr></tbody></table>');
			}

			// append the wrapper to the document body
			_wrapper.appendTo('body');

			// apply IE filters to _wrapper elements
			if ((/msie/.test(navigator.userAgent.toLowerCase())) && (!/opera/.test(navigator.userAgent.toLowerCase()))) {
				$('*', _wrapper).each(function () {
					var image = $(this).css('background-image');
					if (image.match(/^url\(["']?(.*\.png)["']?\)$/i)) {
						image = RegExp.$1;
						$(this).css({
							'backgroundImage': 'none',
							'filter': 'progid:DXImageTransform.Microsoft.AlphaImageLoader(enabled=true, sizingMethod=' + ($(this).css('backgroundRepeat') == 'no-repeat' ? 'crop' : 'scale') + ', src=\'' + image + '\')'
						}).each(function () {
							var position = $(this).css('position');
							if (position != 'absolute' && position != 'relative')
								$(this).css('position', 'relative');
						});
					}
				});
			}
			// move the tip element into the content section of the wrapper
			$('.bt-content', _wrapper).append(_tip);
			// show the tip (in case it is hidden) so that we can calculate its dimensions
			_tip.show();
			// handle left|right delta
			if (_options.deltaDirection.match(/^left|right$/i)) {
				// tail is 40px, so divide height by two and subtract 20px;
				_calc.tipHeight = parseInt(_tip.height() / 2, 10);
				// handle odd integer height
				if ((_tip.height() % 2) == 1) {
					_calc.tipHeight++;
				}
				_calc.tipHeight = (_calc.tipHeight < 20) ? 1 : _calc.tipHeight - 20;
				if (_options.deltaDirection.match(/^left$/i)) {
					$('div.bt-right', _wrapper).css('height', _calc.tipHeight + 'px');
				} else {
					$('div.bt-left', _wrapper).css('height', _calc.tipHeight + 'px');
				}
			}
			// set the opacity of the wrapper to 0
			_wrapper.css('opacity', 0);
			// hack for FF 3.6
			_wrapper.css({ 'width': _wrapper.width(), 'height': _wrapper.height() });
			// execute initial calculations
			_Calculate();
			_wrapper.hide();

			// handle window.resize
			$(window).bind('resize.bubbletip' + _bindIndex, function () {
				var w = $(window).width();
				var h = $(window).height();

				if (_options.position.match(/^fixed$/i) || ((w === _windowWidth) && (h === _windowHeight))) {
					return;
				}
				_windowWidth = w;
				_windowHeight = h;

				if (_timeoutRefresh) {
					clearTimeout(_timeoutRefresh);
				}
				_timeoutRefresh = setTimeout(function () {
					_Calculate();
				}, 250);
			});
			$([_wrapper.get(0), this.get(0)]).bind('open.bubbletip', function () {
				_isActive = false;
				if (_timeoutAnimate) {
					clearTimeout(_timeoutAnimate);
				}
				if (_options.delayShow === 0) {
					_Show();
				} else {
					_timeoutAnimate = setTimeout(function () {
						_Show();
					}, _options.delayShow);
				}
				return false;
			});
			
			$([_wrapper.get(0), this.get(0)]).bind('close.bubbletip', function () {
				if (_timeoutAnimate) {
					clearTimeout(_timeoutAnimate);
				}
				if (_options.delayHide === 0) {
					_Hide();
				} else {
					_timeoutAnimate = setTimeout(function () {
						_Hide();
					}, _options.delayHide);
				}
				return false;
			});
			
			
			function _Show() {
				var animation;

				if (_isActive) { // the tip is currently showing; do nothing
					return;
				}
				_isActive = true;
				if (_isHiding) { // the tip is currently hiding; interrupt and start showing again
					_wrapper.stop(true, false);
				}

				if (_options.calculateOnShow) {
					_Calculate();
				}
				if (_options.position.match(/^fixed$/i)) {
					animation = {};
					if (_options.deltaDirection.match(/^up|down$/i)) {
						if (_options.fixedVertical.match(/^top$/i)) {
							if (!_isHiding) {
								_wrapper.css('top', parseInt(_calc.top - _calc.delta, 10) + 'px');
							}
							animation.top = parseInt(_calc.top, 10) + 'px';
						} else {
							if (!_isHiding) {
								_wrapper.css('bottom', parseInt(_calc.bottom + _calc.delta, 10) + 'px');
							}
							animation.bottom = parseInt(_calc.bottom, 10) + 'px';
						}
					} else {
						if (_options.fixedHorizontal.match(/^right$/i)) {
							if (!_isHiding) {
								if (_options.fixedVertical.match(/^top$/i)) {
									_wrapper.css({ 'top': parseInt(_calc.top, 10) + 'px', 'right': parseInt(_calc.right - _calc.delta, 10) + 'px' });
								} else {
									_wrapper.css({ 'bottom': parseInt(_calc.bottom, 10) + 'px', 'right': parseInt(_calc.right - _calc.delta, 10) + 'px' });
								}
							}
							animation.right = parseInt(_calc.right, 10) + 'px';
						} else {
							if (!_isHiding) {
								if (_options.fixedVertical.match(/^top$/i)) {
									_wrapper.css({ 'top': parseInt(_calc.top, 10) + 'px', 'left': parseInt(_calc.left + _calc.delta, 10) + 'px' });
								} else {
									_wrapper.css({ 'bottom': parseInt(_calc.bottom, 10) + 'px', 'left': parseInt(_calc.left + _calc.delta, 10) + 'px' });
								}
							}
							animation.left = parseInt(_calc.left, 10) + 'px';
						}
					}
				} else {
					if (_options.positionAt.match(/^element|body$/i)) {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							if (!_isHiding) {
								_wrapper.css('top', parseInt(_calc.top - _calc.delta, 10) + 'px');
							}
							animation = { 'top': _calc.top + 'px' };
						} else {
							if (!_isHiding) {
								_wrapper.css('left', parseInt(_calc.left - _calc.delta, 10) + 'px');
							}
							animation = { 'left': _calc.left + 'px' };
						}
					} else {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							if (!_isHiding) {
								_calc.mouseTop = e.pageY + _calc.top;
								_wrapper.css({ 'top': parseInt(_calc.mouseTop + _calc.delta, 10) + 'px', 'left': parseInt(e.pageX - (_wrapper.width() / 2), 10) + 'px' });
							}
							animation = { 'top': _calc.mouseTop + 'px' };
						} else {
							if (!_isHiding) {
								_calc.mouseLeft = e.pageX + _calc.left;
								_wrapper.css({ 'left': parseInt(_calc.mouseLeft + _calc.delta, 10) + 'px', 'top': parseInt(e.pageY - (_wrapper.height() / 2), 10) + 'px' });
							}
							animation = { 'left': _calc.left + 'px' };
						}
					}
				}
				_isHiding = false;
				_wrapper.show();
				animation = $.extend(animation, { 'opacity': 1 });
				_wrapper.animate(animation, _options.animationDuration, _options.animationEasing, function () {
					if (_options.position.match(/^fixed$/i)) {
						_wrapper.css({
							'opacity': '',
							'position': 'fixed',
							'top': _calc.top,
							'left': _calc.left
						});
					} else {
						_wrapper.css('opacity', '');
					}
					_isActive = true;
				});
			}
			function _Hide() {
				var animation;

				_isActive = false;
				_isHiding = true;
				if (_options.position.match(/^fixed$/i)) {
					animation = {};
					if (_options.deltaDirection.match(/^up|down$/i))  {
						if (_calc.bottom !== '') { animation.bottom = parseInt(_calc.bottom + _calc.delta, 10) + 'px'; }
						if (_calc.top !== '') { animation.top = parseInt(_calc.top - _calc.delta, 10) + 'px'; }
					} else {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							if (_calc.right !== '') { animation.right = parseInt(_calc.right + _calc.delta, 10) + 'px'; }
							if (_calc.left !== '') { animation.left = parseInt(_calc.left + _calc.delta, 10) + 'px'; }
						} else {
							if (_calc.right !== '') { animation.right = parseInt(_calc.right - _calc.delta, 10) + 'px'; }
							if (_calc.left !== '') { animation.left = parseInt(_calc.left - _calc.delta, 10) + 'px'; }
						}
					}
				} else {
					if (_options.positionAt.match(/^element|body$/i)) {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							animation = { 'top': parseInt(_calc.top - _calc.delta, 10) + 'px' };
						} else {
							animation = { 'left': parseInt(_calc.left - _calc.delta, 10) + 'px' };
						}
					} else {
						if (_options.deltaDirection.match(/^up|down$/i)) {
							animation = { 'top': parseInt(_calc.mouseTop - _calc.delta, 10) + 'px' };
						} else {
							animation = { 'left': parseInt(_calc.mouseLeft - _calc.delta, 10) + 'px' };
						}
					}
				}
				animation = $.extend(animation, {
					'opacity': 0
				});
				_wrapper.animate(animation, _options.animationDuration, _options.animationEasing, function () {
					_wrapper.hide();
					_isHiding = false;
				});
			}
			function _Calculate() {
				var offset;
				// calculate values
				if (_options.position.match(/^fixed$/i)) {
					offset = _options.positionAtElement.offset();
					if (_options.fixedHorizontal.match(/^left$/i)) {
						_calc.left = offset.left + (_options.positionAtElement.outerWidth() / 2);
					} else {
						_calc.left = '';
					}
					if (_options.fixedHorizontal.match(/^right$/i)) {
						_calc.right = ($(window).width() - offset.left) - ((_options.positionAtElement.outerWidth() + _wrapper.outerWidth()) / 2);
					} else {
						_calc.right = '';
					}
					if (_options.fixedVertical.match(/^top$/i)) {
						_calc.top = offset.top - $(window).scrollTop() - _wrapper.outerHeight();
					} else {
						_calc.top = '';
					}
					if (_options.fixedVertical.match(/^bottom$/i)) {
						_calc.bottom = $(window).scrollTop() + $(window).height() - offset.top + _options.offsetTop;
					} else {
						_calc.bottom = '';
					}
					if (_options.deltaDirection.match(/^left|right$/i)) {
						if (_options.fixedVertical.match(/^top$/i)) {
							_calc.top = _calc.top + (_wrapper.outerHeight() / 2) + (_options.positionAtElement.outerHeight() / 2);
						} else {
							_calc.bottom = _calc.bottom - (_wrapper.outerHeight() / 2) - (_options.positionAtElement.outerHeight() / 2);
						}
					}
					if (_options.deltaDirection.match(/^left$/i)) {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left - _wrapper.outerWidth();
						} else {
							_calc.right = _calc.right + (_wrapper.outerWidth() / 2);
						}
					} else if (_options.deltaDirection.match(/^right$/i)) {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left;
						} else {
							_calc.right = _calc.right - (_wrapper.outerWidth() / 2);
						}
					} else if (_options.deltaDirection.match(/^down$/i)) {
						if (_options.fixedVertical.match(/^top$/i)) {
							_calc.top = _calc.top + _wrapper.outerHeight() + _options.positionAtElement.outerHeight();
						} else {
							_calc.bottom = _calc.bottom - _wrapper.outerHeight() - _options.positionAtElement.outerHeight();
						}
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left - (_wrapper.outerWidth() / 2);
						}
					} else {
						if (_options.fixedHorizontal.match(/^left$/i)) {
							_calc.left = _calc.left - (_wrapper.outerWidth() / 2);
						}
					}
					if (_options.deltaDirection.match(/^up|right$/i) && _options.fixedHorizontal.match(/^left|right$/i)) {
						_calc.delta = _options.deltaPosition;
					} else {
						_calc.delta = -_options.deltaPosition;
					}
				} else if (_options.positionAt.match(/^element$/i)) {
					offset = _options.positionAtElement.offset();
					if (_options.deltaDirection.match(/^up$/i)) {
						_calc.top = offset.top + _options.offsetTop - _wrapper.outerHeight();
						_calc.left = offset.left + _options.offsetLeft + ((_options.positionAtElement.outerWidth() - _wrapper.outerWidth()) / 2);
						_calc.delta = _options.deltaPosition;
					} else if (_options.deltaDirection.match(/^down$/i)) {
						_calc.top = offset.top + _options.positionAtElement.outerHeight() + _options.offsetTop;
						_calc.left = offset.left + _options.offsetLeft + ((_options.positionAtElement.outerWidth() - _wrapper.outerWidth()) / 2);
						_calc.delta = -_options.deltaPosition;
					} else if (_options.deltaDirection.match(/^left$/i)) {
						_calc.top = offset.top + _options.offsetTop + ((_options.positionAtElement.outerHeight() - _wrapper.outerHeight()) / 2);
						_calc.left = offset.left + _options.offsetLeft - _wrapper.outerWidth();
						_calc.delta = _options.deltaPosition;
					} else if (_options.deltaDirection.match(/^right$/i)) {
						_calc.top = offset.top + _options.offsetTop + ((_options.positionAtElement.outerHeight() - _wrapper.outerHeight()) / 2);
						_calc.left = offset.left + _options.positionAtElement.outerWidth() + _options.offsetLeft;
						_calc.delta = -_options.deltaPosition;
					}
				} else if (_options.positionAt.match(/^body$/i)) {
					if (_options.deltaDirection.match(/^up|left$/i)) {
						_calc.top = _options.offsetTop;
						_calc.left = _options.offsetLeft;
						// up or left
						_calc.delta = _options.deltaPosition;
					} else {
						if (_options.deltaDirection.match(/^down$/i)) {
							_calc.top = parseInt(_options.offsetTop + _wrapper.outerHeight(), 10);
							_calc.left = _options.offsetLeft;
						} else {
							_calc.top = _options.offsetTop;
							_calc.left = parseInt(_options.offsetLeft + _wrapper.outerWidth(), 10);
						}
						// down or right
						_calc.delta = -_options.deltaPosition;
					}
				} else if (_options.positionAt.match(/^mouse$/i)) {
					if (_options.deltaDirection.match(/^up|left$/i)) {
						if (_options.deltaDirection.match(/^up$/i)) {
							_calc.top = -(_options.offsetTop + _wrapper.outerHeight());
							_calc.left = _options.offsetLeft;
						} else if (_options.deltaDirection.match(/^left$/i)) {
							_calc.top = _options.offsetTop;
							_calc.left = -(_options.offsetLeft + _wrapper.outerWidth());
						}
						// up or left
						_calc.delta = _options.deltaPosition;
					} else {
						_calc.top = _options.offsetTop;
						_calc.left = _options.offsetLeft;
						// down or right
						_calc.delta = -_options.deltaPosition;
					}
				}

				// handle the wrapper (element|body) positioning
				if (_options.position.match(/^fixed$/i)) {
					if (_options.positionAt.match(/^element|body$/i)) {
						_wrapper.css({
							'position': 'fixed',
							'left': _calc.left,
							'top': _calc.top,
							'right': _calc.right + 'px',
							'bottom': _calc.bottom + 'px'
						});
					}
				} else {
					if (_options.positionAt.match(/^element|body$/i)) {
						_wrapper.css({
							'position': 'absolute',
							'top': _calc.top + 'px',
							'left': _calc.left + 'px'
						});
					}
				}
			}
			return this;
		},
		removeBubbletip: function (tips) {
			var tipsActive;
			var tipsToRemove = [];
			var tipsActiveAdjusted = [];
			var arr, i, ix;
			var elem;

			tipsActive = $.makeArray($(this).data('bubbletip_tips'));

			// convert the parameter array of tip id's or elements to id's
			arr = $.makeArray(tips);
			for (i = 0; i < arr.length; i++) {
				tipsToRemove.push($(arr[i]).get(0).id);
			}

			for (i = 0; i < tipsActive.length; i++) {
				ix = null;
				if ((tipsToRemove.length === 0) || ((ix = $.inArray(tipsActive[i][0], tipsToRemove)) >= 0)) {
					// remove all tips if there are none specified
					// otherwise, remove only specified tips

					// find the surrounding table.bubbletip
					elem = $('#' + tipsActive[i][0]).get(0).parentNode;
					while (elem.tagName.toLowerCase() != 'table') {
						elem = elem.parentNode;
					}
					// attach the tip element to body and hide
					$('#' + tipsActive[i][0]).appendTo('body').hide();
					// remove the surrounding table.bubbletip
					$(elem).remove();

					// unbind show/hide events
					$(this).unbind('.bubbletip' + tipsActive[i][1]);

					// unbind window.resize event
					$(window).unbind('.bubbletip' + tipsActive[i][1]);
				} else {
					// tip is not being removed, so add it to the adjusted array
					tipsActiveAdjusted.push(tipsActive[i]);
				}
			}
			$(this).data('bubbletip_tips', tipsActiveAdjusted);

			return this;
		}
	});
})(jQuery);

/**
 * jquery.LavaLamp v1.3.5 - light up your menus with fluid, jQuery powered animations.
 *
 * Requires jQuery v1.2.3 or better from http://jquery.com
 * Tested on jQuery 1.4.4, 1.3.2 and 1.2.6
 *
 * http://nixbox.com/projects/jquery-lavalamp/
 *
 * Copyright (c) 2008, 2009, 2010 Jolyon Terwilliger, jolyon@nixbox.com
 * Source code Copyright (c) 2008, 2009, 2010
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * credits to Guillermo Rauch and Ganeshji Marwaha (gmarwaha.com) for previous editions
 *
 * Version: 1.0 - adapted for jQuery 1.2.x series
 * Version: 1.1 - added linum parameter
 * Version: 1.2 - modified to support vertical resizing of elements
 * Version: 1.3 - enhanced automatic <li> item hi-lighting - will attempt to
 *					lock onto li > a element with href closest to selected
 *					window.location
 *			 	- click always returns 'true' by default, for standard link follow through.
 *
 * Version: 1.3.1 - verified for use with jQuery 1.3 - should still work with 1.2.x series
 *				- changed linum parameter to startItem for clarity
 *				- improved slide-in accuracy for .back elements with borders
 *				- changed .current class to .selectedLava for clarity and improved
 *					support
 *				- appended 'Lava' to all internal class names to avoid conflicts
 *				- fixed bug applying selectedLava class to elements with matching
 *					location.hash
 *				- now supports jquery.compat plugin for cross-library support
 *				- performance improvements
 *				- added new options:
 *				autoReturn: true - if set to false, hover will not return to last selected
 *									item upon list mouseout.
 *				returnDelay: 0 - if set, will delay auto-return feature specified # of
 *									milliseconds.
 *				setOnClick: true - if set to false, hover will return to default element
 *									regardless of click event.
 *				homeLeft: 0, homeTop: 0 - if either set to non zero value, absolute
 *									positioned li element with class .homeLava is 
 *									prepended to list for homing feature.
 *				homeWidth: 0, homeHeight: 0 - if set, are used for creation of li.homeLava
 *									element.
 *				returnHome: false - if set along with homeLeft or homeTop, lavalamp hover
 *									will always return to li.home after click.
 *
 * Version: 1.3.2 - fixed: stray $ references inside the plugin to work with
 *					jQuery.noConflict() properly - thanks Colin.
 *
 * Version: 1.3.3 - fixed: added closure with null passed argument for move() command in
 * 					returnDelay to fix errors some were seeing - thanks to Michel and 
 *					Richard for noticing this.
 *
 *					fixed: changed mouseover/out events to mouseenter/leave to fix jerky
 *					animation problem when using excessive margins instead of padding.  
 *					Thanks to Thomas for the solution and Chris for demonstrating the problem.
 *					* requires jQuery 1.3 or better
 *
 *					enhanced: added 'noLava' class detection to prevent LavaLamp effect
 *					application to LI elements with this class. This feature allows you to
 *					create submenus - for details, see examples at
 *					http://nixboxdesigns.com/demos/jquery-lavalamp-demos.html
 *
 *					enhanced: modified to better automatically find default location for 
 *					relative links. Thanks to Harold for testing and finding this bug.
 *
 * Version: 1.3.4 - major overhaul on practically everything:
 *					enhanced: added autoResize option; see examples below.
 *					enhanced: better automatic default item selection and URI resolution,
 *					better support for returnHome and returnDelay, refined internal variable
 *					usage and test to be as lean as possible
 *					fixed: backLava hover element now exactly covers the destination LI dimensions.
 *					fixed: changed use of mouseleave/mouseenter to bind events so will work with
 *							jQuery 1.2.2 onward.
 *					fixed: proper closure on instance - should finally play nice with other libraries
 *					fixed: proper quotes around all object element labels.
 *					enhanced: behaves more like a plugin should and now automatically adds proper
 * 							position and display CSS tags to the backLava element and parent container
 *							if absent.
 *
 * Version: 1.3.5 - new options:
 * 						target: 'li' - plain element to target to receive hover events.
 *						container: '' - plain element to create for the hover .backLava and .homeLava
 *							elements. If left blank (default) same value as target option is used.
 *						includeMargins: false - set to true to expand the hover element dimensions to 
 *							include the margins of the target element.
 *				    changed: the backLava hover element now has all margins and padding manually set to 
 *							zero to allow proper resizing of hover when used with custom target, container  
 * 							and includeMargins options. While this workaround has no effect with the site
 *							demos, it potentially may affect your current implementation. If you do 
 *							experience problems try re-adjusting the CSS padding and margins for 
 *							your target elements.
 *
 *
 * Examples and usage:
 *
 * The HTML markup used to build the menu can be as simple as...
 *
 *       <ul class="lavaLamp">
 *           <li><a href="#">Phone Home</a></li>
 *           <li><a href="#">Make Contact</a></li>
 *           <li><a href="#">Board Ship</a></li>
 *           <li><a href="#">Fly to Venus</a></li>
 *       </ul>
 *
 * Additional Styles must be added to make the LavaLamp perform properly, to wit:
 *
 * <style>
 * ul.lavaLamp {
 *   padding:5px;  // use some minimal padding to account for sloppy mouse movements
 * }
 * ul.lavaLamp li.backLava {
 *   z-index:3;   // must be less than z-index of A tags within the LI elements
 * }
 * ul.lavaLamp li a {
 *  display:block;  // helps with positioning the link within the LI element
 *  z-index:10;     // or must be higher than li.backLava z-index
 * }
 * </style>
 *
 * Once you have included the basic styles above, you will need to include 
 * the jQuery library, easing plugin (optional) and the this LavaLamp plugin.
 *
 * jQuery Easing Library 1.3 available here:  http://plugins.jquery.com/project/Easing
 * 
 * Example LavaLamp initializing statement:
 * $(function() { $("ul.lavaLamp").lavaLamp({ fx: "easeOutBack", speed: 700}) });
 * finds all UL elements in the document with the class of 'lavaLamp' and attaches the 
 * LavaLamp plugin using an easing library fx of OutBack and an animate speed of 
 * 700 milliseconds or 7/10ths of a second.
 *
 *
 * List of Parameters
 *
 * @param target - default: 'li' 
 * valid selector for target elements to receive hover effect.
 *
 * Example:
 * jQuery("div#article").lavaLamp({ target:'p' });
 * assigns all p elements under div#article to receive lavaLamp hover events.
 *
 * @param container - default: '' (empty string) 
 * DOM element to create for the hover element. If container is empty, LavaLamp
 * will assume it is the same as the target option.
 *
 * Example:
 * jQuery("div#article").lavaLamp({ container:'p' });
 * creates a p element under div#article to act as the animated hover container, and optionally the
 * home container, if homing options are enabled
 * use in combination with 'target' option for best results (see above)
 *
 * @param fx - default: 'swing'
 * selects the easing formula for the animation - requires the jQuery Easing library 
 * to be loaded for additional effects
 * 
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ fx: "easeOutElastic" });
 * animates the backLava element using the OutElastic formula
 * 
 * @param speed - default: 500
 * sets animation speed in milliseconds
 * 
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ speed: 1000 });
 * sets the animation speed to one second.
 * 
 * @param click - default: function() { return true; }
 * Callback to be executed when the menu item is clicked. The 'event' object and source target
 * DOM element will be passed in as arguments so you can use them in your function.
 * 
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ click: function(event, menuItem) {
 *		alert(event+el);
 *		return false;
 * } });
 *
 * causes the browser to display an alert message of the variables passed and 
 * return false aborts any other click events on child items, including not 
 * following any links contained within the target
 *
 * @param startItem - default: 'no'
 * specifies the number target element as default, starting with 0 for the first element
 * Used to manually set the default lavaLamp hi-light on load.
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ startItem: 2 });
 * selects the third element in the list as default location for backLava
 *
 * @param includeMargins - default: false
 * expands the hover .backLava element to include the margins of the target element.
 * Best used in combination with the target and container options.
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ includeMargins: true });
 * expands the hover .backLava element dimentions to include the margins of all
 * target elements inside ul.lavaLamp.
 *
 * @param autoReturn - default: true
 * defines whether the backLava hover should return to the last selectedLava element
 * upon mouseleave.
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ autoReturn: false });
 * turns off the autoReturn feature - backLava element will stay on the last element
 * that you hovered over.
 *
 * @param returnDelay - default: 0
 * how many milliseconds to wait before returning the backLava element to the last
 * selected element.  Only works if autoReturn is set to true (default setting)
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ returnDelay: 1000 });
 * waits one second after mouseleave event before returning to the last selected
 * element.
 *
 * @param setOnClick - default: true
 * defines whether a clicked element should receive the selectLava class and become the
 * most recently selected element
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ setOnClick:false });
 * disables selecting of elements once clicked - after you leave the parent list element
 * the backLava will return to the original default element the page was loaded with.
 *
 * @param homeTop - default: 0
 * @param homeLeft - default: 0
 * @param homeHeight - default: 0
 * @param homeWidth - default: 0
 * allows you to define an independent 'home' element where the backLava defaults to or can
 * be sent to. This can be used to define a unique starting and/or resting place for the 
 * backLava upon leaving the parent element.
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ homeTop:-100, homeLeft:0, homeHeight:20, homeWidth:600 });
 * creates a home element 100 pixels above the parent container with a height of 20px and
 * width of 600px.  If the parent element has CSS of overflow:hidden, this can provide
 * an interesting fly-in effect
 *
 * @param returnHome - default:false
 * adjusts behavior of the backLava element when the mouse leaves the parent container. 
 * the default behavior of 'false' causes the backLava element to stay on the active menu 
 * items after it is first triggered. this feature respects the returnDelay parameter, if set.
 * this feature overrides the autoReturn parameter.
 *
 * Example:
 * jQuery("ul.lavaLamp").lavaLamp({ returnHome:true });
 * causes the backLava element to always return to the homeLava position after 
 * mouse leaves the parent container.  this can be manually triggered by running 
 * the command jQuery("ul.lavaLamp").mouseover();
 *
 * @param autoResize - default:false
 * triggers the selectedLava mouseenter event when the window is resized 
 * setting autoResize to true causes the backLava element to reposition and change dimensions
 * if the resizing the screen changes the shape of the lavaLamp. Default is false for efficiency 
 * as this feature is new and seldom needed for stock installs.
 *
 * Example:
 * jQuery('div#articles').lavaLamp({target:'p',autoSize:true});
 * causes the backLava element to resize and reposition to the p.selectedLava position 
 * and dimensions when the window resizes.
 *
 */

//console.log();
(function($) {
jQuery.fn.lavaLamp = function(o) {
	o = $.extend({
				'target': 'li',
				'container': '',
				'fx': 'swing',
				'speed': 500, 
				'click': function(){return true}, 
				'startItem': '',
				'includeMargins': false,
				'autoReturn': true,
				'returnDelay': 0,
				'setOnClick': true,
				'homeTop':0,
				'homeLeft':0,
				'homeWidth':0,
				'homeHeight':0,
				'returnHome':false,
				'autoResize':false
				}, 
			o || {});

	// parseInt for easy mathing
	function getInt(arg) {
		var myint = parseInt(arg);
		return (isNaN(myint)? 0: myint);
	}

	if (o.container == '')
		o.container = o.target;

	if (o.autoResize)
		$(window).resize(function(){
			$(o.target+'.selectedLava').trigger('mouseenter');
		});

	return this.each(function() {
		// ensures parent UL or OL element has some positioning
		if ($(this).css('position')=='static')
			$(this).css('position','relative');

		// create homeLava element if origin dimensions set
		if (o.homeTop || o.homeLeft) { 
			var $home = $('<'+o.container+' class="homeLava"></'+o.container+'>').css({ 'left':o.homeLeft, 'top':o.homeTop, 'width':o.homeWidth, 'height':o.homeHeight, 'position':'absolute','display':'block' });
			$(this).prepend($home);
		}

		var path = location.pathname + location.search + location.hash, $selected, $back, $lt = $(o.target+'[class!=noLava]', this), delayTimer, bx=0, by=0, mh=0, mw=0, ml=0, mt=0;

		// start $selected default with CSS class 'selectedLava'
		$selected = $(o.target+'.selectedLava', this);
		
		// override $selected if startItem is set
		if (o.startItem != '')
			$selected = $lt.eq(o.startItem);

		// default to $home element
		if ((o.homeTop || o.homeLeft) && $selected.length<1)
			$selected = $home;

		// loop through all the target element a href tags and
		// the longest href to match the location path is deemed the most 
		// accurate and selected as default
		if ($selected.length<1) {
			var pathmatch_len=0, $pathel;
	
			$lt.each(function(){ 
				var thishref = $('a:first',this).attr('href');
				//console.log(thishref+' size:'+thishref.length);
				if (path.indexOf(thishref)>-1 && thishref.length > pathmatch_len )
				{
					$pathel = $(this);
					pathmatch_len = thishref.length;
				}
	
			});
			if (pathmatch_len>0) {
				//console.log('found match:'+$('a:first',$pathel).attr('href'));
				$selected = $pathel;
			}
			//else 
				//console.log('no match!');
		}
	
		// if still no matches, default to the first element
		if ( $selected.length<1 )
			$selected = $lt.eq(0);

		// make sure we only have one element as $selected and apply selectedLava class
		$selected = $($selected.eq(0).addClass('selectedLava'));
			
		// add mouseover event for every sub element
		$lt.bind('mouseenter', function() {
			//console.log('mouseenter');
			// help backLava behave if returnDelay is set
			if(delayTimer) {clearTimeout(delayTimer);delayTimer=null;}
			move($(this));
		}).click(function(e) {
			if (o.setOnClick) {
				$selected.removeClass('selectedLava');
				$selected = $(this).addClass('selectedLava');
			}
			return o.click.apply(this, [e, this]);
		});
		
		// creates and adds to the container a backLava element with absolute positioning
		$back = $('<'+o.container+' class="backLava"><div class="leftLava"></div><div class="bottomLava"></div><div class="cornerLava"></div></'+o.container+'>').css({'position':'absolute','display':'block','margin':0,'padding':0}).prependTo(this);

		// setting css height and width actually sets the innerHeight and innerWidth, so
		// compute border and padding differences on styled backLava element to fit them in also.
		if (o.includeMargins) {
			mh = getInt($selected.css('marginTop')) + getInt($selected.css('marginBottom'));
			mw = getInt($selected.css('marginLeft')) + getInt($selected.css('marginRight'));
		}
		bx = getInt($back.css('borderLeftWidth'))+getInt($back.css('borderRightWidth'))+getInt($back.css('paddingLeft'))+getInt($back.css('paddingRight'))-mw;
		by = getInt($back.css('borderTopWidth'))+getInt($back.css('borderBottomWidth'))+getInt($back.css('paddingTop'))+getInt($back.css('paddingBottom'))-mh;

		// set the starting position for the lavalamp hover element: .back
		if (o.homeTop || o.homeLeft)
			$back.css({ 'left':o.homeLeft, 'top':o.homeTop, 'width':o.homeWidth, 'height':o.homeHeight });
		else
		{
			if (!o.includeMargins) {
				ml = (getInt($selected.css('marginLeft')));
				mt = (getInt($selected.css('marginTop')));
			}
			$back.css({ 'left': $selected.position().left+ml, 'top': $selected.position().top+mt, 'width': $selected.outerWidth()-bx, 'height': $selected.outerHeight()-by }); 
		}

		// after we leave the container element, move back to default/last clicked element
		$(this).bind('mouseleave', function() {
			//console.log('mouseleave');
			var $returnEl = null;
			if (o.returnHome)
				$returnEl = $home;
			else if (!o.autoReturn)
				return true;
		
			if (o.returnDelay) {
				if(delayTimer) clearTimeout(delayTimer);
				delayTimer = setTimeout(function(){move($returnEl);},o.returnDelay);
			}
			else {
				move($returnEl);
			}
			return true;
		});

		function move($el) {
			if (!$el) $el = $selected;

			if (!o.includeMargins) {
				ml = (getInt($el.css('marginLeft')));
				mt = (getInt($el.css('marginTop')));
			}
			var dims = {
				'left': $el.position().left+ml,
				'top': $el.position().top+mt,
				'width': $el.outerWidth()-bx,
				'height': $el.outerHeight()-by
			};
			
			$back.stop().animate(dims, o.speed, o.fx);
		};
	});
	
};
})(jQuery);

/*
CryptoJS v3.0.2
code.google.com/p/crypto-js
(c) 2009-2012 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/
var CryptoJS=CryptoJS||function(o,q){var l={},m=l.lib={},n=m.Base=function(){function a(){}return{extend:function(e){a.prototype=this;var c=new a;e&&c.mixIn(e);c.$super=this;return c},create:function(){var a=this.extend();a.init.apply(a,arguments);return a},init:function(){},mixIn:function(a){for(var c in a)a.hasOwnProperty(c)&&(this[c]=a[c]);a.hasOwnProperty("toString")&&(this.toString=a.toString)},clone:function(){return this.$super.extend(this)}}}(),j=m.WordArray=n.extend({init:function(a,e){a=
this.words=a||[];this.sigBytes=e!=q?e:4*a.length},toString:function(a){return(a||r).stringify(this)},concat:function(a){var e=this.words,c=a.words,d=this.sigBytes,a=a.sigBytes;this.clamp();if(d%4)for(var b=0;b<a;b++)e[d+b>>>2]|=(c[b>>>2]>>>24-8*(b%4)&255)<<24-8*((d+b)%4);else if(65535<c.length)for(b=0;b<a;b+=4)e[d+b>>>2]=c[b>>>2];else e.push.apply(e,c);this.sigBytes+=a;return this},clamp:function(){var a=this.words,e=this.sigBytes;a[e>>>2]&=4294967295<<32-8*(e%4);a.length=o.ceil(e/4)},clone:function(){var a=
n.clone.call(this);a.words=this.words.slice(0);return a},random:function(a){for(var e=[],c=0;c<a;c+=4)e.push(4294967296*o.random()|0);return j.create(e,a)}}),k=l.enc={},r=k.Hex={stringify:function(a){for(var e=a.words,a=a.sigBytes,c=[],d=0;d<a;d++){var b=e[d>>>2]>>>24-8*(d%4)&255;c.push((b>>>4).toString(16));c.push((b&15).toString(16))}return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d+=2)c[d>>>3]|=parseInt(a.substr(d,2),16)<<24-4*(d%8);return j.create(c,b/2)}},p=k.Latin1={stringify:function(a){for(var b=
a.words,a=a.sigBytes,c=[],d=0;d<a;d++)c.push(String.fromCharCode(b[d>>>2]>>>24-8*(d%4)&255));return c.join("")},parse:function(a){for(var b=a.length,c=[],d=0;d<b;d++)c[d>>>2]|=(a.charCodeAt(d)&255)<<24-8*(d%4);return j.create(c,b)}},h=k.Utf8={stringify:function(a){try{return decodeURIComponent(escape(p.stringify(a)))}catch(b){throw Error("Malformed UTF-8 data");}},parse:function(a){return p.parse(unescape(encodeURIComponent(a)))}},b=m.BufferedBlockAlgorithm=n.extend({reset:function(){this._data=j.create();
this._nDataBytes=0},_append:function(a){"string"==typeof a&&(a=h.parse(a));this._data.concat(a);this._nDataBytes+=a.sigBytes},_process:function(a){var b=this._data,c=b.words,d=b.sigBytes,f=this.blockSize,i=d/(4*f),i=a?o.ceil(i):o.max((i|0)-this._minBufferSize,0),a=i*f,d=o.min(4*a,d);if(a){for(var h=0;h<a;h+=f)this._doProcessBlock(c,h);h=c.splice(0,a);b.sigBytes-=d}return j.create(h,d)},clone:function(){var a=n.clone.call(this);a._data=this._data.clone();return a},_minBufferSize:0});m.Hasher=b.extend({init:function(){this.reset()},
reset:function(){b.reset.call(this);this._doReset()},update:function(a){this._append(a);this._process();return this},finalize:function(a){a&&this._append(a);this._doFinalize();return this._hash},clone:function(){var a=b.clone.call(this);a._hash=this._hash.clone();return a},blockSize:16,_createHelper:function(a){return function(b,c){return a.create(c).finalize(b)}},_createHmacHelper:function(a){return function(b,c){return f.HMAC.create(a,c).finalize(b)}}});var f=l.algo={};return l}(Math);
(function(o){function q(b,f,a,e,c,d,g){b=b+(f&a|~f&e)+c+g;return(b<<d|b>>>32-d)+f}function l(b,f,a,e,c,d,g){b=b+(f&e|a&~e)+c+g;return(b<<d|b>>>32-d)+f}function m(b,f,a,e,c,d,g){b=b+(f^a^e)+c+g;return(b<<d|b>>>32-d)+f}function n(b,f,a,e,c,d,g){b=b+(a^(f|~e))+c+g;return(b<<d|b>>>32-d)+f}var j=CryptoJS,k=j.lib,r=k.WordArray,k=k.Hasher,p=j.algo,h=[];(function(){for(var b=0;64>b;b++)h[b]=4294967296*o.abs(o.sin(b+1))|0})();p=p.MD5=k.extend({_doReset:function(){this._hash=r.create([1732584193,4023233417,
2562383102,271733878])},_doProcessBlock:function(b,f){for(var a=0;16>a;a++){var e=f+a,c=b[e];b[e]=(c<<8|c>>>24)&16711935|(c<<24|c>>>8)&4278255360}for(var e=this._hash.words,c=e[0],d=e[1],g=e[2],i=e[3],a=0;64>a;a+=4)16>a?(c=q(c,d,g,i,b[f+a],7,h[a]),i=q(i,c,d,g,b[f+a+1],12,h[a+1]),g=q(g,i,c,d,b[f+a+2],17,h[a+2]),d=q(d,g,i,c,b[f+a+3],22,h[a+3])):32>a?(c=l(c,d,g,i,b[f+(a+1)%16],5,h[a]),i=l(i,c,d,g,b[f+(a+6)%16],9,h[a+1]),g=l(g,i,c,d,b[f+(a+11)%16],14,h[a+2]),d=l(d,g,i,c,b[f+a%16],20,h[a+3])):48>a?(c=
m(c,d,g,i,b[f+(3*a+5)%16],4,h[a]),i=m(i,c,d,g,b[f+(3*a+8)%16],11,h[a+1]),g=m(g,i,c,d,b[f+(3*a+11)%16],16,h[a+2]),d=m(d,g,i,c,b[f+(3*a+14)%16],23,h[a+3])):(c=n(c,d,g,i,b[f+3*a%16],6,h[a]),i=n(i,c,d,g,b[f+(3*a+7)%16],10,h[a+1]),g=n(g,i,c,d,b[f+(3*a+14)%16],15,h[a+2]),d=n(d,g,i,c,b[f+(3*a+5)%16],21,h[a+3]));e[0]=e[0]+c|0;e[1]=e[1]+d|0;e[2]=e[2]+g|0;e[3]=e[3]+i|0},_doFinalize:function(){var b=this._data,f=b.words,a=8*this._nDataBytes,e=8*b.sigBytes;f[e>>>5]|=128<<24-e%32;f[(e+64>>>9<<4)+14]=(a<<8|a>>>
24)&16711935|(a<<24|a>>>8)&4278255360;b.sigBytes=4*(f.length+1);this._process();b=this._hash.words;for(f=0;4>f;f++)a=b[f],b[f]=(a<<8|a>>>24)&16711935|(a<<24|a>>>8)&4278255360}});j.MD5=k._createHelper(p);j.HmacMD5=k._createHmacHelper(p)})(Math);

// ----------------------------------------------------------------------------
// Buzz, a Javascript HTML5 Audio library
// v 1.0.5 beta
// Licensed under the MIT license.
// http://buzz.jaysalvat.com/
// ----------------------------------------------------------------------------
// Copyright (C) 2011 Jay Salvat
// http://jaysalvat.com/
// ----------------------------------------------------------------------------
// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files ( the "Software" ), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in
// all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
// THE SOFTWARE.
// ----------------------------------------------------------------------------

var buzz = {
    defaults: {
        autoplay: false,
        duration: 5000,
        formats: [],
        loop: false,
        placeholder: '--',
        preload: 'metadata',
        volume: 80
    },
    types: {
        'mp3': 'audio/mpeg',
        'ogg': 'audio/ogg',
        'wav': 'audio/wav',
        'aac': 'audio/aac',
        'm4a': 'audio/x-m4a'
    },
    sounds: [],
    el: document.createElement( 'audio' ),

    sound: function( src, options ) {
        options = options || {};

        var pid = 0,
            events = [],
            eventsOnce = {},
            supported = buzz.isSupported();

        // publics
        this.load = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.load();
            return this;
        };

        this.play = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.play();
            return this;
        };

        this.togglePlay = function() {
            if ( !supported ) {
              return this;
            }

            if ( this.sound.paused ) {
                this.sound.play();
            } else {
                this.sound.pause();
            }
            return this;
        };

        this.pause = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.pause();
            return this;
        };

        this.isPaused = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.paused;
        };

        this.stop = function() {
            if ( !supported  ) {
              return this;
            }

            this.setTime( this.getDuration() );
            this.sound.pause();
            return this;
        };

        this.isEnded = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.ended;
        };

        this.loop = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.loop = 'loop';
            this.bind( 'ended.buzzloop', function() {
                this.currentTime = 0;
                this.play();
            });
            return this;
        };

        this.unloop = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.removeAttribute( 'loop' );
            this.unbind( 'ended.buzzloop' );
            return this;
        };

        this.mute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = true;
            return this;
        };

        this.unmute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = false;
            return this;
        };

        this.toggleMute = function() {
            if ( !supported ) {
              return this;
            }

            this.sound.muted = !this.sound.muted;
            return this;
        };

        this.isMuted = function() {
            if ( !supported ) {
              return null;
            }

            return this.sound.muted;
        };

        this.setVolume = function( volume ) {
            if ( !supported ) {
              return this;
            }

            if ( volume < 0 ) {
              volume = 0;
            }
            if ( volume > 100 ) {
              volume = 100;
            }
          
            this.volume = volume;
            this.sound.volume = volume / 100;
            return this;
        };
      
        this.getVolume = function() {
            if ( !supported ) {
              return this;
            }

            return this.volume;
        };

        this.increaseVolume = function( value ) {
            return this.setVolume( this.volume + ( value || 1 ) );
        };

        this.decreaseVolume = function( value ) {
            return this.setVolume( this.volume - ( value || 1 ) );
        };

        this.setTime = function( time ) {
            if ( !supported ) {
              return this;
            }

            this.whenReady( function() {
                this.sound.currentTime = time;
            });
            return this;
        };

        this.getTime = function() {
            if ( !supported ) {
              return null;
            }

            var time = Math.round( this.sound.currentTime * 100 ) / 100;
            return isNaN( time ) ? buzz.defaults.placeholder : time;
        };

        this.setPercent = function( percent ) {
            if ( !supported ) {
              return this;
            }

            return this.setTime( buzz.fromPercent( percent, this.sound.duration ) );
        };

        this.getPercent = function() {
            if ( !supported ) {
              return null;
            }

			var percent = Math.round( buzz.toPercent( this.sound.currentTime, this.sound.duration ) );
            return isNaN( percent ) ? buzz.defaults.placeholder : percent;
        };

        this.setSpeed = function( duration ) {
			if ( !supported ) {
              return this;
            }

            this.sound.playbackRate = duration;
        };

        this.getSpeed = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.playbackRate;
        };

        this.getDuration = function() {
            if ( !supported ) {
              return null;
            }

            var duration = Math.round( this.sound.duration * 100 ) / 100;
            return isNaN( duration ) ? buzz.defaults.placeholder : duration;
        };

        this.getPlayed = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.played );
        };

        this.getBuffered = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.buffered );
        };

        this.getSeekable = function() {
			if ( !supported ) {
              return null;
            }

            return timerangeToArray( this.sound.seekable );
        };

        this.getErrorCode = function() {
            if ( supported && this.sound.error ) {
                return this.sound.error.code;
            }
            return 0;
        };

        this.getErrorMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getErrorCode() ) {
                case 1:
                    return 'MEDIA_ERR_ABORTED';
                case 2:
                    return 'MEDIA_ERR_NETWORK';
                case 3:
                    return 'MEDIA_ERR_DECODE';
                case 4:
                    return 'MEDIA_ERR_SRC_NOT_SUPPORTED';
                default:
                    return null;
            }
        };

        this.getStateCode = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.readyState;
        };

        this.getStateMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getStateCode() ) {
                case 0:
                    return 'HAVE_NOTHING';
                case 1:
                    return 'HAVE_METADATA';
                case 2:
                    return 'HAVE_CURRENT_DATA';
                case 3:
                    return 'HAVE_FUTURE_DATA';
                case 4:
                    return 'HAVE_ENOUGH_DATA';
                default:
                    return null;
            }
        };

        this.getNetworkStateCode = function() {
			if ( !supported ) {
              return null;
            }

            return this.sound.networkState;
        };

        this.getNetworkStateMessage = function() {
			if ( !supported ) {
              return null;
            }

            switch( this.getNetworkStateCode() ) {
                case 0:
                    return 'NETWORK_EMPTY';
                case 1:
                    return 'NETWORK_IDLE';
                case 2:
                    return 'NETWORK_LOADING';
                case 3:
                    return 'NETWORK_NO_SOURCE';
                default:
                    return null;
            }
        };

        this.set = function( key, value ) {
            if ( !supported ) {
              return this;
            }

            this.sound[ key ] = value;
            return this;
        };

        this.get = function( key ) {
            if ( !supported ) {
              return null;
            }

            return key ? this.sound[ key ] : this.sound;
        };

        this.bind = function( types, func ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            var that = this,
				efunc = function( e ) { func.call( that, e ); };

            for( var t = 0; t < types.length; t++ ) {
                var type = types[ t ],
                    idx = type;
                    type = idx.split( '.' )[ 0 ];

                    events.push( { idx: idx, func: efunc } );
                    this.sound.addEventListener( type, efunc, true );
            }
            return this;
        };

        this.unbind = function( types ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            for( var t = 0; t < types.length; t++ ) {
                var idx = types[ t ],
                    type = idx.split( '.' )[ 0 ];

                for( var i = 0; i < events.length; i++ ) {
                    var namespace = events[ i ].idx.split( '.' );
                    if ( events[ i ].idx == idx || ( namespace[ 1 ] && namespace[ 1 ] == idx.replace( '.', '' ) ) ) {
                        this.sound.removeEventListener( type, events[ i ].func, true );
                        delete events[ i ];
                    }
                }
            }
            return this;
        };

        this.bindOnce = function( type, func ) {
            if ( !supported ) {
              return this;
            }

            var that = this;

            eventsOnce[ pid++ ] = false;
            this.bind( pid + type, function() {
               if ( !eventsOnce[ pid ] ) {
                   eventsOnce[ pid ] = true;
                   func.call( that );
               }
               that.unbind( pid + type );
            });
        };

        this.trigger = function( types ) {
            if ( !supported ) {
              return this;
            }

            types = types.split( ' ' );

            for( var t = 0; t < types.length; t++ ) {
                var idx = types[ t ];

                for( var i = 0; i < events.length; i++ ) {
                    var eventType = events[ i ].idx.split( '.' );
                    if ( events[ i ].idx == idx || ( eventType[ 0 ] && eventType[ 0 ] == idx.replace( '.', '' ) ) ) {
                        var evt = document.createEvent('HTMLEvents');
                        evt.initEvent( eventType[ 0 ], false, true );
                        this.sound.dispatchEvent( evt );
                    }
                }
            }
            return this;
        };

        this.fadeTo = function( to, duration, callback ) {
			if ( !supported ) {
              return this;
            }

            if ( duration instanceof Function ) {
                callback = duration;
                duration = buzz.defaults.duration;
            } else {
                duration = duration || buzz.defaults.duration;
            }

            var from = this.volume,
				delay = duration / Math.abs( from - to ),
                that = this;
            this.play();

            function doFade() {
                setTimeout( function() {
                    if ( from < to && that.volume < to ) {
                        that.setVolume( that.volume += 1 );
                        doFade();
                    } else if ( from > to && that.volume > to ) {
                        that.setVolume( that.volume -= 1 );
                        doFade();
                    } else if ( callback instanceof Function ) {
                        callback.apply( that );
                    }
                }, delay );
            }
            this.whenReady( function() {
                doFade();
            });

            return this;
        };

        this.fadeIn = function( duration, callback ) {
            if ( !supported ) {
              return this;
            }

            return this.setVolume(0).fadeTo( 100, duration, callback );
        };

        this.fadeOut = function( duration, callback ) {
			if ( !supported ) {
              return this;
            }

            return this.fadeTo( 0, duration, callback );
        };

        this.fadeWith = function( sound, duration ) {
            if ( !supported ) {
              return this;
            }

            this.fadeOut( duration, function() {
                this.stop();
            });

            sound.play().fadeIn( duration );

            return this;
        };

        this.whenReady = function( func ) {
            if ( !supported ) {
              return null;
            }

            var that = this;
            if ( this.sound.readyState === 0 ) {
                this.bind( 'canplay.buzzwhenready', function() {
                    func.call( that );
                });
            } else {
                func.call( that );
            }
        };

        // privates
        function timerangeToArray( timeRange ) {
            var array = [],
                length = timeRange.length - 1;

            for( var i = 0; i <= length; i++ ) {
                array.push({
                    start: timeRange.start( length ),
                    end: timeRange.end( length )
                });
            }
            return array;
        }

        function getExt( filename ) {
            return filename.split('.').pop();
        }
        
        function addSource( sound, src ) {
            var source = document.createElement( 'source' );
            source.src = src;
            if ( buzz.types[ getExt( src ) ] ) {
                source.type = buzz.types[ getExt( src ) ];
            }
            sound.appendChild( source );
        }

        // init
        if ( supported ) {
          
            for(var i in buzz.defaults ) {
              if(buzz.defaults.hasOwnProperty(i)) {
                options[ i ] = options[ i ] || buzz.defaults[ i ];
              }
            }

            this.sound = document.createElement( 'audio' );

            if ( src instanceof Array ) {
                for( var j in src ) {
                  if(src.hasOwnProperty(j)) {
                    addSource( this.sound, src[ j ] );
                  }
                }
            } else if ( options.formats.length ) {
                for( var k in options.formats ) {
                  if(options.formats.hasOwnProperty(k)) {
                    addSource( this.sound, src + '.' + options.formats[ k ] );
                  }
                }
            } else {
                addSource( this.sound, src );
            }

            if ( options.loop ) {
                this.loop();
            }

            if ( options.autoplay ) {
                this.sound.autoplay = 'autoplay';
            }

            if ( options.preload === true ) {
                this.sound.preload = 'auto';
            } else if ( options.preload === false ) {
                this.sound.preload = 'none';
            } else {
                this.sound.preload = options.preload;
            }

            this.setVolume( options.volume );

            buzz.sounds.push( this );
        }
    },

    group: function( sounds ) {
        sounds = argsToArray( sounds, arguments );

        // publics
        this.getSounds = function() {
            return sounds;
        };

        this.add = function( soundArray ) {
            soundArray = argsToArray( soundArray, arguments );
            for( var a = 0; a < soundArray.length; a++ ) {
                sounds.push( soundArray[ a ] );
            }
        };

        this.remove = function( soundArray ) {
            soundArray = argsToArray( soundArray, arguments );
            for( var a = 0; a < soundArray.length; a++ ) {
                for( var i = 0; i < sounds.length; i++ ) {
                    if ( sounds[ i ] == soundArray[ a ] ) {
                        delete sounds[ i ];
                        break;
                    }
                }
            }
        };

        this.load = function() {
            fn( 'load' );
            return this;
        };

        this.play = function() {
            fn( 'play' );
            return this;
        };

        this.togglePlay = function( ) {
            fn( 'togglePlay' );
            return this;
        };

        this.pause = function( time ) {
            fn( 'pause', time );
            return this;
        };

        this.stop = function() {
            fn( 'stop' );
            return this;
        };

        this.mute = function() {
            fn( 'mute' );
            return this;
        };

        this.unmute = function() {
            fn( 'unmute' );
            return this;
        };

        this.toggleMute = function() {
            fn( 'toggleMute' );
            return this;
        };

        this.setVolume = function( volume ) {
            fn( 'setVolume', volume );
            return this;
        };

        this.increaseVolume = function( value ) {
            fn( 'increaseVolume', value );
            return this;
        };

        this.decreaseVolume = function( value ) {
            fn( 'decreaseVolume', value );
            return this;
        };

        this.loop = function() {
            fn( 'loop' );
            return this;
        };

        this.unloop = function() {
            fn( 'unloop' );
            return this;
        };

        this.setTime = function( time ) {
            fn( 'setTime', time );
            return this;
        };

        this.setduration = function( duration ) {
            fn( 'setduration', duration );
            return this;
        };

        this.set = function( key, value ) {
            fn( 'set', key, value );
            return this;
        };

        this.bind = function( type, func ) {
            fn( 'bind', type, func );
            return this;
        };

        this.unbind = function( type ) {
            fn( 'unbind', type );
            return this;
        };

        this.bindOnce = function( type, func ) {
            fn( 'bindOnce', type, func );
            return this;
        };

        this.trigger = function( type ) {
            fn( 'trigger', type );
            return this;
        };

        this.fade = function( from, to, duration, callback ) {
            fn( 'fade', from, to, duration, callback );
            return this;
        };

        this.fadeIn = function( duration, callback ) {
            fn( 'fadeIn', duration, callback );
            return this;
        };

        this.fadeOut = function( duration, callback ) {
            fn( 'fadeOut', duration, callback );
            return this;
        };

        // privates
        function fn() {
            var args = argsToArray( null, arguments ),
                func = args.shift();

            for( var i = 0; i < sounds.length; i++ ) {
                sounds[ i ][ func ].apply( sounds[ i ], args );
            }
        }

        function argsToArray( array, args ) {
            return ( array instanceof Array ) ? array : Array.prototype.slice.call( args );
        }
    },

    all: function() {
      return new buzz.group( buzz.sounds );
    },

    isSupported: function() {
        return !!buzz.el.canPlayType;
    },

    isOGGSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/ogg; codecs="vorbis"' );
    },

    isWAVSupported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/wav; codecs="1"' );
    },

    isMP3Supported: function() {
        return !!buzz.el.canPlayType && buzz.el.canPlayType( 'audio/mpeg;' );
    },

    isAACSupported: function() {
        return !!buzz.el.canPlayType && ( buzz.el.canPlayType( 'audio/x-m4a;' ) || buzz.el.canPlayType( 'audio/aac;' ) );
    },

    toTimer: function( time, withHours ) {
        var h, m, s;
        h = Math.floor( time / 3600 );
        h = isNaN( h ) ? '--' : ( h >= 10 ) ? h : '0' + h;
        m = withHours ? Math.floor( time / 60 % 60 ) : Math.floor( time / 60 );
        m = isNaN( m ) ? '--' : ( m >= 10 ) ? m : '0' + m;
        s = Math.floor( time % 60 );
        s = isNaN( s ) ? '--' : ( s >= 10 ) ? s : '0' + s;
        return withHours ? h + ':' + m + ':' + s : m + ':' + s;
    },

    fromTimer: function( time ) {
        var splits = time.toString().split( ':' );
        if ( splits && splits.length == 3 ) {
            time = ( parseInt( splits[ 0 ], 10 ) * 3600 ) + ( parseInt(splits[ 1 ], 10 ) * 60 ) + parseInt( splits[ 2 ], 10 );
        }
        if ( splits && splits.length == 2 ) {
            time = ( parseInt( splits[ 0 ], 10 ) * 60 ) + parseInt( splits[ 1 ], 10 );
        }
        return time;
    },

    toPercent: function( value, total, decimal ) {
		var r = Math.pow( 10, decimal || 0 );

		return Math.round( ( ( value * 100 ) / total ) * r ) / r;
    },

    fromPercent: function( percent, total, decimal ) {
		var r = Math.pow( 10, decimal || 0 );

        return  Math.round( ( ( total / 100 ) * percent ) * r ) / r;
    }
};

if(!AmCharts)var AmCharts={};AmCharts.inheriting={};
AmCharts.Class=function(a){var b=function(){arguments[0]!==AmCharts.inheriting&&(this.events={},this.construct.apply(this,arguments))};a.inherits?(b.prototype=new a.inherits(AmCharts.inheriting),b.base=a.inherits.prototype,delete a.inherits):(b.prototype.createEvents=function(){for(var a=0,b=arguments.length;a<b;a++)this.events[arguments[a]]=[]},b.prototype.listenTo=function(a,b,d){a.events[b].push({handler:d,scope:this})},b.prototype.addListener=function(a,b,d){this.events[a].push({handler:b,scope:d})},
b.prototype.removeListener=function(a,b,d){a=a.events[b];for(b=a.length-1;0<=b;b--)a[b].handler===d&&a.splice(b,1)},b.prototype.fire=function(a,b){for(var d=this.events[a],h=0,i=d.length;h<i;h++){var j=d[h];j.handler.call(j.scope,b)}});for(var d in a)b.prototype[d]=a[d];return b};AmCharts.charts=[];AmCharts.addChart=function(a){AmCharts.charts.push(a)};AmCharts.removeChart=function(a){for(var b=AmCharts.charts,d=b.length-1;0<=d;d--)b[d]==a&&b.splice(d,1)};
if(document.addEventListener||window.opera)AmCharts.isNN=!0,AmCharts.isIE=!1,AmCharts.dx=0.5,AmCharts.dy=0.5;document.attachEvent&&(AmCharts.isNN=!1,AmCharts.isIE=!0,AmCharts.dx=0,AmCharts.dy=0);window.chrome&&(AmCharts.chrome=!0);AmCharts.IEversion=0;-1!=navigator.appVersion.indexOf("MSIE")&&document.documentMode&&(AmCharts.IEversion=Number(document.documentMode));AmCharts.handleResize=function(){for(var a=AmCharts.charts,b=0;b<a.length;b++){var d=a[b];d&&d.div&&d.handleResize()}};
AmCharts.handleMouseUp=function(a){for(var b=AmCharts.charts,d=0;d<b.length;d++){var e=b[d];e&&e.handleReleaseOutside(a)}};AmCharts.handleMouseMove=function(a){for(var b=AmCharts.charts,d=0;d<b.length;d++){var e=b[d];e&&e.handleMouseMove(a)}};AmCharts.resetMouseOver=function(){for(var a=AmCharts.charts,b=0;b<a.length;b++){var d=a[b];d&&(d.mouseIsOver=!1)}};AmCharts.onReadyArray=[];AmCharts.ready=function(a){AmCharts.onReadyArray.push(a)};
AmCharts.handleLoad=function(){for(var a=AmCharts.onReadyArray,b=0;b<a.length;b++)(0,a[b])()};AmCharts.useUTC=!1;AmCharts.updateRate=40;AmCharts.uid=0;AmCharts.getUniqueId=function(){AmCharts.uid++;return"AmChartsEl-"+AmCharts.uid};AmCharts.isNN&&(document.addEventListener("mousemove",AmCharts.handleMouseMove,!0),window.addEventListener("resize",AmCharts.handleResize,!0),document.addEventListener("mouseup",AmCharts.handleMouseUp,!0),window.addEventListener("load",AmCharts.handleLoad,!0));
AmCharts.isIE&&(document.attachEvent("onmousemove",AmCharts.handleMouseMove),window.attachEvent("onresize",AmCharts.handleResize),document.attachEvent("onmouseup",AmCharts.handleMouseUp),window.attachEvent("onload",AmCharts.handleLoad));AmCharts.AmChart=AmCharts.Class({construct:function(){this.version="2.7.9";AmCharts.addChart(this);this.createEvents("dataUpdated","init");this.height=this.width="100%";this.dataChanged=!0;this.chartCreated=!1;this.previousWidth=this.previousHeight=0;this.backgroundColor="#FFFFFF";this.borderAlpha=this.backgroundAlpha=0;this.color=this.borderColor="#000000";this.fontFamily="Verdana";this.fontSize=11;this.numberFormatter={precision:-1,decimalSeparator:".",thousandsSeparator:","};this.percentFormatter=
{precision:2,decimalSeparator:".",thousandsSeparator:","};this.labels=[];this.allLabels=[];this.titles=[];this.marginRight=this.marginLeft=this.autoMarginOffset=0;var a=document.createElement("div"),b=a.style;b.overflow="hidden";b.position="relative";b.textAlign="left";this.chartDiv=a;a=document.createElement("div");b=a.style;b.overflow="hidden";b.position="relative";this.legendDiv=a;this.balloon=new AmCharts.AmBalloon;this.balloon.chart=this;this.titleHeight=0;this.prefixesOfBigNumbers=[{number:1E3,
prefix:"k"},{number:1E6,prefix:"M"},{number:1E9,prefix:"G"},{number:1E12,prefix:"T"},{number:1E15,prefix:"P"},{number:1E18,prefix:"E"},{number:1E21,prefix:"Z"},{number:1E24,prefix:"Y"}];this.prefixesOfSmallNumbers=[{number:1E-24,prefix:"y"},{number:1E-21,prefix:"z"},{number:1E-18,prefix:"a"},{number:1E-15,prefix:"f"},{number:1E-12,prefix:"p"},{number:1E-9,prefix:"n"},{number:1E-6,prefix:"\u03bc"},{number:0.001,prefix:"m"}];this.panEventsEnabled=!1;AmCharts.bezierX=3;AmCharts.bezierY=6;this.product=
"amcharts"},drawChart:function(){var a=this.container,b=this.realWidth,d=this.realHeight,e=this.set,f=AmCharts.polygon(a,[0,b-1,b-1,0],[0,0,d-1,d-1],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);this.background=f;e.push(f);if(f=this.backgroundImage)this.path&&(f=this.path+f),this.bgImg=a=a.image(f,0,0,b,d),e.push(a);this.realWidth=b=this.updateWidth();this.realHeight=d=this.updateHeight();this.redrawLabels();this.drawTitles()},drawTitles:function(){var a=this.titles;
if(AmCharts.ifArray(a))for(var b=20,d=0;d<a.length;d++){var e=a[d],f=e.color;void 0==f&&(f=this.color);var g=e.size;isNaN(e.alpha);var h=this.marginLeft,f=AmCharts.text(this.container,e.text,f,this.fontFamily,g);f.translate(h+(this.realWidth-this.marginRight-h)/2,b);h=!0;void 0!=e.bold&&(h=e.bold);h&&f.attr({"font-weight":"bold"});b+=g+6;this.freeLabelsSet.push(f)}},write:function(a){var b=this.balloon;b&&!b.chart&&(b.chart=this);a="object"!=typeof a?document.getElementById(a):a;a.innerHTML="";this.div=
a;a.style.overflow="hidden";var b=this.chartDiv,d=this.legendDiv,e=this.legend,f=d.style,g=b.style;this.measure();if(e)switch(e.position){case "bottom":a.appendChild(b);a.appendChild(d);break;case "top":a.appendChild(d);a.appendChild(b);break;case "absolute":var h=document.createElement("div"),i=h.style;i.position="relative";i.width=a.style.width;i.height=a.style.height;a.appendChild(h);f.position="absolute";g.position="absolute";void 0!=e.left&&(f.left=e.left+"px");void 0!=e.right&&(f.right=e.right+
"px");void 0!=e.top&&(f.top=e.top+"px");void 0!=e.bottom&&(f.bottom=e.bottom+"px");e.marginLeft=0;e.marginRight=0;h.appendChild(b);h.appendChild(d);break;case "right":h=document.createElement("div");i=h.style;i.position="relative";i.width=a.style.width;i.height=a.style.height;a.appendChild(h);f.position="relative";g.position="absolute";h.appendChild(b);h.appendChild(d);break;case "left":h=document.createElement("div"),i=h.style,i.position="relative",i.width=a.style.width,i.height=a.style.height,a.appendChild(h),
f.position="relative",g.position="absolute",h.appendChild(b),h.appendChild(d)}else a.appendChild(b);this.listenersAdded||(this.addListeners(),this.listenersAdded=!0);this.initChart()},createLabelsSet:function(){AmCharts.remove(this.labelsSet);this.labelsSet=this.container.set();this.freeLabelsSet.push(this.labelsSet)},initChart:function(){this.divIsFixed=AmCharts.findIfFixed(this.chartDiv);this.previousHeight=this.realHeight;this.previousWidth=this.realWidth;this.destroy();var a=0;document.attachEvent&&
!window.opera&&(a=1);AmCharts.isNN&&AmCharts.findIfAuto(this.chartDiv)&&(a=3);this.mouseMode=a;a=this.container=new AmCharts.AmDraw(this.chartDiv,this.realWidth,this.realHeight);this.set=a.set();this.gridSet=a.set();this.graphsBehindSet=a.set();this.bulletBehindSet=a.set();this.columnSet=a.set();this.graphsSet=a.set();this.trendLinesSet=a.set();this.axesLabelsSet=a.set();this.axesSet=a.set();this.cursorSet=a.set();this.scrollbarsSet=a.set();this.bulletSet=a.set();this.freeLabelsSet=a.set();this.balloonsSet=
a.set();this.balloonsSet.setAttr("id","balloons");this.zoomButtonSet=a.set();this.linkSet=a.set();this.drb();this.renderFix()},measure:function(){var a=this.div,b=this.chartDiv,d=a.offsetWidth,e=a.offsetHeight,f=this.container;a.clientHeight&&(d=a.clientWidth,e=a.clientHeight);var g=AmCharts.removePx(AmCharts.getStyle(a,"padding-left")),h=AmCharts.removePx(AmCharts.getStyle(a,"padding-right")),i=AmCharts.removePx(AmCharts.getStyle(a,"padding-top")),j=AmCharts.removePx(AmCharts.getStyle(a,"padding-bottom"));
isNaN(g)||(d-=g);isNaN(h)||(d-=h);isNaN(i)||(e-=i);isNaN(j)||(e-=j);g=a.style;a=g.width;g=g.height;-1!=a.indexOf("px")&&(d=AmCharts.removePx(a));-1!=g.indexOf("px")&&(e=AmCharts.removePx(g));a=AmCharts.toCoordinate(this.width,d);g=AmCharts.toCoordinate(this.height,e);if(a!=this.previousWidth||g!=this.previousHeight)b.style.width=a+"px",b.style.height=g+"px",f&&f.setSize(a,g),this.balloon.setBounds(2,2,a-2,g);this.realWidth=a;this.realHeight=g;this.divRealWidth=d;this.divRealHeight=e},destroy:function(){this.chartDiv.innerHTML=
"";this.clearTimeOuts()},clearTimeOuts:function(){var a=this.timeOuts;if(a)for(var b=0;b<a.length;b++)clearTimeout(a[b]);this.timeOuts=[]},clear:function(){AmCharts.callMethod("clear",[this.chartScrollbar,this.scrollbarV,this.scrollbarH,this.chartCursor]);this.chartCursor=this.scrollbarH=this.scrollbarV=this.chartScrollbar=null;this.clearTimeOuts();this.container&&this.container.remove();AmCharts.removeChart(this)},setMouseCursor:function(a){"auto"==a&&AmCharts.isNN&&(a="default");this.chartDiv.style.cursor=
a;this.legendDiv.style.cursor=a},redrawLabels:function(){this.labels=[];var a=this.allLabels;this.createLabelsSet();for(var b=0;b<a.length;b++)this.drawLabel(a[b])},drawLabel:function(a){if(this.container){var b=a.y,d=a.text,e=a.align,f=a.size,g=a.color,h=a.rotation,i=a.alpha,j=a.bold,k=AmCharts.toCoordinate(a.x,this.realWidth),b=AmCharts.toCoordinate(b,this.realHeight);k||(k=0);b||(b=0);void 0==g&&(g=this.color);isNaN(f)&&(f=this.fontSize);e||(e="start");"left"==e&&(e="start");"right"==e&&(e="end");
"center"==e&&(e="middle",h?b=this.realHeight-b+b/2:k=this.realWidth/2-k);void 0==i&&(i=1);void 0==h&&(h=0);b+=f/2;d=AmCharts.text(this.container,d,g,this.fontFamily,f,e,j,i);d.translate(k,b);0!=h&&d.rotate(h);a.url&&(d.setAttr("cursor","pointer"),d.click(function(){AmCharts.getURL(a.url)}));this.labelsSet.push(d);this.labels.push(d)}},addLabel:function(a,b,d,e,f,g,h,i,j,k){a={x:a,y:b,text:d,align:e,size:f,color:g,alpha:i,rotation:h,bold:j,url:k};this.container&&this.drawLabel(a);this.allLabels.push(a)},
clearLabels:function(){for(var a=this.labels,b=a.length-1;0<=b;b--)a[b].remove();this.labels=[];this.allLabels=[]},updateHeight:function(){var a=this.divRealHeight,b=this.legend;if(b){var d=this.legendDiv.offsetHeight,b=b.position;if("top"==b||"bottom"==b)a-=d,0>a&&(a=0),this.chartDiv.style.height=a+"px"}return a},updateWidth:function(){var a=this.divRealWidth,b=this.divRealHeight,d=this.legend;if(d){var e=this.legendDiv,f=e.offsetWidth,g=e.offsetHeight,e=e.style,h=this.chartDiv.style,d=d.position;
if("right"==d||"left"==d)a-=f,0>a&&(a=0),h.width=a+"px","left"==d?h.left=f+"px":e.left=a+"px",e.top=(b-g)/2+"px"}return a},getTitleHeight:function(){var a=0,b=this.titles;if(0<b.length)for(var a=15,d=0;d<b.length;d++)a+=b[d].size+6;return a},addTitle:function(a,b,d,e,f){isNaN(b)&&(b=this.fontSize+2);a={text:a,size:b,color:d,alpha:e,bold:f};this.titles.push(a);return a},addListeners:function(){var a=this,b=a.chartDiv;AmCharts.isNN&&(a.panEventsEnabled&&"ontouchstart"in document.documentElement&&(b.addEventListener("touchstart",
function(b){a.handleTouchMove.call(a,b);a.handleTouchStart.call(a,b)},!0),b.addEventListener("touchmove",function(b){a.handleTouchMove.call(a,b)},!0),b.addEventListener("touchend",function(b){a.handleTouchEnd.call(a,b)},!0)),b.addEventListener("mousedown",function(b){a.handleMouseDown.call(a,b)},!0),b.addEventListener("mouseover",function(b){a.handleMouseOver.call(a,b)},!0),b.addEventListener("mouseout",function(b){a.handleMouseOut.call(a,b)},!0));AmCharts.isIE&&(b.attachEvent("onmousedown",function(b){a.handleMouseDown.call(a,
b)}),b.attachEvent("onmouseover",function(b){a.handleMouseOver.call(a,b)}),b.attachEvent("onmouseout",function(b){a.handleMouseOut.call(a,b)}))},dispDUpd:function(){var a;this.dispatchDataUpdated&&(this.dispatchDataUpdated=!1,a="dataUpdated",this.fire(a,{type:a,chart:this}));this.chartCreated||(a="init",this.fire(a,{type:a,chart:this}))},drb:function(){},validateSize:function(){var a=this;a.measure();var b=a.legend;if((a.realWidth!=a.previousWidth||a.realHeight!=a.previousHeight)&&0<a.realWidth&&
0<a.realHeight&&a.chartCreated){a.sizeChanged=!0;if(b){clearTimeout(a.legendInitTO);var d=setTimeout(function(){b.invalidateSize()},100);a.timeOuts.push(d);a.legendInitTO=d}clearTimeout(a.initTO);d=setTimeout(function(){a.initChart()},100);a.timeOuts.push(d);a.initTO=d}a.renderFix();b&&b.renderFix()},invalidateSize:function(){var a=this;a.previousWidth=NaN;a.previousHeight=NaN;a.marginsUpdated=!1;clearTimeout(a.initTO);var b=setTimeout(function(){a.validateSize()},1);a.timeOuts.push(b);a.initTO=b},
validateData:function(a){this.chartCreated&&(this.dataChanged=!0,this.marginsUpdated=!1,this.initChart(a))},validateNow:function(){this.initChart()},showItem:function(a){a.hidden=!1;this.initChart()},hideItem:function(a){a.hidden=!0;this.initChart()},hideBalloon:function(){var a=this;a.hoverInt=setTimeout(function(){a.hideBalloonReal.call(a)},80)},hideBalloonReal:function(){var a=this.balloon;a&&a.hide()},showBalloon:function(a,b,d,e,f){var g=this;clearTimeout(g.balloonTO);g.balloonTO=setTimeout(function(){g.showBalloonReal.call(g,
a,b,d,e,f)},1)},showBalloonReal:function(a,b,d,e,f){this.handleMouseMove();var g=this.balloon;g.enabled&&(g.followCursor(!1),g.changeColor(b),d||g.setPosition(e,f),g.followCursor(d),a&&g.showBalloon(a))},handleTouchMove:function(a){this.hideBalloon();var b=this.chartDiv;a.touches&&(a=a.touches.item(0),this.mouseX=a.pageX-AmCharts.findPosX(b),this.mouseY=a.pageY-AmCharts.findPosY(b))},handleMouseOver:function(){AmCharts.resetMouseOver();this.mouseIsOver=!0},handleMouseOut:function(){AmCharts.resetMouseOver();
this.mouseIsOver=!1},handleMouseMove:function(a){if(this.mouseIsOver){var b=this.chartDiv;a||(a=window.event);var d,e;if(a){switch(this.mouseMode){case 3:d=a.pageX-AmCharts.findPosX(b);e=a.pageY-AmCharts.findPosY(b);break;case 1:d=a.x;e=a.y;break;case 0:this.divIsFixed?(d=a.clientX-AmCharts.findPosX(b),e=a.clientY-AmCharts.findPosY(b)):(d=a.pageX-AmCharts.findPosX(b),e=a.pageY-AmCharts.findPosY(b))}this.mouseX=d;this.mouseY=e}}},handleTouchStart:function(a){this.handleMouseDown(a)},handleTouchEnd:function(a){AmCharts.resetMouseOver();
this.handleReleaseOutside(a)},handleReleaseOutside:function(){},handleMouseDown:function(a){AmCharts.resetMouseOver();this.mouseIsOver=!0;a&&a.preventDefault&&a.preventDefault()},addLegend:function(a){AmCharts.extend(a,new AmCharts.AmLegend);this.legend=a;a.chart=this;a.div=this.legendDiv;var b=this.handleLegendEvent;this.listenTo(a,"showItem",b);this.listenTo(a,"hideItem",b);this.listenTo(a,"clickMarker",b);this.listenTo(a,"rollOverItem",b);this.listenTo(a,"rollOutItem",b);this.listenTo(a,"rollOverMarker",
b);this.listenTo(a,"rollOutMarker",b);this.listenTo(a,"clickLabel",b)},removeLegend:function(){this.legend=void 0;this.legendDiv.innerHTML=""},handleResize:function(){(AmCharts.isPercents(this.width)||AmCharts.isPercents(this.height))&&this.validateSize();this.renderFix()},renderFix:function(){if(!AmCharts.VML){var a=this.container;a&&a.renderFix()}},getSVG:function(){if(AmCharts.hasSVG)return this.container}});AmCharts.Slice=AmCharts.Class({construct:function(){}});AmCharts.SerialDataItem=AmCharts.Class({construct:function(){}});
AmCharts.GraphDataItem=AmCharts.Class({construct:function(){}});AmCharts.Guide=AmCharts.Class({construct:function(){}});AmCharts.toBoolean=function(a,b){if(void 0==a)return b;switch(String(a).toLowerCase()){case "true":case "yes":case "1":return!0;case "false":case "no":case "0":case null:return!1;default:return Boolean(a)}};AmCharts.removeFromArray=function(a,b){for(var d=a.length-1;0<=d;d--)a[d]==b&&a.splice(d,1)};
AmCharts.getStyle=function(a,b){var d="";document.defaultView&&document.defaultView.getComputedStyle?d=document.defaultView.getComputedStyle(a,"").getPropertyValue(b):a.currentStyle&&(b=b.replace(/\-(\w)/g,function(a,b){return b.toUpperCase()}),d=a.currentStyle[b]);return d};AmCharts.removePx=function(a){return Number(a.substring(0,a.length-2))};
AmCharts.getURL=function(a,b){if(a)if("_self"==b||!b)window.location.href=a;else if("_top"==b&&window.top)window.top.location.href=a;else if("_parent"==b&&window.parent)window.parent.location.href=a;else{var d=document.getElementsByName(b)[0];d?d.src=a:window.open(a)}};AmCharts.formatMilliseconds=function(a,b){if(-1!=a.indexOf("fff")){var d=b.getMilliseconds(),e=String(d);10>d&&(e="00"+d);10<=d&&100>d&&(e="0"+d);a=a.replace(/fff/g,e)}return a};
AmCharts.ifArray=function(a){return a&&0<a.length?!0:!1};AmCharts.callMethod=function(a,b){for(var d=0;d<b.length;d++){var e=b[d];if(e){if(e[a])e[a]();var f=e.length;if(0<f)for(var g=0;g<f;g++){var h=e[g];if(h&&h[a])h[a]()}}}};AmCharts.toNumber=function(a){return"number"==typeof a?a:Number(String(a).replace(/[^0-9\-.]+/g,""))};
AmCharts.toColor=function(a){if(""!=a&&void 0!=a)if(-1!=a.indexOf(","))for(var a=a.split(","),b=0;b<a.length;b++){var d=a[b].substring(a[b].length-6,a[b].length);a[b]="#"+d}else a=a.substring(a.length-6,a.length),a="#"+a;return a};AmCharts.toCoordinate=function(a,b,d){var e;void 0!=a&&(a=a.toString(),d&&d<b&&(b=d),e=Number(a),-1!=a.indexOf("!")&&(e=b-Number(a.substr(1))),-1!=a.indexOf("%")&&(e=b*Number(a.substr(0,a.length-1))/100));return e};
AmCharts.fitToBounds=function(a,b,d){a<b&&(a=b);a>d&&(a=d);return a};AmCharts.isDefined=function(a){return void 0==a?!1:!0};AmCharts.stripNumbers=function(a){return a.replace(/[0-9]+/g,"")};AmCharts.extractPeriod=function(a){var b=AmCharts.stripNumbers(a),d=1;b!=a&&(d=Number(a.slice(0,a.indexOf(b))));return{period:b,count:d}};
AmCharts.resetDateToMin=function(a,b,d,e){void 0==e&&(e=1);var f=a.getFullYear(),g=a.getMonth(),h=a.getDate(),i=a.getHours(),j=a.getMinutes(),k=a.getSeconds(),l=a.getMilliseconds(),a=a.getDay();switch(b){case "YYYY":f=Math.floor(f/d)*d;g=0;h=1;l=k=j=i=0;break;case "MM":g=Math.floor(g/d)*d;h=1;l=k=j=i=0;break;case "WW":0==a&&0<e&&(a=7);h=h-a+e;l=k=j=i=0;break;case "DD":h=Math.floor(h/d)*d;l=k=j=i=0;break;case "hh":i=Math.floor(i/d)*d;l=k=j=0;break;case "mm":j=Math.floor(j/d)*d;l=k=0;break;case "ss":k=
Math.floor(k/d)*d;l=0;break;case "fff":l=Math.floor(l/d)*d}return a=new Date(f,g,h,i,j,k,l)};AmCharts.getPeriodDuration=function(a,b){void 0==b&&(b=1);var d;switch(a){case "YYYY":d=316224E5;break;case "MM":d=26784E5;break;case "WW":d=6048E5;break;case "DD":d=864E5;break;case "hh":d=36E5;break;case "mm":d=6E4;break;case "ss":d=1E3;break;case "fff":d=1}return d*b};AmCharts.roundTo=function(a,b){if(0>b)return a;var d=Math.pow(10,b);return Math.round(a*d)/d};
AmCharts.toFixed=function(a,b){var d=Math.round(a*Math.pow(10,b)).toString();if(0<b){var e=d.length;if(e<b)for(var f=0;f<b-e;f++)d="0"+d;e=d.substring(0,d.length-b);""==e&&(e=0);return e+"."+d.substring(d.length-b,d.length)}return d.toString()};AmCharts.intervals={s:{nextInterval:"ss",contains:1E3},ss:{nextInterval:"mm",contains:60,count:0},mm:{nextInterval:"hh",contains:60,count:1},hh:{nextInterval:"DD",contains:24,count:2},DD:{nextInterval:"",contains:Infinity,count:3}};
AmCharts.getMaxInterval=function(a,b){var d=AmCharts.intervals;return a>=d[b].contains?(a=Math.round(a/d[b].contains),b=d[b].nextInterval,AmCharts.getMaxInterval(a,b)):"ss"==b?d[b].nextInterval:b};
AmCharts.formatDuration=function(a,b,d,e,f,g){var h=AmCharts.intervals,i=g.decimalSeparator;if(a>=h[b].contains){var j=a-Math.floor(a/h[b].contains)*h[b].contains;"ss"==b&&(j=AmCharts.formatNumber(j,g),1==j.split(i)[0].length&&(j="0"+j));if(("mm"==b||"hh"==b)&&10>j)j="0"+j;d=j+""+e[b]+""+d;a=Math.floor(a/h[b].contains);b=h[b].nextInterval;return AmCharts.formatDuration(a,b,d,e,f,g)}"ss"==b&&(a=AmCharts.formatNumber(a,g),1==a.split(i)[0].length&&(a="0"+a));if(("mm"==b||"hh"==b)&&10>a)a="0"+a;d=a+""+
e[b]+""+d;if(h[f].count>h[b].count)for(a=h[b].count;a<h[f].count;a++)b=h[b].nextInterval,"ss"==b||"mm"==b||"hh"==b?d="00"+e[b]+""+d:"DD"==b&&(d="0"+e[b]+""+d);":"==d.charAt(d.length-1)&&(d=d.substring(0,d.length-1));return d};
AmCharts.formatNumber=function(a,b,d,e,f){a=AmCharts.roundTo(a,b.precision);isNaN(d)&&(d=b.precision);var g=b.decimalSeparator,b=b.thousandsSeparator,h=0>a?"-":"",a=Math.abs(a),i=a.toString(),j=!1;-1!=i.indexOf("e")&&(j=!0);0<=d&&(0!=a&&!j)&&(i=AmCharts.toFixed(a,d));if(j)j=i;else{for(var i=i.split("."),j="",k=i[0].toString(),l=k.length;0<=l;l-=3)j=l!=k.length?0!=l?k.substring(l-3,l)+b+j:k.substring(l-3,l)+j:k.substring(l-3,l);void 0!=i[1]&&(j=j+g+i[1]);void 0!=d&&(0<d&&"0"!=j)&&(j=AmCharts.addZeroes(j,
g,d))}j=h+j;""==h&&(!0==e&&0!=a)&&(j="+"+j);!0==f&&(j+="%");return j};AmCharts.addZeroes=function(a,b,d){a=a.split(b);void 0==a[1]&&0<d&&(a[1]="0");return a[1].length<d?(a[1]+="0",AmCharts.addZeroes(a[0]+b+a[1],b,d)):void 0!=a[1]?a[0]+b+a[1]:a[0]};
AmCharts.scientificToNormal=function(a){var b,a=a.toString().split("e");if("-"==a[1].substr(0,1)){b="0.";for(var d=0;d<Math.abs(Number(a[1]))-1;d++)b+="0";b+=a[0].split(".").join("")}else{var e=0;b=a[0].split(".");b[1]&&(e=b[1].length);b=a[0].split(".").join("");for(d=0;d<Math.abs(Number(a[1]))-e;d++)b+="0"}return b};
AmCharts.toScientific=function(a,b){if(0==a)return"0";var d=Math.floor(Math.log(Math.abs(a))*Math.LOG10E);Math.pow(10,d);mantissa=mantissa.toString().split(".").join(b);return mantissa.toString()+"e"+d};AmCharts.randomColor=function(){function a(){return Math.floor(256*Math.random()).toString(16)}return"#"+a()+a()+a()};
AmCharts.hitTest=function(a,b,d){var e=!1,f=a.x,g=a.x+a.width,h=a.y,i=a.y+a.height,j=AmCharts.isInRectangle;e||(e=j(f,h,b));e||(e=j(f,i,b));e||(e=j(g,h,b));e||(e=j(g,i,b));!e&&!0!=d&&(e=AmCharts.hitTest(b,a,!0));return e};AmCharts.isInRectangle=function(a,b,d){return a>=d.x-5&&a<=d.x+d.width+5&&b>=d.y-5&&b<=d.y+d.height+5?!0:!1};AmCharts.isPercents=function(a){if(-1!=String(a).indexOf("%"))return!0};AmCharts.dayNames="Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" ");
AmCharts.shortDayNames="Sun Mon Tue Wed Thu Fri Sat".split(" ");AmCharts.monthNames="January February March April May June July August September October November December".split(" ");AmCharts.shortMonthNames="Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" ");
AmCharts.formatDate=function(a,b){var d,e,f,g,h,i,j,k;AmCharts.useUTC?(d=a.getUTCFullYear(),e=a.getUTCMonth(),f=a.getUTCDate(),g=a.getUTCDay(),h=a.getUTCHours(),i=a.getUTCMinutes(),j=a.getUTCSeconds(),k=a.getUTCMilliseconds()):(d=a.getFullYear(),e=a.getMonth(),f=a.getDate(),g=a.getDay(),h=a.getHours(),i=a.getMinutes(),j=a.getSeconds(),k=a.getMilliseconds());var l=String(d).substr(2,2),m=e+1;9>e&&(m="0"+m);var r=f;10>f&&(r="0"+f);var n="0"+g,q=h;24==q&&(q=0);var p=q;10>p&&(p="0"+p);b=b.replace(/JJ/g,
p);b=b.replace(/J/g,q);q=h;0==q&&(q=24);p=q;10>p&&(p="0"+p);b=b.replace(/HH/g,p);b=b.replace(/H/g,q);q=h;11<q&&(q-=12);p=q;10>p&&(p="0"+p);b=b.replace(/KK/g,p);b=b.replace(/K/g,q);q=h;0==q&&(q=12);12<q&&(q-=12);p=q;10>p&&(p="0"+p);b=b.replace(/LL/g,p);b=b.replace(/L/g,q);q=i;10>q&&(q="0"+q);b=b.replace(/NN/g,q);b=b.replace(/N/g,i);i=j;10>i&&(i="0"+i);b=b.replace(/SS/g,i);b=b.replace(/S/g,j);j=k;10>j&&(j="00"+j);100>j&&(j="0"+j);i=k;10>i&&(i="00"+i);b=b.replace(/QQQ/g,j);b=b.replace(/QQ/g,i);b=b.replace(/Q/g,
k);b=12>h?b.replace(/A/g,"am"):b.replace(/A/g,"pm");b=b.replace(/YYYY/g,"@IIII@");b=b.replace(/YY/g,"@II@");b=b.replace(/MMMM/g,"@XXXX@");b=b.replace(/MMM/g,"@XXX@");b=b.replace(/MM/g,"@XX@");b=b.replace(/M/g,"@X@");b=b.replace(/DD/g,"@RR@");b=b.replace(/D/g,"@R@");b=b.replace(/EEEE/g,"@PPPP@");b=b.replace(/EEE/g,"@PPP@");b=b.replace(/EE/g,"@PP@");b=b.replace(/E/g,"@P@");b=b.replace(/@IIII@/g,d);b=b.replace(/@II@/g,l);b=b.replace(/@XXXX@/g,AmCharts.monthNames[e]);b=b.replace(/@XXX@/g,AmCharts.shortMonthNames[e]);
b=b.replace(/@XX@/g,m);b=b.replace(/@X@/g,e+1);b=b.replace(/@RR@/g,r);b=b.replace(/@R@/g,f);b=b.replace(/@PPPP@/g,AmCharts.dayNames[g]);b=b.replace(/@PPP@/g,AmCharts.shortDayNames[g]);b=b.replace(/@PP@/g,n);return b=b.replace(/@P@/g,g)};AmCharts.findPosX=function(a){var b=a.offsetLeft;if(a.offsetParent)for(;a=a.offsetParent;)b+=a.offsetLeft,a!=document.body&&a!=document.documentElement&&(b-=a.scrollLeft);return b};
AmCharts.findPosY=function(a){var b=a.offsetTop;if(a.offsetParent)for(;a=a.offsetParent;)b+=a.offsetTop,a!=document.body&&a!=document.documentElement&&(b-=a.scrollTop);return b};AmCharts.findIfFixed=function(a){if(a.offsetParent)for(;a=a.offsetParent;)if("fixed"==AmCharts.getStyle(a,"position"))return!0;return!1};AmCharts.findIfAuto=function(a){return a.style&&"auto"==AmCharts.getStyle(a,"overflow")?!0:a.parentNode?AmCharts.findIfAuto(a.parentNode):!1};
AmCharts.findScrollLeft=function(a,b){a.scrollLeft&&(b+=a.scrollLeft);return a.parentNode?AmCharts.findScrollLeft(a.parentNode,b):b};AmCharts.findScrollTop=function(a,b){a.scrollTop&&(b+=a.scrollTop);return a.parentNode?AmCharts.findScrollTop(a.parentNode,b):b};AmCharts.formatValue=function(a,b,d,e,f,g,h,i){if(b){void 0==f&&(f="");for(var j=0;j<d.length;j++){var k=d[j],l=b[k];void 0!=l&&(l=g?AmCharts.addPrefix(l,i,h,e):AmCharts.formatNumber(l,e),a=a.replace(RegExp("\\[\\["+f+""+k+"\\]\\]","g"),l))}}return a};
AmCharts.formatDataContextValue=function(a,b){if(a)for(var d=a.match(/\[\[.*?\]\]/g),e=0;e<d.length;e++){var f=d[e],f=f.substr(2,f.length-4);void 0!=b[f]&&(a=a.replace(RegExp("\\[\\["+f+"\\]\\]","g"),b[f]))}return a};AmCharts.massReplace=function(a,b){for(var d in b){var e=b[d];void 0==e&&(e="");a=a.replace(d,e)}return a};AmCharts.cleanFromEmpty=function(a){return a.replace(/\[\[[^\]]*\]\]/g,"")};
AmCharts.addPrefix=function(a,b,d,e){var f=AmCharts.formatNumber(a,e),g="",h;if(0==a)return"0";0>a&&(g="-");a=Math.abs(a);if(1<a)for(h=b.length-1;-1<h;h--){if(a>=b[h].number){a/=b[h].number;e=Number(e.precision);1>e&&(e=1);a=AmCharts.roundTo(a,e);f=g+""+a+""+b[h].prefix;break}}else for(h=0;h<d.length;h++)if(a<=d[h].number){a/=d[h].number;e=Math.abs(Math.round(Math.log(a)*Math.LOG10E));a=AmCharts.roundTo(a,e);f=g+""+a+""+d[h].prefix;break}return f};AmCharts.remove=function(a){a&&a.remove()};
AmCharts.copyProperties=function(a,b){for(var d in a)"events"!=d&&(void 0!=a[d]&&"function"!=typeof a[d])&&(b[d]=a[d])};AmCharts.recommended=function(){var a="js";document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")||swfobject&&swfobject.hasFlashPlayerVersion("8")&&(a="flash");return a};AmCharts.getEffect=function(a){">"==a&&(a="easeOutSine");"<"==a&&(a="easeInSine");"elastic"==a&&(a="easeOutElastic");return a};
AmCharts.extend=function(a,b){for(var d in b)void 0==a[d]&&(a[d]=b[d])};AmCharts.fixNewLines=function(a){9>AmCharts.IEversion&&0<AmCharts.IEversion&&(a=AmCharts.massReplace(a,{"\n":"\r"}));return a};AmCharts.Bezier=AmCharts.Class({construct:function(a,b,d,e,f,g,h,i,j,k){"object"==typeof h&&(h=h[0]);"object"==typeof i&&(i=i[0]);g={fill:h,"fill-opacity":i,"stroke-width":g};void 0!=j&&0<j&&(g["stroke-dasharray"]=j);isNaN(f)||(g["stroke-opacity"]=f);e&&(g.stroke=e);e="M"+Math.round(b[0])+","+Math.round(d[0]);f=[];for(j=0;j<b.length;j++)f.push({x:Number(b[j]),y:Number(d[j])});1<f.length&&(b=this.interpolate(f),e+=this.drawBeziers(b));k?e+=k:AmCharts.VML||(e+="M0,0 L0,0");this.path=a.path(e).attr(g)},
interpolate:function(a){var b=[];b.push({x:a[0].x,y:a[0].y});var d=a[1].x-a[0].x,e=a[1].y-a[0].y,f=AmCharts.bezierX,g=AmCharts.bezierY;b.push({x:a[0].x+d/f,y:a[0].y+e/g});for(var h=1;h<a.length-1;h++){var i=a[h-1],j=a[h],e=a[h+1],d=e.x-j.x,e=e.y-i.y,i=j.x-i.x;i>d&&(i=d);b.push({x:j.x-i/f,y:j.y-e/g});b.push({x:j.x,y:j.y});b.push({x:j.x+i/f,y:j.y+e/g})}e=a[a.length-1].y-a[a.length-2].y;d=a[a.length-1].x-a[a.length-2].x;b.push({x:a[a.length-1].x-d/f,y:a[a.length-1].y-e/g});b.push({x:a[a.length-1].x,
y:a[a.length-1].y});return b},drawBeziers:function(a){for(var b="",d=0;d<(a.length-1)/3;d++)b+=this.drawBezierMidpoint(a[3*d],a[3*d+1],a[3*d+2],a[3*d+3]);return b},drawBezierMidpoint:function(a,b,d,e){var f=Math.round,g=this.getPointOnSegment(a,b,0.75),h=this.getPointOnSegment(e,d,0.75),i=(e.x-a.x)/16,j=(e.y-a.y)/16,k=this.getPointOnSegment(a,b,0.375),a=this.getPointOnSegment(g,h,0.375);a.x-=i;a.y-=j;b=this.getPointOnSegment(h,g,0.375);b.x+=i;b.y+=j;d=this.getPointOnSegment(e,d,0.375);i=this.getMiddle(k,
a);g=this.getMiddle(g,h);h=this.getMiddle(b,d);k=" Q"+f(k.x)+","+f(k.y)+","+f(i.x)+","+f(i.y);k+=" Q"+f(a.x)+","+f(a.y)+","+f(g.x)+","+f(g.y);k+=" Q"+f(b.x)+","+f(b.y)+","+f(h.x)+","+f(h.y);return k+=" Q"+f(d.x)+","+f(d.y)+","+f(e.x)+","+f(e.y)},getMiddle:function(a,b){return{x:(a.x+b.x)/2,y:(a.y+b.y)/2}},getPointOnSegment:function(a,b,d){return{x:a.x+(b.x-a.x)*d,y:a.y+(b.y-a.y)*d}}});AmCharts.Cuboid=AmCharts.Class({construct:function(a,b,d,e,f,g,h,i,j,k,l,m,r){this.set=a.set();this.container=a;this.h=Math.round(d);this.w=Math.round(b);this.dx=e;this.dy=f;this.colors=g;this.alpha=h;this.bwidth=i;this.bcolor=j;this.balpha=k;this.colors=g;r?0>b&&0==l&&(l=180):0>d&&270==l&&(l=90);this.gradientRotation=l;0==e&&0==f&&(this.cornerRadius=m);this.draw()},draw:function(){var a=this.set;a.clear();var b=this.container,d=this.w,e=this.h,f=this.dx,g=this.dy,h=this.colors,i=this.alpha,j=this.bwidth,
k=this.bcolor,l=this.balpha,m=this.gradientRotation,r=this.cornerRadius,n=h,q=h;"object"==typeof h&&(n=h[0],q=h[h.length-1]);if(0<f||0<g){var p=q,q=AmCharts.adjustLuminosity(n,-0.2),q=AmCharts.adjustLuminosity(n,-0.2),s=AmCharts.polygon(b,[0,f,d+f,d,0],[0,g,g,0,0],q,i,0,0,0,m);if(0<l)var t=AmCharts.line(b,[0,f,d+f],[0,g,g],k,l,j);var u=AmCharts.polygon(b,[0,0,d,d,0],[0,e,e,0,0],q,i,0,0,0,0,m);u.translate(f,g);if(0<l)var x=AmCharts.line(b,[f,f],[g,g+e],k,1,j);var z=AmCharts.polygon(b,[0,0,f,f,0],[0,
e,e+g,g,0],q,i,0,0,0,m),y=AmCharts.polygon(b,[d,d,d+f,d+f,d],[0,e,e+g,g,0],q,i,0,0,0,m);if(0<l)var v=AmCharts.line(b,[d,d+f,d+f,d],[0,g,e+g,e],k,l,j);q=AmCharts.adjustLuminosity(p,0.2);p=AmCharts.polygon(b,[0,f,d+f,d,0],[e,e+g,e+g,e,e],q,i,0,0,0,m);if(0<l)var C=AmCharts.line(b,[0,f,d+f],[e,e+g,e+g],k,l,j)}1>Math.abs(e)&&(e=0);1>Math.abs(d)&&(d=0);b=0==e?AmCharts.line(b,[0,d],[0,0],n,l,j):0==d?AmCharts.line(b,[0,0],[0,e],n,l,j):0<r?AmCharts.rect(b,d,e,h,i,j,k,l,r,m):AmCharts.polygon(b,[0,0,d,d,0],
[0,e,e,0,0],h,i,j,k,l,m);e=0>e?[s,t,u,x,z,y,v,p,C,b]:[p,C,u,x,z,y,s,t,v,b];for(s=0;s<e.length;s++)(t=e[s])&&a.push(t)},width:function(a){this.w=a;this.draw()},height:function(a){this.h=a;this.draw()},animateHeight:function(a,b){var d=this;d.easing=b;d.totalFrames=1E3*a/AmCharts.updateRate;d.rh=d.h;d.frame=0;d.height(1);setTimeout(function(){d.updateHeight.call(d)},AmCharts.updateRate)},updateHeight:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b&&(b=a.easing(0,a.frame,1,a.rh-1,b),a.height(b),
setTimeout(function(){a.updateHeight.call(a)},AmCharts.updateRate))},animateWidth:function(a,b){var d=this;d.easing=b;d.totalFrames=1E3*a/AmCharts.updateRate;d.rw=d.w;d.frame=0;d.width(1);setTimeout(function(){d.updateWidth.call(d)},AmCharts.updateRate)},updateWidth:function(){var a=this;a.frame++;var b=a.totalFrames;a.frame<=b&&(b=a.easing(0,a.frame,1,a.rw-1,b),a.width(b),setTimeout(function(){a.updateWidth.call(a)},AmCharts.updateRate))}});AmCharts.AmLegend=AmCharts.Class({construct:function(){this.createEvents("rollOverMarker","rollOverItem","rollOutMarker","rollOutItem","showItem","hideItem","clickMarker","rollOverItem","rollOutItem","clickLabel");this.position="bottom";this.borderColor=this.color="#000000";this.borderAlpha=0;this.markerLabelGap=5;this.verticalGap=10;this.align="left";this.horizontalGap=0;this.spacing=10;this.markerDisabledColor="#AAB3B3";this.markerType="square";this.markerSize=16;this.markerBorderAlpha;this.markerBorderThickness=
1;this.marginBottom=this.marginTop=0;this.marginLeft=this.marginRight=20;this.autoMargins=!0;this.valueWidth=50;this.switchable=!0;this.switchType="x";this.switchColor="#FFFFFF";this.rollOverColor="#CC0000";this.selectedColor;this.reversedOrder=!1;this.labelText="[[title]]";this.valueText="[[value]]";this.useMarkerColorForLabels=!1;this.rollOverGraphAlpha=1;this.textClickEnabled=!1;this.equalWidths=!0;this.dateFormat="DD-MM-YYYY";this.backgroundColor="#FFFFFF";this.backgroundAlpha=0;this.ly;this.lx;
this.showEntries=!0},setData:function(a){this.data=a;this.invalidateSize()},invalidateSize:function(){this.destroy();this.entries=[];this.valueLabels=[];AmCharts.ifArray(this.data)&&this.drawLegend()},drawLegend:function(){var a=this.chart,b=this.position,d=this.width,e=a.divRealWidth,f=a.divRealHeight,g=this.div,h=this.data;isNaN(this.fontSize)&&(this.fontSize=a.fontSize);if("right"==b||"left"==b)this.maxColumns=1,this.marginLeft=this.marginRight=10;else if(this.autoMargins){this.marginRight=a.marginRight;
this.marginLeft=a.marginLeft;var i=a.autoMarginOffset;"bottom"==b?(this.marginBottom=i,this.marginTop=0):(this.marginTop=i,this.marginBottom=0)}this.divWidth=b=void 0!=d?AmCharts.toCoordinate(d,e):a.realWidth;g.style.width=b+"px";this.container=new AmCharts.AmDraw(g,b,f);this.lx=0;this.ly=8;f=this.markerSize;f>this.fontSize&&(this.ly=f/2-1);0<f&&(this.lx+=f+this.markerLabelGap);this.titleWidth=0;if(f=this.title)a=AmCharts.text(this.container,f,this.color,a.fontFamily,this.fontSize,"start",!0),a.translate(0,
this.marginTop+this.verticalGap+this.ly+1),a=a.getBBox(),this.titleWidth=a.width+15,this.titleHeight=a.height+6;this.index=this.maxLabelWidth=0;if(this.showEntries){for(a=0;a<h.length;a++)this.createEntry(h[a]);for(a=this.index=0;a<h.length;a++)this.createValue(h[a])}this.arrangeEntries();this.updateValues()},arrangeEntries:function(){var a=this.position,b=this.marginLeft+this.titleWidth,d=this.marginRight,e=this.marginTop,f=this.marginBottom,g=this.horizontalGap,h=this.div,i=this.divWidth,j=this.maxColumns,
k=this.verticalGap,l=this.spacing,m=i-d-b,r=0,n=0,q=this.container,p=q.set();this.set=p;q=q.set();p.push(q);for(var s=this.entries,t=0;t<s.length;t++){var u=s[t].getBBox(),x=u.width;x>r&&(r=x);u=u.height;u>n&&(n=u)}for(var z=x=0,y=g,t=0;t<s.length;t++){var v=s[t];this.reversedOrder&&(v=s[s.length-t-1]);var u=v.getBBox(),C;this.equalWidths?C=g+z*(r+l+this.markerLabelGap):(C=y,y=y+u.width+g+l);C+u.width>m&&0<t&&(x++,z=0,C=g,y=C+u.width+g+l);v.translate(C,(n+k)*x);z++;!isNaN(j)&&z>=j&&(z=0,x++);q.push(v)}u=
q.getBBox();j=u.height+2*k-1;"left"==a||"right"==a?(i=u.width+2*g,h.style.width=i+b+d+"px"):i=i-b-d-1;d=AmCharts.polygon(this.container,[0,i,i,0],[0,0,j,j],this.backgroundColor,this.backgroundAlpha,1,this.borderColor,this.borderAlpha);p.push(d);p.translate(b,e);d.toBack();b=g;if("top"==a||"bottom"==a||"absolute"==a)"center"==this.align?b=g+(i-u.width)/2:"right"==this.align&&(b=g+i-u.width);q.translate(b,k+1);this.titleHeight>j&&(j=this.titleHeight);a=j+e+f+1;0>a&&(a=0);h.style.height=Math.round(a)+
"px"},createEntry:function(a){if(!1!==a.visibleInLegend){var b=this.chart,d=a.markerType;d||(d=this.markerType);var e=a.color,f=a.alpha;a.legendKeyColor&&(e=a.legendKeyColor());a.legendKeyAlpha&&(f=a.legendKeyAlpha());!0==a.hidden&&(e=this.markerDisabledColor);var g=this.createMarker(d,e,f);this.addListeners(g,a);f=this.container.set([g]);this.switchable&&f.setAttr("cursor","pointer");var h=this.switchType;if(h){var i;i="x"==h?this.createX():this.createV();i.dItem=a;!0!=a.hidden?"x"==h?i.hide():i.show():
"x"!=h&&i.hide();this.switchable||i.hide();this.addListeners(i,a);a.legendSwitch=i;f.push(i)}h=this.color;a.showBalloon&&(this.textClickEnabled&&void 0!=this.selectedColor)&&(h=this.selectedColor);this.useMarkerColorForLabels&&(h=e);!0==a.hidden&&(h=this.markerDisabledColor);e=AmCharts.massReplace(this.labelText,{"[[title]]":a.title});i=this.fontSize;var j=this.markerSize;if(g&&j<i){var k=0;if("bubble"==d||"circle"==d)k=j/2;g.translate(k,k+this.ly-i/2+(i+2-j)/2)}if(e){var l=AmCharts.text(this.container,
e,h,b.fontFamily,i,"start");l.translate(this.lx,this.ly);f.push(l);b=l.getBBox().width;this.maxLabelWidth<b&&(this.maxLabelWidth=b)}this.entries[this.index]=f;a.legendEntry=this.entries[this.index];a.legendLabel=l;this.index++}},addListeners:function(a,b){var d=this;a&&a.mouseover(function(){d.rollOverMarker(b)}).mouseout(function(){d.rollOutMarker(b)}).click(function(){d.clickMarker(b)})},rollOverMarker:function(a){this.switchable&&this.dispatch("rollOverMarker",a);this.dispatch("rollOverItem",a)},
rollOutMarker:function(a){this.switchable&&this.dispatch("rollOutMarker",a);this.dispatch("rollOutItem",a)},clickMarker:function(a){this.switchable?!0==a.hidden?this.dispatch("showItem",a):this.dispatch("hideItem",a):this.textClickEnabled&&this.dispatch("clickMarker",a)},rollOverLabel:function(a){a.hidden||(this.textClickEnabled&&a.legendLabel&&a.legendLabel.attr({fill:this.rollOverColor}),this.dispatch("rollOverItem",a))},rollOutLabel:function(a){if(!a.hidden){if(this.textClickEnabled&&a.legendLabel){var b=
this.color;void 0!=this.selectedColor&&a.showBalloon&&(b=this.selectedColor);this.useMarkerColorForLabels&&(b=a.lineColor,void 0==b&&(b=a.color));a.legendLabel.attr({fill:b})}this.dispatch("rollOutItem",a)}},clickLabel:function(a){this.textClickEnabled?a.hidden||this.dispatch("clickLabel",a):this.switchable&&(!0==a.hidden?this.dispatch("showItem",a):this.dispatch("hideItem",a))},dispatch:function(a,b){this.fire(a,{type:a,dataItem:b,target:this,chart:this.chart})},createValue:function(a){var b=this,
d=b.fontSize;if(!1!==a.visibleInLegend){var e=b.maxLabelWidth;b.equalWidths||(b.valueAlign="left");"left"==b.valueAlign&&(e=a.legendEntry.getBBox().width);var f=e;if(b.valueText){var g=b.color;b.useMarkerColorForLabels&&(g=a.color);!0==a.hidden&&(g=b.markerDisabledColor);var h=b.valueText,e=e+b.lx+b.markerLabelGap+b.valueWidth,i="end";"left"==b.valueAlign&&(e-=b.valueWidth,i="start");g=AmCharts.text(b.container,h,g,b.chart.fontFamily,d,i);g.translate(e,b.ly);b.entries[b.index].push(g);f+=b.valueWidth+
b.markerLabelGap;g.dItem=a;b.valueLabels.push(g)}b.index++;g=b.markerSize;g<d+7&&(g=d+7,AmCharts.VML&&(g+=3));d=b.container.rect(b.markerSize+b.markerLabelGap,0,f,g,0,0).attr({stroke:"none",fill:"#FFFFFF","fill-opacity":0.005});d.dItem=a;b.entries[b.index-1].push(d);d.mouseover(function(){b.rollOverLabel(a)}).mouseout(function(){b.rollOutLabel(a)}).click(function(){b.clickLabel(a)})}},createV:function(){var a=this.markerSize;return AmCharts.polygon(this.container,[a/5,a/2,a-a/5,a/2],[a/3,a-a/5,a/
5,a/1.7],this.switchColor)},createX:function(){var a=this.markerSize-3,b={stroke:this.switchColor,"stroke-width":3},d=this.container,e=AmCharts.line(d,[3,a],[3,a]).attr(b),a=AmCharts.line(d,[3,a],[a,3]).attr(b);return this.container.set([e,a])},createMarker:function(a,b,d){var e=this.markerSize,f=this.container,g,h=this.markerBorderColor;h||(h=b);var i=this.markerBorderThickness,j=this.markerBorderAlpha;switch(a){case "square":g=AmCharts.polygon(f,[0,e,e,0],[0,0,e,e],b,d,i,h,j);break;case "circle":g=
AmCharts.circle(f,e/2,b,d,i,h,j);g.translate(e/2,e/2);break;case "line":g=AmCharts.line(f,[0,e],[e/2,e/2],b,d,i);break;case "dashedLine":g=AmCharts.line(f,[0,e],[e/2,e/2],b,d,i,3);break;case "triangleUp":g=AmCharts.polygon(f,[0,e/2,e,e],[e,0,e,e],b,d,i,h,j);break;case "triangleDown":g=AmCharts.polygon(f,[0,e/2,e,e],[0,e,0,0],b,d,i,h,j);break;case "bubble":g=AmCharts.circle(f,e/2,b,d,i,h,j,!0),g.translate(e/2,e/2)}return g},validateNow:function(){this.invalidateSize()},updateValues:function(){for(var a=
this.valueLabels,b=this.chart,d=0;d<a.length;d++){var e=a[d],f=e.dItem;if(void 0!=f.type){var g=f.currentDataItem;if(g){var h=this.valueText;f.legendValueText&&(h=f.legendValueText);f=h;f=b.formatString(f,g);e.text(f)}else e.text(" ")}else g=b.formatString(this.valueText,f),e.text(g)}},renderFix:function(){if(!AmCharts.VML){var a=this.container;a&&a.renderFix()}},destroy:function(){this.div.innerHTML="";AmCharts.remove(this.set)}});AmCharts.AmBalloon=AmCharts.Class({construct:function(){this.enabled=!0;this.fillColor="#CC0000";this.fillAlpha=1;this.borderThickness=2;this.borderColor="#FFFFFF";this.borderAlpha=1;this.cornerRadius=6;this.maximumWidth=220;this.horizontalPadding=8;this.verticalPadding=5;this.pointerWidth=10;this.pointerOrientation="V";this.color="#FFFFFF";this.textShadowColor="#000000";this.adjustBorderColor=!1;this.showBullet=!0;this.show=this.follow=!1;this.bulletSize=3;this.textAlign="middle"},draw:function(){var a=
this.pointToX,b=this.pointToY,d=this.textAlign;if(!isNaN(a)){var e=this.chart,f=e.container,g=this.set;AmCharts.remove(g);AmCharts.remove(this.pointer);this.set=g=f.set();e.balloonsSet.push(g);if(this.show){var h=this.l,i=this.t,j=this.r,k=this.b,l=this.textShadowColor;this.color==l&&(l=void 0);var m=this.balloonColor,r=this.fillColor,n=this.borderColor;void 0!=m&&(this.adjustBorderColor?n=m:r=m);var q=this.horizontalPadding,p=this.verticalPadding,m=this.pointerWidth,s=this.pointerOrientation,t=this.cornerRadius,
u=e.fontFamily,x=this.fontSize;void 0==x&&(x=e.fontSize);e=AmCharts.text(f,this.text,this.color,u,x,d);g.push(e);if(void 0!=l){var z=AmCharts.text(f,this.text,l,u,x,d,!1,0.4);g.push(z)}u=e.getBBox();l=u.height+2*p;p=u.width+2*q;window.opera&&(l+=2);var y,x=x/2+5;switch(d){case "middle":y=p/2;break;case "left":y=q;break;case "right":y=p-q}e.translate(y,x);z&&z.translate(y+1,x+1);"H"!=s?(y=a-p/2,d=b<i+l+10&&"down"!=s?b+m:b-l-m):(2*m>l&&(m=l/2),d=b-l/2,y=a<h+(j-h)/2?a+m:a-p-m);d+l>=k&&(d=k-l);d<i&&(d=
i);y<h&&(y=h);y+p>j&&(y=j-p);0<t||0==m?(n=AmCharts.rect(f,p,l,r,this.fillAlpha,this.borderThickness,n,this.borderAlpha,this.cornerRadius),this.showBullet&&(f=AmCharts.circle(f,this.bulletSize,r,this.fillAlpha),f.translate(a,b),this.pointer=f)):(k=[],t=[],"H"!=s?(h=a-y,h>p-m&&(h=p-m),h<m&&(h=m),k=[0,h-m,a-y,h+m,p,p,0,0],t=b<i+l+10&&"down"!=s?[0,0,b-d,0,0,l,l,0]:[l,l,b-d,l,l,0,0,l]):(i=b-d,i>l-m&&(i=l-m),i<m&&(i=m),t=[0,i-m,b-d,i+m,l,l,0,0],k=a<h+(j-h)/2?[0,0,a-y,0,0,p,p,0]:[p,p,a-y,p,p,0,0,p]),n=AmCharts.polygon(f,
k,t,r,this.fillAlpha,this.borderThickness,n,this.borderAlpha));g.push(n);n.toFront();z&&z.toFront();e.toFront();g.translate(y,d);u=n.getBBox();this.bottom=d+u.y+u.height;this.yPos=u.y+d}}},followMouse:function(){if(this.follow&&this.show){var a=this.chart.mouseX,b=this.chart.mouseY-3;this.pointToX=a;this.pointToY=b;if(a!=this.previousX||b!=this.previousY)if(this.previousX=a,this.previousY=b,0==this.cornerRadius)this.draw();else{var d=this.set;if(d){var e=d.getBBox(),a=a-e.width/2,f=b-e.height-10;
a<this.l&&(a=this.l);a>this.r-e.width&&(a=this.r-e.width);f<this.t&&(f=b+10);d.translate(a,f)}}}},changeColor:function(a){this.balloonColor=a},setBounds:function(a,b,d,e){this.l=a;this.t=b;this.r=d;this.b=e},showBalloon:function(a){this.text=a;this.show=!0;this.draw()},hide:function(){this.follow=this.show=!1;this.destroy()},setPosition:function(a,b,d){this.pointToX=a;this.pointToY=b;d&&(a!=this.previousX||b!=this.previousY)&&this.draw();this.previousX=a;this.previousY=b},followCursor:function(a){var b=
this;(b.follow=a)?(b.pShowBullet=b.showBullet,b.showBullet=!1):void 0!=b.pShowBullet&&(b.showBullet=b.pShowBullet);clearInterval(b.interval);var d=b.chart.mouseX,e=b.chart.mouseY;!isNaN(d)&&a&&(b.pointToX=d,b.pointToY=e-3,b.interval=setInterval(function(){b.followMouse.call(b)},40))},destroy:function(){clearInterval(this.interval);AmCharts.remove(this.set);AmCharts.remove(this.pointer)}});AmCharts.AmCoordinateChart=AmCharts.Class({inherits:AmCharts.AmChart,construct:function(){AmCharts.AmCoordinateChart.base.construct.call(this);this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem");this.plotAreaFillColors="#FFFFFF";this.plotAreaFillAlphas=0;this.plotAreaBorderColor="#000000";this.plotAreaBorderAlpha=0;this.startAlpha=1;this.startDuration=0;this.startEffect="elastic";this.sequencedAnimation=!0;this.colors="#FF6600 #FCD202 #B0DE09 #0D8ECF #2A0CD0 #CD0D74 #CC0000 #00CC00 #0000CC #DDDDDD #999999 #333333 #990000".split(" ");
this.balloonDateFormat="MMM DD, YYYY";this.valueAxes=[];this.graphs=[]},initChart:function(){AmCharts.AmCoordinateChart.base.initChart.call(this);this.createValueAxes();AmCharts.VML&&(this.startAlpha=1);var a=this.legend;a&&a.setData(this.graphs)},createValueAxes:function(){if(0==this.valueAxes.length){var a=new AmCharts.ValueAxis;this.addValueAxis(a)}},parseData:function(){this.processValueAxes();this.processGraphs()},parseSerialData:function(){AmCharts.AmSerialChart.base.parseData.call(this);var a=
this.graphs,b={},d=this.seriesIdField;d||(d=this.categoryField);this.chartData=[];var e=this.dataProvider;if(e){var f=!1;this.categoryAxis&&(f=this.categoryAxis.parseDates);if(f)var g=AmCharts.extractPeriod(this.categoryAxis.minPeriod),h=g.period,g=g.count;var i={};this.lookupTable=i;for(var j=0;j<e.length;j++){var k={},l=e[j],m=l[this.categoryField];k.category=String(m);i[l[d]]=k;f&&(m=new Date(m.getFullYear(),m.getMonth(),m.getDate(),m.getHours(),m.getMinutes(),m.getSeconds(),m.getMilliseconds()),
m=AmCharts.resetDateToMin(m,h,g),k.category=m,k.time=m.getTime());var r=this.valueAxes;k.axes={};k.x={};for(var n=0;n<r.length;n++){var q=r[n].id;k.axes[q]={};k.axes[q].graphs={};for(var p=0;p<a.length;p++){var m=a[p],s=m.id,t=m.periodValue;if(m.valueAxis.id==q){k.axes[q].graphs[s]={};var u={};u.index=j;m.dataProvider&&(l=b);u.values=this.processValues(l,m,t);this.processFields(m,u,l);u.category=k.category;u.serialDataItem=k;u.graph=m;k.axes[q].graphs[s]=u}}}this.chartData[j]=k}}for(b=0;b<a.length;b++)m=
a[b],m.dataProvider&&this.parseGraphData(m)},processValues:function(a,b,d){var e={},f=!1;if(("candlestick"==b.type||"ohlc"==b.type)&&""!=d)f=!0;var g=Number(a[b.valueField+d]);isNaN(g)||(e.value=g);f&&(d="Open");g=Number(a[b.openField+d]);isNaN(g)||(e.open=g);f&&(d="Close");g=Number(a[b.closeField+d]);isNaN(g)||(e.close=g);f&&(d="Low");g=Number(a[b.lowField+d]);isNaN(g)||(e.low=g);f&&(d="High");g=Number(a[b.highField+d]);isNaN(g)||(e.high=g);return e},parseGraphData:function(a){var b=a.dataProvider,
d=a.seriesIdField;d||(d=this.seriesIdField);d||(d=this.categoryField);for(var e=0;e<b.length;e++){var f=b[e],g=this.lookupTable[String(f[d])],h=a.valueAxis.id;g&&(h=g.axes[h].graphs[a.id],h.serialDataItem=g,h.values=this.processValues(f,a,a.periodValue),this.processFields(a,h,f))}},addValueAxis:function(a){a.chart=this;this.valueAxes.push(a);this.validateData()},removeValueAxesAndGraphs:function(){for(var a=this.valueAxes,b=a.length-1;-1<b;b--)this.removeValueAxis(a[b])},removeValueAxis:function(a){var b=
this.graphs,d;for(d=b.length-1;0<=d;d--){var e=b[d];e&&e.valueAxis==a&&this.removeGraph(e)}b=this.valueAxes;for(d=b.length-1;0<=d;d--)b[d]==a&&b.splice(d,1);this.validateData()},addGraph:function(a){this.graphs.push(a);this.chooseGraphColor(a,this.graphs.length-1);this.validateData()},removeGraph:function(a){for(var b=this.graphs,d=b.length-1;0<=d;d--)b[d]==a&&(b.splice(d,1),a.destroy());this.validateData()},processValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++){var d=a[b];d.chart=
this;d.id||(d.id="valueAxis"+b+"_"+(new Date).getTime());if(!0===this.usePrefixes||!1===this.usePrefixes)d.usePrefixes=this.usePrefixes}},processGraphs:function(){for(var a=this.graphs,b=0;b<a.length;b++){var d=a[b];d.chart=this;d.valueAxis||(d.valueAxis=this.valueAxes[0]);d.id||(d.id="graph"+b+"_"+(new Date).getTime())}},formatString:function(a,b){var d=b.graph,e=d.valueAxis;e.duration&&b.values.value&&(e=AmCharts.formatDuration(b.values.value,e.duration,"",e.durationUnits,e.maxInterval,e.numberFormatter),
a=a.split("[[value]]").join(e));a=AmCharts.massReplace(a,{"[[title]]":d.title,"[[description]]":b.description,"<br>":"\n"});a=AmCharts.fixNewLines(a);return a=AmCharts.cleanFromEmpty(a)},getBalloonColor:function(a,b){var d=a.lineColor,e=a.balloonColor,f=a.fillColors;"object"==typeof f?d=f[0]:void 0!=f&&(d=f);if(b.isNegative){var f=a.negativeLineColor,g=a.negativeFillColors;"object"==typeof g?f=g[0]:void 0!=g&&(f=g);void 0!=f&&(d=f)}void 0!=b.color&&(d=b.color);void 0==e&&(e=d);return e},getGraphById:function(a){return this.getObjById(this.graphs,
a)},getValueAxisById:function(a){return this.getObjById(this.valueAxes,a)},getObjById:function(a,b){for(var d,e=0;e<a.length;e++){var f=a[e];f.id==b&&(d=f)}return d},processFields:function(a,b,d){if(a.itemColors){var e=a.itemColors,f=b.index;b.color=f<e.length?e[f]:AmCharts.randomColor()}e="lineColor color alpha fillColors description bullet customBullet bulletSize bulletConfig url".split(" ");for(f=0;f<e.length;f++){var g=e[f],h=a[g+"Field"];h&&(h=d[h],AmCharts.isDefined(h)&&(b[g]=h))}b.dataContext=
d},chooseGraphColor:function(a,b){if(void 0==a.lineColor){var d;d=this.colors.length>b?this.colors[b]:AmCharts.randomColor();a.lineColor=d}},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var d=a.hidden,e=a.showBalloon;switch(b){case "clickMarker":e?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "clickLabel":e?this.hideGraphsBalloon(a):this.showGraphsBalloon(a);break;case "rollOverItem":d||this.highlightGraph(a);break;case "rollOutItem":d||this.unhighlightGraph();break;
case "hideItem":this.hideGraph(a);break;case "showItem":this.showGraph(a)}}},highlightGraph:function(a){var b=this.graphs,d,e=0.2;this.legend&&(e=this.legend.rollOverGraphAlpha);if(1!=e)for(d=0;d<b.length;d++){var f=b[d];f!=a&&f.changeOpacity(e)}},unhighlightGraph:function(){this.legend&&(alpha=this.legend.rollOverGraphAlpha);if(1!=alpha)for(var a=this.graphs,b=0;b<a.length;b++)a[b].changeOpacity(1)},showGraph:function(a){a.hidden=!1;this.dataChanged=!0;this.marginsUpdated=!1;this.initChart()},hideGraph:function(a){this.dataChanged=
!0;this.marginsUpdated=!1;a.hidden=!0;this.initChart()},hideGraphsBalloon:function(a){a.showBalloon=!1;this.updateLegend()},showGraphsBalloon:function(a){a.showBalloon=!0;this.updateLegend()},updateLegend:function(){this.legend&&this.legend.invalidateSize()},animateAgain:function(){var a=this.graphs;if(a)for(var b=0;b<a.length;b++)a[b].animationPlayed=!1}});AmCharts.AmRectangularChart=AmCharts.Class({inherits:AmCharts.AmCoordinateChart,construct:function(){AmCharts.AmRectangularChart.base.construct.call(this);this.createEvents("zoomed");this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=20;this.verticalPosition=this.horizontalPosition=this.depth3D=this.angle=0;this.heightMultiplier=this.widthMultiplier=1;this.zoomOutText="Show all";this.zbSet;this.zoomOutButton={backgroundColor:"#b2e1ff",backgroundAlpha:1};this.trendLines=[];this.autoMargins=
!0;this.marginsUpdated=!1;this.autoMarginOffset=10},initChart:function(){AmCharts.AmRectangularChart.base.initChart.call(this);this.updateDxy();var a=!0;!this.marginsUpdated&&this.autoMargins&&(this.resetMargins(),a=!1);this.updateMargins();this.updatePlotArea();this.updateScrollbars();this.updateTrendLines();this.updateChartCursor();this.updateValueAxes();a&&(this.scrollbarOnly||this.updateGraphs())},drawChart:function(){AmCharts.AmRectangularChart.base.drawChart.call(this);this.drawPlotArea();if(AmCharts.ifArray(this.chartData)){var a=
this.chartCursor;a&&a.draw();a=this.zoomOutText;""!=a&&a&&this.drawZoomOutButton()}},resetMargins:function(){var a={};if("serial"==this.chartType){for(var b=this.valueAxes,d=0;d<b.length;d++){var e=b[d];e.ignoreAxisWidth||(e.setOrientation(this.rotate),e.fixAxisPosition(),a[e.position]=!0)}if((d=this.categoryAxis)&&!d.ignoreAxisWidth)d.setOrientation(!this.rotate),d.fixAxisPosition(),d.fixAxisPosition(),a[d.position]=!0}else{e=this.xAxes;b=this.yAxes;for(d=0;d<e.length;d++){var f=e[d];f.ignoreAxisWidth||
(f.setOrientation(!0),f.fixAxisPosition(),a[f.position]=!0)}for(d=0;d<b.length;d++)e=b[d],e.ignoreAxisWidth||(e.setOrientation(!1),e.fixAxisPosition(),a[e.position]=!0)}a.left&&(this.marginLeft=0);a.right&&(this.marginRight=0);a.top&&(this.marginTop=0);a.bottom&&(this.marginBottom=0);this.fixMargins=a},measureMargins:function(){var a=this.valueAxes,b,d=this.autoMarginOffset,e=this.fixMargins,f=this.realWidth,g=this.realHeight,h=d,i=d,j=f-d;b=g-d;for(var k=0;k<a.length;k++)b=this.getAxisBounds(a[k],
h,j,i,b),h=b.l,j=b.r,i=b.t,b=b.b;if(a=this.categoryAxis)b=this.getAxisBounds(a,h,j,i,b),h=b.l,j=b.r,i=b.t,b=b.b;e.left&&h<d&&(this.marginLeft=Math.round(-h+d));e.right&&j>f-d&&(this.marginRight=Math.round(j-f+d));e.top&&i<d&&(this.marginTop=Math.round(this.marginTop-i+d+this.titleHeight));e.bottom&&b>g-d&&(this.marginBottom=Math.round(b-g+d));this.animateAgain();this.initChart()},getAxisBounds:function(a,b,d,e,f){if(!a.ignoreAxisWidth){var g=a.labelsSet,h=a.tickLength;a.inside&&(h=0);if(g)switch(g=
a.getBBox(),a.position){case "top":a=g.y;e>a&&(e=a);break;case "bottom":a=g.y+g.height;f<a&&(f=a);break;case "right":a=g.x+g.width+h+3;d<a&&(d=a);break;case "left":a=g.x-h,b>a&&(b=a)}}return{l:b,t:e,r:d,b:f}},drawZoomOutButton:function(){var a=this,b=a.container.set();a.zoomButtonSet.push(b);var d=a.color,e=a.fontSize,f=a.zoomOutButton;f&&(f.fontSize&&(e=f.fontSize),f.color&&(d=f.color));d=AmCharts.text(a.container,a.zoomOutText,d,a.fontFamily,e,"start");e=d.getBBox();d.translate(29,6+e.height/2);
f=AmCharts.rect(a.container,e.width+40,e.height+15,f.backgroundColor,f.backgroundAlpha);b.push(f);a.zbBG=f;void 0!=a.pathToImages&&(f=a.container.image(a.pathToImages+"lens.png",0,0,16,16),f.translate(7,e.height/2-1),f.toFront(),b.push(f));d.toFront();b.push(d);f=b.getBBox();b.translate(a.marginLeftReal+a.plotAreaWidth-f.width,a.marginTopReal);b.hide();b.mouseover(function(){a.rollOverZB()}).mouseout(function(){a.rollOutZB()}).click(function(){a.clickZB()}).touchstart(function(){a.rollOverZB()}).touchend(function(){a.rollOutZB();
a.clickZB()});for(f=0;f<b.length;f++)b[f].attr({cursor:"pointer"});a.zbSet=b},rollOverZB:function(){this.zbBG.show()},rollOutZB:function(){this.zbBG.hide()},clickZB:function(){this.zoomOut()},zoomOut:function(){this.updateScrollbar=!0;this.zoom()},drawPlotArea:function(){var a=this.dx,b=this.dy,d=this.marginLeftReal,e=this.marginTopReal,f=this.plotAreaWidth,g=this.plotAreaHeight,h=this.plotAreaFillColors,i=this.plotAreaFillAlphas,j=this.plotAreaBorderColor,k=this.plotAreaBorderAlpha;this.trendLinesSet.clipRect(d,
e,f,g);"object"==typeof i&&(i=i[0]);h=AmCharts.polygon(this.container,[0,f,f,0],[0,0,g,g],h,i,1,j,k,this.plotAreaGradientAngle);h.translate(d+a,e+b);this.set.push(h);0!=a&&0!=b&&(h=this.plotAreaFillColors,"object"==typeof h&&(h=h[0]),h=AmCharts.adjustLuminosity(h,-0.15),f=AmCharts.polygon(this.container,[0,a,f+a,f,0],[0,b,b,0,0],h,i,1,j,k),f.translate(d,e+g),this.set.push(f),a=AmCharts.polygon(this.container,[0,0,a,a,0],[0,g,g+b,b,0],h,i,1,j,k),a.translate(d,e),this.set.push(a))},updatePlotArea:function(){var a=
this.updateWidth()-1,b=this.updateHeight()-1,d=this.container;this.realWidth=a;this.realWidth=b;d&&this.container.setSize(a,b);a=a-this.marginLeftReal-this.marginRightReal-this.dx;b=b-this.marginTopReal-this.marginBottomReal;1>a&&(a=1);1>b&&(b=1);this.plotAreaWidth=Math.round(a);this.plotAreaHeight=Math.round(b)},updateDxy:function(){this.dx=this.depth3D*Math.cos(this.angle*Math.PI/180);this.dy=-this.depth3D*Math.sin(this.angle*Math.PI/180)},updateMargins:function(){var a=this.getTitleHeight();this.titleHeight=
a;this.marginTopReal=this.marginTop-this.dy+a;this.marginBottomReal=this.marginBottom;this.marginLeftReal=this.marginLeft;this.marginRightReal=this.marginRight},updateValueAxes:function(){for(var a=this.valueAxes,b=this.marginLeftReal,d=this.marginTopReal,e=this.plotAreaHeight,f=this.plotAreaWidth,g=0;g<a.length;g++){var h=a[g];h.axisRenderer=AmCharts.RecAxis;h.guideFillRenderer=AmCharts.RecFill;h.axisItemRenderer=AmCharts.RecItem;h.dx=this.dx;h.dy=this.dy;h.viW=f;h.viH=e;h.marginsChanged=!0;h.viX=
b;h.viY=d;this.updateObjectSize(h)}},updateObjectSize:function(a){a.width=this.plotAreaWidth*this.widthMultiplier;a.height=this.plotAreaHeight*this.heightMultiplier;a.x=this.marginLeftReal+this.horizontalPosition;a.y=this.marginTopReal+this.verticalPosition},updateGraphs:function(){for(var a=this.graphs,b=0;b<a.length;b++){var d=a[b];d.x=this.marginLeftReal+this.horizontalPosition;d.y=this.marginTopReal+this.verticalPosition;d.width=this.plotAreaWidth*this.widthMultiplier;d.height=this.plotAreaHeight*
this.heightMultiplier;d.index=b;d.dx=this.dx;d.dy=this.dy;d.rotate=this.rotate;d.chartType=this.chartType}},updateChartCursor:function(){var a=this.chartCursor;a&&(a.x=this.marginLeftReal,a.y=this.marginTopReal,a.width=this.plotAreaWidth,a.height=this.plotAreaHeight,a.chart=this)},updateScrollbars:function(){},addChartCursor:function(a){AmCharts.callMethod("destroy",[this.chartCursor]);a&&(this.listenTo(a,"changed",this.handleCursorChange),this.listenTo(a,"zoomed",this.handleCursorZoom));this.chartCursor=
a},removeChartCursor:function(){AmCharts.callMethod("destroy",[this.chartCursor]);this.chartCursor=null},zoomTrendLines:function(){for(var a=this.trendLines,b=0;b<a.length;b++){var d=a[b];d.valueAxis.recalculateToPercents?d.set&&d.set.hide():(d.x=this.marginLeftReal+this.horizontalPosition,d.y=this.marginTopReal+this.verticalPosition,d.draw())}},addTrendLine:function(a){this.trendLines.push(a)},removeTrendLine:function(a){for(var b=this.trendLines,d=b.length-1;0<=d;d--)b[d]==a&&b.splice(d,1)},adjustMargins:function(a,
b){var d=a.scrollbarHeight;"top"==a.position?b?this.marginLeftReal+=d:this.marginTopReal+=d:b?this.marginRightReal+=d:this.marginBottomReal+=d},getScrollbarPosition:function(a,b,d){a.position=b?"bottom"==d||"left"==d?"bottom":"top":"top"==d||"right"==d?"bottom":"top"},updateChartScrollbar:function(a,b){if(a){a.rotate=b;var d=this.marginTopReal,e=this.marginLeftReal,f=a.scrollbarHeight,g=this.dx,h=this.dy;"top"==a.position?b?(a.y=d,a.x=e-f):(a.y=d-f+h,a.x=e+g):b?(a.y=d+h,a.x=e+this.plotAreaWidth+g):
(a.y=d+this.plotAreaHeight+1,a.x=this.marginLeftReal)}},showZB:function(a){var b=this.zbSet;b&&(a?b.show():b.hide(),this.zbBG.hide())},handleReleaseOutside:function(a){AmCharts.AmRectangularChart.base.handleReleaseOutside.call(this,a);(a=this.chartCursor)&&a.handleReleaseOutside()},handleMouseDown:function(a){AmCharts.AmRectangularChart.base.handleMouseDown.call(this,a);var b=this.chartCursor;b&&b.handleMouseDown(a)},handleCursorChange:function(){}});AmCharts.TrendLine=AmCharts.Class({construct:function(){this.createEvents("click");this.isProtected=!1;this.dashLength=0;this.lineColor="#00CC00";this.lineThickness=this.lineAlpha=1},draw:function(){var a=this;a.destroy();var b=a.chart,d=b.container,e,f,g,h,i=a.categoryAxis,j=a.initialDate,k=a.initialCategory,l=a.finalDate,m=a.finalCategory,r=a.valueAxis,n=a.valueAxisX,q=a.initialXValue,p=a.finalXValue,s=a.initialValue,t=a.finalValue,u=r.recalculateToPercents;i&&(j&&(e=i.dateToCoordinate(j)),k&&(e=
i.categoryToCoordinate(k)),l&&(f=i.dateToCoordinate(l)),m&&(f=i.categoryToCoordinate(m)));n&&!u&&(isNaN(q)||(e=n.getCoordinate(q)),isNaN(p)||(f=n.getCoordinate(p)));r&&!u&&(isNaN(s)||(g=r.getCoordinate(s)),isNaN(t)||(h=r.getCoordinate(t)));!isNaN(e)&&(!isNaN(f)&&!isNaN(g)&&!isNaN(g))&&(b.rotate?(i=[g,h],f=[e,f]):(i=[e,f],f=[g,h]),g=a.lineColor,e=AmCharts.line(d,i,f,g,a.lineAlpha,a.lineThickness,a.dashLength),f=AmCharts.line(d,i,f,g,0.005,5),d=d.set([e,f]),d.translate(b.marginLeftReal,b.marginTopReal),
b.trendLinesSet.push(d),a.line=e,a.set=d,f.mouseup(function(){a.handleLineClick()}).mouseover(function(){a.handleLineOver()}).mouseout(function(){a.handleLineOut()}),f.touchend&&f.touchend(function(){a.handleLineClick()}))},handleLineClick:function(){var a={type:"click",trendLine:this,chart:this.chart};this.fire(a.type,a)},handleLineOver:function(){var a=this.rollOverColor;void 0!=a&&this.line.attr({stroke:a})},handleLineOut:function(){this.line.attr({stroke:this.lineColor})},destroy:function(){AmCharts.remove(this.set)}});AmCharts.AmSerialChart=AmCharts.Class({inherits:AmCharts.AmRectangularChart,construct:function(){AmCharts.AmSerialChart.base.construct.call(this);this.createEvents("changed");this.columnSpacing=5;this.columnWidth=0.8;this.updateScrollbar=!0;var a=new AmCharts.CategoryAxis;a.chart=this;this.categoryAxis=a;this.chartType="serial";this.zoomOutOnDataUpdate=!0;this.skipZoom=!1;this.minSelectedTime=0},initChart:function(){AmCharts.AmSerialChart.base.initChart.call(this);this.updateCategoryAxis();this.dataChanged&&
(this.updateData(),this.dataChanged=!1,this.dispatchDataUpdated=!0);for(var a=this.countColumns(),b=this.graphs,d=0;d<b.length;d++)b[d].columnCount=a;this.updateScrollbar=!0;this.drawChart();this.autoMargins&&!this.marginsUpdated&&(this.marginsUpdated=!0,this.measureMargins())},validateData:function(a){this.marginsUpdated=!1;this.zoomOutOnDataUpdate&&!a&&(this.endTime=this.end=this.startTime=this.start=NaN);AmCharts.AmSerialChart.base.validateData.call(this)},drawChart:function(){AmCharts.AmSerialChart.base.drawChart.call(this);
var a=this.chartData;if(AmCharts.ifArray(a)){var b=this.chartScrollbar;b&&b.draw();if(0<this.realWidth&&0<this.realHeight){var b=a.length-1,d,e;d=this.categoryAxis;if(d.parseDates&&!d.equalSpacing){if(d=this.startTime,e=this.endTime,isNaN(d)||isNaN(e))d=a[0].time,e=a[b].time}else if(d=this.start,e=this.end,isNaN(d)||isNaN(e))d=0,e=b;this.endTime=this.startTime=this.end=this.start=void 0;this.zoom(d,e)}}else this.cleanChart();this.dispDUpd();this.chartCreated=!0},cleanChart:function(){AmCharts.callMethod("destroy",
[this.valueAxes,this.graphs,this.categoryAxis,this.chartScrollbar,this.chartCursor])},updateCategoryAxis:function(){var a=this.categoryAxis;a.id="categoryAxis";a.rotate=this.rotate;a.axisRenderer=AmCharts.RecAxis;a.guideFillRenderer=AmCharts.RecFill;a.axisItemRenderer=AmCharts.RecItem;a.setOrientation(!this.rotate);a.x=this.marginLeftReal;a.y=this.marginTopReal;a.dx=this.dx;a.dy=this.dy;a.width=this.plotAreaWidth;a.height=this.plotAreaHeight;a.viW=this.plotAreaWidth;a.viH=this.plotAreaHeight;a.viX=
this.marginLeftReal;a.viY=this.marginTopReal;a.marginsChanged=!0},updateValueAxes:function(){AmCharts.AmSerialChart.base.updateValueAxes.call(this);for(var a=this.valueAxes,b=0;b<a.length;b++){var d=a[b],e=this.rotate;d.rotate=e;d.setOrientation(e);e=this.categoryAxis;if(!e.startOnAxis||e.parseDates)d.expandMinMax=!0}},updateData:function(){this.parseData();var a=this.chartCursor;a&&a.updateData();for(var a=this.graphs,b=0;b<a.length;b++)a[b].data=this.chartData},updateMargins:function(){AmCharts.AmSerialChart.base.updateMargins.call(this);
var a=this.chartScrollbar;a&&(this.getScrollbarPosition(a,this.rotate,this.categoryAxis.position),this.adjustMargins(a,this.rotate))},updateScrollbars:function(){this.updateChartScrollbar(this.chartScrollbar,this.rotate)},zoom:function(a,b){var d=this.categoryAxis;d.parseDates&&!d.equalSpacing?this.timeZoom(a,b):this.indexZoom(a,b)},timeZoom:function(a,b){var d=this.maxSelectedTime;isNaN(d)||(b!=this.endTime&&b-a>d&&(a=b-d,this.updateScrollbar=!0),a!=this.startTime&&b-a>d&&(b=a+d,this.updateScrollbar=
!0));var e=this.minSelectedTime;if(0<e&&b-a<e)var f=Math.round(a+(b-a)/2),e=Math.round(e/2),a=f-e,b=f+e;var g=this.chartData,f=this.categoryAxis;if(AmCharts.ifArray(g)&&(a!=this.startTime||b!=this.endTime)){var h=f.minDuration();this.firstTime=e=g[0].time;var i=g[g.length-1].time;this.lastTime=i;a||(a=e,isNaN(d)||(a=i-d));b||(b=i);a>i&&(a=i);b<e&&(b=e);a<e&&(a=e);b>i&&(b=i);b<a&&(b=a+h);this.startTime=a;this.endTime=b;d=g.length-1;h=this.getClosestIndex(g,"time",a,!0,0,d);g=this.getClosestIndex(g,
"time",b,!1,h,d);f.timeZoom(a,b);f.zoom(h,g);this.start=AmCharts.fitToBounds(h,0,d);this.end=AmCharts.fitToBounds(g,0,d);this.zoomAxesAndGraphs();this.zoomScrollbar();a!=e||b!=i?this.showZB(!0):this.showZB(!1);this.updateColumnsDepth();this.dispatchTimeZoomEvent()}},indexZoom:function(a,b){var d=this.maxSelectedSeries;isNaN(d)||(b!=this.end&&b-a>d&&(a=b-d,this.updateScrollbar=!0),a!=this.start&&b-a>d&&(b=a+d,this.updateScrollbar=!0));if(a!=this.start||b!=this.end){var e=this.chartData.length-1;isNaN(a)&&
(a=0,isNaN(d)||(a=e-d));isNaN(b)&&(b=e);b<a&&(b=a);b>e&&(b=e);a>e&&(a=e-1);0>a&&(a=0);this.start=a;this.end=b;this.categoryAxis.zoom(a,b);this.zoomAxesAndGraphs();this.zoomScrollbar();0!=a||b!=this.chartData.length-1?this.showZB(!0):this.showZB(!1);this.updateColumnsDepth();this.dispatchIndexZoomEvent()}},updateGraphs:function(){AmCharts.AmSerialChart.base.updateGraphs.call(this);for(var a=this.graphs,b=0;b<a.length;b++){var d=a[b];d.columnWidth=this.columnWidth;d.categoryAxis=this.categoryAxis}},
updateColumnsDepth:function(){var a,b=this.graphs;AmCharts.remove(this.columnsSet);this.columnsArray=[];for(a=0;a<b.length;a++){var d=b[a],e=d.columnsArray;if(e)for(var f=0;f<e.length;f++)this.columnsArray.push(e[f])}this.columnsArray.sort(this.compareDepth);if(0<this.columnsArray.length){b=this.container.set();this.columnSet.push(b);for(a=0;a<this.columnsArray.length;a++)b.push(this.columnsArray[a].column.set);d&&b.translate(d.x,d.y);this.columnsSet=b}},compareDepth:function(a,b){return a.depth>
b.depth?1:-1},zoomScrollbar:function(){var a=this.chartScrollbar,b=this.categoryAxis;a&&this.updateScrollbar&&(b.parseDates&&!b.equalSpacing?a.timeZoom(this.startTime,this.endTime):a.zoom(this.start,this.end),this.updateScrollbar=!0)},updateTrendLines:function(){for(var a=this.trendLines,b=0;b<a.length;b++){var d=a[b];d.chart=this;d.valueAxis||(d.valueAxis=this.valueAxes[0]);d.categoryAxis=this.categoryAxis}},zoomAxesAndGraphs:function(){if(!this.scrollbarOnly){for(var a=this.valueAxes,b=0;b<a.length;b++)a[b].zoom(this.start,
this.end);a=this.graphs;for(b=0;b<a.length;b++)a[b].zoom(this.start,this.end);this.zoomTrendLines();(b=this.chartCursor)&&b.zoom(this.start,this.end,this.startTime,this.endTime)}},countColumns:function(){for(var a=0,b=this.valueAxes.length,d=this.graphs.length,e,f,g=!1,h,i=0;i<b;i++){f=this.valueAxes[i];var j=f.stackType;if("100%"==j||"regular"==j){g=!1;for(h=0;h<d;h++)e=this.graphs[h],!e.hidden&&(e.valueAxis==f&&"column"==e.type)&&(!g&&e.stackable&&(a++,g=!0),e.stackable||a++,e.columnIndex=a-1)}if("none"==
j||"3d"==j)for(h=0;h<d;h++)e=this.graphs[h],!e.hidden&&(e.valueAxis==f&&"column"==e.type)&&(e.columnIndex=a,a++);if("3d"==j){for(i=0;i<d;i++)e=this.graphs[i],e.depthCount=a;a=1}}return a},parseData:function(){AmCharts.AmSerialChart.base.parseData.call(this);this.parseSerialData()},getCategoryIndexByValue:function(a){for(var b=this.chartData,d,e=0;e<b.length;e++)b[e].category==a&&(d=e);return d},handleCursorChange:function(a){this.updateLegendValues(a.index)},handleCursorZoom:function(a){this.updateScrollbar=
!0;this.zoom(a.start,a.end)},handleScrollbarZoom:function(a){this.updateScrollbar=!1;this.zoom(a.start,a.end)},dispatchTimeZoomEvent:function(){if(this.prevStartTime!=this.startTime||this.prevEndTime!=this.endTime){var a={type:"zoomed"};a.startDate=new Date(this.startTime);a.endDate=new Date(this.endTime);a.startIndex=this.start;a.endIndex=this.end;this.startIndex=this.start;this.endIndex=this.end;this.startDate=a.startDate;this.endDate=a.endDate;this.prevStartTime=this.startTime;this.prevEndTime=
this.endTime;var b=this.categoryAxis,d=AmCharts.extractPeriod(b.minPeriod).period,b=b.dateFormatsObject[d];a.startValue=AmCharts.formatDate(a.startDate,b);a.endValue=AmCharts.formatDate(a.endDate,b);a.chart=this;a.target=this;this.fire(a.type,a)}},dispatchIndexZoomEvent:function(){if(this.prevStartIndex!=this.start||this.prevEndIndex!=this.end){this.startIndex=this.start;this.endIndex=this.end;var a=this.chartData;if(AmCharts.ifArray(a)&&!isNaN(this.start)&&!isNaN(this.end)){var b={chart:this,target:this,
type:"zoomed"};b.startIndex=this.start;b.endIndex=this.end;b.startValue=a[this.start].category;b.endValue=a[this.end].category;this.categoryAxis.parseDates&&(this.startTime=a[this.start].time,this.endTime=a[this.end].time,b.startDate=new Date(this.startTime),b.endDate=new Date(this.endTime));this.prevStartIndex=this.start;this.prevEndIndex=this.end;this.fire(b.type,b)}}},updateLegendValues:function(a){for(var b=this.graphs,d=0;d<b.length;d++){var e=b[d];e.currentDataItem=isNaN(a)?void 0:this.chartData[a].axes[e.valueAxis.id].graphs[e.id]}this.legend&&
this.legend.updateValues()},getClosestIndex:function(a,b,d,e,f,g){0>f&&(f=0);g>a.length-1&&(g=a.length-1);var h=f+Math.round((g-f)/2),i=a[h][b];if(1>=g-f){if(e)return f;e=a[g][b];return Math.abs(a[f][b]-d)<Math.abs(e-d)?f:g}return d==i?h:d<i?this.getClosestIndex(a,b,d,e,f,h):this.getClosestIndex(a,b,d,e,h,g)},zoomToIndexes:function(a,b){this.updateScrollbar=!0;var d=this.chartData;if(d){var e=d.length;0<e&&(0>a&&(a=0),b>e-1&&(b=e-1),e=this.categoryAxis,e.parseDates&&!e.equalSpacing?this.zoom(d[a].time,
d[b].time):this.zoom(a,b))}},zoomToDates:function(a,b){this.updateScrollbar=!0;var d=this.chartData;if(this.categoryAxis.equalSpacing){var e=this.getClosestIndex(d,"time",a.getTime(),!0,0,d.length),d=this.getClosestIndex(d,"time",b.getTime(),!1,0,d.length);this.zoom(e,d)}else this.zoom(a.getTime(),b.getTime())},zoomToCategoryValues:function(a,b){this.updateScrollbar=!0;this.zoom(this.getCategoryIndexByValue(a),this.getCategoryIndexByValue(b))},formatString:function(a,b){var d=b.graph;if(-1!=a.indexOf("[[category]]")){var e=
b.serialDataItem.category;if(this.categoryAxis.parseDates){var f=this.balloonDateFormat,g=this.chartCursor;g&&(f=g.categoryBalloonDateFormat);-1!=a.indexOf("[[category]]")&&(f=AmCharts.formatDate(e,f),-1!=f.indexOf("fff")&&(f=AmCharts.formatMilliseconds(f,e)),e=f)}a=a.replace(/\[\[category\]\]/g,String(e))}d=d.numberFormatter;d||(d=this.numberFormatter);e=b.graph.valueAxis;if((f=e.duration)&&!isNaN(b.values.value))e=AmCharts.formatDuration(b.values.value,f,"",e.durationUnits,e.maxInterval,d),a=a.replace(RegExp("\\[\\[value\\]\\]",
"g"),e);e="value open low high close total".split(" ");f=this.percentFormatter;a=AmCharts.formatValue(a,b.percents,e,f,"percents.");a=AmCharts.formatValue(a,b.values,e,d,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=AmCharts.formatValue(a,b.values,["percents"],f);-1!=a.indexOf("[[")&&(a=AmCharts.formatDataContextValue(a,b.dataContext));return a=AmCharts.AmSerialChart.base.formatString.call(this,a,b)},addChartScrollbar:function(a){AmCharts.callMethod("destroy",[this.chartScrollbar]);
a&&(a.chart=this,this.listenTo(a,"zoomed",this.handleScrollbarZoom));this.rotate?void 0==a.width&&(a.width=a.scrollbarHeight):void 0==a.height&&(a.height=a.scrollbarHeight);this.chartScrollbar=a},removeChartScrollbar:function(){AmCharts.callMethod("destroy",[this.chartScrollbar]);this.chartScrollbar=null},handleReleaseOutside:function(a){AmCharts.AmSerialChart.base.handleReleaseOutside.call(this,a);AmCharts.callMethod("handleReleaseOutside",[this.chartScrollbar])}});AmCharts.AmRadarChart=AmCharts.Class({inherits:AmCharts.AmCoordinateChart,construct:function(){AmCharts.AmRadarChart.base.construct.call(this);this.marginRight=this.marginBottom=this.marginTop=this.marginLeft=0;this.chartType="radar";this.radius="35%"},initChart:function(){AmCharts.AmRadarChart.base.initChart.call(this);this.dataChanged&&(this.updateData(),this.dataChanged=!1,this.dispatchDataUpdated=!0);this.drawChart()},updateData:function(){this.parseData();for(var a=this.graphs,b=0;b<a.length;b++)a[b].data=
this.chartData},updateGraphs:function(){for(var a=this.graphs,b=0;b<a.length;b++){var d=a[b];d.index=b;d.width=this.realRadius;d.height=this.realRadius;d.x=this.marginLeftReal;d.y=this.marginTopReal;d.chartType=this.chartType}},parseData:function(){AmCharts.AmRadarChart.base.parseData.call(this);this.parseSerialData()},updateValueAxes:function(){for(var a=this.valueAxes,b=0;b<a.length;b++){var d=a[b];d.axisRenderer=AmCharts.RadAxis;d.guideFillRenderer=AmCharts.RadarFill;d.axisItemRenderer=AmCharts.RadItem;
d.autoGridCount=!1;d.x=this.marginLeftReal;d.y=this.marginTopReal;d.width=this.realRadius;d.height=this.realRadius}},drawChart:function(){AmCharts.AmRadarChart.base.drawChart.call(this);var a=this.updateWidth(),b=this.updateHeight(),d=this.marginTop+this.getTitleHeight(),e=this.marginLeft,b=b-d-this.marginBottom;this.marginLeftReal=e+(a-e-this.marginRight)/2;this.marginTopReal=d+b/2;this.realRadius=AmCharts.toCoordinate(this.radius,a,b);this.updateValueAxes();this.updateGraphs();a=this.chartData;
if(AmCharts.ifArray(a)){if(0<this.realWidth&&0<this.realHeight){a=a.length-1;e=this.valueAxes;for(d=0;d<e.length;d++)e[d].zoom(0,a);e=this.graphs;for(d=0;d<e.length;d++)e[d].zoom(0,a)}}else this.cleanChart();this.dispDUpd();this.chartCreated=!0},formatString:function(a,b){var d=b.graph;-1!=a.indexOf("[[category]]")&&(a=a.replace(/\[\[category\]\]/g,String(b.serialDataItem.category)));d=d.numberFormatter;d||(d=this.numberFormatter);a=AmCharts.formatValue(a,b.values,["value"],d,"",this.usePrefixes,
this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);return a=AmCharts.AmRadarChart.base.formatString.call(this,a,b)},cleanChart:function(){this.callMethod("destroy",[this.valueAxes,this.graphs])}});AmCharts.AxisBase=AmCharts.Class({construct:function(){this.viY=this.viX=this.y=this.x=this.dy=this.dx=0;this.axisWidth;this.axisThickness=1;this.axisColor="#000000";this.axisAlpha=1;this.gridCount=this.tickLength=5;this.gridAlpha=0.15;this.gridThickness=1;this.gridColor="#000000";this.dashLength=0;this.labelFrequency=1;this.showLastLabel=this.showFirstLabel=!0;this.fillColor="#FFFFFF";this.fillAlpha=0;this.labelsEnabled=!0;this.labelRotation=0;this.autoGridCount=!0;this.valueRollOverColor="#CC0000";
this.offset=0;this.guides=[];this.visible=!0;this.counter=0;this.guides=[];this.ignoreAxisWidth=this.inside=!1;this.titleColor;this.titleFontSize;this.titleBold=!0},zoom:function(a,b){this.start=a;this.end=b;this.dataChanged=!0;this.draw()},fixAxisPosition:function(){var a=this.position;"H"==this.orientation?("left"==a&&(a="bottom"),"right"==a&&(a="top")):("bottom"==a&&(a="left"),"top"==a&&(a="right"));this.position=a},draw:function(){var a=this.chart;void 0==this.titleColor&&(this.titleColor=a.color);
isNaN(this.titleFontSize)&&(this.titleFontSize=a.fontSize+1);this.allLabels=[];this.counter=0;this.destroy();this.fixAxisPosition();this.labels=[];var b=a.container,d=b.set();a.gridSet.push(d);this.set=d;b=b.set();a.axesLabelsSet.push(b);this.labelsSet=b;this.axisLine=new this.axisRenderer(this);this.autoGridCount&&("V"==this.orientation?(a=this.height/35,3>a&&(a=3)):a=this.width/75,this.gridCount=a);this.axisWidth=this.axisLine.axisWidth;this.addTitle()},setOrientation:function(a){this.orientation=
a?"H":"V"},addTitle:function(){var a=this.title;if(a){var b=this.chart;this.titleLabel=AmCharts.text(b.container,a,this.titleColor,b.fontFamily,this.titleFontSize,"middle",this.titleBold)}},positionTitle:function(){var a=this.titleLabel;if(a){var b,d,e=this.labelsSet,f={};0<e.length()?f=e.getBBox():(f.x=0,f.y=0,f.width=this.viW,f.height=this.viH);e.push(a);var e=f.x,g=f.y;AmCharts.VML&&(this.rotate?e-=this.x:g-=this.y);var h=f.width,f=f.height,i=this.viW,j=this.viH;a.getBBox();var k=0,l=this.titleFontSize/
2,m=this.inside;switch(this.position){case "top":b=i/2;d=g-10-l;break;case "bottom":b=i/2;d=g+f+10+l;break;case "left":b=e-10-l;m&&(b-=5);d=j/2;k=-90;break;case "right":b=e+h+10+l-3,m&&(b+=7),d=j/2,k=-90}this.marginsChanged?(a.translate(b,d),this.tx=b,this.ty=d):a.translate(this.tx,this.ty);this.marginsChanged=!1;0!=k&&a.rotate(k)}},pushAxisItem:function(a){var b=a.graphics();0<b.length()&&this.set.push(b);(a=a.getLabel())&&this.labelsSet.push(a)},addGuide:function(a){this.guides.push(a)},removeGuide:function(a){for(var b=
this.guides,d=0;d<b.length;d++)b[d]==a&&b.splice(d,1)},handleGuideOver:function(a){clearTimeout(this.chart.hoverInt);var b=a.graphics.getBBox(),d=b.x+b.width/2,b=b.y+b.height/2,e=a.fillColor;void 0==e&&(e=a.lineColor);this.chart.showBalloon(a.balloonText,e,!0,d,b)},handleGuideOut:function(){this.chart.hideBalloon()},addEventListeners:function(a,b){var d=this;a.mouseover(function(){d.handleGuideOver(b)});a.mouseout(function(){d.handleGuideOut(b)})},getBBox:function(){var a=this.labelsSet.getBBox();
AmCharts.VML||(a={x:a.x+this.x,y:a.y+this.y,width:a.width,height:a.height});return a},destroy:function(){AmCharts.remove(this.set);AmCharts.remove(this.labelsSet);var a=this.axisLine;a&&AmCharts.remove(a.set);AmCharts.remove(this.grid0)}});AmCharts.ValueAxis=AmCharts.Class({inherits:AmCharts.AxisBase,construct:function(){this.createEvents("axisChanged","logarithmicAxisFailed","axisSelfZoomed","axisZoomed");AmCharts.ValueAxis.base.construct.call(this);this.dataChanged=!0;this.gridCount=8;this.stackType="none";this.position="left";this.unitPosition="right";this.recalculateToPercents=this.includeHidden=this.includeGuidesInMinMax=this.integersOnly=!1;this.duration;this.durationUnits={DD:"d. ",hh:":",mm:":",ss:""};this.scrollbar=!1;this.maxDecCount;
this.baseValue=0;this.radarCategoriesEnabled=!0;this.gridType="polygons";this.useScientificNotation=!1;this.axisTitleOffset=10;this.minMaxMultiplier=1},updateData:function(){0>=this.gridCount&&(this.gridCount=1);this.totals=[];this.data=this.chart.chartData;"xy"!=this.chart.chartType&&(this.stackGraphs("smoothedLine"),this.stackGraphs("line"),this.stackGraphs("column"),this.stackGraphs("step"));this.recalculateToPercents&&this.recalculate();this.synchronizationMultiplier&&this.synchronizeWithAxis?
this.foundGraphs=!0:(this.foundGraphs=!1,this.getMinMax())},draw:function(){AmCharts.ValueAxis.base.draw.call(this);var a=this.chart,b=this.set;"duration"==this.type&&(this.duration="ss");!0==this.dataChanged&&(this.updateData(),this.dataChanged=!1);if(this.logarithmic&&(0>=this.getMin(0,this.data.length-1)||0>=this.minimum))this.fire("logarithmicAxisFailed",{type:"logarithmicAxisFailed",chart:a});else{this.grid0=null;var d,e,f=a.dx,g=a.dy,h=!1,i=this.logarithmic,j=a.chartType;if(!isNaN(this.min)&&
!isNaN(this.max)&&this.foundGraphs&&Infinity!=this.min&&-Infinity!=this.max){var k=this.labelFrequency,l=this.showFirstLabel,m=this.showLastLabel,r=1,n=0,q=Math.round((this.max-this.min)/this.step)+1;if(!0==i){var p=Math.log(this.max)*Math.LOG10E-Math.log(this.minReal)*Math.LOG10E;this.stepWidth=this.axisWidth/p;2<p&&(q=Math.ceil(Math.log(this.max)*Math.LOG10E)+1,n=Math.round(Math.log(this.minReal)*Math.LOG10E),q>this.gridCount&&(r=Math.ceil(q/this.gridCount)))}else this.stepWidth=this.axisWidth/
(this.max-this.min);d=0;1>this.step&&-1<this.step&&(d=this.getDecimals(this.step));this.integersOnly&&(d=0);d>this.maxDecCount&&(d=this.maxDecCount);isNaN(this.precision)||(d=this.precision);this.max=AmCharts.roundTo(this.max,this.maxDecCount);this.min=AmCharts.roundTo(this.min,this.maxDecCount);var s={};s.precision=d;s.decimalSeparator=a.numberFormatter.decimalSeparator;s.thousandsSeparator=a.numberFormatter.thousandsSeparator;this.numberFormatter=s;var t=this.guides,u=t.length;if(0<u){var x=this.fillAlpha;
for(e=this.fillAlpha=0;e<u;e++){var z=t[e],y=NaN;if(!isNaN(z.toValue)){var y=this.getCoordinate(z.toValue),v=new this.axisItemRenderer(this,y,"",!0,NaN,NaN,z);this.pushAxisItem(v)}var C=NaN;isNaN(z.value)||(C=this.getCoordinate(z.value),v=new this.axisItemRenderer(this,C,z.label,!0,NaN,(y-C)/2,z),this.pushAxisItem(v));isNaN(y-C)||(v=new this.guideFillRenderer(this,C,y,z),this.pushAxisItem(v),v=v.graphics(),z.graphics=v,z.balloonText&&this.addEventListeners(v,z))}this.fillAlpha=x}t=!1;for(e=n;e<q;e+=
r)v=AmCharts.roundTo(this.step*e+this.min,d),-1!=String(v).indexOf("e")&&(t=!0,String(v).split("e"));this.duration&&(this.maxInterval=AmCharts.getMaxInterval(this.max,this.duration));for(e=n;e<q;e+=r)if(n=this.step*e+this.min,n=AmCharts.roundTo(n,this.maxDecCount+1),!(this.integersOnly&&Math.round(n)!=n)){!0==i&&(0==n&&(n=this.minReal),2<p&&(n=Math.pow(10,e)),t=-1!=String(n).indexOf("e")?!0:!1);this.useScientificNotation&&(t=!0);this.usePrefixes&&(t=!1);t?(v=-1==String(n).indexOf("e")?n.toExponential(15):
String(n),v=v.split("e"),d=Number(v[0]),v=Number(v[1]),d=AmCharts.roundTo(d,14),10==d&&(d=1,v+=1),v=d+"e"+v,0==n&&(v="0"),1==n&&(v="1")):(i&&(d=String(n).split("."),s.precision=d[1]?d[1].length:-1),v=this.usePrefixes?AmCharts.addPrefix(n,a.prefixesOfBigNumbers,a.prefixesOfSmallNumbers,s):AmCharts.formatNumber(n,s,s.precision));this.duration&&(v=AmCharts.formatDuration(n,this.duration,"",this.durationUnits,this.maxInterval,s));this.recalculateToPercents?v+="%":(d=this.unit)&&(v="left"==this.unitPosition?
d+v:v+d);Math.round(e/k)!=e/k&&(v=void 0);if(0==e&&!l||e==q-1&&!m)v=" ";d=this.getCoordinate(n);v=new this.axisItemRenderer(this,d,v);this.pushAxisItem(v);if(n==this.baseValue&&"radar"!=j){var J,E,u=this.viW,x=this.viH,n=this.viX,v=this.viY;"H"==this.orientation?0<=d&&d<=u+1&&(J=[d,d,d+f],E=[x,0,g]):0<=d&&d<=x+1&&(J=[0,u,u+f],E=[d,d,d+g]);J&&(d=AmCharts.fitToBounds(2*this.gridAlpha,0,1),d=AmCharts.line(a.container,J,E,this.gridColor,d,1,this.dashLength),d.translate(n,v),this.grid0=d,a.axesSet.push(d),
d.toBack())}}e=this.baseValue;this.min>this.baseValue&&this.max>this.baseValue&&(e=this.min);this.min<this.baseValue&&this.max<this.baseValue&&(e=this.max);i&&e<this.minReal&&(e=this.minReal);this.baseCoord=this.getCoordinate(e);a={type:"axisChanged",target:this,chart:a};a.min=i?this.minReal:this.min;a.max=this.max;this.fire("axisChanged",a);this.axisCreated=!0}else h=!0;i=this.axisLine.set;a=this.labelsSet;this.positionTitle();"radar"!=j?(j=this.viX,e=this.viY,b.translate(j,e),a.translate(j,e)):
i.toFront();!this.visible||h?(b.hide(),i.hide(),a.hide()):(b.show(),i.show(),a.show())}},getDecimals:function(a){var b=0;isNaN(a)||(a=a.toString(),-1!=a.indexOf("e-")?b=Number(a.split("-")[1]):-1!=a.indexOf(".")&&(b=a.split(".")[1].length));return b},stackGraphs:function(a){var b=this.stackType;"stacked"==b&&(b="regular");"line"==b&&(b="none");"100% stacked"==b&&(b="100%");this.stackType=b;var d=[],e=[],f=[],g=[],h,i=this.chart.graphs,j,k,l,m=this.baseValue;if(("line"==a||"step"==a||"smoothedLine"==
a)&&("regular"==b||"100%"==b))for(l=0;l<i.length;l++)h=i[l],h.hidden||(k=h.type,h.chart==this.chart&&(h.valueAxis==this&&a==k&&h.stackable)&&(j&&(h.stackGraph=j),j=h));for(j=this.start;j<=this.end;j++){var r=0;for(l=0;l<i.length;l++)if(h=i[l],!h.hidden&&(k=h.type,h.chart==this.chart&&(h.valueAxis==this&&a==k&&h.stackable)&&(k=this.data[j].axes[this.id].graphs[h.id],h=k.values.value,!isNaN(h)))){var n=this.getDecimals(h);r<n&&(r=n);g[j]=isNaN(g[j])?Math.abs(h):g[j]+Math.abs(h);g[j]=AmCharts.roundTo(g[j],
r);if("regular"==b){if("line"==a||"step"==a||"smoothedLine"==a)isNaN(d[j])?(d[j]=h,k.values.close=h,k.values.open=this.baseValue):(k.values.close=isNaN(h)?d[j]:h+d[j],k.values.open=d[j],d[j]=k.values.close);"column"==a&&!isNaN(h)&&(k.values.close=h,0>h?(k.values.close=h,isNaN(e[j])?k.values.open=m:(k.values.close+=e[j],k.values.open=e[j]),e[j]=k.values.close):(k.values.close=h,isNaN(f[j])?k.values.open=m:(k.values.close+=f[j],k.values.open=f[j]),f[j]=k.values.close))}}}for(j=this.start;j<=this.end;j++)for(l=
0;l<i.length;l++)h=i[l],h.hidden||(k=h.type,h.chart==this.chart&&(h.valueAxis==this&&a==k&&h.stackable)&&(k=this.data[j].axes[this.id].graphs[h.id],h=k.values.value,isNaN(h)||(d=100*(h/g[j]),k.values.percents=d,k.values.total=g[j],"100%"==b&&(isNaN(e[j])&&(e[j]=0),isNaN(f[j])&&(f[j]=0),0>d?(k.values.close=AmCharts.fitToBounds(d+e[j],-100,100),k.values.open=e[j],e[j]=k.values.close):(k.values.close=AmCharts.fitToBounds(d+f[j],-100,100),k.values.open=f[j],f[j]=k.values.close)))))},recalculate:function(){for(var a=
this.chart.graphs,b=0;b<a.length;b++){var d=a[b];if(d.valueAxis==this){var e="value";if("candlestick"==d.type||"ohlc"==d.type)e="open";var f,g,h=this.end+2,h=AmCharts.fitToBounds(this.end+1,0,this.data.length-1),i=this.start;0<i&&i--;for(var j=this.start;j<=h&&!(g=this.data[j].axes[this.id].graphs[d.id],f=g.values[e],!isNaN(f));j++);for(e=i;e<=h;e++){g=this.data[e].axes[this.id].graphs[d.id];g.percents={};var i=g.values,k;for(k in i)g.percents[k]="percents"!=k?100*(i[k]/f)-100:i[k]}}}},getMinMax:function(){for(var a=
!1,b=this.chart,d=b.graphs,e=0;e<d.length;e++){var f=d[e].type;if("line"==f||"step"==f||"smoothedLine"==f)this.expandMinMax&&(a=!0)}a&&(0<this.start&&this.start--,this.end<this.data.length-1&&this.end++);"serial"==b.chartType&&!0==b.categoryAxis.parseDates&&!a&&this.end<this.data.length-1&&this.end++;a=this.minMaxMultiplier;this.min=this.getMin(this.start,this.end);this.max=this.getMax();a=(this.max-this.min)*(a-1);this.min-=a;this.max+=a;a=this.guides.length;if(this.includeGuidesInMinMax&&0<a)for(b=
0;b<a;b++)d=this.guides[b],d.toValue<this.min&&(this.min=d.toValue),d.value<this.min&&(this.min=d.value),d.toValue>this.max&&(this.max=d.toValue),d.value>this.max&&(this.max=d.value);isNaN(this.minimum)||(this.min=this.minimum);isNaN(this.maximum)||(this.max=this.maximum);this.min>this.max&&(a=this.max,this.max=this.min,this.min=a);isNaN(this.minTemp)||(this.min=this.minTemp);isNaN(this.maxTemp)||(this.max=this.maxTemp);this.minReal=this.min;this.maxReal=this.max;0==this.min&&0==this.max&&(this.max=
9);this.min>this.max&&(this.min=this.max-1);a=this.min;b=this.max;d=this.max-this.min;e=0==d?Math.pow(10,Math.floor(Math.log(Math.abs(this.max))*Math.LOG10E))/10:Math.pow(10,Math.floor(Math.log(Math.abs(d))*Math.LOG10E))/10;isNaN(this.maximum)&&isNaN(this.maxTemp)&&(this.max=Math.ceil(this.max/e)*e+e);isNaN(this.minimum)&&isNaN(this.minTemp)&&(this.min=Math.floor(this.min/e)*e-e);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);"100%"==this.stackType&&(this.min=0>this.min?-100:0,this.max=
0>this.max?0:100);d=this.max-this.min;e=Math.pow(10,Math.floor(Math.log(Math.abs(d))*Math.LOG10E))/10;this.step=Math.ceil(d/this.gridCount/e)*e;d=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E));d=d.toExponential(0).split("e");e=Number(d[1]);9==Number(d[0])&&e++;d=this.generateNumber(1,e);e=Math.ceil(this.step/d);5<e&&(e=10);5>=e&&2<e&&(e=5);this.step=Math.ceil(this.step/(d*e))*d*e;1>d?(this.maxDecCount=Math.abs(Math.log(Math.abs(d))*Math.LOG10E),this.maxDecCount=Math.round(this.maxDecCount),
this.step=AmCharts.roundTo(this.step,this.maxDecCount+1)):this.maxDecCount=0;this.min=this.step*Math.floor(this.min/this.step);this.max=this.step*Math.ceil(this.max/this.step);0>this.min&&0<=a&&(this.min=0);0<this.max&&0>=b&&(this.max=0);1<this.minReal&&1<this.max-this.minReal&&(this.minReal=Math.floor(this.minReal));d=Math.pow(10,Math.floor(Math.log(Math.abs(this.minReal))*Math.LOG10E));0==this.min&&(this.minReal=d);0==this.min&&1<this.minReal&&(this.minReal=1);0<this.min&&0<this.minReal-this.step&&
(this.minReal=this.min+this.step<this.minReal?this.min+this.step:this.min);d=Math.log(b)*Math.LOG10E-Math.log(a)*Math.LOG10E;this.logarithmic&&(2<d?(this.minReal=this.min=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E)),this.max=Math.pow(10,Math.ceil(Math.log(Math.abs(b))*Math.LOG10E))):(b=Math.pow(10,Math.floor(Math.log(Math.abs(this.min))*Math.LOG10E))/10,a=Math.pow(10,Math.floor(Math.log(Math.abs(a))*Math.LOG10E))/10,b<a&&(this.minReal=this.min=10*a)))},generateNumber:function(a,b){var d=
"",e;e=0>b?Math.abs(b)-1:Math.abs(b);for(var f=0;f<e;f++)d+="0";return 0>b?Number("0."+d+String(a)):Number(String(a)+d)},getMin:function(a,b){for(var d,e=a;e<=b;e++){var f=this.data[e].axes[this.id].graphs,g;for(g in f){var h=this.chart.getGraphById(g);if(h.includeInMinMax&&(!h.hidden||this.includeHidden)){isNaN(d)&&(d=Infinity);this.foundGraphs=!0;h=f[g].values;this.recalculateToPercents&&(h=f[g].percents);var i;if(this.minMaxField)i=h[this.minMaxField],i<d&&(d=i);else for(var j in h)"percents"!=
j&&"total"!=j&&(i=h[j],i<d&&(d=i))}}}return d},getMax:function(){for(var a,b=this.start;b<=this.end;b++){var d=this.data[b].axes[this.id].graphs,e;for(e in d){var f=this.chart.getGraphById(e);if(f.includeInMinMax&&(!f.hidden||this.includeHidden)){isNaN(a)&&(a=-Infinity);this.foundGraphs=!0;f=d[e].values;this.recalculateToPercents&&(f=d[e].percents);var g;if(this.minMaxField)g=f[this.minMaxField],g>a&&(a=g);else for(var h in f)"percents"!=h&&"total"!=h&&(g=f[h],g>a&&(a=g))}}}return a},dispatchZoomEvent:function(a,
b){var d={type:"axisZoomed",startValue:a,endValue:b,target:this,chart:this.chart};this.fire(d.type,d)},zoomToValues:function(a,b){if(b<a)var d=b,b=a,a=d;a<this.min&&(a=this.min);b>this.max&&(b=this.max);d={type:"axisSelfZoomed"};d.chart=this.chart;d.valueAxis=this;d.multiplier=this.axisWidth/Math.abs(this.getCoordinate(b)-this.getCoordinate(a));d.position="V"==this.orientation?this.reversed?this.getCoordinate(a)-this.y:this.getCoordinate(b)-this.y:this.reversed?this.getCoordinate(b)-this.x:this.getCoordinate(a)-
this.x;this.fire(d.type,d)},coordinateToValue:function(a){if(isNaN(a))return NaN;var b=this.axisWidth,d=this.stepWidth,e=this.reversed,f=this.rotate,g=this.min,h=this.minReal;return!0==this.logarithmic?Math.pow(10,(f?!0==e?(b-a)/d:a/d:!0==e?a/d:(b-a)/d)+Math.log(h)*Math.LOG10E):!0==e?f?g-(a-b)/d:a/d+g:f?a/d+g:g-(a-b)/d},getCoordinate:function(a){if(isNaN(a))return NaN;var b=this.rotate,d=this.reversed,e=this.axisWidth,f=this.stepWidth,g=this.min,h=this.minReal;!0==this.logarithmic?(a=Math.log(a)*
Math.LOG10E-Math.log(h)*Math.LOG10E,b=b?!0==d?e-f*a:f*a:!0==d?f*a:e-f*a):b=!0==d?b?e-f*(a-g):f*(a-g):b?f*(a-g):e-f*(a-g);b=this.rotate?b+(this.x-this.viX):b+(this.y-this.viY);return Math.round(b)},synchronizeWithAxis:function(a){this.synchronizeWithAxis=a;this.removeListener(this.synchronizeWithAxis,"axisChanged",this.handleSynchronization);this.listenTo(this.synchronizeWithAxis,"axisChanged",this.handleSynchronization)},handleSynchronization:function(){var a=this.synchronizeWithAxis,b=a.min,d=a.max,
a=a.step,e=this.synchronizationMultiplier;e&&(this.min=b*e,this.max=d*e,this.step=a*e,b=Math.pow(10,Math.floor(Math.log(Math.abs(this.step))*Math.LOG10E)),b=Math.abs(Math.log(Math.abs(b))*Math.LOG10E),this.maxDecCount=b=Math.round(b),this.draw())}});AmCharts.CategoryAxis=AmCharts.Class({inherits:AmCharts.AxisBase,construct:function(){AmCharts.CategoryAxis.base.construct.call(this);this.minPeriod="DD";this.equalSpacing=this.parseDates=!1;this.position="bottom";this.startOnAxis=!1;this.firstDayOfWeek=1;this.gridPosition="middle";this.boldPeriodBeginning=!0;this.periods=[{period:"ss",count:1},{period:"ss",count:5},{period:"ss",count:10},{period:"ss",count:30},{period:"mm",count:1},{period:"mm",count:5},{period:"mm",count:10},{period:"mm",count:30},
{period:"hh",count:1},{period:"hh",count:3},{period:"hh",count:6},{period:"hh",count:12},{period:"DD",count:1},{period:"DD",count:2},{period:"WW",count:1},{period:"MM",count:1},{period:"MM",count:2},{period:"MM",count:3},{period:"MM",count:6},{period:"YYYY",count:1},{period:"YYYY",count:2},{period:"YYYY",count:5},{period:"YYYY",count:10},{period:"YYYY",count:50},{period:"YYYY",count:100}];this.dateFormats=[{period:"fff",format:"JJ:NN:SS"},{period:"ss",format:"JJ:NN:SS"},{period:"mm",format:"JJ:NN"},
{period:"hh",format:"JJ:NN"},{period:"DD",format:"MMM DD"},{period:"WW",format:"MMM DD"},{period:"MM",format:"MMM"},{period:"YYYY",format:"YYYY"}];this.nextPeriod={};this.nextPeriod.fff="ss";this.nextPeriod.ss="mm";this.nextPeriod.mm="hh";this.nextPeriod.hh="DD";this.nextPeriod.DD="MM";this.nextPeriod.MM="YYYY"},draw:function(){AmCharts.CategoryAxis.base.draw.call(this);this.generateDFObject();var a=this.chart.chartData;this.data=a;if(AmCharts.ifArray(a)){var b=this.chart,d=this.start,e=this.labelFrequency,
f=0,g=this.end-d+1,h=this.gridCount,i=this.showFirstLabel,j=this.showLastLabel,k,l="",l=AmCharts.extractPeriod(this.minPeriod);k=AmCharts.getPeriodDuration(l.period,l.count);var m,r,n,q,p;m=this.rotate;var s=this.firstDayOfWeek,t=this.boldPeriodBeginning,a=AmCharts.resetDateToMin(new Date(a[a.length-1].time+1.05*k),this.minPeriod,1,s).getTime();this.endTime>a&&(this.endTime=a);if(this.parseDates&&!this.equalSpacing){if(this.timeDifference=this.endTime-this.startTime,d=this.choosePeriod(0),e=d.period,
m=d.count,r=AmCharts.getPeriodDuration(e,m),r<k&&(e=l.period,m=l.count,r=k),a=e,"WW"==a&&(a="DD"),this.stepWidth=this.getStepWidth(this.timeDifference),h=Math.ceil(this.timeDifference/r)+1,l=AmCharts.resetDateToMin(new Date(this.startTime-r),e,m,s).getTime(),a==e&&1==m&&(n=r*this.stepWidth),this.cellWidth=k*this.stepWidth,g=Math.round(l/r),d=-1,g/2==Math.round(g/2)&&(d=-2,l-=r),0<this.gridCount)for(g=d;g<=h;g++){q=l+1.5*r;q=AmCharts.resetDateToMin(new Date(q),e,m,s).getTime();k=(q-this.startTime)*
this.stepWidth;p=!1;this.nextPeriod[a]&&(p=this.checkPeriodChange(this.nextPeriod[a],1,q,l));var u=!1;p?(l=this.dateFormatsObject[this.nextPeriod[a]],u=!0):l=this.dateFormatsObject[a];t||(u=!1);l=AmCharts.formatDate(new Date(q),l);if(g==d&&!i||g==h&&!j)l=" ";k=new this.axisItemRenderer(this,k,l,!1,n,0,!1,u);this.pushAxisItem(k);l=q}}else if(this.parseDates){if(this.parseDates&&this.equalSpacing){f=this.start;this.startTime=this.data[this.start].time;this.endTime=this.data[this.end].time;this.timeDifference=
this.endTime-this.startTime;d=this.choosePeriod(0);e=d.period;m=d.count;r=AmCharts.getPeriodDuration(e,m);r<k&&(e=l.period,m=l.count,r=k);a=e;"WW"==a&&(a="DD");this.stepWidth=this.getStepWidth(g);h=Math.ceil(this.timeDifference/r)+1;l=AmCharts.resetDateToMin(new Date(this.startTime-r),e,m,s).getTime();this.cellWidth=this.getStepWidth(g);g=Math.round(l/r);d=-1;g/2==Math.round(g/2)&&(d=-2,l-=r);g=this.start;g/2==Math.round(g/2)&&g--;0>g&&(g=0);n=this.end+2;n>=this.data.length&&(n=this.data.length);
s=!1;for(this.end-this.start>this.gridCount&&(s=!0);g<n;g++)if(q=this.data[g].time,this.checkPeriodChange(e,m,q,l)){k=this.getCoordinate(g-this.start);p=!1;this.nextPeriod[a]&&(p=this.checkPeriodChange(this.nextPeriod[a],1,q,l));u=!1;p?(l=this.dateFormatsObject[this.nextPeriod[a]],u=!0):l=this.dateFormatsObject[a];l=AmCharts.formatDate(new Date(q),l);if(g==d&&!i||g==h&&!j)l=" ";s?s=!1:(t||(u=!1),k=new this.axisItemRenderer(this,k,l,void 0,void 0,void 0,void 0,u),k.graphics(),this.pushAxisItem(k));
l=q}}}else if(this.cellWidth=this.getStepWidth(g),g<h&&(h=g),f+=this.start,this.stepWidth=this.getStepWidth(g),0<h){t=Math.floor(g/h);g=f;g/2==Math.round(g/2)&&g--;0>g&&(g=0);for(h=0;g<=this.end+2;g+=t){l=0<=g&&g<this.data.length?this.data[g].category:"";k=this.getCoordinate(g-f);n=0;"start"==this.gridPosition&&(k-=this.cellWidth/2,n=this.cellWidth/2);if(g==d&&!i||g==this.end&&!j)l=void 0;Math.round(h/e)!=h/e&&(l=void 0);h++;s=this.cellWidth;m&&(s=NaN);k=new this.axisItemRenderer(this,k,l,!0,s,n,
void 0,!1,n);this.pushAxisItem(k)}}for(g=0;g<this.data.length;g++)if(i=this.data[g])j=this.parseDates&&!this.equalSpacing?Math.round((i.time-this.startTime)*this.stepWidth+this.cellWidth/2):this.getCoordinate(g-f),i.x[this.id]=j}i=this.guides.length;for(g=0;g<i;g++)j=this.guides[g],h=t=d=NaN,j.toCategory&&(h=b.getCategoryIndexByValue(j.toCategory),isNaN(h)||(d=this.getCoordinate(h-f),k=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,j),this.pushAxisItem(k))),j.category&&(h=b.getCategoryIndexByValue(j.category),
isNaN(h)||(t=this.getCoordinate(h-f),h=(d-t)/2,k=new this.axisItemRenderer(this,t,j.label,!0,NaN,h,j),this.pushAxisItem(k))),j.toDate&&(this.equalSpacing?(h=b.getClosestIndex(this.data,"time",j.toDate.getTime(),!1,0,this.data.length-1),isNaN(h)||(d=this.getCoordinate(h-f))):d=(j.toDate.getTime()-this.startTime)*this.stepWidth,k=new this.axisItemRenderer(this,d,"",!0,NaN,NaN,j),this.pushAxisItem(k)),j.date&&(this.equalSpacing?(h=b.getClosestIndex(this.data,"time",j.date.getTime(),!1,0,this.data.length-
1),isNaN(h)||(t=this.getCoordinate(h-f))):t=(j.date.getTime()-this.startTime)*this.stepWidth,h=(d-t)/2,k="H"==this.orientation?new this.axisItemRenderer(this,t,j.label,!1,2*h,NaN,j):new this.axisItemRenderer(this,t,j.label,!1,NaN,h,j),this.pushAxisItem(k)),d=new this.guideFillRenderer(this,t,d,j),t=d.graphics(),this.pushAxisItem(d),j.graphics=t,t.index=g,j.balloonText&&this.addEventListeners(t,j);this.axisCreated=!0;b=this.x;f=this.y;this.set.translate(b,f);this.labelsSet.translate(b,f);this.positionTitle();
(b=this.axisLine.set)&&b.toFront()},choosePeriod:function(a){var b=AmCharts.getPeriodDuration(this.periods[a].period,this.periods[a].count),b=Math.ceil(this.timeDifference/b),d=this.periods;return b<=this.gridCount?d[a]:a+1<d.length?this.choosePeriod(a+1):d[a]},getStepWidth:function(a){var b;this.startOnAxis?(b=this.axisWidth/(a-1),1==a&&(b=this.axisWidth)):b=this.axisWidth/a;return b},getCoordinate:function(a){a*=this.stepWidth;this.startOnAxis||(a+=this.stepWidth/2);return Math.round(a)},timeZoom:function(a,
b){this.startTime=a;this.endTime=b+this.minDuration()},minDuration:function(){var a=AmCharts.extractPeriod(this.minPeriod);return AmCharts.getPeriodDuration(a.period,a.count)},checkPeriodChange:function(a,b,d,e){var e=new Date(e),f=this.firstDayOfWeek,d=AmCharts.resetDateToMin(new Date(d),a,b,f).getTime(),a=AmCharts.resetDateToMin(e,a,b,f).getTime();return d!=a?!0:!1},generateDFObject:function(){this.dateFormatsObject={};for(var a=0;a<this.dateFormats.length;a++){var b=this.dateFormats[a];this.dateFormatsObject[b.period]=
b.format}},xToIndex:function(a){var b=this.data,d=this.chart,e=d.rotate,f=this.stepWidth;this.parseDates&&!this.equalSpacing?(a=this.startTime+Math.round(a/f)-this.minDuration()/2,d=d.getClosestIndex(b,"time",a,!1,this.start,this.end+1)):(this.startOnAxis||(a-=f/2),d=this.start+Math.round(a/f));var d=AmCharts.fitToBounds(d,0,b.length-1),g;b[d]&&(g=b[d].x[this.id]);e?g>this.height+1&&d--:g>this.width+1&&d--;0>g&&d++;return d=AmCharts.fitToBounds(d,0,b.length-1)},dateToCoordinate:function(a){return this.parseDates&&
!this.equalSpacing?(a.getTime()-this.startTime)*this.stepWidth:this.parseDates&&this.equalSpacing?(a=this.chart.getClosestIndex(this.data,"time",a.getTime(),!1,0,this.data.length-1),this.getCoordinate(a-this.start)):NaN},categoryToCoordinate:function(a){return this.chart?(a=this.chart.getCategoryIndexByValue(a),this.getCoordinate(a-this.start)):NaN},coordinateToDate:function(a){return this.equalSpacing?(a=this.xToIndex(a),new Date(this.data[a].time)):new Date(this.startTime+a/this.stepWidth)}});AmCharts.RecAxis=AmCharts.Class({construct:function(a){var b=a.chart,d=a.axisThickness,e=a.axisColor,f=a.axisAlpha,g=a.offset,h=a.dx,i=a.dy,j=a.viX,k=a.viY,l=a.viH,m=a.viW,r=b.container;"H"==a.orientation?(e=AmCharts.line(r,[0,m],[0,0],e,f,d),this.axisWidth=a.width,"bottom"==a.position?(a=d/2+g+l+k-1,d=j):(a=-d/2-g+k+i,d=h+j)):(this.axisWidth=a.height,"right"==a.position?(e=AmCharts.line(r,[0,0,-h],[0,l,l-i],e,f,d),a=k+i,d=d/2+g+h+m+j-1):(e=AmCharts.line(r,[0,0],[0,l],e,f,d),a=k,d=-d/2-g+j));e.translate(d,
a);b.axesSet.push(e);this.set=e}});AmCharts.RecItem=AmCharts.Class({construct:function(a,b,d,e,f,g,h,i,j){b=Math.round(b);void 0==d&&(d="");j||(j=0);void 0==e&&(e=!0);var k=a.chart.fontFamily,l=a.fontSize;void 0==l&&(l=a.chart.fontSize);var m=a.color;void 0==m&&(m=a.chart.color);var r=a.chart.container,n=r.set();this.set=n;var q=a.axisThickness,p=a.axisColor,s=a.axisAlpha,t=a.tickLength,u=a.gridAlpha,x=a.gridThickness,z=a.gridColor,y=a.dashLength,v=a.fillColor,C=a.fillAlpha,J=a.labelsEnabled,E=a.labelRotation,W=a.counter,L=a.inside,
N=a.dx,F=a.dy,S=a.orientation,M=a.position,Q=a.previousCoord,fa=a.viH,$=a.viW,aa=a.offset,ba,O;h?(J=!0,isNaN(h.tickLength)||(t=h.tickLength),void 0!=h.lineColor&&(z=h.lineColor),isNaN(h.lineAlpha)||(u=h.lineAlpha),isNaN(h.dashLength)||(y=h.dashLength),isNaN(h.lineThickness)||(x=h.lineThickness),!0==h.inside&&(L=!0),isNaN(h.labelRotation)||(E=h.labelRotation)):""==d&&(t=0);O="start";f&&(O="middle");var R=E*Math.PI/180,ha,D=0,w=0,ga=0,da=ha=0;"V"==S&&(E=0);if(J)var T=AmCharts.text(r,d,m,k,l,O,i),da=
T.getBBox().width;if("H"==S){if(0<=b&&b<=$+1&&(0<t&&(0<s&&b+j<=$+1)&&(ba=AmCharts.line(r,[b+j,b+j],[0,t],p,s,x),n.push(ba)),0<u&&(O=AmCharts.line(r,[b,b+N,b+N],[fa,fa+F,F],z,u,x,y),n.push(O))),w=0,D=b,h&&90==E&&(D-=l),!1==e?(O="start",w="bottom"==M?L?w+t:w-t:L?w-t:w+t,D+=3,f&&(D+=f/2,O="middle"),0<E&&(O="middle")):O="middle",1==W&&(0<C&&!h&&Q<$)&&(e=AmCharts.fitToBounds(b,0,$),Q=AmCharts.fitToBounds(Q,0,$),ha=e-Q,0<ha&&(fill=AmCharts.rect(r,ha,a.height,v,C),fill.translate(e-ha+N,F),n.push(fill))),
"bottom"==M?(w+=fa+l/2+aa,L?0<E?(w=fa-da/2*Math.sin(R)-t-3,D+=da/2*Math.cos(R)):w-=t+l+3+3:0<E?(w=fa+da/2*Math.sin(R)+t+3,D-=da/2*Math.cos(R)):w+=t+q+3+3):(w+=F+l/2-aa,D+=N,L?0<E?(w=da/2*Math.sin(R)+t+3,D-=da/2*Math.cos(R)):w+=t+3:0<E?(w=-(da/2)*Math.sin(R)-t-6,D+=da/2*Math.cos(R)):w-=t+l+3+q+3),"bottom"==M?ha=(L?fa-t-1:fa+q-1)+aa:(ga=N,ha=(L?F:F-t-q+1)-aa),g&&(D+=g),F=D,0<E&&(F+=da/2*Math.cos(R)),T&&(M=0,L&&(M=da*Math.cos(R)),F+M>$+1||0>F))T.remove(),T=null}else{0<=b&&b<=fa+1&&(0<t&&(0<s&&b+j<=fa+
1)&&(ba=AmCharts.line(r,[0,t],[b+j,b+j],p,s,x),n.push(ba)),0<u&&(O=AmCharts.line(r,[0,N,$+N],[b,b+F,b+F],z,u,x,y),n.push(O)));O="end";if(!0==L&&"left"==M||!1==L&&"right"==M)O="start";w=b-l/2;1==W&&(0<C&&!h)&&(e=AmCharts.fitToBounds(b,0,fa),Q=AmCharts.fitToBounds(Q,0,fa),R=e-Q,fill=AmCharts.polygon(r,[0,a.width,a.width,0],[0,0,R,R],v,C),fill.translate(N,e-R+F),n.push(fill));w+=l/2;"right"==M?(D+=N+$+aa,w+=F,L?(D-=t+4,g||(w-=l/2+3)):(D+=t+4+q,w-=2)):L?(D+=t+4-aa,g||(w-=l/2+3),h&&(D+=N,w+=F)):(D+=-t-
q-4-2-aa,w-=2);ba&&("right"==M?(ga+=N+aa+$,ha+=F,ga=L?ga-q:ga+q):(ga-=aa,L||(ga-=t+q)));g&&(w+=g);L=-3;"right"==M&&(L+=F);if(T&&(w>fa+1||w<L))T.remove(),T=null}ba&&ba.translate(ga,ha);!1==a.visible&&(ba&&ba.remove(),T&&(T.remove(),T=null));T&&(T.attr({"text-anchor":O}),T.translate(D,w),0!=E&&T.rotate(-E),a.allLabels.push(T)," "!=d&&(this.label=T));a.counter=0==W?1:0;a.previousCoord=b;0==this.set.node.childNodes.length&&this.set.remove()},graphics:function(){return this.set},getLabel:function(){return this.label}});AmCharts.RecFill=AmCharts.Class({construct:function(a,b,d,e){var f=a.dx,g=a.dy,h=a.orientation,i=0;if(d<b)var j=b,b=d,d=j;var k=e.fillAlpha;isNaN(k)&&(k=0);j=a.chart.container;e=e.fillColor;"V"==h?(b=AmCharts.fitToBounds(b,0,a.viH),d=AmCharts.fitToBounds(d,0,a.viH)):(b=AmCharts.fitToBounds(b,0,a.viW),d=AmCharts.fitToBounds(d,0,a.viW));d-=b;isNaN(d)&&(d=4,i=2,k=0);0>d&&"object"==typeof e&&(e=e.join(",").split(",").reverse());"V"==h?(a=AmCharts.rect(j,a.width,d,e,k),a.translate(f,b-i+g)):(a=AmCharts.rect(j,
d,a.height,e,k),a.translate(b-i+f,g));this.set=j.set([a])},graphics:function(){return this.set},getLabel:function(){}});AmCharts.RadAxis=AmCharts.Class({construct:function(a){var b=a.chart,d=a.axisThickness,e=a.axisColor,f=a.axisAlpha,g=a.x,h=a.y;this.set=b.container.set();b.axesSet.push(this.set);var i=a.axisTitleOffset,j=a.radarCategoriesEnabled,k=a.chart.fontFamily,l=a.fontSize;void 0==l&&(l=a.chart.fontSize);var m=a.color;void 0==m&&(m=a.chart.color);if(b){this.axisWidth=a.height;for(var a=b.chartData,r=a.length,n=0;n<r;n++){var q=180-360/r*n,p=g+this.axisWidth*Math.sin(q/180*Math.PI),s=h+this.axisWidth*Math.cos(q/
180*Math.PI),p=AmCharts.line(b.container,[g,p],[h,s],e,f,d);this.set.push(p);if(j){var t="start",p=g+(this.axisWidth+i)*Math.sin(q/180*Math.PI),s=h+(this.axisWidth+i)*Math.cos(q/180*Math.PI);if(180==q||0==q)t="middle",p-=5;0>q&&(t="end",p-=10);180==q&&(s-=5);0==q&&(s+=5);q=AmCharts.text(b.container,a[n].category,m,k,l,t);q.translate(p+5,s);this.set.push(q);q.getBBox()}}}}});AmCharts.RadItem=AmCharts.Class({construct:function(a,b,d,e,f,g,h){void 0==d&&(d="");var i=a.chart.fontFamily,j=a.fontSize;void 0==j&&(j=a.chart.fontSize);var k=a.color;void 0==k&&(k=a.chart.color);var l=a.chart.container;this.set=e=l.set();var m=a.axisColor,r=a.axisAlpha,n=a.tickLength,q=a.gridAlpha,p=a.gridThickness,s=a.gridColor,t=a.dashLength,u=a.fillColor,x=a.fillAlpha,z=a.labelsEnabled,f=a.counter,y=a.inside,v=a.gridType,b=b-a.height,C,g=a.x,J=a.y;h?(z=!0,isNaN(h.tickLength)||(n=h.tickLength),
void 0!=h.lineColor&&(s=h.lineColor),isNaN(h.lineAlpha)||(q=h.lineAlpha),isNaN(h.dashLength)||(t=h.dashLength),isNaN(h.lineThickness)||(p=h.lineThickness),!0==h.inside&&(y=!0)):d||(q/=3,n/=2);var E="end",W=-1;y&&(E="start",W=1);if(z){var L=AmCharts.text(l,d,k,i,j,E);L.translate(g+(n+3)*W,b);e.push(L);this.label=L;C=AmCharts.line(l,[g,g+n*W],[b,b],m,r,p);e.push(C)}b=a.y-b;if("polygons"==v){for(var N=[],F=[],S=a.data.length,d=0;d<S;d++)i=180-360/S*d,N.push(b*Math.sin(i/180*Math.PI)),F.push(b*Math.cos(i/
180*Math.PI));N.push(N[0]);F.push(F[0]);d=AmCharts.line(l,N,F,s,q,p,t)}else d=AmCharts.circle(l,b,"#FFFFFF",0,p,s,q);d.translate(g,J);e.push(d);if(1==f&&0<x&&!h){h=a.previousCoord;if("polygons"==v){for(d=S;0<=d;d--)i=180-360/S*d,N.push(h*Math.sin(i/180*Math.PI)),F.push(h*Math.cos(i/180*Math.PI));N=AmCharts.polygon(l,N,F,u,x)}else N=AmCharts.wedge(l,0,0,0,-360,b,b,h,0,{fill:u,"fill-opacity":x,stroke:0,"stroke-opacity":0,"stroke-width":0});e.push(N);N.translate(g,J)}!1==a.visible&&(C&&C.hide(),L&&L.hide());
a.counter=0==f?1:0;a.previousCoord=b},graphics:function(){return this.set},getLabel:function(){return this.label}});AmCharts.RadarFill=AmCharts.Class({construct:function(a,b,d,e){var f=Math.max(b,d),b=d=Math.min(b,d),d=a.chart.container,g=e.fillAlpha,h=e.fillColor,f=Math.abs(f)-a.y,b=Math.abs(b)-a.y,i=-e.angle,e=-e.toAngle;isNaN(i)&&(i=0);isNaN(e)&&(e=-360);this.set=d.set();void 0==h&&(h="#000000");isNaN(g)&&(g=0);if("polygons"==a.gridType){for(var e=[],j=[],k=a.data.length,l=0;l<k;l++)i=180-360/k*l,e.push(f*Math.sin(i/180*Math.PI)),j.push(f*Math.cos(i/180*Math.PI));e.push(e[0]);j.push(j[0]);for(l=k;0<=l;l--)i=
180-360/k*l,e.push(b*Math.sin(i/180*Math.PI)),j.push(b*Math.cos(i/180*Math.PI));this.fill=AmCharts.polygon(d,e,j,h,g)}else this.fill=AmCharts.wedge(d,0,0,i,e-i,f,f,b,0,{fill:h,"fill-opacity":g,stroke:0,"stroke-opacity":0,"stroke-width":0});this.set.push(this.fill);this.fill.translate(a.x,a.y)},graphics:function(){return this.set},getLabel:function(){}});AmCharts.AmGraph=AmCharts.Class({construct:function(){this.createEvents("rollOverGraphItem","rollOutGraphItem","clickGraphItem","doubleClickGraphItem");this.type="line";this.stackable=!0;this.columnCount=1;this.columnIndex=0;this.centerCustomBullets=this.showBalloon=!0;this.maxBulletSize=50;this.minBulletSize=0;this.balloonText="[[value]]";this.hidden=this.scrollbar=this.animationPlayed=!1;this.columnWidth=0.8;this.pointPosition="middle";this.depthCount=1;this.includeInMinMax=!0;this.negativeBase=
0;this.visibleInLegend=!0;this.showAllValueLabels=!1;this.showBalloonAt="close";this.lineThickness=1;this.dashLength=0;this.connect=!0;this.lineAlpha=1;this.bullet="none";this.bulletBorderThickness=2;this.bulletAlpha=this.bulletBorderAlpha=1;this.bulletSize=8;this.hideBulletsCount=this.bulletOffset=0;this.labelPosition="top";this.cornerRadiusTop=0;this.cursorBulletAlpha=1;this.gradientOrientation="vertical";this.dy=this.dx=0;this.periodValue="";this.y=this.x=0},draw:function(){var a=this.chart,b=
a.container;this.container=b;this.destroy();var d=b.set(),e=b.set();this.behindColumns?(a.graphsBehindSet.push(d),a.bulletBehindSet.push(e)):(a.graphsSet.push(d),a.bulletSet.push(e));this.bulletSet=e;if(!this.scrollbar){var f=a.marginLeftReal,a=a.marginTopReal;d.translate(f,a);e.translate(f,a)}if("column"==this.type)var g=b.set();AmCharts.remove(this.columnsSet);d.push(g);this.set=d;this.columnsSet=g;this.columnsArray=[];this.ownColumns=[];this.allBullets=[];this.animationArray=[];AmCharts.ifArray(this.data)&&
(b=!1,"xy"==this.chartType?this.xAxis.axisCreated&&this.yAxis.axisCreated&&(b=!0):this.valueAxis.axisCreated&&(b=!0),!this.hidden&&b&&this.createGraph())},createGraph:function(){var a=this.chart;"inside"==this.labelPosition&&(this.labelPosition="bottom");this.startAlpha=a.startAlpha;this.seqAn=a.sequencedAnimation;this.baseCoord=this.valueAxis.baseCoord;this.fillColors||(this.fillColors=this.lineColor);void 0==this.fillAlphas&&(this.fillAlphas=0);void 0==this.bulletColor&&(this.bulletColor=this.lineColor,
this.bulletColorNegative=this.negativeLineColor);void 0==this.bulletAlpha&&(this.bulletAlpha=this.lineAlpha);this.bulletBorderColor||(this.bulletBorderAlpha=0);if(!isNaN(this.valueAxis.min)&&!isNaN(this.valueAxis.max)){switch(this.chartType){case "serial":this.createSerialGraph();break;case "radar":this.createRadarGraph();break;case "xy":this.createXYGraph(),this.positiveClip(this.set)}this.animationPlayed=!0}},createXYGraph:function(){var a=[],b=[],d=this.xAxis,e=this.yAxis;this.pmh=e.viH+1;this.pmw=
d.viW+1;this.pmy=this.pmx=0;for(var f=this.start;f<=this.end;f++){var g=this.data[f].axes[d.id].graphs[this.id],h=g.values,i=h.x,j=h.y,h=d.getCoordinate(i),k=e.getCoordinate(j);if(!isNaN(i)&&!isNaN(j)&&(a.push(h),b.push(k),(i=this.createBullet(g,h,k,f))||(i=0),j=this.labelText))g=this.createLabel(g,h,k,j),this.positionLabel(h,k,g,this.labelPosition,i)}this.drawLineGraph(a,b);this.launchAnimation()},createRadarGraph:function(){for(var a=this.valueAxis.stackType,b=[],d=[],e,f,g=this.start;g<=this.end;g++){var h=
this.data[g].axes[this.valueAxis.id].graphs[this.id],i;i="none"==a||"3d"==a?h.values.value:h.values.close;if(isNaN(i))this.drawLineGraph(b,d),b=[],d=[];else{var j=this.y-(this.valueAxis.getCoordinate(i)-this.height),k=180-360/(this.end-this.start+1)*g;i=j*Math.sin(k/180*Math.PI);j*=Math.cos(k/180*Math.PI);b.push(i);d.push(j);(k=this.createBullet(h,i,j,g))||(k=0);var l=this.labelText;l&&(h=this.createLabel(h,i,j,l),this.positionLabel(i,j,h,this.labelPosition,k));isNaN(e)&&(e=i);isNaN(f)&&(f=j)}}b.push(e);
d.push(f);this.drawLineGraph(b,d);this.launchAnimation()},positionLabel:function(a,b,d,e,f){var g=d.getBBox();switch(e){case "left":a-=(g.width+f)/2+2;break;case "top":b-=(f+g.height)/2+1;break;case "right":a+=(g.width+f)/2+2;break;case "bottom":b+=(f+g.height)/2+1}d.translate(a,b)},createSerialGraph:function(){var a=this.id,b=this.index,d=this.data,e=this.chart.container,f=this.valueAxis,g=this.type,h=this.columnWidth,i=this.width,j=this.height,k=this.y,l=this.rotate,m=this.columnCount,r=AmCharts.toCoordinate(this.cornerRadiusTop,
h/2),n=this.connect,q=[],p=[],s,t,u=this.chart.graphs.length,x,z=this.dx/this.depthCount,y=this.dy/this.depthCount,v=f.stackType,C=this.labelPosition,J=this.start,E=this.end,W=this.scrollbar,L=this.categoryAxis,N=this.baseCoord,F=this.negativeBase,S=this.columnIndex,M=this.lineThickness,Q=this.lineAlpha,fa=this.lineColor,$=this.dashLength,aa=this.set;"above"==C&&(C="top");"below"==C&&(C="bottom");var ba=270;"horizontal"==this.gradientOrientation&&(ba=0);this.gradientRotation=ba;var O=this.chart.columnSpacing,
R=L.cellWidth,ha=(R*h-m)/m;O>ha&&(O=ha);var D,w,ga,da=j+1,T=i+1,Ka=0,Sa=0,Ta,Ua,La,Ma,zb=this.fillColors,Da=this.negativeFillColors,va=this.negativeLineColor,Ea=this.fillAlphas,Fa=this.negativeFillAlphas;"object"==typeof Ea&&(Ea=Ea[0]);"object"==typeof Fa&&(Fa=Fa[0]);var Na=f.getCoordinate(f.min);f.logarithmic&&(Na=f.getCoordinate(f.minReal));this.minCoord=Na;this.resetBullet&&(this.bullet="none");if(!W&&("line"==g||"smoothedLine"==g||"step"==g))if(1==d.length&&("step"!=g&&"none"==this.bullet)&&(this.bullet=
"round",this.resetBullet=!0),Da||void 0!=va){var wa=F;wa>f.max&&(wa=f.max);wa<f.min&&(wa=f.min);f.logarithmic&&(wa=f.minReal);var ra=f.getCoordinate(wa),lb=f.getCoordinate(f.max);l?(da=j,T=Math.abs(lb-ra),Ta=j,Ua=Math.abs(Na-ra),Ma=Sa=0,f.reversed?(Ka=0,La=ra):(Ka=ra,La=0)):(T=i,da=Math.abs(lb-ra),Ua=i,Ta=Math.abs(Na-ra),La=Ka=0,f.reversed?(Ma=k,Sa=ra):Ma=ra+1)}var sa=Math.round;this.pmx=sa(Ka);this.pmy=sa(Sa);this.pmh=sa(da);this.pmw=sa(T);this.nmx=sa(La);this.nmy=sa(Ma);this.nmh=sa(Ta);this.nmw=
sa(Ua);h="column"==g?(R*h-O*(m-1))/m:R*h;1>h&&(h=1);var K;if("line"==g||"step"==g||"smoothedLine"==g){if(0<J)for(K=J-1;-1<K;K--)if(D=d[K],w=D.axes[f.id].graphs[a],ga=w.values.value){J=K;break}if(E<d.length-1)for(K=E+1;K<d.length;K++)if(D=d[K],w=D.axes[f.id].graphs[a],ga=w.values.value){E=K;break}}E<d.length-1&&E++;var ka=[],la=[],Va=!1;if("line"==g||"step"==g||"smoothedLine"==g)if(this.stackable&&"regular"==v||"100%"==v)Va=!0;for(K=J;K<=E;K++){D=d[K];w=D.axes[f.id].graphs[a];w.index=K;var ma=NaN,
B=NaN,A=NaN,X=NaN,U=NaN,Oa=NaN,xa=NaN,Pa=NaN,ya=NaN,V=NaN,Y=NaN,na=NaN,oa=NaN,P=NaN,ja=void 0,ta=zb,Ga=Ea,ea=fa;void 0!=w.color&&(ta=w.color);w.fillColors&&(ta=w.fillColors);isNaN(w.alpha)||(Ga=w.alpha);var pa=w.values;f.recalculateToPercents&&(pa=w.percents);if(pa){P=!this.stackable||"none"==v||"3d"==v?pa.value:pa.close;if("candlestick"==g||"ohlc"==g)var P=pa.close,Wa=pa.low,xa=f.getCoordinate(Wa),Xa=pa.high,ya=f.getCoordinate(Xa);var ia=pa.open,A=f.getCoordinate(P);isNaN(ia)||(U=f.getCoordinate(ia));
if(!W)switch(this.showBalloonAt){case "close":w.y=A;break;case "open":w.y=U;break;case "high":w.y=ya;break;case "low":w.y=xa}var ma=D.x[L.id],za=Math.round(R/2),Ya=za;"start"==this.pointPosition&&(ma-=R/2,za=0,Ya=R);W||(w.x=ma);-1E5>ma&&(ma=-1E5);ma>i+1E5&&(ma=i+1E5);l?(B=A,X=U,U=A=ma,isNaN(ia)&&(X=N),Oa=xa,Pa=ya):(X=B=ma,isNaN(ia)&&(U=N));switch(g){case "line":isNaN(P)?n||(this.drawLineGraph(q,p,ka,la),q=[],p=[],ka=[],la=[]):(w.isNegative=P<F?!0:!1,q.push(B),p.push(A),V=B,Y=A,na=B,oa=A,Va&&(ka.push(X),
la.push(U)));break;case "smoothedLine":isNaN(P)?n||(this.drawSmoothedGraph(q,p,ka,la),q=[],p=[],ka=[],la=[]):(w.isNegative=P<F?!0:!1,q.push(B),p.push(A),V=B,Y=A,na=B,oa=A,Va&&(ka.push(X),la.push(U)));break;case "step":isNaN(P)?n||(t=NaN,this.drawLineGraph(q,p,ka,la),q=[],p=[],ka=[],la=[]):(w.isNegative=P<F?!0:!1,l?(isNaN(s)||(q.push(s),p.push(A-za)),p.push(A-za),q.push(B),p.push(A+Ya),q.push(B)):(isNaN(t)||(p.push(t),q.push(B-za)),q.push(B-za),p.push(A),q.push(B+Ya),p.push(A)),s=B,t=A,V=B,Y=A,na=
B,oa=A);break;case "column":var Aa=ea;void 0!=w.lineColor&&(Aa=w.lineColor);if(!isNaN(P)){P<F?(w.isNegative=!0,Da&&(ta=Da),void 0!=va&&(ea=va)):w.isNegative=!1;var mb=f.min,nb=f.max;if(!(P<mb&&(ia<mb||void 0==ia)||P>nb&&ia>nb))if(l){if("3d"==v)var H=A-0.5*(h+O)+O/2+y*S,I=X+z*S;else H=A-(m/2-S)*(h+O)+O/2,I=X;var G=h,V=B,Y=H+h/2,na=B,oa=H+h/2;H+G>j&&(G=j-H);0>H&&(G+=H,H=0);var Z=B-X,Ab=I,I=AmCharts.fitToBounds(I,0,i),Z=Z+(Ab-I),Z=AmCharts.fitToBounds(Z,-I,i-I+z*S);if(H<j&&0<G&&(ja=new AmCharts.Cuboid(e,
Z,G,z,y,ta,Ga,M,Aa,Q,ba,r,l),"bottom"!=C))if(C=f.reversed?"left":"right",0>P)C=f.reversed?"right":"left";else if("regular"==v||"100%"==v)V+=this.dx}else{"3d"==v?(I=B-0.5*(h+O)+O/2+z*S,H=U+y*S):(I=B-(m/2-S)*(h+O)+O/2,H=U);G=h;V=I+h/2;Y=A;na=I+h/2;oa=A;I+G>i+S*z&&(G=i-I+S*z);0>I&&(G+=I,I=0);var Z=A-U,Bb=H,H=AmCharts.fitToBounds(H,0,j),Z=Z+(Bb-H),Z=AmCharts.fitToBounds(Z,-H+y*S,j-H);if(I<i+S*z&&0<G)if(ja=new AmCharts.Cuboid(e,G,Z,z,y,ta,Ga,M,Aa,this.lineAlpha,ba,r,l),0>P&&"middle"!=C)C="bottom";else if("regular"==
v||"100%"==v)Y+=this.dy}if(ja){var qa=ja.set;qa.translate(I,H);this.columnsSet.push(qa);w.url&&qa.setAttr("cursor","pointer");if(!W){"none"==v&&(x=l?(this.end+1-K)*u-b:u*K+b);"3d"==v&&(l?(x=(u-b)*(this.end+1-K),V+=z*this.columnIndex,na+=z*this.columnIndex,w.y+=z*this.columnIndex):(x=(u-b)*(K+1),V+=3,Y+=y*this.columnIndex+7,oa+=y*this.columnIndex,w.y+=y*this.columnIndex));if("regular"==v||"100%"==v)C="middle",x=l?0<pa.value?(this.end+1-K)*u+b:(this.end+1-K)*u-b:0<pa.value?u*K+b:u*K-b;this.columnsArray.push({column:ja,
depth:x});w.x=l?H+G/2:I+G/2;this.ownColumns.push(ja);this.animateColumns(ja,K,B,X,A,U);this.addListeners(qa,w)}w.columnSprite=qa}}break;case "candlestick":if(!isNaN(ia)&&!isNaN(Xa)&&!isNaN(Wa)&&!isNaN(P)){var Qa,Za;P<ia&&(w.isNegative=!0,Da&&(ta=Da),Fa&&(Ga=Fa),void 0!=va&&(ea=va));Aa=ea;if(l){if(H=A-h/2,I=X,G=h,H+G>j&&(G=j-H),0>H&&(G+=H,H=0),H<j&&0<G){var $a,ab;P>ia?($a=[B,Pa],ab=[X,Oa]):($a=[X,Pa],ab=[B,Oa]);A<j&&0<A&&(Qa=AmCharts.line(e,$a,[A,A],ea,Q,M),Za=AmCharts.line(e,ab,[A,A],ea,Q,M));Z=B-
X;ja=new AmCharts.Cuboid(e,Z,G,z,y,ta,Ea,M,Aa,Q,ba,r,l)}}else if(I=B-h/2,H=U+M/2,G=h,I+G>i&&(G=i-I),0>I&&(G+=I,I=0),Z=A-U,I<i&&0<G){var ja=new AmCharts.Cuboid(e,G,Z,z,y,ta,Ga,M,Aa,Q,ba,r,l),bb,cb;P>ia?(bb=[A,ya],cb=[U,xa]):(bb=[U,ya],cb=[A,xa]);B<i&&0<B&&(Qa=AmCharts.line(e,[B,B],bb,ea,Q,M),Za=AmCharts.line(e,[B,B],cb,ea,Q,M))}ja&&(qa=ja.set,aa.push(qa),qa.translate(I,H),w.url&&qa.setAttr("cursor","pointer"),Qa&&(aa.push(Qa),aa.push(Za)),V=B,Y=A,na=B,oa=A,W||(w.x=l?H+G/2:I+G/2,this.animateColumns(ja,
K,B,X,A,U),this.addListeners(qa,w)))}break;case "ohlc":if(!isNaN(ia)&&!isNaN(Xa)&&!isNaN(Wa)&&!isNaN(P)){P<ia&&(w.isNegative=!0,void 0!=va&&(ea=va));var db,eb,fb;if(l){var gb=A-h/2,gb=AmCharts.fitToBounds(gb,0,j),ob=AmCharts.fitToBounds(A,0,j),hb=A+h/2,hb=AmCharts.fitToBounds(hb,0,j);eb=AmCharts.line(e,[X,X],[gb,ob],ea,Q,M,$);0<A&&A<j&&(db=AmCharts.line(e,[Oa,Pa],[A,A],ea,Q,M,$));fb=AmCharts.line(e,[B,B],[ob,hb],ea,Q,M,$)}else{var ib=B-h/2,ib=AmCharts.fitToBounds(ib,0,i),pb=AmCharts.fitToBounds(B,
0,i),jb=B+h/2,jb=AmCharts.fitToBounds(jb,0,i);eb=AmCharts.line(e,[ib,pb],[U,U],ea,Q,M,$);0<B&&B<i&&(db=AmCharts.line(e,[B,B],[xa,ya],ea,Q,M,$));fb=AmCharts.line(e,[pb,jb],[A,A],ea,Q,M,$)}aa.push(eb);aa.push(db);aa.push(fb);V=B;Y=A;na=B;oa=A}}if(!W&&!isNaN(P)){var qb=this.hideBulletsCount;if(this.end-this.start<=qb||0==qb){var Ba=this.createBullet(w,na,oa,K);Ba||(Ba=0);var rb=this.labelText;if(rb){var ca=this.createLabel(w,0,0,rb),ua=0,Ca=0,sb=ca.getBBox(),Ra=sb.width,kb=sb.height;switch(C){case "left":ua=
-(Ra/2+Ba/2+3);break;case "top":Ca=-(kb/2+Ba/2+3);break;case "right":ua=Ba/2+2+Ra/2;break;case "bottom":l&&"column"==g?(V=N,0>P?(ua=-6,ca.attr({"text-anchor":"end"})):(ua=6,ca.attr({"text-anchor":"start"}))):(Ca=Ba/2+kb/2,ca.x=-(Ra/2+2));break;case "middle":"column"==g&&(l?(ua=-(B-X)/2-z,0>Z&&(ua+=z),Math.abs(B-X)<Ra&&!this.showAllValueLabels&&(ca.remove(),ca=null)):(Ca=-(A-U)/2,0>Z&&(Ca-=y),Math.abs(A-U)<kb&&!this.showAllValueLabels&&(ca.remove(),ca=null)))}if(ca)if(!isNaN(Y)&&!isNaN(V))if(V+=ua,
Y+=Ca,ca.translate(V,Y),l){if(0>Y||Y>j)ca.remove(),ca=null}else{var tb=0;"3d"==v&&(tb=z*S);if(0>V||V>i+tb)ca.remove(),ca=null}else ca.remove(),ca=null}if("column"==g&&"regular"==v||"100%"==v){var ub=f.totalText;if(ub){var Ha=this.createLabel(w,0,0,ub),vb=Ha.getBBox(),wb=vb.width,xb=vb.height,Ia,Ja,yb=f.totals[K];yb&&yb.remove();l?(Ja=A,Ia=0>P?B-wb/2-2:B+wb/2+3):(Ia=B,Ja=0>P?A+xb/2:A-xb/2-3);Ha.translate(Ia,Ja);f.totals[K]=Ha;l?(0>Ja||Ja>j)&&Ha.remove():(0>Ia||Ia>i)&&Ha.remove()}}}}}}if("line"==g||
"step"==g||"smoothedLine"==g)"smoothedLine"==g?this.drawSmoothedGraph(q,p,ka,la):this.drawLineGraph(q,p,ka,la),W||this.launchAnimation()},animateColumns:function(a,b){var d=this,e=d.chart.startDuration;0<e&&!d.animationPlayed&&(d.seqAn?(a.set.hide(),d.animationArray.push(a),e=setTimeout(function(){d.animate.call(d)},1E3*e/(d.end-d.start+1)*(b-d.start)),d.timeOuts.push(e)):d.animate(a))},createLabel:function(a,b,d,e){var f=this.chart,g=this.color;void 0==g&&(g=f.color);var h=this.fontSize;void 0==
h&&(h=f.fontSize);a=f.formatString(e,a,this);a=AmCharts.cleanFromEmpty(a);f=AmCharts.text(this.container,a,g,f.fontFamily,h);f.translate(b,d);this.bulletSet.push(f);this.allBullets.push(f);return f},positiveClip:function(a){a.clipRect(this.pmx,this.pmy,this.pmw,this.pmh)},negativeClip:function(a){a.clipRect(this.nmx,this.nmy,this.nmw,this.nmh)},drawLineGraph:function(a,b,d,e){if(1<a.length){var f=this.set,g=this.container,h=g.set(),i=g.set();f.push(h);f.push(i);var j=this.lineAlpha,k=this.lineThickness,
l=this.dashLength,f=this.fillAlphas,m=this.fillColors,r=this.negativeLineColor,n=this.negativeFillColors,q=this.negativeFillAlphas,p=this.baseCoord,s=AmCharts.line(g,a,b,this.lineColor,j,k,l,!1,!0);h.push(s);void 0!=r&&(j=AmCharts.line(g,a,b,r,j,k,l,!1,!0),i.push(j));if(0<f&&(j=a.join(";").split(";"),k=b.join(";").split(";"),"serial"==this.chartType&&(0<d.length?(d.reverse(),e.reverse(),j=a.concat(d),k=b.concat(e)):this.rotate?(k.push(k[k.length-1]),j.push(p),k.push(k[0]),j.push(p),k.push(k[0]),j.push(j[0])):
(j.push(j[j.length-1]),k.push(p),j.push(j[0]),k.push(p),j.push(a[0]),k.push(k[0]))),a=AmCharts.polygon(g,j,k,m,f,0,0,0,this.gradientRotation),h.push(a),n||void 0!=r))q||(q=f),n||(n=r),g=AmCharts.polygon(g,j,k,n,q,0,0,0,this.gradientRotation),i.push(g);this.applyMask(i,h)}},applyMask:function(a,b){var d=a.length();"serial"==this.chartType&&!this.scrollbar&&(this.positiveClip(b),0<d&&this.negativeClip(a))},drawSmoothedGraph:function(a,b,d,e){if(1<a.length){var f=this.set,g=this.container,h=g.set(),
i=g.set();f.push(h);f.push(i);var j=this.lineAlpha,k=this.lineThickness,f=this.dashLength,l=this.fillAlphas,m=this.fillColors,r=this.negativeLineColor,n=this.negativeFillColors,q=this.negativeFillAlphas,p=this.baseCoord,s=new AmCharts.Bezier(g,a,b,this.lineColor,j,k,m,0,f);h.push(s.path);void 0!=r&&(j=new AmCharts.Bezier(g,a,b,r,j,k,m,0,f),i.push(j.path));if(0<l&&(k=a.join(";").split(";"),s=b.join(";").split(";"),j="",0<d.length?(d.reverse(),e.reverse(),k=a.concat(d),s=b.concat(e)):(this.rotate?(j+=
" L"+p+","+b[b.length-1],j+=" L"+p+","+b[0]):(j+=" L"+a[a.length-1]+","+p,j+=" L"+a[0]+","+p),j+=" L"+a[0]+","+b[0]),d=new AmCharts.Bezier(g,k,s,NaN,0,0,m,l,f,j),h.push(d.path),n||void 0!=r))q||(q=l),n||(n=r),a=new AmCharts.Bezier(g,a,b,NaN,0,0,n,q,f,j),i.push(a.path);this.applyMask(i,h)}},launchAnimation:function(){var a=this,b=a.chart.startDuration;if(0<b&&!a.animationPlayed){var d=a.set,e=a.bulletSet;AmCharts.VML||(d.attr({opacity:a.startAlpha}),e.attr({opacity:a.startAlpha}));d.hide();e.hide();
a.seqAn?(b=setTimeout(function(){a.animateGraphs.call(a)},1E3*a.index*b),a.timeOuts.push(b)):a.animateGraphs()}},animateGraphs:function(){var a=this.chart,b=this.set,d=this.bulletSet,e=this.x,f=this.y;b.show();d.show();var g=a.startDuration,a=a.startEffect;b&&(this.rotate?(b.translate(-1E3,f),d.translate(-1E3,f)):(b.translate(e,-1E3),d.translate(e,-1E3)),b.animate({opacity:1,translate:e+","+f},g,a),d.animate({opacity:1,translate:e+","+f},g,a))},animate:function(a){var b=this.chart,d=this.container,
e=this.animationArray;!a&&0<e.length&&(a=e[0],e.shift());d=d[AmCharts.getEffect(b.startEffect)];b=b.startDuration;a&&(this.rotate?a.animateWidth(b,d):a.animateHeight(b,d),a.set.show())},legendKeyColor:function(){var a=this.legendColor,b=this.lineAlpha;void 0==a&&(a=this.lineColor,0==b&&(b=this.fillColors)&&(a="object"==typeof b?b[0]:b));return a},legendKeyAlpha:function(){var a=this.legendAlpha;void 0==a&&(a=this.lineAlpha,0==a&&this.fillAlphas&&(a=this.fillAlphas),0==a&&(a=this.bulletAlpha),0==a&&
(a=1));return a},createBullet:function(a,b,d){var e=this.container,f=this.bulletOffset,g=this.bulletSize;isNaN(a.bulletSize)||(g=a.bulletSize);if(!isNaN(this.maxValue)){var h=a.values.value;isNaN(h)||(g=h/this.maxValue*this.maxBulletSize)}g<this.minBulletSize&&(g=this.minBulletSize);this.rotate?b+=f:d-=f;var i;if("none"!=this.bullet||a.bullet){var j=this.bulletColor;a.isNegative&&void 0!=this.bulletColorNegative&&(j=this.bulletColorNegative);void 0!=a.color&&(j=a.color);f=this.bullet;a.bullet&&(f=
a.bullet);var h=this.bulletBorderThickness,k=this.bulletBorderColor,l=this.bulletBorderAlpha,m=this.bulletAlpha,r=a.alpha;isNaN(r)||(m=r);switch(f){case "round":i=AmCharts.circle(e,g/2,j,m,h,k,l);break;case "square":i=AmCharts.polygon(e,[0,g,g,0],[0,0,g,g],j,m,h,k,l);b-=g/2;d-=g/2;break;case "triangleUp":i=AmCharts.triangle(e,g,0,j,m,h,k,l);break;case "triangleDown":i=AmCharts.triangle(e,g,180,j,m,h,k,l);break;case "triangleLeft":i=AmCharts.triangle(e,g,270,j,m,h,k,l);break;case "triangleRight":i=
AmCharts.triangle(e,g,90,j,m,h,k,l);break;case "bubble":i=AmCharts.circle(e,g/2,j,m,h,k,l,!0)}}h=f=0;if(this.customBullet||a.customBullet)k=this.customBullet,a.customBullet&&(k=a.customBullet),k&&(i&&i.remove(),"function"==typeof k?(i=new k,i.chart=this.chart,a.bulletConfig&&(i.availableSpace=d,i.graph=this,a.bulletConfig.minCoord=this.minCoord-d,i.bulletConfig=a.bulletConfig),i.write(e),i=i.set):(this.chart.path&&(k=this.chart.path+k),i=e.image(k,0,0,g,g),this.centerCustomBullets&&(b-=g/2,d-=g/2,
f-=g/2,h-=g/2)));if(i){a.url&&i.setAttr("cursor","pointer");this.allBullets.push(i);if("serial"==this.chartType&&(0>b-f||b-f>this.width||d<-g/2||d-h>this.height))i.remove(),i=null;i&&(this.bulletSet.push(i),i.translate(b,d),this.addListeners(i,a))}return g},showBullets:function(){for(var a=this.allBullets,b=0;b<a.length;b++)a[b].show()},hideBullets:function(){for(var a=this.allBullets,b=0;b<a.length;b++)a[b].hide()},addListeners:function(a,b){var d=this;a.mouseover(function(){d.handleRollOver(b)}).mouseout(function(){d.handleRollOut(b)}).click(function(){d.handleClick(b)}).dblclick(function(){d.handleDoubleClick(b)})},
handleRollOver:function(a){if(a){var b=this.chart,d={type:"rollOverGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart};this.fire("rollOverGraphItem",d);b.fire("rollOverGraphItem",d);clearTimeout(b.hoverInt);d=this.showBalloon;b.chartCursor&&"serial"==this.chartType&&(d=!1,!b.chartCursor.valueBalloonsEnabled&&this.showBalloon&&(d=!0));d&&(d=b.formatString(this.balloonText,a,a.graph),d=AmCharts.cleanFromEmpty(d),a=b.getBalloonColor(this,a),b.balloon.showBullet=!1,b.balloon.pointerOrientation=
"V",b.showBalloon(d,a,!0))}},handleRollOut:function(a){this.chart.hideBalloon();a&&(a={type:"rollOutGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart},this.fire("rollOutGraphItem",a),this.chart.fire("rollOutGraphItem",a))},handleClick:function(a){if(a){var b={type:"clickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart};this.fire("clickGraphItem",b);this.chart.fire("clickGraphItem",b);AmCharts.getURL(a.url,this.urlTarget)}},handleDoubleClick:function(a){a&&
(a={type:"doubleClickGraphItem",item:a,index:a.index,graph:this,target:this,chart:this.chart},this.fire("doubleClickGraphItem",a),this.chart.fire("doubleClickGraphItem",a))},zoom:function(a,b){this.start=a;this.end=b;this.draw()},changeOpacity:function(a){var b=this.set;b&&b.setAttr("opacity",a);if(b=this.ownColumns)for(var d=0;d<b.length;d++){var e=b[d].set;e&&e.setAttr("opacity",a)}(b=this.bulletSet)&&b.setAttr("opacity",a)},destroy:function(){AmCharts.remove(this.set);AmCharts.remove(this.bulletSet);
var a=this.timeOuts;if(a)for(var b=0;b<a.length;b++)clearTimeout(a[b]);this.timeOuts=[]}});AmCharts.ChartCursor=AmCharts.Class({construct:function(){this.createEvents("changed","zoomed","onHideCursor","draw");this.enabled=!0;this.cursorAlpha=1;this.selectionAlpha=0.2;this.cursorColor="#CC0000";this.categoryBalloonAlpha=1;this.color="#FFFFFF";this.type="cursor";this.zoomed=!1;this.zoomable=!0;this.pan=!1;this.animate=!0;this.categoryBalloonDateFormat="MMM DD, YYYY";this.categoryBalloonEnabled=this.valueBalloonsEnabled=!0;this.rolledOver=!1;this.cursorPosition="middle";this.bulletsEnabled=
this.skipZoomDispatch=!1;this.bulletSize=8;this.oneBalloonOnly=!1},draw:function(){var a=this;a.destroy();var b=a.chart,d=b.container;a.rotate=b.rotate;a.container=d;d=d.set();d.translate(a.x,a.y);a.set=d;b.cursorSet.push(d);d=new AmCharts.AmBalloon;d.chart=b;a.categoryBalloon=d;d.cornerRadius=0;d.borderThickness=0;d.borderAlpha=0;d.showBullet=!1;var e=a.categoryBalloonColor;void 0==e&&(e=a.cursorColor);d.fillColor=e;d.fillAlpha=a.categoryBalloonAlpha;d.borderColor=e;d.color=a.color;a.rotate&&(d.pointerOrientation=
"H");if(a.valueBalloonsEnabled)for(d=0;d<b.graphs.length;d++)e=new AmCharts.AmBalloon,e.chart=b,AmCharts.copyProperties(b.balloon,e),b.graphs[d].valueBalloon=e;"cursor"==a.type?a.createCursor():a.createCrosshair();a.interval=setInterval(function(){a.detectMovement.call(a)},40)},updateData:function(){var a=this.chart.chartData;this.data=a;AmCharts.ifArray(a)&&(this.firstTime=a[0].time,this.lastTime=a[a.length-1].time)},createCursor:function(){var a=this.chart,b=this.cursorAlpha,d=a.categoryAxis,e=
d.position,f=d.inside,g=d.axisThickness,h=this.categoryBalloon,i,j,k=a.dx,l=a.dy,m=this.x,r=this.y,n=this.width,q=this.height,a=a.rotate,p=d.tickLength;h.pointerWidth=p;a?(i=[0,n,n+k],j=[0,0,l]):(i=[k,0,0],j=[l,0,q-1]);this.line=b=AmCharts.line(this.container,i,j,this.cursorColor,b,1);this.set.push(b);a?(f&&(h.pointerWidth=0),"right"==e?f?h.setBounds(m,r+l,m+n+k,r+q+l):h.setBounds(m+n+k+g,r+l,m+n+1E3,r+q+l):f?h.setBounds(m,r,n+m,q+r):h.setBounds(-1E3,-1E3,m-p-g,r+q+15)):(h.maxWidth=n,d.parseDates&&
(p=0,h.pointerWidth=0),"top"==e?f?h.setBounds(m+k,r+l,n+k+m,q+r):h.setBounds(m+k,-1E3,n+k+m,r+l-p-g):f?h.setBounds(m,r,n+m,q+r-p):h.setBounds(m,r+q+p+g-1,m+n,r+q+p+g));this.hideCursor()},createCrosshair:function(){var a=this.cursorAlpha,b=this.container,d=AmCharts.line(b,[0,0],[0,this.height],this.cursorColor,a,1),a=AmCharts.line(b,[0,this.width],[0,0],this.cursorColor,a,1);this.set.push(d);this.set.push(a);this.vLine=d;this.hLine=a;this.hideCursor()},detectMovement:function(){var a=this.chart;if(a.mouseIsOver){var b=
a.mouseX-this.x,d=a.mouseY-this.y;0<b&&b<this.width&&0<d&&d<this.height?(this.drawing?this.rolledOver||a.setMouseCursor("crosshair"):this.pan&&(this.rolledOver||a.setMouseCursor("move")),this.rolledOver=!0,this.setPosition()):this.rolledOver&&(this.handleMouseOut(),this.rolledOver=!1)}else this.rolledOver&&(this.handleMouseOut(),this.rolledOver=!1)},getMousePosition:function(){var a,b=this.width,d=this.height;a=this.chart;this.rotate?(a=a.mouseY-this.y,0>a&&(a=0),a>d&&(a=d)):(a=a.mouseX-this.x,0>
a&&(a=0),a>b&&(a=b));return a},updateCrosshair:function(){var a=this.chart,b=a.mouseX-this.x,d=a.mouseY-this.y,e=this.vLine,f=this.hLine,b=AmCharts.fitToBounds(b,0,this.width),d=AmCharts.fitToBounds(d,0,this.height);0<this.cursorAlpha&&(e.show(),f.show(),e.translate(b,0),f.translate(0,d));this.zooming&&this.updateSelectionSize(b,d);!a.mouseIsOver&&!this.zooming&&this.hideCursor()},updateSelectionSize:function(a,b){AmCharts.remove(this.selection);var d=this.selectionPosX,e=this.selectionPosY,f=0,g=
0,h=this.width,i=this.height;isNaN(a)||(d>a&&(f=a,h=d-a),d<a&&(f=d,h=a-d),d==a&&(f=a,h=0));isNaN(b)||(e>b&&(g=b,i=e-b),e<b&&(g=e,i=b-e),e==b&&(g=b,i=0));0<h&&0<i&&(d=AmCharts.rect(this.container,h,i,this.cursorColor,this.selectionAlpha),d.translate(f+this.x,g+this.y),this.selection=d)},arrangeBalloons:function(){var a=this.valueBalloons,b=this.x,d=this.y,e=this.height+d;a.sort(this.compareY);for(var f=0;f<a.length;f++){var g=a[f].balloon;g.setBounds(b,d,b+this.width,e);g.draw();e=g.yPos-3}this.arrangeBalloons2()},
compareY:function(a,b){return a.yy<b.yy?1:-1},arrangeBalloons2:function(){var a=this.valueBalloons;a.reverse();for(var b,d=this.x,e,f=0;f<a.length;f++){var g=a[f].balloon;b=g.bottom;var h=g.bottom-g.yPos;0<f&&b-h<e+3&&(g.setBounds(d,e+3,d+this.width,e+h+3),g.draw());g.set&&g.set.show();e=g.bottom}},showBullets:function(){AmCharts.remove(this.allBullets);var a=this.container,b=a.set();this.set.push(b);this.set.show();this.allBullets=b;for(var b=this.chart.graphs,d=0;d<b.length;d++){var e=b[d];if(!e.hidden&&
e.balloonText){var f=this.data[this.index].axes[e.valueAxis.id].graphs[e.id],g=f.y;if(!isNaN(g)){var h,i;h=f.x;this.rotate?(i=g,g=h):i=h;e=AmCharts.circle(a,this.bulletSize/2,this.chart.getBalloonColor(e,f),e.cursorBulletAlpha);e.translate(i,g);this.allBullets.push(e)}}}},destroy:function(){this.clear();AmCharts.remove(this.selection);this.selection=null;var a=this.categoryBalloon;a&&a.destroy();this.destroyValueBalloons();AmCharts.remove(this.set)},clear:function(){clearInterval(this.interval)},
destroyValueBalloons:function(){var a=this.valueBalloons;if(a)for(var b=0;b<a.length;b++)a[b].balloon.hide()},zoom:function(a,b,d,e){var f=this.chart;this.destroyValueBalloons();this.zooming=!1;var g;this.rotate?this.selectionPosY=g=f.mouseY:this.selectionPosX=g=f.mouseX;this.start=a;this.end=b;this.startTime=d;this.endTime=e;this.zoomed=!0;var h=f.categoryAxis,f=this.rotate;g=this.width;var i=this.height;h.parseDates&&!h.equalSpacing?(a=e-d+h.minDuration(),a=f?i/a:g/a):a=f?i/(b-a):g/(b-a);this.stepWidth=
a;this.setPosition();this.hideCursor()},hideObj:function(a){a&&a.hide()},hideCursor:function(a){void 0==a&&(a=!0);this.hideObj(this.set);this.hideObj(this.categoryBalloon);this.hideObj(this.line);this.hideObj(this.vLine);this.hideObj(this.hLine);this.hideObj(this.allBullets);this.destroyValueBalloons();AmCharts.remove(this.selection);this.previousIndex=NaN;a&&this.fire("onHideCursor",{type:"onHideCursor",chart:this.chart,target:this});this.drawing||this.chart.setMouseCursor("auto")},setPosition:function(a,
b){void 0==b&&(b=!0);if("cursor"==this.type){if(AmCharts.ifArray(this.data)){a||(a=this.getMousePosition());if((a!=this.previousMousePosition||!0==this.zoomed||this.oneBalloonOnly)&&!isNaN(a)){var d=this.chart.categoryAxis.xToIndex(a);if(d!=this.previousIndex||this.zoomed||"mouse"==this.cursorPosition||this.oneBalloonOnly)this.updateCursor(d,b),this.zoomed=!1}this.previousMousePosition=a}}else this.updateCrosshair()},updateCursor:function(a,b){var d=this.chart,e=d.mouseX-this.x,f=d.mouseY-this.y;
this.drawingNow&&(AmCharts.remove(this.drawingLine),this.drawingLine=AmCharts.line(this.container,[this.x+this.drawStartX,this.x+e],[this.y+this.drawStartY,this.y+f],this.cursorColor,1,1));if(this.enabled){void 0==b&&(b=!0);this.index=a;var g=d.categoryAxis,h=d.dx,i=d.dy,j=this.x,k=this.y,l=this.width,m=this.height,r=this.data[a],n=r.x[g.id],q=d.rotate,p=g.inside,s=this.stepWidth,t=this.categoryBalloon,u=this.firstTime,x=this.lastTime,z=this.cursorPosition,y=g.position,v=this.zooming,C=this.panning,
J=d.graphs,E=g.axisThickness;if(d.mouseIsOver||v||C||this.forceShow)if(this.forceShow=!1,C){k=this.panClickPos;d=this.panClickEndTime;v=this.panClickStartTime;h=this.panClickEnd;j=this.panClickStart;e=(q?k-f:k-e)/s;if(!g.parseDates||g.equalSpacing)e=Math.round(e);0!=e&&(k={type:"zoomed",target:this},k.chart=this.chart,g.parseDates&&!g.equalSpacing?(d+e>x&&(e=x-d),v+e<u&&(e=u-v),k.start=v+e,k.end=d+e,this.fire(k.type,k)):h+e>=this.data.length||0>j+e||(k.start=j+e,k.end=h+e,this.fire(k.type,k)))}else{"start"==
z&&(n-=g.cellWidth/2);"mouse"==z&&d.mouseIsOver&&(n=q?f-2:e-2);if(q){if(0>n)if(v)n=0;else{this.hideCursor();return}if(n>m+1)if(v)n=m+1;else{this.hideCursor();return}}else{if(0>n)if(v)n=0;else{this.hideCursor();return}if(n>l)if(v)n=l;else{this.hideCursor();return}}0<this.cursorAlpha&&(u=this.line,q?u.translate(0,n+i):u.translate(n,0),u.show());this.linePos=q?n+i:n;v&&(q?this.updateSelectionSize(NaN,n):this.updateSelectionSize(n,NaN));u=!0;v&&(u=!1);this.categoryBalloonEnabled&&u?(q?(p&&("right"==y?
t.setBounds(j,k+i,j+l+h,k+n+i):t.setBounds(j,k+i,j+l+h,k+n)),"right"==y?p?t.setPosition(j+l+h,k+n+i):t.setPosition(j+l+h+E,k+n+i):p?t.setPosition(j,k+n):t.setPosition(j-E,k+n)):"top"==y?p?t.setPosition(j+n+h,k+i):t.setPosition(j+n+h,k+i-E+1):p?t.setPosition(j+n,k+m):t.setPosition(j+n,k+m+E-1),g.parseDates?(g=AmCharts.formatDate(r.category,this.categoryBalloonDateFormat),-1!=g.indexOf("fff")&&(g=AmCharts.formatMilliseconds(g,r.category)),t.showBalloon(g)):t.showBalloon(r.category)):t.hide();J&&this.bulletsEnabled&&
this.showBullets();this.destroyValueBalloons();if(J&&this.valueBalloonsEnabled&&u&&d.balloon.enabled){this.valueBalloons=g=[];if(this.oneBalloonOnly)for(var i=Infinity,W,u=0;u<J.length;u++)s=J[u],s.showBalloon&&(!s.hidden&&s.balloonText)&&(t=r.axes[s.valueAxis.id].graphs[s.id],x=t.y,isNaN(x)||(q?Math.abs(e-x)<i&&(i=Math.abs(e-x),W=s):Math.abs(f-x)<i&&(i=Math.abs(f-x),W=s)));for(u=0;u<J.length;u++)if(s=J[u],!(this.oneBalloonOnly&&s!=W)&&(s.showBalloon&&!s.hidden&&s.balloonText)&&(t=r.axes[s.valueAxis.id].graphs[s.id],
x=t.y,!isNaN(x))){n=t.x;p=!0;if(q){if(i=x,0>n||n>m)p=!1}else if(i=n,n=x,0>i||i>l+h)p=!1;p&&(p=s.valueBalloon,y=d.getBalloonColor(s,t),p.setBounds(j,k,j+l,k+m),p.pointerOrientation="H",p.changeColor(y),void 0!=s.balloonAlpha&&(p.fillAlpha=s.balloonAlpha),void 0!=s.balloonTextColor&&(p.color=s.balloonTextColor),p.setPosition(i+j,n+k),s=d.formatString(s.balloonText,t,s),""!=s&&p.showBalloon(s),!q&&p.set&&p.set.hide(),g.push({yy:x,balloon:p}))}q||this.arrangeBalloons()}b?(k={type:"changed"},k.index=a,
k.target=this,k.chart=this.chart,k.zooming=v,k.position=q?f:e,k.target=this,d.fire("changed",k),this.fire("changed",k),this.skipZoomDispatch=!1):(this.skipZoomDispatch=!0,d.updateLegendValues(a));this.previousIndex=a}}else this.hideCursor()},enableDrawing:function(a){this.enabled=!a;this.hideCursor();this.rolledOver=!1;this.drawing=a},isZooming:function(a){a&&a!=this.zooming&&this.handleMouseDown("fake");!a&&a!=this.zooming&&this.handleMouseUp()},handleMouseOut:function(){if(this.enabled)if(this.zooming)this.setPosition();
else{this.index=void 0;var a={type:"changed",index:void 0,target:this};a.chart=this.chart;this.fire("changed",a);this.hideCursor()}},handleReleaseOutside:function(){this.handleMouseUp()},handleMouseUp:function(){var a=this.chart,b=a.mouseX-this.x,d=a.mouseY-this.y;if(this.drawingNow){this.drawingNow=!1;AmCharts.remove(this.drawingLine);var e=this.drawStartX,f=this.drawStartY;if(2<Math.abs(e-b)||2<Math.abs(f-d))a={type:"draw",target:this,chart:a,initialX:e,initialY:f,finalX:b,finalY:d},this.fire(a.type,
a)}if(this.enabled&&0<this.data.length){if(this.pan)this.rolledOver=!1;else if(this.zoomable&&this.zooming){a={type:"zoomed",target:this};a.chart=this.chart;if("cursor"==this.type)this.rotate?this.selectionPosY=d:this.selectionPosX=d=b,2>Math.abs(d-this.initialMouse)&&this.fromIndex==this.index||(this.index<this.fromIndex?(a.end=this.fromIndex,a.start=this.index):(a.end=this.index,a.start=this.fromIndex),d=this.chart.categoryAxis,d.parseDates&&!d.equalSpacing&&(a.start=this.data[a.start].time,a.end=
this.data[a.end].time),this.skipZoomDispatch||this.fire(a.type,a));else{var g=this.initialMouseX,h=this.initialMouseY;3>Math.abs(b-g)&&3>Math.abs(d-h)||(e=Math.min(g,b),f=Math.min(h,d),b=Math.abs(g-b),d=Math.abs(h-d),a.selectionHeight=d,a.selectionWidth=b,a.selectionY=f,a.selectionX=e,this.skipZoomDispatch||this.fire(a.type,a))}AmCharts.remove(this.selection)}this.panning=this.zooming=this.skipZoomDispatch=!1}},showCursorAt:function(a){var b=this.chart.categoryAxis,a=b.parseDates?b.dateToCoordinate(a):
b.categoryToCoordinate(a);this.previousMousePosition=NaN;this.forceShow=!0;this.setPosition(a,!1)},handleMouseDown:function(a){if(this.zoomable||this.pan||this.drawing){var b=this.rotate,d=this.chart,e=d.mouseX-this.x,f=d.mouseY-this.y;if(0<e&&e<this.width&&0<f&&f<this.height||"fake"==a)this.setPosition(),this.drawing?(this.drawStartY=f,this.drawStartX=e,this.drawingNow=!0):this.pan?(this.zoomable=!1,d.setMouseCursor("move"),this.panning=!0,this.panClickPos=b?f:e,this.panClickStart=this.start,this.panClickEnd=
this.end,this.panClickStartTime=this.startTime,this.panClickEndTime=this.endTime):this.zoomable&&("cursor"==this.type?(this.fromIndex=this.index,b?(this.initialMouse=f,this.selectionPosY=this.linePos):(this.initialMouse=e,this.selectionPosX=this.linePos)):(this.initialMouseX=e,this.initialMouseY=f,this.selectionPosX=e,this.selectionPosY=f),this.zooming=!0)}}});AmCharts.SimpleChartScrollbar=AmCharts.Class({construct:function(){this.createEvents("zoomed");this.backgroundColor="#D4D4D4";this.backgroundAlpha=1;this.selectedBackgroundColor="#EFEFEF";this.scrollDuration=this.selectedBackgroundAlpha=1;this.resizeEnabled=!0;this.hideResizeGrips=!1;this.scrollbarHeight=20;this.updateOnReleaseOnly=!1;9>document.documentMode&&(this.updateOnReleaseOnly=!0);this.dragIconWidth=11;this.dragIconHeight=18},draw:function(){var a=this;a.destroy();a.interval=setInterval(function(){a.updateScrollbar.call(a)},
40);var b=a.chart.container,d=a.rotate,e=a.chart,f=b.set();a.set=f;e.scrollbarsSet.push(f);var g,h;d?(g=a.scrollbarHeight,h=e.plotAreaHeight):(h=a.scrollbarHeight,g=e.plotAreaWidth);a.width=g;if((a.height=h)&&g){var i=AmCharts.rect(b,g,h,a.backgroundColor,a.backgroundAlpha);a.bg=i;f.push(i);i=AmCharts.rect(b,g,h,"#000",0.005);f.push(i);a.invisibleBg=i;i.click(function(){a.handleBgClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()}).touchend(function(){a.handleBgClick()});
i=AmCharts.rect(b,g,h,a.selectedBackgroundColor,a.selectedBackgroundAlpha);a.selectedBG=i;f.push(i);g=AmCharts.rect(b,g,h,"#000",0.005);a.dragger=g;f.push(g);g.mousedown(function(b){a.handleDragStart(b)}).mouseup(function(){a.handleDragStop()}).mouseover(function(){a.handleDraggerOver()}).mouseout(function(){a.handleMouseOut()}).touchstart(function(b){a.handleDragStart(b)}).touchend(function(){a.handleDragStop()});g=e.pathToImages;d?(i=g+"dragIconH.gif",g=a.dragIconWidth,d=a.dragIconHeight):(i=g+
"dragIcon.gif",d=a.dragIconWidth,g=a.dragIconHeight);h=b.image(i,0,0,d,g);var i=b.image(i,0,0,d,g),j=10,k=20;e.panEventsEnabled&&(j=25,k=a.scrollbarHeight);var l=AmCharts.rect(b,j,k,"#000",0.005),m=AmCharts.rect(b,j,k,"#000",0.005);m.translate(-(j-d)/2,-(k-g)/2);l.translate(-(j-d)/2,-(k-g)/2);d=b.set([h,m]);b=b.set([i,l]);a.iconLeft=d;f.push(a.iconLeft);a.iconRight=b;f.push(b);d.mousedown(function(){a.leftDragStart()}).mouseup(function(){a.leftDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.leftDragStart()}).touchend(function(){a.leftDragStop()});
b.mousedown(function(){a.rightDragStart()}).mouseup(function(){a.rightDragStop()}).mouseover(function(){a.iconRollOver()}).mouseout(function(){a.iconRollOut()}).touchstart(function(){a.rightDragStart()}).touchend(function(){a.rightDragStop()});AmCharts.ifArray(e.chartData)?f.show():f.hide();a.hideDragIcons()}f.translate(a.x,a.y);a.clipDragger(!1)},updateScrollbarSize:function(a,b){var d=this.dragger,e,f,g,h;this.rotate?(e=0,f=a,g=this.width+1,h=b-a,d.setAttr("height",b-a),d.setAttr("y",f)):(e=a,f=
0,g=b-a,h=this.height+1,d.setAttr("width",b-a),d.setAttr("x",e));this.clipAndUpdate(e,f,g,h)},updateScrollbar:function(){var a,b=!1,d,e,f=this.x,g=this.y,h=this.dragger,i=this.getDBox();d=i.x+f;e=i.y+g;var j=i.width,i=i.height,k=this.rotate,l=this.chart,m=this.width,r=this.height,n=l.mouseX,q=l.mouseY;a=this.initialMouse;l.mouseIsOver&&(this.dragging&&(l=this.initialCoord,k?(a=l+(q-a),0>a&&(a=0),l=r-i,a>l&&(a=l),h.setAttr("y",a)):(a=l+(n-a),0>a&&(a=0),l=m-j,a>l&&(a=l),h.setAttr("x",a))),this.resizingRight&&
(k?(a=q-e,a+e>r+g&&(a=r-e+g),0>a?(this.resizingRight=!1,b=this.resizingLeft=!0):(0==a&&(a=0.1),h.setAttr("height",a))):(a=n-d,a+d>m+f&&(a=m-d+f),0>a?(this.resizingRight=!1,b=this.resizingLeft=!0):(0==a&&(a=0.1),h.setAttr("width",a)))),this.resizingLeft&&(k?(d=e,e=q,e<g&&(e=g),e>r+g&&(e=r+g),a=!0==b?d-e:i+d-e,0>a?(this.resizingRight=!0,this.resizingLeft=!1,h.setAttr("y",d+i-g)):(0==a&&(a=0.1),h.setAttr("y",e-g),h.setAttr("height",a))):(e=n,e<f&&(e=f),e>m+f&&(e=m+f),a=!0==b?d-e:j+d-e,0>a?(this.resizingRight=
!0,this.resizingLeft=!1,h.setAttr("x",d+j-f)):(0==a&&(a=0.1),h.setAttr("x",e-f),h.setAttr("width",a)))),this.clipDragger(!0))},clipDragger:function(a){var b=this.getDBox(),d=b.x,e=b.y,f=b.width,b=b.height,g=!1;if(this.rotate){if(d=0,f=this.width+1,this.clipY!=e||this.clipH!=b)g=!0}else if(e=0,b=this.height+1,this.clipX!=d||this.clipW!=f)g=!0;g&&(this.clipAndUpdate(d,e,f,b),a&&(this.updateOnReleaseOnly||this.dispatchScrollbarEvent()))},maskGraphs:function(){},clipAndUpdate:function(a,b,d,e){this.clipX=
a;this.clipY=b;this.clipW=d;this.clipH=e;this.selectedBG.clipRect(a,b,d,e);this.updateDragIconPositions();this.maskGraphs(a,b,d,e)},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart;a.hideBalloon();var b=this.getDBox(),d=b.x,e=b.y,f=b.width,b=b.height;this.rotate?(d=e,f=this.height/b):f=this.width/f;a={type:"zoomed",position:d,chart:a,target:this,multiplier:f};this.fire(a.type,a)}},updateDragIconPositions:function(){var a=this.getDBox(),b=a.x,d=a.y,e=this.iconLeft,
f=this.iconRight,g,h,i=this.scrollbarHeight;this.rotate?(g=this.dragIconWidth,h=this.dragIconHeight,e.translate((i-h)/2,d-g/2),f.translate((i-h)/2,d+a.height-g/2)):(g=this.dragIconHeight,h=this.dragIconWidth,e.translate(b-h/2,(i-g)/2),f.translate(b+-h/2+a.width,(i-g)/2))},showDragIcons:function(){this.resizeEnabled&&(this.iconLeft.show(),this.iconRight.show())},hideDragIcons:function(){!this.resizingLeft&&(!this.resizingRight&&!this.dragging)&&(this.hideResizeGrips&&(this.iconLeft.hide(),this.iconRight.hide()),
this.removeCursors())},removeCursors:function(){this.chart.setMouseCursor("auto")},relativeZoom:function(a,b){this.dragger.stop();this.multiplier=a;this.position=b;this.updateScrollbarSize(b,this.rotate?b+this.height/a:b+this.width/a)},destroy:function(){this.clear();AmCharts.remove(this.set)},clear:function(){clearInterval(this.interval)},handleDragStart:function(){var a=this.chart;this.dragger.stop();this.removeCursors();this.dragging=!0;var b=this.getDBox();this.rotate?(this.initialCoord=b.y,this.initialMouse=
a.mouseY):(this.initialCoord=b.x,this.initialMouse=a.mouseX)},handleDragStop:function(){this.updateOnReleaseOnly&&(this.updateScrollbar(),this.skipEvent=!1,this.dispatchScrollbarEvent());this.dragging=!1;this.mouseIsOver&&this.removeCursors();this.updateScrollbar()},handleDraggerOver:function(){this.handleMouseOver()},leftDragStart:function(){this.dragger.stop();this.resizingLeft=!0},leftDragStop:function(){this.resizingLeft=!1;this.mouseIsOver||this.removeCursors();this.updateOnRelease()},rightDragStart:function(){this.dragger.stop();
this.resizingRight=!0},rightDragStop:function(){this.resizingRight=!1;this.mouseIsOver||this.removeCursors();this.updateOnRelease()},iconRollOut:function(){this.removeCursors()},iconRollOver:function(){this.rotate?this.chart.setMouseCursor("n-resize"):this.chart.setMouseCursor("e-resize");this.handleMouseOver()},getDBox:function(){return this.dragger.getBBox()},handleBgClick:function(){if(!this.resizingRight&&!this.resizingLeft){this.zooming=!0;var a,b,d=this.scrollDuration,e=this.dragger;a=this.getDBox();
var f=a.height,g=a.width;b=this.chart;var h=this.y,i=this.x,j=this.rotate;j?(a="y",b=b.mouseY-f/2-h,b=AmCharts.fitToBounds(b,0,this.height-f)):(a="x",b=b.mouseX-g/2-i,b=AmCharts.fitToBounds(b,0,this.width-g));this.updateOnReleaseOnly?(this.skipEvent=!1,e.setAttr(a,b),this.dispatchScrollbarEvent(),this.clipDragger()):(b=Math.round(b),j?e.animate({y:b},d,">"):e.animate({x:b},d,">"))}},updateOnRelease:function(){this.updateOnReleaseOnly&&(this.updateScrollbar(),this.skipEvent=!1,this.dispatchScrollbarEvent())},
handleReleaseOutside:function(){if(this.set){if(this.resizingLeft||this.resizingRight||this.dragging)this.updateOnRelease(),this.removeCursors();this.mouseIsOver=this.dragging=this.resizingRight=this.resizingLeft=!1;this.hideDragIcons();this.updateScrollbar()}},handleMouseOver:function(){this.mouseIsOver=!0;this.showDragIcons()},handleMouseOut:function(){this.mouseIsOver=!1;this.hideDragIcons()}});AmCharts.ChartScrollbar=AmCharts.Class({inherits:AmCharts.SimpleChartScrollbar,construct:function(){AmCharts.ChartScrollbar.base.construct.call(this);this.graphLineColor="#BBBBBB";this.graphLineAlpha=0;this.graphFillColor="#BBBBBB";this.graphFillAlpha=1;this.selectedGraphLineColor="#888888";this.selectedGraphLineAlpha=0;this.selectedGraphFillColor="#888888";this.selectedGraphFillAlpha=1;this.gridCount=0;this.gridColor="#FFFFFF";this.gridAlpha=0.7;this.skipEvent=this.autoGridCount=!1;this.color="#FFFFFF";
this.scrollbarCreated=!1},init:function(){var a=this.categoryAxis,b=this.chart;a||(this.categoryAxis=a=new AmCharts.CategoryAxis);a.chart=b;a.id="scrollbar";a.dateFormats=b.categoryAxis.dateFormats;a.boldPeriodBeginning=b.categoryAxis.boldPeriodBeginning;a.axisItemRenderer=AmCharts.RecItem;a.axisRenderer=AmCharts.RecAxis;a.guideFillRenderer=AmCharts.RecFill;a.inside=!0;a.fontSize=this.fontSize;a.tickLength=0;a.axisAlpha=0;this.graph&&(a=this.valueAxis,a||(this.valueAxis=a=new AmCharts.ValueAxis,a.visible=
!1,a.scrollbar=!0,a.axisItemRenderer=AmCharts.RecItem,a.axisRenderer=AmCharts.RecAxis,a.guideFillRenderer=AmCharts.RecFill,a.labelsEnabled=!1,a.chart=b),b=this.unselectedGraph,b||(b=new AmCharts.AmGraph,b.scrollbar=!0,this.unselectedGraph=b,b.negativeBase=this.graph.negativeBase),b=this.selectedGraph,b||(b=new AmCharts.AmGraph,b.scrollbar=!0,this.selectedGraph=b,b.negativeBase=this.graph.negativeBase));this.scrollbarCreated=!0},draw:function(){var a=this;AmCharts.ChartScrollbar.base.draw.call(a);
a.scrollbarCreated||a.init();var b=a.chart,d=b.chartData,e=a.categoryAxis,f=a.rotate,g=a.x,h=a.y,i=a.width,j=a.height,k=b.categoryAxis,l=a.set;e.setOrientation(!f);e.parseDates=k.parseDates;e.rotate=f;e.equalSpacing=k.equalSpacing;e.minPeriod=k.minPeriod;e.startOnAxis=k.startOnAxis;e.viW=i;e.viH=j;e.width=i;e.height=j;e.gridCount=a.gridCount;e.gridColor=a.gridColor;e.gridAlpha=a.gridAlpha;e.color=a.color;e.autoGridCount=a.autoGridCount;e.parseDates&&!e.equalSpacing&&e.timeZoom(d[0].time,d[d.length-
1].time);e.zoom(0,d.length-1);if(k=a.graph){var m=a.valueAxis,r=k.valueAxis;m.id=r.id;m.rotate=f;m.setOrientation(f);m.width=i;m.height=j;m.viW=i;m.viH=j;m.dataProvider=d;m.reversed=r.reversed;m.logarithmic=r.logarithmic;m.gridAlpha=0;m.axisAlpha=0;l.push(m.set);f?m.y=h:m.x=g;for(var g=Infinity,h=-Infinity,n=0;n<d.length;n++){var q=d[n].axes[r.id].graphs[k.id].values,p;for(p in q)if("percents"!=p&&"total"!=p){var s=q[p];s<g&&(g=s);s>h&&(h=s)}}Infinity!=g&&(m.minimum=g);-Infinity!=h&&(m.maximum=h+
0.1*(h-g));g==h&&(m.minimum-=1,m.maximum+=1);m.zoom(0,d.length-1);p=a.unselectedGraph;p.id=k.id;p.rotate=f;p.chart=b;p.chartType=b.chartType;p.data=d;p.valueAxis=m;p.chart=k.chart;p.categoryAxis=a.categoryAxis;p.valueField=k.valueField;p.openField=k.openField;p.closeField=k.closeField;p.highField=k.highField;p.lowField=k.lowField;p.lineAlpha=a.graphLineAlpha;p.lineColor=a.graphLineColor;p.fillAlphas=a.graphFillAlpha;p.fillColors=a.graphFillColor;p.connect=k.connect;p.hidden=k.hidden;p.width=i;p.height=
j;r=a.selectedGraph;r.id=k.id;r.rotate=f;r.chart=b;r.chartType=b.chartType;r.data=d;r.valueAxis=m;r.chart=k.chart;r.categoryAxis=e;r.valueField=k.valueField;r.openField=k.openField;r.closeField=k.closeField;r.highField=k.highField;r.lowField=k.lowField;r.lineAlpha=a.selectedGraphLineAlpha;r.lineColor=a.selectedGraphLineColor;r.fillAlphas=a.selectedGraphFillAlpha;r.fillColors=a.selectedGraphFillColor;r.connect=k.connect;r.hidden=k.hidden;r.width=i;r.height=j;b=a.graphType;b||(b=k.type);p.type=b;r.type=
b;d=d.length-1;p.zoom(0,d);r.zoom(0,d);r.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});p.set.click(function(){a.handleBackgroundClick()}).mouseover(function(){a.handleMouseOver()}).mouseout(function(){a.handleMouseOut()});l.push(p.set);l.push(r.set)}l.push(e.set);l.push(e.labelsSet);a.bg.toBack();a.invisibleBg.toFront();a.dragger.toFront();a.iconLeft.toFront();a.iconRight.toFront()},timeZoom:function(a,b){this.startTime=
a;this.endTime=b;this.timeDifference=b-a;this.skipEvent=!0;this.zoomScrollbar()},zoom:function(a,b){this.start=a;this.end=b;this.skipEvent=!0;this.zoomScrollbar()},dispatchScrollbarEvent:function(){if(this.skipEvent)this.skipEvent=!1;else{var a=this.chart.chartData,b,d,e=this.dragger.getBBox();b=e.x;d=e.y;var f=e.width,e=e.height;this.rotate?(b=d,d=e):d=f;f={type:"zoomed",target:this};f.chart=this.chart;var e=this.categoryAxis,g=this.stepWidth;if(e.parseDates&&!e.equalSpacing){var a=a[0].time,h=e.minDuration(),
e=Math.round(b/g)+a,a=this.dragging?e+this.timeDifference:Math.round((b+d)/g)+a-h;e>a&&(e=a);if(e!=this.startTime||a!=this.endTime)this.startTime=e,this.endTime=a,f.start=e,f.end=a,f.startDate=new Date(e),f.endDate=new Date(a),this.fire(f.type,f)}else if(e.startOnAxis||(b+=g/2),d-=this.stepWidth/2,g=e.xToIndex(b),b=e.xToIndex(b+d),g!=this.start||this.end!=b)e.startOnAxis&&(this.resizingRight&&g==b&&b++,this.resizingLeft&&g==b&&(0<g?g--:b=1)),this.start=g,this.end=this.dragging?this.start+this.difference:
b,f.start=this.start,f.end=this.end,e.parseDates&&(a[this.start]&&(f.startDate=new Date(a[this.start].time)),a[this.end]&&(f.endDate=new Date(a[this.end].time))),this.fire(f.type,f)}},zoomScrollbar:function(){var a,b;b=this.chart.chartData;var d=this.categoryAxis,e;d.parseDates&&!d.equalSpacing?(e=d.stepWidth,b=b[0].time,a=e*(this.startTime-b),b=e*(this.endTime-b+d.minDuration())):(a=b[this.start].x[d.id],b=b[this.end].x[d.id],e=d.stepWidth,d.startOnAxis||(d=e/2,a-=d,b+=d));this.stepWidth=e;this.updateScrollbarSize(a,
b)},maskGraphs:function(a,b,d,e){var f=this.selectedGraph;f&&f.set.clipRect(a,b,d,e)},handleDragStart:function(){AmCharts.ChartScrollbar.base.handleDragStart.call(this);this.difference=this.end-this.start;this.timeDifference=this.endTime-this.startTime;0>this.timeDifference&&(this.timeDifference=0)},handleBackgroundClick:function(){AmCharts.ChartScrollbar.base.handleBackgroundClick.call(this);this.dragging||(this.difference=this.end-this.start,this.timeDifference=this.endTime-this.startTime,0>this.timeDifference&&
(this.timeDifference=0))}});AmCharts.circle=function(a,b,d,e,f,g,h,i){if(void 0==f||0==f)f=1;void 0==g&&(g="#000000");void 0==h&&(h=0);e={fill:d,stroke:g,"fill-opacity":e,"stroke-width":f,"stroke-opacity":h};a=a.circle(0,0,b).attr(e);i&&a.gradient("radialGradient",[d,AmCharts.adjustLuminosity(d,-0.6)]);return a};AmCharts.text=function(a,b,d,e,f,g,h,i){g||(g="middle");"right"==g&&(g="end");d={fill:d,"font-family":e,"font-size":f,opacity:i};!0==h&&(d["font-weight"]="bold");d["text-anchor"]=g;return a.text(b,d)};
AmCharts.polygon=function(a,b,d,e,f,g,h,i,j){isNaN(g)&&(g=0);isNaN(i)&&(i=f);var k=e,l=!1;"object"==typeof k&&1<k.length&&(l=!0,k=k[0]);void 0==h&&(h=k);for(var f={fill:k,stroke:h,"fill-opacity":f,"stroke-width":g,"stroke-opacity":i},g=AmCharts.dx,h=AmCharts.dy,i=Math.round,k="M"+(i(b[0])+g)+","+(i(d[0])+h),m=1;m<b.length;m++)k+=" L"+(i(b[m])+g)+","+(i(d[m])+h);a=a.path(k+" Z").attr(f);l&&a.gradient("linearGradient",e,j);return a};
AmCharts.rect=function(a,b,d,e,f,g,h,i,j,k){isNaN(g)&&(g=0);void 0==j&&(j=0);void 0==k&&(k=270);isNaN(f)&&(f=0);var l=e,m=!1;"object"==typeof l&&(l=l[0],m=!0);void 0==h&&(h=l);void 0==i&&(i=f);var b=Math.round(b),d=Math.round(d),r=0,n=0;0>b&&(b=Math.abs(b),r=-b);0>d&&(d=Math.abs(d),n=-d);r+=AmCharts.dx;n+=AmCharts.dy;f={fill:l,stroke:h,"fill-opacity":f,"stroke-opacity":i};a=a.rect(r,n,b,d,j,g).attr(f);m&&a.gradient("linearGradient",e,k);return a};
AmCharts.triangle=function(a,b,d,e,f,g,h,i){if(void 0==g||0==g)g=1;void 0==h&&(h="#000");void 0==i&&(i=0);var e={fill:e,stroke:h,"fill-opacity":f,"stroke-width":g,"stroke-opacity":i},b=b/2,j;0==d&&(j=" M"+-b+","+b+" L0,"+-b+" L"+b+","+b+" Z");180==d&&(j=" M"+-b+","+-b+" L0,"+b+" L"+b+","+-b+" Z");90==d&&(j=" M"+-b+","+-b+" L"+b+",0 L"+-b+","+b+" Z");270==d&&(j=" M"+-b+",0 L"+b+","+b+" L"+b+","+-b+" Z");return a.path(j).attr(e)};
AmCharts.line=function(a,b,d,e,f,g,h,i,j){g={fill:"none","stroke-width":g};void 0!=h&&0<h&&(g["stroke-dasharray"]=h);isNaN(f)||(g["stroke-opacity"]=f);e&&(g.stroke=e);for(var e=Math.round,f=AmCharts.dx,h=AmCharts.dy,i="M"+(e(b[0])+f)+","+(e(d[0])+h),k=1;k<b.length;k++)i+=" L"+(e(b[k])+f)+","+(e(d[k])+h);if(AmCharts.VML)return a.path(i,void 0,!0).attr(g);j&&(i+=" M0,0 L0,0");return a.path(i).attr(g)};
AmCharts.wedge=function(a,b,d,e,f,g,h,i,j,k,l){var m=Math.round,g=m(g),h=m(h),i=m(i),r=m(h/g*i),n=AmCharts.VML;-359.95>=f&&(f=-359.95);var q=1/180*Math.PI,p=b+Math.cos(e*q)*i,s=d+Math.sin(-e*q)*r,t=b+Math.cos(e*q)*g,u=d+Math.sin(-e*q)*h,x=b+Math.cos((e+f)*q)*g,z=d+Math.sin((-e-f)*q)*h,y=b+Math.cos((e+f)*q)*i,q=d+Math.sin((-e-f)*q)*r,v={fill:AmCharts.adjustLuminosity(k.fill,-0.2),"stroke-opacity":0},C=0;180<Math.abs(f)&&(C=1);var e=a.set(),J;n&&(p=m(10*p),t=m(10*t),x=m(10*x),y=m(10*y),s=m(10*s),u=
m(10*u),z=m(10*z),q=m(10*q),b=m(10*b),j=m(10*j),d=m(10*d),g*=10,h*=10,i*=10,r*=10,1>Math.abs(f)&&(1>=Math.abs(x-t)&&1>=Math.abs(z-u))&&(J=!0));f="";if(0<j){n?(path=" M"+p+","+(s+j)+" L"+t+","+(u+j),J||(path+=" A"+(b-g)+","+(j+d-h)+","+(b+g)+","+(j+d+h)+","+t+","+(u+j)+","+x+","+(z+j)),path+=" L"+y+","+(q+j),0<i&&(J||(path+=" B"+(b-i)+","+(j+d-r)+","+(b+i)+","+(j+d+r)+","+y+","+(j+q)+","+p+","+(j+s)))):(path=" M"+p+","+(s+j)+" L"+t+","+(u+j),path+=" A"+g+","+h+",0,"+C+",1,"+x+","+(z+j)+" L"+y+","+
(q+j),0<i&&(path+=" A"+i+","+r+",0,"+C+",0,"+p+","+(s+j)));path+=" Z";c=a.path(path,void 0,void 0,"1000,1000").attr(v);e.push(c);var E=a.path(" M"+p+","+s+" L"+p+","+(s+j)+" L"+t+","+(u+j)+" L"+t+","+u+" L"+p+","+s+" Z",void 0,void 0,"1000,1000").attr(v),j=a.path(" M"+x+","+z+" L"+x+","+(z+j)+" L"+y+","+(q+j)+" L"+y+","+q+" L"+x+","+z+" Z",void 0,void 0,"1000,1000").attr(v);e.push(E);e.push(j)}n?(J||(f=" A"+m(b-g)+","+m(d-h)+","+m(b+g)+","+m(d+h)+","+m(t)+","+m(u)+","+m(x)+","+m(z)),g=" M"+m(p)+","+
m(s)+" L"+m(t)+","+m(u)+f+" L"+m(y)+","+m(q)):g=" M"+p+","+s+" L"+t+","+u+(" A"+g+","+h+",0,"+C+",1,"+x+","+z)+" L"+y+","+q;0<i&&(n?J||(g+=" B"+(b-i)+","+(d-r)+","+(b+i)+","+(d+r)+","+y+","+q+","+p+","+s):g+=" A"+i+","+r+",0,"+C+",0,"+p+","+s);a=a.path(g+" Z",void 0,void 0,"1000,1000").attr(k);if(l){b=[];for(d=0;d<l.length;d++)b.push(AmCharts.adjustLuminosity(k.fill,l[d]));0<b.length&&a.gradient("linearGradient",b)}e.push(a);return e};
AmCharts.adjustLuminosity=function(a,b){a=String(a).replace(/[^0-9a-f]/gi,"");6>a.length&&(a=String(a[0])+String(a[0])+String(a[1])+String(a[1])+String(a[2])+String(a[2]));var b=b||0,d="#",e,f;for(f=0;3>f;f++)e=parseInt(a.substr(2*f,2),16),e=Math.round(Math.min(Math.max(0,e+e*b),255)).toString(16),d+=("00"+e).substr(e.length);return d};AmCharts.AmPieChart=AmCharts.Class({inherits:AmCharts.AmChart,construct:function(){this.createEvents("rollOverSlice","rollOutSlice","clickSlice","pullOutSlice","pullInSlice");AmCharts.AmPieChart.base.construct.call(this);this.colors="#FF0F00 #FF6600 #FF9E01 #FCD202 #F8FF01 #B0DE09 #04D215 #0D8ECF #0D52D1 #2A0CD0 #8A0CCF #CD0D74 #754DEB #DDDDDD #999999 #333333 #000000 #57032A #CA9726 #990000 #4B0C25".split(" ");this.pieAlpha=1;this.pieBaseColor;this.pieBrightnessStep=30;this.groupPercent=0;this.groupedTitle=
"Other";this.groupedPulled=!1;this.groupedAlpha=1;this.marginLeft=0;this.marginBottom=this.marginTop=10;this.marginRight=0;this.minRadius=10;this.hoverAlpha=1;this.depth3D=0;this.startAngle=90;this.angle=this.innerRadius=0;this.outlineColor="#FFFFFF";this.outlineAlpha=0;this.outlineThickness=1;this.startRadius="500%";this.startDuration=this.startAlpha=1;this.startEffect="bounce";this.sequencedAnimation=!1;this.pullOutRadius="20%";this.pullOutDuration=1;this.pullOutEffect="bounce";this.pullOnHover=
this.pullOutOnlyOne=!1;this.labelsEnabled=!0;this.labelRadius=30;this.labelTickColor="#000000";this.labelTickAlpha=0.2;this.labelText="[[title]]: [[percents]]%";this.hideLabelsPercent=0;this.balloonText="[[title]]: [[percents]]% ([[value]])\n[[description]]";this.dataProvider;this.urlTarget="_self";this.previousScale=1;this.autoMarginOffset=10;this.gradientRatio=[]},initChart:function(){AmCharts.AmPieChart.base.initChart.call(this);this.dataChanged&&(this.parseData(),this.dispatchDataUpdated=!0,this.dataChanged=
!1,this.legend&&this.legend.setData(this.chartData));this.drawChart()},handleLegendEvent:function(a){var b=a.type;if(a=a.dataItem){var d=a.hidden;switch(b){case "clickMarker":d||this.clickSlice(a);break;case "clickLabel":d||this.clickSlice(a);break;case "rollOverItem":d||this.rollOverSlice(a,!1);break;case "rollOutItem":d||this.rollOutSlice(a);break;case "hideItem":this.hideSlice(a);break;case "showItem":this.showSlice(a)}}},invalidateVisibility:function(){this.recalculatePercents();this.initChart();
var a=this.legend;a&&a.invalidateSize()},drawChart:function(){var a=this;AmCharts.AmPieChart.base.drawChart.call(a);var b=a.chartData;if(AmCharts.ifArray(b)){if(0<a.realWidth&&0<a.realHeight){AmCharts.VML&&(a.startAlpha=1);var d=a.startDuration,e=a.container,f=a.updateWidth();a.realWidth=f;var g=a.updateHeight();a.realHeight=g;var h=AmCharts.toCoordinate,i=h(a.marginLeft,f),j=h(a.marginRight,f),k=h(a.marginTop,g)+a.getTitleHeight(),l=h(a.marginBottom,g);a.chartDataLabels=[];a.ticks=[];var m,r,n,q=
AmCharts.toNumber(a.labelRadius),p=a.measureMaxLabel();if(!a.labelText||!a.labelsEnabled)q=p=0;m=void 0==a.pieX?(f-i-j)/2+i:h(a.pieX,a.realWidth);r=void 0==a.pieY?(g-k-l)/2+k:h(a.pieY,g);n=h(a.radius,f,g);a.pullOutRadiusReal=AmCharts.toCoordinate(a.pullOutRadius,n);n||(f=0<=q?f-i-j-2*p:f-i-j,g=g-k-l,n=Math.min(f,g),g<f&&(n/=1-a.angle/90,n>f&&(n=f)),a.pullOutRadiusReal=AmCharts.toCoordinate(a.pullOutRadius,n),n=0<=q?n-1.8*(q+a.pullOutRadiusReal):n-1.8*a.pullOutRadiusReal,n/=2);n<a.minRadius&&(n=a.minRadius);
a.pullOutRadiusReal=h(a.pullOutRadius,n);h=h(a.innerRadius,n);h>=n&&(h=n-1);g=AmCharts.fitToBounds(a.startAngle,0,360);0<a.depth3D&&(g=270<=g?270:90);k=n-n*a.angle/90;for(l=0;l<b.length;l++)if(f=b[l],!0!=f.hidden&&0<f.percents){var s=360*-f.percents/100,j=Math.cos((g+s/2)/180*Math.PI),p=Math.sin((-g-s/2)/180*Math.PI)*(k/n),i={fill:f.color,stroke:a.outlineColor,"stroke-width":a.outlineThickness,"stroke-opacity":a.outlineAlpha};f.url&&(i.cursor="pointer");i=AmCharts.wedge(e,m,r,g,s,n,k,h,a.depth3D,
i,a.gradientRatio);a.addEventListeners(i,f);f.startAngle=g;b[l].wedge=i;if(0<d){var t=a.startAlpha;a.chartCreated&&(t=f.alpha);i.setAttr("opacity",t)}f.ix=j;f.iy=p;f.wedge=i;f.index=l;if(a.labelsEnabled&&a.labelText&&f.percents>=a.hideLabelsPercent){s=g+s/2;0>=s&&(s+=360);var j=m+j*(n+q),t=r+p*(n+q),u,p=0;if(0<=q){var x;90>=s&&0<=s?(x=0,u="start",p=8):360>=s&&270<s?(x=1,u="start",p=8):270>=s&&180<s?(x=2,u="end",p=-8):180>=s&&90<s&&(x=3,u="end",p=-8);f.labelQuarter=x}else u="middle";s=a.formatString(a.labelText,
f);s=AmCharts.text(e,s,a.color,a.fontFamily,a.fontSize,u);s.translate(j+1.5*p,t);f.tx=j+1.5*p;f.ty=t;t=setTimeout(function(){a.showLabels.call(a)},1E3*d);a.timeOuts.push(t);0<=a.labelRadius?i.push(s):a.freeLabelsSet.push(s);f.label=s;a.chartDataLabels[l]=s;f.tx=j;f.tx2=j+p}a.graphsSet.push(i);(0==f.alpha||0<d&&!a.chartCreated)&&i.hide();g-=360*f.percents/100;0>=g&&(g+=360)}0<q&&a.arrangeLabels();a.pieXReal=m;a.pieYReal=r;a.radiusReal=n;a.innerRadiusReal=h;0<q&&a.drawTicks();a=this;a.chartCreated?
a.pullSlices(!0):(t=setTimeout(function(){a.pullSlices.call(a)},1200*d),a.timeOuts.push(t));a.chartCreated||a.startSlices();a.setDepths()}}else a.cleanChart();a.chartCreated=!0;a.dispDUpd()},setDepths:function(){for(var a=this.chartData,b=0;b<a.length;b++){var d=a[b],e=d.wedge,d=d.startAngle;90>=d&&0<=d||360>=d&&270<d?e.toFront():(270>=d&&180<d||180>=d&&90<d)&&e.toBack()}},addEventListeners:function(a,b){var d=this;a.mouseover(function(){d.rollOverSlice(b,!0)}).mouseout(function(){d.rollOutSlice(b)}).click(function(){d.clickSlice(b)})},
formatString:function(a,b){a=AmCharts.formatValue(a,b,["value"],this.numberFormatter,"",this.usePrefixes,this.prefixesOfSmallNumbers,this.prefixesOfBigNumbers);a=AmCharts.formatValue(a,b,["percents"],this.percentFormatter);a=AmCharts.massReplace(a,{"[[title]]":b.title,"[[description]]":b.description,"<br>":"\n"});a=AmCharts.fixNewLines(a);return a=AmCharts.cleanFromEmpty(a)},drawTicks:function(){for(var a=this.chartData,b=0;b<a.length;b++)if(this.chartDataLabels[b]){var d=a[b],e=d.ty,f=this.radiusReal,
e=AmCharts.line(this.container,[this.pieXReal+d.ix*f,d.tx,d.tx2],[this.pieYReal+d.iy*f,e,e],this.labelTickColor,this.labelTickAlpha);d.wedge.push(e);this.ticks[b]=e}},arrangeLabels:function(){for(var a=this.chartData,b=a.length,d,e=b-1;0<=e;e--)d=a[e],0==d.labelQuarter&&!d.hidden&&this.checkOverlapping(e,d,0,!0,0);for(e=0;e<b;e++)d=a[e],1==d.labelQuarter&&!d.hidden&&this.checkOverlapping(e,d,1,!1,0);for(e=b-1;0<=e;e--)d=a[e],2==d.labelQuarter&&!d.hidden&&this.checkOverlapping(e,d,2,!0,0);for(e=0;e<
b;e++)d=a[e],3==d.labelQuarter&&!d.hidden&&this.checkOverlapping(e,d,3,!1,0)},checkOverlapping:function(a,b,d,e,f){var g,h,i=this.chartData,j=i.length,k=b.label;if(k){if(!0==e)for(h=a+1;h<j;h++)(g=this.checkOverlappingReal(b,i[h],d))&&(h=j);else for(h=a-1;0<=h;h--)(g=this.checkOverlappingReal(b,i[h],d))&&(h=0);!0==g&&100>f&&(g=b.ty+3*b.iy,b.ty=g,k.translate(b.tx2,g),this.checkOverlapping(a,b,d,e,f+1))}},checkOverlappingReal:function(a,b,d){var e=!1,f=a.label,g=b.label;a.labelQuarter==d&&(!a.hidden&&
!b.hidden&&g)&&(f=f.getBBox(),d={},d.width=f.width,d.height=f.height,d.y=a.ty,d.x=a.tx,a=g.getBBox(),g={},g.width=a.width,g.height=a.height,g.y=b.ty,g.x=b.tx,AmCharts.hitTest(d,g)&&(e=!0));return e},startSlices:function(){for(var a=this,b=500*(a.startDuration/a.chartData.length),d=0;d<a.chartData.length;d++)if(0<a.startDuration&&a.sequencedAnimation){var e=setTimeout(function(){a.startSequenced.call(a)},b*d);a.timeOuts.push(e)}else a.startSlice(a.chartData[d])},pullSlices:function(a){for(var b=this.chartData,
d=0;d<b.length;d++){var e=b[d];e.pulled&&this.pullSlice(e,1,a)}},startSequenced:function(){for(var a=this.chartData,b=0;b<a.length;b++)if(!a[b].started){this.startSlice(this.chartData[b]);break}},startSlice:function(a){a.started=!0;var b=a.wedge,d=this.startDuration;if(b&&0<d){0<a.alpha&&b.show();var e=AmCharts.toCoordinate(this.startRadius,this.radiusReal);b.translate(Math.round(a.ix*e),Math.round(a.iy*e));b.animate({opacity:a.alpha,translate:"0,0"},d,this.startEffect)}},showLabels:function(){for(var a=
this.chartData,b=0;b<a.length;b++)if(0<a[b].alpha){var d=this.chartDataLabels[b];d&&d.show();(d=this.ticks[b])&&d.show()}},showSlice:function(a){isNaN(a)?a.hidden=!1:this.chartData[a].hidden=!1;this.hideBalloon();this.invalidateVisibility()},hideSlice:function(a){isNaN(a)?a.hidden=!0:this.chartData[a].hidden=!0;this.hideBalloon();this.invalidateVisibility()},rollOverSlice:function(a,b){isNaN(a)||(a=this.chartData[a]);clearTimeout(this.hoverInt);this.pullOnHover&&this.pullSlice(a,1);var d=this.innerRadiusReal+
(this.radiusReal-this.innerRadiusReal)/2;a.pulled&&(d+=this.pullOutRadiusReal);1>this.hoverAlpha&&a.wedge&&a.wedge.attr({opacity:this.hoverAlpha});var e;e=a.ix*d+this.pieXReal;var d=a.iy*d+this.pieYReal,f=this.formatString(this.balloonText,a),g=AmCharts.adjustLuminosity(a.color,-0.15);this.showBalloon(f,g,b,e,d);e={type:"rollOverSlice",dataItem:a,chart:this};this.fire(e.type,e)},rollOutSlice:function(a){isNaN(a)||(a=this.chartData[a]);a.wedge&&a.wedge.attr({opacity:a.alpha});this.hideBalloon();a=
{type:"rollOutSlice",dataItem:a,chart:this};this.fire(a.type,a)},clickSlice:function(a){isNaN(a)||(a=this.chartData[a]);this.hideBalloon();a.pulled?this.pullSlice(a,0):this.pullSlice(a,1);AmCharts.getURL(a.url,this.urlTarget);a={type:"clickSlice",dataItem:a,chart:this};this.fire(a.type,a)},pullSlice:function(a,b,d){var e=a.ix,f=a.iy,g=this.pullOutDuration;!0===d&&(g=0);var d=a.wedge,h=this.pullOutRadiusReal;d&&d.animate({translate:b*e*h+","+b*f*h},g,this.pullOutEffect);1==b?(a.pulled=!0,this.pullOutOnlyOne&&
this.pullInAll(a.index),a={type:"pullOutSlice",dataItem:a,chart:this}):(a.pulled=!1,a={type:"pullInSlice",dataItem:a,chart:this});this.fire(a.type,a)},pullInAll:function(a){for(var b=this.chartData,d=0;d<this.chartData.length;d++)d!=a&&b[d].pulled&&this.pullSlice(b[d],0)},pullOutAll:function(){for(var a=this.chartData,b=0;b<a.length;b++)a[b].pulled||this.pullSlice(a[b],1)},parseData:function(){var a=[];this.chartData=a;var b=this.dataProvider;if(void 0!=b){for(var d=b.length,e=0,f=0;f<d;f++){var g=
{},h=b[f];g.dataContext=h;g.value=Number(h[this.valueField]);var i=h[this.titleField];i||(i="");g.title=i;g.pulled=AmCharts.toBoolean(h[this.pulledField],!1);(i=h[this.descriptionField])||(i="");g.description=i;g.url=h[this.urlField];g.visibleInLegend=AmCharts.toBoolean(h[this.visibleInLegendField],!0);i=h[this.alphaField];g.alpha=void 0!=i?Number(i):this.pieAlpha;h=h[this.colorField];void 0!=h&&(g.color=AmCharts.toColor(h));e+=g.value;g.hidden=!1;a[f]=g}for(f=b=0;f<d;f++)g=a[f],g.percents=100*(g.value/
e),g.percents<this.groupPercent&&b++;1<b&&(this.groupValue=0,this.removeSmallSlices(),a.push({title:this.groupedTitle,value:this.groupValue,percents:100*(this.groupValue/e),pulled:this.groupedPulled,color:this.groupedColor,url:this.groupedUrl,description:this.groupedDescription,alpha:this.groupedAlpha}));for(f=0;f<a.length;f++)this.pieBaseColor?h=AmCharts.adjustLuminosity(this.pieBaseColor,f*this.pieBrightnessStep/100):(h=this.colors[f],void 0==h&&(h=AmCharts.randomColor())),void 0==a[f].color&&(a[f].color=
h);this.recalculatePercents()}},recalculatePercents:function(){for(var a=this.chartData,b=0,d=0;d<a.length;d++){var e=a[d];!e.hidden&&0<e.value&&(b+=e.value)}for(d=0;d<a.length;d++)e=this.chartData[d],e.percents=!e.hidden&&0<e.value?100*e.value/b:0},removeSmallSlices:function(){for(var a=this.chartData,b=a.length-1;0<=b;b--)a[b].percents<this.groupPercent&&(this.groupValue+=a[b].value,a.splice(b,1))},animateAgain:function(){var a=this;a.startSlices();var b=setTimeout(function(){a.pullSlices.call(a)},
1200*a.startDuration);a.timeOuts.push(b)},measureMaxLabel:function(){for(var a=this.chartData,b=0,d=0;d<a.length;d++){var e=this.formatString(this.labelText,a[d]),e=AmCharts.text(this.container,e,this.color,this.fontFamily,this.fontSize),f=e.getBBox().width;f>b&&(b=f);e.remove()}return b}});AmCharts.AmXYChart=AmCharts.Class({inherits:AmCharts.AmRectangularChart,construct:function(){AmCharts.AmXYChart.base.construct.call(this);this.createEvents("zoomed");this.xAxes;this.yAxes;this.scrollbarV;this.scrollbarH;this.maxZoomFactor=20;this.chartType="xy"},initChart:function(){AmCharts.AmXYChart.base.initChart.call(this);this.dataChanged&&(this.updateData(),this.dataChanged=!1,this.dispatchDataUpdated=!0);this.updateScrollbar=!0;this.drawChart();this.autoMargins&&!this.marginsUpdated&&(this.marginsUpdated=
!0,this.measureMargins());var a=this.marginLeftReal,b=this.marginTopReal,d=this.plotAreaWidth,e=this.plotAreaHeight;this.graphsSet.clipRect(a,b,d,e);this.bulletSet.clipRect(a,b,d,e);this.trendLinesSet.clipRect(a,b,d,e)},createValueAxes:function(){var a=[],b=[];this.xAxes=a;this.yAxes=b;for(var d=this.valueAxes,e=0;e<d.length;e++){var f=d[e],g=f.position;if("top"==g||"bottom"==g)f.rotate=!0;f.setOrientation(f.rotate);g=f.orientation;"V"==g&&b.push(f);"H"==g&&a.push(f)}0==b.length&&(f=new AmCharts.ValueAxis,
f.rotate=!1,f.setOrientation(!1),d.push(f),b.push(f));0==a.length&&(f=new AmCharts.ValueAxis,f.rotate=!0,f.setOrientation(!0),d.push(f),a.push(f));for(e=0;e<d.length;e++)this.processValueAxis(d[e],e);a=this.graphs;for(e=0;e<a.length;e++)this.processGraph(a[e],e)},drawChart:function(){AmCharts.AmXYChart.base.drawChart.call(this);AmCharts.ifArray(this.chartData)?(this.chartScrollbar&&(this.updateScrollbars(),this.scrollbarH.draw(),this.scrollbarV.draw()),this.zoomChart()):this.cleanChart();this.dispDUpd();
this.chartCreated=!0},cleanChart:function(){AmCharts.callMethod("destroy",[this.valueAxes,this.graphs,this.scrollbarV,this.scrollbarH,this.chartCursor])},zoomChart:function(){this.toggleZoomOutButton();this.zoomObjects(this.valueAxes);this.zoomObjects(this.graphs);this.zoomTrendLines();this.dispatchAxisZoom()},toggleZoomOutButton:function(){1==this.heightMultiplier&&1==this.widthMultiplier?this.showZB(!1):this.showZB(!0)},dispatchAxisZoom:function(){for(var a=this.valueAxes,b=0;b<a.length;b++){var d=
a[b];if(!isNaN(d.min)&&!isNaN(d.max)){var e,f;"V"==d.orientation?(e=d.coordinateToValue(-this.verticalPosition),f=d.coordinateToValue(-this.verticalPosition+this.plotAreaHeight)):(e=d.coordinateToValue(-this.horizontalPosition),f=d.coordinateToValue(-this.horizontalPosition+this.plotAreaWidth));if(!isNaN(e)&&!isNaN(f)){if(e>f){var g=f;f=e;e=g}d.dispatchZoomEvent(e,f)}}}},zoomObjects:function(a){for(var b=a.length,d=0;d<b;d++){var e=a[d];this.updateObjectSize(e);e.zoom(0,this.chartData.length-1)}},
updateData:function(){this.parseData();for(var a=this.chartData,b=a.length-1,d=this.graphs,e=this.dataProvider,f=0,g=0;g<d.length;g++){var h=d[g];h.data=a;h.zoom(0,b);if(h=h.valueField)for(var i=0;i<e.length;i++){var j=e[i][h];j>f&&(f=j)}}for(g=0;g<d.length;g++)h=d[g],h.maxValue=f;if(a=this.chartCursor)a.updateData(),a.type="crosshair",a.valueBalloonsEnabled=!1},zoomOut:function(){this.verticalPosition=this.horizontalPosition=0;this.heightMultiplier=this.widthMultiplier=1;this.zoomChart();this.zoomScrollbars()},
processValueAxis:function(a){a.chart=this;a.minMaxField="H"==a.orientation?"x":"y";a.minTemp=NaN;a.maxTemp=NaN;this.listenTo(a,"axisSelfZoomed",this.handleAxisSelfZoom)},processGraph:function(a){a.xAxis||(a.xAxis=this.xAxes[0]);a.yAxis||(a.yAxis=this.yAxes[0])},parseData:function(){AmCharts.AmXYChart.base.parseData.call(this);this.chartData=[];for(var a=this.dataProvider,b=this.valueAxes,d=this.graphs,e=0;e<a.length;e++){for(var f={axes:{},x:{},y:{}},g=a[e],h=0;h<b.length;h++){var i=b[h].id;f.axes[i]=
{};f.axes[i].graphs={};for(var j=0;j<d.length;j++){var k=d[j],l=k.id;if(k.xAxis.id==i||k.yAxis.id==i){var m={};m.serialDataItem=f;m.index=e;var r={},n=Number(g[k.valueField]);isNaN(n)||(r.value=n);n=Number(g[k.xField]);isNaN(n)||(r.x=n);n=Number(g[k.yField]);isNaN(n)||(r.y=n);m.values=r;this.processFields(k,m,g);m.serialDataItem=f;m.graph=k;f.axes[i].graphs[l]=m}}}this.chartData[e]=f}},formatString:function(a,b){var d=b.graph.numberFormatter;d||(d=this.numberFormatter);a=AmCharts.formatValue(a,b.values,
["value","x","y"],d);-1!=a.indexOf("[[")&&(a=AmCharts.formatDataContextValue(a,b.dataContext));return a=AmCharts.AmSerialChart.base.formatString.call(this,a,b)},addChartScrollbar:function(a){AmCharts.callMethod("destroy",[this.chartScrollbar,this.scrollbarH,this.scrollbarV]);if(a){var b=new AmCharts.SimpleChartScrollbar,d=new AmCharts.SimpleChartScrollbar;b.skipEvent=!0;d.skipEvent=!0;b.chart=this;d.chart=this;this.listenTo(b,"zoomed",this.handleVSBZoom);this.listenTo(d,"zoomed",this.handleHSBZoom);
var e="backgroundColor backgroundAlpha selectedBackgroundColor selectedBackgroundAlpha scrollDuration resizeEnabled hideResizeGrips scrollbarHeight updateOnReleaseOnly".split(" ");AmCharts.copyProperties(a,b,e);AmCharts.copyProperties(a,d,e);b.rotate=!0;d.rotate=!1;this.scrollbarHeight=a.scrollbarHeight;this.scrollbarH=d;this.scrollbarV=b;this.chartScrollbar=a}},updateTrendLines:function(){for(var a=this.trendLines,b=0;b<a.length;b++){var d=a[b];d.chart=this;d.valueAxis||(d.valueAxis=this.yAxes[0]);
d.valueAxisX||(d.valueAxisX=this.xAxes[0])}},updateMargins:function(){AmCharts.AmXYChart.base.updateMargins.call(this);var a=this.scrollbarV;a&&(this.getScrollbarPosition(a,!0,this.yAxes[0].position),this.adjustMargins(a,!0));if(a=this.scrollbarH)this.getScrollbarPosition(a,!1,this.xAxes[0].position),this.adjustMargins(a,!1)},updateScrollbars:function(){this.updateChartScrollbar(this.scrollbarV,!0);this.updateChartScrollbar(this.scrollbarH,!1)},zoomScrollbars:function(){var a=this.scrollbarH;a&&a.relativeZoom(this.widthMultiplier,
-this.horizontalPosition/this.widthMultiplier);(a=this.scrollbarV)&&a.relativeZoom(this.heightMultiplier,-this.verticalPosition/this.heightMultiplier)},fitMultiplier:function(a){a>this.maxZoomFactor&&(a=this.maxZoomFactor);return a},handleHSBZoom:function(a){var b=this.fitMultiplier(a.multiplier),a=-a.position*b,d=-(this.plotAreaWidth*b-this.plotAreaWidth);a<d&&(a=d);this.widthMultiplier=b;this.horizontalPosition=a;this.zoomChart()},handleVSBZoom:function(a){var b=this.fitMultiplier(a.multiplier),
a=-a.position*b,d=-(this.plotAreaHeight*b-this.plotAreaHeight);a<d&&(a=d);this.heightMultiplier=b;this.verticalPosition=a;this.zoomChart()},handleCursorZoom:function(a){var b=this.widthMultiplier*this.plotAreaWidth/a.selectionWidth,d=this.heightMultiplier*this.plotAreaHeight/a.selectionHeight,b=this.fitMultiplier(b),d=this.fitMultiplier(d);this.horizontalPosition=(this.horizontalPosition-a.selectionX)*b/this.widthMultiplier;this.verticalPosition=(this.verticalPosition-a.selectionY)*d/this.heightMultiplier;
this.widthMultiplier=b;this.heightMultiplier=d;this.zoomChart();this.zoomScrollbars()},handleAxisSelfZoom:function(a){if("H"==a.valueAxis.orientation){var b=this.fitMultiplier(a.multiplier),a=-a.position/this.widthMultiplier*b,d=-(this.plotAreaWidth*b-this.plotAreaWidth);a<d&&(a=d);this.horizontalPosition=a;this.widthMultiplier=b}else b=this.fitMultiplier(a.multiplier),a=-a.position/this.heightMultiplier*b,d=-(this.plotAreaHeight*b-this.plotAreaHeight),a<d&&(a=d),this.verticalPosition=a,this.heightMultiplier=
b;this.zoomChart();this.zoomScrollbars()},removeChartScrollbar:function(){AmCharts.callMethod("destroy",[this.scrollbarH,this.scrollbarV]);this.scrollbarV=this.scrollbarH=null},handleReleaseOutside:function(a){AmCharts.AmXYChart.base.handleReleaseOutside.call(this,a);AmCharts.callMethod("handleReleaseOutside",[this.scrollbarH,this.scrollbarV])}});AmCharts.AmDraw=AmCharts.Class({construct:function(a,b,d){AmCharts.SVG_NS="http://www.w3.org/2000/svg";AmCharts.SVG_XLINK="http://www.w3.org/1999/xlink";AmCharts.hasSVG=!!document.createElementNS&&!!document.createElementNS(AmCharts.SVG_NS,"svg").createSVGRect;1>b&&(b=10);1>d&&(d=10);this.div=a;this.width=b;this.height=d;this.rBin=document.createElement("div");if(AmCharts.hasSVG){var e=this.createSvgElement("svg");e.style.position="absolute";e.style.width=b+"px";e.style.height=d+"px";e.setAttribute("version",
"1.1");a.appendChild(e);this.container=e;this.R=new AmCharts.SVGRenderer(this)}else AmCharts.isIE&&(AmCharts.VML=!0,AmCharts.vmlStyleSheet||(document.namespaces.add("amvml","urn:schemas-microsoft-com:vml"),b=document.createStyleSheet(),b.addRule(".amvml","behavior:url(#default#VML); display:inline-block; antialias:true"),AmCharts.vmlStyleSheet=b),this.container=a,this.R=new AmCharts.VMLRenderer(this),this.R.disableSelection(a))},createSvgElement:function(a){return document.createElementNS(AmCharts.SVG_NS,
a)},circle:function(a,b,d,e){var f=new AmCharts.AmDObject("circle",this);f.attr({r:d,cx:a,cy:b});this.addToContainer(f.node,e);return f},setSize:function(a,b){0<a&&0<b&&(this.container.style.width=a+"px",this.container.style.height=b+"px")},rect:function(a,b,d,e,f,g,h){var i=new AmCharts.AmDObject("rect",this);AmCharts.VML&&(f=100*f/Math.min(d,e),d+=2*g,e+=2*g,i.bw=g,i.node.style.marginLeft=-g,i.node.style.marginTop=-g);1>d&&(d=1);1>e&&(e=1);i.attr({x:a,y:b,width:d,height:e,rx:f,ry:f,"stroke-width":g});
this.addToContainer(i.node,h);return i},image:function(a,b,d,e,f,g){var h=new AmCharts.AmDObject("image",this);h.attr({x:b,y:d,width:e,height:f});this.R.path(h,a);this.addToContainer(h.node,g);return h},addToContainer:function(a,b){b||(b=this.container);b.appendChild(a)},text:function(a,b,d){return this.R.text(a,b,d)},path:function(a,b,d,e){var f=new AmCharts.AmDObject("path",this);e||(e="100,100");f.attr({cs:e});d?f.attr({dd:a}):f.attr({d:a});this.addToContainer(f.node,b);return f},set:function(a){return this.R.set(a)},
remove:function(a){if(a){var b=this.rBin;b.appendChild(a);b.innerHTML=""}},bounce:function(a,b,d,e,f){return(b/=f)<1/2.75?e*7.5625*b*b+d:b<2/2.75?e*(7.5625*(b-=1.5/2.75)*b+0.75)+d:b<2.5/2.75?e*(7.5625*(b-=2.25/2.75)*b+0.9375)+d:e*(7.5625*(b-=2.625/2.75)*b+0.984375)+d},easeInSine:function(a,b,d,e,f){return-e*Math.cos(b/f*(Math.PI/2))+e+d},easeOutSine:function(a,b,d,e,f){return e*Math.sin(b/f*(Math.PI/2))+d},easeOutElastic:function(a,b,d,e,f){var a=1.70158,g=0,h=e;if(0==b)return d;if(1==(b/=f))return d+
e;g||(g=0.3*f);h<Math.abs(e)?(h=e,a=g/4):a=g/(2*Math.PI)*Math.asin(e/h);return h*Math.pow(2,-10*b)*Math.sin((b*f-a)*2*Math.PI/g)+e+d},renderFix:function(){var a=this.container,b=a.style;b.left="0px";b.top="0px";a.getScreenCTM&&a.createSVGMatrix&&(a=a.createSVGMatrix()||a.getScreenCTM(),b.left=-(a.e-Math.floor(a.e))+"px",b.top=-(a.f-Math.floor(a.f))+"px")}});AmCharts.AmDObject=AmCharts.Class({construct:function(a,b){this.D=b;this.R=b.R;this.node=this.R.create(this,a);this.children=[];this.y=this.x=0;this.scale=1},attr:function(a){this.R.attr(this,a);return this},getAttr:function(a){return this.node.getAttribute(a)},setAttr:function(a,b){this.R.setAttr(this,a,b);return this},clipRect:function(a,b,d,e){this.R.clipRect(this,a,b,d,e)},translate:function(a,b,d){this.R.move(this,Math.round(a),Math.round(b),d);this.x=a;this.y=b;this.scale=d;this.angle&&this.rotate(this.angle)},
rotate:function(a){this.R.rotate(this,a);this.angle=a},animate:function(a,b,d){for(var e in a){var f=e,g=a[e],d=AmCharts.getEffect(d);this.R.animate(this,f,g,b,d)}},push:function(a){if(a){var b=this.node;b.appendChild(a.node);var d=a.clipPath;d&&b.appendChild(d);(d=a.grad)&&b.appendChild(d);this.children.push(a)}},text:function(a){this.R.setText(this,a)},remove:function(){this.R.remove(this)},clear:function(){var a=this.node;if(a.hasChildNodes())for(;1<=a.childNodes.length;)a.removeChild(a.firstChild)},
hide:function(){this.setAttr("visibility","hidden")},show:function(){this.setAttr("visibility","visible")},getBBox:function(){return this.R.getBBox(this)},toFront:function(){var a=this.node;if(a){var b=a.parentNode;b&&b.appendChild(a)}},toBack:function(){var a=this.node;if(a){var b=a.parentNode;if(b){var d=b.firstChild;d&&b.insertBefore(a,d)}}},mouseover:function(a){this.R.addListener(this,"mouseover",a);return this},mouseout:function(a){this.R.addListener(this,"mouseout",a);return this},click:function(a){this.R.addListener(this,
"click",a);return this},dblclick:function(a){this.R.addListener(this,"dblclick",a);return this},mousedown:function(a){this.R.addListener(this,"mousedown",a);return this},mouseup:function(a){this.R.addListener(this,"mouseup",a);return this},touchstart:function(a){this.R.addListener(this,"touchstart",a);return this},touchend:function(a){this.R.addListener(this,"touchend",a);return this},stop:function(){var a=this.animationX;a&&AmCharts.removeFromArray(this.R.animations,a);(a=this.animationY)&&AmCharts.removeFromArray(this.R.animations,
a)},length:function(){return this.node.childNodes.length},gradient:function(a,b,d){this.R.gradient(this,a,b,d)}});AmCharts.VMLRenderer=AmCharts.Class({construct:function(a){this.D=a;this.cNames={circle:"oval",rect:"roundrect",path:"shape"};this.styleMap={x:"left",y:"top",width:"width",height:"height","font-family":"fontFamily","font-size":"fontSize",visibility:"visibility"};this.animations=[]},create:function(a,b){var d;if("group"==b)d=document.createElement("div"),a.type="div";else if("text"==b)d=document.createElement("div"),a.type="text";else if("image"==b)d=document.createElement("img"),a.type="image";else{a.type=
"shape";a.shapeType=this.cNames[b];d=document.createElement("amvml:"+this.cNames[b]);var e=document.createElement("amvml:stroke");d.appendChild(e);a.stroke=e;var f=document.createElement("amvml:fill");d.appendChild(f);a.fill=f;f.className="amvml";e.className="amvml";d.className="amvml"}d.style.position="absolute";d.style.top=0;d.style.left=0;return d},path:function(a,b){a.node.setAttribute("src",b)},setAttr:function(a,b,d){if(void 0!==d){if(8===document.documentMode)var e=!0;var f=a.node,g=a.type,
h=f.style;"r"==b&&(h.width=2*d,h.height=2*d);if("roundrect"==a.shapeType&&("width"==b||"height"==b))d-=1;"cursor"==b&&(h.cursor=d);"cx"==b&&(h.left=d-AmCharts.removePx(h.width)/2);"cy"==b&&(h.top=d-AmCharts.removePx(h.height)/2);var i=this.styleMap[b];void 0!=i&&(h[i]=d);"text"==g&&("text-anchor"==b&&(a.anchor=d,i=f.clientWidth,"end"==d&&(h.marginLeft=-i+"px"),"middle"==d&&(h.marginLeft=-(i/2)+"px"),"start"==d&&(h.marginLeft="0px")),"fill"==b&&(h.color=d),"font-weight"==b&&(h.fontWeight=d));h=a.children;
for(i=0;i<h.length;i++)h[i].setAttr(b,d);if("shape"==g){"cs"==b&&(f.style.width="100px",f.style.height="100px",f.setAttribute("coordsize",d));"d"==b&&f.setAttribute("path",this.svgPathToVml(d));"dd"==b&&f.setAttribute("path",d);g=a.stroke;a=a.fill;"stroke"==b&&(e?g.color=d:g.setAttribute("color",d));"stroke-width"==b&&(e?g.weight=d:g.setAttribute("weight",d));"stroke-opacity"==b&&(e?g.opacity=d:g.setAttribute("opacity",d));"stroke-dasharray"==b&&(h="solid",0<d&&3>d&&(h="dot"),3<=d&&6>=d&&(h="dash"),
6<d&&(h="longdash"),e?g.dashstyle=h:g.setAttribute("dashstyle",h));if("fill-opacity"==b||"opacity"==b)0==d?e?a.on=!1:a.setAttribute("on",!1):e?a.opacity=d:a.setAttribute("opacity",d);"fill"==b&&(e?a.color=d:a.setAttribute("color",d));"rx"==b&&(e?f.arcSize=d+"%":f.setAttribute("arcsize",d+"%"))}}},attr:function(a,b){for(var d in b)this.setAttr(a,d,b[d])},text:function(a,b,d){var e=new AmCharts.AmDObject("text",this.D),f=e.node;f.style.whiteSpace="pre";a=document.createTextNode(a);f.appendChild(a);
this.D.addToContainer(f,d);this.attr(e,b);return e},getBBox:function(a){return this.getBox(a.node)},getBox:function(a){var b=a.offsetLeft,d=a.offsetTop,e=a.offsetWidth,f=a.offsetHeight,g;if(a.hasChildNodes()){for(var h,i,j=0;j<a.childNodes.length;j++){g=this.getBox(a.childNodes[j]);var k=g.x;isNaN(k)||(isNaN(h)?h=k:k<h&&(h=k));var l=g.y;isNaN(l)||(isNaN(i)?i=l:l<i&&(i=l));k=g.width+k;isNaN(k)||(e=Math.max(e,k));g=g.height+l;isNaN(g)||(f=Math.max(f,g))}0>h&&(b+=h);0>i&&(d+=i)}return{x:b,y:d,width:e,
height:f}},setText:function(a,b){var d=a.node;d&&(d.removeChild(d.firstChild),d.appendChild(document.createTextNode(b)));this.setAttr(a,"text-anchor",a.anchor)},addListener:function(a,b,d){a.node["on"+b]=d},move:function(a,b,d){var e=a.node,f=e.style;"text"==a.type&&(d-=AmCharts.removePx(f.fontSize)/2-1);"oval"==a.shapeType&&(b-=AmCharts.removePx(f.width)/2,d-=AmCharts.removePx(f.height)/2);a=a.bw;isNaN(a)||(b-=a,d-=a);e.style.left=b+"px";e.style.top=d+"px"},svgPathToVml:function(a){for(var b=a.split(" "),
a="",d,e=Math.round,f=0;f<b.length;f++){var g=b[f],h=g.substring(0,1),g=g.substring(1),i=g.split(","),j=e(i[0])+","+e(i[1]);"M"==h&&(a+=" m "+j);"L"==h&&(a+=" l "+j);"Z"==h&&(a+=" x e");if("Q"==h){var k=d.length,l=d[k-1],m=i[0],r=i[1],j=i[2],n=i[3];d=e(d[k-2]/3+2/3*m);l=e(l/3+2/3*r);m=e(2/3*m+j/3);r=e(2/3*r+n/3);a+=" c "+d+","+l+","+m+","+r+","+j+","+n}"A"==h&&(a+=" wa "+g);"B"==h&&(a+=" at "+g);d=i}return a},animate:function(a,b,d,e,f){var g=this,h=a.node;if("translate"==b){var i=d.split(","),b=
i[1],d=h.offsetTop,h={obj:a,frame:0,attribute:"left",from:h.offsetLeft,to:i[0],time:e,effect:f};g.animations.push(h);e={obj:a,frame:0,attribute:"top",from:d,to:b,time:e,effect:f};g.animations.push(e);a.animationX=h;a.animationY=e}g.interval||(g.interval=setInterval(function(){g.updateAnimations.call(g)},AmCharts.updateRate))},updateAnimations:function(){for(var a=this.animations.length-1;0<=a;a--){var b=this.animations[a],d=1E3*b.time/AmCharts.updateRate,e=b.frame+1,f=b.obj,g=b.attribute;if(e<=d){b.frame++;
var h=Number(b.from),i=Number(b.to)-h,b=this.D[b.effect](0,e,h,i,d);0==i?this.animations.splice(a,1):f.node.style[g]=b}else f.node.style[g]=Number(b.to),this.animations.splice(a,1)}},clipRect:function(a,b,d,e,f){a.node.style.clip="rect("+d+"px "+(b+e)+"px "+(d+f)+"px "+b+"px)"},rotate:function(a,b){var d=a.node,e=d.style,f=this.getBGColor(d.parentNode);e.backgroundColor=f;e.paddingLeft=1;var f=b*Math.PI/180,g=Math.cos(f),h=Math.sin(f),i=AmCharts.removePx(e.left),j=AmCharts.removePx(e.top),k=d.offsetWidth,
d=d.offsetHeight,l=b/Math.abs(b);e.left=i+k/2-k/2*Math.cos(f)-l*d/2*Math.sin(f)+3;e.top=j-l*k/2*Math.sin(f)+l*d/2*Math.sin(f);e.cssText=e.cssText+"; filter:progid:DXImageTransform.Microsoft.Matrix(M11='"+g+"', M12='"+-h+"', M21='"+h+"', M22='"+g+"', sizingmethod='auto expand');"},getBGColor:function(a){var b="#FFFFFF";if(a.style){var d=a.style.backgroundColor;""!=d?b=d:a.parentNode&&(b=this.getBGColor(a.parentNode))}return b},set:function(a){var b=new AmCharts.AmDObject("group",this.D);this.D.container.appendChild(b.node);
if(a)for(var d=0;d<a.length;d++)b.push(a[d]);return b},gradient:function(a,b,d,e){var f="";"radialGradient"==b&&(b="gradientradial",d.reverse());"linearGradient"==b&&(b="gradient");for(var g=0;g<d.length;g++){var h=Math.round(100*g/(d.length-1)),f=f+(h+"% "+d[g]);g<d.length-1&&(f+=",")}a=a.fill;90==e?e=0:270==e?e=180:180==e?e=90:0==e&&(e=270);8===document.documentMode?(a.type=b,a.angle=e):(a.setAttribute("type",b),a.setAttribute("angle",e));f&&(a.colors.value=f)},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);
this.D.remove(a.node)},disableSelection:function(a){void 0!=typeof a.onselectstart&&(a.onselectstart=function(){return!1});a.style.cursor="default"}});AmCharts.SVGRenderer=AmCharts.Class({construct:function(a){this.D=a;this.animations=[]},create:function(a,b){return document.createElementNS(AmCharts.SVG_NS,b)},attr:function(a,b){for(var d in b)this.setAttr(a,d,b[d])},setAttr:function(a,b,d){void 0!==d&&a.node.setAttribute(b,d)},animate:function(a,b,d,e,f){var g=this,h=a.node;"translate"==b?(h=(h=h.getAttribute("transform"))?String(h).substring(10,h.length-1):"0,0",h=h.split(", ").join(" "),h=h.split(" ").join(","),0==h&&(h="0,0")):h=h.getAttribute(b);
b={obj:a,frame:0,attribute:b,from:h,to:d,time:e,effect:f};g.animations.push(b);a.animationX=b;g.interval||(g.interval=setInterval(function(){g.updateAnimations.call(g)},AmCharts.updateRate))},updateAnimations:function(){for(var a=this.animations.length-1;0<=a;a--){var b=this.animations[a],d=1E3*b.time/AmCharts.updateRate,e=b.frame+1,f=b.obj,g=b.attribute;if(e<=d){b.frame++;if("translate"==g)var h=b.from.split(","),g=Number(h[0]),h=Number(h[1]),i=b.to.split(","),j=Number(i[0]),i=Number(i[1]),j=0==
j-g?j:Math.round(this.D[b.effect](0,e,g,j-g,d)),b=0==i-h?i:Math.round(this.D[b.effect](0,e,h,i-h,d)),g="transform",b="translate("+j+","+b+")";else h=Number(b.from),j=Number(b.to),j-=h,b=this.D[b.effect](0,e,h,j,d),0==j&&this.animations.splice(a,1);this.setAttr(f,g,b)}else"translate"==g?(i=b.to.split(","),j=Number(i[0]),i=Number(i[1]),f.translate(j,i)):(j=Number(b.to),this.setAttr(f,g,j)),this.animations.splice(a,1)}},getBBox:function(a){if(a=a.node)try{return a.getBBox()}catch(b){}return{width:0,
height:0,x:0,y:0}},path:function(a,b){a.node.setAttributeNS(AmCharts.SVG_XLINK,"xlink:href",b)},clipRect:function(a,b,d,e,f){var g=a.node,h=a.clipPath;h&&this.D.remove(h);var i=g.parentNode;i&&(g=document.createElementNS(AmCharts.SVG_NS,"clipPath"),h=AmCharts.getUniqueId(),g.setAttribute("id",h),this.D.rect(b,d,e,f,0,0,g),i.appendChild(g),b="#",AmCharts.baseHref&&!AmCharts.isIE&&(b=window.location.href+b),this.setAttr(a,"clip-path","url("+b+h+")"),this.clipPathC++,a.clipPath=g)},text:function(a,b,
d){for(var e=new AmCharts.AmDObject("text",this.D),a=String(a).split("\n"),f=b["font-size"],g=0;g<a.length;g++){var h=this.create(null,"tspan");h.appendChild(document.createTextNode(a[g]));h.setAttribute("y",(f+2)*g+f/2+0);h.setAttribute("x",0);e.node.appendChild(h)}e.node.setAttribute("y",f/2+0);this.attr(e,b);this.D.addToContainer(e.node,d);return e},setText:function(a,b){var d=a.node;d&&(d.removeChild(d.firstChild),d.appendChild(document.createTextNode(b)))},move:function(a,b,d,e){b="translate("+
b+","+d+")";e&&(b=b+" scale("+e+")");this.setAttr(a,"transform",b)},rotate:function(a,b){var d=a.node.getAttribute("transform"),e="rotate("+b+")";d&&(e=d+" "+e);this.setAttr(a,"transform",e)},set:function(a){var b=new AmCharts.AmDObject("g",this.D);this.D.container.appendChild(b.node);if(a)for(var d=0;d<a.length;d++)b.push(a[d]);return b},addListener:function(a,b,d){a.node["on"+b]=d},gradient:function(a,b,d,e){var f=a.node,g=a.grad;g&&this.D.remove(g);b=document.createElementNS(AmCharts.SVG_NS,b);
g=AmCharts.getUniqueId();b.setAttribute("id",g);if(!isNaN(e)){var h=0,i=0,j=0,k=0;90==e?j=100:270==e?k=100:180==e?h=100:0==e&&(i=100);b.setAttribute("x1",h+"%");b.setAttribute("x2",i+"%");b.setAttribute("y1",j+"%");b.setAttribute("y2",k+"%")}for(e=0;e<d.length;e++)h=document.createElementNS(AmCharts.SVG_NS,"stop"),i=100*e/(d.length-1),0==e&&(i=0),h.setAttribute("offset",i+"%"),h.setAttribute("stop-color",d[e]),b.appendChild(h);f.parentNode.appendChild(b);d="#";AmCharts.baseHref&&!AmCharts.isIE&&(d=
window.location.href+d);f.setAttribute("fill","url("+d+g+")");a.grad=b},remove:function(a){a.clipPath&&this.D.remove(a.clipPath);a.grad&&this.D.remove(a.grad);this.D.remove(a.node)}});AmCharts.AmDSet=AmCharts.Class({construct:function(){this.create("g")},attr:function(a){this.R.attr(this.node,a)},move:function(a,b){this.R.move(this.node,a,b)}});

/**
 * Version: 1.0 Alpha-1 
 * Build Date: 13-Nov-2007
 * Copyright (c) 2006-2007, Coolite Inc. (http://www.coolite.com/). All rights reserved.
 * License: Licensed under The MIT License. See license.txt and http://www.datejs.com/license/. 
 * Website: http://www.datejs.com/ or http://www.coolite.com/datejs/
 */
Date.CultureInfo={name:"en-US",englishName:"English (United States)",nativeName:"English (United States)",dayNames:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],abbreviatedDayNames:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],shortestDayNames:["Su","Mo","Tu","We","Th","Fr","Sa"],firstLetterDayNames:["S","M","T","W","T","F","S"],monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],abbreviatedMonthNames:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],amDesignator:"AM",pmDesignator:"PM",firstDayOfWeek:0,twoDigitYearMax:2029,dateElementOrder:"mdy",formatPatterns:{shortDate:"M/d/yyyy",longDate:"dddd, MMMM dd, yyyy",shortTime:"h:mm tt",longTime:"h:mm:ss tt",fullDateTime:"dddd, MMMM dd, yyyy h:mm:ss tt",sortableDateTime:"yyyy-MM-ddTHH:mm:ss",universalSortableDateTime:"yyyy-MM-dd HH:mm:ssZ",rfc1123:"ddd, dd MMM yyyy HH:mm:ss GMT",monthDay:"MMMM dd",yearMonth:"MMMM, yyyy"},regexPatterns:{jan:/^jan(uary)?/i,feb:/^feb(ruary)?/i,mar:/^mar(ch)?/i,apr:/^apr(il)?/i,may:/^may/i,jun:/^jun(e)?/i,jul:/^jul(y)?/i,aug:/^aug(ust)?/i,sep:/^sep(t(ember)?)?/i,oct:/^oct(ober)?/i,nov:/^nov(ember)?/i,dec:/^dec(ember)?/i,sun:/^su(n(day)?)?/i,mon:/^mo(n(day)?)?/i,tue:/^tu(e(s(day)?)?)?/i,wed:/^we(d(nesday)?)?/i,thu:/^th(u(r(s(day)?)?)?)?/i,fri:/^fr(i(day)?)?/i,sat:/^sa(t(urday)?)?/i,future:/^next/i,past:/^last|past|prev(ious)?/i,add:/^(\+|after|from)/i,subtract:/^(\-|before|ago)/i,yesterday:/^yesterday/i,today:/^t(oday)?/i,tomorrow:/^tomorrow/i,now:/^n(ow)?/i,millisecond:/^ms|milli(second)?s?/i,second:/^sec(ond)?s?/i,minute:/^min(ute)?s?/i,hour:/^h(ou)?rs?/i,week:/^w(ee)?k/i,month:/^m(o(nth)?s?)?/i,day:/^d(ays?)?/i,year:/^y((ea)?rs?)?/i,shortMeridian:/^(a|p)/i,longMeridian:/^(a\.?m?\.?|p\.?m?\.?)/i,timezone:/^((e(s|d)t|c(s|d)t|m(s|d)t|p(s|d)t)|((gmt)?\s*(\+|\-)\s*\d\d\d\d?)|gmt)/i,ordinalSuffix:/^\s*(st|nd|rd|th)/i,timeContext:/^\s*(\:|a|p)/i},abbreviatedTimeZoneStandard:{GMT:"-000",EST:"-0400",CST:"-0500",MST:"-0600",PST:"-0700"},abbreviatedTimeZoneDST:{GMT:"-000",EDT:"-0500",CDT:"-0600",MDT:"-0700",PDT:"-0800"}};
Date.getMonthNumberFromName=function(name){var n=Date.CultureInfo.monthNames,m=Date.CultureInfo.abbreviatedMonthNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};Date.getDayNumberFromName=function(name){var n=Date.CultureInfo.dayNames,m=Date.CultureInfo.abbreviatedDayNames,o=Date.CultureInfo.shortestDayNames,s=name.toLowerCase();for(var i=0;i<n.length;i++){if(n[i].toLowerCase()==s||m[i].toLowerCase()==s){return i;}}
return-1;};Date.isLeapYear=function(year){return(((year%4===0)&&(year%100!==0))||(year%400===0));};Date.getDaysInMonth=function(year,month){return[31,(Date.isLeapYear(year)?29:28),31,30,31,30,31,31,30,31,30,31][month];};Date.getTimezoneOffset=function(s,dst){return(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST[s.toUpperCase()]:Date.CultureInfo.abbreviatedTimeZoneStandard[s.toUpperCase()];};Date.getTimezoneAbbreviation=function(offset,dst){var n=(dst||false)?Date.CultureInfo.abbreviatedTimeZoneDST:Date.CultureInfo.abbreviatedTimeZoneStandard,p;for(p in n){if(n[p]===offset){return p;}}
return null;};Date.prototype.clone=function(){return new Date(this.getTime());};Date.prototype.compareTo=function(date){if(isNaN(this)){throw new Error(this);}
if(date instanceof Date&&!isNaN(date)){return(this>date)?1:(this<date)?-1:0;}else{throw new TypeError(date);}};Date.prototype.equals=function(date){return(this.compareTo(date)===0);};Date.prototype.between=function(start,end){var t=this.getTime();return t>=start.getTime()&&t<=end.getTime();};Date.prototype.addMilliseconds=function(value){this.setMilliseconds(this.getMilliseconds()+value);return this;};Date.prototype.addSeconds=function(value){return this.addMilliseconds(value*1000);};Date.prototype.addMinutes=function(value){return this.addMilliseconds(value*60000);};Date.prototype.addHours=function(value){return this.addMilliseconds(value*3600000);};Date.prototype.addDays=function(value){return this.addMilliseconds(value*86400000);};Date.prototype.addWeeks=function(value){return this.addMilliseconds(value*604800000);};Date.prototype.addMonths=function(value){var n=this.getDate();this.setDate(1);this.setMonth(this.getMonth()+value);this.setDate(Math.min(n,this.getDaysInMonth()));return this;};Date.prototype.addYears=function(value){return this.addMonths(value*12);};Date.prototype.add=function(config){if(typeof config=="number"){this._orient=config;return this;}
var x=config;if(x.millisecond||x.milliseconds){this.addMilliseconds(x.millisecond||x.milliseconds);}
if(x.second||x.seconds){this.addSeconds(x.second||x.seconds);}
if(x.minute||x.minutes){this.addMinutes(x.minute||x.minutes);}
if(x.hour||x.hours){this.addHours(x.hour||x.hours);}
if(x.month||x.months){this.addMonths(x.month||x.months);}
if(x.year||x.years){this.addYears(x.year||x.years);}
if(x.day||x.days){this.addDays(x.day||x.days);}
return this;};Date._validate=function(value,min,max,name){if(typeof value!="number"){throw new TypeError(value+" is not a Number.");}else if(value<min||value>max){throw new RangeError(value+" is not a valid value for "+name+".");}
return true;};Date.validateMillisecond=function(n){return Date._validate(n,0,999,"milliseconds");};Date.validateSecond=function(n){return Date._validate(n,0,59,"seconds");};Date.validateMinute=function(n){return Date._validate(n,0,59,"minutes");};Date.validateHour=function(n){return Date._validate(n,0,23,"hours");};Date.validateDay=function(n,year,month){return Date._validate(n,1,Date.getDaysInMonth(year,month),"days");};Date.validateMonth=function(n){return Date._validate(n,0,11,"months");};Date.validateYear=function(n){return Date._validate(n,1,9999,"seconds");};Date.prototype.set=function(config){var x=config;if(!x.millisecond&&x.millisecond!==0){x.millisecond=-1;}
if(!x.second&&x.second!==0){x.second=-1;}
if(!x.minute&&x.minute!==0){x.minute=-1;}
if(!x.hour&&x.hour!==0){x.hour=-1;}
if(!x.day&&x.day!==0){x.day=-1;}
if(!x.month&&x.month!==0){x.month=-1;}
if(!x.year&&x.year!==0){x.year=-1;}
if(x.millisecond!=-1&&Date.validateMillisecond(x.millisecond)){this.addMilliseconds(x.millisecond-this.getMilliseconds());}
if(x.second!=-1&&Date.validateSecond(x.second)){this.addSeconds(x.second-this.getSeconds());}
if(x.minute!=-1&&Date.validateMinute(x.minute)){this.addMinutes(x.minute-this.getMinutes());}
if(x.hour!=-1&&Date.validateHour(x.hour)){this.addHours(x.hour-this.getHours());}
if(x.month!==-1&&Date.validateMonth(x.month)){this.addMonths(x.month-this.getMonth());}
if(x.year!=-1&&Date.validateYear(x.year)){this.addYears(x.year-this.getFullYear());}
if(x.day!=-1&&Date.validateDay(x.day,this.getFullYear(),this.getMonth())){this.addDays(x.day-this.getDate());}
if(x.timezone){this.setTimezone(x.timezone);}
if(x.timezoneOffset){this.setTimezoneOffset(x.timezoneOffset);}
return this;};Date.prototype.clearTime=function(){this.setHours(0);this.setMinutes(0);this.setSeconds(0);this.setMilliseconds(0);return this;};Date.prototype.isLeapYear=function(){var y=this.getFullYear();return(((y%4===0)&&(y%100!==0))||(y%400===0));};Date.prototype.isWeekday=function(){return!(this.is().sat()||this.is().sun());};Date.prototype.getDaysInMonth=function(){return Date.getDaysInMonth(this.getFullYear(),this.getMonth());};Date.prototype.moveToFirstDayOfMonth=function(){return this.set({day:1});};Date.prototype.moveToLastDayOfMonth=function(){return this.set({day:this.getDaysInMonth()});};Date.prototype.moveToDayOfWeek=function(day,orient){var diff=(day-this.getDay()+7*(orient||+1))%7;return this.addDays((diff===0)?diff+=7*(orient||+1):diff);};Date.prototype.moveToMonth=function(month,orient){var diff=(month-this.getMonth()+12*(orient||+1))%12;return this.addMonths((diff===0)?diff+=12*(orient||+1):diff);};Date.prototype.getDayOfYear=function(){return Math.floor((this-new Date(this.getFullYear(),0,1))/86400000);};Date.prototype.getWeekOfYear=function(firstDayOfWeek){var y=this.getFullYear(),m=this.getMonth(),d=this.getDate();var dow=firstDayOfWeek||Date.CultureInfo.firstDayOfWeek;var offset=7+1-new Date(y,0,1).getDay();if(offset==8){offset=1;}
var daynum=((Date.UTC(y,m,d,0,0,0)-Date.UTC(y,0,1,0,0,0))/86400000)+1;var w=Math.floor((daynum-offset+7)/7);if(w===dow){y--;var prevOffset=7+1-new Date(y,0,1).getDay();if(prevOffset==2||prevOffset==8){w=53;}else{w=52;}}
return w;};Date.prototype.isDST=function(){console.log('isDST');return this.toString().match(/(E|C|M|P)(S|D)T/)[2]=="D";};Date.prototype.getTimezone=function(){return Date.getTimezoneAbbreviation(this.getUTCOffset,this.isDST());};Date.prototype.setTimezoneOffset=function(s){var here=this.getTimezoneOffset(),there=Number(s)*-6/10;this.addMinutes(there-here);return this;};Date.prototype.setTimezone=function(s){return this.setTimezoneOffset(Date.getTimezoneOffset(s));};Date.prototype.getUTCOffset=function(){var n=this.getTimezoneOffset()*-10/6,r;if(n<0){r=(n-10000).toString();return r[0]+r.substr(2);}else{r=(n+10000).toString();return"+"+r.substr(1);}};Date.prototype.getDayName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedDayNames[this.getDay()]:Date.CultureInfo.dayNames[this.getDay()];};Date.prototype.getMonthName=function(abbrev){return abbrev?Date.CultureInfo.abbreviatedMonthNames[this.getMonth()]:Date.CultureInfo.monthNames[this.getMonth()];};Date.prototype._toString=Date.prototype.toString;Date.prototype.toString=function(format){var self=this;var p=function p(s){return(s.toString().length==1)?"0"+s:s;};return format?format.replace(/dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?/g,function(format){switch(format){case"hh":return p(self.getHours()<13?self.getHours():(self.getHours()-12));case"h":return self.getHours()<13?self.getHours():(self.getHours()-12);case"HH":return p(self.getHours());case"H":return self.getHours();case"mm":return p(self.getMinutes());case"m":return self.getMinutes();case"ss":return p(self.getSeconds());case"s":return self.getSeconds();case"yyyy":return self.getFullYear();case"yy":return self.getFullYear().toString().substring(2,4);case"dddd":return self.getDayName();case"ddd":return self.getDayName(true);case"dd":return p(self.getDate());case"d":return self.getDate().toString();case"MMMM":return self.getMonthName();case"MMM":return self.getMonthName(true);case"MM":return p((self.getMonth()+1));case"M":return self.getMonth()+1;case"t":return self.getHours()<12?Date.CultureInfo.amDesignator.substring(0,1):Date.CultureInfo.pmDesignator.substring(0,1);case"tt":return self.getHours()<12?Date.CultureInfo.amDesignator:Date.CultureInfo.pmDesignator;case"zzz":case"zz":case"z":return"";}}):this._toString();};
Date.now=function(){return new Date();};Date.today=function(){return Date.now().clearTime();};Date.prototype._orient=+1;Date.prototype.next=function(){this._orient=+1;return this;};Date.prototype.last=Date.prototype.prev=Date.prototype.previous=function(){this._orient=-1;return this;};Date.prototype._is=false;Date.prototype.is=function(){this._is=true;return this;};Number.prototype._dateElement="day";Number.prototype.fromNow=function(){var c={};c[this._dateElement]=this;return Date.now().add(c);};Number.prototype.ago=function(){var c={};c[this._dateElement]=this*-1;return Date.now().add(c);};(function(){var $D=Date.prototype,$N=Number.prototype;var dx=("sunday monday tuesday wednesday thursday friday saturday").split(/\s/),mx=("january february march april may june july august september october november december").split(/\s/),px=("Millisecond Second Minute Hour Day Week Month Year").split(/\s/),de;var df=function(n){return function(){if(this._is){this._is=false;return this.getDay()==n;}
return this.moveToDayOfWeek(n,this._orient);};};for(var i=0;i<dx.length;i++){$D[dx[i]]=$D[dx[i].substring(0,3)]=df(i);}
var mf=function(n){return function(){if(this._is){this._is=false;return this.getMonth()===n;}
return this.moveToMonth(n,this._orient);};};for(var j=0;j<mx.length;j++){$D[mx[j]]=$D[mx[j].substring(0,3)]=mf(j);}
var ef=function(j){return function(){if(j.substring(j.length-1)!="s"){j+="s";}
return this["add"+j](this._orient);};};var nf=function(n){return function(){this._dateElement=n;return this;};};for(var k=0;k<px.length;k++){de=px[k].toLowerCase();$D[de]=$D[de+"s"]=ef(px[k]);$N[de]=$N[de+"s"]=nf(de);}}());Date.prototype.toJSONString=function(){return this.toString("yyyy-MM-ddThh:mm:ssZ");};Date.prototype.toShortDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortDatePattern);};Date.prototype.toLongDateString=function(){return this.toString(Date.CultureInfo.formatPatterns.longDatePattern);};Date.prototype.toShortTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.shortTimePattern);};Date.prototype.toLongTimeString=function(){return this.toString(Date.CultureInfo.formatPatterns.longTimePattern);};Date.prototype.getOrdinal=function(){switch(this.getDate()){case 1:case 21:case 31:return"st";case 2:case 22:return"nd";case 3:case 23:return"rd";default:return"th";}};
(function(){Date.Parsing={Exception:function(s){this.message="Parse error at '"+s.substring(0,10)+" ...'";}};var $P=Date.Parsing;var _=$P.Operators={rtoken:function(r){return function(s){var mx=s.match(r);if(mx){return([mx[0],s.substring(mx[0].length)]);}else{throw new $P.Exception(s);}};},token:function(s){return function(s){return _.rtoken(new RegExp("^\s*"+s+"\s*"))(s);};},stoken:function(s){return _.rtoken(new RegExp("^"+s));},until:function(p){return function(s){var qx=[],rx=null;while(s.length){try{rx=p.call(this,s);}catch(e){qx.push(rx[0]);s=rx[1];continue;}
break;}
return[qx,s];};},many:function(p){return function(s){var rx=[],r=null;while(s.length){try{r=p.call(this,s);}catch(e){return[rx,s];}
rx.push(r[0]);s=r[1];}
return[rx,s];};},optional:function(p){return function(s){var r=null;try{r=p.call(this,s);}catch(e){return[null,s];}
return[r[0],r[1]];};},not:function(p){return function(s){try{p.call(this,s);}catch(e){return[null,s];}
throw new $P.Exception(s);};},ignore:function(p){return p?function(s){var r=null;r=p.call(this,s);return[null,r[1]];}:null;},product:function(){var px=arguments[0],qx=Array.prototype.slice.call(arguments,1),rx=[];for(var i=0;i<px.length;i++){rx.push(_.each(px[i],qx));}
return rx;},cache:function(rule){var cache={},r=null;return function(s){try{r=cache[s]=(cache[s]||rule.call(this,s));}catch(e){r=cache[s]=e;}
if(r instanceof $P.Exception){throw r;}else{return r;}};},any:function(){var px=arguments;return function(s){var r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){r=null;}
if(r){return r;}}
throw new $P.Exception(s);};},each:function(){var px=arguments;return function(s){var rx=[],r=null;for(var i=0;i<px.length;i++){if(px[i]==null){continue;}
try{r=(px[i].call(this,s));}catch(e){throw new $P.Exception(s);}
rx.push(r[0]);s=r[1];}
return[rx,s];};},all:function(){var px=arguments,_=_;return _.each(_.optional(px));},sequence:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;if(px.length==1){return px[0];}
return function(s){var r=null,q=null;var rx=[];for(var i=0;i<px.length;i++){try{r=px[i].call(this,s);}catch(e){break;}
rx.push(r[0]);try{q=d.call(this,r[1]);}catch(ex){q=null;break;}
s=q[1];}
if(!r){throw new $P.Exception(s);}
if(q){throw new $P.Exception(q[1]);}
if(c){try{r=c.call(this,r[1]);}catch(ey){throw new $P.Exception(r[1]);}}
return[rx,(r?r[1]:s)];};},between:function(d1,p,d2){d2=d2||d1;var _fn=_.each(_.ignore(d1),p,_.ignore(d2));return function(s){var rx=_fn.call(this,s);return[[rx[0][0],r[0][2]],rx[1]];};},list:function(p,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return(p instanceof Array?_.each(_.product(p.slice(0,-1),_.ignore(d)),p.slice(-1),_.ignore(c)):_.each(_.many(_.each(p,_.ignore(d))),px,_.ignore(c)));},set:function(px,d,c){d=d||_.rtoken(/^\s*/);c=c||null;return function(s){var r=null,p=null,q=null,rx=null,best=[[],s],last=false;for(var i=0;i<px.length;i++){q=null;p=null;r=null;last=(px.length==1);try{r=px[i].call(this,s);}catch(e){continue;}
rx=[[r[0]],r[1]];if(r[1].length>0&&!last){try{q=d.call(this,r[1]);}catch(ex){last=true;}}else{last=true;}
if(!last&&q[1].length===0){last=true;}
if(!last){var qx=[];for(var j=0;j<px.length;j++){if(i!=j){qx.push(px[j]);}}
p=_.set(qx,d).call(this,q[1]);if(p[0].length>0){rx[0]=rx[0].concat(p[0]);rx[1]=p[1];}}
if(rx[1].length<best[1].length){best=rx;}
if(best[1].length===0){break;}}
if(best[0].length===0){return best;}
if(c){try{q=c.call(this,best[1]);}catch(ey){throw new $P.Exception(best[1]);}
best[1]=q[1];}
return best;};},forward:function(gr,fname){return function(s){return gr[fname].call(this,s);};},replace:function(rule,repl){return function(s){var r=rule.call(this,s);return[repl,r[1]];};},process:function(rule,fn){return function(s){var r=rule.call(this,s);return[fn.call(this,r[0]),r[1]];};},min:function(min,rule){return function(s){var rx=rule.call(this,s);if(rx[0].length<min){throw new $P.Exception(s);}
return rx;};}};var _generator=function(op){return function(){var args=null,rx=[];if(arguments.length>1){args=Array.prototype.slice.call(arguments);}else if(arguments[0]instanceof Array){args=arguments[0];}
if(args){for(var i=0,px=args.shift();i<px.length;i++){args.unshift(px[i]);rx.push(op.apply(null,args));args.shift();return rx;}}else{return op.apply(null,arguments);}};};var gx="optional not ignore cache".split(/\s/);for(var i=0;i<gx.length;i++){_[gx[i]]=_generator(_[gx[i]]);}
var _vector=function(op){return function(){if(arguments[0]instanceof Array){return op.apply(null,arguments[0]);}else{return op.apply(null,arguments);}};};var vx="each any all".split(/\s/);for(var j=0;j<vx.length;j++){_[vx[j]]=_vector(_[vx[j]]);}}());(function(){var flattenAndCompact=function(ax){var rx=[];for(var i=0;i<ax.length;i++){if(ax[i]instanceof Array){rx=rx.concat(flattenAndCompact(ax[i]));}else{if(ax[i]){rx.push(ax[i]);}}}
return rx;};Date.Grammar={};Date.Translator={hour:function(s){return function(){this.hour=Number(s);};},minute:function(s){return function(){this.minute=Number(s);};},second:function(s){return function(){this.second=Number(s);};},meridian:function(s){return function(){this.meridian=s.slice(0,1).toLowerCase();};},timezone:function(s){return function(){var n=s.replace(/[^\d\+\-]/g,"");if(n.length){this.timezoneOffset=Number(n);}else{this.timezone=s.toLowerCase();}};},day:function(x){var s=x[0];return function(){this.day=Number(s.match(/\d+/)[0]);};},month:function(s){return function(){this.month=((s.length==3)?Date.getMonthNumberFromName(s):(Number(s)-1));};},year:function(s){return function(){var n=Number(s);this.year=((s.length>2)?n:(n+(((n+2000)<Date.CultureInfo.twoDigitYearMax)?2000:1900)));};},rday:function(s){return function(){switch(s){case"yesterday":this.days=-1;break;case"tomorrow":this.days=1;break;case"today":this.days=0;break;case"now":this.days=0;this.now=true;break;}};},finishExact:function(x){x=(x instanceof Array)?x:[x];var now=new Date();this.year=now.getFullYear();this.month=now.getMonth();this.day=1;this.hour=0;this.minute=0;this.second=0;for(var i=0;i<x.length;i++){if(x[i]){x[i].call(this);}}
this.hour=(this.meridian=="p"&&this.hour<13)?this.hour+12:this.hour;if(this.day>Date.getDaysInMonth(this.year,this.month)){throw new RangeError(this.day+" is not a valid value for days.");}
var r=new Date(this.year,this.month,this.day,this.hour,this.minute,this.second);if(this.timezone){r.set({timezone:this.timezone});}else if(this.timezoneOffset){r.set({timezoneOffset:this.timezoneOffset});}
return r;},finish:function(x){x=(x instanceof Array)?flattenAndCompact(x):[x];if(x.length===0){return null;}
for(var i=0;i<x.length;i++){if(typeof x[i]=="function"){x[i].call(this);}}
if(this.now){return new Date();}
var today=Date.today();var method=null;var expression=!!(this.days!=null||this.orient||this.operator);if(expression){var gap,mod,orient;orient=((this.orient=="past"||this.operator=="subtract")?-1:1);if(this.weekday){this.unit="day";gap=(Date.getDayNumberFromName(this.weekday)-today.getDay());mod=7;this.days=gap?((gap+(orient*mod))%mod):(orient*mod);}
if(this.month){this.unit="month";gap=(this.month-today.getMonth());mod=12;this.months=gap?((gap+(orient*mod))%mod):(orient*mod);this.month=null;}
if(!this.unit){this.unit="day";}
if(this[this.unit+"s"]==null||this.operator!=null){if(!this.value){this.value=1;}
if(this.unit=="week"){this.unit="day";this.value=this.value*7;}
this[this.unit+"s"]=this.value*orient;}
return today.add(this);}else{if(this.meridian&&this.hour){this.hour=(this.hour<13&&this.meridian=="p")?this.hour+12:this.hour;}
if(this.weekday&&!this.day){this.day=(today.addDays((Date.getDayNumberFromName(this.weekday)-today.getDay()))).getDate();}
if(this.month&&!this.day){this.day=1;}
return today.set(this);}}};var _=Date.Parsing.Operators,g=Date.Grammar,t=Date.Translator,_fn;g.datePartDelimiter=_.rtoken(/^([\s\-\.\,\/\x27]+)/);g.timePartDelimiter=_.stoken(":");g.whiteSpace=_.rtoken(/^\s*/);g.generalDelimiter=_.rtoken(/^(([\s\,]|at|on)+)/);var _C={};g.ctoken=function(keys){var fn=_C[keys];if(!fn){var c=Date.CultureInfo.regexPatterns;var kx=keys.split(/\s+/),px=[];for(var i=0;i<kx.length;i++){px.push(_.replace(_.rtoken(c[kx[i]]),kx[i]));}
fn=_C[keys]=_.any.apply(null,px);}
return fn;};g.ctoken2=function(key){return _.rtoken(Date.CultureInfo.regexPatterns[key]);};g.h=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2]|[1-9])/),t.hour));g.hh=_.cache(_.process(_.rtoken(/^(0[0-9]|1[0-2])/),t.hour));g.H=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3]|[0-9])/),t.hour));g.HH=_.cache(_.process(_.rtoken(/^([0-1][0-9]|2[0-3])/),t.hour));g.m=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.minute));g.mm=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.minute));g.s=_.cache(_.process(_.rtoken(/^([0-5][0-9]|[0-9])/),t.second));g.ss=_.cache(_.process(_.rtoken(/^[0-5][0-9]/),t.second));g.hms=_.cache(_.sequence([g.H,g.mm,g.ss],g.timePartDelimiter));g.t=_.cache(_.process(g.ctoken2("shortMeridian"),t.meridian));g.tt=_.cache(_.process(g.ctoken2("longMeridian"),t.meridian));g.z=_.cache(_.process(_.rtoken(/^(\+|\-)?\s*\d\d\d\d?/),t.timezone));g.zz=_.cache(_.process(_.rtoken(/^(\+|\-)\s*\d\d\d\d/),t.timezone));g.zzz=_.cache(_.process(g.ctoken2("timezone"),t.timezone));g.timeSuffix=_.each(_.ignore(g.whiteSpace),_.set([g.tt,g.zzz]));g.time=_.each(_.optional(_.ignore(_.stoken("T"))),g.hms,g.timeSuffix);g.d=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1]|\d)/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.dd=_.cache(_.process(_.each(_.rtoken(/^([0-2]\d|3[0-1])/),_.optional(g.ctoken2("ordinalSuffix"))),t.day));g.ddd=g.dddd=_.cache(_.process(g.ctoken("sun mon tue wed thu fri sat"),function(s){return function(){this.weekday=s;};}));g.M=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d|\d)/),t.month));g.MM=_.cache(_.process(_.rtoken(/^(1[0-2]|0\d)/),t.month));g.MMM=g.MMMM=_.cache(_.process(g.ctoken("jan feb mar apr may jun jul aug sep oct nov dec"),t.month));g.y=_.cache(_.process(_.rtoken(/^(\d\d?)/),t.year));g.yy=_.cache(_.process(_.rtoken(/^(\d\d)/),t.year));g.yyy=_.cache(_.process(_.rtoken(/^(\d\d?\d?\d?)/),t.year));g.yyyy=_.cache(_.process(_.rtoken(/^(\d\d\d\d)/),t.year));_fn=function(){return _.each(_.any.apply(null,arguments),_.not(g.ctoken2("timeContext")));};g.day=_fn(g.d,g.dd);g.month=_fn(g.M,g.MMM);g.year=_fn(g.yyyy,g.yy);g.orientation=_.process(g.ctoken("past future"),function(s){return function(){this.orient=s;};});g.operator=_.process(g.ctoken("add subtract"),function(s){return function(){this.operator=s;};});g.rday=_.process(g.ctoken("yesterday tomorrow today now"),t.rday);g.unit=_.process(g.ctoken("minute hour day week month year"),function(s){return function(){this.unit=s;};});g.value=_.process(_.rtoken(/^\d\d?(st|nd|rd|th)?/),function(s){return function(){this.value=s.replace(/\D/g,"");};});g.expression=_.set([g.rday,g.operator,g.value,g.unit,g.orientation,g.ddd,g.MMM]);_fn=function(){return _.set(arguments,g.datePartDelimiter);};g.mdy=_fn(g.ddd,g.month,g.day,g.year);g.ymd=_fn(g.ddd,g.year,g.month,g.day);g.dmy=_fn(g.ddd,g.day,g.month,g.year);g.date=function(s){return((g[Date.CultureInfo.dateElementOrder]||g.mdy).call(this,s));};g.format=_.process(_.many(_.any(_.process(_.rtoken(/^(dd?d?d?|MM?M?M?|yy?y?y?|hh?|HH?|mm?|ss?|tt?|zz?z?)/),function(fmt){if(g[fmt]){return g[fmt];}else{throw Date.Parsing.Exception(fmt);}}),_.process(_.rtoken(/^[^dMyhHmstz]+/),function(s){return _.ignore(_.stoken(s));}))),function(rules){return _.process(_.each.apply(null,rules),t.finishExact);});var _F={};var _get=function(f){return _F[f]=(_F[f]||g.format(f)[0]);};g.formats=function(fx){if(fx instanceof Array){var rx=[];for(var i=0;i<fx.length;i++){rx.push(_get(fx[i]));}
return _.any.apply(null,rx);}else{return _get(fx);}};g._formats=g.formats(["yyyy-MM-ddTHH:mm:ss","ddd, MMM dd, yyyy H:mm:ss tt","ddd MMM d yyyy HH:mm:ss zzz","d"]);g._start=_.process(_.set([g.date,g.time,g.expression],g.generalDelimiter,g.whiteSpace),t.finish);g.start=function(s){try{var r=g._formats.call({},s);if(r[1].length===0){return r;}}catch(e){}
return g._start.call({},s);};}());Date._parse=Date.parse;Date.parse=function(s){var r=null;if(!s){return null;}
try{r=Date.Grammar.start.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};Date.getParseFunction=function(fx){var fn=Date.Grammar.formats(fx);return function(s){var r=null;try{r=fn.call({},s);}catch(e){return null;}
return((r[1].length===0)?r[0]:null);};};Date.parseExact=function(s,fx){return Date.getParseFunction(fx)(s);};

/***
 * Contains core SlickGrid classes.
 * @module Core
 * @namespace Slick
 */

(function ($) {
  // register namespace
  $.extend(true, window, {
    "Slick": {
      "Event": Event,
      "EventData": EventData,
      "EventHandler": EventHandler,
      "Range": Range,
      "NonDataRow": NonDataItem,
      "Group": Group,
      "GroupTotals": GroupTotals,
      "EditorLock": EditorLock,

      /***
       * A global singleton editor lock.
       * @class GlobalEditorLock
       * @static
       * @constructor
       */
      "GlobalEditorLock": new EditorLock()
    }
  });

  /***
   * An event object for passing data to event handlers and letting them control propagation.
   * <p>This is pretty much identical to how W3C and jQuery implement events.</p>
   * @class EventData
   * @constructor
   */
  function EventData() {
    var isPropagationStopped = false;
    var isImmediatePropagationStopped = false;

    /***
     * Stops event from propagating up the DOM tree.
     * @method stopPropagation
     */
    this.stopPropagation = function () {
      isPropagationStopped = true;
    };

    /***
     * Returns whether stopPropagation was called on this event object.
     * @method isPropagationStopped
     * @return {Boolean}
     */
    this.isPropagationStopped = function () {
      return isPropagationStopped;
    };

    /***
     * Prevents the rest of the handlers from being executed.
     * @method stopImmediatePropagation
     */
    this.stopImmediatePropagation = function () {
      isImmediatePropagationStopped = true;
    };

    /***
     * Returns whether stopImmediatePropagation was called on this event object.\
     * @method isImmediatePropagationStopped
     * @return {Boolean}
     */
    this.isImmediatePropagationStopped = function () {
      return isImmediatePropagationStopped;
    }
  }

  /***
   * A simple publisher-subscriber implementation.
   * @class Event
   * @constructor
   */
  function Event() {
    var handlers = [];

    /***
     * Adds an event handler to be called when the event is fired.
     * <p>Event handler will receive two arguments - an <code>EventData</code> and the <code>data</code>
     * object the event was fired with.<p>
     * @method subscribe
     * @param fn {Function} Event handler.
     */
    this.subscribe = function (fn) {
      handlers.push(fn);
    };

    /***
     * Removes an event handler added with <code>subscribe(fn)</code>.
     * @method unsubscribe
     * @param fn {Function} Event handler to be removed.
     */
    this.unsubscribe = function (fn) {
      for (var i = handlers.length - 1; i >= 0; i--) {
        if (handlers[i] === fn) {
          handlers.splice(i, 1);
        }
      }
    };

    /***
     * Fires an event notifying all subscribers.
     * @method notify
     * @param args {Object} Additional data object to be passed to all handlers.
     * @param e {EventData}
     *      Optional.
     *      An <code>EventData</code> object to be passed to all handlers.
     *      For DOM events, an existing W3C/jQuery event object can be passed in.
     * @param scope {Object}
     *      Optional.
     *      The scope ("this") within which the handler will be executed.
     *      If not specified, the scope will be set to the <code>Event</code> instance.
     */
    this.notify = function (args, e, scope) {
      e = e || new EventData();
      scope = scope || this;

      var returnValue;
      for (var i = 0; i < handlers.length && !(e.isPropagationStopped() || e.isImmediatePropagationStopped()); i++) {
        returnValue = handlers[i].call(scope, e, args);
      }

      return returnValue;
    };
  }

  function EventHandler() {
    var handlers = [];

    this.subscribe = function (event, handler) {
      handlers.push({
        event: event,
        handler: handler
      });
      event.subscribe(handler);
    };

    this.unsubscribe = function (event, handler) {
      var i = handlers.length;
      while (i--) {
        if (handlers[i].event === event &&
            handlers[i].handler === handler) {
          handlers.splice(i, 1);
          event.unsubscribe(handler);
          return;
        }
      }
    };

    this.unsubscribeAll = function () {
      var i = handlers.length;
      while (i--) {
        handlers[i].event.unsubscribe(handlers[i].handler);
      }
      handlers = [];
    }
  }

  /***
   * A structure containing a range of cells.
   * @class Range
   * @constructor
   * @param fromRow {Integer} Starting row.
   * @param fromCell {Integer} Starting cell.
   * @param toRow {Integer} Optional. Ending row. Defaults to <code>fromRow</code>.
   * @param toCell {Integer} Optional. Ending cell. Defaults to <code>fromCell</code>.
   */
  function Range(fromRow, fromCell, toRow, toCell) {
    if (toRow === undefined && toCell === undefined) {
      toRow = fromRow;
      toCell = fromCell;
    }

    /***
     * @property fromRow
     * @type {Integer}
     */
    this.fromRow = Math.min(fromRow, toRow);

    /***
     * @property fromCell
     * @type {Integer}
     */
    this.fromCell = Math.min(fromCell, toCell);

    /***
     * @property toRow
     * @type {Integer}
     */
    this.toRow = Math.max(fromRow, toRow);

    /***
     * @property toCell
     * @type {Integer}
     */
    this.toCell = Math.max(fromCell, toCell);

    /***
     * Returns whether a range represents a single row.
     * @method isSingleRow
     * @return {Boolean}
     */
    this.isSingleRow = function () {
      return this.fromRow == this.toRow;
    };

    /***
     * Returns whether a range represents a single cell.
     * @method isSingleCell
     * @return {Boolean}
     */
    this.isSingleCell = function () {
      return this.fromRow == this.toRow && this.fromCell == this.toCell;
    };

    /***
     * Returns whether a range contains a given cell.
     * @method contains
     * @param row {Integer}
     * @param cell {Integer}
     * @return {Boolean}
     */
    this.contains = function (row, cell) {
      return row >= this.fromRow && row <= this.toRow &&
          cell >= this.fromCell && cell <= this.toCell;
    };

    /***
     * Returns a readable representation of a range.
     * @method toString
     * @return {String}
     */
    this.toString = function () {
      if (this.isSingleCell()) {
        return "(" + this.fromRow + ":" + this.fromCell + ")";
      }
      else {
        return "(" + this.fromRow + ":" + this.fromCell + " - " + this.toRow + ":" + this.toCell + ")";
      }
    }
  }


  /***
   * A base class that all special / non-data rows (like Group and GroupTotals) derive from.
   * @class NonDataItem
   * @constructor
   */
  function NonDataItem() {
    this.__nonDataRow = true;
  }


  /***
   * Information about a group of rows.
   * @class Group
   * @extends Slick.NonDataItem
   * @constructor
   */
  function Group() {
    this.__group = true;
    this.__updated = false;

    /***
     * Number of rows in the group.
     * @property count
     * @type {Integer}
     */
    this.count = 0;

    /***
     * Grouping value.
     * @property value
     * @type {Object}
     */
    this.value = null;

    /***
     * Formatted display value of the group.
     * @property title
     * @type {String}
     */
    this.title = null;

    /***
     * Whether a group is collapsed.
     * @property collapsed
     * @type {Boolean}
     */
    this.collapsed = false;

    /***
     * GroupTotals, if any.
     * @property totals
     * @type {GroupTotals}
     */
    this.totals = null;
  }

  Group.prototype = new NonDataItem();

  /***
   * Compares two Group instances.
   * @method equals
   * @return {Boolean}
   * @param group {Group} Group instance to compare to.
   */
  Group.prototype.equals = function (group) {
    return this.value === group.value &&
        this.count === group.count &&
        this.collapsed === group.collapsed;
  };

  /***
   * Information about group totals.
   * An instance of GroupTotals will be created for each totals row and passed to the aggregators
   * so that they can store arbitrary data in it.  That data can later be accessed by group totals
   * formatters during the display.
   * @class GroupTotals
   * @extends Slick.NonDataItem
   * @constructor
   */
  function GroupTotals() {
    this.__groupTotals = true;

    /***
     * Parent Group.
     * @param group
     * @type {Group}
     */
    this.group = null;
  }

  GroupTotals.prototype = new NonDataItem();

  /***
   * A locking helper to track the active edit controller and ensure that only a single controller
   * can be active at a time.  This prevents a whole class of state and validation synchronization
   * issues.  An edit controller (such as SlickGrid) can query if an active edit is in progress
   * and attempt a commit or cancel before proceeding.
   * @class EditorLock
   * @constructor
   */
  function EditorLock() {
    var activeEditController = null;

    /***
     * Returns true if a specified edit controller is active (has the edit lock).
     * If the parameter is not specified, returns true if any edit controller is active.
     * @method isActive
     * @param editController {EditController}
     * @return {Boolean}
     */
    this.isActive = function (editController) {
      return (editController ? activeEditController === editController : activeEditController !== null);
    };

    /***
     * Sets the specified edit controller as the active edit controller (acquire edit lock).
     * If another edit controller is already active, and exception will be thrown.
     * @method activate
     * @param editController {EditController} edit controller acquiring the lock
     */
    this.activate = function (editController) {
      if (editController === activeEditController) { // already activated?
        return;
      }
      if (activeEditController !== null) {
        throw "SlickGrid.EditorLock.activate: an editController is still active, can't activate another editController";
      }
      if (!editController.commitCurrentEdit) {
        throw "SlickGrid.EditorLock.activate: editController must implement .commitCurrentEdit()";
      }
      if (!editController.cancelCurrentEdit) {
        throw "SlickGrid.EditorLock.activate: editController must implement .cancelCurrentEdit()";
      }
      activeEditController = editController;
    };

    /***
     * Unsets the specified edit controller as the active edit controller (release edit lock).
     * If the specified edit controller is not the active one, an exception will be thrown.
     * @method deactivate
     * @param editController {EditController} edit controller releasing the lock
     */
    this.deactivate = function (editController) {
      if (activeEditController !== editController) {
        throw "SlickGrid.EditorLock.deactivate: specified editController is not the currently active one";
      }
      activeEditController = null;
    };

    /***
     * Attempts to commit the current edit by calling "commitCurrentEdit" method on the active edit
     * controller and returns whether the commit attempt was successful (commit may fail due to validation
     * errors, etc.).  Edit controller's "commitCurrentEdit" must return true if the commit has succeeded
     * and false otherwise.  If no edit controller is active, returns true.
     * @method commitCurrentEdit
     * @return {Boolean}
     */
    this.commitCurrentEdit = function () {
      return (activeEditController ? activeEditController.commitCurrentEdit() : true);
    };

    /***
     * Attempts to cancel the current edit by calling "cancelCurrentEdit" method on the active edit
     * controller and returns whether the edit was successfully cancelled.  If no edit controller is
     * active, returns true.
     * @method cancelCurrentEdit
     * @return {Boolean}
     */
    this.cancelCurrentEdit = function cancelCurrentEdit() {
      return (activeEditController ? activeEditController.cancelCurrentEdit() : true);
    };
  }
})(jQuery);

/**
 * @license
 * (c) 2009-2012 Michael Leibman
 * michael{dot}leibman{at}gmail{dot}com
 * http://github.com/mleibman/slickgrid
 *
 * Distributed under MIT license.
 * All rights reserved.
 *
 * SlickGrid v2.0
 *
 * NOTES:
 *     Cell/row DOM manipulations are done directly bypassing jQuery's DOM manipulation methods.
 *     This increases the speed dramatically, but can only be done safely because there are no event handlers
 *     or data associated with any cell/row DOM nodes.  Cell editors must make sure they implement .destroy()
 *     and do proper cleanup.
 */

// make sure required JavaScript modules are loaded
if (typeof jQuery === "undefined") {
  throw "SlickGrid requires jquery module to be loaded";
}
if (!jQuery.fn.drag) {
  throw "SlickGrid requires jquery.event.drag module to be loaded";
}
if (typeof Slick === "undefined") {
  throw "slick.core.js not loaded";
}


(function ($) {
  // Slick.Grid
  $.extend(true, window, {
    Slick: {
      Grid: SlickGrid
    }
  });

  // shared across all grids on the page
  var scrollbarDimensions;
  var maxSupportedCssHeight;  // browser's breaking point

  //////////////////////////////////////////////////////////////////////////////////////////////
  // SlickGrid class implementation (available as Slick.Grid)

  /**
   * Creates a new instance of the grid.
   * @class SlickGrid
   * @constructor
   * @param {Node}              container   Container node to create the grid in.
   * @param {Array,Object}      data        An array of objects for databinding.
   * @param {Array}             columns     An array of column definitions.
   * @param {Object}            options     Grid options.
   **/
  function SlickGrid(container, data, columns, options) {
    // settings
    var defaults = {
      explicitInitialization: false,
      rowHeight: 25,
      defaultColumnWidth: 80,
      enableAddRow: false,
      leaveSpaceForNewRows: false,
      editable: false,
      autoEdit: true,
      enableCellNavigation: true,
      enableColumnReorder: true,
      asyncEditorLoading: false,
      asyncEditorLoadDelay: 100,
      forceFitColumns: false,
      enableAsyncPostRender: false,
      asyncPostRenderDelay: 60,
      autoHeight: false,
      editorLock: Slick.GlobalEditorLock,
      showHeaderRow: false,
      headerRowHeight: 25,
      showTopPanel: false,
      topPanelHeight: 25,
      formatterFactory: null,
      editorFactory: null,
      cellFlashingCssClass: "flashing",
      selectedCellCssClass: "selected",
      multiSelect: true,
      enableTextSelectionOnCells: false,
      dataItemColumnValueExtractor: null,
      fullWidthRows: false,
      multiColumnSort: false,
      defaultFormatter: defaultFormatter
    };

    var columnDefaults = {
      name: "",
      resizable: true,
      sortable: false,
      minWidth: 30,
      rerenderOnResize: false,
      headerCssClass: null
    };

    // scroller
    var th;   // virtual height
    var h;    // real scrollable height
    var ph;   // page height
    var n;    // number of pages
    var cj;   // "jumpiness" coefficient

    var page = 0;       // current page
    var offset = 0;     // current page offset
    var scrollDir = 1;

    // private
    var initialized = false;
    var $container;
    var uid = "slickgrid_" + Math.round(1000000 * Math.random());
    var self = this;
    var $focusSink;
    var $headerScroller;
    var $headers;
    var $headerRow, $headerRowScroller;
    var $topPanelScroller;
    var $topPanel;
    var $viewport;
    var $canvas;
    var $style;
    var stylesheet, columnCssRulesL, columnCssRulesR;
    var viewportH, viewportW;
    var canvasWidth;
    var viewportHasHScroll, viewportHasVScroll;
    var headerColumnWidthDiff = 0, headerColumnHeightDiff = 0, // border+padding
        cellWidthDiff = 0, cellHeightDiff = 0;
    var absoluteColumnMinWidth;
    var numberOfRows = 0;

    var activePosX;
    var activeRow, activeCell;
    var activeCellNode = null;
    var currentEditor = null;
    var serializedEditorValue;
    var editController;

    var rowsCache = {};
    var renderedRows = 0;
    var numVisibleRows;
    var prevScrollTop = 0;
    var scrollTop = 0;
    var lastRenderedScrollTop = 0;
    var prevScrollLeft = 0;
    var avgRowRenderTime = 10;

    var selectionModel;
    var selectedRows = [];

    var plugins = [];
    var cellCssClasses = {};

    var columnsById = {};
    var sortColumns = [];


    // async call handles
    var h_editorLoader = null;
    var h_render = null;
    var h_postrender = null;
    var postProcessedRows = {};
    var postProcessToRow = null;
    var postProcessFromRow = null;

    // perf counters
    var counter_rows_rendered = 0;
    var counter_rows_removed = 0;


    //////////////////////////////////////////////////////////////////////////////////////////////
    // Initialization

    function init() {
      $container = $(container);
      if ($container.length < 1) {
        throw new Error("SlickGrid requires a valid container, " + container + " does not exist in the DOM.");
      }

      // calculate these only once and share between grid instances
      maxSupportedCssHeight = maxSupportedCssHeight || getMaxSupportedCssHeight();
      scrollbarDimensions = scrollbarDimensions || measureScrollbar();

      options = $.extend({}, defaults, options);
      columnDefaults.width = options.defaultColumnWidth;

      // validate loaded JavaScript modules against requested options
      if (options.enableColumnReorder && !$.fn.sortable) {
        throw new Error("SlickGrid's 'enableColumnReorder = true' option requires jquery-ui.sortable module to be loaded");
      }

      editController = {
        "commitCurrentEdit": commitCurrentEdit,
        "cancelCurrentEdit": cancelCurrentEdit
      };

      $container
          .empty()
          .css("overflow", "hidden")
          .css("outline", 0)
          .addClass(uid)
          .addClass("ui-widget");

      // set up a positioning container if needed
      if (!/relative|absolute|fixed/.test($container.css("position"))) {
        $container.css("position", "relative");
      }

      $focusSink = $("<div tabIndex='0' hideFocus style='position:fixed;width:0;height:0;top:0;left:0;outline:0;'></div>").appendTo($container);

      $headerScroller = $("<div class='slick-header ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container);
      $headers = $("<div class='slick-header-columns' style='width:10000px; left:-1000px' />").appendTo($headerScroller);

      $headerRowScroller = $("<div class='slick-headerrow ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container);
      $headerRow = $("<div class='slick-headerrow-columns' />").appendTo($headerRowScroller);

      $topPanelScroller = $("<div class='slick-top-panel-scroller ui-state-default' style='overflow:hidden;position:relative;' />").appendTo($container);
      $topPanel = $("<div class='slick-top-panel' style='width:10000px' />").appendTo($topPanelScroller);

      if (!options.showTopPanel) {
        $topPanelScroller.hide();
      }

      if (!options.showHeaderRow) {
        $headerRowScroller.hide();
      }

      $viewport = $("<div class='slick-viewport' style='width:100%;overflow:auto;outline:0;position:relative;;'>").appendTo($container);
      $viewport.css("overflow-y", options.autoHeight ? "hidden" : "auto");

      $canvas = $("<div class='grid-canvas' />").appendTo($viewport);

      if (!options.explicitInitialization) {
        finishInitialization();
      }
    }

    function finishInitialization() {
      if (!initialized) {
        initialized = true;

        viewportW = parseFloat($.css($container[0], "width", true));

        // header columns and cells may have different padding/border skewing width calculations (box-sizing, hello?)
        // calculate the diff so we can set consistent sizes
        measureCellPaddingAndBorder();

        // for usability reasons, all text selection in SlickGrid is disabled
        // with the exception of input and textarea elements (selection must
        // be enabled there so that editors work as expected); note that
        // selection in grid cells (grid body) is already unavailable in
        // all browsers except IE
        disableSelection($headers); // disable all text selection in header (including input and textarea)

        if (!options.enableTextSelectionOnCells) {
          // disable text selection in grid cells except in input and textarea elements
          // (this is IE-specific, because selectstart event will only fire in IE)
          $viewport.bind("selectstart.ui", function (event) {
            return $(event.target).is("input,textarea");
          });
        }

        createColumnHeaders();
        setupColumnSort();
        createCssRules();
        resizeCanvas();
        bindAncestorScrollEvents();

        $container
            .bind("resize.slickgrid", resizeCanvas);
        $viewport
            .bind("scroll.slickgrid", handleScroll);
        $headerScroller
            .bind("contextmenu.slickgrid", handleHeaderContextMenu)
            .bind("click.slickgrid", handleHeaderClick);
        $focusSink
            .bind("keydown.slickgrid", handleKeyDown);
        $canvas
            .bind("keydown.slickgrid", handleKeyDown)
            .bind("click.slickgrid", handleClick)
            .bind("dblclick.slickgrid", handleDblClick)
            .bind("contextmenu.slickgrid", handleContextMenu)
            .bind("draginit", handleDragInit)
            .bind("dragstart", handleDragStart)
            .bind("drag", handleDrag)
            .bind("dragend", handleDragEnd)
            .delegate(".slick-cell", "mouseenter", handleMouseEnter)
            .delegate(".slick-cell", "mouseleave", handleMouseLeave);
      }
    }

    function registerPlugin(plugin) {
      plugins.unshift(plugin);
      plugin.init(self);
    }

    function unregisterPlugin(plugin) {
      for (var i = plugins.length; i >= 0; i--) {
        if (plugins[i] === plugin) {
          if (plugins[i].destroy) {
            plugins[i].destroy();
          }
          plugins.splice(i, 1);
          break;
        }
      }
    }

    function setSelectionModel(model) {
      if (selectionModel) {
        selectionModel.onSelectedRangesChanged.unsubscribe(handleSelectedRangesChanged);
        if (selectionModel.destroy) {
          selectionModel.destroy();
        }
      }

      selectionModel = model;
      if (selectionModel) {
        selectionModel.init(self);
        selectionModel.onSelectedRangesChanged.subscribe(handleSelectedRangesChanged);
      }
    }

    function getSelectionModel() {
      return selectionModel;
    }

    function getCanvasNode() {
      return $canvas[0];
    }

    function measureScrollbar() {
      var $c = $("<div style='position:absolute; top:-10000px; left:-10000px; width:100px; height:100px; overflow:scroll;'></div>").appendTo("body");
      var dim = {
        width: $c.width() - $c[0].clientWidth,
        height: $c.height() - $c[0].clientHeight
      };
      $c.remove();
      return dim;
    }

    function getCanvasWidth() {
      var availableWidth = viewportHasVScroll ? viewportW - scrollbarDimensions.width : viewportW;
      var rowWidth = 0;
      var i = columns.length;
      while (i--) {
        rowWidth += (columns[i].width || columnDefaults.width);
      }
      return options.fullWidthRows ? Math.max(rowWidth, availableWidth) : rowWidth;
    }

    function updateCanvasWidth(forceColumnWidthsUpdate) {
      var oldCanvasWidth = canvasWidth;
      canvasWidth = getCanvasWidth();

      if (canvasWidth != oldCanvasWidth) {
        $canvas.width(canvasWidth);
        $headerRow.width(canvasWidth);
        viewportHasHScroll = (canvasWidth > viewportW - scrollbarDimensions.width);
      }

      if (canvasWidth != oldCanvasWidth || forceColumnWidthsUpdate) {
        applyColumnWidths();
      }
    }

    function disableSelection($target) {
      if ($target && $target.jquery) {
        $target
            .attr("unselectable", "on")
            .css("MozUserSelect", "none")
            .bind("selectstart.ui", function () {
              return false;
            }); // from jquery:ui.core.js 1.7.2
      }
    }

    function getMaxSupportedCssHeight() {
      var increment = 1000000;
      var supportedHeight = increment;
      // FF reports the height back but still renders blank after ~6M px
      var testUpTo = ($.browser.mozilla) ? 5000000 : 1000000000;
      var div = $("<div style='display:none' />").appendTo(document.body);

      while (supportedHeight <= testUpTo) {
        div.css("height", supportedHeight + increment);
        if (div.height() !== supportedHeight + increment) {
          break;
        } else {
          supportedHeight += increment;
        }
      }

      div.remove();
      return supportedHeight;
    }

    // TODO:  this is static.  need to handle page mutation.
    function bindAncestorScrollEvents() {
      var elem = $canvas[0];
      while ((elem = elem.parentNode) != document.body && elem != null) {
        // bind to scroll containers only
        if (elem == $viewport[0] || elem.scrollWidth != elem.clientWidth || elem.scrollHeight != elem.clientHeight) {
          $(elem).bind("scroll.slickgrid", handleActiveCellPositionChange);
        }
      }
    }

    function unbindAncestorScrollEvents() {
      $canvas.parents().unbind("scroll.slickgrid");
    }

    function updateColumnHeader(columnId, title, toolTip) {
      if (!initialized) { return; }
      var idx = getColumnIndex(columnId);
      var $header = $headers.children().eq(idx);
      if ($header) {
        columns[idx].name = title;
        columns[idx].toolTip = toolTip;
        $header
            .attr("title", toolTip || title || "")
            .children().eq(0).html(title);
      }
    }

    function getHeaderRow() {
      return $headerRow[0];
    }

    function getHeaderRowColumn(columnId) {
      var idx = getColumnIndex(columnId);
      var $header = $headerRow.children().eq(idx);
      return $header && $header[0];
    }

    function createColumnHeaders() {
      function hoverBegin() {
        $(this).addClass("ui-state-hover");
      }

      function hoverEnd() {
        $(this).removeClass("ui-state-hover");
      }

      $headers.empty();
      $headerRow.empty();
      columnsById = {};

      for (var i = 0; i < columns.length; i++) {
        var m = columns[i] = $.extend({}, columnDefaults, columns[i]);
        columnsById[m.id] = i;

        var header = $("<div class='ui-state-default slick-header-column' id='" + uid + m.id + "' />")
            .html("<span class='slick-column-name'>" + m.name + "</span>")
            .width(m.width - headerColumnWidthDiff)
            .attr("title", m.toolTip || m.name || "")
            .data("fieldId", m.id)
            .addClass(m.headerCssClass || "")
            .appendTo($headers);

        if (options.enableColumnReorder || m.sortable) {
          header.hover(hoverBegin, hoverEnd);
        }

        if (m.sortable) {
          header.append("<span class='slick-sort-indicator' />");
        }

        if (options.showHeaderRow) {
          $("<div class='ui-state-default slick-headerrow-column l" + i + " r" + i + "'></div>")
              .appendTo($headerRow);
        }
      }

      if (options.showHeaderRow) {
        // add a spacer to let the container scroll beyond the header row columns width
        $("<div style='display:block;height:1px;width:10000px;position:absolute;top:0;left:0;'></div>")
            .appendTo($headerRowScroller);
      }

      setSortColumns(sortColumns);
      setupColumnResize();
      if (options.enableColumnReorder) {
        setupColumnReorder();
      }
    }

    function setupColumnSort() {
      $headers.click(function (e) {
        // temporary workaround for a bug in jQuery 1.7.1 (http://bugs.jquery.com/ticket/11328)
        e.metaKey = e.metaKey || e.ctrlKey;

        if ($(e.target).hasClass("slick-resizable-handle")) {
          return;
        }

        var $col = $(e.target).closest(".slick-header-column");
        if (!$col.length) {
          return;
        }

        var column = columns[getColumnIndex($col.data("fieldId"))];
        if (column.sortable) {
          if (!getEditorLock().commitCurrentEdit()) {
            return;
          }

          var sortOpts = null;
          var i = 0;
          for (; i < sortColumns.length; i++) {
            if (sortColumns[i].columnId == column.id) {
              sortOpts = sortColumns[i];
              sortOpts.sortAsc = !sortOpts.sortAsc;
              break;
            }
          }

          if (e.metaKey && options.multiColumnSort) {
            if (sortOpts) {
              sortColumns.splice(i, 1);
            }
          }
          else {
            if ((!e.shiftKey && !e.metaKey) || !options.multiColumnSort) {
              sortColumns = [];
            }

            if (!sortOpts) {
              sortOpts = { columnId: column.id, sortAsc: true };
              sortColumns.push(sortOpts);
            } else if (sortColumns.length == 0) {
              sortColumns.push(sortOpts);
            }
          }

          setSortColumns(sortColumns);

          if (!options.multiColumnSort) {
            trigger(self.onSort, {
              multiColumnSort: false,
              sortCol: column,
              sortAsc: sortOpts.sortAsc}, e);
          } else {
            trigger(self.onSort, {
              multiColumnSort: true,
              sortCols: $.map(sortColumns, function(col) {
                return {sortCol: columns[getColumnIndex(col.columnId)], sortAsc: col.sortAsc };
              })}, e);
          }
        }
      });
    }

    function setupColumnReorder() {
      $headers.sortable({
        containment: "parent",
        axis: "x",
        cursor: "default",
        tolerance: "intersection",
        helper: "clone",
        placeholder: "slick-sortable-placeholder ui-state-default slick-header-column",
        forcePlaceholderSize: true,
        start: function (e, ui) {
          $(ui.helper).addClass("slick-header-column-active");
        },
        beforeStop: function (e, ui) {
          $(ui.helper).removeClass("slick-header-column-active");
        },
        stop: function (e) {
          if (!getEditorLock().commitCurrentEdit()) {
            $(this).sortable("cancel");
            return;
          }

          var reorderedIds = $headers.sortable("toArray");
          var reorderedColumns = [];
          for (var i = 0; i < reorderedIds.length; i++) {
            reorderedColumns.push(columns[getColumnIndex(reorderedIds[i].replace(uid, ""))]);
          }
          setColumns(reorderedColumns);

          trigger(self.onColumnsReordered, {});
          e.stopPropagation();
          setupColumnResize();
        }
      });
    }

    function setupColumnResize() {
      var $col, j, c, pageX, columnElements, minPageX, maxPageX, firstResizable, lastResizable;
      columnElements = $headers.children();
      columnElements.find(".slick-resizable-handle").remove();
      columnElements.each(function (i, e) {
        if (columns[i].resizable) {
          if (firstResizable === undefined) {
            firstResizable = i;
          }
          lastResizable = i;
        }
      });
      if (firstResizable === undefined) {
        return;
      }
      columnElements.each(function (i, e) {
        if (i < firstResizable || (options.forceFitColumns && i >= lastResizable)) {
          return;
        }
        $col = $(e);
        $("<div class='slick-resizable-handle' />")
            .appendTo(e)
            .bind("dragstart", function (e, dd) {
              if (!getEditorLock().commitCurrentEdit()) {
                return false;
              }
              pageX = e.pageX;
              $(this).parent().addClass("slick-header-column-active");
              var shrinkLeewayOnRight = null, stretchLeewayOnRight = null;
              // lock each column's width option to current width
              columnElements.each(function (i, e) {
                columns[i].previousWidth = $(e).outerWidth();
              });
              if (options.forceFitColumns) {
                shrinkLeewayOnRight = 0;
                stretchLeewayOnRight = 0;
                // colums on right affect maxPageX/minPageX
                for (j = i + 1; j < columnElements.length; j++) {
                  c = columns[j];
                  if (c.resizable) {
                    if (stretchLeewayOnRight !== null) {
                      if (c.maxWidth) {
                        stretchLeewayOnRight += c.maxWidth - c.previousWidth;
                      } else {
                        stretchLeewayOnRight = null;
                      }
                    }
                    shrinkLeewayOnRight += c.previousWidth - Math.max(c.minWidth || 0, absoluteColumnMinWidth);
                  }
                }
              }
              var shrinkLeewayOnLeft = 0, stretchLeewayOnLeft = 0;
              for (j = 0; j <= i; j++) {
                // columns on left only affect minPageX
                c = columns[j];
                if (c.resizable) {
                  if (stretchLeewayOnLeft !== null) {
                    if (c.maxWidth) {
                      stretchLeewayOnLeft += c.maxWidth - c.previousWidth;
                    } else {
                      stretchLeewayOnLeft = null;
                    }
                  }
                  shrinkLeewayOnLeft += c.previousWidth - Math.max(c.minWidth || 0, absoluteColumnMinWidth);
                }
              }
              if (shrinkLeewayOnRight === null) {
                shrinkLeewayOnRight = 100000;
              }
              if (shrinkLeewayOnLeft === null) {
                shrinkLeewayOnLeft = 100000;
              }
              if (stretchLeewayOnRight === null) {
                stretchLeewayOnRight = 100000;
              }
              if (stretchLeewayOnLeft === null) {
                stretchLeewayOnLeft = 100000;
              }
              maxPageX = pageX + Math.min(shrinkLeewayOnRight, stretchLeewayOnLeft);
              minPageX = pageX - Math.min(shrinkLeewayOnLeft, stretchLeewayOnRight);
            })
            .bind("drag", function (e, dd) {
              var actualMinWidth, d = Math.min(maxPageX, Math.max(minPageX, e.pageX)) - pageX, x;
              if (d < 0) { // shrink column
                x = d;
                for (j = i; j >= 0; j--) {
                  c = columns[j];
                  if (c.resizable) {
                    actualMinWidth = Math.max(c.minWidth || 0, absoluteColumnMinWidth);
                    if (x && c.previousWidth + x < actualMinWidth) {
                      x += c.previousWidth - actualMinWidth;
                      c.width = actualMinWidth;
                    } else {
                      c.width = c.previousWidth + x;
                      x = 0;
                    }
                  }
                }

                if (options.forceFitColumns) {
                  x = -d;
                  for (j = i + 1; j < columnElements.length; j++) {
                    c = columns[j];
                    if (c.resizable) {
                      if (x && c.maxWidth && (c.maxWidth - c.previousWidth < x)) {
                        x -= c.maxWidth - c.previousWidth;
                        c.width = c.maxWidth;
                      } else {
                        c.width = c.previousWidth + x;
                        x = 0;
                      }
                    }
                  }
                }
              } else { // stretch column
                x = d;
                for (j = i; j >= 0; j--) {
                  c = columns[j];
                  if (c.resizable) {
                    if (x && c.maxWidth && (c.maxWidth - c.previousWidth < x)) {
                      x -= c.maxWidth - c.previousWidth;
                      c.width = c.maxWidth;
                    } else {
                      c.width = c.previousWidth + x;
                      x = 0;
                    }
                  }
                }

                if (options.forceFitColumns) {
                  x = -d;
                  for (j = i + 1; j < columnElements.length; j++) {
                    c = columns[j];
                    if (c.resizable) {
                      actualMinWidth = Math.max(c.minWidth || 0, absoluteColumnMinWidth);
                      if (x && c.previousWidth + x < actualMinWidth) {
                        x += c.previousWidth - actualMinWidth;
                        c.width = actualMinWidth;
                      } else {
                        c.width = c.previousWidth + x;
                        x = 0;
                      }
                    }
                  }
                }
              }
              applyColumnHeaderWidths();
              if (options.syncColumnCellResize) {
                applyColumnWidths();
              }
            })
            .bind("dragend", function (e, dd) {
              var newWidth;
              $(this).parent().removeClass("slick-header-column-active");
              for (j = 0; j < columnElements.length; j++) {
                c = columns[j];
                newWidth = $(columnElements[j]).outerWidth();

                if (c.previousWidth !== newWidth && c.rerenderOnResize) {
                  invalidateAllRows();
                }
              }
              updateCanvasWidth(true);
              render();
              trigger(self.onColumnsResized, {});
            });
      });
    }

    function getVBoxDelta($el) {
      var p = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"];
      var delta = 0;
      $.each(p, function (n, val) {
        delta += parseFloat($el.css(val)) || 0;
      });
      return delta;
    }

    function measureCellPaddingAndBorder() {
      var el;
      var h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"];
      var v = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"];

      el = $("<div class='ui-state-default slick-header-column' style='visibility:hidden'>-</div>").appendTo($headers);
      headerColumnWidthDiff = headerColumnHeightDiff = 0;
      $.each(h, function (n, val) {
        headerColumnWidthDiff += parseFloat(el.css(val)) || 0;
      });
      $.each(v, function (n, val) {
        headerColumnHeightDiff += parseFloat(el.css(val)) || 0;
      });
      el.remove();

      var r = $("<div class='slick-row' />").appendTo($canvas);
      el = $("<div class='slick-cell' id='' style='visibility:hidden'>-</div>").appendTo(r);
      cellWidthDiff = cellHeightDiff = 0;
      $.each(h, function (n, val) {
        cellWidthDiff += parseFloat(el.css(val)) || 0;
      });
      $.each(v, function (n, val) {
        cellHeightDiff += parseFloat(el.css(val)) || 0;
      });
      r.remove();

      absoluteColumnMinWidth = Math.max(headerColumnWidthDiff, cellWidthDiff);
    }

    function createCssRules() {
      $style = $("<style type='text/css' rel='stylesheet' />").appendTo($("head"));
      var rowHeight = (options.rowHeight - cellHeightDiff);
      var rules = [
        "." + uid + " .slick-header-column { left: 1000px; }",
        "." + uid + " .slick-top-panel { height:" + options.topPanelHeight + "px; }",
        "." + uid + " .slick-headerrow-columns { height:" + options.headerRowHeight + "px; }",
        "." + uid + " .slick-cell { height:" + rowHeight + "px; }",
        "." + uid + " .slick-row { height:" + options.rowHeight + "px; }"
      ];

      for (var i = 0; i < columns.length; i++) {
        rules.push("." + uid + " .l" + i + " { }");
        rules.push("." + uid + " .r" + i + " { }");
      }

      if ($style[0].styleSheet) { // IE
        $style[0].styleSheet.cssText = rules.join(" ");
      } else {
        $style[0].appendChild(document.createTextNode(rules.join(" ")));
      }
    }

    function getColumnCssRules(idx) {
      if (!stylesheet) {
        var sheets = document.styleSheets;
        for (var i = 0; i < sheets.length; i++) {
          if ((sheets[i].ownerNode || sheets[i].owningElement) == $style[0]) {
            stylesheet = sheets[i];
            break;
          }
        }

        if (!stylesheet) {
          throw new Error("Cannot find stylesheet.");
        }

        // find and cache column CSS rules
        columnCssRulesL = [];
        columnCssRulesR = [];
        var cssRules = (stylesheet.cssRules || stylesheet.rules);
        var matches, columnIdx;
        for (var i = 0; i < cssRules.length; i++) {
          var selector = cssRules[i].selectorText;
          if (matches = /\.l\d+/.exec(selector)) {
            columnIdx = parseInt(matches[0].substr(2, matches[0].length - 2), 10);
            columnCssRulesL[columnIdx] = cssRules[i];
          } else if (matches = /\.r\d+/.exec(selector)) {
            columnIdx = parseInt(matches[0].substr(2, matches[0].length - 2), 10);
            columnCssRulesR[columnIdx] = cssRules[i];
          }
        }
      }

      return {
        "left": columnCssRulesL[idx],
        "right": columnCssRulesR[idx]
      };
    }

    function removeCssRules() {
      $style.remove();
      stylesheet = null;
    }

    function destroy() {
      getEditorLock().cancelCurrentEdit();

      trigger(self.onBeforeDestroy, {});

      for (var i = 0; i < plugins.length; i++) {
        unregisterPlugin(plugins[i]);
      }

      if (options.enableColumnReorder && $headers.sortable) {
        $headers.sortable("destroy");
      }

      unbindAncestorScrollEvents();
      $container.unbind(".slickgrid");
      removeCssRules();

      $canvas.unbind("draginit dragstart dragend drag");
      $container.empty().removeClass(uid);
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    // General

    function trigger(evt, args, e) {
      e = e || new Slick.EventData();
      args = args || {};
      args.grid = self;
      return evt.notify(args, e, self);
    }

    function getEditorLock() {
      return options.editorLock;
    }

    function getEditController() {
      return editController;
    }

    function getColumnIndex(id) {
      return columnsById[id];
    }

    function autosizeColumns() {
      var i, c,
          widths = [],
          shrinkLeeway = 0,
          total = 0,
          prevTotal,
          availWidth = viewportHasVScroll ? viewportW - scrollbarDimensions.width : viewportW;

      for (i = 0; i < columns.length; i++) {
        c = columns[i];
        widths.push(c.width);
        total += c.width;
        if (c.resizable) {
          shrinkLeeway += c.width - Math.max(c.minWidth, absoluteColumnMinWidth);
        }
      }

      // shrink
      prevTotal = total;
      while (total > availWidth && shrinkLeeway) {
        var shrinkProportion = (total - availWidth) / shrinkLeeway;
        for (i = 0; i < columns.length && total > availWidth; i++) {
          c = columns[i];
          var width = widths[i];
          if (!c.resizable || width <= c.minWidth || width <= absoluteColumnMinWidth) {
            continue;
          }
          var absMinWidth = Math.max(c.minWidth, absoluteColumnMinWidth);
          var shrinkSize = Math.floor(shrinkProportion * (width - absMinWidth)) || 1;
          shrinkSize = Math.min(shrinkSize, width - absMinWidth);
          total -= shrinkSize;
          shrinkLeeway -= shrinkSize;
          widths[i] -= shrinkSize;
        }
        if (prevTotal == total) {  // avoid infinite loop
          break;
        }
        prevTotal = total;
      }

      // grow
      prevTotal = total;
      while (total < availWidth) {
        var growProportion = availWidth / total;
        for (i = 0; i < columns.length && total < availWidth; i++) {
          c = columns[i];
          if (!c.resizable || c.maxWidth <= c.width) {
            continue;
          }
          var growSize = Math.min(Math.floor(growProportion * c.width) - c.width, (c.maxWidth - c.width) || 1000000) || 1;
          total += growSize;
          widths[i] += growSize;
        }
        if (prevTotal == total) {  // avoid infinite loop
          break;
        }
        prevTotal = total;
      }

      var reRender = false;
      for (i = 0; i < columns.length; i++) {
        if (columns[i].rerenderOnResize && columns[i].width != widths[i]) {
          reRender = true;
        }
        columns[i].width = widths[i];
      }

      applyColumnHeaderWidths();
      updateCanvasWidth(true);
      if (reRender) {
        invalidateAllRows();
        render();
      }
    }

    function applyColumnHeaderWidths() {
      if (!initialized) { return; }
      var h;
      for (var i = 0, headers = $headers.children(), ii = headers.length; i < ii; i++) {
        h = $(headers[i]);
        if (h.width() !== columns[i].width - headerColumnWidthDiff) {
          h.width(columns[i].width - headerColumnWidthDiff);
        }
      }
    }

    function applyColumnWidths() {
      var x = 0, w, rule;
      for (var i = 0; i < columns.length; i++) {
        w = columns[i].width;

        rule = getColumnCssRules(i);
        rule.left.style.left = x + "px";
        rule.right.style.right = (canvasWidth - x - w) + "px";

        x += columns[i].width;
      }
    }

    function setSortColumn(columnId, ascending) {
      setSortColumns([{ columnId: columnId, sortAsc: ascending}]);
    }

    function setSortColumns(cols) {
      sortColumns = cols;

      var headerColumnEls = $headers.children();
      headerColumnEls
          .removeClass("slick-header-column-sorted")
          .find(".slick-sort-indicator")
              .removeClass("slick-sort-indicator-asc slick-sort-indicator-desc");

      $.each(sortColumns, function(i, col) {
        if (col.sortAsc == null) {
          col.sortAsc = true;
        }
        var columnIndex = getColumnIndex(col.columnId);
        if (columnIndex != null) {
          headerColumnEls.eq(columnIndex)
              .addClass("slick-header-column-sorted")
              .find(".slick-sort-indicator")
                  .addClass(col.sortAsc ? "slick-sort-indicator-asc" : "slick-sort-indicator-desc");
        }
      });
    }

    function getSortColumns() {
      return sortColumns;
    }

    function handleSelectedRangesChanged(e, ranges) {
      selectedRows = [];
      var hash = {};
      for (var i = 0; i < ranges.length; i++) {
        for (var j = ranges[i].fromRow; j <= ranges[i].toRow; j++) {
          if (!hash[j]) {  // prevent duplicates
            selectedRows.push(j);
          }
          hash[j] = {};
          for (var k = ranges[i].fromCell; k <= ranges[i].toCell; k++) {
            if (canCellBeSelected(j, k)) {
              hash[j][columns[k].id] = options.selectedCellCssClass;
            }
          }
        }
      }

      setCellCssStyles(options.selectedCellCssClass, hash);

      trigger(self.onSelectedRowsChanged, {rows: getSelectedRows()}, e);
    }

    function getColumns() {
      return columns;
    }

    function setColumns(columnDefinitions) {
      columns = columnDefinitions;
      if (initialized) {
        invalidateAllRows();
        createColumnHeaders();
        removeCssRules();
        createCssRules();
        resizeCanvas();
        applyColumnWidths();
        handleScroll();
      }
    }

    function getOptions() {
      return options;
    }

    function setOptions(args) {
      if (!getEditorLock().commitCurrentEdit()) {
        return;
      }

      makeActiveCellNormal();

      if (options.enableAddRow !== args.enableAddRow) {
        invalidateRow(getDataLength());
      }

      options = $.extend(options, args);

      $viewport.css("overflow-y", options.autoHeight ? "hidden" : "auto");
      render();
    }

    function setData(newData, scrollToTop) {
      data = newData;
      invalidateAllRows();
      updateRowCount();
      if (scrollToTop) {
        scrollTo(0);
      }
    }

    function getData() {
      return data;
    }

    function getDataLength() {
      if (data.getLength) {
        return data.getLength();
      } else {
        return data.length;
      }
    }

    function getDataItem(i) {
      if (data.getItem) {
        return data.getItem(i);
      } else {
        return data[i];
      }
    }

    function getTopPanel() {
      return $topPanel[0];
    }

    function showTopPanel() {
      options.showTopPanel = true;
      $topPanelScroller.slideDown("fast", resizeCanvas);
    }

    function hideTopPanel() {
      options.showTopPanel = false;
      $topPanelScroller.slideUp("fast", resizeCanvas);
    }

    function showHeaderRowColumns() {
      options.showHeaderRow = true;
      $headerRowScroller.slideDown("fast", resizeCanvas);
    }

    function hideHeaderRowColumns() {
      options.showHeaderRow = false;
      $headerRowScroller.slideUp("fast", resizeCanvas);
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Rendering / Scrolling

    function scrollTo(y) {
      var oldOffset = offset;

      page = Math.min(n - 1, Math.floor(y / ph));
      offset = Math.round(page * cj);
      var newScrollTop = y - offset;

      if (offset != oldOffset) {
        var range = getVisibleRange(newScrollTop);
        cleanupRows(range.top, range.bottom);
        updateRowPositions();
      }

      if (prevScrollTop != newScrollTop) {
        scrollDir = (prevScrollTop + oldOffset < newScrollTop + offset) ? 1 : -1;
        $viewport[0].scrollTop = (lastRenderedScrollTop = scrollTop = prevScrollTop = newScrollTop);

        trigger(self.onViewportChanged, {});
      }
    }

    function defaultFormatter(row, cell, value, columnDef, dataContext) {
      if (value == null) {
        return "";
      } else {
        return value.toString().replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");
      }
    }

    function getFormatter(row, column) {
      var rowMetadata = data.getItemMetadata && data.getItemMetadata(row);

      // look up by id, then index
      var columnOverrides = rowMetadata &&
          rowMetadata.columns &&
          (rowMetadata.columns[column.id] || rowMetadata.columns[getColumnIndex(column.id)]);

      return (columnOverrides && columnOverrides.formatter) ||
          (rowMetadata && rowMetadata.formatter) ||
          column.formatter ||
          (options.formatterFactory && options.formatterFactory.getFormatter(column)) ||
          options.defaultFormatter;
    }

    function getEditor(row, cell) {
      var column = columns[cell];
      var rowMetadata = data.getItemMetadata && data.getItemMetadata(row);
      var columnMetadata = rowMetadata && rowMetadata.columns;

      if (columnMetadata && columnMetadata[column.id] && columnMetadata[column.id].editor !== undefined) {
        return columnMetadata[column.id].editor;
      }
      if (columnMetadata && columnMetadata[cell] && columnMetadata[cell].editor !== undefined) {
        return columnMetadata[cell].editor;
      }

      return column.editor || (options.editorFactory && options.editorFactory.getEditor(column));
    }

    function getDataItemValueForColumn(item, columnDef) {
      if (options.dataItemColumnValueExtractor) {
        return options.dataItemColumnValueExtractor(item, columnDef);
      }
      return item[columnDef.field];
    }

    function appendRowHtml(stringArray, row) {
      var d = getDataItem(row);
      var dataLoading = row < getDataLength() && !d;
      var cellCss;
      var rowCss = "slick-row " +
          (dataLoading ? " loading" : "") +
          (row % 2 == 1 ? " odd" : " even");

      var metadata = data.getItemMetadata && data.getItemMetadata(row);

      if (metadata && metadata.cssClasses) {
        rowCss += " " + metadata.cssClasses;
      }

      stringArray.push("<div class='ui-widget-content " + rowCss + "' row='" + row + "' style='top:" + (options.rowHeight * row - offset) + "px'>");

      var colspan, m;
      for (var i = 0, cols = columns.length; i < cols; i++) {
        m = columns[i];
        colspan = getColspan(row, i);  // TODO:  don't calc unless we have to
        cellCss = "slick-cell l" + i + " r" + Math.min(columns.length - 1, i + colspan - 1) + (m.cssClass ? " " + m.cssClass : "");
        if (row === activeRow && i === activeCell) {
          cellCss += (" active");
        }

        // TODO:  merge them together in the setter
        for (var key in cellCssClasses) {
          if (cellCssClasses[key][row] && cellCssClasses[key][row][m.id]) {
            cellCss += (" " + cellCssClasses[key][row][m.id]);
          }
        }

        stringArray.push("<div class='" + cellCss + "'>");

        // if there is a corresponding row (if not, this is the Add New row or this data hasn't been loaded yet)
        if (d) {
          stringArray.push(getFormatter(row, m)(row, i, getDataItemValueForColumn(d, m), m, d));
        }

        stringArray.push("</div>");

        if (colspan) {
          i += (colspan - 1);
        }
      }

      stringArray.push("</div>");
    }

    function cleanupRows(rangeToKeep) {
      for (var i in rowsCache) {
        if (((i = parseInt(i, 10)) !== activeRow) && (i < rangeToKeep.top || i > rangeToKeep.bottom)) {
          removeRowFromCache(i);
        }
      }
    }

    function invalidate() {
      updateRowCount();
      invalidateAllRows();
      render();
    }

    function invalidateAllRows() {
      if (currentEditor) {
        makeActiveCellNormal();
      }
      for (var row in rowsCache) {
        removeRowFromCache(row);
      }
    }

    function removeRowFromCache(row) {
      var node = rowsCache[row];
      if (!node) {
        return;
      }
      $canvas[0].removeChild(node);
      delete rowsCache[row];
      delete postProcessedRows[row];
      renderedRows--;
      counter_rows_removed++;
    }

    function invalidateRows(rows) {
      var i, rl;
      if (!rows || !rows.length) {
        return;
      }
      scrollDir = 0;
      for (i = 0, rl = rows.length; i < rl; i++) {
        if (currentEditor && activeRow === rows[i]) {
          makeActiveCellNormal();
        }
        if (rowsCache[rows[i]]) {
          removeRowFromCache(rows[i]);
        }
      }
    }

    function invalidateRow(row) {
      invalidateRows([row]);
    }

    function updateCell(row, cell) {
      var cellNode = getCellNode(row, cell);
      if (!cellNode) {
        return;
      }

      var m = columns[cell], d = getDataItem(row);
      if (currentEditor && activeRow === row && activeCell === cell) {
        currentEditor.loadValue(d);
      } else {
        cellNode.innerHTML = d ? getFormatter(row, m)(row, cell, getDataItemValueForColumn(d, m), m, d) : "";
        invalidatePostProcessingResults(row);
      }
    }

    function updateRow(row) {
      if (!rowsCache[row]) {
        return;
      }

      var columnIndex = 0
      $(rowsCache[row]).children().each(function (i) {
        var m = columns[columnIndex], d = getDataItem(row);
        if (row === activeRow && i === activeCell && currentEditor) {
          currentEditor.loadValue(getDataItem(activeRow));
        } else if (d) {
          this.innerHTML = getFormatter(row, m)(row, columnIndex, getDataItemValueForColumn(d, m), m, getDataItem(row));
        } else {
          this.innerHTML = "";
        }

        columnIndex += getColspan(row, i);
      });

      invalidatePostProcessingResults(row);
    }

    function getViewportHeight() {
      return parseFloat($.css($container[0], "height", true)) -
          parseFloat($.css($headerScroller[0], "height")) - getVBoxDelta($headerScroller) -
          (options.showTopPanel ? options.topPanelHeight + getVBoxDelta($topPanelScroller) : 0) -
          (options.showHeaderRow ? options.headerRowHeight + getVBoxDelta($headerRowScroller) : 0);
    }

    function resizeCanvas() {
      if (!initialized) { return; }
      if (options.autoHeight) {
        viewportH = options.rowHeight * (getDataLength() + (options.enableAddRow ? 1 : 0) + (options.leaveSpaceForNewRows ? numVisibleRows - 1 : 0));
      } else {
        viewportH = getViewportHeight();
      }

      numVisibleRows = Math.ceil(viewportH / options.rowHeight);
      viewportW = parseFloat($.css($container[0], "width", true));
      $viewport.height(viewportH);

      if (options.forceFitColumns) {
        autosizeColumns();
      }

      updateRowCount();
      render();
    }

    function updateRowCount() {
      if (!initialized) { return; }
      numberOfRows = getDataLength() +
          (options.enableAddRow ? 1 : 0) +
          (options.leaveSpaceForNewRows ? numVisibleRows - 1 : 0);

      var oldViewportHasVScroll = viewportHasVScroll;
      // with autoHeight, we do not need to accommodate the vertical scroll bar
      viewportHasVScroll = !options.autoHeight && (numberOfRows * options.rowHeight > viewportH);

      // remove the rows that are now outside of the data range
      // this helps avoid redundant calls to .removeRow() when the size of the data decreased by thousands of rows
      var l = options.enableAddRow ? getDataLength() : getDataLength() - 1;
      for (var i in rowsCache) {
        if (i >= l) {
          removeRowFromCache(i);
        }
      }

      var oldH = h;
      th = Math.max(options.rowHeight * numberOfRows, viewportH - scrollbarDimensions.height);
      if (th < maxSupportedCssHeight) {
        // just one page
        h = ph = th;
        n = 1;
        cj = 0;
      } else {
        // break into pages
        h = maxSupportedCssHeight;
        ph = h / 100;
        n = Math.floor(th / ph);
        cj = (th - h) / (n - 1);
      }

      if (h !== oldH) {
        $canvas.css("height", h);
        scrollTop = $viewport[0].scrollTop;
      }

      var oldScrollTopInRange = (scrollTop + offset <= th - viewportH);

      if (th == 0 || scrollTop == 0) {
        page = offset = 0;
      } else if (oldScrollTopInRange) {
        // maintain virtual position
        scrollTo(scrollTop + offset);
      } else {
        // scroll to bottom
        scrollTo(th - viewportH);
      }

      if (h != oldH && options.autoHeight) {
        resizeCanvas();
      }

      if (options.forceFitColumns && oldViewportHasVScroll != viewportHasVScroll) {
        autosizeColumns();
      }
      updateCanvasWidth(false);
    }

    function getVisibleRange(viewportTop) {
      if (viewportTop == null) {
        viewportTop = scrollTop;
      }

      return {
        top: Math.floor((viewportTop + offset) / options.rowHeight),
        bottom: Math.ceil((viewportTop + offset + viewportH) / options.rowHeight)
      };
    }

    function getRenderedRange(viewportTop) {
      var range = getVisibleRange(viewportTop);
      var buffer = Math.round(viewportH / options.rowHeight);
      var minBuffer = 3;

      if (scrollDir == -1) {
        range.top -= buffer;
        range.bottom += minBuffer;
      } else if (scrollDir == 1) {
        range.top -= minBuffer;
        range.bottom += buffer;
      } else {
        range.top -= minBuffer;
        range.bottom += minBuffer;
      }

      range.top = Math.max(0, range.top);
      range.bottom = Math.min(options.enableAddRow ? getDataLength() : getDataLength() - 1, range.bottom);

      return range;
    }

    function renderRows(range) {
      var i, l,
          parentNode = $canvas[0],
          rowsBefore = renderedRows,
          stringArray = [],
          rows = [],
          startTimestamp = new Date(),
          needToReselectCell = false;

      for (i = range.top; i <= range.bottom; i++) {
        if (rowsCache[i]) {
          continue;
        }
        renderedRows++;
        rows.push(i);
        appendRowHtml(stringArray, i);
        if (activeCellNode && activeRow === i) {
          needToReselectCell = true;
        }
        counter_rows_rendered++;
      }

      if (!rows.length) { return; }

      var x = document.createElement("div");
      x.innerHTML = stringArray.join("");

      for (i = 0, l = x.childNodes.length; i < l; i++) {
        rowsCache[rows[i]] = parentNode.appendChild(x.firstChild);
      }

      if (needToReselectCell) {
        activeCellNode = getCellNode(activeRow, activeCell);
      }

      if (renderedRows - rowsBefore > 5) {
        avgRowRenderTime = (new Date() - startTimestamp) / (renderedRows - rowsBefore);
      }
    }

    function startPostProcessing() {
      if (!options.enableAsyncPostRender) {
        return;
      }
      clearTimeout(h_postrender);
      h_postrender = setTimeout(asyncPostProcessRows, options.asyncPostRenderDelay);
    }

    function invalidatePostProcessingResults(row) {
      delete postProcessedRows[row];
      postProcessFromRow = Math.min(postProcessFromRow, row);
      postProcessToRow = Math.max(postProcessToRow, row);
      startPostProcessing();
    }

    function updateRowPositions() {
      for (var row in rowsCache) {
        rowsCache[row].style.top = (row * options.rowHeight - offset) + "px";
      }
    }

    function render() {
      if (!initialized) { return; }
      var visible = getVisibleRange();
      var rendered = getRenderedRange();

      // remove rows no longer in the viewport
      cleanupRows(rendered);

      // add new rows
      renderRows(rendered);

      postProcessFromRow = visible.top;
      postProcessToRow = Math.min(options.enableAddRow ? getDataLength() : getDataLength() - 1, visible.bottom);
      startPostProcessing();

      lastRenderedScrollTop = scrollTop;
      h_render = null;
    }

    function handleScroll() {
      scrollTop = $viewport[0].scrollTop;
      var scrollLeft = $viewport[0].scrollLeft;
      var scrollDist = Math.abs(scrollTop - prevScrollTop);

      if (scrollLeft !== prevScrollLeft) {
        prevScrollLeft = scrollLeft;
        $headerScroller[0].scrollLeft = scrollLeft;
        $topPanelScroller[0].scrollLeft = scrollLeft;
        $headerRowScroller[0].scrollLeft = scrollLeft;
      }

      if (scrollDist) {
        scrollDir = prevScrollTop < scrollTop ? 1 : -1;
        prevScrollTop = scrollTop;

        // switch virtual pages if needed
        if (scrollDist < viewportH) {
          scrollTo(scrollTop + offset);
        } else {
          var oldOffset = offset;
          page = Math.min(n - 1, Math.floor(scrollTop * ((th - viewportH) / (h - viewportH)) * (1 / ph)));
          offset = Math.round(page * cj);
          if (oldOffset != offset) {
            invalidateAllRows();
          }
        }

        if (h_render) {
          clearTimeout(h_render);
        }

        if (Math.abs(lastRenderedScrollTop - scrollTop) < viewportH) {
          render();
        } else {
          h_render = setTimeout(render, 50);
        }

        trigger(self.onViewportChanged, {});
      }

      trigger(self.onScroll, {scrollLeft: scrollLeft, scrollTop: scrollTop});
    }

    function asyncPostProcessRows() {
      while (postProcessFromRow <= postProcessToRow) {
        var row = (scrollDir >= 0) ? postProcessFromRow++ : postProcessToRow--;
        var rowNode = rowsCache[row];
        if (!rowNode || postProcessedRows[row] || row >= getDataLength()) {
          continue;
        }

        var d = getDataItem(row), cellNodes = rowNode.childNodes;
        for (var i = 0, j = 0, l = columns.length; i < l; ++i) {
          var m = columns[i];
          if (m.asyncPostRender) {
            m.asyncPostRender(cellNodes[j], postProcessFromRow, d, m);
          }
          ++j;
        }

        postProcessedRows[row] = true;
        h_postrender = setTimeout(asyncPostProcessRows, options.asyncPostRenderDelay);
        return;
      }
    }

    function updateCellCssStylesOnRenderedRows(addedHash, removedHash) {
      var node, columnId, addedRowHash, removedRowHash;
      for (var row in rowsCache) {
        removedRowHash = removedHash && removedHash[row];
        addedRowHash = addedHash && addedHash[row];

        if (removedRowHash) {
          for (columnId in removedRowHash) {
            if (!addedRowHash || removedRowHash[columnId] != addedRowHash[columnId]) {
              node = getCellNode(row, getColumnIndex(columnId));
              if (node) {
                $(node).removeClass(removedRowHash[columnId]);
              }
            }
          }
        }

        if (addedRowHash) {
          for (columnId in addedRowHash) {
            if (!removedRowHash || removedRowHash[columnId] != addedRowHash[columnId]) {
              node = getCellNode(row, getColumnIndex(columnId));
              if (node) {
                $(node).addClass(addedRowHash[columnId]);
              }
            }
          }
        }
      }
    }

    function addCellCssStyles(key, hash) {
      if (cellCssClasses[key]) {
        throw "addCellCssStyles: cell CSS hash with key '" + key + "' already exists.";
      }

      cellCssClasses[key] = hash;
      updateCellCssStylesOnRenderedRows(hash, null);

      trigger(self.onCellCssStylesChanged, { "key": key, "hash": hash });
    }

    function removeCellCssStyles(key) {
      if (!cellCssClasses[key]) {
        return;
      }

      updateCellCssStylesOnRenderedRows(null, cellCssClasses[key]);
      delete cellCssClasses[key];

      trigger(self.onCellCssStylesChanged, { "key": key, "hash": null });
    }

    function setCellCssStyles(key, hash) {
      var prevHash = cellCssClasses[key];

      cellCssClasses[key] = hash;
      updateCellCssStylesOnRenderedRows(hash, prevHash);

      trigger(self.onCellCssStylesChanged, { "key": key, "hash": hash });
    }

    function getCellCssStyles(key) {
      return cellCssClasses[key];
    }

    function flashCell(row, cell, speed) {
      speed = speed || 100;
      if (rowsCache[row]) {
        var $cell = $(getCellNode(row, cell));

        function toggleCellClass(times) {
          if (!times) {
            return;
          }
          setTimeout(function () {
                $cell.queue(function () {
                  $cell.toggleClass(options.cellFlashingCssClass).dequeue();
                  toggleCellClass(times - 1);
                });
              },
              speed);
        }

        toggleCellClass(4);
      }
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Interactivity

    function handleDragInit(e, dd) {
      var cell = getCellFromEvent(e);
      if (!cell || !cellExists(cell.row, cell.cell)) {
        return false;
      }

      retval = trigger(self.onDragInit, dd, e);
      if (e.isImmediatePropagationStopped()) {
        return retval;
      }

      // if nobody claims to be handling drag'n'drop by stopping immediate propagation,
      // cancel out of it
      return false;
    }

    function handleDragStart(e, dd) {
      var cell = getCellFromEvent(e);
      if (!cell || !cellExists(cell.row, cell.cell)) {
        return false;
      }

      var retval = trigger(self.onDragStart, dd, e);
      if (e.isImmediatePropagationStopped()) {
        return retval;
      }

      return false;
    }

    function handleDrag(e, dd) {
      return trigger(self.onDrag, dd, e);
    }

    function handleDragEnd(e, dd) {
      trigger(self.onDragEnd, dd, e);
    }

    function handleKeyDown(e) {
      trigger(self.onKeyDown, {row: activeRow, cell: activeCell}, e);
      var handled = e.isImmediatePropagationStopped();

      if (!handled) {
        if (!e.shiftKey && !e.altKey && !e.ctrlKey) {
          if (e.which == 27) {
            if (!getEditorLock().isActive()) {
              return; // no editing mode to cancel, allow bubbling and default processing (exit without cancelling the event)
            }
            cancelEditAndSetFocus();
          } else if (e.which == 37) {
            navigateLeft();
          } else if (e.which == 39) {
            navigateRight();
          } else if (e.which == 38) {
            navigateUp();
          } else if (e.which == 40) {
            navigateDown();
          } else if (e.which == 9) {
            navigateNext();
          } else if (e.which == 13) {
            if (options.editable) {
              if (currentEditor) {
                // adding new row
                if (activeRow === getDataLength()) {
                  navigateDown();
                }
                else {
                  commitEditAndSetFocus();
                }
              } else {
                if (getEditorLock().commitCurrentEdit()) {
                  makeActiveCellEditable();
                }
              }
            }
          } else {
            return;
          }
        } else if (e.which == 9 && e.shiftKey && !e.ctrlKey && !e.altKey) {
          navigatePrev();
        } else {
          return;
        }
      }

      // the event has been handled so don't let parent element (bubbling/propagation) or browser (default) handle it
      e.stopPropagation();
      e.preventDefault();
      try {
        e.originalEvent.keyCode = 0; // prevent default behaviour for special keys in IE browsers (F3, F5, etc.)
      }
        // ignore exceptions - setting the original event's keycode throws access denied exception for "Ctrl"
        // (hitting control key only, nothing else), "Shift" (maybe others)
      catch (error) {
      }
    }

    function handleClick(e) {
      if (!currentEditor) {
        setFocus();
      }

      var cell = getCellFromEvent(e);
      if (!cell || (currentEditor !== null && activeRow == cell.row && activeCell == cell.cell)) {
        return;
      }

      trigger(self.onClick, {row: cell.row, cell: cell.cell}, e);
      if (e.isImmediatePropagationStopped()) {
        return;
      }

      if (canCellBeActive(cell.row, cell.cell)) {
        if (!getEditorLock().isActive() || getEditorLock().commitCurrentEdit()) {
          scrollRowIntoView(cell.row, false);
          setActiveCellInternal(getCellNode(cell.row, cell.cell), (cell.row === getDataLength()) || options.autoEdit);
        }
      }
    }

    function handleContextMenu(e) {
      var $cell = $(e.target).closest(".slick-cell", $canvas);
      if ($cell.length === 0) {
        return;
      }

      // are we editing this cell?
      if (activeCellNode === $cell[0] && currentEditor !== null) {
        return;
      }

      trigger(self.onContextMenu, {}, e);
    }

    function handleDblClick(e) {
      var cell = getCellFromEvent(e);
      if (!cell || (currentEditor !== null && activeRow == cell.row && activeCell == cell.cell)) {
        return;
      }

      trigger(self.onDblClick, {row: cell.row, cell: cell.cell}, e);
      if (e.isImmediatePropagationStopped()) {
        return;
      }

      if (options.editable) {
        gotoCell(cell.row, cell.cell, true);
      }
    }

    function handleHeaderContextMenu(e) {
      var $header = $(e.target).closest(".slick-header-column", ".slick-header-columns");
      var column = $header && columns[self.getColumnIndex($header.data("fieldId"))];
      trigger(self.onHeaderContextMenu, {column: column}, e);
    }

    function handleHeaderClick(e) {
      var $header = $(e.target).closest(".slick-header-column", ".slick-header-columns");
      var column = $header && columns[self.getColumnIndex($header.data("fieldId"))];
      if (column) {
        trigger(self.onHeaderClick, {column: column}, e);
      }
    }

    function handleMouseEnter(e) {
      trigger(self.onMouseEnter, {}, e);
    }

    function handleMouseLeave(e) {
      trigger(self.onMouseLeave, {}, e);
    }

    function cellExists(row, cell) {
      return !(row < 0 || row >= getDataLength() || cell < 0 || cell >= columns.length);
    }

    function getCellFromPoint(x, y) {
      var row = Math.floor((y + offset) / options.rowHeight);
      var cell = 0;

      var w = 0;
      for (var i = 0; i < columns.length && w < x; i++) {
        w += columns[i].width;
        cell++;
      }

      if (cell < 0) {
        cell = 0;
      }

      return {row: row, cell: cell - 1};
    }

    function getCellFromNode(node) {
      // read column number from .l<columnNumber> CSS class
      var cls = /l\d+/.exec(node.className);
      if (!cls) {
        throw "getCellFromNode: cannot get cell - " + node.className;
      }
      return parseInt(cls[0].substr(1, cls[0].length - 1), 10);
    }

    function getCellFromEvent(e) {
      var $cell = $(e.target).closest(".slick-cell", $canvas);
      if (!$cell.length) {
        return null;
      }

      return {
        row: $cell.parent().attr("row") | 0,
        cell: getCellFromNode($cell[0])
      };
    }

    function getCellNodeBox(row, cell) {
      if (!cellExists(row, cell)) {
        return null;
      }

      var y1 = row * options.rowHeight - offset;
      var y2 = y1 + options.rowHeight - 1;
      var x1 = 0;
      for (var i = 0; i < cell; i++) {
        x1 += columns[i].width;
      }
      var x2 = x1 + columns[cell].width;

      return {
        top: y1,
        left: x1,
        bottom: y2,
        right: x2
      };
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Cell switching

    function resetActiveCell() {
      setActiveCellInternal(null, false);
    }

    function setFocus() {
      $focusSink[0].focus();
    }

    function scrollActiveCellIntoView() {
      if (activeCellNode) {
        var left = $(activeCellNode).position().left,
            right = left + $(activeCellNode).outerWidth(),
            scrollLeft = $viewport.scrollLeft(),
            scrollRight = scrollLeft + $viewport.width();

        if (left < scrollLeft) {
          $viewport.scrollLeft(left);
        } else if (right > scrollRight) {
          $viewport.scrollLeft(Math.min(left, right - $viewport[0].clientWidth));
        }
      }
    }

    function setActiveCellInternal(newCell, editMode) {
      if (activeCellNode !== null) {
        makeActiveCellNormal();
        $(activeCellNode).removeClass("active");
      }

      var activeCellChanged = (activeCellNode !== newCell);
      activeCellNode = newCell;

      if (activeCellNode != null) {
        activeRow = parseInt($(activeCellNode).parent().attr("row"));
        activeCell = activePosX = getCellFromNode(activeCellNode);

        $(activeCellNode).addClass("active");

        if (options.editable && editMode && isCellPotentiallyEditable(activeRow, activeCell)) {
          clearTimeout(h_editorLoader);

          if (options.asyncEditorLoading) {
            h_editorLoader = setTimeout(function () {
              makeActiveCellEditable();
            }, options.asyncEditorLoadDelay);
          } else {
            makeActiveCellEditable();
          }
        } else {
          setFocus();
        }
      } else {
        activeRow = activeCell = null;
      }

      if (activeCellChanged) {
        scrollActiveCellIntoView();
        trigger(self.onActiveCellChanged, getActiveCell());
      }
    }

    function clearTextSelection() {
      if (document.selection && document.selection.empty) {
        document.selection.empty();
      } else if (window.getSelection) {
        var sel = window.getSelection();
        if (sel && sel.removeAllRanges) {
          sel.removeAllRanges();
        }
      }
    }

    function isCellPotentiallyEditable(row, cell) {
      // is the data for this row loaded?
      if (row < getDataLength() && !getDataItem(row)) {
        return false;
      }

      // are we in the Add New row?  can we create new from this cell?
      if (columns[cell].cannotTriggerInsert && row >= getDataLength()) {
        return false;
      }

      // does this cell have an editor?
      if (!getEditor(row, cell)) {
        return false;
      }

      return true;
    }

    function makeActiveCellNormal() {
      if (!currentEditor) {
        return;
      }
      trigger(self.onBeforeCellEditorDestroy, {editor: currentEditor});
      currentEditor.destroy();
      currentEditor = null;

      if (activeCellNode) {
        var d = getDataItem(activeRow);
        $(activeCellNode).removeClass("editable invalid");
        if (d) {
          var column = columns[activeCell];
          var formatter = getFormatter(activeRow, column);
          activeCellNode.innerHTML = formatter(activeRow, activeCell, getDataItemValueForColumn(d, column), column, getDataItem(activeRow));
          invalidatePostProcessingResults(activeRow);
        }
      }

      // if there previously was text selected on a page (such as selected text in the edit cell just removed),
      // IE can't set focus to anything else correctly
      if ($.browser.msie) {
        clearTextSelection();
      }

      getEditorLock().deactivate(editController);
    }

    function makeActiveCellEditable(editor) {
      if (!activeCellNode) {
        return;
      }
      if (!options.editable) {
        throw "Grid : makeActiveCellEditable : should never get called when options.editable is false";
      }

      // cancel pending async call if there is one
      clearTimeout(h_editorLoader);

      if (!isCellPotentiallyEditable(activeRow, activeCell)) {
        return;
      }

      var columnDef = columns[activeCell];
      var item = getDataItem(activeRow);

      if (trigger(self.onBeforeEditCell, {row: activeRow, cell: activeCell, item: item, column: columnDef}) === false) {
        setFocus();
        return;
      }

      getEditorLock().activate(editController);
      $(activeCellNode).addClass("editable");

      // don't clear the cell if a custom editor is passed through
      if (!editor) {
        activeCellNode.innerHTML = "";
      }

      currentEditor = new (editor || getEditor(activeRow, activeCell))({
        grid: self,
        gridPosition: absBox($container[0]),
        position: absBox(activeCellNode),
        container: activeCellNode,
        column: columnDef,
        item: item || {},
        commitChanges: commitEditAndSetFocus,
        cancelChanges: cancelEditAndSetFocus
      });

      if (item) {
        currentEditor.loadValue(item);
      }

      serializedEditorValue = currentEditor.serializeValue();

      if (currentEditor.position) {
        handleActiveCellPositionChange();
      }
    }

    function commitEditAndSetFocus() {
      // if the commit fails, it would do so due to a validation error
      // if so, do not steal the focus from the editor
      if (getEditorLock().commitCurrentEdit()) {
        setFocus();
        if (options.autoEdit) {
          navigateDown();
        }
      }
    }

    function cancelEditAndSetFocus() {
      if (getEditorLock().cancelCurrentEdit()) {
        setFocus();
      }
    }

    function absBox(elem) {
      var box = {
        top: elem.offsetTop,
        left: elem.offsetLeft,
        bottom: 0,
        right: 0,
        width: $(elem).outerWidth(),
        height: $(elem).outerHeight(),
        visible: true};
      box.bottom = box.top + box.height;
      box.right = box.left + box.width;

      // walk up the tree
      var offsetParent = elem.offsetParent;
      while ((elem = elem.parentNode) != document.body) {
        if (box.visible && elem.scrollHeight != elem.offsetHeight && $(elem).css("overflowY") != "visible") {
          box.visible = box.bottom > elem.scrollTop && box.top < elem.scrollTop + elem.clientHeight;
        }

        if (box.visible && elem.scrollWidth != elem.offsetWidth && $(elem).css("overflowX") != "visible") {
          box.visible = box.right > elem.scrollLeft && box.left < elem.scrollLeft + elem.clientWidth;
        }

        box.left -= elem.scrollLeft;
        box.top -= elem.scrollTop;

        if (elem === offsetParent) {
          box.left += elem.offsetLeft;
          box.top += elem.offsetTop;
          offsetParent = elem.offsetParent;
        }

        box.bottom = box.top + box.height;
        box.right = box.left + box.width;
      }

      return box;
    }

    function getActiveCellPosition() {
      return absBox(activeCellNode);
    }

    function getGridPosition() {
      return absBox($container[0])
    }

    function handleActiveCellPositionChange() {
      if (!activeCellNode) {
        return;
      }

      trigger(self.onActiveCellPositionChanged, {});

      if (currentEditor) {
        var cellBox = getActiveCellPosition();
        if (currentEditor.show && currentEditor.hide) {
          if (!cellBox.visible) {
            currentEditor.hide();
          } else {
            currentEditor.show();
          }
        }

        if (currentEditor.position) {
          currentEditor.position(cellBox);
        }
      }
    }

    function getCellEditor() {
      return currentEditor;
    }

    function getActiveCell() {
      if (!activeCellNode) {
        return null;
      } else {
        return {row: activeRow, cell: activeCell};
      }
    }

    function getActiveCellNode() {
      return activeCellNode;
    }

    function scrollRowIntoView(row, doPaging) {
      var rowAtTop = row * options.rowHeight;
      var rowAtBottom = (row + 1) * options.rowHeight - viewportH + (viewportHasHScroll ? scrollbarDimensions.height : 0);

      // need to page down?
      if ((row + 1) * options.rowHeight > scrollTop + viewportH + offset) {
        scrollTo(doPaging ? rowAtTop : rowAtBottom);
        render();
      }
      // or page up?
      else if (row * options.rowHeight < scrollTop + offset) {
        scrollTo(doPaging ? rowAtBottom : rowAtTop);
        render();
      }
    }

    function getColspan(row, cell) {
      var metadata = data.getItemMetadata && data.getItemMetadata(row);
      if (!metadata || !metadata.columns) {
        return 1;
      }

      var columnData = metadata.columns[columns[cell].id] || metadata.columns[cell];
      var colspan = (columnData && columnData.colspan);
      if (colspan === "*") {
        colspan = columns.length - cell;
      }
      return (colspan || 1);
    }

    function findFirstFocusableCell(row) {
      var cell = 0;
      while (cell < columns.length) {
        if (canCellBeActive(row, cell)) {
          return cell;
        }
        cell += getColspan(row, cell);
      }
      return null;
    }

    function findLastFocusableCell(row) {
      var cell = 0;
      var lastFocusableCell = null;
      while (cell < columns.length) {
        if (canCellBeActive(row, cell)) {
          lastFocusableCell = cell;
        }
        cell += getColspan(row, cell);
      }
      return lastFocusableCell;
    }

    function gotoRight(row, cell, posX) {
      if (cell >= columns.length) {
        return null;
      }

      do {
        cell += getColspan(row, cell);
      }
      while (cell < columns.length && !canCellBeActive(row, cell));

      if (cell < columns.length) {
        return {
          "row": row,
          "cell": cell,
          "posX": cell
        };
      }
      return null;
    }

    function gotoLeft(row, cell, posX) {
      if (cell <= 0) {
        return null;
      }

      var firstFocusableCell = findFirstFocusableCell(row);
      if (firstFocusableCell === null || firstFocusableCell >= cell) {
        return null;
      }

      var prev = {
        "row": row,
        "cell": firstFocusableCell,
        "posX": firstFocusableCell
      };
      var pos;
      while (true) {
        pos = gotoRight(prev.row, prev.cell, prev.posX);
        if (!pos) {
          return null;
        }
        if (pos.cell >= cell) {
          return prev;
        }
        prev = pos;
      }
    }

    function gotoDown(row, cell, posX) {
      var prevCell;
      while (true) {
        if (++row >= getDataLength() + (options.enableAddRow ? 1 : 0)) {
          return null;
        }

        prevCell = cell = 0;
        while (cell <= posX) {
          prevCell = cell;
          cell += getColspan(row, cell);
        }

        if (canCellBeActive(row, prevCell)) {
          return {
            "row": row,
            "cell": prevCell,
            "posX": posX
          };
        }
      }
    }

    function gotoUp(row, cell, posX) {
      var prevCell;
      while (true) {
        if (--row < 0) {
          return null;
        }

        prevCell = cell = 0;
        while (cell <= posX) {
          prevCell = cell;
          cell += getColspan(row, cell);
        }

        if (canCellBeActive(row, prevCell)) {
          return {
            "row": row,
            "cell": prevCell,
            "posX": posX
          };
        }
      }
    }

    function gotoNext(row, cell, posX) {
      var pos = gotoRight(row, cell, posX);
      if (pos) {
        return pos;
      }

      var firstFocusableCell = null;
      while (++row < getDataLength() + (options.enableAddRow ? 1 : 0)) {
        firstFocusableCell = findFirstFocusableCell(row);
        if (firstFocusableCell !== null) {
          return {
            "row": row,
            "cell": firstFocusableCell,
            "posX": firstFocusableCell
          };
        }
      }
      return null;
    }

    function gotoPrev(row, cell, posX) {
      var pos;
      var lastSelectableCell;
      while (!pos) {
        pos = gotoLeft(row, cell, posX);
        if (pos) {
          break;
        }
        if (--row < 0) {
          return null;
        }

        cell = 0;
        lastSelectableCell = findLastFocusableCell(row);
        if (lastSelectableCell !== null) {
          pos = {
            "row": row,
            "cell": lastSelectableCell,
            "posX": lastSelectableCell
          };
        }
      }
      return pos;
    }

    function navigateRight() {
      navigate("right");
    }

    function navigateLeft() {
      navigate("left");
    }

    function navigateDown() {
      navigate("down");
    }

    function navigateUp() {
      navigate("up");
    }

    function navigateNext() {
      navigate("next");
    }

    function navigatePrev() {
      navigate("prev");
    }

    function navigate(dir) {
      if (!activeCellNode || !options.enableCellNavigation) {
        return;
      }
      if (!getEditorLock().commitCurrentEdit()) {
        return;
      }
      setFocus();

      var stepFunctions = {
        "up": gotoUp,
        "down": gotoDown,
        "left": gotoLeft,
        "right": gotoRight,
        "prev": gotoPrev,
        "next": gotoNext
      };
      var stepFn = stepFunctions[dir];
      var pos = stepFn(activeRow, activeCell, activePosX);
      if (pos) {
        var isAddNewRow = (pos.row == getDataLength());
        scrollRowIntoView(pos.row, !isAddNewRow);
        setActiveCellInternal(getCellNode(pos.row, pos.cell), isAddNewRow || options.autoEdit);
        activePosX = pos.posX;
      } else {
        setActiveCellInternal(getCellNode(activeRow, activeCell), (activeRow == getDataLength()) || options.autoEdit);
      }
    }

    function getCellNode(row, cell) {
      if (rowsCache[row]) {
        var cells = $(rowsCache[row]).children();
        var nodeCell;
        for (var i = 0; i < cells.length; i++) {
          nodeCell = getCellFromNode(cells[i]);
          if (nodeCell === cell) {
            return cells[i];
          } else if (nodeCell > cell) {
            return null;
          }

        }
      }
      return null;
    }

    function setActiveCell(row, cell) {
      if (!initialized) { return; }
      if (row > getDataLength() || row < 0 || cell >= columns.length || cell < 0) {
        return;
      }

      if (!options.enableCellNavigation) {
        return;
      }

      scrollRowIntoView(row, false);
      setActiveCellInternal(getCellNode(row, cell), false);
    }

    function canCellBeActive(row, cell) {
      if (!options.enableCellNavigation || row >= getDataLength() + (options.enableAddRow ? 1 : 0) ||
          row < 0 || cell >= columns.length || cell < 0) {
        return false;
      }

      var rowMetadata = data.getItemMetadata && data.getItemMetadata(row);
      if (rowMetadata && typeof rowMetadata.focusable === "boolean") {
        return rowMetadata.focusable;
      }

      var columnMetadata = rowMetadata && rowMetadata.columns;
      if (columnMetadata && columnMetadata[columns[cell].id] && typeof columnMetadata[columns[cell].id].focusable === "boolean") {
        return columnMetadata[columns[cell].id].focusable;
      }
      if (columnMetadata && columnMetadata[cell] && typeof columnMetadata[cell].focusable === "boolean") {
        return columnMetadata[cell].focusable;
      }

      if (typeof columns[cell].focusable === "boolean") {
        return columns[cell].focusable;
      }

      return true;
    }

    function canCellBeSelected(row, cell) {
      if (row >= getDataLength() || row < 0 || cell >= columns.length || cell < 0) {
        return false;
      }

      var rowMetadata = data.getItemMetadata && data.getItemMetadata(row);
      if (rowMetadata && typeof rowMetadata.selectable === "boolean") {
        return rowMetadata.selectable;
      }

      var columnMetadata = rowMetadata && rowMetadata.columns && (rowMetadata.columns[columns[cell].id] || rowMetadata.columns[cell]);
      if (columnMetadata && typeof columnMetadata.selectable === "boolean") {
        return columnMetadata.selectable;
      }

      if (typeof columns[cell].selectable === "boolean") {
        return columns[cell].selectable;
      }

      return true;
    }

    function gotoCell(row, cell, forceEdit) {
      if (!initialized) { return; }
      if (!canCellBeActive(row, cell)) {
        return;
      }

      if (!getEditorLock().commitCurrentEdit()) {
        return;
      }

      scrollRowIntoView(row, false);

      var newCell = getCellNode(row, cell);

      // if selecting the 'add new' row, start editing right away
      setActiveCellInternal(newCell, forceEdit || (row === getDataLength()) || options.autoEdit);

      // if no editor was created, set the focus back on the grid
      if (!currentEditor) {
        setFocus();
      }
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    // IEditor implementation for the editor lock

    function commitCurrentEdit() {
      var item = getDataItem(activeRow);
      var column = columns[activeCell];

      if (currentEditor) {
        if (currentEditor.isValueChanged()) {
          var validationResults = currentEditor.validate();

          if (validationResults.valid) {
            if (activeRow < getDataLength()) {
              var editCommand = {
                row: activeRow,
                cell: activeCell,
                editor: currentEditor,
                serializedValue: currentEditor.serializeValue(),
                prevSerializedValue: serializedEditorValue,
                execute: function () {
                  this.editor.applyValue(item, this.serializedValue);
                  updateRow(this.row);
                },
                undo: function () {
                  this.editor.applyValue(item, this.prevSerializedValue);
                  updateRow(this.row);
                }
              };

              if (options.editCommandHandler) {
                makeActiveCellNormal();
                options.editCommandHandler(item, column, editCommand);
              } else {
                editCommand.execute();
                makeActiveCellNormal();
              }

              trigger(self.onCellChange, {
                row: activeRow,
                cell: activeCell,
                item: item
              });
            } else {
              var newItem = {};
              currentEditor.applyValue(newItem, currentEditor.serializeValue());
              makeActiveCellNormal();
              trigger(self.onAddNewRow, {item: newItem, column: column});
            }

            // check whether the lock has been re-acquired by event handlers
            return !getEditorLock().isActive();
          } else {
            // TODO: remove and put in onValidationError handlers in examples
            $(activeCellNode).addClass("invalid");
            $(activeCellNode).stop(true, true).effect("highlight", {color: "red"}, 300);

            trigger(self.onValidationError, {
              editor: currentEditor,
              cellNode: activeCellNode,
              validationResults: validationResults,
              row: activeRow,
              cell: activeCell,
              column: column
            });

            currentEditor.focus();
            return false;
          }
        }

        makeActiveCellNormal();
      }
      return true;
    }

    function cancelCurrentEdit() {
      makeActiveCellNormal();
      return true;
    }

    function rowsToRanges(rows) {
      var ranges = [];
      var lastCell = columns.length - 1;
      for (var i = 0; i < rows.length; i++) {
        ranges.push(new Slick.Range(rows[i], 0, rows[i], lastCell));
      }
      return ranges;
    }

    function getSelectedRows() {
      if (!selectionModel) {
        throw "Selection model is not set";
      }
      return selectedRows;
    }

    function setSelectedRows(rows) {
      if (!selectionModel) {
        throw "Selection model is not set";
      }
      selectionModel.setSelectedRanges(rowsToRanges(rows));
    }


    //////////////////////////////////////////////////////////////////////////////////////////////
    // Debug

    this.debug = function () {
      var s = "";

      s += ("\n" + "counter_rows_rendered:  " + counter_rows_rendered);
      s += ("\n" + "counter_rows_removed:  " + counter_rows_removed);
      s += ("\n" + "renderedRows:  " + renderedRows);
      s += ("\n" + "numVisibleRows:  " + numVisibleRows);
      s += ("\n" + "maxSupportedCssHeight:  " + maxSupportedCssHeight);
      s += ("\n" + "n(umber of pages):  " + n);
      s += ("\n" + "(current) page:  " + page);
      s += ("\n" + "page height (ph):  " + ph);
      s += ("\n" + "scrollDir:  " + scrollDir);

      alert(s);
    };

    // a debug helper to be able to access private members
    this.eval = function (expr) {
      return eval(expr);
    };

    //////////////////////////////////////////////////////////////////////////////////////////////
    // Public API

    $.extend(this, {
      "slickGridVersion": "2.0",

      // Events
      "onScroll": new Slick.Event(),
      "onSort": new Slick.Event(),
      "onHeaderContextMenu": new Slick.Event(),
      "onHeaderClick": new Slick.Event(),
      "onMouseEnter": new Slick.Event(),
      "onMouseLeave": new Slick.Event(),
      "onClick": new Slick.Event(),
      "onDblClick": new Slick.Event(),
      "onContextMenu": new Slick.Event(),
      "onKeyDown": new Slick.Event(),
      "onAddNewRow": new Slick.Event(),
      "onValidationError": new Slick.Event(),
      "onViewportChanged": new Slick.Event(),
      "onColumnsReordered": new Slick.Event(),
      "onColumnsResized": new Slick.Event(),
      "onCellChange": new Slick.Event(),
      "onBeforeEditCell": new Slick.Event(),
      "onBeforeCellEditorDestroy": new Slick.Event(),
      "onBeforeDestroy": new Slick.Event(),
      "onActiveCellChanged": new Slick.Event(),
      "onActiveCellPositionChanged": new Slick.Event(),
      "onDragInit": new Slick.Event(),
      "onDragStart": new Slick.Event(),
      "onDrag": new Slick.Event(),
      "onDragEnd": new Slick.Event(),
      "onSelectedRowsChanged": new Slick.Event(),
      "onCellCssStylesChanged": new Slick.Event(),

      // Methods
      "registerPlugin": registerPlugin,
      "unregisterPlugin": unregisterPlugin,
      "getColumns": getColumns,
      "setColumns": setColumns,
      "getColumnIndex": getColumnIndex,
      "updateColumnHeader": updateColumnHeader,
      "setSortColumn": setSortColumn,
      "setSortColumns": setSortColumns,
      "getSortColumns": getSortColumns,
      "autosizeColumns": autosizeColumns,
      "getOptions": getOptions,
      "setOptions": setOptions,
      "getData": getData,
      "getDataLength": getDataLength,
      "getDataItem": getDataItem,
      "setData": setData,
      "getSelectionModel": getSelectionModel,
      "setSelectionModel": setSelectionModel,
      "getSelectedRows": getSelectedRows,
      "setSelectedRows": setSelectedRows,

      "render": render,
      "invalidate": invalidate,
      "invalidateRow": invalidateRow,
      "invalidateRows": invalidateRows,
      "invalidateAllRows": invalidateAllRows,
      "updateCell": updateCell,
      "updateRow": updateRow,
      "getViewport": getVisibleRange,
      "getRenderedRange": getRenderedRange,
      "resizeCanvas": resizeCanvas,
      "updateRowCount": updateRowCount,
      "scrollRowIntoView": scrollRowIntoView,
      "getCanvasNode": getCanvasNode,
      "focus": setFocus,

      "getCellFromPoint": getCellFromPoint,
      "getCellFromEvent": getCellFromEvent,
      "getActiveCell": getActiveCell,
      "setActiveCell": setActiveCell,
      "getActiveCellNode": getActiveCellNode,
      "getActiveCellPosition": getActiveCellPosition,
      "resetActiveCell": resetActiveCell,
      "editActiveCell": makeActiveCellEditable,
      "getCellEditor": getCellEditor,
      "getCellNode": getCellNode,
      "getCellNodeBox": getCellNodeBox,
      "canCellBeSelected": canCellBeSelected,
      "canCellBeActive": canCellBeActive,
      "navigatePrev": navigatePrev,
      "navigateNext": navigateNext,
      "navigateUp": navigateUp,
      "navigateDown": navigateDown,
      "navigateLeft": navigateLeft,
      "navigateRight": navigateRight,
      "gotoCell": gotoCell,
      "getTopPanel": getTopPanel,
      "showTopPanel": showTopPanel,
      "hideTopPanel": hideTopPanel,
      "showHeaderRowColumns": showHeaderRowColumns,
      "hideHeaderRowColumns": hideHeaderRowColumns,
      "getHeaderRow": getHeaderRow,
      "getHeaderRowColumn": getHeaderRowColumn,
      "getGridPosition": getGridPosition,
      "flashCell": flashCell,
      "addCellCssStyles": addCellCssStyles,
      "setCellCssStyles": setCellCssStyles,
      "removeCellCssStyles": removeCellCssStyles,
      "getCellCssStyles": getCellCssStyles,

      "init": finishInitialization,
      "destroy": destroy,

      // IEditor implementation
      "getEditorLock": getEditorLock,
      "getEditController": getEditController
    });

    init();
  }
}(jQuery));

/***
 * Contains basic SlickGrid formatters.
 * @module Formatters
 * @namespace Slick
 */

(function ($) {

	$.extend(true, window, {
		"Slick": {
			"Formatters": {
			"Hostname": HostnameFormatter,
			"Browser": BrowserFormatter,
			"Status": StatusFormatter,
			"Location": LocationFormatter,
			"Pages": PagesFormatter,
			"Referrer": ReferrerFormatter,
			"Seconds": SecondsFormatter,
			"Date": DateFormatter
			}
		}
	});

	function HostnameFormatter(row, cell, value, columnDef, dataContext) {
		return convertHostname(dataContext);
	}

	function BrowserFormatter(row, cell, value, columnDef, dataContext) {
		var file = '';
		file = convertBrowserIcon(value, true);
		image = "<img src='" + file + "'/>";
		return image;
	}
	
	function StatusFormatter(row, cell, value, columnDef, dataContext) {
		if (value < 0) {
			return 'Chat Ended';
		} else if (value > 0) {
			return 'Chatting';
		} else {
			return 'Browsing';
		}
	}
	
	function LocationFormatter(row, cell, value, columnDef, dataContext) {
		var location = convertCountry(dataContext),
			image = convertCountryIcon(value);
		
		if (location !== undefined) {
			image = "<span class='" + image + "' style='position:relative; top:3px; margin-right:5px; display:inline-block'></span><span>" + location + "</span>";
		}
			
		return image;
	}
	
	function PagesFormatter(row, cell, value, columnDef, dataContext) {
		return value.split(';').length;
	}
	
	function ReferrerFormatter(row, cell, value, columnDef, dataContext) {
		return convertReferrer(value);
	}
	
	function zeroFill(number, width) {
		width -= number.toString().length;
		if (width > 0) {
			return new Array(width + (/\./.test(number) ? 2 : 1) ).join('0') + number;
		}
		return number;
	}
	
	function SecondsFormatter(row, cell, value, columnDef, dataContext) {
		var hours = 0,
			minutes = 0,
			seconds = 0;
		
		seconds = parseInt(value, 10);
		minutes = seconds / 60;
		hours = parseInt(minutes / 60, 10);
		seconds = parseInt(seconds % 60, 10);
		minutes = parseInt(minutes % 60, 10);
		
		return zeroFill(hours, 2) + ':' + zeroFill(minutes, 2) + ':' + zeroFill(seconds, 2);
	}
	
	function DateFormatter(row, cell, value, columnDef, dataContext) {
		var date = new Date.parse(value);
		
		return date.toString('dddd MMM dd yyyy') + '<br/>' + date.toString('h:mm:ss tt');
	}
	
})(jQuery);

(function ($) {
  $.extend(true, window, {
    Slick: {
      Data: {
        DataView: DataView,
        Aggregators: {
          Avg: AvgAggregator,
          Min: MinAggregator,
          Max: MaxAggregator,
          Sum: SumAggregator
        }
      }
    }
  });


  /***
   * A sample Model implementation.
   * Provides a filtered view of the underlying data.
   *
   * Relies on the data item having an "id" property uniquely identifying it.
   */
  function DataView(options) {
    var self = this;

    var defaults = {
      groupItemMetadataProvider: null,
      inlineFilters: false
    };


    // private
    var idProperty = "ID";  // property holding a unique row id
    var items = [];         // data by index
    var rows = [];          // data by row
    var idxById = {};       // indexes by id
    var rowsById = null;    // rows by id; lazy-calculated
    var filter = null;      // filter function
    var updated = null;     // updated item ids
    var suspend = false;    // suspends the recalculation
    var sortAsc = true;
    var fastSortField;
    var sortComparer;
    var refreshHints = {};
    var prevRefreshHints = {};
    var filterArgs;
    var filteredItems = [];
    var compiledFilter;
    var compiledFilterWithCaching;
    var filterCache = [];

    // grouping
    var groupingGetter;
    var groupingGetterIsAFn;
    var groupingFormatter;
    var groupingComparer;
    var groups = [];
    var collapsedGroups = {};
    var aggregators;
    var aggregateCollapsed = false;
    var compiledAccumulators;

    var pagesize = 0;
    var pagenum = 0;
    var totalRows = 0;

    // events
    var onRowCountChanged = new Slick.Event();
    var onRowsChanged = new Slick.Event();
    var onPagingInfoChanged = new Slick.Event();

    options = $.extend(true, {}, defaults, options);


    function beginUpdate() {
      suspend = true;
    }

    function endUpdate() {
      suspend = false;
      refresh();
    }

    function setRefreshHints(hints) {
      refreshHints = hints;
    }

    function setFilterArgs(args) {
      filterArgs = args;
    }

    function updateIdxById(startingIndex) {
      startingIndex = startingIndex || 0;
      var id;
      for (var i = startingIndex, l = items.length; i < l; i++) {
        id = items[i][idProperty];
        if (id === undefined) {
          throw "Each data element must implement a unique 'id' property";
        }
        idxById[id] = i;
      }
    }

    function ensureIdUniqueness() {
      var id;
      for (var i = 0, l = items.length; i < l; i++) {
        id = items[i][idProperty];
        if (id === undefined || idxById[id] !== i) {
          throw "Each data element must implement a unique 'id' property";
        }
      }
    }

    function getItems() {
      return items;
    }

    function setItems(data, objectIdProperty) {
      if (objectIdProperty !== undefined) {
        idProperty = objectIdProperty;
      }
      items = filteredItems = data;
      idxById = {};
      updateIdxById();
      ensureIdUniqueness();
      refresh();
    }

    function setPagingOptions(args) {
      if (args.pageSize != undefined) {
        pagesize = args.pageSize;
        pagenum = pagesize ? Math.min(pagenum, Math.max(0, Math.ceil(totalRows / pagesize) - 1)) : 0;
      }

      if (args.pageNum != undefined) {
        pagenum = Math.min(args.pageNum, Math.max(0, Math.ceil(totalRows / pagesize) - 1));
      }

      onPagingInfoChanged.notify(getPagingInfo(), null, self);

      refresh();
    }

    function getPagingInfo() {
      var totalPages = pagesize ? Math.max(1, Math.ceil(totalRows / pagesize)) : 1;
      return {pageSize: pagesize, pageNum: pagenum, totalRows: totalRows, totalPages: totalPages};
    }

    function sort(comparer, ascending) {
      sortAsc = ascending;
      sortComparer = comparer;
      fastSortField = null;
      if (ascending === false) {
        items.reverse();
      }
      items.sort(comparer);
      if (ascending === false) {
        items.reverse();
      }
      idxById = {};
      updateIdxById();
      refresh();
    }

    /***
     * Provides a workaround for the extremely slow sorting in IE.
     * Does a [lexicographic] sort on a give column by temporarily overriding Object.prototype.toString
     * to return the value of that field and then doing a native Array.sort().
     */
    function fastSort(field, ascending) {
      sortAsc = ascending;
      fastSortField = field;
      sortComparer = null;
      var oldToString = Object.prototype.toString;
      Object.prototype.toString = (typeof field == "function") ? field : function () {
        return this[field]
      };
      // an extra reversal for descending sort keeps the sort stable
      // (assuming a stable native sort implementation, which isn't true in some cases)
      if (ascending === false) {
        items.reverse();
      }
      items.sort();
      Object.prototype.toString = oldToString;
      if (ascending === false) {
        items.reverse();
      }
      idxById = {};
      updateIdxById();
      refresh();
    }

    function reSort() {
      if (sortComparer) {
        sort(sortComparer, sortAsc);
      } else if (fastSortField) {
        fastSort(fastSortField, sortAsc);
      }
    }

    function setFilter(filterFn) {
      filter = filterFn;
      if (options.inlineFilters) {
        compiledFilter = compileFilter();
        compiledFilterWithCaching = compileFilterWithCaching();
      }
      refresh();
    }

    function groupBy(valueGetter, valueFormatter, sortComparer) {
      if (!options.groupItemMetadataProvider) {
        options.groupItemMetadataProvider = new Slick.Data.GroupItemMetadataProvider();
      }

      groupingGetter = valueGetter;
      groupingGetterIsAFn = typeof groupingGetter === "function";
      groupingFormatter = valueFormatter;
      groupingComparer = sortComparer;
      collapsedGroups = {};
      groups = [];
      refresh();
    }

    function setAggregators(groupAggregators, includeCollapsed) {
      aggregators = groupAggregators;
      aggregateCollapsed = (includeCollapsed !== undefined)
          ? includeCollapsed : aggregateCollapsed;

      // pre-compile accumulator loops
      compiledAccumulators = [];
      var idx = aggregators.length;
      while (idx--) {
        compiledAccumulators[idx] = compileAccumulatorLoop(aggregators[idx]);
      }

      refresh();
    }

    function getItemByIdx(i) {
      return items[i];
    }

    function getIdxById(id) {
      return idxById[id];
    }

    function ensureRowsByIdCache() {
      if (!rowsById) {
        rowsById = {};
        for (var i = 0, l = rows.length; i < l; i++) {
          rowsById[rows[i][idProperty]] = i;
        }
      }
    }

    function getRowById(id) {
      ensureRowsByIdCache();
      return rowsById[id];
    }

    function getItemById(id) {
      return items[idxById[id]];
    }

    function mapIdsToRows(idArray) {
      var rows = [];
      ensureRowsByIdCache();
      for (var i = 0; i < idArray.length; i++) {
        var row = rowsById[idArray[i]];
        if (row != null) {
          rows[rows.length] = row;
        }
      }
      return rows;
    }

    function mapRowsToIds(rowArray) {
      var ids = [];
      for (var i = 0; i < rowArray.length; i++) {
        if (rowArray[i] < rows.length) {
          ids[ids.length] = rows[rowArray[i]][idProperty];
        }
      }
      return ids;
    }

    function updateItem(id, item) {
      if (idxById[id] === undefined || id !== item[idProperty]) {
        throw "Invalid or non-matching id";
      }
      items[idxById[id]] = item;
      if (!updated) {
        updated = {};
      }
      updated[id] = true;
      refresh();
    }

    function insertItem(insertBefore, item) {
      items.splice(insertBefore, 0, item);
      updateIdxById(insertBefore);
      refresh();
    }

    function addItem(item) {
      items.push(item);
      updateIdxById(items.length - 1);
      refresh();
    }

    function deleteItem(id) {
      var idx = idxById[id];
      if (idx === undefined) {
        throw "Invalid id";
      }
      delete idxById[id];
      items.splice(idx, 1);
      updateIdxById(idx);
      refresh();
    }

    function getLength() {
      return rows.length;
    }

    function getItem(i) {
      return rows[i];
    }

    function getItemMetadata(i) {
      var item = rows[i];
      if (item === undefined) {
        return null;
      }

      // overrides for group rows
      if (item.__group) {
        return options.groupItemMetadataProvider.getGroupRowMetadata(item);
      }

      // overrides for totals rows
      if (item.__groupTotals) {
        return options.groupItemMetadataProvider.getTotalsRowMetadata(item);
      }

      return null;
    }

    function collapseGroup(groupingValue) {
      collapsedGroups[groupingValue] = true;
      refresh();
    }

    function expandGroup(groupingValue) {
      delete collapsedGroups[groupingValue];
      refresh();
    }

    function getGroups() {
      return groups;
    }

    function extractGroups(rows) {
      var group;
      var val;
      var groups = [];
      var groupsByVal = [];
      var r;

      for (var i = 0, l = rows.length; i < l; i++) {
        r = rows[i];
        val = (groupingGetterIsAFn) ? groupingGetter(r) : r[groupingGetter];
        val = val || 0;
        group = groupsByVal[val];
        if (!group) {
          group = new Slick.Group();
          group.count = 0;
          group.value = val;
          group.rows = [];
          groups[groups.length] = group;
          groupsByVal[val] = group;
        }

        group.rows[group.count++] = r;
      }

      return groups;
    }

    // TODO:  lazy totals calculation
    function calculateGroupTotals(group) {
      if (group.collapsed && !aggregateCollapsed) {
        return;
      }

      // TODO:  try moving iterating over groups into compiled accumulator
      var totals = new Slick.GroupTotals();
      var agg, idx = aggregators.length;
      while (idx--) {
        agg = aggregators[idx];
        agg.init();
        compiledAccumulators[idx].call(agg, group.rows);
        agg.storeResult(totals);
      }
      totals.group = group;
      group.totals = totals;
    }

    function calculateTotals(groups) {
      var idx = groups.length;
      while (idx--) {
        calculateGroupTotals(groups[idx]);
      }
    }

    function finalizeGroups(groups) {
      var idx = groups.length, g;
      while (idx--) {
        g = groups[idx];
        g.collapsed = (g.value in collapsedGroups);
        g.title = groupingFormatter ? groupingFormatter(g) : g.value;
      }
    }

    function flattenGroupedRows(groups) {
      var groupedRows = [], gl = 0, g;
      for (var i = 0, l = groups.length; i < l; i++) {
        g = groups[i];
        groupedRows[gl++] = g;

        if (!g.collapsed) {
          for (var j = 0, jj = g.rows.length; j < jj; j++) {
            groupedRows[gl++] = g.rows[j];
          }
        }

        if (g.totals && (!g.collapsed || aggregateCollapsed)) {
          groupedRows[gl++] = g.totals;
        }
      }
      return groupedRows;
    }

    function getFunctionInfo(fn) {
      var fnRegex = /^function[^(]*\(([^)]*)\)\s*{([\s\S]*)}$/;
      var matches = fn.toString().match(fnRegex);
      return {
        params: matches[1].split(","),
        body: matches[2]
      };
    }

    function compileAccumulatorLoop(aggregator) {
      var accumulatorInfo = getFunctionInfo(aggregator.accumulate);
      var fn = new Function(
          "_items",
          "for (var " + accumulatorInfo.params[0] + ", _i=0, _il=_items.length; _i<_il; _i++) {" +
              accumulatorInfo.params[0] + " = _items[_i]; " +
              accumulatorInfo.body +
              "}"
      );
      fn.displayName = fn.name = "compiledAccumulatorLoop";
      return fn;
    }

    function compileFilter() {
      var filterInfo = getFunctionInfo(filter);

      var filterBody = filterInfo.body
          .replace(/return false[;}]/gi, "{ continue _coreloop; }")
          .replace(/return true[;}]/gi, "{ _retval[_idx++] = $item$; continue _coreloop; }")
          .replace(/return ([^;}]+?);/gi,
          "{ if ($1) { _retval[_idx++] = $item$; }; continue _coreloop; }");

      // This preserves the function template code after JS compression,
      // so that replace() commands still work as expected.
      var tpl = [
        //"function(_items, _args) { ",
        "var _retval = [], _idx = 0; ",
        "var $item$, $args$ = _args; ",
        "_coreloop: ",
        "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ",
        "$item$ = _items[_i]; ",
        "$filter$; ",
        "} ",
        "return _retval; "
        //"}"
      ].join("");
      tpl = tpl.replace(/\$filter\$/gi, filterBody);
      tpl = tpl.replace(/\$item\$/gi, filterInfo.params[0]);
      tpl = tpl.replace(/\$args\$/gi, filterInfo.params[1]);

      var fn = new Function("_items,_args", tpl);
      fn.displayName = fn.name = "compiledFilter";
      return fn;
    }

    function compileFilterWithCaching() {
      var filterInfo = getFunctionInfo(filter);

      var filterBody = filterInfo.body
          .replace(/return false[;}]/gi, "{ continue _coreloop; }")
          .replace(/return true[;}]/gi, "{ _cache[_i] = true;_retval[_idx++] = $item$; continue _coreloop; }")
          .replace(/return ([^;}]+?);/gi,
          "{ if ((_cache[_i] = $1)) { _retval[_idx++] = $item$; }; continue _coreloop; }");

      // This preserves the function template code after JS compression,
      // so that replace() commands still work as expected.
      var tpl = [
        //"function(_items, _args, _cache) { ",
        "var _retval = [], _idx = 0; ",
        "var $item$, $args$ = _args; ",
        "_coreloop: ",
        "for (var _i = 0, _il = _items.length; _i < _il; _i++) { ",
        "$item$ = _items[_i]; ",
        "if (_cache[_i]) { ",
        "_retval[_idx++] = $item$; ",
        "continue _coreloop; ",
        "} ",
        "$filter$; ",
        "} ",
        "return _retval; "
        //"}"
      ].join("");
      tpl = tpl.replace(/\$filter\$/gi, filterBody);
      tpl = tpl.replace(/\$item\$/gi, filterInfo.params[0]);
      tpl = tpl.replace(/\$args\$/gi, filterInfo.params[1]);

      var fn = new Function("_items,_args,_cache", tpl);
      fn.displayName = fn.name = "compiledFilterWithCaching";
      return fn;
    }

    function uncompiledFilter(items, args) {
      var retval = [], idx = 0;

      for (var i = 0, ii = items.length; i < ii; i++) {
        if (filter(items[i], args)) {
          retval[idx++] = items[i];
        }
      }

      return retval;
    }

    function uncompiledFilterWithCaching(items, args, cache) {
      var retval = [], idx = 0, item;

      for (var i = 0, ii = items.length; i < ii; i++) {
        item = items[i];
        if (cache[i]) {
          retval[idx++] = item;
        } else if (filter(item, args)) {
          retval[idx++] = item;
          cache[i] = true;
        }
      }

      return retval;
    }

    function getFilteredAndPagedItems(items) {
      if (filter) {
        var batchFilter = options.inlineFilters ? compiledFilter : uncompiledFilter;
        var batchFilterWithCaching = options.inlineFilters ? compiledFilterWithCaching : uncompiledFilterWithCaching;

        if (refreshHints.isFilterNarrowing) {
          filteredItems = batchFilter(filteredItems, filterArgs);
        } else if (refreshHints.isFilterExpanding) {
          filteredItems = batchFilterWithCaching(items, filterArgs, filterCache);
        } else if (!refreshHints.isFilterUnchanged) {
          filteredItems = batchFilter(items, filterArgs);
        }
      } else {
        // special case:  if not filtering and not paging, the resulting
        // rows collection needs to be a copy so that changes due to sort
        // can be caught
        filteredItems = pagesize ? items : items.concat();
      }

      // get the current page
      var paged;
      if (pagesize) {
        if (filteredItems.length < pagenum * pagesize) {
          pagenum = Math.floor(filteredItems.length / pagesize);
        }
        paged = filteredItems.slice(pagesize * pagenum, pagesize * pagenum + pagesize);
      } else {
        paged = filteredItems;
      }

      return {totalRows: filteredItems.length, rows: paged};
    }

    function getRowDiffs(rows, newRows) {
      var item, r, eitherIsNonData, diff = [];
      var from = 0, to = newRows.length;

      if (refreshHints && refreshHints.ignoreDiffsBefore) {
        from = Math.max(0,
            Math.min(newRows.length, refreshHints.ignoreDiffsBefore));
      }

      if (refreshHints && refreshHints.ignoreDiffsAfter) {
        to = Math.min(newRows.length,
            Math.max(0, refreshHints.ignoreDiffsAfter));
      }

      for (var i = from, rl = rows.length; i < to; i++) {
        if (i >= rl) {
          diff[diff.length] = i;
        } else {
          item = newRows[i];
          r = rows[i];

          if ((groupingGetter && (eitherIsNonData = (item.__nonDataRow) || (r.__nonDataRow)) &&
              item.__group !== r.__group ||
              item.__updated ||
              item.__group && !item.equals(r))
              || (aggregators && eitherIsNonData &&
              // no good way to compare totals since they are arbitrary DTOs
              // deep object comparison is pretty expensive
              // always considering them 'dirty' seems easier for the time being
              (item.__groupTotals || r.__groupTotals))
              || item[idProperty] != r[idProperty]
              || (updated && updated[item[idProperty]])
              ) {
            diff[diff.length] = i;
          }
        }
      }
      return diff;
    }

    function recalc(_items) {
      rowsById = null;

      if (refreshHints.isFilterNarrowing != prevRefreshHints.isFilterNarrowing ||
          refreshHints.isFilterExpanding != prevRefreshHints.isFilterExpanding) {
        filterCache = [];
      }

      var filteredItems = getFilteredAndPagedItems(_items);
      totalRows = filteredItems.totalRows;
      var newRows = filteredItems.rows;

      groups = [];
      if (groupingGetter != null) {
        groups = extractGroups(newRows);
        if (groups.length) {
          finalizeGroups(groups);
          if (aggregators) {
            calculateTotals(groups);
          }
          groups.sort(groupingComparer);
          newRows = flattenGroupedRows(groups);
        }
      }

      var diff = getRowDiffs(rows, newRows);

      rows = newRows;

      return diff;
    }

    function refresh() {
      if (suspend) {
        return;
      }

      var countBefore = rows.length;
      var totalRowsBefore = totalRows;

      var diff = recalc(items, filter); // pass as direct refs to avoid closure perf hit

      // if the current page is no longer valid, go to last page and recalc
      // we suffer a performance penalty here, but the main loop (recalc) remains highly optimized
      if (pagesize && totalRows < pagenum * pagesize) {
        pagenum = Math.max(0, Math.ceil(totalRows / pagesize) - 1);
        diff = recalc(items, filter);
      }

      updated = null;
      prevRefreshHints = refreshHints;
      refreshHints = {};

      if (totalRowsBefore != totalRows) {
        onPagingInfoChanged.notify(getPagingInfo(), null, self);
      }
      if (countBefore != rows.length) {
        onRowCountChanged.notify({previous: countBefore, current: rows.length}, null, self);
      }
      if (diff.length > 0) {
        onRowsChanged.notify({rows: diff}, null, self);
      }
    }

    function syncGridSelection(grid, preserveHidden) {
      var self = this;
      var selectedRowIds = self.mapRowsToIds(grid.getSelectedRows());;
      var inHandler;

      grid.onSelectedRowsChanged.subscribe(function(e, args) {
        if (inHandler) { return; }
        selectedRowIds = self.mapRowsToIds(grid.getSelectedRows());
      });

      this.onRowsChanged.subscribe(function(e, args) {
        if (selectedRowIds.length > 0) {
          inHandler = true;
          var selectedRows = self.mapIdsToRows(selectedRowIds);
          if (!preserveHidden) {
            selectedRowIds = self.mapRowsToIds(selectedRows);
          }
          grid.setSelectedRows(selectedRows);
          inHandler = false;
        }
      });
    }

    function syncGridCellCssStyles(grid, key) {
      var hashById;
      var inHandler;

      // since this method can be called after the cell styles have been set,
      // get the existing ones right away
      storeCellCssStyles(grid.getCellCssStyles(key));

      function storeCellCssStyles(hash) {
        hashById = {};
        for (var row in hash) {
          var id = rows[row][idProperty];
          hashById[id] = hash[row];
        }
      }

      grid.onCellCssStylesChanged.subscribe(function(e, args) {
        if (inHandler) { return; }
        if (key != args.key) { return; }
        if (args.hash) {
          storeCellCssStyles(args.hash);
        }
      });

      this.onRowsChanged.subscribe(function(e, args) {
        if (hashById) {
          inHandler = true;
          ensureRowsByIdCache();
          var newHash = {};
          for (var id in hashById) {
            var row = rowsById[id];
            if (row != undefined) {
              newHash[row] = hashById[id];
            }
          }
          grid.setCellCssStyles(key, newHash);
          inHandler = false;
        }
      });
    }

    return {
      // methods
      "beginUpdate": beginUpdate,
      "endUpdate": endUpdate,
      "setPagingOptions": setPagingOptions,
      "getPagingInfo": getPagingInfo,
      "getItems": getItems,
      "setItems": setItems,
      "setFilter": setFilter,
      "sort": sort,
      "fastSort": fastSort,
      "reSort": reSort,
      "groupBy": groupBy,
      "setAggregators": setAggregators,
      "collapseGroup": collapseGroup,
      "expandGroup": expandGroup,
      "getGroups": getGroups,
      "getIdxById": getIdxById,
      "getRowById": getRowById,
      "getItemById": getItemById,
      "getItemByIdx": getItemByIdx,
      "mapRowsToIds": mapRowsToIds,
      "mapIdsToRows": mapIdsToRows,
      "setRefreshHints": setRefreshHints,
      "setFilterArgs": setFilterArgs,
      "refresh": refresh,
      "updateItem": updateItem,
      "insertItem": insertItem,
      "addItem": addItem,
      "deleteItem": deleteItem,
      "syncGridSelection": syncGridSelection,
      "syncGridCellCssStyles": syncGridCellCssStyles,

      // data provider methods
      "getLength": getLength,
      "getItem": getItem,
      "getItemMetadata": getItemMetadata,

      // events
      "onRowCountChanged": onRowCountChanged,
      "onRowsChanged": onRowsChanged,
      "onPagingInfoChanged": onPagingInfoChanged
    };
  }

  function AvgAggregator(field) {
    this.field_ = field;

    this.init = function () {
      this.count_ = 0;
      this.nonNullCount_ = 0;
      this.sum_ = 0;
    };

    this.accumulate = function (item) {
      var val = item[this.field_];
      this.count_++;
      if (val != null && val != "" && val != NaN) {
        this.nonNullCount_++;
        this.sum_ += parseFloat(val);
      }
    };

    this.storeResult = function (groupTotals) {
      if (!groupTotals.avg) {
        groupTotals.avg = {};
      }
      if (this.nonNullCount_ != 0) {
        groupTotals.avg[this.field_] = this.sum_ / this.nonNullCount_;
      }
    };
  }

  function MinAggregator(field) {
    this.field_ = field;

    this.init = function () {
      this.min_ = null;
    };

    this.accumulate = function (item) {
      var val = item[this.field_];
      if (val != null && val != "" && val != NaN) {
        if (this.min_ == null || val < this.min_) {
          this.min_ = val;
        }
      }
    };

    this.storeResult = function (groupTotals) {
      if (!groupTotals.min) {
        groupTotals.min = {};
      }
      groupTotals.min[this.field_] = this.min_;
    }
  }

  function MaxAggregator(field) {
    this.field_ = field;

    this.init = function () {
      this.max_ = null;
    };

    this.accumulate = function (item) {
      var val = item[this.field_];
      if (val != null && val != "" && val != NaN) {
        if (this.max_ == null || val > this.max_) {
          this.max_ = val;
        }
      }
    };

    this.storeResult = function (groupTotals) {
      if (!groupTotals.max) {
        groupTotals.max = {};
      }
      groupTotals.max[this.field_] = this.max_;
    }
  }

  function SumAggregator(field) {
    this.field_ = field;

    this.init = function () {
      this.sum_ = null;
    };

    this.accumulate = function (item) {
      var val = item[this.field_];
      if (val != null && val != "" && val != NaN) {
        this.sum_ += parseFloat(val);
      }
    };

    this.storeResult = function (groupTotals) {
      if (!groupTotals.sum) {
        groupTotals.sum = {};
      }
      groupTotals.sum[this.field_] = this.sum_;
    }
  }

  // TODO:  add more built-in aggregators
  // TODO:  merge common aggregators in one to prevent needles iterating

})(jQuery);

(function ($) {
  $.extend(true, window, {
    Slick: {
      Data: {
        GroupItemMetadataProvider: GroupItemMetadataProvider
      }
    }
  });


  /***
   * Provides item metadata for group (Slick.Group) and totals (Slick.Totals) rows produced by the DataView.
   * This metadata overrides the default behavior and formatting of those rows so that they appear and function
   * correctly when processed by the grid.
   *
   * This class also acts as a grid plugin providing event handlers to expand & collapse groups.
   * If "grid.registerPlugin(...)" is not called, expand & collapse will not work.
   *
   * @class GroupItemMetadataProvider
   * @module Data
   * @namespace Slick.Data
   * @constructor
   * @param options
   */
  function GroupItemMetadataProvider(options) {
    var _grid;
    var _defaults = {
      groupCssClass: "slick-group",
      totalsCssClass: "slick-group-totals",
      groupFocusable: true,
      totalsFocusable: false,
      toggleCssClass: "slick-group-toggle",
      toggleExpandedCssClass: "expanded",
      toggleCollapsedCssClass: "collapsed",
      enableExpandCollapse: true
    };

    options = $.extend(true, {}, _defaults, options);


    function defaultGroupCellFormatter(row, cell, value, columnDef, item) {
      if (!options.enableExpandCollapse) {
        return item.title;
      }

      return "<span class='" + options.toggleCssClass + " " +
          (item.collapsed ? options.toggleCollapsedCssClass : options.toggleExpandedCssClass) +
          "'></span>" + item.title;
    }

    function defaultTotalsCellFormatter(row, cell, value, columnDef, item) {
      return (columnDef.groupTotalsFormatter && columnDef.groupTotalsFormatter(item, columnDef)) || "";
    }


    function init(grid) {
      _grid = grid;
      _grid.onClick.subscribe(handleGridClick);
      _grid.onKeyDown.subscribe(handleGridKeyDown);

    }

    function destroy() {
      if (_grid) {
        _grid.onClick.unsubscribe(handleGridClick);
        _grid.onKeyDown.unsubscribe(handleGridKeyDown);
      }
    }

    function handleGridClick(e, args) {
      var item = this.getDataItem(args.row);
      if (item && item instanceof Slick.Group && $(e.target).hasClass(options.toggleCssClass)) {
        if (item.collapsed) {
          this.getData().expandGroup(item.value);
        }
        else {
          this.getData().collapseGroup(item.value);
        }

        e.stopImmediatePropagation();
        e.preventDefault();
      }
    }

    // TODO:  add -/+ handling
    function handleGridKeyDown(e, args) {
      if (options.enableExpandCollapse && (e.which == $.ui.keyCode.SPACE)) {
        var activeCell = this.getActiveCell();
        if (activeCell) {
          var item = this.getDataItem(activeCell.row);
          if (item && item instanceof Slick.Group) {
            if (item.collapsed) {
              this.getData().expandGroup(item.value);
            }
            else {
              this.getData().collapseGroup(item.value);
            }

            e.stopImmediatePropagation();
            e.preventDefault();
          }
        }
      }
    }

    function getGroupRowMetadata(item) {
      return {
        selectable: false,
        focusable: options.groupFocusable,
        cssClasses: options.groupCssClass,
        columns: {
          0: {
            colspan: "*",
            formatter: defaultGroupCellFormatter,
            editor: null
          }
        }
      };
    }

    function getTotalsRowMetadata(item) {
      return {
        selectable: false,
        focusable: options.totalsFocusable,
        cssClasses: options.totalsCssClass,
        formatter: defaultTotalsCellFormatter,
        editor: null
      };
    }


    return {
      "init": init,
      "destroy": destroy,
      "getGroupRowMetadata": getGroupRowMetadata,
      "getTotalsRowMetadata": getTotalsRowMetadata
    };
  }
})(jQuery);

(function ($) {
  // register namespace
  $.extend(true, window, {
    "Slick": {
      "RowSelectionModel": RowSelectionModel
    }
  });

  function RowSelectionModel(options) {
    var _grid;
    var _ranges = [];
    var _self = this;
    var _handler = new Slick.EventHandler();
    var _inHandler;
    var _options;
    var _defaults = {
      selectActiveRow: true
    };

    function init(grid) {
      _options = $.extend(true, {}, _defaults, options);
      _grid = grid;
      _handler.subscribe(_grid.onActiveCellChanged,
          wrapHandler(handleActiveCellChange));
      _handler.subscribe(_grid.onKeyDown,
          wrapHandler(handleKeyDown));
      _handler.subscribe(_grid.onClick,
          wrapHandler(handleClick));
    }

    function destroy() {
      _handler.unsubscribeAll();
    }

    function wrapHandler(handler) {
      return function () {
        if (!_inHandler) {
          _inHandler = true;
          handler.apply(this, arguments);
          _inHandler = false;
        }
      };
    }

    function rangesToRows(ranges) {
      var rows = [];
      for (var i = 0; i < ranges.length; i++) {
        for (var j = ranges[i].fromRow; j <= ranges[i].toRow; j++) {
          rows.push(j);
        }
      }
      return rows;
    }

    function rowsToRanges(rows) {
      var ranges = [];
      var lastCell = _grid.getColumns().length - 1;
      for (var i = 0; i < rows.length; i++) {
        ranges.push(new Slick.Range(rows[i], 0, rows[i], lastCell));
      }
      return ranges;
    }

    function getRowsRange(from, to) {
      var i, rows = [];
      for (i = from; i <= to; i++) {
        rows.push(i);
      }
      for (i = to; i < from; i++) {
        rows.push(i);
      }
      return rows;
    }

    function getSelectedRows() {
      return rangesToRows(_ranges);
    }

    function setSelectedRows(rows) {
      setSelectedRanges(rowsToRanges(rows));
    }

    function setSelectedRanges(ranges) {
      _ranges = ranges;
      _self.onSelectedRangesChanged.notify(_ranges);
    }

    function getSelectedRanges() {
      return _ranges;
    }

    function handleActiveCellChange(e, data) {
      if (_options.selectActiveRow) {
        setSelectedRanges([new Slick.Range(data.row, 0, data.row, _grid.getColumns().length - 1)]);
      }
    }

    function handleKeyDown(e) {
      var activeRow = _grid.getActiveCell();
      if (activeRow && e.shiftKey && !e.ctrlKey && !e.altKey && !e.metaKey && (e.which == 38 || e.which == 40)) {
        var selectedRows = getSelectedRows();
        selectedRows.sort(function (x, y) {
          return x - y
        });

        if (!selectedRows.length) {
          selectedRows = [activeRow.row];
        }

        var top = selectedRows[0];
        var bottom = selectedRows[selectedRows.length - 1];
        var active;

        if (e.which == 40) {
          active = activeRow.row < bottom || top == bottom ? ++bottom : ++top;
        } else {
          active = activeRow.row < bottom ? --bottom : --top;
        }

        if (active >= 0 && active < _grid.getDataLength()) {
          _grid.scrollRowIntoView(active);
          _ranges = rowsToRanges(getRowsRange(top, bottom));
          setSelectedRanges(_ranges);
        }

        e.preventDefault();
        e.stopPropagation();
      }
    }

    function handleClick(e) {
      var cell = _grid.getCellFromEvent(e);
      if (!cell || !_grid.canCellBeActive(cell.row, cell.cell)) {
        return false;
      }

      var selection = rangesToRows(_ranges);
      var idx = $.inArray(cell.row, selection);

      if (!e.ctrlKey && !e.shiftKey && !e.metaKey) {
        return false;
      }
      else if (_grid.getOptions().multiSelect) {
        if (idx === -1 && (e.ctrlKey || e.metaKey)) {
          selection.push(cell.row);
          _grid.setActiveCell(cell.row, cell.cell);
        } else if (idx !== -1 && (e.ctrlKey || e.metaKey)) {
          selection = $.grep(selection, function (o, i) {
            return (o !== cell.row);
          });
          _grid.setActiveCell(cell.row, cell.cell);
        } else if (selection.length && e.shiftKey) {
          var last = selection.pop();
          var from = Math.min(cell.row, last);
          var to = Math.max(cell.row, last);
          selection = [];
          for (var i = from; i <= to; i++) {
            if (i !== last) {
              selection.push(i);
            }
          }
          selection.push(last);
          _grid.setActiveCell(cell.row, cell.cell);
        }
      }

      _ranges = rowsToRanges(selection);
      setSelectedRanges(_ranges);
      e.stopImmediatePropagation();

      return true;
    }

    $.extend(this, {
      "getSelectedRows": getSelectedRows,
      "setSelectedRows": setSelectedRows,

      "getSelectedRanges": getSelectedRanges,
      "setSelectedRanges": setSelectedRanges,

      "init": init,
      "destroy": destroy,

      "onSelectedRangesChanged": new Slick.Event()
    });
  }
})(jQuery);

/*
 * jQuery File Upload Plugin 5.13
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2010, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint nomen: true, unparam: true, regexp: true */
/*global define, window, document, Blob, FormData, location */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define([
            'jquery',
            'jquery.ui.widget'
        ], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // The FileReader API is not actually used, but works as feature detection,
    // as e.g. Safari supports XHR file uploads via the FormData API,
    // but not non-multipart XHR file uploads:
    $.support.xhrFileUpload = !!(window.XMLHttpRequestUpload && window.FileReader);
    $.support.xhrFormDataFileUpload = !!window.FormData;

    // The fileupload widget listens for change events on file input fields defined
    // via fileInput setting and paste or drop events of the given dropZone.
    // In addition to the default jQuery Widget methods, the fileupload widget
    // exposes the "add" and "send" methods, to add or directly send files using
    // the fileupload API.
    // By default, files added via file input selection, paste, drag & drop or
    // "add" method are uploaded immediately, but it is possible to override
    // the "add" callback option to queue file uploads.
    $.widget('blueimp.fileupload', {

        options: {
            // The namespace used for event handler binding on the dropZone and
            // fileInput collections.
            // If not set, the name of the widget ("fileupload") is used.
            namespace: undefined,
            // The drop target collection, by the default the complete document.
            // Set to null or an empty collection to disable drag & drop support:
            dropZone: $(document),
            // The file input field collection, that is listened for change events.
            // If undefined, it is set to the file input fields inside
            // of the widget element on plugin initialization.
            // Set to null or an empty collection to disable the change listener.
            fileInput: undefined,
            // By default, the file input field is replaced with a clone after
            // each input field change event. This is required for iframe transport
            // queues and allows change events to be fired for the same file
            // selection, but can be disabled by setting the following option to false:
            replaceFileInput: true,
            // The parameter name for the file form data (the request argument name).
            // If undefined or empty, the name property of the file input field is
            // used, or "files[]" if the file input name property is also empty,
            // can be a string or an array of strings:
            paramName: undefined,
            // By default, each file of a selection is uploaded using an individual
            // request for XHR type uploads. Set to false to upload file
            // selections in one request each:
            singleFileUploads: true,
            // To limit the number of files uploaded with one XHR request,
            // set the following option to an integer greater than 0:
            limitMultiFileUploads: undefined,
            // Set the following option to true to issue all file upload requests
            // in a sequential order:
            sequentialUploads: false,
            // To limit the number of concurrent uploads,
            // set the following option to an integer greater than 0:
            limitConcurrentUploads: undefined,
            // Set the following option to true to force iframe transport uploads:
            forceIframeTransport: false,
            // Set the following option to the location of a redirect url on the
            // origin server, for cross-domain iframe transport uploads:
            redirect: undefined,
            // The parameter name for the redirect url, sent as part of the form
            // data and set to 'redirect' if this option is empty:
            redirectParamName: undefined,
            // Set the following option to the location of a postMessage window,
            // to enable postMessage transport uploads:
            postMessage: undefined,
            // By default, XHR file uploads are sent as multipart/form-data.
            // The iframe transport is always using multipart/form-data.
            // Set to false to enable non-multipart XHR uploads:
            multipart: true,
            // To upload large files in smaller chunks, set the following option
            // to a preferred maximum chunk size. If set to 0, null or undefined,
            // or the browser does not support the required Blob API, files will
            // be uploaded as a whole.
            maxChunkSize: undefined,
            // When a non-multipart upload or a chunked multipart upload has been
            // aborted, this option can be used to resume the upload by setting
            // it to the size of the already uploaded bytes. This option is most
            // useful when modifying the options object inside of the "add" or
            // "send" callbacks, as the options are cloned for each file upload.
            uploadedBytes: undefined,
            // By default, failed (abort or error) file uploads are removed from the
            // global progress calculation. Set the following option to false to
            // prevent recalculating the global progress data:
            recalculateProgress: true,
            // Interval in milliseconds to calculate and trigger progress events:
            progressInterval: 100,
            // Interval in milliseconds to calculate progress bitrate:
            bitrateInterval: 500,

            // Additional form data to be sent along with the file uploads can be set
            // using this option, which accepts an array of objects with name and
            // value properties, a function returning such an array, a FormData
            // object (for XHR file uploads), or a simple object.
            // The form of the first fileInput is given as parameter to the function:
            formData: function (form) {
                return form.serializeArray();
            },

            // The add callback is invoked as soon as files are added to the fileupload
            // widget (via file input selection, drag & drop, paste or add API call).
            // If the singleFileUploads option is enabled, this callback will be
            // called once for each file in the selection for XHR file uplaods, else
            // once for each file selection.
            // The upload starts when the submit method is invoked on the data parameter.
            // The data object contains a files property holding the added files
            // and allows to override plugin options as well as define ajax settings.
            // Listeners for this callback can also be bound the following way:
            // .bind('fileuploadadd', func);
            // data.submit() returns a Promise object and allows to attach additional
            // handlers using jQuery's Deferred callbacks:
            // data.submit().done(func).fail(func).always(func);
            add: function (e, data) {
                data.submit();
            },

            // Other callbacks:
            // Callback for the submit event of each file upload:
            // submit: function (e, data) {}, // .bind('fileuploadsubmit', func);
            // Callback for the start of each file upload request:
            // send: function (e, data) {}, // .bind('fileuploadsend', func);
            // Callback for successful uploads:
            // done: function (e, data) {}, // .bind('fileuploaddone', func);
            // Callback for failed (abort or error) uploads:
            // fail: function (e, data) {}, // .bind('fileuploadfail', func);
            // Callback for completed (success, abort or error) requests:
            // always: function (e, data) {}, // .bind('fileuploadalways', func);
            // Callback for upload progress events:
            // progress: function (e, data) {}, // .bind('fileuploadprogress', func);
            // Callback for global upload progress events:
            // progressall: function (e, data) {}, // .bind('fileuploadprogressall', func);
            // Callback for uploads start, equivalent to the global ajaxStart event:
            // start: function (e) {}, // .bind('fileuploadstart', func);
            // Callback for uploads stop, equivalent to the global ajaxStop event:
            // stop: function (e) {}, // .bind('fileuploadstop', func);
            // Callback for change events of the fileInput collection:
            // change: function (e, data) {}, // .bind('fileuploadchange', func);
            // Callback for paste events to the dropZone collection:
            // paste: function (e, data) {}, // .bind('fileuploadpaste', func);
            // Callback for drop events of the dropZone collection:
            // drop: function (e, data) {}, // .bind('fileuploaddrop', func);
            // Callback for dragover events of the dropZone collection:
            // dragover: function (e) {}, // .bind('fileuploaddragover', func);

            // The plugin options are used as settings object for the ajax calls.
            // The following are jQuery ajax settings required for the file uploads:
            processData: false,
            contentType: false,
            cache: false
        },

        // A list of options that require a refresh after assigning a new value:
        _refreshOptionsList: [
            'namespace',
            'dropZone',
            'fileInput',
            'multipart',
            'forceIframeTransport'
        ],

        _BitrateTimer: function () {
            this.timestamp = +(new Date());
            this.loaded = 0;
            this.bitrate = 0;
            this.getBitrate = function (now, loaded, interval) {
                var timeDiff = now - this.timestamp;
                if (!this.bitrate || !interval || timeDiff > interval) {
                    this.bitrate = (loaded - this.loaded) * (1000 / timeDiff) * 8;
                    this.loaded = loaded;
                    this.timestamp = now;
                }
                return this.bitrate;
            };
        },

        _isXHRUpload: function (options) {
            return !options.forceIframeTransport &&
                ((!options.multipart && $.support.xhrFileUpload) ||
                $.support.xhrFormDataFileUpload);
        },

        _getFormData: function (options) {
            var formData;
            if (typeof options.formData === 'function') {
                return options.formData(options.form);
            }
			if ($.isArray(options.formData)) {
                return options.formData;
            }
			if (options.formData) {
                formData = [];
                $.each(options.formData, function (name, value) {
                    formData.push({name: name, value: value});
                });
                return formData;
            }
            return [];
        },

        _getTotal: function (files) {
            var total = 0;
            $.each(files, function (index, file) {
                total += file.size || 1;
            });
            return total;
        },

        _onProgress: function (e, data) {
            if (e.lengthComputable) {
                var now = +(new Date()),
                    total,
                    loaded;
                if (data._time && data.progressInterval &&
                        (now - data._time < data.progressInterval) &&
                        e.loaded !== e.total) {
                    return;
                }
                data._time = now;
                total = data.total || this._getTotal(data.files);
                loaded = parseInt(
                    e.loaded / e.total * (data.chunkSize || total),
                    10
                ) + (data.uploadedBytes || 0);
                this._loaded += loaded - (data.loaded || data.uploadedBytes || 0);
                data.lengthComputable = true;
                data.loaded = loaded;
                data.total = total;
                data.bitrate = data._bitrateTimer.getBitrate(
                    now,
                    loaded,
                    data.bitrateInterval
                );
                // Trigger a custom progress event with a total data property set
                // to the file size(s) of the current upload and a loaded data
                // property calculated accordingly:
                this._trigger('progress', e, data);
                // Trigger a global progress event for all current file uploads,
                // including ajax calls queued for sequential file uploads:
                this._trigger('progressall', e, {
                    lengthComputable: true,
                    loaded: this._loaded,
                    total: this._total,
                    bitrate: this._bitrateTimer.getBitrate(
                        now,
                        this._loaded,
                        data.bitrateInterval
                    )
                });
            }
        },

        _initProgressListener: function (options) {
            var that = this,
                xhr = options.xhr ? options.xhr() : $.ajaxSettings.xhr();
            // Accesss to the native XHR object is required to add event listeners
            // for the upload progress event:
            if (xhr.upload) {
                $(xhr.upload).bind('progress', function (e) {
                    var oe = e.originalEvent;
                    // Make sure the progress event properties get copied over:
                    e.lengthComputable = oe.lengthComputable;
                    e.loaded = oe.loaded;
                    e.total = oe.total;
                    that._onProgress(e, options);
                });
                options.xhr = function () {
                    return xhr;
                };
            }
        },

        _initXHRData: function (options) {
            var formData,
                file = options.files[0],
                // Ignore non-multipart setting if not supported:
                multipart = options.multipart || !$.support.xhrFileUpload,
                paramName = options.paramName[0];
            if (!multipart || options.blob) {
                // For non-multipart uploads and chunked uploads,
                // file meta data is not part of the request body,
                // so we transmit this data as part of the HTTP headers.
                // For cross domain requests, these headers must be allowed
                // via Access-Control-Allow-Headers or removed using
                // the beforeSend callback:
                options.headers = $.extend(options.headers, {
                    'X-File-Name': file.name,
                    'X-File-Type': file.type,
                    'X-File-Size': file.size
                });
                if (!options.blob) {
                    // Non-chunked non-multipart upload:
                    options.contentType = file.type;
                    options.data = file;
                } else if (!multipart) {
                    // Chunked non-multipart upload:
                    options.contentType = 'application/octet-stream';
                    options.data = options.blob;
                }
            }
            if (multipart && $.support.xhrFormDataFileUpload) {
                if (options.postMessage) {
                    // window.postMessage does not allow sending FormData
                    // objects, so we just add the File/Blob objects to
                    // the formData array and let the postMessage window
                    // create the FormData object out of this array:
                    formData = this._getFormData(options);
                    if (options.blob) {
                        formData.push({
                            name: paramName,
                            value: options.blob
                        });
                    } else {
                        $.each(options.files, function (index, file) {
                            formData.push({
                                name: options.paramName[index] || paramName,
                                value: file
                            });
                        });
                    }
                } else {
                    if (options.formData instanceof FormData) {
                        formData = options.formData;
                    } else {
                        formData = new FormData();
                        $.each(this._getFormData(options), function (index, field) {
                            formData.append(field.name, field.value);
                        });
                    }
                    if (options.blob) {
                        formData.append(paramName, options.blob, file.name);
                    } else {
                        $.each(options.files, function (index, file) {
                            // File objects are also Blob instances.
                            // This check allows the tests to run with
                            // dummy objects:
                            if (file instanceof Blob) {
                                formData.append(
                                    options.paramName[index] || paramName,
                                    file,
                                    file.name
                                );
                            }
                        });
                    }
                }
                options.data = formData;
            }
            // Blob reference is not needed anymore, free memory:
            options.blob = null;
        },

        _initIframeSettings: function (options) {
            // Setting the dataType to iframe enables the iframe transport:
            options.dataType = 'iframe ' + (options.dataType || '');
            // The iframe transport accepts a serialized array as form data:
            options.formData = this._getFormData(options);
            // Add redirect url to form data on cross-domain uploads:
            if (options.redirect && $('<a></a>').prop('href', options.url)
                    .prop('host') !== location.host) {
                options.formData.push({
                    name: options.redirectParamName || 'redirect',
                    value: options.redirect
                });
            }
        },

        _initDataSettings: function (options) {
            if (this._isXHRUpload(options)) {
                if (!this._chunkedUpload(options, true)) {
                    if (!options.data) {
                        this._initXHRData(options);
                    }
                    this._initProgressListener(options);
                }
                if (options.postMessage) {
                    // Setting the dataType to postmessage enables the
                    // postMessage transport:
                    options.dataType = 'postmessage ' + (options.dataType || '');
                }
            } else {
                this._initIframeSettings(options, 'iframe');
            }
        },

        _getParamName: function (options) {
            var fileInput = $(options.fileInput),
                paramName = options.paramName;
            if (!paramName) {
                paramName = [];
                fileInput.each(function () {
                    var input = $(this),
                        name = input.prop('name') || 'files[]',
                        i = (input.prop('files') || [1]).length;
                    while (i) {
                        paramName.push(name);
                        i -= 1;
                    }
                });
                if (!paramName.length) {
                    paramName = [fileInput.prop('name') || 'files[]'];
                }
            } else if (!$.isArray(paramName)) {
                paramName = [paramName];
            }
            return paramName;
        },

        _initFormSettings: function (options) {
            // Retrieve missing options from the input field and the
            // associated form, if available:
            if (!options.form || !options.form.length) {
                options.form = $(options.fileInput.prop('form'));
            }
            options.paramName = this._getParamName(options);
            if (!options.url) {
                options.url = options.form.prop('action') || location.href;
            }
            // The HTTP request method must be "POST" or "PUT":
            options.type = (options.type || options.form.prop('method') || '')
                .toUpperCase();
            if (options.type !== 'POST' && options.type !== 'PUT') {
                options.type = 'POST';
            }
        },

        _getAJAXSettings: function (data) {
            var options = $.extend({}, this.options, data);
            this._initFormSettings(options);
            this._initDataSettings(options);
            return options;
        },

        // Maps jqXHR callbacks to the equivalent
        // methods of the given Promise object:
        _enhancePromise: function (promise) {
            promise.success = promise.done;
            promise.error = promise.fail;
            promise.complete = promise.always;
            return promise;
        },

        // Creates and returns a Promise object enhanced with
        // the jqXHR methods abort, success, error and complete:
        _getXHRPromise: function (resolveOrReject, context, args) {
            var dfd = $.Deferred(),
                promise = dfd.promise();
            context = context || this.options.context || promise;
            if (resolveOrReject === true) {
                dfd.resolveWith(context, args);
            } else if (resolveOrReject === false) {
                dfd.rejectWith(context, args);
            }
            promise.abort = dfd.promise;
            return this._enhancePromise(promise);
        },

        // Uploads a file in multiple, sequential requests
        // by splitting the file up in multiple blob chunks.
        // If the second parameter is true, only tests if the file
        // should be uploaded in chunks, but does not invoke any
        // upload requests:
        _chunkedUpload: function (options, testOnly) {
            var that = this,
                file = options.files[0],
                fs = file.size,
                ub = options.uploadedBytes = options.uploadedBytes || 0,
                mcs = options.maxChunkSize || fs,
                // Use the Blob methods with the slice implementation
                // according to the W3C Blob API specification:
                slice = file.webkitSlice || file.mozSlice || file.slice,
                upload,
                n,
                jqXHR,
                pipe;
            if (!(this._isXHRUpload(options) && slice && (ub || mcs < fs)) ||
                    options.data) {
                return false;
            }
            if (testOnly) {
                return true;
            }
            if (ub >= fs) {
                file.error = 'uploadedBytes';
                return this._getXHRPromise(
                    false,
                    options.context,
                    [null, 'error', file.error]
                );
            }
            // n is the number of blobs to upload,
            // calculated via filesize, uploaded bytes and max chunk size:
            n = Math.ceil((fs - ub) / mcs);
            // The chunk upload method accepting the chunk number as parameter:
            upload = function (i) {
                if (!i) {
                    return that._getXHRPromise(true, options.context);
                }
                // Upload the blobs in sequential order:
                return upload(i -= 1).pipe(function () {
                    // Clone the options object for each chunk upload:
                    var o = $.extend({}, options);
                    o.blob = slice.call(
                        file,
                        ub + i * mcs,
                        ub + (i + 1) * mcs
                    );
                    // Expose the chunk index:
                    o.chunkIndex = i;
                    // Expose the number of chunks:
                    o.chunksNumber = n;
                    // Store the current chunk size, as the blob itself
                    // will be dereferenced after data processing:
                    o.chunkSize = o.blob.size;
                    // Process the upload data (the blob and potential form data):
                    that._initXHRData(o);
                    // Add progress listeners for this chunk upload:
                    that._initProgressListener(o);
                    jqXHR = ($.ajax(o) || that._getXHRPromise(false, o.context))
                        .done(function () {
                            // Create a progress event if upload is done and
                            // no progress event has been invoked for this chunk:
                            if (!o.loaded) {
                                that._onProgress($.Event('progress', {
                                    lengthComputable: true,
                                    loaded: o.chunkSize,
                                    total: o.chunkSize
                                }), o);
                            }
                            options.uploadedBytes = o.uploadedBytes +=
                                o.chunkSize;
                        });
                    return jqXHR;
                });
            };
            // Return the piped Promise object, enhanced with an abort method,
            // which is delegated to the jqXHR object of the current upload,
            // and jqXHR callbacks mapped to the equivalent Promise methods:
            pipe = upload(n);
            pipe.abort = function () {
                return jqXHR.abort();
            };
            return this._enhancePromise(pipe);
        },

        _beforeSend: function (e, data) {
            if (this._active === 0) {
                // the start callback is triggered when an upload starts
                // and no other uploads are currently running,
                // equivalent to the global ajaxStart event:
                this._trigger('start');
                // Set timer for global bitrate progress calculation:
                this._bitrateTimer = new this._BitrateTimer();
            }
            this._active += 1;
            // Initialize the global progress values:
            this._loaded += data.uploadedBytes || 0;
            this._total += this._getTotal(data.files);
        },

        _onDone: function (result, textStatus, jqXHR, options) {
            if (!this._isXHRUpload(options)) {
                // Create a progress event for each iframe load:
                this._onProgress($.Event('progress', {
                    lengthComputable: true,
                    loaded: 1,
                    total: 1
                }), options);
            }
            options.result = result;
            options.textStatus = textStatus;
            options.jqXHR = jqXHR;
            this._trigger('done', null, options);
        },

        _onFail: function (jqXHR, textStatus, errorThrown, options) {
            options.jqXHR = jqXHR;
            options.textStatus = textStatus;
            options.errorThrown = errorThrown;
            this._trigger('fail', null, options);
            if (options.recalculateProgress) {
                // Remove the failed (error or abort) file upload from
                // the global progress calculation:
                this._loaded -= options.loaded || options.uploadedBytes || 0;
                this._total -= options.total || this._getTotal(options.files);
            }
        },

        _onAlways: function (jqXHRorResult, textStatus, jqXHRorError, options) {
            this._active -= 1;
            options.textStatus = textStatus;
            if (jqXHRorError && jqXHRorError.always) {
                options.jqXHR = jqXHRorError;
                options.result = jqXHRorResult;
            } else {
                options.jqXHR = jqXHRorResult;
                options.errorThrown = jqXHRorError;
            }
            this._trigger('always', null, options);
            if (this._active === 0) {
                // The stop callback is triggered when all uploads have
                // been completed, equivalent to the global ajaxStop event:
                this._trigger('stop');
                // Reset the global progress values:
                this._loaded = this._total = 0;
                this._bitrateTimer = null;
            }
        },

        _onSend: function (e, data) {
            var that = this,
                jqXHR,
                slot,
                pipe,
                options = that._getAJAXSettings(data),
                send = function (resolve, args) {
                    that._sending += 1;
                    // Set timer for bitrate progress calculation:
                    options._bitrateTimer = new that._BitrateTimer();
                    jqXHR = jqXHR || (
                        (resolve !== false &&
                        that._trigger('send', e, options) !== false &&
                        (that._chunkedUpload(options) || $.ajax(options))) ||
                        that._getXHRPromise(false, options.context, args)
                    ).done(function (result, textStatus, jqXHR) {
                        that._onDone(result, textStatus, jqXHR, options);
                    }).fail(function (jqXHR, textStatus, errorThrown) {
                        that._onFail(jqXHR, textStatus, errorThrown, options);
                    }).always(function (jqXHRorResult, textStatus, jqXHRorError) {
                        that._sending -= 1;
                        that._onAlways(
                            jqXHRorResult,
                            textStatus,
                            jqXHRorError,
                            options
                        );
                        if (options.limitConcurrentUploads &&
                                options.limitConcurrentUploads > that._sending) {
                            // Start the next queued upload,
                            // that has not been aborted:
                            var nextSlot = that._slots.shift();
                            while (nextSlot) {
                                if (!nextSlot.isRejected()) {
                                    nextSlot.resolve();
                                    break;
                                }
                                nextSlot = that._slots.shift();
                            }
                        }
                    });
                    return jqXHR;
                };
            this._beforeSend(e, options);
            if (this.options.sequentialUploads ||
                    (this.options.limitConcurrentUploads &&
                    this.options.limitConcurrentUploads <= this._sending)) {
                if (this.options.limitConcurrentUploads > 1) {
                    slot = $.Deferred();
                    this._slots.push(slot);
                    pipe = slot.pipe(send);
                } else {
                    pipe = (this._sequence = this._sequence.pipe(send, send));
                }
                // Return the piped Promise object, enhanced with an abort method,
                // which is delegated to the jqXHR object of the current upload,
                // and jqXHR callbacks mapped to the equivalent Promise methods:
                pipe.abort = function () {
                    var args = [undefined, 'abort', 'abort'];
                    if (!jqXHR) {
                        if (slot) {
                            slot.rejectWith(args);
                        }
                        return send(false, args);
                    }
                    return jqXHR.abort();
                };
                return this._enhancePromise(pipe);
            }
            return send();
        },

        _onAdd: function (e, data) {
            var that = this,
                result = true,
                options = $.extend({}, this.options, data),
                limit = options.limitMultiFileUploads,
                paramName = this._getParamName(options),
                paramNameSet,
                paramNameSlice,
                fileSet,
                i;
            if (!(options.singleFileUploads || limit) ||
                    !this._isXHRUpload(options)) {
                fileSet = [data.files];
                paramNameSet = [paramName];
            } else if (!options.singleFileUploads && limit) {
                fileSet = [];
                paramNameSet = [];
                for (i = 0; i < data.files.length; i += limit) {
                    fileSet.push(data.files.slice(i, i + limit));
                    paramNameSlice = paramName.slice(i, i + limit);
                    if (!paramNameSlice.length) {
                        paramNameSlice = paramName;
                    }
                    paramNameSet.push(paramNameSlice);
                }
            } else {
                paramNameSet = paramName;
            }
            data.originalFiles = data.files;
            $.each(fileSet || data.files, function (index, element) {
                var newData = $.extend({}, data);
                newData.files = fileSet ? element : [element];
                newData.paramName = paramNameSet[index];
                newData.submit = function () {
                    newData.jqXHR = this.jqXHR =
                        (that._trigger('submit', e, this) !== false) &&
                        that._onSend(e, this);
                    return this.jqXHR;
                };
                return (result = that._trigger('add', e, newData));
            });
            return result;
        },

        // File Normalization for Gecko 1.9.1 (Firefox 3.5) support:
        _normalizeFile: function (index, file) {
            if (file.name === undefined && file.size === undefined) {
                file.name = file.fileName;
                file.size = file.fileSize;
            }
        },

        _replaceFileInput: function (input) {
            var inputClone = input.clone(true);
            $('<form></form>').append(inputClone)[0].reset();
            // Detaching allows to insert the fileInput on another form
            // without loosing the file input value:
            input.after(inputClone).detach();
            // Avoid memory leaks with the detached file input:
            $.cleanData(input.unbind('remove'));
            // Replace the original file input element in the fileInput
            // collection with the clone, which has been copied including
            // event handlers:
            this.options.fileInput = this.options.fileInput.map(function (i, el) {
                if (el === input[0]) {
                    return inputClone[0];
                }
                return el;
            });
            // If the widget has been initialized on the file input itself,
            // override this.element with the file input clone:
            if (input[0] === this.element[0]) {
                this.element = inputClone;
            }
        },

        _getFileInputFiles: function (fileInput) {
            fileInput = $(fileInput);
            var files = $.each($.makeArray(fileInput.prop('files')), this._normalizeFile),
                value;
            if (!files.length) {
                value = fileInput.prop('value');
                if (!value) {
                    return [];
                }
                // If the files property is not available, the browser does not
                // support the File API and we add a pseudo File object with
                // the input value as name with path information removed:
                files = [{name: value.replace(/^.*\\/, '')}];
            }
            return files;
        },

        _onChange: function (e) {
            var that = e.data.fileupload,
                data = {
                    fileInput: $(e.target),
                    form: $(e.target.form)
                };
            data.files = that._getFileInputFiles(data.fileInput);
            if (that.options.replaceFileInput) {
                that._replaceFileInput(data.fileInput);
            }
            if (that._trigger('change', e, data) === false ||
                    that._onAdd(e, data) === false) {
                return false;
            }
        },

        _onPaste: function (e) {
            var that = e.data.fileupload,
                cbd = e.originalEvent.clipboardData,
                items = (cbd && cbd.items) || [],
                data = {files: []};
            $.each(items, function (index, item) {
                var file = item.getAsFile && item.getAsFile();
                if (file) {
                    data.files.push(file);
                }
            });
            if (that._trigger('paste', e, data) === false ||
                    that._onAdd(e, data) === false) {
                return false;
            }
        },

        _onDrop: function (e) {
            var that = e.data.fileupload,
                dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer,
                data = {
                    files: $.each(
                        $.makeArray(dataTransfer && dataTransfer.files),
                        that._normalizeFile
                    )
                };
            if (that._trigger('drop', e, data) === false ||
                    that._onAdd(e, data) === false) {
                return false;
            }
            e.preventDefault();
        },

        _onDragOver: function (e) {
            var that = e.data.fileupload,
                dataTransfer = e.dataTransfer = e.originalEvent.dataTransfer;
            if (that._trigger('dragover', e) === false) {
                return false;
            }
            if (dataTransfer) {
                dataTransfer.dropEffect = 'copy';
            }
            e.preventDefault();
        },

        _initEventHandlers: function () {
            var ns = this.options.namespace;
            if (this._isXHRUpload(this.options)) {
                this.options.dropZone
                    .bind('dragover.' + ns, {fileupload: this}, this._onDragOver)
                    .bind('drop.' + ns, {fileupload: this}, this._onDrop)
                    .bind('paste.' + ns, {fileupload: this}, this._onPaste);
            }
            this.options.fileInput
                .bind('change.' + ns, {fileupload: this}, this._onChange);
        },

        _destroyEventHandlers: function () {
            var ns = this.options.namespace;
            this.options.dropZone
                .unbind('dragover.' + ns, this._onDragOver)
                .unbind('drop.' + ns, this._onDrop)
                .unbind('paste.' + ns, this._onPaste);
            this.options.fileInput
                .unbind('change.' + ns, this._onChange);
        },

        _setOption: function (key, value) {
            var refresh = $.inArray(key, this._refreshOptionsList) !== -1;
            if (refresh) {
                this._destroyEventHandlers();
            }
            $.Widget.prototype._setOption.call(this, key, value);
            if (refresh) {
                this._initSpecialOptions();
                this._initEventHandlers();
            }
        },

        _initSpecialOptions: function () {
            var options = this.options;
            if (options.fileInput === undefined) {
                options.fileInput = this.element.is('input:file') ?
                        this.element : this.element.find('input:file');
            } else if (!(options.fileInput instanceof $)) {
                options.fileInput = $(options.fileInput);
            }
            if (!(options.dropZone instanceof $)) {
                options.dropZone = $(options.dropZone);
            }
        },

        _create: function () {
            var options = this.options;
            // Initialize options set via HTML5 data-attributes:
            $.extend(options, $(this.element[0].cloneNode(false)).data());
            options.namespace = options.namespace || this.widgetName;
            this._initSpecialOptions();
            this._slots = [];
            this._sequence = this._getXHRPromise(true);
            this._sending = this._active = this._loaded = this._total = 0;
            this._initEventHandlers();
        },

        destroy: function () {
            this._destroyEventHandlers();
            $.Widget.prototype.destroy.call(this);
        },

        enable: function () {
            $.Widget.prototype.enable.call(this);
            this._initEventHandlers();
        },

        disable: function () {
            this._destroyEventHandlers();
            $.Widget.prototype.disable.call(this);
        },

        // This method is exposed to the widget API and allows adding files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('add', {files: filesList});
        add: function (data) {
            if (!data || this.options.disabled) {
                return;
            }
            if (data.fileInput && !data.files) {
                data.files = this._getFileInputFiles(data.fileInput);
            } else {
                data.files = $.each($.makeArray(data.files), this._normalizeFile);
            }
            this._onAdd(null, data);
        },

        // This method is exposed to the widget API and allows sending files
        // using the fileupload API. The data parameter accepts an object which
        // must have a files property and can contain additional options:
        // .fileupload('send', {files: filesList});
        // The method returns a Promise object for the file upload call.
        send: function (data) {
            if (data && !this.options.disabled) {
                if (data.fileInput && !data.files) {
                    data.files = this._getFileInputFiles(data.fileInput);
                } else {
                    data.files = $.each($.makeArray(data.files), this._normalizeFile);
                }
                if (data.files.length) {
                    return this._onSend(null, data);
                }
            }
            return this._getXHRPromise(false, data && data.context);
        }

    });

}));

/*
 * jQuery Iframe Transport Plugin 1.4
 * https://github.com/blueimp/jQuery-File-Upload
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 */

/*jslint unparam: true, nomen: true */
/*global define, window, document */

(function (factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        // Register as an anonymous AMD module:
        define(['jquery'], factory);
    } else {
        // Browser globals:
        factory(window.jQuery);
    }
}(function ($) {
    'use strict';

    // Helper variable to create unique names for the transport iframes:
    var counter = 0;

    // The iframe transport accepts three additional options:
    // options.fileInput: a jQuery collection of file input fields
    // options.paramName: the parameter name for the file form data,
    //  overrides the name property of the file input field(s),
    //  can be a string or an array of strings.
    // options.formData: an array of objects with name and value properties,
    //  equivalent to the return data of .serializeArray(), e.g.:
    //  [{name: 'a', value: 1}, {name: 'b', value: 2}]
    $.ajaxTransport('iframe', function (options) {
        if (options.async && (options.type === 'POST' || options.type === 'GET')) {
            var form,
                iframe;
            return {
                send: function (_, completeCallback) {
                    form = $('<form style="display:none;"></form>');
                    // javascript:false as initial iframe src
                    // prevents warning popups on HTTPS in IE6.
                    // IE versions below IE8 cannot set the name property of
                    // elements that have already been added to the DOM,
                    // so we set the name along with the iframe HTML markup:
                    iframe = $(
                        '<iframe src="javascript:false;" name="iframe-transport-' +
                            (counter += 1) + '"></iframe>'
                    ).bind('load', function () {
                        var fileInputClones,
                            paramNames = $.isArray(options.paramName) ?
                                    options.paramName : [options.paramName];
                        iframe
                            .unbind('load')
                            .bind('load', function () {
                                var response;
                                // Wrap in a try/catch block to catch exceptions thrown
                                // when trying to access cross-domain iframe contents:
                                try {
                                    response = iframe.contents();
                                    // Google Chrome and Firefox do not throw an
                                    // exception when calling iframe.contents() on
                                    // cross-domain requests, so we unify the response:
                                    if (!response.length || !response[0].firstChild) {
                                        throw new Error();
                                    }
                                } catch (e) {
                                    response = undefined;
                                }
                                // The complete callback returns the
                                // iframe content document as response object:
                                completeCallback(
                                    200,
                                    'success',
                                    {'iframe': response}
                                );
                                // Fix for IE endless progress bar activity bug
                                // (happens on form submits to iframe targets):
                                $('<iframe src="javascript:false;"></iframe>')
                                    .appendTo(form);
                                form.remove();
                            });
                        form
                            .prop('target', iframe.prop('name'))
                            .prop('action', options.url)
                            .prop('method', options.type);
                        if (options.formData) {
                            $.each(options.formData, function (index, field) {
                                $('<input type="hidden"/>')
                                    .prop('name', field.name)
                                    .val(field.value)
                                    .appendTo(form);
                            });
                        }
                        if (options.fileInput && options.fileInput.length &&
                                options.type === 'POST') {
                            fileInputClones = options.fileInput.clone();
                            // Insert a clone for each file input field:
                            options.fileInput.after(function (index) {
                                return fileInputClones[index];
                            });
                            if (options.paramName) {
                                options.fileInput.each(function (index) {
                                    $(this).prop(
                                        'name',
                                        paramNames[index] || options.paramName
                                    );
                                });
                            }
                            // Appending the file input fields to the hidden form
                            // removes them from their original location:
                            form
                                .append(options.fileInput)
                                .prop('enctype', 'multipart/form-data')
                                // enctype must be set as encoding for IE:
                                .prop('encoding', 'multipart/form-data');
                        }
                        form.submit();
                        // Insert the file input fields at their original location
                        // by replacing the clones with the originals:
                        if (fileInputClones && fileInputClones.length) {
                            options.fileInput.each(function (index, input) {
                                var clone = $(fileInputClones[index]);
                                $(input).prop('name', clone.prop('name'));
                                clone.replaceWith(input);
                            });
                        }
                    });
                    form.append(iframe).appendTo(document.body);
                },
                abort: function () {
                    if (iframe) {
                        // javascript:false as iframe src aborts the request
                        // and prevents warning popups on HTTPS in IE6.
                        // concat is used to avoid the "Script URL" JSLint error:
                        iframe
                            .unbind('load')
                            .prop('src', 'javascript'.concat(':false;'));
                    }
                    if (form) {
                        form.remove();
                    }
                }
            };
        }
    });

    // The iframe transport returns the iframe content document as response.
    // The following adds converters from iframe to text, json, html, and script:
    $.ajaxSetup({
        converters: {
            'iframe text': function (iframe) {
                return $(iframe[0].body).text();
            },
            'iframe json': function (iframe) {
                return $.parseJSON($(iframe[0].body).text());
            },
            'iframe html': function (iframe) {
                return $(iframe[0].body).html();
            },
            'iframe script': function (iframe) {
                return $.globalEval($(iframe[0].body).text());
            }
        }
    });

}));

/* ===================================================
 * bootstrap-transition.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#transitions
 * ===================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  $(function () {

    "use strict"; // jshint ;_;


    /* CSS TRANSITION SUPPORT (http://www.modernizr.com/)
     * ======================================================= */

    $.support.transition = (function () {

      var transitionEnd = (function () {

        var el = document.createElement('bootstrap')
          , transEndEventNames = {
               'WebkitTransition' : 'webkitTransitionEnd'
            ,  'MozTransition'    : 'transitionend'
            ,  'OTransition'      : 'oTransitionEnd'
            ,  'msTransition'     : 'MSTransitionEnd'
            ,  'transition'       : 'transitionend'
            }
          , name

        for (name in transEndEventNames){
          if (el.style[name] !== undefined) {
            return transEndEventNames[name]
          }
        }

      }())

      return transitionEnd && {
        end: transitionEnd
      }

    })()

  })

}(window.jQuery);/* ==========================================================
 * bootstrap-alert.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#alerts
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* ALERT CLASS DEFINITION
  * ====================== */

  var dismiss = '[data-dismiss="alert"]'
    , Alert = function (el) {
        $(el).on('click', dismiss, this.close)
      }

  Alert.prototype.close = function (e) {
    var $this = $(this)
      , selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)

    e && e.preventDefault()

    $parent.length || ($parent = $this.hasClass('alert') ? $this : $this.parent())

    $parent.trigger(e = $.Event('close'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      $parent
        .trigger('closed')
        .remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent.on($.support.transition.end, removeElement) :
      removeElement()
  }


 /* ALERT PLUGIN DEFINITION
  * ======================= */

  $.fn.alert = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('alert')
      if (!data) $this.data('alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.alert.Constructor = Alert


 /* ALERT DATA-API
  * ============== */

  $(function () {
    $('body').on('click.alert.data-api', dismiss, Alert.prototype.close)
  })

}(window.jQuery);/* ============================================================
 * bootstrap-button.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#buttons
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* BUTTON PUBLIC CLASS DEFINITION
  * ============================== */

  var Button = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.button.defaults, options)
  }

  Button.prototype.setState = function (state) {
    var d = 'disabled'
      , $el = this.$element
      , data = $el.data()
      , val = $el.is('input') ? 'val' : 'html'

    state = state + 'Text'
    data.resetText || $el.data('resetText', $el[val]())

    $el[val](data[state] || this.options[state])

    // push to event loop to allow forms to submit
    setTimeout(function () {
      state == 'loadingText' ?
        $el.addClass(d).attr(d, d) :
        $el.removeClass(d).removeAttr(d)
    }, 0)
  }

  Button.prototype.toggle = function () {
    var $parent = this.$element.parent('[data-toggle="buttons-radio"]')

    $parent && $parent
      .find('.active')
      .removeClass('active')

    this.$element.toggleClass('active')
  }


 /* BUTTON PLUGIN DEFINITION
  * ======================== */

  $.fn.button = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('button')
        , options = typeof option == 'object' && option
      if (!data) $this.data('button', (data = new Button(this, options)))
      if (option == 'toggle') data.toggle()
      else if (option) data.setState(option)
    })
  }

  $.fn.button.defaults = {
    loadingText: 'loading...'
  }

  $.fn.button.Constructor = Button


 /* BUTTON DATA-API
  * =============== */

  $(function () {
    $('body').on('click.button.data-api', '[data-toggle^=button]', function ( e ) {
      var $btn = $(e.target)
      if (!$btn.hasClass('btn')) $btn = $btn.closest('.btn')
      $btn.button('toggle')
    })
  })

}(window.jQuery);/* ==========================================================
 * bootstrap-carousel.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#carousel
 * ==========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* CAROUSEL CLASS DEFINITION
  * ========================= */

  var Carousel = function (element, options) {
    this.$element = $(element)
    this.options = options
    this.options.slide && this.slide(this.options.slide)
    this.options.pause == 'hover' && this.$element
      .on('mouseenter', $.proxy(this.pause, this))
      .on('mouseleave', $.proxy(this.cycle, this))
  }

  Carousel.prototype = {

    cycle: function (e) {
      if (!e) this.paused = false
      this.options.interval
        && !this.paused
        && (this.interval = setInterval($.proxy(this.next, this), this.options.interval))
      return this
    }

  , to: function (pos) {
      var $active = this.$element.find('.active')
        , children = $active.parent().children()
        , activePos = children.index($active)
        , that = this

      if (pos > (children.length - 1) || pos < 0) return

      if (this.sliding) {
        return this.$element.one('slid', function () {
          that.to(pos)
        })
      }

      if (activePos == pos) {
        return this.pause().cycle()
      }

      return this.slide(pos > activePos ? 'next' : 'prev', $(children[pos]))
    }

  , pause: function (e) {
      if (!e) this.paused = true
      clearInterval(this.interval)
      this.interval = null
      return this
    }

  , next: function () {
      if (this.sliding) return
      return this.slide('next')
    }

  , prev: function () {
      if (this.sliding) return
      return this.slide('prev')
    }

  , slide: function (type, next) {
      var $active = this.$element.find('.active')
        , $next = next || $active[type]()
        , isCycling = this.interval
        , direction = type == 'next' ? 'left' : 'right'
        , fallback  = type == 'next' ? 'first' : 'last'
        , that = this
        , e = $.Event('slide')

      this.sliding = true

      isCycling && this.pause()

      $next = $next.length ? $next : this.$element.find('.item')[fallback]()

      if ($next.hasClass('active')) return

      if ($.support.transition && this.$element.hasClass('slide')) {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $next.addClass(type)
        $next[0].offsetWidth // force reflow
        $active.addClass(direction)
        $next.addClass(direction)
        this.$element.one($.support.transition.end, function () {
          $next.removeClass([type, direction].join(' ')).addClass('active')
          $active.removeClass(['active', direction].join(' '))
          that.sliding = false
          setTimeout(function () { that.$element.trigger('slid') }, 0)
        })
      } else {
        this.$element.trigger(e)
        if (e.isDefaultPrevented()) return
        $active.removeClass('active')
        $next.addClass('active')
        this.sliding = false
        this.$element.trigger('slid')
      }

      isCycling && this.cycle()

      return this
    }

  }


 /* CAROUSEL PLUGIN DEFINITION
  * ========================== */

  $.fn.carousel = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('carousel')
        , options = $.extend({}, $.fn.carousel.defaults, typeof option == 'object' && option)
      if (!data) $this.data('carousel', (data = new Carousel(this, options)))
      if (typeof option == 'number') data.to(option)
      else if (typeof option == 'string' || (option = options.slide)) data[option]()
      else if (options.interval) data.cycle()
    })
  }

  $.fn.carousel.defaults = {
    interval: 5000
  , pause: 'hover'
  }

  $.fn.carousel.Constructor = Carousel


 /* CAROUSEL DATA-API
  * ================= */

  $(function () {
    $('body').on('click.carousel.data-api', '[data-slide]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , options = !$target.data('modal') && $.extend({}, $target.data(), $this.data())
      $target.carousel(options)
      e.preventDefault()
    })
  })

}(window.jQuery);/* =============================================================
 * bootstrap-collapse.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#collapse
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* COLLAPSE PUBLIC CLASS DEFINITION
  * ================================ */

  var Collapse = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.collapse.defaults, options)

    if (this.options.parent) {
      this.$parent = $(this.options.parent)
    }

    this.options.toggle && this.toggle()
  }

  Collapse.prototype = {

    constructor: Collapse

  , dimension: function () {
      var hasWidth = this.$element.hasClass('width')
      return hasWidth ? 'width' : 'height'
    }

  , show: function () {
      var dimension
        , scroll
        , actives
        , hasData

      if (this.transitioning) return

      dimension = this.dimension()
      scroll = $.camelCase(['scroll', dimension].join('-'))
      actives = this.$parent && this.$parent.find('> .accordion-group > .in')

      if (actives && actives.length) {
        hasData = actives.data('collapse')
        if (hasData && hasData.transitioning) return
        actives.collapse('hide')
        hasData || actives.data('collapse', null)
      }

      this.$element[dimension](0)
      this.transition('addClass', $.Event('show'), 'shown')
      this.$element[dimension](this.$element[0][scroll])
    }

  , hide: function () {
      var dimension
      if (this.transitioning) return
      dimension = this.dimension()
      this.reset(this.$element[dimension]())
      this.transition('removeClass', $.Event('hide'), 'hidden')
      this.$element[dimension](0)
    }

  , reset: function (size) {
      var dimension = this.dimension()

      this.$element
        .removeClass('collapse')
        [dimension](size || 'auto')
        [0].offsetWidth

      this.$element[size !== null ? 'addClass' : 'removeClass']('collapse')

      return this
    }

  , transition: function (method, startEvent, completeEvent) {
      var that = this
        , complete = function () {
            if (startEvent.type == 'show') that.reset()
            that.transitioning = 0
            that.$element.trigger(completeEvent)
          }

      this.$element.trigger(startEvent)

      if (startEvent.isDefaultPrevented()) return

      this.transitioning = 1

      this.$element[method]('in')

      $.support.transition && this.$element.hasClass('collapse') ?
        this.$element.one($.support.transition.end, complete) :
        complete()
    }

  , toggle: function () {
      this[this.$element.hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* COLLAPSIBLE PLUGIN DEFINITION
  * ============================== */

  $.fn.collapse = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('collapse')
        , options = typeof option == 'object' && option
      if (!data) $this.data('collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.collapse.defaults = {
    toggle: true
  }

  $.fn.collapse.Constructor = Collapse


 /* COLLAPSIBLE DATA-API
  * ==================== */

  $(function () {
    $('body').on('click.collapse.data-api', '[data-toggle=collapse]', function ( e ) {
      var $this = $(this), href
        , target = $this.attr('data-target')
          || e.preventDefault()
          || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') //strip for ie7
        , option = $(target).data('collapse') ? 'toggle' : $this.data()
      $(target).collapse(option)
    })
  })

}(window.jQuery);/* ============================================================
 * bootstrap-dropdown.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle="dropdown"]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , selector
        , isActive

      if ($this.is('.disabled, :disabled')) return

      selector = $this.attr('data-target')

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      $parent = $(selector)
      $parent.length || ($parent = $this.parent())

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) $parent.toggleClass('open')

      return false
    }

  }

  function clearMenus() {
    $(toggle).parent().removeClass('open')
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html').on('click.dropdown.data-api', clearMenus)
    $('body')
      .on('click.dropdown', '.dropdown form', function (e) { e.stopPropagation() })
      .on('click.dropdown.data-api', toggle, Dropdown.prototype.toggle)
  })

}(window.jQuery);/* =========================================================
 * bootstrap-modal.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#modals
 * =========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================= */


!function ($) {

  "use strict"; // jshint ;_;


 /* MODAL CLASS DEFINITION
  * ====================== */

  var Modal = function (content, options) {
    this.options = options
    this.$element = $(content)
      .delegate('[data-dismiss="modal"]', 'click.dismiss.modal', $.proxy(this.hide, this))
  }

  Modal.prototype = {

      constructor: Modal

    , toggle: function () {
        return this[!this.isShown ? 'show' : 'hide']()
      }

    , show: function () {
        var that = this
          , e = $.Event('show')

        this.$element.trigger(e)

        if (this.isShown || e.isDefaultPrevented()) return

        $('body').addClass('modal-open')

        this.isShown = true

        escape.call(this)
        backdrop.call(this, function () {
          var transition = $.support.transition && that.$element.hasClass('fade')

          if (!that.$element.parent().length) {
            that.$element.appendTo(document.body) //don't move modals dom position
          }

          that.$element
            .show()

          if (transition) {
            that.$element[0].offsetWidth // force reflow
          }

          that.$element.addClass('in')

          transition ?
            that.$element.one($.support.transition.end, function () { that.$element.trigger('shown') }) :
            that.$element.trigger('shown')

        })
      }

    , hide: function (e) {
        e && e.preventDefault()

        var that = this

        e = $.Event('hide')

        this.$element.trigger(e)

        if (!this.isShown || e.isDefaultPrevented()) return

        this.isShown = false

        $('body').removeClass('modal-open')

        escape.call(this)

        this.$element.removeClass('in')

        $.support.transition && this.$element.hasClass('fade') ?
          hideWithTransition.call(this) :
          hideModal.call(this)
      }

  }


 /* MODAL PRIVATE METHODS
  * ===================== */

  function hideWithTransition() {
    var that = this
      , timeout = setTimeout(function () {
          that.$element.off($.support.transition.end)
          hideModal.call(that)
        }, 500)

    this.$element.one($.support.transition.end, function () {
      clearTimeout(timeout)
      hideModal.call(that)
    })
  }

  function hideModal(that) {
    this.$element
      .hide()
      .trigger('hidden')

    backdrop.call(this)
  }

  function backdrop(callback) {
    var that = this
      , animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $('<div class="modal-backdrop ' + animate + '" />')
        .appendTo(document.body)

      if (this.options.backdrop != 'static') {
        this.$backdrop.click($.proxy(this.hide, this))
      }

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      doAnimate ?
        this.$backdrop.one($.support.transition.end, callback) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      $.support.transition && this.$element.hasClass('fade')?
        this.$backdrop.one($.support.transition.end, $.proxy(removeBackdrop, this)) :
        removeBackdrop.call(this)

    } else if (callback) {
      callback()
    }
  }

  function removeBackdrop() {
    this.$backdrop.remove()
    this.$backdrop = null
  }

  function escape() {
    var that = this
    if (this.isShown && this.options.keyboard) {
      $(document).on('keyup.dismiss.modal', function ( e ) {
        e.which == 27 && that.hide()
      })
    } else if (!this.isShown) {
      $(document).off('keyup.dismiss.modal')
    }
  }


 /* MODAL PLUGIN DEFINITION
  * ======================= */

  $.fn.modal = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('modal')
        , options = $.extend({}, $.fn.modal.defaults, $this.data(), typeof option == 'object' && option)
      if (!data) $this.data('modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option]()
      else if (options.show) data.show()
    })
  }

  $.fn.modal.defaults = {
      backdrop: true
    , keyboard: true
    , show: true
  }

  $.fn.modal.Constructor = Modal


 /* MODAL DATA-API
  * ============== */

  $(function () {
    $('body').on('click.modal.data-api', '[data-toggle="modal"]', function ( e ) {
      var $this = $(this), href
        , $target = $($this.attr('data-target') || (href = $this.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
        , option = $target.data('modal') ? 'toggle' : $.extend({}, $target.data(), $this.data())

      e.preventDefault()
      $target.modal(option)
    })
  })

}(window.jQuery);/* ===========================================================
 * bootstrap-tooltip.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#tooltips
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TOOLTIP PUBLIC CLASS DEFINITION
  * =============================== */

  var Tooltip = function (element, options) {
    this.init('tooltip', element, options)
  }

  Tooltip.prototype = {

    constructor: Tooltip

  , init: function (type, element, options) {
      var eventIn
        , eventOut

      this.type = type
      this.$element = $(element)
      this.options = this.getOptions(options)
      this.enabled = true

      if (this.options.trigger != 'manual') {
        eventIn  = this.options.trigger == 'hover' ? 'mouseenter' : 'focus'
        eventOut = this.options.trigger == 'hover' ? 'mouseleave' : 'blur'
        this.$element.on(eventIn, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut, this.options.selector, $.proxy(this.leave, this))
      }

      this.options.selector ?
        (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
        this.fixTitle()
    }

  , getOptions: function (options) {
      options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

      if (options.delay && typeof options.delay == 'number') {
        options.delay = {
          show: options.delay
        , hide: options.delay
        }
      }

      return options
    }

  , enter: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.show) return self.show()

      clearTimeout(this.timeout)
      self.hoverState = 'in'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'in') self.show()
      }, self.options.delay.show)
    }

  , leave: function (e) {
      var self = $(e.currentTarget)[this.type](this._options).data(this.type)

      if (!self.options.delay || !self.options.delay.hide) return self.hide()

      clearTimeout(this.timeout)
      self.hoverState = 'out'
      this.timeout = setTimeout(function() {
        if (self.hoverState == 'out') self.hide()
      }, self.options.delay.hide)
    }

  , show: function () {
      var $tip
        , inside
        , pos
        , actualWidth
        , actualHeight
        , placement
        , tp

      if (this.hasContent() && this.enabled) {
        $tip = this.tip()
        this.setContent()

        if (this.options.animation) {
          $tip.addClass('fade')
        }

        placement = typeof this.options.placement == 'function' ?
          this.options.placement.call(this, $tip[0], this.$element[0]) :
          this.options.placement

        inside = /in/.test(placement)

        $tip
          .remove()
          .css({ top: 0, left: 0, display: 'block' })
          .appendTo(inside ? this.$element : document.body)

        pos = this.getPosition(inside)

        actualWidth = $tip[0].offsetWidth
        actualHeight = $tip[0].offsetHeight

        switch (inside ? placement.split(' ')[1] : placement) {
          case 'bottom':
            tp = {top: pos.top + pos.height, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'top':
            tp = {top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2}
            break
          case 'left':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth}
            break
          case 'right':
            tp = {top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width}
            break
        }

        $tip
          .css(tp)
          .addClass(placement)
          .addClass('in')
      }
    }

  , isHTML: function(text) {
      // html string detection logic adapted from jQuery
      return typeof text != 'string'
        || ( text.charAt(0) === "<"
          && text.charAt( text.length - 1 ) === ">"
          && text.length >= 3
        ) || /^(?:[^<]*<[\w\W]+>[^>]*$)/.exec(text)
    }

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()

      $tip.find('.tooltip-inner')[this.isHTML(title) ? 'html' : 'text'](title)
      $tip.removeClass('fade in top bottom left right')
    }

  , hide: function () {
      var that = this
        , $tip = this.tip()

      $tip.removeClass('in')

      function removeWithAnimation() {
        var timeout = setTimeout(function () {
          $tip.off($.support.transition.end).remove()
        }, 500)

        $tip.one($.support.transition.end, function () {
          clearTimeout(timeout)
          $tip.remove()
        })
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        removeWithAnimation() :
        $tip.remove()
    }

  , fixTitle: function () {
      var $e = this.$element
      if ($e.attr('title') || typeof($e.attr('data-original-title')) != 'string') {
        $e.attr('data-original-title', $e.attr('title') || '').removeAttr('title')
      }
    }

  , hasContent: function () {
      return this.getTitle()
    }

  , getPosition: function (inside) {
      return $.extend({}, (inside ? {top: 0, left: 0} : this.$element.offset()), {
        width: this.$element[0].offsetWidth
      , height: this.$element[0].offsetHeight
      })
    }

  , getTitle: function () {
      var title
        , $e = this.$element
        , o = this.options

      title = $e.attr('data-original-title')
        || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

      return title
    }

  , tip: function () {
      return this.$tip = this.$tip || $(this.options.template)
    }

  , validate: function () {
      if (!this.$element[0].parentNode) {
        this.hide()
        this.$element = null
        this.options = null
      }
    }

  , enable: function () {
      this.enabled = true
    }

  , disable: function () {
      this.enabled = false
    }

  , toggleEnabled: function () {
      this.enabled = !this.enabled
    }

  , toggle: function () {
      this[this.tip().hasClass('in') ? 'hide' : 'show']()
    }

  }


 /* TOOLTIP PLUGIN DEFINITION
  * ========================= */

  $.fn.tooltip = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tooltip')
        , options = typeof option == 'object' && option
      if (!data) $this.data('tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tooltip.Constructor = Tooltip

  $.fn.tooltip.defaults = {
    animation: true
  , placement: 'top'
  , selector: false
  , template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
  , trigger: 'hover'
  , title: ''
  , delay: 0
  }

}(window.jQuery);/* ===========================================================
 * bootstrap-popover.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#popovers
 * ===========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =========================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* POPOVER PUBLIC CLASS DEFINITION
  * =============================== */

  var Popover = function ( element, options ) {
    this.init('popover', element, options)
  }


  /* NOTE: POPOVER EXTENDS BOOTSTRAP-TOOLTIP.js
     ========================================== */

  Popover.prototype = $.extend({}, $.fn.tooltip.Constructor.prototype, {

    constructor: Popover

  , setContent: function () {
      var $tip = this.tip()
        , title = this.getTitle()
        , content = this.getContent()

      $tip.find('.popover-title')[this.isHTML(title) ? 'html' : 'text'](title)
      $tip.find('.popover-content > *')[this.isHTML(content) ? 'html' : 'text'](content)

      $tip.removeClass('fade top bottom left right in')
    }

  , hasContent: function () {
      return this.getTitle() || this.getContent()
    }

  , getContent: function () {
      var content
        , $e = this.$element
        , o = this.options

      content = $e.attr('data-content')
        || (typeof o.content == 'function' ? o.content.call($e[0]) :  o.content)

      return content
    }

  , tip: function () {
      if (!this.$tip) {
        this.$tip = $(this.options.template)
      }
      return this.$tip
    }

  })


 /* POPOVER PLUGIN DEFINITION
  * ======================= */

  $.fn.popover = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('popover')
        , options = typeof option == 'object' && option
      if (!data) $this.data('popover', (data = new Popover(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.popover.Constructor = Popover

  $.fn.popover.defaults = $.extend({} , $.fn.tooltip.defaults, {
    placement: 'right'
  , content: ''
  , template: '<div class="popover"><div class="arrow"></div><div class="popover-inner"><h3 class="popover-title"></h3><div class="popover-content"><p></p></div></div></div>'
  })

}(window.jQuery);/* =============================================================
 * bootstrap-scrollspy.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#scrollspy
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================== */


!function ($) {

  "use strict"; // jshint ;_;


  /* SCROLLSPY CLASS DEFINITION
   * ========================== */

  function ScrollSpy( element, options) {
    var process = $.proxy(this.process, this)
      , $element = $(element).is('body') ? $(window) : $(element)
      , href
    this.options = $.extend({}, $.fn.scrollspy.defaults, options)
    this.$scrollElement = $element.on('scroll.scroll.data-api', process)
    this.selector = (this.options.target
      || ((href = $(element).attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '')) //strip for ie7
      || '') + ' .nav li > a'
    this.$body = $('body')
    this.refresh()
    this.process()
  }

  ScrollSpy.prototype = {

      constructor: ScrollSpy

    , refresh: function () {
        var self = this
          , $targets

        this.offsets = $([])
        this.targets = $([])

        $targets = this.$body
          .find(this.selector)
          .map(function () {
            var $el = $(this)
              , href = $el.data('target') || $el.attr('href')
              , $href = /^#\w/.test(href) && $(href)
            return ( $href
              && href.length
              && [[ $href.position().top, href ]] ) || null
          })
          .sort(function (a, b) { return a[0] - b[0] })
          .each(function () {
            self.offsets.push(this[0])
            self.targets.push(this[1])
          })
      }

    , process: function () {
        var scrollTop = this.$scrollElement.scrollTop() + this.options.offset
          , scrollHeight = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight
          , maxScroll = scrollHeight - this.$scrollElement.height()
          , offsets = this.offsets
          , targets = this.targets
          , activeTarget = this.activeTarget
          , i

        if (scrollTop >= maxScroll) {
          return activeTarget != (i = targets.last()[0])
            && this.activate ( i )
        }

        for (i = offsets.length; i--;) {
          activeTarget != targets[i]
            && scrollTop >= offsets[i]
            && (!offsets[i + 1] || scrollTop <= offsets[i + 1])
            && this.activate( targets[i] )
        }
      }

    , activate: function (target) {
        var active
          , selector

        this.activeTarget = target

        $(this.selector)
          .parent('.active')
          .removeClass('active')

        selector = this.selector
          + '[data-target="' + target + '"],'
          + this.selector + '[href="' + target + '"]'

        active = $(selector)
          .parent('li')
          .addClass('active')

        if (active.parent('.dropdown-menu'))  {
          active = active.closest('li.dropdown').addClass('active')
        }

        active.trigger('activate')
      }

  }


 /* SCROLLSPY PLUGIN DEFINITION
  * =========================== */

  $.fn.scrollspy = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('scrollspy')
        , options = typeof option == 'object' && option
      if (!data) $this.data('scrollspy', (data = new ScrollSpy(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.scrollspy.Constructor = ScrollSpy

  $.fn.scrollspy.defaults = {
    offset: 10
  }


 /* SCROLLSPY DATA-API
  * ================== */

  $(function () {
    $('[data-spy="scroll"]').each(function () {
      var $spy = $(this)
      $spy.scrollspy($spy.data())
    })
  })

}(window.jQuery);/* ========================================================
 * bootstrap-tab.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#tabs
 * ========================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================== */


!function ($) {

  "use strict"; // jshint ;_;


 /* TAB CLASS DEFINITION
  * ==================== */

  var Tab = function ( element ) {
    this.element = $(element)
  }

  Tab.prototype = {

    constructor: Tab

  , show: function () {
      var $this = this.element
        , $ul = $this.closest('ul:not(.dropdown-menu)')
        , selector = $this.attr('data-target')
        , previous
        , $target
        , e

      if (!selector) {
        selector = $this.attr('href')
        selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
      }

      if ( $this.parent('li').hasClass('active') ) return

      previous = $ul.find('.active a').last()[0]

      e = $.Event('show', {
        relatedTarget: previous
      })

      $this.trigger(e)

      if (e.isDefaultPrevented()) return

      $target = $(selector)

      this.activate($this.parent('li'), $ul)
      this.activate($target, $target.parent(), function () {
        $this.trigger({
          type: 'shown'
        , relatedTarget: previous
        })
      })
    }

  , activate: function ( element, container, callback) {
      var $active = container.find('> .active')
        , transition = callback
            && $.support.transition
            && $active.hasClass('fade')

      function next() {
        $active
          .removeClass('active')
          .find('> .dropdown-menu > .active')
          .removeClass('active')

        element.addClass('active')

        if (transition) {
          element[0].offsetWidth // reflow for transition
          element.addClass('in')
        } else {
          element.removeClass('fade')
        }

        if ( element.parent('.dropdown-menu') ) {
          element.closest('li.dropdown').addClass('active')
        }

        callback && callback()
      }

      transition ?
        $active.one($.support.transition.end, next) :
        next()

      $active.removeClass('in')
    }
  }


 /* TAB PLUGIN DEFINITION
  * ===================== */

  $.fn.tab = function ( option ) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('tab')
      if (!data) $this.data('tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.tab.Constructor = Tab


 /* TAB DATA-API
  * ============ */

  $(function () {
    $('body').on('click.tab.data-api', '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
      e.preventDefault()
      $(this).tab('show')
    })
  })

}(window.jQuery);/* =============================================================
 * bootstrap-typeahead.js v2.0.3
 * http://twitter.github.com/bootstrap/javascript.html#typeahead
 * =============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function($){

  "use strict"; // jshint ;_;


 /* TYPEAHEAD PUBLIC CLASS DEFINITION
  * ================================= */

  var Typeahead = function (element, options) {
    this.$element = $(element)
    this.options = $.extend({}, $.fn.typeahead.defaults, options)
    this.matcher = this.options.matcher || this.matcher
    this.sorter = this.options.sorter || this.sorter
    this.highlighter = this.options.highlighter || this.highlighter
    this.updater = this.options.updater || this.updater
    this.$menu = $(this.options.menu).appendTo('body')
    this.source = this.options.source
    this.shown = false
    this.listen()
  }

  Typeahead.prototype = {

    constructor: Typeahead

  , select: function () {
      var val = this.$menu.find('.active').attr('data-value')
      this.$element
        .val(this.updater(val))
        .change()
      return this.hide()
    }

  , updater: function (item) {
      return item
    }

  , show: function () {
      var pos = $.extend({}, this.$element.offset(), {
        height: this.$element[0].offsetHeight
      })

      this.$menu.css({
        top: pos.top + pos.height
      , left: pos.left
      })

      this.$menu.show()
      this.shown = true
      return this
    }

  , hide: function () {
      this.$menu.hide()
      this.shown = false
      return this
    }

  , lookup: function (event) {
      var that = this
        , items
        , q

      this.query = this.$element.val()

      if (!this.query) {
        return this.shown ? this.hide() : this
      }

      items = $.grep(this.source, function (item) {
        return that.matcher(item)
      })

      items = this.sorter(items)

      if (!items.length) {
        return this.shown ? this.hide() : this
      }

      return this.render(items.slice(0, this.options.items)).show()
    }

  , matcher: function (item) {
      return ~item.toLowerCase().indexOf(this.query.toLowerCase())
    }

  , sorter: function (items) {
      var beginswith = []
        , caseSensitive = []
        , caseInsensitive = []
        , item

      while (item = items.shift()) {
        if (!item.toLowerCase().indexOf(this.query.toLowerCase())) beginswith.push(item)
        else if (~item.indexOf(this.query)) caseSensitive.push(item)
        else caseInsensitive.push(item)
      }

      return beginswith.concat(caseSensitive, caseInsensitive)
    }

  , highlighter: function (item) {
      var query = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&')
      return item.replace(new RegExp('(' + query + ')', 'ig'), function ($1, match) {
        return '<strong>' + match + '</strong>'
      })
    }

  , render: function (items) {
      var that = this

      items = $(items).map(function (i, item) {
        i = $(that.options.item).attr('data-value', item)
        i.find('a').html(that.highlighter(item))
        return i[0]
      })

      items.first().addClass('active')
      this.$menu.html(items)
      return this
    }

  , next: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , next = active.next()

      if (!next.length) {
        next = $(this.$menu.find('li')[0])
      }

      next.addClass('active')
    }

  , prev: function (event) {
      var active = this.$menu.find('.active').removeClass('active')
        , prev = active.prev()

      if (!prev.length) {
        prev = this.$menu.find('li').last()
      }

      prev.addClass('active')
    }

  , listen: function () {
      this.$element
        .on('blur',     $.proxy(this.blur, this))
        .on('keypress', $.proxy(this.keypress, this))
        .on('keyup',    $.proxy(this.keyup, this))

      if ($.browser.webkit || $.browser.msie) {
        this.$element.on('keydown', $.proxy(this.keypress, this))
      }

      this.$menu
        .on('click', $.proxy(this.click, this))
        .on('mouseenter', 'li', $.proxy(this.mouseenter, this))
    }

  , keyup: function (e) {
      switch(e.keyCode) {
        case 40: // down arrow
        case 38: // up arrow
          break

        case 9: // tab
        case 13: // enter
          if (!this.shown) return
          this.select()
          break

        case 27: // escape
          if (!this.shown) return
          this.hide()
          break

        default:
          this.lookup()
      }

      e.stopPropagation()
      e.preventDefault()
  }

  , keypress: function (e) {
      if (!this.shown) return

      switch(e.keyCode) {
        case 9: // tab
        case 13: // enter
        case 27: // escape
          e.preventDefault()
          break

        case 38: // up arrow
          if (e.type != 'keydown') break
          e.preventDefault()
          this.prev()
          break

        case 40: // down arrow
          if (e.type != 'keydown') break
          e.preventDefault()
          this.next()
          break
      }

      e.stopPropagation()
    }

  , blur: function (e) {
      var that = this
      setTimeout(function () { that.hide() }, 150)
    }

  , click: function (e) {
      e.stopPropagation()
      e.preventDefault()
      this.select()
    }

  , mouseenter: function (e) {
      this.$menu.find('.active').removeClass('active')
      $(e.currentTarget).addClass('active')
    }

  }


  /* TYPEAHEAD PLUGIN DEFINITION
   * =========================== */

  $.fn.typeahead = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('typeahead')
        , options = typeof option == 'object' && option
      if (!data) $this.data('typeahead', (data = new Typeahead(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  $.fn.typeahead.defaults = {
    source: []
  , items: 8
  , menu: '<ul class="typeahead dropdown-menu"></ul>'
  , item: '<li><a href="#"></a></li>'
  }

  $.fn.typeahead.Constructor = Typeahead


 /* TYPEAHEAD DATA-API
  * ================== */

  $(function () {
    $('body').on('focus.typeahead.data-api', '[data-provide="typeahead"]', function (e) {
      var $this = $(this)
      if ($this.data('typeahead')) return
      e.preventDefault()
      $this.typeahead($this.data())
    })
  })

}(window.jQuery);

/* ============================================================
 * bootstrap-dropdown.js v2.1.1
 * http://twitter.github.com/bootstrap/javascript.html#dropdowns
 * ============================================================
 * Copyright 2012 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ============================================================ */


!function ($) {

  "use strict"; // jshint ;_;


 /* DROPDOWN CLASS DEFINITION
  * ========================= */

  var toggle = '[data-toggle=dropdown]'
    , Dropdown = function (element) {
        var $el = $(element).on('click.dropdown.data-api', this.toggle)
        $('html').on('click.dropdown.data-api', function () {
          $el.parent().removeClass('open')
        })
      }

  Dropdown.prototype = {

    constructor: Dropdown

  , toggle: function (e) {
      var $this = $(this)
        , $parent
        , isActive

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      clearMenus()

      if (!isActive) {
        $parent.toggleClass('open')
        $this.focus()
      }

      return false
    }

  , keydown: function (e) {
      var $this
        , $items
        , $active
        , $parent
        , isActive
        , index

      if (!/(38|40|27)/.test(e.keyCode)) return

      $this = $(this)

      e.preventDefault()
      e.stopPropagation()

      if ($this.is('.disabled, :disabled')) return

      $parent = getParent($this)

      isActive = $parent.hasClass('open')

      if (!isActive || (isActive && e.keyCode == 27)) return $this.click()

      $items = $('[role=menu] li:not(.divider) a', $parent)

      if (!$items.length) return

      index = $items.index($items.filter(':focus'))

      if (e.keyCode == 38 && index > 0) index--                                        // up
      if (e.keyCode == 40 && index < $items.length - 1) index++                        // down
      if (!~index) index = 0

      $items
        .eq(index)
        .focus()
    }

  }

  function clearMenus() {
    getParent($(toggle))
      .removeClass('open')
  }

  function getParent($this) {
    var selector = $this.attr('data-target')
      , $parent

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && /#/.test(selector) && selector.replace(/.*(?=#[^\s]*$)/, '') //strip for ie7
    }

    $parent = $(selector)
    $parent.length || ($parent = $this.parent())

    return $parent
  }


  /* DROPDOWN PLUGIN DEFINITION
   * ========================== */

  $.fn.dropdown = function (option) {
    return this.each(function () {
      var $this = $(this)
        , data = $this.data('dropdown')
      if (!data) $this.data('dropdown', (data = new Dropdown(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  $.fn.dropdown.Constructor = Dropdown


  /* APPLY TO STANDARD DROPDOWN ELEMENTS
   * =================================== */

  $(function () {
    $('html')
      .on('click.dropdown.data-api touchstart.dropdown.data-api', clearMenus)
    $('body')
      .on('click.dropdown touchstart.dropdown.data-api', '.dropdown form', function (e) { e.stopPropagation() })
      .on('click.dropdown.data-api touchstart.dropdown.data-api'  , toggle, Dropdown.prototype.toggle)
      .on('keydown.dropdown.data-api touchstart.dropdown.data-api', toggle + ', [role=menu]' , Dropdown.prototype.keydown)
  })

}(window.jQuery);