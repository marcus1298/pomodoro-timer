let startBtn = document.getElementById('startBtn');
let timerDisplay = document.getElementById('timer');
let interval;
let isRunning = false;

startBtn.addEventListener('click', function() {
    if (isRunning) {
        clearInterval(interval);
        startBtn.textContent = 'START';
    } else {
        let time = 25 * 60;
        interval = setInterval(function() {
            let minutes = Math.floor(time / 60);
            let seconds = time % 60;
            timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
            if (time <= 0) {
                clearInterval(interval);
                startBtn.textContent = 'START';
                isRunning = false;
            }
            time--;
        }, 1000);
        startBtn.textContent = 'STOP';
    }
    isRunning = !isRunning;
});
