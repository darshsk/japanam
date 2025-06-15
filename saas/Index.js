let count = 0;
let totalCount = 0;
let malacount = 0;
const button = document.getElementById('clickButton');
const counterDisplay = document.getElementById('counter');
const tc = document.getElementById('totalCounter');
const mala = document.getElementById('malas');


// mala timer -- START --

let timer;
let elapsedTime = 0;
let isRunning = false;

function formatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function start() {
  if (!isRunning) {
    isRunning = true;
    const startTime = Date.now() - elapsedTime;
    timer = setInterval(() => {
      elapsedTime = Date.now() - startTime;
      document.getElementById('display').textContent = formatTime(elapsedTime);
    }, 1000);
  }
}

function stop() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function reset() {
  stop();
  elapsedTime = 0;
  document.getElementById('display').textContent = "00:00:00";
}

// mala timer -- END --

// Total Timer -- START -- 

let totalTimer;
let totalElapsedTime = 0;
let totalIsRunning = false;

function totalFormatTime(ms) {
  const totalSeconds = Math.floor(ms / 1000);
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, '0');
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${hours}:${minutes}:${seconds}`;
}

function totalStart() {
  if (!totalIsRunning) {
    totalIsRunning = true;
    const startTime = Date.now() - totalElapsedTime;
    totalTimer = setInterval(() => {
      totalElapsedTime = Date.now() - startTime;
      document.getElementById('totalDisplay').textContent = formatTime(totalElapsedTime);
    }, 1000);
  }
}

function totalStop() {
  if (totalIsRunning) {
    totalIsRunning = false;
    clearInterval(totalTimer);
  }
}

function totalReset() {
  totalStop();
  totalElapsedTime = 0;
  document.getElementById('totalDisplay').textContent = "00:00:00";
}

// total timer -- END --

function startimecounter()
{
    start();
    totalStart();
    document.getElementById("playtimer").style.display = "none";
    document.getElementById("pausetimer").style.display = "inline-block";
}

function stoptimercounter()
{
    stop();
    totalStop();
    document.getElementById("pausetimer").style.display = "none";
    document.getElementById("playtimer").style.display = "inline-block";
}

function wipeData()
{
    reset();
    totalReset();
    count = 0;
    malacount = 0;
    totalCount = 0;
    counterDisplay.textContent = 0;
    tc.textContent = 0;
    mala.textContent = 0;
    document.getElementById("pausetimer").style.display = "none";
    document.getElementById("playtimer").style.display = "inline-block";
}

button.addEventListener('click', () => {
    count++;
    totalCount++;
    counterDisplay.textContent = count;
    tc.textContent = totalCount;
  
    if(count == 108)
    {
      count = 0;
      malacount++;
      mala.textContent = malacount;
      navigator.vibrate(20);
      reset();
    }
  
  });

  