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
