function blurInput(input) {
  const idLabel = "label-" + input.name;
  const isValue = input.value !== "" ;

  const label = document.getElementById(idLabel);
  label.classList.toggle("active", isValue);
}

console.log("contact.js is loaded");

export { blurInput };