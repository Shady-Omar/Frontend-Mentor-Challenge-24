// Features Menu

let feature:any = document.querySelector(".feature");
let feat:any = document.querySelector("#feat");

feat.addEventListener("click", () => {
  feature.classList.toggle("hide")

  if ( comps.classList.contains("hide") === false ) {
    comps.classList.add("hide")
  }

});

// Company Menu

let comps:any = document.querySelector(".comps");
let company:any = document.querySelector("#comp");

company.addEventListener("click", () => {
  comps.classList.toggle("hide")

  if ( feature.classList.contains("hide") === false ) {
    feature.classList.add("hide")
  }

});

// Overlay 

let overlay:any = document.querySelector(".overlay");

// Mobile Nav bar

let openNav:any = document.querySelector(".open");
let closeNav:any = document.querySelector(".close");

// Mobile Nav Menu

let navMenu:any = document.querySelector(".menu-expand");
let featMenu:any = document.querySelector("#feat-mob");
let compMenu:any = document.querySelector("#comp-mob");
let featLi:any = document.querySelector(".feat-mob");
let compLi:any = document.querySelector(".comp-mob");


openNav.addEventListener("click", () => {
  openNav.classList.toggle("hide")
  closeNav.classList.toggle("hide")
  overlay.classList.toggle("hide")
  navMenu.classList.toggle("hide")
});

closeNav.addEventListener("click", () => {
  closeNav.classList.toggle("hide")
  openNav.classList.toggle("hide")
  overlay.classList.toggle("hide")
  navMenu.classList.toggle("hide")
});

featMenu.addEventListener("click", () => {
  featLi.classList.toggle("hide")
});

compMenu.addEventListener("click", () => {
  compLi.classList.toggle("hide")
});