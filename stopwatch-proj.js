var startTime;
var interval;
var elapsedTime = 0;

document.querySelector('js-alternate-button').addEventListener('click', function() {
    this.classList.toggle('changed');
});

function startWatch() {
    document.querySelector('.js-alternate-button').innerHTML = "Stop"
    if (!interval) {
        startTime = Date.now() - elapsedTime;
        interval = setInterval(updateStopwatch, 1000);
    } else {
        stopWatch();
    }
} // starts timer after user presses start button

function stopWatch() {
    document.querySelector('.js-alternate-button').innerHTML = "Start"
    clearInterval(interval);
    elapsedTime = Date.now() - startTime;
    interval = null;
} // pauses the time when user presses stop

function resetWatch() {
    stopWatch();
    elapsedTime = 0;
    document.querySelector('.js-time').innerHTML = "00:00:00";
} // function resets the stopwatch to 0 after user presses the reset button

function updateStopwatch() {
    var currentTime = Date.now();
    var pausedTime = currentTime - startTime; // time in milliseconds
    var secs = Math.floor(pausedTime / 1000) % 60; //conversion to secs
    var mins = Math.floor(pausedTime/ 1000 / 60) % 60; // conversions to mins
    var hrs = Math.floor(pausedTime/1000 / 3600); // conversion to hrs
    var displayClock = Display(hrs) + ":" + Display(mins) + ":" + Display(secs);
    document.querySelector('.js-time').innerHTML = displayClock;

}

function Display(Num) {
    return (Num < 10 ? "0" : "") + Num;
}
 // function makes sure that there is a 0 before numbers under 10
