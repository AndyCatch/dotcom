!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);var o=n(1),t=n(2),r=n(3),i=n(4),c=n(5);let l=!1;setInterval(t.updateClock,1e3);var u=setInterval(function(){var e=document.querySelectorAll("div.navbar-inner")[0];e&&(window.addEventListener("scroll",m,{capture:!1,passive:!0}),clearInterval(u))},200),s=setInterval(function(){{var e;document.querySelector("body > section.work-index-section > div")&&(e=document.querySelectorAll("div.index-items"),Object(r.indexImage)(e),clearInterval(s))}},1e3);function a(){let e=document.createElement("script");var t;e.src="https://moment.github.io/luxon/global/luxon.min.js",document.body.appendChild(e),function(){let e=document.getElementsByClassName("hamburger")[0];e?e.addEventListener("click",d):console.log("No Hamburger menu")}(),t=Array.from(document.querySelectorAll("div.list a")),Object(c.imageMove)(t)}function d(){l=!l,l?document.removeEventListener("scroll",m,{capture:!1,passive:!1}):document.addEventListener("scroll",m,{capture:!1,passive:!1})}function m(e){var t=document.querySelectorAll("div.navbar-inner")[0],n=document.querySelector(".clock-container"),o=window.pageYOffset;"undefined"!=t&&Object(i.hideShow)(t,n,o)}window.addEventListener("sempliceTransitionInDone",function(e){isProject()},!1),window.addEventListener("load",e=>{console.log("Window load event")}),window.addEventListener("resize",()=>{Object(o.customVhUnit)()}),document.addEventListener("DOMContentLoaded",e=>{console.log("DOM fully loaded and parsed"),Object(o.removeHoverStyles)(),Object(o.customVhUnit)(),a()})},function(e,t,n){"use strict";function o(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function r(){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)}function i(){let e=navigator.userAgent.toLowerCase();-1!=e.indexOf("safari")&&(-1<e.indexOf("chrome")?console.log("Browser type: Chrome"):console.log("Browser type: Safari"))}function c(){if("ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints)try{for(var e in document.styleSheets){var t=document.styleSheets[e];if(t.rules)for(var n=t.rules.length-1;0<=n;n--)t.rules[n].selectorText&&t.rules[n].selectorText.match(":hover")&&t.deleteRule(n)}}catch(e){}}function l(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}function u(){window.innerHeight;document.documentElement.style.setProperty("--vw",`${vh}px`)}n.r(t),n.d(t,"isInViewport",function(){return o}),n.d(t,"isThisMobile",function(){return r}),n.d(t,"browserType",function(){return i}),n.d(t,"customVhUnit",function(){return l}),n.d(t,"customVwUnit",function(){return u}),n.d(t,"removeHoverStyles",function(){return c})},function(e,t,n){"use strict";function o(){if(luxon){let e=document.querySelectorAll(".footer-container .clock-container");e.forEach(e=>{let t=e.querySelector(".clock-style"),n=e.querySelector(".cityName");e=e.getAttribute("data-timezone");let o=luxon.DateTime.now().setZone(e);t.innerHTML=o.toFormat("HH:mm:ss");e=parseInt(o.toFormat("H"));9<=e&&e<=18&&n.classList.add("open")})}}n.r(t),n.d(t,"updateClock",function(){return o})},function(e,t,n){"use strict";function o(e){let o=Array.from(e[0].querySelectorAll("a")),r=document.querySelector("h1");for(let n=0;n<o.length;n++){let t=document.createElement("div");if(t.classList.add("thumbBg"),o[n].appendChild(t),o[n].addEventListener("mouseover",function(e){o.forEach(e=>{e.style.zIndex=0,r.classList.remove("headingHover")}),t.style.opacity=1,r.classList.add("headingHover"),e.currentTarget.style.zIndex=1}),o[n].addEventListener("mouseout",function(e){t.style.opacity=0,r.classList.remove("headingHover")}),o[n].querySelectorAll("div.image-set")[n]){let e=Array.from(o[n].getElementsByClassName("image-set"));e.forEach(e=>{var t=e.dataset.small,n=e.dataset.large;let o=new Image,r=new Image;o.classList.add("small"),o.src=t,r.classList.add("large"),r.src=n,e.appendChild(o),e.appendChild(r),o.addEventListener("mouseover",function(e){r.style.opacity=1}),o.addEventListener("mouseout",function(e){r.style.opacity=0})})}}}n.r(t),n.d(t,"indexImage",function(){return o})},function(e,t,n){"use strict";n.r(t),n.d(t,"hideNav",function(){return c}),n.d(t,"showNav",function(){return i}),n.d(t,"hideShow",function(){return l});var o=n(1);let r=window.pageYOffset;function i(e){e.classList.remove("hideNav"),e.classList.add("showNav")}function c(e){e.classList.remove("showNav"),e.classList.add("hideNav")}function l(e,t,n){(r>n||n<=0||Object(o.isInViewport)(t)?i:c)(e),r=n}},function(e,t,n){"use strict";n.r(t),n.d(t,"imageMove",function(){return u});let o=null,r=null,i=null,c=null,l=null;function u(t){for(let e=0;e<t.length;e++)t[e].addEventListener("mouseover",function(e){l=e.currentTarget.querySelector("img"),l.style.opacity=1}),t[e].addEventListener("mousemove",function(e){o=e.clientX,r=e.clientY,null===i&&(i=e.clientX,c=e.clientY)}),t[e].addEventListener("mouseout",function(e){l.style.opacity=0})}!function e(){i+=.2*(o-i),c+=.2*(r-c),l&&(l.style.transform=`translate3d(${i-(window.innerWidth+l.offsetWidth)/2}px, ${c-(window.innerHeight+l.offsetHeight)/2}px, 0px)`),requestAnimationFrame(e)}()}]);