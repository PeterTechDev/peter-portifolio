// DARK MODE BUTTON
const toggleSwitch = document.querySelector('#darkmode-btn');
toggleSwitch.addEventListener('change', switchTheme, false);

function switchTheme(e) {
  if (e.target.checked) {
    document.body.classList.add('dark-mode');
    console.log("Dark Mode activated");
  } else {
    document.body.classList.remove('dark-mode');
    console.log("Dark Mode Deactivated");
  }    
}
