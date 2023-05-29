document.querySelectorAll('.read-more').forEach(function(button) {
  button.addEventListener('click', function() {
      const description = this.previousElementSibling;
      if (description.classList.contains('hidden')) {
          description.classList.remove('hidden');
          this.textContent = 'Menos';
      } else {
          description.classList.add('hidden');
          this.textContent = 'Mais';
      }
  });
});
