//This script is exclusively for 'index.html'.
//It consists of 2 scroll animations:
//animation 1 (for mobile resolution only): checks to see if user is scrolling up or down and moves the menu at the very top out of/into view.
/*animation 2 (for Laptop and Ipad resolution): After scrolling a certain number of pixels, the correct menu will be highlighted with
a reddish background colour and white font. */

const ham = document.getElementById("ham");
const hamBackground = document.querySelector(".ham-background");
const reservation = document.querySelector(".reservation");
const home = document.querySelector(".home");
const contact_li = document.querySelector(".contact-li");

const window_width = window.innerWidth;
const window_height = window.innerHeight;

console.log(`width: ` + window_width);
console.log(`height: ` + window_height);

//Global variable to store the last scrolled value.
let scrolledPos = window.scrollY;

//This block is for the menu at the top in mobile resolution. It toggels the 'ham-background' the classes associated with the hamburger icon
window.onscroll = function () {
  //Can also use: window.addEventListener("scroll", function () {}

  //---------------ANITMATION 1---------------//
  //Current scrolled value
  let scrolled = window.scrollY; //window.scrollY reads the current scroll position in px.
  console.log(`Scrolled: \n` + scrolled);

  //If user scrolls up
  if (scrolled > scrolledPos) {
    hamBackground.classList.add("scroll-transition"); //Scrolled the white strip up
    ham.classList.add("scroll-transition"); //Scrolls the hamburgur icon up.
    //If user scrolls down:
  } else {
    hamBackground.classList.remove("scroll-transition");
    ham.classList.remove("scroll-transition");
  }

  //Updates the scrolledPos variable with the current value.
  scrolledPos = scrolled;
  console.log(`scrolledPos: ` + scrolledPos);

  //---------------ANIMATION 2---------------//
  //if it is not mobile resolution:
  if (window_width !== 1362 && window_height !== 2950) {
    //If px scrolled is < 406:
    if (scrolled < 406) {
      home.classList.remove("transition-1"); //Removes the background-color: white; and 'color: black;' from '.home' class.
      reservation.classList.remove("transition-1"); //This class will be removed when user scrolls back to 406px after scrolling beyond it.
    }

    //If px scrolled is >= 406px:
    else if (scrolled >= 406 && scrolled < 3700) {
      home.classList.add("transition-1"); //removes the red background colour and white font color of 'home'.
      reservation.classList.add("transition-1"); //adds the red background colour and white font colour of 'reservation'.
      contact_li.classList.remove("transition-1");
    }

    //If px scrolled is > 3700px:
    else {
      reservation.classList.remove("transition-1");
      contact_li.classList.add("transition-1");
    }
  }
};
