(()=>{"use strict";var n=[,(e,t,n)=>{n.r(t),n.d(t,{updateClock:()=>function(){luxon&&document.querySelectorAll(".footer-container .clock-container").forEach(e=>{var t=e.querySelector("h1"),n=t.getAttribute("data-city"),e=e.getAttribute("data-timezone"),e=luxon.DateTime.now().setZone(e),n=(t.innerHTML=n+" "+e.toFormat("HH:mm:ss"),parseInt(e.toFormat("HH")));9<=n&&n<=18?t.classList.add("open"):t.classList.remove("open")})}})},(e,t,n)=>{n.r(t),n.d(t,{indexImage:()=>function(e){r=Array.from(e),s=document.body,c=document.querySelectorAll(".close")[0],o=document.querySelector("h1"),function(t){for(let e=0;e<t.length;e++){var n=Array.from(t[e].getElementsByClassName("image-set")),o=t[e].getElementsByClassName("numImages")[0];o&&(o.innerHTML=n.length),n.forEach(t=>{var e=document.createElement("div"),n=new Image,o=(n.src=t.dataset.small,new Image),i=(o.src=t.dataset.large,document.createElement("div")),a=document.createElement("div"),r=document.createElement("p"),s=[a,r,e,i];t.dataset.caption&&(r.innerHTML=t.dataset.caption),e.classList.add("touchCover"),i.classList.add("small"),i.style.backgroundImage=`url(${n.src})`,a.classList.add("large"),a.style.backgroundImage=`url(${o.src})`,r.classList.add("caption"),t.replaceChildren(),s.forEach(e=>{t.appendChild(e)})})}l=Array.from(document.querySelectorAll(".small")),h=Array.from(document.querySelectorAll(".large")),m=Array.from(document.querySelectorAll(".touchCover")),d=Array.from(document.querySelectorAll(".index-item-info")),u=Array.from(document.querySelectorAll(".caption")),f=[h,m,u],i.desktops.forEach(e=>{e.addEventListener("change",S),S()}),i.tablets.forEach(e=>{e.addEventListener("change",I),I()}),c.addEventListener("click",function(e){L()})}(r)}});var i=n(3),a=n(4);let r,o,s,c,l,d,u,h,m,f;function g(){r.forEach(e=>{e.removeEventListener("mouseover",v),e.removeEventListener("mouseout",v)}),l.forEach(e=>{e.removeEventListener("mouseover",p),e.removeEventListener("mouseout",p)})}function v(e){var t=e.currentTarget,n=t.querySelector(".index-item-info"),o=t.querySelector(".thumbBg"),i=t.querySelector(".image-set-wrapper");"mouseover"===e.type?(r.forEach(e=>{e.style.zIndex=1;e=e.querySelector(".image-set-wrapper");e&&(e.classList.add("zeroOpacity"),e.classList.remove("fullOpacity"))}),t.style.zIndex=2,n.style.zIndex=5,i&&(i.classList.remove("zeroOpacity"),i.classList.add("fullOpacity")),o.classList.add("fullOpacity")):"mouseout"===e.type&&(t.style.setProperty("color","var(--white)"),o.classList.remove("fullOpacity"),r.forEach(e=>{e.style.zIndex=1;e=e.querySelector(".image-set-wrapper");e&&(e.classList.add("fullOpacity"),e.classList.remove("zeroOpacity"))}))}function p(e){var t=e.currentTarget,n=t.parentNode,o=Array.from((0,a.nthParent)(n,2).querySelectorAll(".small")),i=n.querySelector(".large"),n=n.querySelector(".caption");"mouseover"===e.type?(o.forEach(e=>{e.style.opacity=.25}),t.style.opacity=1,i.classList.add("fullOpacity"),n.classList.add("fullOpacity"),n.style.display="block"):"mouseout"===e.type&&(o.forEach(e=>{e.style.opacity=1}),i.classList.remove("fullOpacity"),n.classList.remove("fullOpacity"))}function y(e){var t=e.currentTarget.parentNode,n=(0,a.nthParent)(t,2),o=t.querySelector(".touchCover"),i=t.querySelector(".large"),t=t.querySelector(".caption"),o=[o,i,t],i=n.querySelector(".index-item-info");document.querySelector("html").classList.add("disableScroll"),c.classList.add("showClose"),e.type,r.forEach(e=>{e.style.zIndex=1}),u.forEach(e=>{e.style.display="none"}),t.style.display="block",n.style.zIndex=2,i.classList.add("zeroOpacity"),l.forEach(e=>{e.style.pointerEvents="none",e.style.visibility="hidden"}),o.forEach(e=>{e.classList.add("fullOpacity")}),e.preventDefault()}function w(){L(),l.forEach(e=>{e.removeEventListener("click",y),e.removeEventListener("touchStart",y)})}function L(){document.querySelector("html").classList.remove("disableScroll"),c.classList.remove("showClose");for(let e=0;e<f.length;e++)f[e].forEach(e=>{e.classList.contains("fullOpacity")&&e.classList.remove("fullOpacity")});u.forEach(e=>{e.style.display="none"}),d.forEach(e=>{e.classList.contains("zeroOpacity")&&e.classList.remove("zeroOpacity")}),l.forEach(e=>{e.style.pointerEvents="auto",e.style.visibility="visible"})}function x(){w(),r.forEach(e=>{e.addEventListener("mouseover",v),e.addEventListener("mouseout",v)}),l.forEach(e=>{e.addEventListener("mouseover",p),e.addEventListener("mouseout",p)})}function E(){g(),l.forEach(e=>{e.addEventListener("click",y),e.addEventListener("touchStart",y)})}function S(e){x()}function I(e){((0,a.hasTouch)()?E:x)()}},(e,t,n)=>{n.r(t),n.d(t,{desktops:()=>r,tablets:()=>s});var n=window.matchMedia("screen and (min-width: 1170px)"),t=window.matchMedia("screen and (max-width: 1169px) and (min-width: 992px)"),o=window.matchMedia("screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)"),i=window.matchMedia("screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)"),a=window.matchMedia("screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)");window.matchMedia("screen and (max-width: 543px) and (hover: none)");const r=[n,t],s=[o,i,a]},(e,t,n)=>{n.r(t),n.d(t,{calculateDistance:()=>function(e,t){var n=t.x-e.x,t=t.y-e.y;return Math.sqrt(n*n+t*t)},cancelAnimationFrame:()=>o,customVhUnit:()=>function(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",e+"px")},customVwUnit:()=>function(){window.innerHeight;document.documentElement.style.setProperty("--vw",vh+"px")},getRandomArbitrary:()=>function(e,t){return Math.random()*(t-e)+e},getRandomInt:()=>function(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e+1))+e},hasTouch:()=>function(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints},isInViewport:()=>function(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)},lerp:()=>function(e,t,n){return(1-n)*e+n*t},nthParent:()=>function(e,t){for(;t--&&e;)e=e.parentNode;return e}});var o=window.cancelAnimationFrame||window.mozCancelAnimationFrame},(e,t,n)=>{n.r(t),n.d(t,{hideShow:()=>function(e,t,n,o,i){r>i||i<=0||(0,a.isInViewport)(t)?s(e,"show"):s(e,"hide");r=i,(0,a.isInViewport)(t)?o&&n.forEach(e=>{e.classList.remove("letter-filter")}):o&&n.forEach(e=>{e.classList.add("letter-filter")})},inactivityTime:()=>function(e){let t;function n(){s(e,"show")}document.onscroll=function(){clearTimeout(t),t=setTimeout(n,4e3)}}});var a=n(4);let r=window.pageYOffset;function s(e,t){e.classList.remove("show"===t?"hideNav":"showNav"),e.classList.add("show"===t?"showNav":"hideNav")}},(e,t,n)=>{n.r(t),n.d(t,{imageMove:()=>function(e){(g=e).forEach(e=>{v.push(e.querySelector(".pixelator"))}),o.desktops.forEach(e=>{e.addEventListener("change",M),M()}),o.tablets.forEach(e=>{e.addEventListener("change",A),A()}),f=document.querySelector("div.cursor div"),document.addEventListener("mousemove",function(e){d=e.pageX,u=e.pageY}),function(){let t=g.length;for(let e=0;e<g.length;e++)g[e].style.marginLeft=t*w+"%",t-=1}()}});var o=n(3),i=n(4);let a=null,r=null,s=null,c=null,l=null,d=0,u=0,h=0,m=0,f,g,v=[],p,y;const w=5;function L(e){let t=e.dataset.original;var n=new Image;n.src=t,n.onload=()=>{setTimeout(()=>{e.style.backgroundImage=`url(${t})`},1e3)}}function x(e){var t=e.currentTarget,n=t.querySelector("h1");l=e.currentTarget.querySelector(".pixelator"),g.forEach(e=>{e.style.zIndex=0}),f.style.opacity=1,f.style.visibility="visible",t.style.zIndex=1,l.classList.add("showingImage"),n.style.transform="translate(var(--four-units, 0px))",L(l)}function E(e){l=e.currentTarget.querySelector(".pixelator"),g.forEach(e=>{e.querySelector("h1").style.transform="translate(0px, 0px)"}),l.classList.remove("showingImage"),f.style.opacity=0,f.style.left="0px"}function S(e){a=e.clientX,r=e.clientY,null===s&&(s=e.clientX,c=e.clientY)}function I(){var e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;u,d,u;h+=.02*(d-h),m+=.02*(u-m),f&&l&&(f.style.left=h+"px",f.style.top=m+"px"),p||l&&(l.style.transform=`translate3d(${s-l.offsetWidth/3-e/2}px, ${c-(l.offsetHeight/2-t/2)}px, 0px)`),s+=.03*(a-s),c+=.03*(r-c),y=window.requestAnimationFrame(I)}function q(){p=!1,v.forEach(e=>{e.style.opacity=0,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="none"}),g.forEach(e=>{e.addEventListener("mouseover",x),e.addEventListener("mousemove",S),e.addEventListener("mouseout",E)}),I()}function b(){g.forEach(e=>{e.removeEventListener("mouseover",x),e.removeEventListener("mousemove",S),e.removeEventListener("mouseout",E)}),window.cancelAnimationFrame(y),p=!0,v.forEach(e=>{e.style.opacity=1,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="auto",L(e)})}function M(e){q()}function A(e){((0,i.hasTouch)()?b:q)()}},(e,t,n)=>{n.r(t),n.d(t,{resizeSequencer:()=>function(e){a.forEach(function(e,t){var n;e&&(n=Math.floor(e.ctx.canvas.parentNode.getBoundingClientRect().width),e.size(n,n))})}});var o=n(8);const i=[],a=[];var r=setInterval(function(){var e=document.querySelector("canvas");e&&(clearInterval(r),i.forEach(function(e,t){e.canvas=document.querySelector("canvas");var n=o.sequencer.make(e);n.size(e.canvas.parentNode.offsetWidth,e.canvas.parentNode.offsetHeight),a.push(n)}))},500);i.push({from:"https://andycatch.com/proto/wp-content/uploads/2023/08/KIDA01.png",to:"https://andycatch.com/proto/wp-content/uploads/2023/08/KIDA16.png",playMode:"hover",direction:"x",showLoadedImages:!0,scaleMode:"contain"})},(e,t,n)=>{n.r(t),n.d(t,{sequencer:()=>c});var i="ontouchstart"in window||navigator.msMaxTouchPoints;function l(e,t){e=e.match(new RegExp(`.*(?=${t})`));return null===e?"":e.join("")}function d(e,t){e=e.match(new RegExp(`[^${t}]+$`));return null===e?"":e[0]}function u(e){e=e.match(/\d+(?!.*\d)/g);return null===e?"":e[0]}function h(e){console.warn("Can’t parse the file sequence correctly, returning [].\nReason: "+e)}const o=[];class a{constructor(e){if(this.config={canvas:null,list:[],from:"",to:"",step:1,scaleMode:"cover",direction:"x",playMode:"drag",loop:"loop",interval:0,autoLoad:"all",fitFirstImage:!1,showLoadedImages:!1,dragAmount:10,hiDPI:!0,smoothing:!0,...e},""==this.config.from&&""==this.config.to&&0==this.config.list.length)return console.error("Missing filenames."),!1;if(null===this.config.canvas){const e=document.createElement("canvas");document.body.appendChild(e),this.config.canvas=e,this.config.fitFirstImage=!0}this.pointer={x:0,y:0,down:!1},this.current=-1,this.images=[],this.directionSign=/-/.test(this.config.direction)?-1:1,this.lastLoaded=-1,this.pongSign=1,this.ctx=this.config.canvas.getContext("2d"),this.list=0<this.config.list.length?this.config.list:function(t,e,n=1){var o=[],i=u(t);if(""===i)h("the first filename doesn’t contain a number.");else{var a=u(e);if(""===a)h("the last filename doesn’t contain a number.");else{var r=l(t,i),s=d(t,i);if(r!==l(e,a)||s!==d(e,a))h("the base-names of '"+t+"' and '"+e+"' don’t match.");else if(0!=i.charAt(0)&&0!=a.charAt(0)||i.length==a.length){var t=parseInt(i),c=parseInt(a);for(let e=t;e<=c;e+=n)o.push(r+(e+"").padStart(i.length,"0")+s)}else h("wrong number of leading zeros.")}}return o}(this.config.from,this.config.to,this.config.step),this.size(this.ctx.canvas.width,this.ctx.canvas.height),"first"==this.config.autoLoad?s(this.images,[this.list.shift()],r.bind(null,this)):"all"==this.config.autoLoad&&this.load()}load(){this.load=function(){console.log("load() can be called only once.")},s(this.images,this.list,r.bind(null,this),function(e,t){"function"==typeof e.config.queueComplete&&(t.sequencer=e).config.queueComplete(t),"function"==typeof e.queueComplete&&e.queueComplete(t),e.run(),e.config.showLoadedImages||"none"===e.config.playMode||e.drawImage(0)}.bind(null,this))}run(){const o=i?"touchmove":"mousemove",e=i?"touchstart":"mousedown",t=i?"touchend":"mouseup";if("hover"===this.config.playMode)this.ctx.canvas.addEventListener(o,function(e,t){var n=e.images.length,o=e.config.hiDPI?window.devicePixelRatio:1;let i,a,r,s;a=t.touches?(i=t.touches[0].pageX-t.touches[0].target.offsetLeft,t.touches[0].pageY-t.touches[0].target.offsetTop):(i=t.offsetX,t.offsetY),"x"==e.config.direction?(s=e.ctx.canvas.width/o,r=i):"-x"==e.config.direction?(s=e.ctx.canvas.width/o,r=s-i-1):"y"==e.config.direction?(s=e.ctx.canvas.height/o,r=a):"-y"==e.config.direction&&(s=e.ctx.canvas.height/o,r=s-a-1);o=Math.floor(r/s*n),n=n-1;n=o<0?0:n<o?n:o;n!=e.current&&(e.drawImage(n),e.current=n),t.preventDefault()}.bind(null,this));else if("drag"===this.config.playMode)this.ctx.canvas.addEventListener(o,function(i,a){if(i.pointer.down){var r=i.images.length;let e,t,n=(t=a.touches?(e=a.touches[0].pageX-a.touches[0].target.offsetLeft,a.touches[0].pageY-a.touches[0].target.offsetTop):(e=a.offsetX,a.offsetY),0),o=(/x/.test(i.config.direction)?n=(e-i.pointer.x)*i.directionSign:/y/.test(i.config.direction)&&(n=(t-i.pointer.y)*i.directionSign),i.pointer.currentId+Math.floor(n/i.config.dragAmount));o<0?o=r- -o%r:o>r&&(o%=r),o!=i.current&&(i.drawImage(o),i.current=o),a.preventDefault()}}.bind(null,this)),this.ctx.canvas.addEventListener(e,function(e,t){let n,o;o=t.touches?(n=t.touches[0].pageX-t.touches[0].target.offsetLeft,t.touches[0].pageY-t.touches[0].target.offsetTop):(n=t.offsetX,t.offsetY),e.pointer={x:n,y:o,down:!0,currentId:e.current}}.bind(null,this)),document.addEventListener(t,function(e,t){e.pointer.down=!1}.bind(null,this));else if("auto"===this.config.playMode){let n=0;const o=e=>{var t=e-n;t>=this.config.interval&&(this.nextImage(),n=Math.max(e,e-(t-this.config.interval))),requestAnimationFrame(o)};requestAnimationFrame(o)}}nextImage(e){"pong"===(e=e||this.config.loop)?(this.current+=this.pongSign,this.current>=this.images.length-1?(this.pongSign=-1,this.current=this.images.length-1):this.current<=0&&(this.pongSign=1,this.current=0),this.drawImage(this.current)):this.drawImage(++this.current%this.images.length)}drawImage(n){if(!((n=void 0===n?this.current:n)<0||n>=this.images.length)){var o=this.config.hiDPI?window.devicePixelRatio:1,i=this.ctx.canvas.width/o,a=this.ctx.canvas.height/o,r=i/a,n=this.images[n],s=n.width/n.height;let e,t;"cover"==this.config.scaleMode?s<r?(e=i,t=e/s):(t=a,e=t*s):"contain"==this.config.scaleMode?r<s?(e=i,t=e/s):(t=a,e=t*s):(e=n.width,t=n.height);r=i/2-e/2,s=a/2-t/2;this.ctx.save(),this.ctx.scale(o,o),this.ctx.clearRect(0,0,i,a),this.ctx.imageSmoothingEnabled=this.config.smoothing,this.ctx.drawImage(n,0,0,n.width,n.height,Math.floor(r),Math.floor(s),Math.ceil(e),Math.ceil(t)),this.ctx.restore()}}size(e,t){var n=this.config.hiDPI?window.devicePixelRatio:1,o=this.ctx.canvas;o.width=e*n,o.height=t*n,o.style.width=e+"px",o.style.height=t+"px",this.drawImage()}}function r(e,t){t.id>e.lastLoaded&&e.config.showLoadedImages&&(e.drawImage(t.id),e.lastLoaded=t.id),"function"==typeof e.config.imageLoad&&(t.sequencer=e).config.imageLoad(t),"function"==typeof e.imageLoad&&(t.sequencer=e).imageLoad(t),0===t.id&&(e.config.fitFirstImage&&(e.size(t.img.width,t.img.height),e.config.fitFirstImage=!1),e.drawImage(0),e.current=0)}function s(i,a,r,s){var t=Math.min(a.length,4);let c=i.length-1,l=i.length;for(let e=0;e<t;e++)!function t(){if(c>=a.length-1)return;c++;const n=new Image;var o;n.src=a[c],o=c,n.onload=e=>{"function"==typeof r&&r({id:o,img:n,count:++l,total:a.length}),l<a.length&&t(),l==a.length&&"function"==typeof s&&s({total:a.length})},n.onerror=e=>{console.error("Error with: "+a[o])},i.push(n)}()}var c={make:function(e){e=new a(e);return!1!==e&&o.push(e),e},instances:o}}],o={};function s(e){var t=o[e];return void 0!==t||(t=o[e]={exports:{}},n[e](t,t.exports,s)),t.exports}s.d=(e,t)=>{for(var n in t)s.o(t,n)&&!s.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var e={};{s.r(e);var e=s(1),t=s(2),c=s(5),l=s(6),d=s(7),u=(setInterval(e.updateClock,1e3),setInterval(function(){let e=document.querySelector("nav.nav-toggle a.custom-nav-item"),t=document.querySelector("nav.custom-nav-touch"),n=document.querySelector("nav.custom-nav-touch div.touch-menu-bg"),o=Array.from(t.querySelectorAll("a.custom-nav-item")),i=[...o],a=document.querySelector("html");e&&(clearInterval(u),e.addEventListener("click",g(t,e,a)),n.addEventListener("click",g(t,e,a)),i.forEach(e=>{e.addEventListener("click",function(e){a.classList.contains("disableScroll")&&a.classList.remove("disableScroll")})}))},500)),h=setInterval(function(){{var e;document.querySelector("section.work-index-section > div")&&(e=document.querySelectorAll("div.index-items .index-item"),(0,t.indexImage)(e),clearInterval(h))}},500),m=setInterval(function(){{var e;document.querySelector("div.list")&&(e=Array.from(document.querySelectorAll("div.list a")),(0,l.imageMove)(e),clearInterval(m))}},500),f=setInterval(function(){var e=document.getElementsByClassName("custom-nav-desktop")[0],t=document.querySelector(".letter");r=Array.from(document.getElementsByClassName("letter")),a=!!t.classList.contains("letter-filter");e&&(clearInterval(f),window.addEventListener("scroll",v,{capture:!1,passive:!0}),(0,c.inactivityTime)(e))},500);let i=!1,a=!1,r;function g(t,n,o){return function(e){n.parentNode.classList.toggle("toggle-width"),t.classList.toggle("mobile-nav-open"),t.classList.contains("mobile-nav-open")?o.classList.add("disableScroll"):o.classList.remove("disableScroll"),e.preventDefault(),i=!i}}function v(e){var t=document.querySelector(".custom-nav-desktop"),n=document.querySelector(".clock-container"),o=window.pageYOffset;"undefined"!=t&&(0,c.hideShow)(t,n,r,a,o)}feather.replace(),window.addEventListener("load",e=>{console.log("Window load event")}),window.addEventListener("resize",e=>{var t=document.querySelector("nav.nav-toggle a.custom-nav-item"),n=document.querySelector("nav.custom-nav-touch"),o=document.querySelector("html");i&&(n.classList.contains("mobile-nav-open")&&(n.classList.remove("mobile-nav-open"),t.innerHTML="Menu",t.parentNode.classList.remove("toggle-width"),o.classList.remove("disableScroll")),i=!i),(0,d.resizeSequencer)(e)}),document.addEventListener("DOMContentLoaded",e=>{console.log("DOM fully loaded and parsed"),feather.replace()})}})();