function toggleMode() {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleMode);
  }

  if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
});
