//This file is the javascript code for all the 4 webpages.

const ham = document.getElementById("ham");
const ulMobile = document.querySelector(".ul-mobile");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");
const hamBackground = document.querySelector(".ham-background");

//Event listener for when hamburger icon is clicked in mobile resolution
ham.addEventListener("click", function () {
  //Adds 'menu-transition' class to 'ul' tag to transition the menu
  ulMobile.classList.toggle("menu-transition");
  //Adds 'transition-1' to a number of elements related to the humberger icon
  ham.classList.toggle("transition-1");
  //Locks scrolling when hambuger icon is clicked
  body.classList.toggle("transition-1");
  //toggles the 'overlay' class when hamburgur icon is clicked.
  overlay.classList.toggle("hide-mobile");
});

//Global variable to store the last scrolled value.
let scrolledPos = window.scrollY;

//This block is for the menu at the top in mobile resolution. It toggels the 'ham-background' the classes associated with the hamburger icon
window.onscroll = function () {
  //Can also use: window.addEventListener("scroll", function () {

  //Current scrolled value
  let scrolled = window.scrollY; //window.scrollY reads the current scroll position in px.
  console.log(`Scrolled: \n` + scrolled); //Prints the current scroll position

  //If user scrolls up
  if (scrolled > scrolledPos) {
    hamBackground.classList.add("scroll-transition");
    ham.classList.add("scroll-transition");
    //If user scrolls down:
  } else {
    hamBackground.classList.remove("scroll-transition");
    ham.classList.remove("scroll-transition");
  }

  //Updates the scrolledPos variable with the current value.
  scrolledPos = scrolled;
  console.log(`scrolledPos: ` + scrolledPos);
};
