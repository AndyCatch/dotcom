var innerDocClick

// document.onmouseover = function() {
//     //User's mouse is inside the page.
//     window.innerDocClick = true;
//     console.log(window.innerDocClick)
// }

// document.onmouseleave = function() {
//     //User's mouse has left the page.
//     window.innerDocClick = false;
//     console.log(window.innerDocClick)
// }

// window.onhashchange = function() {
//     if (window.innerDocClick) {
//         console.log("in-page")
//         //Your own in-page mechanism triggered the hash change
//     } else {
//         //Browser back button was clicked
//         console.log("back")
//     }
// }

window.addEventListener('popstate', function(event) {
    this.console.log("popstate")

}, false);