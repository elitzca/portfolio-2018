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
    logo.innerHTML = `<a id="top-link" href="#top"><svg id="logo-pic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 277 442.99">
    <defs>
      <style>
        .cls-1 {
          fill: #666;
        }
  
        .cls-2 {
          fill: none;
          stroke: #666;
          stroke-miterlimit: 10;
          stroke-width: 4px;
        }
  
        .cls-3 {
          fill: url(#linear-gradient);
        }
  
        .cls-4 {
          fill: url(#linear-gradient-2);
        }
      </style>
      <linearGradient id="linear-gradient" x1="359.03" y1="149.04" x2="154.04" y2="149.04" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#8cfffd"/>
        <stop offset="0.05" stop-color="#93f6fd"/>
        <stop offset="0.13" stop-color="#a6dcfe"/>
        <stop offset="0.24" stop-color="#c4b3fe"/>
        <stop offset="0.33" stop-color="#e28aff"/>
        <stop offset="0.66" stop-color="#f6ff94"/>
        <stop offset="0.99" stop-color="#abffbd"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="188.71" y1="473.96" x2="265.63" y2="222.39" xlink:href="#linear-gradient"/>
    </defs>
    <title>logo</title>
    <path class="cls-1" d="M267,44A106,106,0,1,1,161,150,106.12,106.12,0,0,1,267,44m0-4A110,110,0,1,0,377,150,110,110,0,0,0,267,40Z" transform="translate(-100 -38.01)"/>
    <path class="cls-2" d="M359,350.75c0,71.66-59.16,126.75-129.72,126.75S103.5,422.4,103.5,350.75,160.7,221,231.25,221,359,279.09,359,350.75Z" transform="translate(-100 -38.01)"/>
    <path class="cls-3" d="M217,167c0-44.74,48.58-81,108.5-81A142.46,142.46,0,0,1,359,89.95a111,111,0,1,0-43.08,157.74C260.5,244.07,217,209.33,217,167Z" transform="translate(-100 -38.01)"/>
    <path class="cls-4" d="M283,442c-62.41,0-113-44.32-113-99s50.59-99,113-99a127.9,127.9,0,0,1,32.22,4.09,131.5,131.5,0,1,0,19.42,183A125.56,125.56,0,0,1,283,442Z" transform="translate(-100 -38.01)"/>
  </svg>
  </a>`;
  } else {
    logo.innerHTML = `<svg id="logo-pic" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 277 442.99">
    <defs>
      <style>
        .cls-1 {
          fill: #666;
        }
  
        .cls-2 {
          fill: none;
          stroke: #666;
          stroke-miterlimit: 10;
          stroke-width: 4px;
        }
  
        .cls-3 {
          fill: url(#linear-gradient);
        }
  
        .cls-4 {
          fill: url(#linear-gradient-2);
        }
      </style>
      <linearGradient id="linear-gradient" x1="359.03" y1="149.04" x2="154.04" y2="149.04" gradientUnits="userSpaceOnUse">
        <stop offset="0" stop-color="#8cfffd"/>
        <stop offset="0.05" stop-color="#93f6fd"/>
        <stop offset="0.13" stop-color="#a6dcfe"/>
        <stop offset="0.24" stop-color="#c4b3fe"/>
        <stop offset="0.33" stop-color="#e28aff"/>
        <stop offset="0.66" stop-color="#f6ff94"/>
        <stop offset="0.99" stop-color="#abffbd"/>
      </linearGradient>
      <linearGradient id="linear-gradient-2" x1="188.71" y1="473.96" x2="265.63" y2="222.39" xlink:href="#linear-gradient"/>
    </defs>
    <title>logo</title>
    <path class="cls-1" d="M267,44A106,106,0,1,1,161,150,106.12,106.12,0,0,1,267,44m0-4A110,110,0,1,0,377,150,110,110,0,0,0,267,40Z" transform="translate(-100 -38.01)"/>
    <path class="cls-2" d="M359,350.75c0,71.66-59.16,126.75-129.72,126.75S103.5,422.4,103.5,350.75,160.7,221,231.25,221,359,279.09,359,350.75Z" transform="translate(-100 -38.01)"/>
    <path class="cls-3" d="M217,167c0-44.74,48.58-81,108.5-81A142.46,142.46,0,0,1,359,89.95a111,111,0,1,0-43.08,157.74C260.5,244.07,217,209.33,217,167Z" transform="translate(-100 -38.01)"/>
    <path class="cls-4" d="M283,442c-62.41,0-113-44.32-113-99s50.59-99,113-99a127.9,127.9,0,0,1,32.22,4.09,131.5,131.5,0,1,0,19.42,183A125.56,125.56,0,0,1,283,442Z" transform="translate(-100 -38.01)"/>
  </svg>`;
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

// show description of projects

document.querySelector("#difanation").addEventListener("mouseover", difDet);
document.querySelector("#difanation").addEventListener("mouseout", difDetClose);

document.querySelector("#some-hot").addEventListener("mouseover", hotDet);
document.querySelector("#some-hot").addEventListener("mouseout", hotDetClose);

function difDet() {
  document.querySelector("#difanation .desc").classList.remove("hideDetails");
  document.querySelector("#difanation .desc").classList.add("showDetails");
  // document.querySelector("#difanation .desc-text").classList.add("showText");
}
function difDetClose() {
  document.querySelector("#difanation .desc").classList.remove("showDetails");
  // document.querySelector("#difanation .desc-text").classList.remove("showText");
  document.querySelector("#difanation .desc").classList.add("hideDetails");
}

function hotDet() {
  document.querySelector("#some-hot .desc").classList.remove("hideDetails");
  document.querySelector("#some-hot .desc").classList.add("showDetails");
  // document.querySelector("#difanation .desc-text").classList.add("showText");
}
function hotDetClose() {
  document.querySelector("#some-hot .desc").classList.remove("showDetails");
  // document.querySelector("#difanation .desc-text").classList.remove("showText");
  document.querySelector("#some-hot .desc").classList.add("hideDetails");
}
