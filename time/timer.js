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
let originalSecs = 0;
//Convert to total seconds

let original = [
    parseInt(secin.value),
    parseInt(minin.value),
    parseInt(hrin.value)
];



var intervalID;

function stopTime(){
    //stop time
    clearInterval(intervalID);
}

function startTime(){
    //start time

    totalSeconds=originalSecs;

    intervalID = setInterval(function(){
        totalSeconds--;
        console.log(originalSecs);
        updateTime();
        if(totalSeconds == -1){
            alert("Break time!")
            totalSeconds = 600
        }
    }, 1000);
}

function resetTime(){
    totalSeconds = originalSecs;
    stopTime();
    updateTime();
}

function setTime(){
    ts.innerHTML = secin.value;
    tm.innerHTML = minin.value;
    th.innerHTML = hrin.value;
    
    original[0] = secin.value;
    original[1] = minin.value;
    original[2] = hrin.value;

    totalSeconds = parseInt(original[0]) + parseInt(original[1]*60) + parseInt(original[2]*3600);
    originalSecs = totalSeconds;
    console.log(totalSeconds+" updated new total ");


}

function updateTime(){
    
    let totalSecondsTMP = totalSeconds

    th.innerHTML = (totalSecondsTMP - (totalSecondsTMP % 3600)) / 3600;
    console.log(th.innerText + " hours");
    totalSecondsTMP-=parseInt(th.innerText)*3600;
    tm.innerHTML = (totalSecondsTMP - (totalSecondsTMP % 60)) / 60;
    console.log(tm.innerHTML + " mins");
    totalSecondsTMP-=(parseInt(tm.innerHTML)*60);
    ts.innerHTML = totalSecondsTMP;
    console.log(ts.innerHTML + " secs");
}
