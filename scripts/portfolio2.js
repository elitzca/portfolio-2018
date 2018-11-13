"use strict";

//import is from "is_js";
//console.log(is.even(42));

// BURGER MENU - PHONE, TABLET
const logo = document.querySelector("div.navigation-logo");
const mediaQuery = window.matchMedia("(min-width:1025px)");
const burgerMenuItemsWrapper = document.querySelector(
  ".navigation-items-wrapper"
);
const crossDiv = document.querySelector("div.navigation-cross");
const topLink = document.querySelector("a#top-link");
const aboutMeLink = document.querySelector("a#about-link");
const projectsLink = document.querySelector("a#projects-link");
const skillsLink = document.querySelector("a#skills-link");
const contactsLink = document.querySelector("a#contacts-link");
const navLinksArray = [
  topLink,
  aboutMeLink,
  projectsLink,
  skillsLink,
  contactsLink
];

//desktop size - add link to logo
function addLinkToLogo(mediaQuery) {
  if (mediaQuery.matches) {
    logo.innerHTML = `<a id="top-link" href="#top"><img src="images/e-icon.png" class="logo-pic"></a>`;
  } else {
    logo.innerHTML = `<img src="images/e-icon.png" class="logo-pic">`;
  }
}

addLinkToLogo(mediaQuery);
mediaQuery.addListener(addLinkToLogo);

//phone size
logo.addEventListener("click", openMenu);

function openMenu() {
  burgerMenuItemsWrapper.classList.remove("hideMenu");
  burgerMenuItemsWrapper.classList.add("showMenu");

  crossDiv.classList.remove("fadeOutCross");
  crossDiv.classList.add("fadeInCross");
}

crossDiv.addEventListener("click", closeMenu);

function closeMenu() {
  burgerMenuItemsWrapper.classList.remove("showMenu");
  burgerMenuItemsWrapper.classList.add("hideMenu");

  crossDiv.classList.remove("fadeInCross");
  crossDiv.classList.add("fadeOutCross");
}

navLinksArray.forEach(link => {
  link.addEventListener("click", closeMenu);
});
