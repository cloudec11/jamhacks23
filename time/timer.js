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
let totalSeconds = 0;

//Convert to total seconds

let original = ["w", "r", "s"];

var intervalID;
original[0] = ts.innerHTML;
original[1] = tm.innerHTML;
original[2] = th.innerHTML;
function stopTime(){
    //stop time
    clearInterval(intervalID);
}

function startTime(){
    //start time

    intervalID = setInterval(function(){
        totalSeconds = parseInt(ts.innerText) + (parseInt(tm.innerText) * 60) + (parseInt(th.innerText) * 3600);
        updateTime();
    }, 1000);

        
    
}

function resetTime(){
    ts.innerHTML = original[0];
    tm.innerHTML = original[1];
    th.innerHTML = original[2];

    
}

function setTime(){
    ts.innerHTML = secin.value;
    tm.innerHTML = minin.value;
    th.innerHTML = hrin.value;
    totalSeconds = parseInt(ts.innerText) + (parseInt(tm.innerText) * 60) + (parseInt(th.innerText) * 3600);
    original[0] = ts.innerHTML;
    original[1] = tm.innerHTML;
    original[2] = th.innerHTML;


}

function updateTime(){
    console.log(totalSeconds+"nig");
    th.innerHTML = (totalSeconds - (totalSeconds % 3600)) / 3600
    console.log(th.innerHTML);
    totalSeconds-=parseInt(th.innerHTML)*3600;
    console.log(tm.innerHTML);
    tm.innerHTML = (totalSeconds - (totalSeconds % 60)) / 60
    totalSeconds-=parseInt(tm.innerHTML)*60
    console.log(ts.innerHTML);
    ts.innerHTML = totalSeconds - (parseInt(tm.innerHTML * 60))
}
