const scrollToTopButton = document.getElementById('scroll-to-top');

// Make the button appear when the user scrolls down 100
window.addEventListener('scroll', function() {
  if (window.pageYOffset > 100) {
    scrollToTopButton.classList.add('visible');
  } else {
    scrollToTopButton.classList.remove('visible');
  }
});
function blurInput(input) {
  console.log(input);
}

// SCROLL TO TOP FUNCTION AND ANIMATION
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
  console.log("Scrolling to top");
});