// HEADER 
document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('scroll', function() {
    var winTop = window.pageYOffset;
    var body = document.querySelector('body');
    if (winTop >= 30) {
      body.classList.add('sticky-header');
      
    } else {
      body.classList.remove('sticky-header');
    }
  });
});

// back to top button
const scrollToTopButton = document.getElementById('backToTopBtn');

// make button visible when scrolling
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 0) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});

// scroll to top animation
function scrollToTop(duration) {
  var start = window.pageYOffset || document.documentElement.scrollTop;
  var startTime = null;

  function animateScroll(timestamp) {
    if (!startTime) startTime = timestamp;
    var progress = timestamp - startTime;
    var scrollStep = Math.max(start - (progress / duration) * start, 0);

    window.scrollTo(0, scrollStep);

    if (progress < duration) {
      window.requestAnimationFrame(animateScroll);
    }
  }

  window.requestAnimationFrame(animateScroll);
}
scrollToTopButton.addEventListener('click', function(){
  scrollToTop(500);
  console.log("Scrolling to top", window.pageYOffset);
});

// DARK MODE BUTTON
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
