//LIB TYPED.JS TO CREATE A TYPING EFFECT
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
  backDelay: 2000,
  loop: true
});