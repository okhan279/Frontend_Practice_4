//This script is for the MOBILE VERSION of the 'menu.html' 'wines.html' and 'about_us.html' pages.
//There is only 1 animation.
//The animation checks to see if user is scrolling up or down and moves the menu at the very top out of/into view.

const ham = document.getElementById("ham");
const hamBackground = document.querySelector(".ham-background");

//Global variable to store the last scrolled value.
let scrolledPos = window.scrollY;

//This block is for the menu at the top in mobile resolution. It toggels the 'ham-background' the classes associated with the hamburger icon
window.onscroll = function () {
  //Can also use: window.addEventListener("scroll", function () {code here}

  //Current scrolled value
  let scrolled = window.scrollY; //window.scrollY reads the current scroll position in px.
  console.log(`Scrolled: \n` + scrolled);

  //If user scrolls up
  if (scrolled > scrolledPos) {
    hamBackground.classList.add("scroll-transition"); //Scroll the white strip upwards
    ham.classList.add("scroll-transition"); //Scrolls the hamburger icon and its border upwards

    //If user scrolls down:
  } else {
    hamBackground.classList.remove("scroll-transition"); //Scroll the white strip downwards
    ham.classList.remove("scroll-transition"); //Scroll the hamberger icon and its border downwards.
  }

  //Updates the scrolledPos variable with the current value.
  scrolledPos = scrolled;
  console.log(`scrolledPos: ` + scrolledPos);
};
