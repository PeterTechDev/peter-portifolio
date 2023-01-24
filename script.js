
const header = document.querySelector("header");


function sitckyHeader() { 
  let navOffset = header.offsetTop + 10;

  window.addEventListener("scroll", () => {
    (window.scrollY >= navOffset) ? header.classList.add("sticky") : header.classList.remove("sticky")
  });
}


$('.menu').click (function(){
  $(this).toggleClass('open');
});



sitckyHeader();
