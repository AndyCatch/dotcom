function slides(){let e=document.querySelectorAll("div.index-items a");e.forEach(e=>{if(e.querySelectorAll("div.slideshow")[0]){let l=e.querySelectorAll("div.slideshow")[0],o=l.querySelectorAll("img");e.addEventListener("mousemove",function(e){var t=e.clientX,e=l.offsetWidth,e=Math.floor(t/e*o.length);o.forEach(e=>{e.style.zIndex=0,e.style.opacity=0}),o[e].style.zIndex=1,o[e].style.opacity=1}),e.addEventListener("mouseout",function(e){o.forEach(e=>{e.style.opacity=0})})}}),clearInterval(slideChecker)}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZ1NsaWRlc2hvdy5qcyIsInNvdXJjZXMiOlsiZHJhZ1NsaWRlc2hvdy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyB2YXIgc2xpZGVDaGVja2VyID0gc2V0SW50ZXJ2YWwoJ3NsaWRlcygpJywgMjAwKVxuXG5mdW5jdGlvbiBzbGlkZXMoKSB7XG4gIC8vIEdyYWIgYWxsIHRoZSBpbmRleEl0ZW1zXG4gIGxldCBpbmRleEl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZGl2LmluZGV4LWl0ZW1zIGEnKVxuXG4gIC8vIEdvIHRocm91Z2ggYWxsIG9mIHRoZW0sIHNlZSB3aGljaCBvbmVzIGhhdmUgc2xpZGVzaG93c1xuICBpbmRleEl0ZW1zLmZvckVhY2goKGluZGV4SXRlbSkgPT4ge1xuICAgIGlmIChpbmRleEl0ZW0ucXVlcnlTZWxlY3RvckFsbCgnZGl2LnNsaWRlc2hvdycpWzBdKSB7XG4gICAgICAvLyB0aGUgb25lcyB0aGF0IGRvLCBncmFiIHNvbWUgcmVmZXJlbmNlc1xuICAgICAgbGV0IHNsaWRlU2hvdyA9IGluZGV4SXRlbS5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuc2xpZGVzaG93JylbMF1cbiAgICAgIGxldCBpbWFnZXMgPSBzbGlkZVNob3cucXVlcnlTZWxlY3RvckFsbCgnaW1nJylcblxuICAgICAgLy8gQXNzdW1pbmcgdGhhdCBhbnkgaW5kZXhJdGVtIGluIGhlcmUgKiBoYXMgKiBhIHNsaWRlc2hvdywgYWRkIGEgbW91c2UgbW92ZSBsaXN0ZW5lciB0byBpdFxuICAgICAgaW5kZXhJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhldmVudC5jbGllbnRYKVxuICAgICAgICBjb25zdCB4ID0gZXZlbnQuY2xpZW50WFxuICAgICAgICBjb25zdCB3aWR0aCA9IHNsaWRlU2hvdy5vZmZzZXRXaWR0aFxuICAgICAgICBjb25zdCBwZXJjZW50YWdlID0geCAvIHdpZHRoXG4gICAgICAgIGNvbnN0IGltYWdlTnVtYmVyID0gTWF0aC5mbG9vcihwZXJjZW50YWdlICogaW1hZ2VzLmxlbmd0aClcblxuICAgICAgICBpbWFnZXMuZm9yRWFjaCgoaW1hZ2UpID0+IHtcbiAgICAgICAgICAvLyBzZXQgdGhlIHogYmFjayB0byAwLCBvcGFjaXR5IHRvIDBcbiAgICAgICAgICBpbWFnZS5zdHlsZS56SW5kZXggPSAwXG4gICAgICAgICAgaW1hZ2Uuc3R5bGUub3BhY2l0eSA9IDBcbiAgICAgICAgfSlcblxuICAgICAgICBpbWFnZXNbaW1hZ2VOdW1iZXJdLnN0eWxlLnpJbmRleCA9IDFcbiAgICAgICAgaW1hZ2VzW2ltYWdlTnVtYmVyXS5zdHlsZS5vcGFjaXR5ID0gMVxuICAgICAgfSlcblxuICAgICAgaW5kZXhJdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGltYWdlcy5mb3JFYWNoKChpbWFnZSkgPT4ge1xuICAgICAgICAgIGltYWdlLnN0eWxlLm9wYWNpdHkgPSAwXG4gICAgICAgIH0pXG4gICAgICB9KVxuICAgIH1cbiAgfSlcblxuICAvLyBjbGVhcmluZyB0aGUgaW50ZXJ2YWwgdG8gc3RvcCB0aGUgYnJ1dGUgZm9yY2VcbiAgY2xlYXJJbnRlcnZhbChzbGlkZUNoZWNrZXIpXG59XG4iXSwibmFtZXMiOlsic2xpZGVzIiwiaW5kZXhJdGVtcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJpbmRleEl0ZW0iLCJzbGlkZVNob3ciLCJpbWFnZXMiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJ4IiwiY2xpZW50WCIsIndpZHRoIiwib2Zmc2V0V2lkdGgiLCJpbWFnZU51bWJlciIsIk1hdGgiLCJmbG9vciIsImxlbmd0aCIsImltYWdlIiwic3R5bGUiLCJ6SW5kZXgiLCJvcGFjaXR5IiwiY2xlYXJJbnRlcnZhbCIsInNsaWRlQ2hlY2tlciJdLCJtYXBwaW5ncyI6IkFBRUEsU0FBU0EsU0FFUCxJQUFJQyxFQUFhQyxTQUFTQyxpQkFBaUIscUJBRzNDRixFQUFXRyxRQUFRLElBQ2pCLEdBQUlDLEVBQVVGLGlCQUFpQixpQkFBaUIsR0FBSSxDQUVsRCxJQUFJRyxFQUFZRCxFQUFVRixpQkFBaUIsaUJBQWlCLEdBQ3hESSxFQUFTRCxFQUFVSCxpQkFBaUIsT0FHeENFLEVBQVVHLGlCQUFpQixZQUFhLFNBQVVDLEdBRWhELElBQU1DLEVBQUlELEVBQU1FLFFBQ1ZDLEVBQVFOLEVBQVVPLFlBRWxCQyxFQUFjQyxLQUFLQyxNQUROTixFQUFJRSxFQUNxQkwsRUFBT1UsUUFFbkRWLEVBQU9ILFFBQVEsSUFFYmMsRUFBTUMsTUFBTUMsT0FBUyxFQUNyQkYsRUFBTUMsTUFBTUUsUUFBVSxJQUd4QmQsRUFBT08sR0FBYUssTUFBTUMsT0FBUyxFQUNuQ2IsRUFBT08sR0FBYUssTUFBTUUsUUFBVSxJQUd0Q2hCLEVBQVVHLGlCQUFpQixXQUFZLFNBQVVDLEdBQy9DRixFQUFPSCxRQUFRLElBQ2JjLEVBQU1DLE1BQU1FLFFBQVUsU0FPOUJDLGNBQWNDIn0=
