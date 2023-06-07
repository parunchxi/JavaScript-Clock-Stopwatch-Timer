// Swith App
const displayApp = document.querySelectorAll('section');
function showApp(app) {
    displayApp.forEach(item => {
        if (item.id === app) {
            item.classList.remove('invsible');
        } else {
            item.classList.add('invsible');
        }
    })
}

function setButton(event) {
    if (event.target.tagName === 'I' || event.target.tagName === 'P') {
        return event.target.parentElement;
    } else if (event.target.tagName === 'LI') {
        return event.target;
    }
}

const switchButton = document.querySelectorAll('li.app-show');
var button;
switchButton.forEach(item => {
    item.addEventListener('click', event => {
        button = setButton(event);
        if (button.classList[0] === 'clock-show') {
            showApp('clock');
        } else if (button.classList[0] === 'stopwatch-show') {
            showApp('stopwatch');
        } else if (button.classList[0] === 'timer-show') {
            showApp('timer');
        }
        toggleButton(button);
    })
})

function toggleButton(button) {
    switchButton.forEach(item => {
        if (item === button) {
            item.classList.add('toggle');
        } else {
            item.classList.remove('toggle');
        }
    })
}