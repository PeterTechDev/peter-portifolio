function blurInput(input) {
  const idLabel = "label-" + input.name;
  const isValue = input.value !== "" ;

  const label = document.getElementById(idLabel);
  label.classList.toggle("active", isValue);
}

console.log("contact.js is loaded");

export { blurInput };

document.querySelector('form[name="contact"]').addEventListener('submit', function (event) {
  event.preventDefault(); // Impede o envio padrão do formulário

  // Exibe a modal
  document.getElementById('modal').style.display = 'block';
});

document.getElementById('modal').addEventListener('click', closeModal);

function closeModal(event) {
    if (event.target === this) {
      // Oculta a modal
      this.style.display = 'none';
    }
}

