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
showNow();
setInterval(showNow, 1000);