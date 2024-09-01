let timer;
let isRunning = false;
let minutes = 25;
let seconds = 0;

function updateTimerDisplay() {
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

function startStopTimer() {
    if (isRunning) {
        clearInterval(timer);
        document.getElementById('startStop').textContent = 'Iniciar';
    } else {
        timer = setInterval(() => {
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(timer);
                    document.getElementById('startStop').textContent = 'Iniciar';
                    alert('Pomodoro terminado!');
                } else {
                    minutes--;
                    seconds = 59;
                }
            } else {
                seconds--;
            }
            updateTimerDisplay();
        }, 1000);
        document.getElementById('startStop').textContent = 'Pausar';
    }
    isRunning = !isRunning;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
    document.getElementById('startStop').textContent = 'Iniciar';
}

document.getElementById('startStop').addEventListener('click', startStopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
