let prevScrollpos=window.pageYOffset,isMobile=!1,menuClick=!1,options={rootMargin:"0px 0px",threshold:.99},observer=new IntersectionObserver(revealNav,options);var clock=setInterval("updateClock()",1e3),navChecker=setInterval("addNav()",200),observerChecker=setInterval("setUpObserver()",200),indexImageChecker=setInterval("indexImage()",200);function indexImage(){let n=Array.from(document.querySelectorAll("div.index-items a"));for(let t=0;t<n.length;t++)if(n[t].addEventListener("mouseover",function(t){n.forEach(e=>{e.style.zIndex=0,t.currentTarget.style.zIndex=1})}),n[t].querySelectorAll("div.image-set")[t]){let e=Array.from(n[t].getElementsByClassName("image-set"));e.forEach(e=>{let t=e.getElementsByClassName("small")[0];var n=t.dataset.large;let o=new Image;o.classList.add("large"),o.src=n,e.appendChild(o),t.addEventListener("mouseover",function(e){o.style.opacity=1}),t.addEventListener("mouseout",function(e){o.style.opacity=0})})}clearInterval(indexImageChecker)}function addNav(){"undefined"!==document.querySelectorAll("div.navbar-inner")[0]&&(window.addEventListener("scroll",hideShowNav,{capture:!1,passive:!0}),clearInterval(navChecker))}function setUpObserver(){document.querySelectorAll("footer").forEach(e=>{observer.observe(e)})}function setUpHamburger(){let e=document.getElementsByClassName("hamburger")[0];e&&e.addEventListener("click",menuToggle)}function revealNav(e,t){let n=document.querySelectorAll("div.navbar-inner")[0];e.forEach(e=>{e.isIntersecting&&.99<=e.intersectionRatio&&(console.log("entry.isIntersecting"),showNav(n))})}function updateClock(){if(luxon){let e=document.querySelectorAll(".footer-container .clock-container");e.forEach(e=>{let t=e.querySelector(".clock-style"),n=e.querySelector(".cityName");e=e.getAttribute("data-timezone");let o=luxon.DateTime.now().setZone(e);t.innerHTML=o.toFormat("HH:mm:ss");e=parseInt(o.toFormat("H"));9<=e&&e<=18&&n.classList.add("open")})}}function isThisMobile(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(isMobile=!0)}function showNav(e){e.classList.remove("hideNav"),e.classList.add("showNav")}function hideNav(e){e.classList.remove("showNav"),e.classList.add("hideNav")}function hideShowNav(e){var t=document.querySelectorAll("div.navbar-inner")[0],n=void 0!==document.height?document.height:document.body.offsetHeight,o=window.pageYOffset;"undefined"!=t&&((prevScrollpos>o||o<=0||60<Math.floor(o/n*100)?showNav:hideNav)(t),prevScrollpos=o)}function menuChange(e){e?document.removeEventListener("scroll",hideShowNav,{capture:!1,passive:!1}):document.addEventListener("scroll",hideShowNav,{capture:!1,passive:!1})}function menuToggle(){menuClick=!menuClick,menuChange(menuClick)}function hasTouch(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints}if(window.addEventListener("sempliceTransitionInDone",function(e){isProject()},!1),setUpHamburger(),window.addEventListener("load",e=>{console.log("Window loaded");let t=document.createElement("script");t.src="https://moment.github.io/luxon/global/luxon.min.js",document.body.appendChild(t)}),hasTouch())try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(styleSheet.rules)for(var ri=styleSheet.rules.length-1;0<=ri;ri--)styleSheet.rules[ri].selectorText&&styleSheet.rules[ri].selectorText.match(":hover")&&styleSheet.deleteRule(ri)}}catch(e){}let vh=.01*window.innerHeight;function browserType(){let e=navigator.userAgent.toLowerCase();-1!=e.indexOf("safari")&&(-1<e.indexOf("chrome")?console.log("Browser type: Chrome"):console.log("Browser type: Safari"))}document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",()=>{var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}),isThisMobile(),browserType(),hasTouch();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlUGFnZS5qcyIsInNvdXJjZXMiOlsic2luZ2xlUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1RoaXMgbGl2ZXMgaW4gU2VtcGxpY2Ug4oCTPiBBZHZhbmNlZCAtPiBKYXZhc2NyaXB0IOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyovXG5sZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCAvLyBOdW1iZXJcblxubGV0IGlzTW9iaWxlID0gZmFsc2VcbmxldCBtZW51Q2xpY2sgPSBmYWxzZVxuXG4vLyBGb3IgT2JzZXJ2ZXIgb2JqZWN0XG5sZXQgb3B0aW9ucyA9IHtcbiAgcm9vdE1hcmdpbjogJzBweCAwcHgnLFxuICB0aHJlc2hvbGQ6IDAuOTksXG59XG5cbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihyZXZlYWxOYXYsIG9wdGlvbnMpXG5cbnZhciBjbG9jayA9IHNldEludGVydmFsKCd1cGRhdGVDbG9jaygpJywgMTAwMClcbnZhciBuYXZDaGVja2VyID0gc2V0SW50ZXJ2YWwoJ2FkZE5hdigpJywgMjAwKVxudmFyIG9ic2VydmVyQ2hlY2tlciA9IHNldEludGVydmFsKCdzZXRVcE9ic2VydmVyKCknLCAyMDApXG52YXIgaW5kZXhJbWFnZUNoZWNrZXIgPSBzZXRJbnRlcnZhbCgnaW5kZXhJbWFnZSgpJywgMjAwKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ3NlbXBsaWNlVHJhbnNpdGlvbkluRG9uZScsXG4gIGZ1bmN0aW9uIChlKSB7XG4gICAgaXNQcm9qZWN0KClcbiAgfSxcbiAgZmFsc2Vcbilcblxuc2V0VXBIYW1idXJnZXIoKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZygnV2luZG93IGxvYWRlZCcpXG5cbiAgLy8gbHV4b24gbGlicmFyeSA8c2NyaXB0PiB0YWdcbiAgbGV0IGx1eG9uVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgbHV4b25UYWcuc3JjID0gJ2h0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9nbG9iYWwvbHV4b24ubWluLmpzJ1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGx1eG9uVGFnKVxuXG4gIC8vIGNvbnNvbGUubG9nKCdfZG9jSGVpZ2h0OiAnICsgX2RvY0hlaWdodClcbn0pXG5cbmZ1bmN0aW9uIGluZGV4SW1hZ2UoKSB7XG4gIGxldCBpbmRleEl0ZW1zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuaW5kZXgtaXRlbXMgYScpKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kZXhJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgIC8vIGFkZCBtb3VzZW92ZXIgZXZlbnQgdG8gc2V0IGFsbCBpdGVtc1xuICAgIGluZGV4SXRlbXNbaV0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpbmRleEl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgaXRlbS5zdHlsZS56SW5kZXggPSAwIC8vIHJlc2V0IGFsbCB0byAwXG4gICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQuc3R5bGUuekluZGV4ID0gMSAvLyBicmluZyB0aGUgY3VycmVudCB0byAxXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICBpZiAoaW5kZXhJdGVtc1tpXS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuaW1hZ2Utc2V0JylbaV0pIHtcbiAgICAgIC8vIGdldEVsZW1lbnRzQnlDbGFzc05hbWUgcmV0dXJucyBhbiBIVE1MQ29sbGVjdGlvbiwgTk9UIGFuIEFycmF5XG4gICAgICBsZXQgaW1hZ2VTZXRzID0gQXJyYXkuZnJvbShcbiAgICAgICAgaW5kZXhJdGVtc1tpXS5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdpbWFnZS1zZXQnKVxuICAgICAgKVxuXG4gICAgICBpbWFnZVNldHMuZm9yRWFjaCgoaW1hZ2VTZXQpID0+IHtcbiAgICAgICAgbGV0IHRodW1iID0gaW1hZ2VTZXQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnc21hbGwnKVswXSAvLyBpbiBpbWFnZVNldHMsIGZpbmQgdGhlIHNtYWxsIHRodW1iXG4gICAgICAgIGxldCBsZ0ltYWdlU3JjID0gdGh1bWIuZGF0YXNldC5sYXJnZSAvLyBleHRyYWN0IHRoZSBkYXRhLWxhcmdlIGF0dHJpYnV0ZSwgLmRhdGFzZXQgcmV0dXJucyBvYmplY3RcbiAgICAgICAgbGV0IGxnSW1hZ2UgPSBuZXcgSW1hZ2UoKSAvLyA9PT0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJylcbiAgICAgICAgbGdJbWFnZS5jbGFzc0xpc3QuYWRkKCdsYXJnZScpIC8vIGFkZCBjbGFzcywgc3JjLCBhZGQgdG8gaW1hZ2VTZXRcbiAgICAgICAgbGdJbWFnZS5zcmMgPSBsZ0ltYWdlU3JjXG4gICAgICAgIGltYWdlU2V0LmFwcGVuZENoaWxkKGxnSW1hZ2UpXG5cbiAgICAgICAgLy8gYWRkIGxpc3RlbmVycyB0byB0aHVtYnNcbiAgICAgICAgdGh1bWIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgbGdJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMVxuICAgICAgICB9KVxuXG4gICAgICAgIHRodW1iLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgbGdJbWFnZS5zdHlsZS5vcGFjaXR5ID0gMFxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBjbGVhckludGVydmFsKGluZGV4SW1hZ2VDaGVja2VyKVxufVxuXG5mdW5jdGlvbiBhZGROYXYoKSB7XG4gIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubmF2YmFyLWlubmVyJylbMF1cbiAgaWYgKG5hdiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlkZVNob3dOYXYsIHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICB9KVxuICAgIGNsZWFySW50ZXJ2YWwobmF2Q2hlY2tlcilcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRVcE9ic2VydmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdmb290ZXInKS5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG1vZHVsZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2V0VXBIYW1idXJnZXIoKSB7XG4gIGxldCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoYW1idXJnZXInKVswXVxuXG4gIGlmIChoYW1idXJnZXIpIHtcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51VG9nZ2xlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVhbE5hdihlbnRyaWVzLCBvYnMpIHtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5uYXZiYXItaW5uZXInKVswXVxuXG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC45OSkge1xuICAgICAgY29uc29sZS5sb2coJ2VudHJ5LmlzSW50ZXJzZWN0aW5nJylcbiAgICAgIHNob3dOYXYobmF2KVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4gIGlmIChsdXhvbikge1xuICAgIC8vXG4gICAgbGV0IGxvY2F0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAnLmZvb3Rlci1jb250YWluZXIgLmNsb2NrLWNvbnRhaW5lcidcbiAgICApXG5cbiAgICBsb2NhdGlvbnMuZm9yRWFjaCgobG9jYXRpb24pID0+IHtcbiAgICAgIGxldCBjbG9ja1N0eWxlID0gbG9jYXRpb24ucXVlcnlTZWxlY3RvcignLmNsb2NrLXN0eWxlJylcbiAgICAgIGxldCBjaXR5TmFtZSA9IGxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5TmFtZScpXG4gICAgICBsZXQgdGltZVpvbmUgPSBsb2NhdGlvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtdGltZXpvbmUnKVxuICAgICAgbGV0IG5vdyA9IGx1eG9uLkRhdGVUaW1lLm5vdygpLnNldFpvbmUodGltZVpvbmUpXG5cbiAgICAgIGNsb2NrU3R5bGUuaW5uZXJIVE1MID0gbm93LnRvRm9ybWF0KCdISDptbTpzcycpXG5cbiAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobm93LnRvRm9ybWF0KCdIJykpXG5cbiAgICAgIGlmIChob3VyID49IDkgJiYgaG91ciA8PSAxOCkge1xuICAgICAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcbiAgICAgIH1cbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIGlzVGhpc01vYmlsZSgpIHtcbiAgLy8gZGV2aWNlIGRldGVjdGlvblxuICBpZiAoXG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIClcbiAgKSB7XG4gICAgaXNNb2JpbGUgPSB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd05hdihlbGVtKSB7XG4gIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU5hdicpXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2hvd05hdicpXG59XG5cbmZ1bmN0aW9uIGhpZGVOYXYoZWxlbSkge1xuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dOYXYnKVxuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGVOYXYnKVxufVxuXG4vLyBoaWRlIC8gc2hvdyBOYXYgZnVuY3Rpb25hbGl0eVxuLy8gcmVsaWVzIG9uIGxldCBwcmV2U2Nyb2xscG9zIGluIHdpbmRvdy5sb2FkXG5mdW5jdGlvbiBoaWRlU2hvd05hdihldmVudCkge1xuICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lm5hdmJhci1pbm5lcicpWzBdXG4gIGxldCBfZG9jSGVpZ2h0ID1cbiAgICBkb2N1bWVudC5oZWlnaHQgIT09IHVuZGVmaW5lZCA/IGRvY3VtZW50LmhlaWdodCA6IGRvY3VtZW50LmJvZHkub2Zmc2V0SGVpZ2h0XG4gIGxldCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0XG4gIC8vIGNvbnNvbGUubG9nKE1hdGguZmxvb3IoKGN1cnJlbnRTY3JvbGxQb3MgLyBfZG9jSGVpZ2h0KSAqIDEwMCkpXG5cbiAgaWYgKG5hdiAhPSAndW5kZWZpbmVkJykge1xuICAgIGlmIChcbiAgICAgIHByZXZTY3JvbGxwb3MgPiBjdXJyZW50U2Nyb2xsUG9zIHx8XG4gICAgICBjdXJyZW50U2Nyb2xsUG9zIDw9IDAgfHxcbiAgICAgIE1hdGguZmxvb3IoKGN1cnJlbnRTY3JvbGxQb3MgLyBfZG9jSGVpZ2h0KSAqIDEwMCkgPiA2MFxuICAgICkge1xuICAgICAgc2hvd05hdihuYXYpXG4gICAgfSBlbHNlIHtcbiAgICAgIGhpZGVOYXYobmF2KVxuICAgIH1cbiAgICBwcmV2U2Nyb2xscG9zID0gY3VycmVudFNjcm9sbFBvc1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lbnVDaGFuZ2UoYm9vbGVhbikge1xuICBpZiAoYm9vbGVhbikge1xuICAgIC8vIG1lbnUgaXMgb3BlbiwgZW5zdXJlcyBtb2JpbGUgbWVudSBkb2Vzbid0IHNjcm9sbCBhd2F5XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlkZVNob3dOYXYsIHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICAvLyBtZW51IGlzIGNsb3NlZFxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhpZGVTaG93TmF2LCB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIH0pXG4gIH1cbn1cblxuZnVuY3Rpb24gbWVudVRvZ2dsZSgpIHtcbiAgbWVudUNsaWNrID0gIW1lbnVDbGlja1xuICAvLyB0b2dnbGVzIGJvb2xlYW4gYmV0d2VlbiB0cnVlIGFuZCBmYWxzZVxuICBtZW51Q2hhbmdlKG1lbnVDbGljaylcbn1cblxuLyogUGxlYXNlIHJlbW92ZSBob3ZlciBzdHlsZXMgaW4gbW9iaWxlIDsoICovXG5mdW5jdGlvbiBoYXNUb3VjaCgpIHtcbiAgcmV0dXJuIChcbiAgICAnb250b3VjaHN0YXJ0JyBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHxcbiAgICBuYXZpZ2F0b3IubWF4VG91Y2hQb2ludHMgPiAwIHx8XG4gICAgbmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHMgPiAwXG4gIClcbn1cblxuaWYgKGhhc1RvdWNoKCkpIHtcbiAgLy8gcmVtb3ZlIGFsbCA6aG92ZXIgc3R5bGVzaGVldHNcbiAgdHJ5IHtcbiAgICAvLyBwcmV2ZW50IGV4Y2VwdGlvbiBvbiBicm93c2VycyBub3Qgc3VwcG9ydGluZyBET00gc3R5bGVTaGVldHMgcHJvcGVybHlcbiAgICBmb3IgKHZhciBzaSBpbiBkb2N1bWVudC5zdHlsZVNoZWV0cykge1xuICAgICAgdmFyIHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tzaV1cbiAgICAgIGlmICghc3R5bGVTaGVldC5ydWxlcykgY29udGludWVcblxuICAgICAgZm9yICh2YXIgcmkgPSBzdHlsZVNoZWV0LnJ1bGVzLmxlbmd0aCAtIDE7IHJpID49IDA7IHJpLS0pIHtcbiAgICAgICAgaWYgKCFzdHlsZVNoZWV0LnJ1bGVzW3JpXS5zZWxlY3RvclRleHQpIGNvbnRpbnVlXG5cbiAgICAgICAgaWYgKHN0eWxlU2hlZXQucnVsZXNbcmldLnNlbGVjdG9yVGV4dC5tYXRjaCgnOmhvdmVyJykpIHtcbiAgICAgICAgICBzdHlsZVNoZWV0LmRlbGV0ZVJ1bGUocmkpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0gY2F0Y2ggKGV4KSB7fVxufVxuXG4vLyBTb2x2aW5nIGZvciBtb2JpbGUgYnJvd3NlciB2aCBkaXNjcmVwZW5jaWVzIGZvciBwcm9qZWN0IGltYWdlXG4vLyB2aWE6IGh0dHBzOi8vY3NzLXRyaWNrcy5jb20vdGhlLXRyaWNrLXRvLXZpZXdwb3J0LXVuaXRzLW9uLW1vYmlsZS9cbi8vIEZpcnN0IHdlIGdldCB0aGUgdmlld3BvcnQgaGVpZ2h0IGFuZCB3ZSBtdWx0aXBsZSBpdCBieSAxJSB0byBnZXQgYSB2YWx1ZSBmb3IgYSB2aCB1bml0XG5sZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxXG4vLyBUaGVuIHdlIHNldCB0aGUgdmFsdWUgaW4gdGhlIC0tdmggY3VzdG9tIHByb3BlcnR5IHRvIHRoZSByb290IG9mIHRoZSBkb2N1bWVudFxuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKVxuLy8gV2UgbGlzdGVuIHRvIHRoZSByZXNpemUgZXZlbnRcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gIC8vIFdlIGV4ZWN1dGUgdGhlIHNhbWUgc2NyaXB0IGFzIGJlZm9yZVxuICBsZXQgdmggPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjAxXG4gIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YClcbn0pXG5cbi8vIGhhY2sgdG8gYWRqdXN0IG1hcmdpbiBkaXNjcmVwZW5jeSBpbiBicm93c2Vyc1xuZnVuY3Rpb24gYnJvd3NlclR5cGUoKSB7XG4gIGxldCB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKClcbiAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSkge1xuICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignY2hyb21lJykgPiAtMSkge1xuICAgICAgLy9icm93c2VyIGlzIGNocm9tZVxuICAgICAgY29uc29sZS5sb2coJ0Jyb3dzZXIgdHlwZTogQ2hyb21lJylcbiAgICB9IGVsc2Uge1xuICAgICAgLy9icm93c2VyIGlzIHNhZmFyaVxuICAgICAgY29uc29sZS5sb2coJ0Jyb3dzZXIgdHlwZTogU2FmYXJpJylcbiAgICAgIC8vYWJvdXQuc3R5bGUubWFyZ2luVG9wID0gXCIwXCI7XG4gICAgfVxuICB9XG59XG5cbmlzVGhpc01vYmlsZSgpXG5icm93c2VyVHlwZSgpXG5oYXNUb3VjaCgpXG4iXSwibmFtZXMiOlsicHJldlNjcm9sbHBvcyIsIndpbmRvdyIsInBhZ2VZT2Zmc2V0IiwiaXNNb2JpbGUiLCJtZW51Q2xpY2siLCJvcHRpb25zIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJyZXZlYWxOYXYiLCJjbG9jayIsInNldEludGVydmFsIiwibmF2Q2hlY2tlciIsIm9ic2VydmVyQ2hlY2tlciIsImluZGV4SW1hZ2VDaGVja2VyIiwiaW5kZXhJbWFnZSIsImluZGV4SXRlbXMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50IiwiZm9yRWFjaCIsIml0ZW0iLCJzdHlsZSIsInpJbmRleCIsImN1cnJlbnRUYXJnZXQiLCJpbWFnZVNldHMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwidGh1bWIiLCJpbWFnZVNldCIsImxnSW1hZ2VTcmMiLCJkYXRhc2V0IiwibGFyZ2UiLCJsZ0ltYWdlIiwiSW1hZ2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJzcmMiLCJhcHBlbmRDaGlsZCIsIm9wYWNpdHkiLCJjbGVhckludGVydmFsIiwiYWRkTmF2IiwiaGlkZVNob3dOYXYiLCJjYXB0dXJlIiwicGFzc2l2ZSIsInNldFVwT2JzZXJ2ZXIiLCJvYnNlcnZlIiwibW9kdWxlIiwic2V0VXBIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJtZW51VG9nZ2xlIiwiZW50cmllcyIsIm9icyIsIm5hdiIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJpbnRlcnNlY3Rpb25SYXRpbyIsImNvbnNvbGUiLCJsb2ciLCJzaG93TmF2IiwidXBkYXRlQ2xvY2siLCJsdXhvbiIsImxvY2F0aW9ucyIsImNsb2NrU3R5bGUiLCJsb2NhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZSIsInRpbWVab25lIiwiZ2V0QXR0cmlidXRlIiwibm93IiwiRGF0ZVRpbWUiLCJzZXRab25lIiwiaW5uZXJIVE1MIiwidG9Gb3JtYXQiLCJob3VyIiwicGFyc2VJbnQiLCJpc1RoaXNNb2JpbGUiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwiZWxlbSIsInJlbW92ZSIsImhpZGVOYXYiLCJfZG9jSGVpZ2h0IiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwiYm9keSIsIm9mZnNldEhlaWdodCIsImN1cnJlbnRTY3JvbGxQb3MiLCJNYXRoIiwiZmxvb3IiLCJtZW51Q2hhbmdlIiwiYm9vbGVhbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXNUb3VjaCIsImRvY3VtZW50RWxlbWVudCIsIm1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsImUiLCJpc1Byb2plY3QiLCJsdXhvblRhZyIsImNyZWF0ZUVsZW1lbnQiLCJzaSIsInN0eWxlU2hlZXRzIiwic3R5bGVTaGVldCIsInJ1bGVzIiwicmkiLCJzZWxlY3RvclRleHQiLCJtYXRjaCIsImRlbGV0ZVJ1bGUiLCJleCIsInZoIiwiaW5uZXJIZWlnaHQi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
