let prevScrollpos=window.pageYOffset,isMobile=!1,menuClick=!1,options={rootMargin:"0px 0px",threshold:.99},observer=new IntersectionObserver(revealNav,options);var clock=setInterval("updateClock()",1e3),navChecker=setInterval("addNav()",200),observerChecker=setInterval("setUpObserver()",200),slideChecker=setInterval("slides()",200);function windowResize(){console.log("resize")}function slides(){let e=document.querySelectorAll("div.slideshow")[0];document.querySelectorAll("div.slideshow img");void 0!==e&&(e.addEventListener("mousemove",function(e){}),clearInterval(slideChecker))}function addNav(){"undefined"!==document.querySelectorAll("div.navbar-inner")[0]&&(window.addEventListener("scroll",hideShowNav,{capture:!1,passive:!0}),clearInterval(navChecker))}function setUpObserver(){document.querySelectorAll(".footer-container").forEach(e=>{observer.observe(e)})}function setUpHamburger(){let e=document.getElementsByClassName("hamburger")[0];e&&e.addEventListener("click",menuToggle)}function revealNav(e,t){let o=document.querySelectorAll("div.navbar-inner")[0];e.forEach(e=>{e.isIntersecting&&.75<=e.intersectionRatio&&(console.log("entry.isIntersecting"),o.classList.remove("hideNav"),o.classList.add("showNav"))})}function updateClock(){let e=document.querySelectorAll(".footer-container .clock-container");e.forEach(e=>{let t=e.querySelector(".clock-style"),o=e.querySelector(".cityName");e=e.getAttribute("data-timezone");let n=luxon.DateTime.now().setZone(e);t.innerHTML=n.toFormat("HH:mm:ss");e=parseInt(n.toFormat("H"));9<=e&&e<=18&&o.classList.add("open")})}function isThisMobile(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(isMobile=!0)}function showNav(e){e.classList.remove("hideNav"),e.classList.add("showNav")}function hideNav(e){e.classList.remove("showNav"),e.classList.add("hideNav")}function hideShowNav(e){var t=document.querySelectorAll("div.navbar-inner")[0],o=window.pageYOffset;"undefined"!=t&&((prevScrollpos>o||o<=0?showNav:hideNav)(t),prevScrollpos=o)}function menuChange(e){e?document.removeEventListener("scroll",hideShowNav,{capture:!1,passive:!1}):document.addEventListener("scroll",hideShowNav,{capture:!1,passive:!1})}function menuToggle(){menuClick=!menuClick,menuChange(menuClick)}function hasTouch(){return"ontouchstart"in document.documentElement||0<navigator.maxTouchPoints||0<navigator.msMaxTouchPoints}if(window.addEventListener("sempliceTransitionInDone",function(e){isProject()},!1),setUpHamburger(),window.addEventListener("load",e=>{console.log("Window loaded");let t=document.createElement("script");t.src="https://moment.github.io/luxon/global/luxon.min.js",document.body.appendChild(t)}),hasTouch())try{for(var si in document.styleSheets){var styleSheet=document.styleSheets[si];if(styleSheet.rules)for(var ri=styleSheet.rules.length-1;0<=ri;ri--)styleSheet.rules[ri].selectorText&&styleSheet.rules[ri].selectorText.match(":hover")&&styleSheet.deleteRule(ri)}}catch(e){}let vh=.01*window.innerHeight;function browserType(){let e=navigator.userAgent.toLowerCase();-1!=e.indexOf("safari")&&(-1<e.indexOf("chrome")?console.log("Browser type: Chrome"):console.log("Browser type: Safari"))}document.documentElement.style.setProperty("--vh",`${vh}px`),window.addEventListener("resize",()=>{var e=.01*window.innerHeight;document.documentElement.style.setProperty("--vh",`${e}px`)}),isThisMobile(),browserType(),hasTouch();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2luZ2xlUGFnZS5qcyIsInNvdXJjZXMiOlsic2luZ2xlUGFnZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKuKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk1RoaXMgbGl2ZXMgaW4gU2VtcGxpY2Ug4oCTPiBBZHZhbmNlZCAtPiBKYXZhc2NyaXB0IOKAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAk+KAkyovXG5sZXQgcHJldlNjcm9sbHBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldCAvLyBOdW1iZXJcblxubGV0IGlzTW9iaWxlID0gZmFsc2VcbmxldCBtZW51Q2xpY2sgPSBmYWxzZVxuXG4vLyBGb3IgT2JzZXJ2ZXIgb2JqZWN0XG5sZXQgb3B0aW9ucyA9IHtcbiAgcm9vdE1hcmdpbjogJzBweCAwcHgnLFxuICB0aHJlc2hvbGQ6IDAuOTksXG59XG5cbmxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihyZXZlYWxOYXYsIG9wdGlvbnMpXG5cbnZhciBjbG9jayA9IHNldEludGVydmFsKCd1cGRhdGVDbG9jaygpJywgMTAwMClcbnZhciBuYXZDaGVja2VyID0gc2V0SW50ZXJ2YWwoJ2FkZE5hdigpJywgMjAwKVxudmFyIG9ic2VydmVyQ2hlY2tlciA9IHNldEludGVydmFsKCdzZXRVcE9ic2VydmVyKCknLCAyMDApXG52YXIgc2xpZGVDaGVja2VyID0gc2V0SW50ZXJ2YWwoJ3NsaWRlcygpJywgMjAwKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcbiAgJ3NlbXBsaWNlVHJhbnNpdGlvbkluRG9uZScsXG4gIGZ1bmN0aW9uIChlKSB7XG4gICAgaXNQcm9qZWN0KClcbiAgfSxcbiAgZmFsc2Vcbilcblxuc2V0VXBIYW1idXJnZXIoKVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIChldmVudCkgPT4ge1xuICBjb25zb2xlLmxvZygnV2luZG93IGxvYWRlZCcpXG5cbiAgLy8gbHV4b24gbGlicmFyeSA8c2NyaXB0PiB0YWdcbiAgbGV0IGx1eG9uVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JylcbiAgbHV4b25UYWcuc3JjID0gJ2h0dHBzOi8vbW9tZW50LmdpdGh1Yi5pby9sdXhvbi9nbG9iYWwvbHV4b24ubWluLmpzJ1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGx1eG9uVGFnKVxufSlcblxuZnVuY3Rpb24gd2luZG93UmVzaXplKCkge1xuICBjb25zb2xlLmxvZygncmVzaXplJylcbn1cblxuZnVuY3Rpb24gc2xpZGVzKCkge1xuICBsZXQgc2xpZGVTaG93ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LnNsaWRlc2hvdycpWzBdXG4gIGxldCBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuc2xpZGVzaG93IGltZycpXG5cbiAgaWYgKHNsaWRlU2hvdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgc2xpZGVTaG93LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgLy9cbiAgICAgIC8vIGNvbnNvbGUubG9nKGV2ZW50KVxuICAgIH0pXG4gICAgY2xlYXJJbnRlcnZhbChzbGlkZUNoZWNrZXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTmF2KCkge1xuICBsZXQgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2Lm5hdmJhci1pbm5lcicpWzBdXG4gIGlmIChuYXYgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGhpZGVTaG93TmF2LCB7XG4gICAgICBjYXB0dXJlOiBmYWxzZSxcbiAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgfSlcbiAgICBjbGVhckludGVydmFsKG5hdkNoZWNrZXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0VXBPYnNlcnZlcigpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmZvb3Rlci1jb250YWluZXInKS5mb3JFYWNoKChtb2R1bGUpID0+IHtcbiAgICBvYnNlcnZlci5vYnNlcnZlKG1vZHVsZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gc2V0VXBIYW1idXJnZXIoKSB7XG4gIGxldCBoYW1idXJnZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdoYW1idXJnZXInKVswXVxuXG4gIGlmIChoYW1idXJnZXIpIHtcbiAgICBoYW1idXJnZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtZW51VG9nZ2xlKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJldmVhbE5hdihlbnRyaWVzLCBvYnMpIHtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5uYXZiYXItaW5uZXInKVswXVxuXG4gIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcgJiYgZW50cnkuaW50ZXJzZWN0aW9uUmF0aW8gPj0gMC43NSkge1xuICAgICAgY29uc29sZS5sb2coJ2VudHJ5LmlzSW50ZXJzZWN0aW5nJylcbiAgICAgIG5hdi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlTmF2JylcbiAgICAgIG5hdi5jbGFzc0xpc3QuYWRkKCdzaG93TmF2JylcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUNsb2NrKCkge1xuICBsZXQgbG9jYXRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcbiAgICAnLmZvb3Rlci1jb250YWluZXIgLmNsb2NrLWNvbnRhaW5lcidcbiAgKVxuXG4gIGxvY2F0aW9ucy5mb3JFYWNoKChsb2NhdGlvbikgPT4ge1xuICAgIGxldCBjbG9ja1N0eWxlID0gbG9jYXRpb24ucXVlcnlTZWxlY3RvcignLmNsb2NrLXN0eWxlJylcbiAgICBsZXQgY2l0eU5hbWUgPSBsb2NhdGlvbi5xdWVyeVNlbGVjdG9yKCcuY2l0eU5hbWUnKVxuICAgIGxldCB0aW1lWm9uZSA9IGxvY2F0aW9uLmdldEF0dHJpYnV0ZSgnZGF0YS10aW1lem9uZScpXG4gICAgbGV0IG5vdyA9IGx1eG9uLkRhdGVUaW1lLm5vdygpLnNldFpvbmUodGltZVpvbmUpXG5cbiAgICBjbG9ja1N0eWxlLmlubmVySFRNTCA9IG5vdy50b0Zvcm1hdCgnSEg6bW06c3MnKVxuXG4gICAgbGV0IGhvdXIgPSBwYXJzZUludChub3cudG9Gb3JtYXQoJ0gnKSlcblxuICAgIGlmIChob3VyID49IDkgJiYgaG91ciA8PSAxOCkge1xuICAgICAgY2l0eU5hbWUuY2xhc3NMaXN0LmFkZCgnb3BlbicpXG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiBpc1RoaXNNb2JpbGUoKSB7XG4gIC8vIGRldmljZSBkZXRlY3Rpb25cbiAgaWYgKFxuICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChcbiAgICAgIG5hdmlnYXRvci51c2VyQWdlbnRcbiAgICApXG4gICkge1xuICAgIGlzTW9iaWxlID0gdHJ1ZVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dOYXYoZWxlbSkge1xuICBlbGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGVOYXYnKVxuICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3Nob3dOYXYnKVxufVxuXG5mdW5jdGlvbiBoaWRlTmF2KGVsZW0pIHtcbiAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaG93TmF2JylcbiAgZWxlbS5jbGFzc0xpc3QuYWRkKCdoaWRlTmF2Jylcbn1cblxuLy8gaGlkZSAvIHNob3cgTmF2IGZ1bmN0aW9uYWxpdHlcbi8vIHJlbGllcyBvbiBsZXQgcHJldlNjcm9sbHBvcyBpbiB3aW5kb3cubG9hZFxuZnVuY3Rpb24gaGlkZVNob3dOYXYoZXZlbnQpIHtcbiAgbGV0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5uYXZiYXItaW5uZXInKVswXVxuICBsZXQgY3VycmVudFNjcm9sbFBvcyA9IHdpbmRvdy5wYWdlWU9mZnNldFxuXG4gIGlmIChuYXYgIT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBpZiAocHJldlNjcm9sbHBvcyA+IGN1cnJlbnRTY3JvbGxQb3MgfHwgY3VycmVudFNjcm9sbFBvcyA8PSAwKSB7XG4gICAgICBzaG93TmF2KG5hdilcbiAgICB9IGVsc2Uge1xuICAgICAgaGlkZU5hdihuYXYpXG4gICAgfVxuICAgIHByZXZTY3JvbGxwb3MgPSBjdXJyZW50U2Nyb2xsUG9zXG4gIH1cbn1cblxuZnVuY3Rpb24gbWVudUNoYW5nZShib29sZWFuKSB7XG4gIGlmIChib29sZWFuKSB7XG4gICAgLy8gbWVudSBpcyBvcGVuLCBlbnN1cmVzIG1vYmlsZSBtZW51IGRvZXNuJ3Qgc2Nyb2xsIGF3YXlcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBoaWRlU2hvd05hdiwge1xuICAgICAgY2FwdHVyZTogZmFsc2UsXG4gICAgICBwYXNzaXZlOiBmYWxzZSxcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIC8vIG1lbnUgaXMgY2xvc2VkXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgaGlkZVNob3dOYXYsIHtcbiAgICAgIGNhcHR1cmU6IGZhbHNlLFxuICAgICAgcGFzc2l2ZTogZmFsc2UsXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBtZW51VG9nZ2xlKCkge1xuICBtZW51Q2xpY2sgPSAhbWVudUNsaWNrXG4gIC8vIHRvZ2dsZXMgYm9vbGVhbiBiZXR3ZWVuIHRydWUgYW5kIGZhbHNlXG4gIG1lbnVDaGFuZ2UobWVudUNsaWNrKVxufVxuXG4vKiBQbGVhc2UgcmVtb3ZlIGhvdmVyIHN0eWxlcyBpbiBtb2JpbGUgOyggKi9cbmZ1bmN0aW9uIGhhc1RvdWNoKCkge1xuICByZXR1cm4gKFxuICAgICdvbnRvdWNoc3RhcnQnIGluIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCB8fFxuICAgIG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyA+IDAgfHxcbiAgICBuYXZpZ2F0b3IubXNNYXhUb3VjaFBvaW50cyA+IDBcbiAgKVxufVxuXG5pZiAoaGFzVG91Y2goKSkge1xuICAvLyByZW1vdmUgYWxsIDpob3ZlciBzdHlsZXNoZWV0c1xuICB0cnkge1xuICAgIC8vIHByZXZlbnQgZXhjZXB0aW9uIG9uIGJyb3dzZXJzIG5vdCBzdXBwb3J0aW5nIERPTSBzdHlsZVNoZWV0cyBwcm9wZXJseVxuICAgIGZvciAodmFyIHNpIGluIGRvY3VtZW50LnN0eWxlU2hlZXRzKSB7XG4gICAgICB2YXIgc3R5bGVTaGVldCA9IGRvY3VtZW50LnN0eWxlU2hlZXRzW3NpXVxuICAgICAgaWYgKCFzdHlsZVNoZWV0LnJ1bGVzKSBjb250aW51ZVxuXG4gICAgICBmb3IgKHZhciByaSA9IHN0eWxlU2hlZXQucnVsZXMubGVuZ3RoIC0gMTsgcmkgPj0gMDsgcmktLSkge1xuICAgICAgICBpZiAoIXN0eWxlU2hlZXQucnVsZXNbcmldLnNlbGVjdG9yVGV4dCkgY29udGludWVcblxuICAgICAgICBpZiAoc3R5bGVTaGVldC5ydWxlc1tyaV0uc2VsZWN0b3JUZXh0Lm1hdGNoKCc6aG92ZXInKSkge1xuICAgICAgICAgIHN0eWxlU2hlZXQuZGVsZXRlUnVsZShyaSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSBjYXRjaCAoZXgpIHt9XG59XG5cbi8vIFNvbHZpbmcgZm9yIG1vYmlsZSBicm93c2VyIHZoIGRpc2NyZXBlbmNpZXMgZm9yIHByb2plY3QgaW1hZ2Vcbi8vIHZpYTogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS90aGUtdHJpY2stdG8tdmlld3BvcnQtdW5pdHMtb24tbW9iaWxlL1xuLy8gRmlyc3Qgd2UgZ2V0IHRoZSB2aWV3cG9ydCBoZWlnaHQgYW5kIHdlIG11bHRpcGxlIGl0IGJ5IDElIHRvIGdldCBhIHZhbHVlIGZvciBhIHZoIHVuaXRcbmxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDFcbi8vIFRoZW4gd2Ugc2V0IHRoZSB2YWx1ZSBpbiB0aGUgLS12aCBjdXN0b20gcHJvcGVydHkgdG8gdGhlIHJvb3Qgb2YgdGhlIGRvY3VtZW50XG5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmgnLCBgJHt2aH1weGApXG4vLyBXZSBsaXN0ZW4gdG8gdGhlIHJlc2l6ZSBldmVudFxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcbiAgLy8gV2UgZXhlY3V0ZSB0aGUgc2FtZSBzY3JpcHQgYXMgYmVmb3JlXG4gIGxldCB2aCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuMDFcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKVxufSlcblxuLy8gaGFjayB0byBhZGp1c3QgbWFyZ2luIGRpc2NyZXBlbmN5IGluIGJyb3dzZXJzXG5mdW5jdGlvbiBicm93c2VyVHlwZSgpIHtcbiAgbGV0IHVzZXJBZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKVxuICBpZiAodXNlckFnZW50LmluZGV4T2YoJ3NhZmFyaScpICE9IC0xKSB7XG4gICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdjaHJvbWUnKSA+IC0xKSB7XG4gICAgICAvL2Jyb3dzZXIgaXMgY2hyb21lXG4gICAgICBjb25zb2xlLmxvZygnQnJvd3NlciB0eXBlOiBDaHJvbWUnKVxuICAgIH0gZWxzZSB7XG4gICAgICAvL2Jyb3dzZXIgaXMgc2FmYXJpXG4gICAgICBjb25zb2xlLmxvZygnQnJvd3NlciB0eXBlOiBTYWZhcmknKVxuICAgICAgLy9hYm91dC5zdHlsZS5tYXJnaW5Ub3AgPSBcIjBcIjtcbiAgICB9XG4gIH1cbn1cblxuaXNUaGlzTW9iaWxlKClcbmJyb3dzZXJUeXBlKClcbmhhc1RvdWNoKClcbiJdLCJuYW1lcyI6WyJwcmV2U2Nyb2xscG9zIiwid2luZG93IiwicGFnZVlPZmZzZXQiLCJpc01vYmlsZSIsIm1lbnVDbGljayIsIm9wdGlvbnMiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsInJldmVhbE5hdiIsImNsb2NrIiwic2V0SW50ZXJ2YWwiLCJuYXZDaGVja2VyIiwib2JzZXJ2ZXJDaGVja2VyIiwic2xpZGVDaGVja2VyIiwid2luZG93UmVzaXplIiwiY29uc29sZSIsImxvZyIsInNsaWRlcyIsInNsaWRlU2hvdyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsInVuZGVmaW5lZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsZWFySW50ZXJ2YWwiLCJhZGROYXYiLCJoaWRlU2hvd05hdiIsImNhcHR1cmUiLCJwYXNzaXZlIiwic2V0VXBPYnNlcnZlciIsImZvckVhY2giLCJvYnNlcnZlIiwibW9kdWxlIiwic2V0VXBIYW1idXJnZXIiLCJoYW1idXJnZXIiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibWVudVRvZ2dsZSIsImVudHJpZXMiLCJvYnMiLCJuYXYiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiaW50ZXJzZWN0aW9uUmF0aW8iLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJ1cGRhdGVDbG9jayIsImxvY2F0aW9ucyIsImNsb2NrU3R5bGUiLCJsb2NhdGlvbiIsInF1ZXJ5U2VsZWN0b3IiLCJjaXR5TmFtZSIsInRpbWVab25lIiwiZ2V0QXR0cmlidXRlIiwibm93IiwibHV4b24iLCJEYXRlVGltZSIsInNldFpvbmUiLCJpbm5lckhUTUwiLCJ0b0Zvcm1hdCIsImhvdXIiLCJwYXJzZUludCIsImlzVGhpc01vYmlsZSIsInRlc3QiLCJuYXZpZ2F0b3IiLCJ1c2VyQWdlbnQiLCJzaG93TmF2IiwiZWxlbSIsImhpZGVOYXYiLCJjdXJyZW50U2Nyb2xsUG9zIiwibWVudUNoYW5nZSIsImJvb2xlYW4iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFzVG91Y2giLCJkb2N1bWVudEVsZW1lbnQiLCJtYXhUb3VjaFBvaW50cyIsIm1zTWF4VG91Y2hQb2ludHMiLCJlIiwiaXNQcm9qZWN0IiwibHV4b25UYWciLCJjcmVhdGVFbGVtZW50Iiwic3JjIiwiYm9keSIsImFwcGVuZENoaWxkIiwic2kiLCJzdHlsZVNoZWV0cyIsInN0eWxlU2hlZXQiLCJydWxlcyIsInJpIiwibGVuZ3RoIiwic2VsZWN0b3JUZXh0IiwibWF0Y2giLCJkZWxldGVSdWxlIiwiZXgiLCJ2aCIsImlubmVySGVpZ2h0IiwiYnJvd3NlclR5cGUiLCJ0b0xvd2VyQ2FzZSIsImluZGV4T2YiLCJzdHlsZSIsInNldFByb3BlcnR5Il0sIm1hcHBpbmdzIjoiQUFDQSxJQUFJQSxjQUFnQkMsT0FBT0MsWUFFdkJDLFVBQVcsRUFDWEMsV0FBWSxFQUdaQyxRQUFVLENBQ1pDLFdBQVksVUFDWkMsVUFBVyxLQUdUQyxTQUFXLElBQUlDLHFCQUFxQkMsVUFBV0wsU0FFbkQsSUFBSU0sTUFBUUMsWUFBWSxnQkFBaUIsS0FDckNDLFdBQWFELFlBQVksV0FBWSxLQUNyQ0UsZ0JBQWtCRixZQUFZLGtCQUFtQixLQUNqREcsYUFBZUgsWUFBWSxXQUFZLEtBcUIzQyxTQUFTSSxlQUNQQyxRQUFRQyxJQUFJLFVBR2QsU0FBU0MsU0FDUCxJQUFJQyxFQUFZQyxTQUFTQyxpQkFBaUIsaUJBQWlCLEdBQzlDRCxTQUFTQyxpQkFBaUIsMEJBRXJCQyxJQUFkSCxJQUNGQSxFQUFVSSxpQkFBaUIsWUFBYSxTQUFVQyxNQUlsREMsY0FBY1gsZUFJbEIsU0FBU1ksU0FFSyxjQURGTixTQUFTQyxpQkFBaUIsb0JBQW9CLEtBRXREckIsT0FBT3VCLGlCQUFpQixTQUFVSSxZQUFhLENBQzdDQyxTQUFTLEVBQ1RDLFNBQVMsSUFFWEosY0FBY2IsYUFJbEIsU0FBU2tCLGdCQUNQVixTQUFTQyxpQkFBaUIscUJBQXFCVSxRQUFRLElBQ3JEeEIsU0FBU3lCLFFBQVFDLEtBSXJCLFNBQVNDLGlCQUNQLElBQUlDLEVBQVlmLFNBQVNnQix1QkFBdUIsYUFBYSxHQUV6REQsR0FDRkEsRUFBVVosaUJBQWlC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
