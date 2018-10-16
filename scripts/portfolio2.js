"use strict";

//import is from "is_js";
//console.log(is.even(42));

// BURGER MENU - PHONE, TABLET
const burgerMenuButton = document.querySelector(".navigation-logo img");
const burgerMenuItemsWrapper = document.querySelector(
  ".navigation-items-wrapper"
);
const aboutMeLink = document.querySelector("a#about-link");
const projectsLink = document.querySelector("a#projects-link");
const contactsLink = document.querySelector("a#contacts-link");
const navLinksArray = [aboutMeLink, projectsLink, contactsLink];
console.log(aboutMeLink);

let burgerMenuClicks = 0;

burgerMenuButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  burgerMenuClicks += 1;
  //console.log(burgerMenuClicks);

  if (burgerMenuClicks % 2 == 0) {
    //console.log("click # is even");
    burgerMenuItemsWrapper.classList.remove("showMenu");
    burgerMenuItemsWrapper.classList.add("hideMenu");
  } else {
    // console.log("click # is odd");
    burgerMenuItemsWrapper.classList.remove("hideMenu");
    burgerMenuItemsWrapper.classList.add("showMenu");
  }
}

navLinksArray.forEach(link => {
  link.addEventListener("click", closeMenu);
});

function closeMenu() {
  burgerMenuItemsWrapper.classList.remove("showMenu");
  burgerMenuItemsWrapper.classList.add("hideMenu");
}
