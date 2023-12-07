let screen = document.querySelector('.screen');
// targeting required html elements likle buttons and screen div
let start = document.querySelector('#Start');
let Stop = document.querySelector('#Stop');
let Reset = document.querySelector('#Reset');

// creating 4 variables gor hours,minutes,seconds and  milli seconds
let msec = 0;
let secs = 0;
let mins = 0;
let hrs = 0;

// creating a timer element on which all logic will work
let timer = null;

// creating a function which start the timer
function StartCount(){
    // increamenting the values of variables and checking their values to increament other variables
    msec++;
    if(msec == 100){
        secs++
        msec = 0
        if(secs == 60){
            mins++;
            secs = 0;
            if(mins == 60){
                hrs++;
                mins = 0;
            }
        }
    }
// creating other 4 variables just to store the previouse variables value based on conditions
// using ternary operator checking the values are less than 10 or not
    let msecStr = msec < 10 ? `0${msec}` : `${msec}`;
    let secStr = secs < 10 ? `0${secs}` : `${secs}`;
    let minStr = mins < 10 ? `0${mins}` : `${mins}`;
    let hrsStr = hrs < 10 ? `0${hrs}` : `${hrs}`;
// dynamically updating the screen value using innerHTML
    screen.innerHTML = `${hrsStr} : ${minStr} : ${secStr} : ${msecStr}`;
}

// adding eventlisteners to each button

// starting the screen when start button is clicked
start.addEventListener('click',()=>{
    timer = setInterval(StartCount,10);
})

// stoping the screen when stop button is clicked

Stop.addEventListener('click',()=>{
    // clearing the setInterval method
    clearInterval(timer)
    
})

// reseting the screen when reset button is clicked

Reset.addEventListener('click',()=>{
    // clearing the setInterval method
    clearInterval(timer);

    // making all variables value to 0 after reset
    msec = 0;
    secs = 0;
    mins = 0;
    hrs = 0;

    // dynamically reseting the screen value

    screen.innerHTML = `00 : 00 : 00 : 00`
})