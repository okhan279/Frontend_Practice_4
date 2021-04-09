//This file is the javascript code for all the 4 webpages and is associated ONLY with the mobile resolution.
//It concerns the transitions associated when the hamburger icon is click.

const ulMobile = document.querySelector(".ul-mobile");
const overlay = document.querySelector(".overlay");
const body = document.querySelector("body");

$(document).ready(function () {
  $(ham).click(function () {
    //Adds 'menu-transition' class to 'ul' tag to transition the menu from 'translateX(-100%)' to 'translateX(0)'
    $(ulMobile).toggleClass("menu-transition");
    //Adds 'transition-1' to a number of elements related to the humberger icon
    $(this).toggleClass("transition-1");
    //Locks scrolling when hambuger icon is clicked
    $(body).toggleClass("transition-1");
    //toggles the 'overlay' class when hamburger icon is clicked.
    $(overlay).toggleClass("hide-mobile");
  });
});
