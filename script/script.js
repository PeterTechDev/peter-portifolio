
const header = document.querySelector("header");


function sitckyHeader() { 
  let navOffset = header.offsetTop + 10;

  window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? header.classList.add("sticky") : header.classList.remove("sticky")
  });
}

function activeHamburger() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.header-links');
  const navLinks = document.querySelectorAll('.header-links li');

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("hamburger-active");

    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
      }
    });
    //Burger animation
    hamburger.classList.toggle("toggle");


  });


}


const app = ()=> {
  activeHamburger();
  sitckyHeader();
}

app();
