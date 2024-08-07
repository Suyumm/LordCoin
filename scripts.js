// script.js

let clicksLeft = 1000;
let clickCount = 0;
let timerInterval;

function startTimer(duration, display) {
    let timer = duration, hours, minutes, seconds;
    timerInterval = setInterval(function () {
        hours = parseInt(timer / 3600, 10);
        minutes = parseInt((timer % 3600) / 60, 10);
        seconds = parseInt(timer % 60, 10);

        hours = hours < 10 ? "0" + hours : hours;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = hours + ":" + minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(timerInterval);
            document.getElementById('tap-button').disabled = false;
            clicksLeft = 1000;
            document.getElementById('clicks-left').textContent = clicksLeft + " dokunuş kaldı";
            startTimer(duration, display); // Restart the timer
        }
    }, 1000);
}

document.addEventListener("DOMContentLoaded", function() {
    let duration = 24 * 60 * 60; // 24 hours in seconds
    let display = document.querySelector('#timer');
    startTimer(duration, display);

    document.getElementById('tap-button').addEventListener('click', function() {
        if (clicksLeft > 0) {
            clicksLeft--;
            clickCount++;
            document.getElementById('clicks-left').textContent = clicksLeft + " dokunuş kaldı";
        }
    });
});
