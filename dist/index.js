"use strict";
let feature = document.querySelector(".feature");
let feat = document.querySelector("#feat");
feat.addEventListener("click", () => {
    feature.classList.toggle("hide");
    if (comps.classList.contains("hide") === false) {
        comps.classList.add("hide");
    }
});
let comps = document.querySelector(".comps");
let company = document.querySelector("#comp");
company.addEventListener("click", () => {
    comps.classList.toggle("hide");
    if (feature.classList.contains("hide") === false) {
        feature.classList.add("hide");
    }
});
let overlay = document.querySelector(".overlay");
let openNav = document.querySelector(".open");
let closeNav = document.querySelector(".close");
let navMenu = document.querySelector(".menu-expand");
let featMenu = document.querySelector("#feat-mob");
let compMenu = document.querySelector("#comp-mob");
let featLi = document.querySelector(".feat-mob");
let compLi = document.querySelector(".comp-mob");
openNav.addEventListener("click", () => {
    openNav.classList.toggle("hide");
    closeNav.classList.toggle("hide");
    overlay.classList.toggle("hide");
    navMenu.classList.toggle("hide");
});
closeNav.addEventListener("click", () => {
    closeNav.classList.toggle("hide");
    openNav.classList.toggle("hide");
    overlay.classList.toggle("hide");
    navMenu.classList.toggle("hide");
});
featMenu.addEventListener("click", () => {
    featLi.classList.toggle("hide");
});
compMenu.addEventListener("click", () => {
    compLi.classList.toggle("hide");
});
//# sourceMappingURL=index.js.map