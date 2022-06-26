!function(n){var o={};function r(e){if(o[e])return o[e].exports;var t=o[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,r),t.l=!0,t.exports}r.m=n,r.c=o,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,n){"use strict";n.r(t);var t=n(1),o=n(2),r=n(5),i=n(6),a=n(7),c=(n(8),setInterval(t.updateClock,1e3),setInterval(function(){var e=document.getElementsByClassName("custom-nav-desktop")[0];e&&(window.addEventListener("scroll",m,{capture:!1,passive:!0}),clearInterval(c))},500)),s=setInterval(function(){let e=document.querySelector("nav.nav-toggle a.custom-nav-item"),t=document.querySelector("nav.nav-toggle a.custom-home"),n=document.querySelector("nav.custom-nav-touch"),o=Array.from(n.querySelectorAll("a.custom-nav-item")),r=[...o,t],i=document.querySelector("html");e&&(clearInterval(s),e.addEventListener("click",function(t,n,o){return function(e){n.parentNode.classList.toggle("toggle-width"),t.classList.toggle("mobile-nav-open"),t.classList.contains("mobile-nav-open")?(n.innerHTML="Close",o.classList.add("disableScroll")):(n.innerHTML="Menu",o.classList.remove("disableScroll")),e.preventDefault(),d=!d}}(n,e,i)),r.forEach(e=>{e.addEventListener("click",function(e){i.classList.contains("disableScroll")&&i.classList.remove("disableScroll")})}))},500),l=setInterval(function(){{var e;document.querySelector("section.work-index-section > div")&&(e=document.querySelectorAll("div.index-items .index-item"),Object(o.indexImage)(e),clearInterval(l))}},500),u=setInterval(function(){{var e;document.querySelector("div.list")&&(e=Array.from(document.querySelectorAll("div.list a")),Object(i.imageMove)(e),clearInterval(u))}},500);let d=!1;function m(e){var t=document.querySelector(".custom-nav-desktop"),n=document.querySelector(".clock-container"),o=window.pageYOffset;"undefined"!=t&&Object(r.hideShow)(t,n,o)}window.addEventListener("load",e=>{console.log("Window load event")}),window.addEventListener("resize",e=>{let t=document.querySelector("nav.nav-toggle a.custom-nav-item"),n=document.querySelector("nav.custom-nav-touch"),o=document.querySelector("html");d&&(n.classList.contains("mobile-nav-open")&&(n.classList.remove("mobile-nav-open"),t.innerHTML="Menu",t.parentNode.classList.remove("toggle-width"),o.classList.remove("disableScroll")),d=!d);var r=document.getElementById("shaderBG");r&&Object(a.sizer)(r)}),document.addEventListener("DOMContentLoaded",e=>{console.log("DOM fully loaded and parsed"),function(){let e=document.createElement("script");e.src="https://moment.github.io/luxon/global/luxon.min.js",document.body.appendChild(e);let t=document.createElement("script");t.src="https://rawgit.com/patriciogonzalezvivo/glslCanvas/master/dist/GlslCanvas.js",document.body.appendChild(t)}()})},function(e,t,n){"use strict";function o(){if(luxon){let e=document.querySelectorAll(".footer-container .clock-container");e.forEach(e=>{let t=e.querySelector("h1");var n=t.getAttribute("data-city"),e=e.getAttribute("data-timezone");let o=luxon.DateTime.now().setZone(e);t.innerHTML=`${n}`+" "+o.toFormat("HH:mm:ss");n=parseInt(o.toFormat("HH"));9<=n&&n<=18?t.classList.add("open"):t.classList.remove("open")})}}n.r(t),n.d(t,"updateClock",function(){return o})},function(e,t,n){"use strict";n.r(t),n.d(t,"indexImage",function(){return p});var r=n(3),s=n(4);let l,o,i,u,d,a,m,c,v,f;function p(e){l=Array.from(e),i=document.body,u=document.querySelectorAll(".close")[0],o=document.querySelector("h1"),function(o){for(let n=0;n<o.length;n++){let e=Array.from(o[n].getElementsByClassName("image-set")),t=o[n].getElementsByClassName("numImages")[0];t&&(t.innerHTML=e.length),e.forEach(t=>{let e=document.createElement("div"),n=new Image;n.src=t.dataset.small;let o=new Image;o.src=t.dataset.large;let r=document.createElement("div"),i=document.createElement("div"),a=document.createElement("p"),c=[i,a,e,r];t.dataset.caption&&(a.innerHTML=t.dataset.caption),e.classList.add("touchCover"),r.classList.add("small"),r.style.backgroundImage=`url(${n.src})`,i.classList.add("large"),i.style.backgroundImage=`url(${o.src})`,a.classList.add("caption"),t.replaceChildren(),c.forEach(e=>{t.appendChild(e)})})}d=Array.from(document.querySelectorAll(".small")),c=Array.from(document.querySelectorAll(".large")),v=Array.from(document.querySelectorAll(".touchCover")),a=Array.from(document.querySelectorAll(".index-item-info")),m=Array.from(document.querySelectorAll(".caption")),f=[c,v,m],r.desktops.forEach(e=>{e.addEventListener("change",S),S()}),r.tablets.forEach(e=>{e.addEventListener("change",k),k()}),u.addEventListener("click",function(e){b()})}(l)}function h(){l.forEach(e=>{e.removeEventListener("mouseover",y),e.removeEventListener("mouseout",y)}),d.forEach(e=>{e.removeEventListener("mouseover",g),e.removeEventListener("mouseout",g)})}function y(e){let t=e.currentTarget,n=t.querySelector(".index-item-info"),o=t.querySelector(".thumbBg"),r=t.querySelector(".image-set-wrapper");"mouseover"===e.type?(l.forEach(e=>{e.style.zIndex=1;let t=e.querySelector(".image-set-wrapper");t&&(t.classList.add("zeroOpacity"),t.classList.remove("fullOpacity"))}),t.style.zIndex=2,n.style.zIndex=5,r&&(r.classList.remove("zeroOpacity"),r.classList.add("fullOpacity")),o.classList.add("fullOpacity")):"mouseout"===e.type&&(t.style.setProperty("color","var(--white)"),o.classList.remove("fullOpacity"),l.forEach(e=>{e.style.zIndex=1;let t=e.querySelector(".image-set-wrapper");t&&(t.classList.add("fullOpacity"),t.classList.remove("zeroOpacity"))}))}function g(e){let t=e.currentTarget,n=t.parentNode,o=Array.from(Object(s.nthParent)(n,2).querySelectorAll(".small")),r=n.querySelector(".large"),i=n.querySelector(".caption");"mouseover"===e.type?(o.forEach(e=>{e.style.opacity=.25}),t.style.opacity=1,r.classList.add("fullOpacity"),i.classList.add("fullOpacity"),i.style.display="block"):"mouseout"===e.type&&(o.forEach(e=>{e.style.opacity=1}),r.classList.remove("fullOpacity"),i.classList.remove("fullOpacity"))}function w(e){let t=e.currentTarget.parentNode,n=Object(s.nthParent)(t,2);var o=t.querySelector(".touchCover"),r=t.querySelector(".large");let i=t.querySelector(".caption"),a=[o,r,i],c=n.querySelector(".index-item-info");document.querySelector("html").classList.add("disableScroll"),u.classList.add("showClose"),e.type,l.forEach(e=>{e.style.zIndex=1}),m.forEach(e=>{e.style.display="none"}),i.style.display="block",n.style.zIndex=2,c.classList.add("zeroOpacity"),d.forEach(e=>{e.style.pointerEvents="none",e.style.visibility="hidden"}),a.forEach(e=>{e.classList.add("fullOpacity")}),e.preventDefault()}function x(){b(),d.forEach(e=>{e.removeEventListener("click",w),e.removeEventListener("touchStart",w)})}function b(){document.querySelector("html").classList.remove("disableScroll"),u.classList.remove("showClose");for(let e=0;e<f.length;e++)f[e].forEach(e=>{e.classList.contains("fullOpacity")&&e.classList.remove("fullOpacity")});m.forEach(e=>{e.style.display="none"}),a.forEach(e=>{e.classList.contains("zeroOpacity")&&e.classList.remove("zeroOpacity")}),d.forEach(e=>{e.style.pointerEvents="auto",e.style.visibility="visible"})}function E(){x(),l.forEach(e=>{e.addEventListener("mouseover",y),e.addEventListener("mouseout",y)}),d.forEach(e=>{e.addEventListener("mouseover",g),e.addEventListener("mouseout",g)})}function L(){h(),d.forEach(e=>{e.addEventListener("click",w),e.addEventListener("touchStart",w)})}function S(e){E()}function k(e){(Object(s.hasTouch)()?L:E)()}},function(e,t,n){"use strict";n.r(t),n.d(t,"desktops",function(){return a}),n.d(t,"tablets",function(){return c});var o=window.matchMedia("screen and (min-width: 1170px)"),r=window.matchMedia("screen and (max-width: 1169px) and (min-width: 992px)"),i=window.matchMedia("screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) and (hover: none)"),n=window.matchMedia("screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)"),t=window.matchMedia("screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)");window.matchMedia("screen and (max-width: 543px) and (hover: none)");const a=[o,r],c=[i,n,t]},function(e,t,n){"use strict";n.r(t),n.d(t,"isInViewport",function(){return i}),n.d(t,"browserType",function(){return a}),n.d(t,"customVhUnit",function(){return u}),n.d(t,"customVwUnit",function(){return d}),n.d(t,"removeHoverStyles",function(){return l}),n.d(t,"hasTouch",function(){return s}),n.d(t,"nthParent",function(){return c}),n.d(t,"cancelAnimationFrame",function(){return o}),n.d(t,"lerp",function(){return r});var o=window.cancelAnimationFrame||window.mozCancelAnimationFrame;function r(e,t,n){return(1-n)*e+n*t}function i(e){e=e.getBoundingClientRect();return 0<=e.top&&0<=e.left&&e.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&e.right<=(window.innerWidth||document.documentElement.clientWidth)}function a(){let e=navigator.userAgent.toLowerCase();-1!=e.indexOf("safari")&&(-1<e.indexOf("chrome")?console.log("Browser type: Chrome"):console.log("Browser type: Safari"))}function c(e,t){for(;t--&&e;)e=e.parentNode;return e}function s(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints}function l(){if(console.log("remove Hover Styles"),s())try{for(var e in document.styleSheets){var t=document.styleSheets[e];if(t.rules)for(var n=t.rules.length-1;0<=n;n--)t.rules[n].selectorText&&t.rules[n].selectorText.match(":hover")&&t.deleteRule(n)}}catch(e){}}function u(){var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}function d(){window.innerHeight;document.documentElement.style.setProperty("--vw",`${vh}px`)}window.mobileCheck=function(){let e=!1;var t;return t=navigator.userAgent||navigator.vendor||window.opera,(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(t)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(t.substr(0,4)))&&(e=!0),e}},function(e,t,n){"use strict";n.r(t),n.d(t,"hideNav",function(){return a}),n.d(t,"showNav",function(){return i}),n.d(t,"hideShow",function(){return c});var o=n(4);let r=window.pageYOffset;function i(e){e.classList.remove("hideNav"),e.classList.add("showNav")}function a(e){e.classList.remove("showNav"),e.classList.add("hideNav")}function c(e,t,n){(r>n||n<=0||Object(o.isInViewport)(t)?i:a)(e),r=n}},function(e,t,n){"use strict";n.r(t),n.d(t,"imageMove",function(){return w});var o=n(3),r=n(4);let i=null,a=null,c=null,s=null,l=null,u=0,d=0,m=0,v=0,f,p,h=[],y,g;function w(e){p=e,p.forEach(e=>{h.push(e.querySelector("img"))}),o.desktops.forEach(e=>{e.addEventListener("change",q),q()}),o.tablets.forEach(e=>{e.addEventListener("change",O),O()}),f=document.querySelector("div.cursor div"),document.addEventListener("mousemove",function(e){u=e.pageX,d=e.pageY})}function x(e){let t=e.currentTarget,n=t.querySelector("h1");l=e.currentTarget.querySelector("img"),p.forEach(e=>{e.style.zIndex=0}),f.style.opacity=1,f.style.visibility="visible",t.style.zIndex=1,l.style.opacity=1,l.style.zIndex=-1,n.style.transform="translate(var(--four-units, 0px))"}function b(e){l=e.currentTarget.querySelector("img"),p.forEach(e=>{e.querySelector("h1").style.transform="translate(0px, 0px)"}),l.style.opacity=0,f.style.opacity=0,f.style.left="0px"}function E(e){i=e.clientX,a=e.clientY,null===c&&(c=e.clientX,s=e.clientY)}function L(){var e=window.innerWidth||document.documentElement.clientWidth,t=window.innerHeight||document.documentElement.clientHeight;m+=.02*(u-m),v+=.02*(d-v),f&&(f.style.left=m+"px",f.style.top=v+"px"),y||l&&(l.style.transform=`translate3d(${c-l.offsetWidth/2-e/2}px, ${s-(l.offsetHeight/2-t/2)}px, 0px)`),c+=.03*(i-c),s+=.03*(a-s),g=window.requestAnimationFrame(L)}function S(){y=!1,h.forEach(e=>{e.style.opacity=0,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="none"}),p.forEach(e=>{e.addEventListener("mouseover",x),e.addEventListener("mousemove",E),e.addEventListener("mouseout",b)}),L()}function k(){p.forEach(e=>{e.removeEventListener("mouseover",x),e.removeEventListener("mousemove",E),e.removeEventListener("mouseout",b)}),window.cancelAnimationFrame(g),y=!0,h.forEach(e=>{e.style.opacity=1,e.style.transform="translate3d(0px, 0px, 0px)",e.style.pointerEvents="auto"})}function q(e){S()}function O(e){(Object(r.hasTouch)()?k:S)()}},function(e,t,n){"use strict";n.r(t),n.d(t,"sizer",function(){return o});const o=function(e){var t=window.innerWidth,n=window.innerHeight,o=window.devicePixelRatio,n=Math.max(t,n);e.width=n*o,e.height=n*o,e.style.width=n+"px",e.style.height=n+"px"}},function(e,t,n){"use strict";n.r(t),n.d(t,"frag",function(){return o});const o=`
#ifdef GL_ES
precision highp float;
#endif

uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;
uniform float seed;

varying vec2 v_texcoord;

// Separate GLSL funcs
${n(9).includes}

void main(void)
{
    // this means that 0,0 = bottom left, 1,1 = top right
    vec2 uv = v_texcoord;

    // Find the distance between the mouse and points
    vec2 mouse = u_mouse / u_resolution;
    float dist = distance(uv, mouse);
    float strength = smoothstep(0.90, 0.0, dist);
    
    float hue = u_time * 0.005 + seed;
    
    vec3 hsv1 = vec3(0.65, sin(hue), 0.45);
    vec3 hsv2 = vec3(hue + 0.07, 0.125, 0.75);
    
    vec3 rgb1 = hsv2rgb(hsv1);
    vec3 rgb2 = hsv2rgb(hsv2);
    
    vec4 color1 = vec4(rgb1, 1.0);
    vec4 color2 = vec4(rgb2, 1.0);
    
    // float grain = rand(uv);
    float grain = rand(100.0 * uv) * mix(0.2, 0.001, strength);
    
    // make movement for fbm
    vec2 movement = vec2(u_time * 0.01, u_time * -0.01);
    movement *= rotation2d(u_time * 0.005);
    
    float f = fbm(uv + movement + seed);
    f *= 20.0;
    f += grain;
    f += u_time * 0.225;
    f = fract(f);
    
    // mix colors based on noise pattern
    float gap = mix(0.5, 0.01, strength);
    float mixer = smoothstep(0.0, gap, f) - smoothstep(1.0 - gap, 1.0, f);
    
    vec4 color = mix(color1, color2, mixer);
    
    gl_FragColor = color;
}
`},function(e,t,n){"use strict";n.r(t),n.d(t,"includes",function(){return o});const o=`
#define NUM_OCTAVES 2

float rand(vec2 n) { 
    return fract(sin(dot(n, vec2(12.9898, 4.1414))) * 48.5453);
}

float noise(vec2 p){
    vec2 ip = floor(p);
    vec2 u = fract(p);
    u = u*u*(3.0-2.0*u);
    
    float res = mix(
        mix(rand(ip),rand(ip+vec2(1.0,0.0)),u.x),
        mix(rand(ip+vec2(0.0,1.0)),rand(ip+vec2(1.0,1.0)),u.x),u.y);
    return res*res;
}

float fbm(vec2 x) {
    float v = 0.0;
    float a = 0.5;
    vec2 shift = vec2(100);
    // Rotate to reduce axial bias
    mat2 rot = mat2(cos(0.5), sin(0.5), -sin(0.5), cos(0.50));
    for (int i = 0; i < NUM_OCTAVES; ++i) {
        v += a * noise(x);
        x = rot * x * 2.0 + shift;
        a *= 0.5;
    }
    return v;
}

mat2 rotation2d(float angle) {
    float s = sin(angle);
    float c = cos(angle);

    return mat2(
        c, -s,
        s, c
    );
}

vec3 hsv2rgb(vec3 c){
    vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
    vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
    
    return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
`}]);