// script.js
let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let running = false;
let laps = [];

function start() {
    if (!running) {
        running = true;
        increment();
    }
}

function pause() {
    running = false;
}

function reset() {
    running = false;
    milliseconds = 0;
    seconds = 0;
    minutes = 0;
    laps = [];
    document.getElementById('laps').innerHTML = '';
    display();
}

function lap() {
    if (running) {
        laps.push(`${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`);
        displayLaps();
    }
}

function display() {
    document.getElementById('display').innerHTML = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
}

function displayLaps() {
    const lapList = laps.map((lap, index) => `<li>Lap ${index + 1}: ${lap}</li>`);
    document.getElementById('laps').innerHTML = lapList.join('');
}

function increment() {
    if (running) {
        milliseconds++;
        if (milliseconds === 100) {
            milliseconds = 0;
            seconds++;
            if (seconds === 60) {
                seconds = 0;
                minutes++;
            }
        }
        display();
        setTimeout(increment, 10);
    }
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}
