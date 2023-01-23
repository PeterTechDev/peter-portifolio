console.log("hello world!");

let navbar = document.querySelector("header");
console.log(navbar);
let navOffset = navbar.offsetTop + 10;

window.addEventListener("scroll", () => {
  (window.scrollY >= navOffset) ? navbar.classList.add("sticky") : navbar.classList.remove("sticky")
});