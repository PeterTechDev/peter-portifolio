const scrollToTopButton = document.getElementById('scroll-to-top');

// NEW
// let scrollToTopButton = document.querySelector('#button');

window.addEventListener('scroll', function() {
  if (window.scrollY > 300) {
    scrollToTopButton.classList.add('show');
  } else {
    scrollToTopButton.classList.remove('show');
  }
});

scrollToTopButton.addEventListener('click', scrollToTop)

function scrollToTop() {
  console.log("Scrolling to top");
  window.scrollTo({top: 0, behavior: 'smooth'});
}

console.log("Scroll to top button loaded");