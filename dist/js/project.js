!function(n){var r={};function o(e){if(r[e])return r[e].exports;var t=r[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=n,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(n,r,function(e){return t[e]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t){var i=setInterval(function(){var e,n=function(e){var t=new Array(5).fill(e).join(" — ");return e=t}("TITLE TITLE TITLE");e=document.getElementsByClassName("project-cover")[0];var r;if(r=document.querySelector(".cover_title div h1 span"),e&&r){var o=Array.from(["xl","lg","md","sm","xs"]);let t=[];for(let e=0;e<o.length;e++){var u=`.cover_title div[data-content-for=${JSON.stringify(o[e])}] h1 span`;t.push(document.querySelector(u))}!function(t,n){for(let e=0;e<t.length;e++)t[e]&&(t[e].innerHTML=n)}(t,n),function(e,t){setTimeout(function(){e&&e.classList.add("project-cover-fade-in")},1e3),setTimeout(function(){t&&t.classList.add("title-fade-in")},1500)}(e,r),clearInterval(i)}},500)}]);