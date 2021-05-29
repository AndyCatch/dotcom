let prevScrollpos=window.pageYOffset,isMobile=!1,menuClick=!1,options={rootMargin:"0px 0px",threshold:.99},observer=new IntersectionObserver(revealNav,options);var clock=setInterval("updateClock()",1e3),navChecker=setInterval("addNav()",200),observerChecker=setInterval("setUpObserver()",200);function windowResize(){console.log("resize")}function addNav(){"undefined"!==document.querySelectorAll("div.navbar-inner")[0]&&(window.addEventListener("scroll",hideShowNav,{capture:!1,passive:!0}),clearInterval(navChecker))}function setUpObserver(){document.querySelectorAll(".footer-container").forEach(e=>{observer.observe(e)})}function setUpHamburger(){let e=document.getElementsByClassName("hamburger")[0];e&&e.addEventListener("click",menuToggle)}function revealNav(e,t){let o=document.querySelectorAll("div.navbar-inner")[0];e.forEach(e=>{e.isIntersecting&&.75<=e.intersectionRatio&&(console.log("entry.isIntersecting"),o.classList.remove("hideNav"),o.classList.add("showNav"))})}function updateClock(){let e=document.querySelectorAll(".footer-container .clock-container");e.forEach(e=>{let t=e.querySelector(".clock-style"),o=e.querySelector(".cityName");e=e.getAttribute("data-timezone");let n=luxon.DateTime.now().setZone(e);t.innerHTML=n.toFormat("HH:mm:ss");e=parseInt(n.toFormat("H"));9<=e&&e<=18&&o.classList.add("open")})}function isThisMobile(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(isMobile=!0)}function showNav(e){e.classList.remove("hideNav"),e.classList.add("showNav")}function hideNav(e){e.classList.remove("showNav"),e.classList.add("hideNav")}function hideShowNav(e){var t=document.querySelectorAll("div.navbar-inner")[0],o=window.pageYOffset;"undefined"!=t&&((prevScrollpos>o||o<=0?showNav:hideNav)(t),prevScrollpos=o)}function menuChange(e){e?document.removeEventListener("scroll",hideShowNav,{capture:!1,passive:!1}):document.addEventListener("scroll",hideShowNav,{capture:!1,passive:!1})}function menuToggle(){menuClick=!menuClick,menuChange(menuClick)}function hasTouch(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints}if(window.addEventListener("sempliceTransitionInDone",function(e){isProject()},!1),setUpHamburger(),window.addEventListener("load",e=>{console.log("Window loaded");let t=document.createElement("script");t.src="https://moment.github.io/luxon/global/luxon.min.js",document.body.appendChild(t)}),hasTouch())try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(styleSheet.rules)for(var ri=styleSheet.rules.length-1;0<=ri;ri--)styleSheet.rules[ri].selectorText&&styleSheet.rules[ri].selectorText.match(":hover")&&styleSheet.deleteRule(ri)}}catch(e){}let vh=.01*window.innerHeight;function browserType(){let e=navigator.userAgent.toLowerCase();-1!=e.indexOf("safari")&&(-1<e.indexOf("chrome")?console.log("Browser type: Chrome"):console.log("Browser type: Safari"))}document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",()=>{var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}),isThisMobile(),browserType(),hasTouch();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlUGFnZS5qcyIsInNvdXJjZXMiOlsic2luZ2xlUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1RoaXMgbGl2ZXMgaW4gU2VtcGxpY2Ug4oCTPiBBZHZhbmNlZCAtPiBKYXZhc2NyaXB0IOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyovXG5sZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCAvLyBOdW1iZXJcblxubGV0IGlzTW9iaWxlID0gZmFsc2VcbmxldCBtZW51Q2xpY2sgPSBmYWxzZVxuXG4vLyBGb3IgT2JzZXJ2ZXIgb2JqZWN0XG5sZXQgb3B0aW9ucyA9IHtcbiAgcm9vdE1hcmdpbjogJzBweCAwcHgnLFxuICB0aHJlc2hvbGQ6IDAuOTksXG59XG5cbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihyZXZlYWxOYXYsIG9wdGlvbnMpXG5cbnZhciBjbG9jayA9IHNldEludGVydmFsKCd1cGRhdGVDbG9jaygpJywgMTAwMClcbnZhciBuYXZDaGVja2VyID0gc2V0SW50ZXJ2YWwoJ2FkZE5hdigpJywgMjAwKVxudmFyIG9ic2VydmVyQ2hlY2tlciA9IHNldEludGVydmFsKCdzZXRVcE9ic2VydmVyKCknLCAyMDApXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAnc2VtcGxpY2VUcmFuc2l0aW9uSW5Eb25lJyxcbiAgZnVuY3Rpb24gKGUpIHtcbiAgICBpc1Byb2plY3QoKVxuICB9LFxuICBmYWxzZVxuKVxuXG5zZXRVcEhhbWJ1cmdlcigpXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKGV2ZW50KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdXaW5kb3cgbG9hZGVkJylcblxuICAvLyBsdXhvbiBsaWJyYXJ5IDxzY3JpcHQ+IHRhZ1xuICBsZXQgbHV4b25UYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKVxuICBsdXhvblRhZy5zcmMgPSAnaHR0cHM6Ly9tb21lbnQuZ2l0aHViLmlvL2x1eG9uL2dsb2JhbC9sdXhvbi5taW4uanMnXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobHV4b25UYWcpXG59KVxuXG5mdW5jdGlvbiB3aW5kb3dSZXNpemUoKSB7XG4gIGNvbnNvbGUubG9nKCdyZXNpemUnKVxufVxuXG5mdW5jdGlvbiBhZGROYXYoKSB7XG4gIGxldCBuYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYubmF2YmFyLWlubmVyJylbMF1cbiAgaWYgKG5hdiAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlkZVNob3dOYXYsIHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogdHJ1ZSxcbiAgICB9KVxuICAgIGNsZWFySW50ZXJ2YWwobmF2Q2hlY2tlcilcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRVcE9ic2VydmVyKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZm9vdGVyLWNvbnRhaW5lcicpLmZvckVhY2goKG1vZHVsZSkgPT4ge1xuICAgIG9ic2VydmVyLm9ic2VydmUobW9kdWxlKVxuICB9KVxufVxuXG5mdW5jdGlvbiBzZXRVcEhhbWJ1cmdlcigpIHtcbiAgbGV0IGhhbWJ1cmdlciA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2hhbWJ1cmdlcicpWzBdXG5cbiAgaWYgKGhhbWJ1cmdlcikge1xuICAgIGhhbWJ1cmdlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1lbnVUb2dnbGUpXG4gIH1cbn1cblxuZnVuY3Rpb24gcmV2ZWFsTmF2KGVudHJpZXMsIG9icykge1xuICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lm5hdmJhci1pbm5lcicpWzBdXG5cbiAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyAmJiBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+PSAwLjc1KSB7XG4gICAgICBjb25zb2xlLmxvZygnZW50cnkuaXNJbnRlcnNlY3RpbmcnKVxuICAgICAgbmF2LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOYXYnKVxuICAgICAgbmF2LmNsYXNzTGlzdC5hZGQoJ3Nob3dOYXYnKVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gdXBkYXRlQ2xvY2soKSB7XG4gIGxldCBsb2NhdGlvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFxuICAgICcuZm9vdGVyLWNvbnRhaW5lciAuY2xvY2stY29udGFpbmVyJ1xuICApXG5cbiAgbG9jYXRpb25zLmZvckVhY2goKGxvY2F0aW9uKSA9PiB7XG4gICAgbGV0IGNsb2NrU3R5bGUgPSBsb2NhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2xvY2stc3R5bGUnKVxuICAgIGxldCBjaXR5TmFtZSA9IGxvY2F0aW9uLnF1ZXJ5U2VsZWN0b3IoJy5jaXR5TmFtZScpXG4gICAgbGV0IHRpbWVab25lID0gbG9jYXRpb24uZ2V0QXR0cmlidXRlKCdkYXRhLXRpbWV6b25lJylcbiAgICBsZXQgbm93ID0gbHV4b24uRGF0ZVRpbWUubm93KCkuc2V0Wm9uZSh0aW1lWm9uZSlcblxuICAgIGNsb2NrU3R5bGUuaW5uZXJIVE1MID0gbm93LnRvRm9ybWF0KCdISDptbTpzcycpXG5cbiAgICBsZXQgaG91ciA9IHBhcnNlSW50KG5vdy50b0Zvcm1hdCgnSCcpKVxuXG4gICAgaWYgKGhvdXIgPj0gOSAmJiBob3VyIDw9IDE4KSB7XG4gICAgICBjaXR5TmFtZS5jbGFzc0xpc3QuYWRkKCdvcGVuJylcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIGlzVGhpc01vYmlsZSgpIHtcbiAgLy8gZGV2aWNlIGRldGVjdGlvblxuICBpZiAoXG4gICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KFxuICAgICAgbmF2aWdhdG9yLnVzZXJBZ2VudFxuICAgIClcbiAgKSB7XG4gICAgaXNNb2JpbGUgPSB0cnVlXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd05hdihlbGVtKSB7XG4gIGVsZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZU5hdicpXG4gIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2hvd05hdicpXG59XG5cbmZ1bmN0aW9uIGhpZGVOYXYoZWxlbSkge1xuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3Nob3dOYXYnKVxuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ2hpZGVOYXYnKVxufVxuXG4vLyBoaWRlIC8gc2hvdyBOYXYgZnVuY3Rpb25hbGl0eVxuLy8gcmVsaWVzIG9uIGxldCBwcmV2U2Nyb2xscG9zIGluIHdpbmRvdy5sb2FkXG5mdW5jdGlvbiBoaWRlU2hvd05hdihldmVudCkge1xuICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lm5hdmJhci1pbm5lcicpWzBdXG4gIGxldCBjdXJyZW50U2Nyb2xsUG9zID0gd2luZG93LnBhZ2VZT2Zmc2V0XG5cbiAgaWYgKG5hdiAhPSAndW5kZWZpbmVkJykge1xuICAgIGlmIChwcmV2U2Nyb2xscG9zID4gY3VycmVudFNjcm9sbFBvcyB8fCBjdXJyZW50U2Nyb2xsUG9zIDw9IDApIHtcbiAgICAgIHNob3dOYXYobmF2KVxuICAgIH0gZWxzZSB7XG4gICAgICBoaWRlTmF2KG5hdilcbiAgICB9XG4gICAgcHJldlNjcm9sbHBvcyA9IGN1cnJlbnRTY3JvbGxQb3NcbiAgfVxufVxuXG5mdW5jdGlvbiBtZW51Q2hhbmdlKGJvb2xlYW4pIHtcbiAgaWYgKGJvb2xlYW4pIHtcbiAgICAvLyBtZW51IGlzIG9wZW4sIGVuc3VyZXMgbW9iaWxlIG1lbnUgZG9lc24ndCBzY3JvbGwgYXdheVxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhpZGVTaG93TmF2LCB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IGZhbHNlLFxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgLy8gbWVudSBpcyBjbG9zZWRcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoaWRlU2hvd05hdiwge1xuICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICB9KVxuICB9XG59XG5cbmZ1bmN0aW9uIG1lbnVUb2dnbGUoKSB7XG4gIG1lbnVDbGljayA9ICFtZW51Q2xpY2tcbiAgLy8gdG9nZ2xlcyBib29sZWFuIGJldHdlZW4gdHJ1ZSBhbmQgZmFsc2VcbiAgbWVudUNoYW5nZShtZW51Q2xpY2spXG59XG5cbi8qIFBsZWFzZSByZW1vdmUgaG92ZXIgc3R5bGVzIGluIG1vYmlsZSA7KCAqL1xuZnVuY3Rpb24gaGFzVG91Y2goKSB7XG4gIHJldHVybiAoXG4gICAgJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8XG4gICAgbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzID4gMCB8fFxuICAgIG5hdmlnYXRvci5tc01heFRvdWNoUG9pbnRzID4gMFxuICApXG59XG5cbmlmIChoYXNUb3VjaCgpKSB7XG4gIC8vIHJlbW92ZSBhbGwgOmhvdmVyIHN0eWxlc2hlZXRzXG4gIHRyeSB7XG4gICAgLy8gcHJldmVudCBleGNlcHRpb24gb24gYnJvd3NlcnMgbm90IHN1cHBvcnRpbmcgRE9NIHN0eWxlU2hlZXRzIHByb3Blcmx5XG4gICAgZm9yICh2YXIgc2kgaW4gZG9jdW1lbnQuc3R5bGVTaGVldHMpIHtcbiAgICAgIHZhciBzdHlsZVNoZWV0ID0gZG9jdW1lbnQuc3R5bGVTaGVldHNbc2ldXG4gICAgICBpZiAoIXN0eWxlU2hlZXQucnVsZXMpIGNvbnRpbnVlXG5cbiAgICAgIGZvciAodmFyIHJpID0gc3R5bGVTaGVldC5ydWxlcy5sZW5ndGggLSAxOyByaSA+PSAwOyByaS0tKSB7XG4gICAgICAgIGlmICghc3R5bGVTaGVldC5ydWxlc1tyaV0uc2VsZWN0b3JUZXh0KSBjb250aW51ZVxuXG4gICAgICAgIGlmIChzdHlsZVNoZWV0LnJ1bGVzW3JpXS5zZWxlY3RvclRleHQubWF0Y2goJzpob3ZlcicpKSB7XG4gICAgICAgICAgc3R5bGVTaGVldC5kZWxldGVSdWxlKHJpKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9IGNhdGNoIChleCkge31cbn1cblxuLy8gU29sdmluZyBmb3IgbW9iaWxlIGJyb3dzZXIgdmggZGlzY3JlcGVuY2llcyBmb3IgcHJvamVjdCBpbWFnZVxuLy8gdmlhOiBodHRwczovL2Nzcy10cmlja3MuY29tL3RoZS10cmljay10by12aWV3cG9ydC11bml0cy1vbi1tb2JpbGUvXG4vLyBGaXJzdCB3ZSBnZXQgdGhlIHZpZXdwb3J0IGhlaWdodCBhbmQgd2UgbXVsdGlwbGUgaXQgYnkgMSUgdG8gZ2V0IGEgdmFsdWUgZm9yIGEgdmggdW5pdFxubGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxuLy8gVGhlbiB3ZSBzZXQgdGhlIHZhbHVlIGluIHRoZSAtLXZoIGN1c3RvbSBwcm9wZXJ0eSB0byB0aGUgcm9vdCBvZiB0aGUgZG9jdW1lbnRcbmRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12aCcsIGAke3ZofXB4YClcbi8vIFdlIGxpc3RlbiB0byB0aGUgcmVzaXplIGV2ZW50XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xuICAvLyBXZSBleGVjdXRlIHRoZSBzYW1lIHNjcmlwdCBhcyBiZWZvcmVcbiAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMVxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApXG59KVxuXG4vLyBoYWNrIHRvIGFkanVzdCBtYXJnaW4gZGlzY3JlcGVuY3kgaW4gYnJvd3NlcnNcbmZ1bmN0aW9uIGJyb3dzZXJUeXBlKCkge1xuICBsZXQgdXNlckFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpXG4gIGlmICh1c2VyQWdlbnQuaW5kZXhPZignc2FmYXJpJykgIT0gLTEpIHtcbiAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2Nocm9tZScpID4gLTEpIHtcbiAgICAgIC8vYnJvd3NlciBpcyBjaHJvbWVcbiAgICAgIGNvbnNvbGUubG9nKCdCcm93c2VyIHR5cGU6IENocm9tZScpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vYnJvd3NlciBpcyBzYWZhcmlcbiAgICAgIGNvbnNvbGUubG9nKCdCcm93c2VyIHR5cGU6IFNhZmFyaScpXG4gICAgICAvL2Fib3V0LnN0eWxlLm1hcmdpblRvcCA9IFwiMFwiO1xuICAgIH1cbiAgfVxufVxuXG5pc1RoaXNNb2JpbGUoKVxuYnJvd3NlclR5cGUoKVxuaGFzVG91Y2goKVxuIl0sIm5hbWVzIjpbInByZXZTY3JvbGxwb3MiLCJ3aW5kb3ciLCJwYWdlWU9mZnNldCIsImlzTW9iaWxlIiwibWVudUNsaWNrIiwib3B0aW9ucyIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJvYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwicmV2ZWFsTmF2IiwiY2xvY2siLCJzZXRJbnRlcnZhbCIsIm5hdkNoZWNrZXIiLCJvYnNlcnZlckNoZWNrZXIiLCJ3aW5kb3dSZXNpemUiLCJjb25zb2xlIiwibG9nIiwiYWRkTmF2IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImhpZGVTaG93TmF2IiwiY2FwdHVyZSIsInBhc3NpdmUiLCJjbGVhckludGVydmFsIiwic2V0VXBPYnNlcnZlciIsImZvckVhY2giLCJvYnNlcnZlIiwibW9kdWxlIiwic2V0VXBIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWVudVRvZ2dsZSIsImVudHJpZXMiLCJvYnMiLCJuYXYiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ1cGRhdGVDbG9jayIsImxvY2F0aW9ucyIsImNsb2NrU3R5bGUiLCJsb2NhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZSIsInRpbWVab25lIiwiZ2V0QXR0cmlidXRlIiwibm93IiwibHV4b24iLCJEYXRlVGltZSIsInNldFpvbmUiLCJpbm5lckhUTUwiLCJ0b0Zvcm1hdCIsImhvdXIiLCJwYXJzZUludCIsImlzVGhpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzaG93TmF2IiwiZWxlbSIsImhpZGVOYXYiLCJldmVudCIsImN1cnJlbnRTY3JvbGxQb3MiLCJtZW51Q2hhbmdlIiwiYm9vbGVhbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYXNUb3VjaCIsImRvY3VtZW50RWxlbWVudCIsIm1heFRvdWNoUG9pbnRzIiwibXNNYXhUb3VjaFBvaW50cyIsImUiLCJpc1Byb2plY3QiLCJsdXhvblRhZyIsImNyZWF0ZUVsZW1lbnQiLCJzcmMiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJzaSIsInN0eWxlU2hlZXRzIiwic3R5bGVTaGVldCIsInJ1bGVzIiwicmkiLCJsZW5ndGgiLCJzZWxlY3RvclRleHQiLCJtYXRjaCIsImRlbGV0ZVJ1bGUiLCJleCIsInZoIiwiaW5uZXJIZWlnaHQiLCJicm93c2VyVHlwZSIsInRvTG93ZXJDYXNlIiwiaW5kZXhPZiIsInN0eWxlIiwic2V0UHJvcGVydHkiXSwibWFwcGluZ3MiOiJBQUNBLElBQUlBLGNBQWdCQyxPQUFPQyxZQUV2QkMsVUFBVyxFQUNYQyxXQUFZLEVBR1pDLFFBQVUsQ0FDWkMsV0FBWSxVQUNaQyxVQUFXLEtBR1RDLFNBQVcsSUFBSUMscUJBQXFCQyxVQUFXTCxTQUVuRCxJQUFJTSxNQUFRQyxZQUFZLGdCQUFpQixLQUNyQ0MsV0FBYUQsWUFB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
