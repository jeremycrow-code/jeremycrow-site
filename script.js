function applyTheme(theme) {
  const isLight = theme === 'light';
  document.body.classList.toggle('light-mode', isLight);
  document.body.classList.toggle('dark-mode', !isLight);

  const toggleBtn = document.getElementById('modeToggle');
  if (toggleBtn) {
    toggleBtn.setAttribute('aria-pressed', String(isLight));
  }
}

function getSavedTheme() {
  try {
    return localStorage.getItem('theme') === 'light' ? 'light' : 'dark';
  } catch (e) {
    return 'dark';
  }
}

function toggleMode() {
  const nextTheme = document.body.classList.contains('light-mode') ? 'dark' : 'light';
  applyTheme(nextTheme);
  try {
    localStorage.setItem('theme', nextTheme);
  } catch (e) {
    // Ignore storage errors in restricted browsing contexts
  }
}

// Apply saved theme immediately on script execution
applyTheme(getSavedTheme());

document.addEventListener('DOMContentLoaded', () => {
  const toggleBtn = document.getElementById('modeToggle');
  if (toggleBtn && !toggleBtn.hasAttribute('onclick')) {
    toggleBtn.addEventListener('click', toggleMode);
  }
});
