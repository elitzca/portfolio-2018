"use strict";

const logo = document.querySelector("div.navigation-logo");
const mediaQuery = window.matchMedia("(min-width:1025px)");

//desktop size - add link to logo
// function addLinkToLogo(mediaQuery) {
//   if (mediaQuery.matches) {
//     logo.innerHTML = `<a id="top-link" href="index.html#top"><img id="logo-pic" src="../images/logo4.png" alt=""></a>`;
//   } else {
//     logo.innerHTML = `<img id="logo-pic" src="../images/logo4.png" alt="">`;
//   }
// }

addLinkToLogo(mediaQuery);
mediaQuery.addListener(addLinkToLogo);
