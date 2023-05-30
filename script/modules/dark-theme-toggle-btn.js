const body = document.body;
const toggleSwitch = document.querySelector('#darkmode-btn');

toggleSwitch.addEventListener('click', function() {
  if (body.classList.contains('light-theme')) {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
    console.log('Dark theme activated');
  } else {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
    console.log('Light theme activated');
  }
});
