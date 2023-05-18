// Timer variables
let minutes = 0;
let seconds = 0;
let deciseconds = 0;
let timerInterval;
let isTimerRunning = false;

// Timer display elements
const minutesDisplay = document.getElementById('minutes');
const secondsDisplay = document.getElementById('seconds');
const decisecondsDisplay = document.getElementById('deciseconds');

// Start button
const startButton = document.getElementById('startButton');
startButton.addEventListener('click', startTimer);

// Resume button
const resumeButton = document.getElementById('resumeButton');
resumeButton.addEventListener('click', startTimer);

// Pause button
const pauseButton = document.getElementById('pauseButton');
pauseButton.addEventListener('click', pauseTimer);

// Reset button
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', resetTimer);

function startTimer() {
  if (!isTimerRunning) {
    timerInterval = setInterval(updateTimer, 100);
    isTimerRunning = true;
    startButton.disabled = true;
    resumeButton.disabled = true;
    pauseButton.disabled = false;
  }
}

function updateTimer() {
  deciseconds++;
  if (deciseconds > 9) {
    deciseconds = 0;
    seconds++;
    if (seconds > 59) {
      seconds = 0;
      minutes++;
    }
  }

  // Update the timer display
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  decisecondsDisplay.textContent = formatTime(deciseconds);
}

function pauseTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  startButton.disabled = true;
  resumeButton.disabled = false;
  pauseButton.disabled = true;
}

function resetTimer() {
  clearInterval(timerInterval);
  isTimerRunning = false;
  minutes = 0;
  seconds = 0;
  deciseconds = 0;
  minutesDisplay.textContent = formatTime(minutes);
  secondsDisplay.textContent = formatTime(seconds);
  decisecondsDisplay.textContent = formatTime(deciseconds);
  startButton.disabled = false;
  resumeButton.disabled = true;
  pauseButton.disabled = true;
}

function formatTime(time) {
  return time.toString().padStart(2, '0');
}
