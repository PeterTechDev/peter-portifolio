// HEADER SCROLL
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

console.log("Alo");

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
    'Resolvedor de problemas.',  
  ],
  typeSpeed: 70,
  // Define o tempo de espera entre as palavras
  backDelay: 2000,
  // Define se a lista de palavras será repetida após ser exibida
  loop: true
});

// ATUAL SECTIONS INDICATOR
window.addEventListener('load', function() {
  var headerScroll = document.getElementById('header-scroll');
  headerScroll.classList.remove('small');
});

window.addEventListener('scroll', function() {
  var headerScroll = document.getElementById('header-scroll');
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 1) {
    headerScroll.classList.add('small');
  } else {
    headerScroll.classList.remove('small');
  }
});

window.addEventListener('scroll', function() {
  const sections = document.querySelectorAll('section');
  const nav = document.querySelector('nav');
  const navHeight = nav.offsetHeight;
  const curPos = window.pageYOffset || document.documentElement.scrollTop;

  sections.forEach(function(section) {
    const top = section.offsetTop - navHeight;
    const bottom = top + section.offsetHeight;

    if (curPos >= top && curPos <= bottom) {
      nav.querySelectorAll('a').forEach(function(a) {
        a.classList.remove('active');
      });
      sections.forEach(function(sec) {
        sec.classList.remove('active');
      });

      section.classList.add('active');
      nav.querySelector('a[href="#' + section.getAttribute('id') + '"]').classList.add('active');
    }
  });
});


// SWIPER
const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If you want to enable navigation buttons
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // If you want to enable pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1300: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1600: {
      slidesPerView: 4,
      spaceBetween: 5,
    },
  }
});

// SKILLS READ MORE
document.querySelectorAll('.read-more').forEach(function(button) {
  button.addEventListener('click', function() {
      const description = this.previousElementSibling;
      if (description.classList.contains('hidden')) {
          description.classList.remove('hidden');
          this.textContent = 'Menos';
      } else {
          description.classList.add('hidden');
          this.textContent = 'Mais';
      }
  });
});
