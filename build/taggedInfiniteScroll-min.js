var requirejs,require,define;!function(e){function n(e,n){return v.call(e,n)}function i(e,n){var i,r,t,o,f,u,c,l,s,a,d=n&&n.split("/"),p=h.map,g=p&&p["*"]||{};if(e&&"."===e.charAt(0))if(n){for(d=d.slice(0,d.length-1),e=d.concat(e.split("/")),l=0;l<e.length;l+=1)if(a=e[l],"."===a)e.splice(l,1),l-=1;else if(".."===a){if(1===l&&(".."===e[2]||".."===e[0]))break;l>0&&(e.splice(l-1,2),l-=2)}e=e.join("/")}else 0===e.indexOf("./")&&(e=e.substring(2));if((d||g)&&p){for(i=e.split("/"),l=i.length;l>0;l-=1){if(r=i.slice(0,l).join("/"),d)for(s=d.length;s>0;s-=1)if(t=p[d.slice(0,s).join("/")],t&&(t=t[r])){o=t,f=l;break}if(o)break;!u&&g&&g[r]&&(u=g[r],c=l)}!o&&u&&(o=u,f=c),o&&(i.splice(0,f,o),e=i.join("/"))}return e}function r(n,i){return function(){return s.apply(e,b.call(arguments,0).concat([n,i]))}}function t(e){return function(n){return i(n,e)}}function o(e){return function(n){p[e]=n}}function f(i){if(n(g,i)){var r=g[i];delete g[i],m[i]=!0,l.apply(e,r)}if(!n(p,i)&&!n(m,i))throw new Error("No "+i);return p[i]}function u(e){var n,i=e?e.indexOf("!"):-1;return i>-1&&(n=e.substring(0,i),e=e.substring(i+1,e.length)),[n,e]}function c(e){return function(){return h&&h.config&&h.config[e]||{}}}var l,s,a,d,p={},g={},h={},m={},v=Object.prototype.hasOwnProperty,b=[].slice;a=function(e,n){var r,o=u(e),c=o[0];return e=o[1],c&&(c=i(c,n),r=f(c)),c?e=r&&r.normalize?r.normalize(e,t(n)):i(e,n):(e=i(e,n),o=u(e),c=o[0],e=o[1],c&&(r=f(c))),{f:c?c+"!"+e:e,n:e,pr:c,p:r}},d={require:function(e){return r(e)},exports:function(e){var n=p[e];return"undefined"!=typeof n?n:p[e]={}},module:function(e){return{id:e,uri:"",exports:p[e],config:c(e)}}},l=function(i,t,u,c){var l,s,h,v,b,y,j=[],q=typeof u;if(c=c||i,"undefined"===q||"function"===q){for(t=!t.length&&u.length?["require","exports","module"]:t,b=0;b<t.length;b+=1)if(v=a(t[b],c),s=v.f,"require"===s)j[b]=d.require(i);else if("exports"===s)j[b]=d.exports(i),y=!0;else if("module"===s)l=j[b]=d.module(i);else if(n(p,s)||n(g,s)||n(m,s))j[b]=f(s);else{if(!v.p)throw new Error(i+" missing "+s);v.p.load(v.n,r(c,!0),o(s),{}),j[b]=p[s]}h=u?u.apply(p[i],j):void 0,i&&(l&&l.exports!==e&&l.exports!==p[i]?p[i]=l.exports:h===e&&y||(p[i]=h))}else i&&(p[i]=u)},requirejs=require=s=function(n,i,r,t,o){return"string"==typeof n?d[n]?d[n](i):f(a(n,i).f):(n.splice||(h=n,i.splice?(n=i,i=r,r=null):n=e),i=i||function(){},"function"==typeof r&&(r=t,t=o),t?l(e,n,i,r):setTimeout(function(){l(e,n,i,r)},4),s)},s.config=function(e){return h=e,h.deps&&s(h.deps,h.callback),s},requirejs._defined=p,define=function(e,i,r){i.splice||(r=i,i=[]),n(p,e)||n(g,e)||(g[e]=[e,i,r])},define.amd={jQuery:!0}}(),define("bower_components/almond/almond",function(){}),define("jquery",{}),define("angular",{}),define("underscore",{}),define("src/taggedInfiniteScroll",["angular","underscore"],function(e,n){var i=e.module("tagged.directives.infiniteScroll",[]);i.directive("taggedInfiniteScroll",["$window","$timeout",function(i,r){var t=50;return function(o,f,u){var c=e.element(i),l=!0,s=0,a=n.throttle(function(){if(l){var e=c.height(),n=f.offset().top+f.height(),i=e+c.scrollTop(),r=n-i,t=0>=r-s;t&&d()}},t),d=function(){r(function(){o.$eval(u.taggedInfiniteScroll)})};u.taggedInfiniteScrollDistance&&o.$watch(u.taggedInfiniteScrollDistance,function(e){s=parseInt(e,10)}),u.taggedInfiniteScrollDisabled&&o.$watch(u.taggedInfiniteScrollDisabled,function(e){l=!e,a()}),c.bind("scroll",a),o.$on("$destroy",function(){c.unbind("scroll",a)}),r(a)}}])});