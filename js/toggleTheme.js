let darkMode = localStorage.getItem('darkMode') === 'true';
const buttonToggleTheme = document.querySelector('#icons button');
const messageToggleTheme = document.querySelector('#icons span');
loadTheme();

function loadTheme() {
    if (darkMode) {
        document.documentElement.classList.remove('light');
    } else {
        document.documentElement.classList.add('light');
    }
}

function saveTheme() {
    localStorage.setItem('darkMode', darkMode);
}

buttonToggleTheme.addEventListener('click', () => {
    darkMode = !darkMode;
    document.documentElement.classList.toggle('light');

    if (darkMode) {
        messageToggleTheme.innerHTML = 'DarkMode Ativado!';
    } else {
        messageToggleTheme.innerHTML = 'LightMode Ativado!';
    }

    saveTheme();
});

