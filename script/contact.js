function blurInput(input) {
  const idLabel = "label-" + input.name;
  const isValue = input.value !== "" ;

  const label = document.getElementById(idLabel);
  label.classList.toggle("active", isValue);
}

console.log("contact.js is loaded");

export { blurInput };

// document.querySelector('form[name="contact-netlify"]').addEventListener('submit', function (event) {
//   event.preventDefault(); // Impede o envio padrão do formulário

//   // Exibe a modal
//   document.getElementById('modal').style.display = 'block';
// });

document.getElementById('modal').addEventListener('click', closeModal);

function closeModal(event) {
    if (event.target === this) {
      // Oculta a modal
      this.style.display = 'none';
    }
}

function submitForm(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  console.log("submitForm");

  // Envio do formulário para o Netlify
  var form = event.target;
  var formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
  })
    .then(function(response) {
      // Exibe a modal após o envio bem-sucedido do formulário
      document.getElementById('modal').style.display = 'block';

      // Aqui você pode adicionar qualquer lógica adicional que deseja realizar após o envio do formulário
      document.getElementById('modal').style.display = 'block';

      // Por exemplo, você pode limpar os campos do formulário
      form.reset();
      console.log("submitForm");

    })
    .catch(function(error) {
      console.error('Erro ao enviar o formulário:', error);
    });
}

