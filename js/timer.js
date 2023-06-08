// Timer
const timerStart = document.getElementById('timer_start');
const timerStop = document.getElementById('timer_stop');
const timerReset = document.getElementById('timer_reset');
const timerHours = document.getElementById('timer_hour');
const timerMinutes = document.getElementById('timer_minute');
const timerSeconds = document.getElementById('timer_second');
var timer;

let defaultHours = timerHours.value;
let defaultMinutes = timerMinutes.value;
let defaultSeconds = timerSeconds.value;

let totalSeconds = parseInt(timerHours.value) * 3600 + parseInt(timerMinutes.value) * 60 + parseInt(timerSeconds.value);
function countdown() {
    let hoursRemaining = Math.floor(totalSeconds / 3600);
    let minutesRemaining = Math.floor((totalSeconds % 3600) / 60);
    let secondsRemaining = totalSeconds % 60;

    if (hoursRemaining < 10) {
        hoursRemaining = '0' + hoursRemaining.toString();
    }
    if (minutesRemaining < 10) {
        minutesRemaining = '0' + minutesRemaining.toString();
    }
    if (secondsRemaining < 10) {
        secondsRemaining = '0' + secondsRemaining.toString();
    }

    timerHours.value = `${hoursRemaining}`;
    timerMinutes.value = `${minutesRemaining}`;
    timerSeconds.value = `${secondsRemaining}`;

    if (totalSeconds === 0) {
        console.log('Countdown finished!');
        setDefault();
    }
    totalSeconds--;
}

timerStart.addEventListener('click', () => {
    timerStart.disabled = true;
    timer = setInterval(countdown, 1000);
    countdown();
});

timerStop.addEventListener('click', () => {
    clearInterval(timer);
    timerStart.disabled = false;
});

timerReset.addEventListener('click', () => {
    setDefault();
});

function setDefault() {
    clearInterval(timer);
    timerStart.disabled = false;
    timerHours.value = defaultHours;
    timerMinutes.value = defaultMinutes;
    timerSeconds.value = defaultSeconds;
}