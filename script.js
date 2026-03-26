const startButton = document.getElementById("start");
const timerLogic = document.getElementById("timer-section");
const timer = document.getElementById("timer");
const pauseButton = document.getElementById("pause-button");
const resumeButton = document.getElementById("resume-button");
const resetButton = document.getElementById("reset-button");
const listTasks = document.querySelector('ul')
const tasks = document.querySelector('#main-tasks')

let prevDiff = 0
let timely = 0
startButton.addEventListener("click", function(){
    startButton.setAttribute('style', 'display: none');
    timerLogic.classList.remove('main-timer')
    tasks.classList.remove('tasks')
    timerFunc()
});

function addTodo(){
    const li = document.createElement('li')
    const input = document.createElement('input')
    input.placeholder = "Enter a task..."
    input.id = "task-input"
    li.appendChild(input)
    listTasks.appendChild(li)
}

function timerFunc(){
    let startTime = Date.now() - prevDiff
    timely = setInterval(calcTime, 1000)
    function calcTime(){
        let endTime = Date.now()
        let timeDiff = (endTime - startTime)
        prevDiff = timeDiff
        console.log(prevDiff);
        
        let totalSec = Math.floor(timeDiff/1000)
        let tsec = totalSec % 60
        let tmin = Math.floor(totalSec / 60) % 60
        let thour = Math.floor(totalSec/3600)
        timeSet(tsec, tmin, thour)
    }
}

function timeSet(tsec, tmin, thour){
    tsec = tsec.toString().padStart(2, '0');
    tmin = tmin.toString().padStart(2, '0');
    thour = thour.toString().padStart(2, '0');
    timer.innerHTML = `${thour}:${tmin}:${tsec}`
}

function pauseTimer(){
    clearInterval(timely)
    pauseButton.classList.add('main-timer')
    resumeButton.classList.remove('main-timer')
}

function resumeTimer(){
    timerFunc()
    pauseButton.classList.remove('main-timer')
    resumeButton.classList.add('main-timer')
}

function resetTimer(){
    clearInterval(timely)
    prevDiff = 0
    timer.innerHTML = "00:00:00"
    try{
    pauseButton.classList.remove('main-timer')
    resumeButton.classList.add('main-timer')
    }
    finally{
       timerFunc() 
    }
}












