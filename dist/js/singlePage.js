!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);var t=n(1),o=n(2),r=n(5),i=n(6),a=(n(4),setInterval(t.updateClock,1e3),setInterval(function(){let e=document.querySelector("nav.nav-toggle a.custom-nav-item"),t=document.querySelector("nav.nav-toggle a.custom-home"),n=document.querySelector("nav.custom-nav-touch"),o=Array.from(n.querySelectorAll("a.custom-nav-item")),r=[...o,t],i=document.querySelector("html");e&&(clearInterval(a),e.addEventListener("click",function(t,n,o){return function(e){n.parentNode.classList.toggle("toggle-width"),t.classList.toggle("mobile-nav-open"),t.classList.contains("mobile-nav-open")?(n.innerHTML="Close",o.classList.add("disableScroll")):(n.innerHTML="Menu",o.classList.remove("disableScroll")),e.preventDefault(),d=!d}}(n,e,i)),r.forEach(e=>{e.addEventListener("click",function(e){i.classList.contains("disableScroll")&&i.classList.remove("disableScroll")})}))},500)),c=setInterval(function(){{var e;document.querySelector("section.work-index-section > div")&&(e=document.querySelectorAll("div.index-items .index-item"),Object(o.indexImage)(e),clearInterval(c))}},500),l=setInterval(function(){{var e;document.querySelector("div.list")&&(e=Array.from(document.querySelectorAll("div.list a")),Object(i.imageMove)(e),clearInterval(l))}},500),s=setInterval(function(){let e=document.getElementsByClassName("custom-nav-desktop")[0],t=document.querySelector(".letter");m=Array.from(document.getElementsByClassName("letter")),u=!!t.classList.contains("letter-filter");e&&(window.addEventListener("scroll",f,{capture:!1,passive:!0}),clearInterval(s))},500);let d=!1,u=!1,m;function f(e){var t=document.querySelector(".custom-nav-desktop"),n=document.querySelector(".clock-container"),o=window.pageYOffset;"undefined"!=t&&Object(r.hideShow)(t,n,m,u,o)}window.addEventListener("load",e=>{console.log("Window load event")}),window.addEventListener("resize",e=>{let t=document.querySelector("nav.nav-toggle a.custom-nav-item"),n=document.querySelector("nav.custom-nav-touch"),o=document.querySelector("html");d&&(n.classList.contains("mobile-nav-open")&&(n.classList.remove("mobile-nav-open"),t.innerHTML="Menu",t.parentNode.classList.remove("toggle-width"),o.classList.remove("disableScroll")),d=!d)}),document.addEventListener("DOMContentLoaded",e=>{console.log("DOM fully loaded and parsed"),function(){let e=document.createElement("script");e.src="https://moment.github.io/luxon/global/luxon.min.js",document.body.appendChild(e)}()})},function(e,t,n){"use strict";function o(){if(luxon){let e=document.querySelectorAll(".footer-container .clock-container");e.forEach(e=>{let t=e.querySelector("h1");var n=t.getAttribute("data-city"),e=e.getAttribute("data-timezone");let o=luxon.DateTime.now().setZone(e);t.innerHTML=`${n}`+" "+o.toFormat("HH:mm:ss");n=parseInt(o.toFormat("HH"));9<=n&&n<=18?t.classList.add("open"):t.classList.remove("open")})}}n.r(t),n.d(t,"updateClock",function(){return o})},function(e,t,n){"use strict";n.r(t),n.d(t,"indexImage",function(){return p});var r=n(3),l=n(4);let s,o,i,d,u,a,m,c,f,v;function p(e){s=Array.from(e),i=document.body,d=document.querySelectorAll(".close")[0],o=document.querySelector("h1"),function(o){for(let n=0;n<o.length;n++){let e=Array.from(o[n].getElementsByClassName("image-set")),t=o[n].getElementsByClassName("numImages")[0];t&&(t.innerHTML=e.length),e.forEach(t=>{let e=document.createElement("div"),n=new Image;n.src=t.dataset.small;let o=new Image;o.src=t.dataset.large;let r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("p"),c=[i,a,e,r];t.dataset.caption&&(a.innerHTML=t.dataset.caption),e.classList.add("touchCover"),r.classList.add("small"),r.style.backgroundImage=`url(${n.src})`,i.classList.add("large"),i.style.backgroundImage=`url(${o.src})`,a.classList.add("caption"),t.replaceChildren(),c.forEach(e=>{t.appendChild(e)})})}u=Array.from(document.querySelectorAll(".small")),c=Array.from(document.querySelectorAll(".large")),f=Array.from(document.querySelectorAll(".touchCover")),a=Array.from(document.querySelectorAll(".index-item-info")),m=Array.from(document.querySelectorAll(".caption")),v=[c,f,m],r.desktops.forEach(e=>{e.addEventListener("change",S),S()}),r.tablets.forEach(e=>{e.addEventListener("change",k),k()}),d.addEventListener("click",function(e){E()})}(s)}function y(){s.forEach(e=>{e.removeEventListener("mouseover",h),e.removeEventListener("mouseout",h)}),u.forEach(e=>{e.removeEventListener("mouseover",g),e.removeEventListener("mouseout",g)})}function h(e){let t=e.currentTarget,n=t.querySelector(".index-item-info"),o=t.querySelector(".thumbBg"),r=t.querySelector(".image-set-wrapper");"mouseover"===e.type?(s.forEach(e=>{e.style.zIndex=1;let t=e.querySelector(".image-set-wrapper");t&&(t.classList.add("zeroOpacity"),t.classList.remove("fullOpacity"))}),t.style.zIndex=2,n.style.zIndex=5,r&&(r.classList.remove("zeroOpacity"),r.classList.add("fullOpacity")),o.classList.add("fullOpacity")):"mouseout"===e.type&&(t.style.setProperty("color","var(--white)"),o.classList.remove("fullOpacity"),s.forEach(e=>{e.style.zIndex=1;let t=e.querySelector(".image-set-wrapper");t&&(t.classList.add("fullOpacity"),t.classList.remove("zeroOpacity"))}))}function g(e){let t=e.currentTarget,n=t.parentNode,o=Array.from(Object(l.nthParent)(n,2).querySelectorAll(".small")),r=n.querySelector(".large"),i=n.querySelector(".caption");"mouseover"===e.type?(o.forEach(e=>{e.style.opacity=.25}),t.style.opacity=1,r.classList.add("fullOpacity"),i.classList.add("fullOpacity"),i.style.display="block"):"mouseout"===e.type&&(o.forEach(e=>{e.style.opacity=1}),r.classList.remove("fullOpacity"),i.classList.remove("fullOpacity"))}function w(e){let t=e.currentTarget.parentNode,n=Object(l.nthParent)(t,2);var o=t.querySelector(".touchCover"),r=t.querySelector(".large");let i=t.querySelector(".caption"),a=[o,r,i],c=n.querySelector(".index-item-info");document.querySelector("html").classList.add("disableScroll"),d.classList.add("showClose"),e.type,s.forEach(e=>{e.style.zIndex=1}),m.forEach(e=>{e.style.display="none"}),i.style.display="block",n.style.zIndex=2,c.classList.add("zeroOpacity"),u.forEach(e=>{e.style.pointerEvents="none",e.style.visibility="hidden"}),a.forEach(e=>{e.classList.add("fullOpacity")}),e.preventDefault()}function b(){E(),u.forEach(e=>{e.removeEventListener("click",w),e.removeEventListener("touchStart",w)})}function E(){document.querySelector("html").classList.remove("disableScroll"),d.classList.remove("showClose");for(let e=0;e<v.length;e++)v[e].forEach(e=>{e.classList.contains("fullOpacity")&&e.classList.remove("fullOpacity")});m.forEach(e=>{e.style.display="none"}),a.forEach(e=>{e.classList.contains("zeroOpacity")&&e.classList.remove("zeroOpacity")}),u.forEach(e=>{e.style.pointerEvents="auto",e.style.visibility="visible"})}function L(){b(),s.forEach(e=>{e.addEventListener("mouseover",h),e.addEventListener("mouseout",h)}),u.forEach(e=>{e.addEventListener("mouseover",g),e.addEventListener("mouseout",g)})}function x(){y(),u.forEach(e=>{e.addEventListener("click",w),e.addEventListener("touchStart",w)})}function S(e){L()}function k(e){(Object(l.hasTouch)()?x:L)()}},function(e,t,n){"use strict";n.r(t),n.d(t,"desktops",function(){return a}),n.d(t,"tablets",function(){return c});var o=window.matchMedia("screen and (min-width: 1170px)"),r=window.matchMedia("screen and (max-width: 1169px) and (min-width: 992px)"),i=window.matchMedia("screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)"),n=window.matchMedia("screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)"),t=window.matchMedia("screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)");window.matchMedia("screen and (max-width: 543px) and (hover: none)");const a=[o,r],c=[i,n,t]},function(e,t,n){"use strict";n.r(t),n.d(t,"isInViewport",function(){return i}),n.d(t,"browserType",function(){return a}),n.d(t,"customVhUnit",function(){return d}),n.d(t,"customVwUnit",function(){return u}),n.d(t,"removeHoverStyles",function(){return s}),n.d(t,"hasTouch",function(){return l}),n.d(t,"nthParent",function(){return c}),n.d(t,"cancelAnimationFrame",function(){return o}),n.d(t,"lerp",function(){return r});var o=window.cancelAnimationFrame||window.mozCancelAnimationFrame;function r(e,t,n){return(1-n)*e+n*t}function i(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function a(){let e=navigator.userAgent.toLowerCase();-1!=e.indexOf("safari")&&(-1<e.indexOf("chrome")?console.log("Browser type: Chrome"):console.log("Browser type: Safari"))}function c(e,t){for(;t--&&e;)e=e.parentNode;return e}function l(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints}function s(){if(console.log("remove Hover Styles"),l())try{for(var e in document.styleSheets){var t=document.styleSheets[e];if(t.rules)for(var n=t.rules.length-1;0<=n;n--)t.rules[n].selectorText&&t.rules[n].selectorText.match(":hover")&&t.deleteRule(n)}}catch(e){}}function d(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}function u(){window.innerHeight;document.documentElement.style.setProperty("--vw",`${vh}px`)}window.mobileCheck=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e}},function(e,t,n){"use strict";n.r(t),n.d(t,"hideNav",function(){return l}),n.d(t,"showNav",function(){return c}),n.d(t,"hideShow",function(){return r});var i=n(4);let a=window.pageYOffset;function c(e){e.classList.remove("hideNav"),e.classList.add("showNav")}function l(e){e.classList.remove("showNav"),e.classList.add("hideNav"),o(e)}let o=function(e){let t;function n(){c(e)}function o(){clearTimeout(t),t=setTimeout(n,4e3)}window.onload=o,document.onmousemove=o};function r(e,t,n,o,r){(a>r||r<=0||Object(i.isInViewport)(t)?c:l)(e),a=r,Object(i.isInViewport)(t)?o&&n.forEach(e=>{e.classList.remove("letter-filter")}):o&&n.forEach(e=>{e.classList.add("letter-filter")})}},function(e,t,n){"use strict";n.r(t),n.d(t,"imageMove",function(){return w});var o=n(3),r=n(4);let i=null,a=null,c=null,l=null,s=null,d=0,u=0,m=0,f=0,v,p,y=[],h,g;function w(e){p=e,p.forEach(e=>{y.push(e.querySelector("img"))}),o.desktops.forEach(e=>{e.addEventListener("change",q),q()}),o.tablets.forEach(e=>{e.addEventListener("change",O),O()}),v=document.querySelector("div.cursor div"),document.addEventListener("mousemove",function(e){d=e.pageX,u=e.pageY})}function b(e){let t=e.currentTarget,n=t.querySelector("h1");s=e.currentTarget.querySelector("img"),p.forEach(e=>{e.style.zIndex=0}),v.style.opacity=1,v.style.visibility="visible",t.style.zIndex=1,s.style.opacity=1,s.style.zIndex=-1,n.style.transform="translate(var(--four-units, 0px))"}function E(e){s=e.currentTarget.querySelector("img"),p.forEach(e=>{e.querySelector("h1").style.transform="translate(0px, 0px)"}),s.style.opacity=0,v.style.opacity=0,v.style.left="0px"}function L(e){i=e.clientX,a=e.clientY,null===c&&(c=e.clientX,l=e.clientY)}function x(){var e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;m+=.02*(d-m),f+=.02*(u-f),v&&(v.style.left=m+"px",v.style.top=f+"px"),h||s&&(s.style.transform=`translate3d(${c-s.offsetWidth/2-e/2}px, ${l-(s.offsetHeight/2-t/2)}px, 0px)`),c+=.03*(i-c),l+=.03*(a-l),g=window.requestAnimationFrame(x)}function S(){h=!1,y.forEach(e=>{e.style.opacity=0,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="none"}),p.forEach(e=>{e.addEventListener("mouseover",b),e.addEventListener("mousemove",L),e.addEventListener("mouseout",E)}),x()}function k(){p.forEach(e=>{e.removeEventListener("mouseover",b),e.removeEventListener("mousemove",L),e.removeEventListener("mouseout",E)}),window.cancelAnimationFrame(g),h=!0,y.forEach(e=>{e.style.opacity=1,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="auto"})}function q(e){S()}function O(e){(Object(r.hasTouch)()?k:S)()}}]);