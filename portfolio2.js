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
// function addLinkToLogo(mediaQuery) {
//   if (mediaQuery.matches) {
//     logo.innerHTML = `<a id="top-link" href="#top"><img id="logo-pic" src="../images/logo4.png" alt=""></a>`;
//   } else {
//     logo.innerHTML = `<img id="logo-pic" src="../images/logo4.png" alt="">`;
//   }
// }

// addLinkToLogo(mediaQuery);
// mediaQuery.addListener(addLinkToLogo);

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

document.querySelector("#stud-list").addEventListener("mouseover", listDet);
document.querySelector("#stud-list").addEventListener("mouseout", listDetClose);

document.querySelector("#ill-vid").addEventListener("mouseover", illDet);
document.querySelector("#ill-vid").addEventListener("mouseout", illDetClose);

document.querySelector("#foobar").addEventListener("mouseover", fooDet);
document.querySelector("#foobar").addEventListener("mouseout", fooDetClose);

document.querySelector("#rest-menu").addEventListener("mouseover", restDet);
document.querySelector("#rest-menu").addEventListener("mouseout", restDetClose);

function difDet() {
  document.querySelector("#difanation .desc").classList.remove("hideDetails");
  document.querySelector("#difanation .desc").classList.add("showDetails");
  document.querySelector("#difanation .desc-text").classList.add("showText");
}
function difDetClose() {
  document.querySelector("#difanation .desc").classList.remove("showDetails");
  document.querySelector("#difanation .desc-text").classList.remove("showText");
  document.querySelector("#difanation .desc").classList.add("hideDetails");
}

function hotDet() {
  document.querySelector("#some-hot .desc").classList.remove("hideDetails");
  document.querySelector("#some-hot .desc").classList.add("showDetails");
  document.querySelector("#some-hot .desc-text").classList.add("showText");
}
function hotDetClose() {
  document.querySelector("#some-hot .desc").classList.remove("showDetails");
  document.querySelector("#some-hot .desc-text").classList.remove("showText");
  document.querySelector("#some-hot .desc").classList.add("hideDetails");
}

function listDet() {
  document.querySelector("#stud-list .desc").classList.remove("hideDetails");
  document.querySelector("#stud-list .desc").classList.add("showDetails");
  document.querySelector("#stud-list .desc-text").classList.add("showText");
}
function listDetClose() {
  document.querySelector("#stud-list .desc").classList.remove("showDetails");
  document.querySelector("#stud-list .desc-text").classList.remove("showText");
  document.querySelector("#stud-list .desc").classList.add("hideDetails");
}

function illDet() {
  document.querySelector("#ill-vid .desc").classList.remove("hideDetails");
  document.querySelector("#ill-vid .desc").classList.add("showDetails");
  document.querySelector("#ill-vid .desc-text").classList.add("showText");
}
function illDetClose() {
  document.querySelector("#ill-vid .desc").classList.remove("showDetails");
  document.querySelector("#ill-vid .desc-text").classList.remove("showText");
  document.querySelector("#ill-vid .desc").classList.add("hideDetails");
}

function fooDet() {
  document.querySelector("#foobar .desc").classList.remove("hideDetails");
  document.querySelector("#foobar .desc").classList.add("showDetails");
  document.querySelector("#foobar .desc-text").classList.add("showText");
}
function fooDetClose() {
  document.querySelector("#foobar .desc").classList.remove("showDetails");
  document.querySelector("#foobar .desc-text").classList.remove("showText");
  document.querySelector("#foobar .desc").classList.add("hideDetails");
}

function restDet() {
  document.querySelector("#rest-menu .desc").classList.remove("hideDetails");
  document.querySelector("#rest-menu .desc").classList.add("showDetails");
  document.querySelector("#rest-menu .desc-text").classList.add("showText");
}
function restDetClose() {
  document.querySelector("#rest-menu .desc").classList.remove("showDetails");
  document.querySelector("#rest-menu .desc-text").classList.remove("showText");
  document.querySelector("#rest-menu .desc").classList.add("hideDetails");
}
