
const modeToggle = document.getElementById('mode-toggle');
const body = document.body;
const timeDisplay = document.getElementById('time-display');

function updateTime() {
  const now = new Date();
  const timeString = now.toLocaleTimeString();
  timeDisplay.textContent = timeString;
}

setInterval(updateTime, 1000);
updateTime(); 


const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const savedMode = localStorage.getItem('mode');

if (savedMode === 'dark' || (!savedMode && prefersDark)) {
  enableDarkMode();
}


modeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    enableLightMode();
  } else {
    enableDarkMode();
  }
});

function enableDarkMode() {
  body.classList.remove('light-mode');
  body.classList.add('dark-mode');
  modeToggle.textContent = 'Switch to Light';
  localStorage.setItem('mode', 'dark');
}

function enableLightMode() {
  body.classList.remove('dark-mode');
  body.classList.add('light-mode');
  modeToggle.textContent = 'Switch to Dark';
  localStorage.setItem('mode', 'light');
}