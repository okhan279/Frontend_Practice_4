//This script is for the MOBILE VERSION of the 'menu.html' 'wines.html' and 'about_us.html' pages.
//There is only 1 animation.
//The animation checks to see if user is scrolling up or down and moves the menu at the very top out of/into view.

const ham = document.getElementById("ham");
const hamBackground = document.querySelector(".ham-background");

$(document).ready(function () {
  let lastScrollTop = 0;
  $(window).scroll(function (event) {
    let st = $(this).scrollTop();
    //If user scrolls up
    if (st > lastScrollTop) {
      $(hamBackground).addClass("scroll-transition"); //Scroll the white strip upwards
      $(ham).addClass("scroll-transition"); //Scrolls the hamburger icon and its border upwards
      //If user scrolls down
    } else {
      $(hamBackground).removeClass("scroll-transition");
      $(ham).removeClass("scroll-transition");
    }
    lastScrollTop = st;
  });
});
