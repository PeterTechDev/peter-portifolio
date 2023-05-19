
// const header = document.querySelector("header");


// function sitckyHeader() { 
//   let navOffset = header.offsetTop + 10;

//   window.addEventListener("scroll", () => {
//     (window.scrollY >= navOffset) ? header.classList.add("sticky") : header.classList.remove("sticky")
//   });
// }

// function activeHamburger() {
//   const hamburger = document.querySelector('.hamburger');
//   const nav = document.querySelector('.header-links');
//   const navLinks = document.querySelectorAll('.header-links li');

//   hamburger.addEventListener("click", () => {
//     nav.classList.toggle("hamburger-active");

//     navLinks.forEach((link, index) => {
//       if(link.style.animation) {
//         link.style.animation = "";
//       } else {
//         link.style.animation = `linksFade 0.5s ease forwards ${index / 7 + 0.5}s`;
//       }
//     });
//     //Burger animation
//     hamburger.classList.toggle("toggle");


//   });
// }


// const app = ()=> {
//   activeHamburger();
//   sitckyHeader();
// }

// app();

window.addEventListener('scroll', function() {
  var header = document.getElementById('header');
  var headerHeight = header.offsetHeight;
  var scrollPosition = window.pageYOffset;

  if (scrollPosition > headerHeight) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
});

const scrollToTopButton = document.getElementById('backToTopBtn');

window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

scrollToTopButton.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});



// DARK MODE BUTTOn

const toggleSwitch = document.querySelector('#darkmode-btn');

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    console.log("Dark Mode activated");
  } else {
    document.body.classList.remove('dark-mode');
    console.log("Dark Mode Deactivated");
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);


//typed

// Seleciona o elemento que contém o texto
const typedElement = document.getElementById('typed');

// Inicializa a biblioteca Typed.js
const typed = new Typed(typedElement, {
  // Define as palavras que serão exibidas
  strings: [
    'Programador.',
    'Desenvolvedor Web.',
    'Apaixonado por tecnologia.',
    'Paladino level 2.',
    'Basqueteiro.',
    'Trilheiro.',  
  ],
  // Define o tempo de digitação de cada palavra
  typeSpeed: 70,
  // Define o tempo de espera entre as palavras
  backDelay: 2000,
  // Define se a lista de palavras será repetida após ser exibida
  loop: true
});
