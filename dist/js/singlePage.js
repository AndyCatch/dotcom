(()=>{"use strict";var n=[,(e,t,n)=>{n.r(t),n.d(t,{updateClock:()=>function(){luxon&&(document.querySelectorAll(".footer-container .clock-container").forEach(e=>{var t=e.querySelector("p"),n=t.getAttribute("data-city"),e=e.getAttribute("data-timezone"),e=luxon.DateTime.now().setZone(e),n=(t.innerHTML=n+" "+e.toFormat("HH:mm:ss"),parseInt(e.toFormat("HH")));9<=n&&n<=18?t.classList.add("open"):t.classList.remove("open")}),o||function(){{var e,t;luxon&&(e=document.getElementById("currentYear"),t=luxon.DateTime.now().setZone("America/New_York").c.year,e.innerHTML=t,o=!0)}}())}});let o=!1},(e,t,n)=>{n.r(t),n.d(t,{indexImage:()=>function(e){a=Array.from(e),s=document.body,c=document.querySelectorAll(".close")[0],o=document.querySelector("h1"),function(t){for(let e=0;e<t.length;e++){var n=Array.from(t[e].getElementsByClassName("image-set")),o=t[e].getElementsByClassName("numImages")[0];o&&(o.innerHTML=n.length),n.forEach(t=>{var e=document.createElement("div"),n=new Image,o=(n.src=t.dataset.small,new Image),i=(o.src=t.dataset.large,document.createElement("div")),r=document.createElement("div"),a=document.createElement("p"),s=[r,a,e,i];t.dataset.caption&&(a.innerHTML=t.dataset.caption),e.classList.add("touchCover"),i.classList.add("small"),i.style.backgroundImage=`url(${n.src})`,r.classList.add("large"),r.style.backgroundImage=`url(${o.src})`,a.classList.add("caption"),t.replaceChildren(),s.forEach(e=>{t.appendChild(e)})})}l=Array.from(document.querySelectorAll(".small")),m=Array.from(document.querySelectorAll(".large")),h=Array.from(document.querySelectorAll(".touchCover")),d=Array.from(document.querySelectorAll(".index-item-info")),u=Array.from(document.querySelectorAll(".caption")),f=[m,h,u],i.desktops.forEach(e=>{e.addEventListener("change",S),S()}),i.tablets.forEach(e=>{e.addEventListener("change",q),q()}),c.addEventListener("click",function(e){L()})}(a)}});var i=n(3),r=n(4);let a,o,s,c,l,d,u,m,h,f;function g(){a.forEach(e=>{e.removeEventListener("mouseover",v),e.removeEventListener("mouseout",v)}),l.forEach(e=>{e.removeEventListener("mouseover",p),e.removeEventListener("mouseout",p)})}function v(e){var t=e.currentTarget,n=t.querySelector(".index-item-info"),o=t.querySelector(".thumbBg"),i=t.querySelector(".image-set-wrapper");"mouseover"===e.type?(a.forEach(e=>{e.style.zIndex=1;e=e.querySelector(".image-set-wrapper");e&&(e.classList.add("zeroOpacity"),e.classList.remove("fullOpacity"))}),t.style.zIndex=2,n.style.zIndex=5,i&&(i.classList.remove("zeroOpacity"),i.classList.add("fullOpacity")),o.classList.add("fullOpacity")):"mouseout"===e.type&&(t.style.setProperty("color","var(--white)"),o.classList.remove("fullOpacity"),a.forEach(e=>{e.style.zIndex=1;e=e.querySelector(".image-set-wrapper");e&&(e.classList.add("fullOpacity"),e.classList.remove("zeroOpacity"))}))}function p(e){var t=e.currentTarget,n=t.parentNode,o=Array.from((0,r.nthParent)(n,2).querySelectorAll(".small")),i=n.querySelector(".large"),n=n.querySelector(".caption");"mouseover"===e.type?(o.forEach(e=>{e.style.opacity=.25}),t.style.opacity=1,i.classList.add("fullOpacity"),n.classList.add("fullOpacity"),n.style.display="block"):"mouseout"===e.type&&(o.forEach(e=>{e.style.opacity=1}),i.classList.remove("fullOpacity"),n.classList.remove("fullOpacity"))}function y(e){var t=e.currentTarget.parentNode,n=(0,r.nthParent)(t,2),o=t.querySelector(".touchCover"),i=t.querySelector(".large"),t=t.querySelector(".caption"),o=[o,i,t],i=n.querySelector(".index-item-info");document.querySelector("html").classList.add("disableScroll"),c.classList.add("showClose"),e.type,a.forEach(e=>{e.style.zIndex=1}),u.forEach(e=>{e.style.display="none"}),t.style.display="block",n.style.zIndex=2,i.classList.add("zeroOpacity"),l.forEach(e=>{e.style.pointerEvents="none",e.style.visibility="hidden"}),o.forEach(e=>{e.classList.add("fullOpacity")}),e.preventDefault()}function w(){L(),l.forEach(e=>{e.removeEventListener("click",y),e.removeEventListener("touchStart",y)})}function L(){document.querySelector("html").classList.remove("disableScroll"),c.classList.remove("showClose");for(let e=0;e<f.length;e++)f[e].forEach(e=>{e.classList.contains("fullOpacity")&&e.classList.remove("fullOpacity")});u.forEach(e=>{e.style.display="none"}),d.forEach(e=>{e.classList.contains("zeroOpacity")&&e.classList.remove("zeroOpacity")}),l.forEach(e=>{e.style.pointerEvents="auto",e.style.visibility="visible"})}function E(){w(),a.forEach(e=>{e.addEventListener("mouseover",v),e.addEventListener("mouseout",v)}),l.forEach(e=>{e.addEventListener("mouseover",p),e.addEventListener("mouseout",p)})}function x(){g(),l.forEach(e=>{e.addEventListener("click",y),e.addEventListener("touchStart",y)})}function S(e){E()}function q(e){((0,r.hasTouch)()?x:E)()}},(e,t,n)=>{n.r(t),n.d(t,{desktops:()=>a,tablets:()=>s});var n=window.matchMedia("screen and (min-width: 1170px)"),t=window.matchMedia("screen and (max-width: 1169px) and (min-width: 992px)"),o=window.matchMedia("screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)"),i=window.matchMedia("screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)"),r=window.matchMedia("screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)");window.matchMedia("screen and (max-width: 543px) and (hover: none)");const a=[n,t],s=[o,i,r]},(e,t,n)=>{n.r(t),n.d(t,{calculateDistance:()=>function(e,t){var n=t.x-e.x,t=t.y-e.y;return Math.sqrt(n*n+t*t)},cancelAnimationFrame:()=>o,customVhUnitPx:()=>function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vhPx",e+"px")},customVhUnitVal:()=>function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",""+e)},customVwUnitPx:()=>function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vwPx",e+"px")},customVwUnitVal:()=>function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vw",""+e)},getRandomArbitrary:()=>function(e,t){return Math.random()*(t-e)+e},getRandomInt:()=>function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},hasTouch:()=>function(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints},isInViewport:()=>function(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},lerp:()=>function(e,t,n){return(1-n)*e+n*t},navigationType:()=>function(){var e,t;window.performance.navigation&&255==(e=window.performance.navigation)&&(e=4);window.performance.getEntriesByType("navigation")&&("navigate"==(t=window.performance.getEntriesByType("navigation")[0].type)&&(e=0),"reload"==t&&(e=1),"back_forward"==t&&(e=2),"prerender"==t)&&(e=3);return e},nthParent:()=>function(e,t){for(;t--&&e;)e=e.parentNode;return e}});var o=window.cancelAnimationFrame||window.mozCancelAnimationFrame},(e,t,n)=>{n.r(t),n.d(t,{hideShow:()=>function(e,t,n,o,i){a>i||i<=0||(0,r.isInViewport)(t)?s(e,"show"):s(e,"hide");a=i,(0,r.isInViewport)(t)?o&&n.forEach(e=>{e.classList.remove("letter-filter")}):o&&n.forEach(e=>{e.classList.add("letter-filter")})},inactivityTime:()=>function(e){let t;function n(){s(e,"show")}document.onscroll=function(){clearTimeout(t),t=setTimeout(n,3e3)}}});var r=n(4);let a=window.scrollY;function s(e,t){e.classList.remove("show"===t?"hideNav":"showNav"),e.classList.add("show"===t?"showNav":"hideNav")}},(e,t,n)=>{n.r(t),n.d(t,{imageMove:()=>function(e){(g=e).forEach(e=>{v.push(e.querySelector(".pixelator"))}),o.desktops.forEach(e=>{e.addEventListener("change",M),M()}),o.tablets.forEach(e=>{e.addEventListener("change",A),A()}),f=document.querySelector("div.cursor div"),document.addEventListener("mousemove",function(e){d=e.pageX,u=e.pageY}),function(){let t=g.length;for(let e=0;e<g.length;e++)g[e].style.marginLeft=t*w+"%",t-=1}()}});var o=n(3),i=n(4);let r=null,a=null,s=null,c=null,l=null,d=0,u=0,m=0,h=0,f,g,v=[],p,y;const w=5.5;function L(e){let t=e.dataset.original;var n=new Image;n.src=t,n.onload=()=>{setTimeout(()=>{e.style.backgroundImage=`url(${t})`},1e3)}}function E(e){var t=e.currentTarget,n=t.querySelector("h1");l=e.currentTarget.querySelector(".pixelator"),g.forEach(e=>{e.style.zIndex=0}),f.style.opacity=1,f.style.visibility="visible",t.style.zIndex=1,l.classList.add("showingImage"),n.style.transform="translate(var(--four-units, 0px))",L(l)}function x(e){l=e.currentTarget.querySelector(".pixelator"),g.forEach(e=>{e.querySelector("h1").style.transform="translate(0px, 0px)"}),l.classList.remove("showingImage"),f.style.opacity=0,f.style.left="0px"}function S(e){r=e.clientX,a=e.clientY,null===s&&(s=e.clientX,c=e.clientY)}function q(){var e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;u,d,u;m+=.02*(d-m),h+=.02*(u-h),f&&l&&(f.style.left=m+"px",f.style.top=h+"px"),p||l&&(l.style.transform=`translate3d(${s-l.offsetWidth/3-e/2}px, ${c-(l.offsetHeight/2-t/2)}px, 0px)`),s+=.03*(r-s),c+=.03*(a-c),y=window.requestAnimationFrame(q)}function I(){p=!1,v.forEach(e=>{e.style.opacity=0,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="none"}),g.forEach(e=>{e.addEventListener("mouseover",E),e.addEventListener("mousemove",S),e.addEventListener("mouseout",x)}),q()}function b(){g.forEach(e=>{e.removeEventListener("mouseover",E),e.removeEventListener("mousemove",S),e.removeEventListener("mouseout",x)}),window.cancelAnimationFrame(y),p=!0,v.forEach(e=>{e.style.opacity=1,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="auto",L(e)})}function M(e){I()}function A(e){((0,i.hasTouch)()?b:I)()}},(e,t,n)=>{n.r(t),n.d(t,{resizeSequencer:()=>function(e){i.forEach(function(e,t){var n;e&&(n=Math.floor(e.ctx.canvas.parentNode.getBoundingClientRect().width),e.size(n,n))})},setCanvas:()=>function(){var e=document.getElementsByClassName("sequencer-project-square")[0];0<i.length&&i.replaceChildren();e&&configs.forEach(function(e,t){e.config.canvas=document.getElementById(configs[t].id);let n=document.getElementById(configs[t].id).parentNode.getElementsByClassName("sequenceLoader")[0];e.config.imageLoad=function(e){n.style.width=e.count/e.total*100+"%"},e.config.queueComplete=function(e){n.style.width="100%",n.style.backgroundColor="rgba(255, 69, 0, 0)"};t=o.sequencer.make(e.config),e=Math.floor(e.config.canvas.parentNode.getBoundingClientRect().width);t.size(e,e),i.push(t)})}});var o=n(8);const i=[]},(e,t,n)=>{n.r(t),n.d(t,{sequencer:()=>c});var i="ontouchstart"in window||navigator.msMaxTouchPoints;function l(e,t){e=e.match(new RegExp(`.*(?=${t})`));return null===e?"":e.join("")}function d(e,t){e=e.match(new RegExp(`[^${t}]+$`));return null===e?"":e[0]}function u(e){e=e.match(/\d+(?!.*\d)/g);return null===e?"":e[0]}function m(e){console.warn("Can’t parse the file sequence correctly, returning [].\nReason: "+e)}const o=[];class r{constructor(e){if(this.config={canvas:null,list:[],from:"",to:"",step:1,scaleMode:"cover",direction:"x",playMode:"drag",loop:"loop",interval:0,autoLoad:"all",fitFirstImage:!1,showLoadedImages:!1,dragAmount:10,hiDPI:!0,smoothing:!0,...e},""==this.config.from&&""==this.config.to&&0==this.config.list.length)return console.error("Missing filenames."),!1;if(null===this.config.canvas){const e=document.createElement("canvas");document.body.appendChild(e),this.config.canvas=e,this.config.fitFirstImage=!0}this.pointer={x:0,y:0,down:!1},this.current=-1,this.images=[],this.directionSign=/-/.test(this.config.direction)?-1:1,this.lastLoaded=-1,this.pongSign=1,this.ctx=this.config.canvas.getContext("2d"),this.list=0<this.config.list.length?this.config.list:function(t,e,n=1){var o=[],i=u(t);if(""===i)m("the first filename doesn’t contain a number.");else{var r=u(e);if(""===r)m("the last filename doesn’t contain a number.");else{var a=l(t,i),s=d(t,i);if(a!==l(e,r)||s!==d(e,r))m("the base-names of '"+t+"' and '"+e+"' don’t match.");else if(0!=i.charAt(0)&&0!=r.charAt(0)||i.length==r.length){var t=parseInt(i),c=parseInt(r);for(let e=t;e<=c;e+=n)o.push(a+(e+"").padStart(i.length,"0")+s)}else m("wrong number of leading zeros.")}}return o}(this.config.from,this.config.to,this.config.step),this.size(this.ctx.canvas.width,this.ctx.canvas.height),"first"==this.config.autoLoad?s(this.images,[this.list.shift()],a.bind(null,this)):"all"==this.config.autoLoad&&this.load()}load(){this.load=function(){console.log("load() can be called only once.")},s(this.images,this.list,a.bind(null,this),function(e,t){"function"==typeof e.config.queueComplete&&(t.sequencer=e).config.queueComplete(t),"function"==typeof e.queueComplete&&e.queueComplete(t),e.run(),e.config.showLoadedImages||"none"===e.config.playMode||e.drawImage(0)}.bind(null,this))}run(){const o=i?"touchmove":"mousemove",e=i?"touchstart":"mousedown",t=i?"touchend":"mouseup";if("hover"===this.config.playMode)this.ctx.canvas.addEventListener(o,function(e,t){var n=e.images.length,o=e.config.hiDPI?window.devicePixelRatio:1;let i,r,a,s;r=t.touches?(i=t.touches[0].pageX-t.touches[0].target.offsetLeft,t.touches[0].pageY-t.touches[0].target.offsetTop):(i=t.offsetX,t.offsetY),"x"==e.config.direction?(s=e.ctx.canvas.width/o,a=i):"-x"==e.config.direction?(s=e.ctx.canvas.width/o,a=s-i-1):"y"==e.config.direction?(s=e.ctx.canvas.height/o,a=r):"-y"==e.config.direction&&(s=e.ctx.canvas.height/o,a=s-r-1);o=Math.floor(a/s*n),n=n-1;n=o<0?0:n<o?n:o;n!=e.current&&(e.drawImage(n),e.current=n),t.preventDefault()}.bind(null,this));else if("drag"===this.config.playMode)this.ctx.canvas.addEventListener(o,function(i,r){if(i.pointer.down){var a=i.images.length;let e,t,n=(t=r.touches?(e=r.touches[0].pageX-r.touches[0].target.offsetLeft,r.touches[0].pageY-r.touches[0].target.offsetTop):(e=r.offsetX,r.offsetY),0),o=(/x/.test(i.config.direction)?n=(e-i.pointer.x)*i.directionSign:/y/.test(i.config.direction)&&(n=(t-i.pointer.y)*i.directionSign),i.pointer.currentId+Math.floor(n/i.config.dragAmount));o<0?o=a- -o%a:o>a&&(o%=a),o!=i.current&&(i.drawImage(o),i.current=o),r.preventDefault()}}.bind(null,this)),this.ctx.canvas.addEventListener(e,function(e,t){let n,o;o=t.touches?(n=t.touches[0].pageX-t.touches[0].target.offsetLeft,t.touches[0].pageY-t.touches[0].target.offsetTop):(n=t.offsetX,t.offsetY),e.pointer={x:n,y:o,down:!0,currentId:e.current}}.bind(null,this)),document.addEventListener(t,function(e,t){e.pointer.down=!1}.bind(null,this));else if("auto"===this.config.playMode){let n=0;const o=e=>{var t=e-n;t>=this.config.interval&&(this.nextImage(),n=Math.max(e,e-(t-this.config.interval))),requestAnimationFrame(o)};requestAnimationFrame(o)}}nextImage(e){"pong"===(e=e||this.config.loop)?(this.current+=this.pongSign,this.current>=this.images.length-1?(this.pongSign=-1,this.current=this.images.length-1):this.current<=0&&(this.pongSign=1,this.current=0),this.drawImage(this.current)):this.drawImage(++this.current%this.images.length)}drawImage(n){if(!((n=void 0===n?this.current:n)<0||n>=this.images.length)){var o=this.config.hiDPI?window.devicePixelRatio:1,i=this.ctx.canvas.width/o,r=this.ctx.canvas.height/o,a=i/r,n=this.images[n],s=n.width/n.height;let e,t;"cover"==this.config.scaleMode?s<a?(e=i,t=e/s):(t=r,e=t*s):"contain"==this.config.scaleMode?a<s?(e=i,t=e/s):(t=r,e=t*s):(e=n.width,t=n.height);a=i/2-e/2,s=r/2-t/2;this.ctx.save(),this.ctx.scale(o,o),this.ctx.clearRect(0,0,i,r),this.ctx.imageSmoothingEnabled=this.config.smoothing,this.ctx.drawImage(n,0,0,n.width,n.height,Math.floor(a),Math.floor(s),Math.ceil(e),Math.ceil(t)),this.ctx.restore()}}size(e,t){var n=this.config.hiDPI?window.devicePixelRatio:1,o=this.ctx.canvas;o.width=e*n,o.height=t*n,o.style.width=e+"px",o.style.height=t+"px",this.drawImage()}}function a(e,t){t.id>e.lastLoaded&&e.config.showLoadedImages&&(e.drawImage(t.id),e.lastLoaded=t.id),"function"==typeof e.config.imageLoad&&(t.sequencer=e).config.imageLoad(t),"function"==typeof e.imageLoad&&(t.sequencer=e).imageLoad(t),0===t.id&&(e.config.fitFirstImage&&(e.size(t.img.width,t.img.height),e.config.fitFirstImage=!1),e.drawImage(0),e.current=0)}function s(i,r,a,s){var t=Math.min(r.length,4);let c=i.length-1,l=i.length;for(let e=0;e<t;e++)!function t(){if(c>=r.length-1)return;c++;const n=new Image;var o;n.src=r[c],o=c,n.onload=e=>{"function"==typeof a&&a({id:o,img:n,count:++l,total:r.length}),l<r.length&&t(),l==r.length&&"function"==typeof s&&s({total:r.length})},n.onerror=e=>{console.error("Error with: "+r[o])},i.push(n)}()}var c={make:function(e){e=new r(e);return!1!==e&&o.push(e),e},instances:o}}],o={};function r(e){var t=o[e];return void 0!==t||(t=o[e]={exports:{}},n[e](t,t.exports,r)),t.exports}r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var e={};{r.r(e);var e=r(1),t=r(2),c=r(5),l=r(6),d=r(7),u=r(4),m=r(3),h=(setInterval(e.updateClock,1e3),setInterval(function(){let e=document.querySelector("nav.nav-toggle a.custom-nav-item"),t=document.querySelector("nav.custom-nav-touch"),n=document.querySelector("nav.custom-nav-touch div.touch-menu-bg"),o=Array.from(t.querySelectorAll("a.custom-nav-item")),i=[...o],r=document.querySelector("html");e&&(clearInterval(h),e.addEventListener("click",w(t,e,r)),n.addEventListener("click",w(t,e,r)),i.forEach(e=>{e.addEventListener("click",function(e){r.classList.contains("disableScroll")&&r.classList.remove("disableScroll")})}))},500)),f=setInterval(function(){{var e;document.querySelector("section.work-index-section > div")&&(e=document.querySelectorAll("div.index-items .index-item"),(0,t.indexImage)(e),clearInterval(f))}},500),g=setInterval(function(){{var e;document.querySelector("div.list")&&(e=Array.from(document.querySelectorAll("div.list a")),(0,l.imageMove)(e),clearInterval(g))}},500),v=setInterval(function(){var e=document.getElementsByClassName("custom-nav-desktop")[0],t=document.querySelector(".letter");s=Array.from(document.getElementsByClassName("letter")),a=!!t.classList.contains("letter-filter");e&&(clearInterval(v),window.addEventListener("scroll",_.throttle(L,300),{capture:!1,passive:!0}),(0,c.inactivityTime)(e))},500),p=setInterval(function(){var e=document.getElementsByClassName("sequencer-project-square")[0];e&&(0,d.setCanvas)(),clearInterval(p)},500);let i=!1,a=!1,s;function y(e){var t=document.querySelector("nav.nav-toggle a.custom-nav-item"),n=document.querySelector("nav.custom-nav-touch"),o=document.querySelector("html");i&&(n.classList.contains("mobile-nav-open")&&(n.classList.remove("mobile-nav-open"),t.parentNode.classList.remove("toggle-width"),o.classList.remove("disableScroll")),i=!i)}function w(t,n,o){return function(e){n.parentNode.classList.toggle("toggle-width"),t.classList.toggle("mobile-nav-open"),t.classList.contains("mobile-nav-open")?o.classList.add("disableScroll"):o.classList.remove("disableScroll"),e.preventDefault(),i=!i}}function L(e){var t=document.querySelector(".custom-nav-desktop"),n=document.querySelector(".clock-container"),o=window.scrollY||window.pageYOffset,i=document.querySelector(".showMoreMarker"),r=document.querySelector(".semplice-cover .show-more");"undefined"!=t&&(0,c.hideShow)(t,n,s,a,o),i&&((0,u.isInViewport)(i)?r&&r.classList.remove("show-more-hide"):r&&r.classList.add("show-more-hide")),E()}function E(){(0,u.customVhUnitVal)();var e=document.querySelector(".sections .semplice-cover"),t=Number(getComputedStyle(document.body).getPropertyValue("--vh"));e&&e.style.setProperty("height",100*t+"px","important")}feather.replace(),window.addEventListener("load",e=>{console.log("Window load event");var t=document.querySelector(".project-image-container"),n=document.querySelector(".semplice-cover .show-more");n&&!(0,u.isInViewport)(t)&&!1===n.classList.contains("show-more-hide")&&n.classList.add("show-more-hide")}),window.addEventListener("sempliceTransitionsDone",function e(t){E();window.removeEventListener("sempliceTransitionsDone",e,!1)},!1),m.desktops.forEach(e=>{e.addEventListener("change",y)}),window.addEventListener("resize",e=>{y(),(0,d.resizeSequencer)(e)}),document.addEventListener("DOMContentLoaded",e=>{console.log("DOM fully loaded and parsed"),feather.replace()})}})();