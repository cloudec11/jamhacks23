let ts = document.getElementById("t-sec"); //time sec
let tm = document.getElementById("t-min"); //time min
let th = document.getElementById("t-hr"); //time hour
let rs = document.getElementById("reset"); //reset time
let secin = document.getElementById("sec-in"); //seconds input
let minin = document.getElementById("min-in"); //minutes input
let hrin = document.getElementById("hr-in"); //hours input
document.getElementById("stop").addEventListener("click", stopTime); //stop button
document.getElementById("start").addEventListener("click", startTime); //stop button
document.getElementById("reset").addEventListener("click", resetTime); //reset
document.getElementById("sub-time").addEventListener("click", setTime); //setting the time


let curr = [
    ts.innerText,
    tm.innerText,
    th.innerText
];
let original  = [
    parseInt(ts.innerText),
    tm.innerText,
    th.innerText
];
var intervalID;

let started = false;


function stopTime(){
    //stop time
    clearInterval(intervalID);
    started = false;
}

function startTime(){
    //start time
    if(!started){
        
        if(parseInt(ts.innerHTML)>0){

            ts.innerHTML = curr[0]--;
        }

        intervalID = setInterval(function(){
            ts.innerHTML = curr[0]--;
            if(parseInt(ts.innerText)==0){
                //decrement min on next
                tm.innerHTML = curr[1]--;
            }
            if(parseInt(tm.innerText)==0){
                //decrement hr
                th.innerHTML = curr[2]--;
            }
            
        }, 1000);
        started = true;
    }
}

function resetTime(){
    ts.innerHTML = original[0];
    ts.innerHTML = original[1];
    ts.innerHTML = original[2];
    
}

function setTime(){
    ts.innerHTML = secin.value;
    tm.innerHTML = minin.value;
    th.innerHTML = hrin.value;
}