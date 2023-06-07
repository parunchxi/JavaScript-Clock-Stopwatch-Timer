// Clock
function showNow() {
    const nowTime = new Date();
    const showNowDate = document.getElementById('now_date');
    const showNowTime = document.getElementById('now_time');
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let seconds;
    if (nowTime.getSeconds() < 10) {
        seconds = '0' + nowTime.getSeconds().toString();
    } else {
        seconds = nowTime.getSeconds();
    }
    showNowDate.innerHTML = `${nowTime.getDate()} ${monthNames[nowTime.getMonth()]} ${nowTime.getFullYear()}`;
    showNowTime.innerHTML = `${nowTime.getHours()}:${nowTime.getMinutes()}:${seconds}`;
}
setInterval(showNow, 1000);


// Change Theme
const changeTheme = document.getElementById('change_theme');

changeTheme.addEventListener('click', () => {
    if (document.body.className === 'dark-mode') {
        setLightMode();
    } else {
        setDarkMode();
    }
})

function setDarkMode() {
    document.body.classList.add('dark-mode');
    changeTheme.innerHTML = '<i class="ri-moon-fill"></i>';
    saveTeme('darkMode');
}

function setLightMode() {
    document.body.classList.remove('dark-mode');
    changeTheme.innerHTML = '<i class="ri-sun-fill"></i>';
    saveTeme('lightMode');
}

// Get Theme
const theme = localStorage.getItem('theme');

if (theme === 'darkMode') {
    setDarkMode();
} else if (theme === 'lightMode') {
    setLightMode();
}

// Save Theme
function saveTeme(theme) {
    localStorage.setItem('theme', theme);
}