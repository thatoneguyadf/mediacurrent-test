const light = document.getElementById('light');
const dark = document.getElementById('dark');

function switchMode(newMode) {
  light.disabled = newMode === 'dark';
  dark.disabled = newMode === 'light';
  localStorage.setItem('mode', newMode);
}

function setInitialMode() {
  const getMode = localStorage.getItem('mode');
  if (typeof getMode === "string") {
    return switchMode(getMode);
  }

  switchMode('dark');
}

setInitialMode();
