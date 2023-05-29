
// HEADER STICKY ON SCROLL
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