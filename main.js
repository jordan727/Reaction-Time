// 5 round reaction test
// average out scores after 5 rounds
// give appropriate response to users average

// Initialize canvas and graphics context
let cnv = document.getElementById("reactionCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 1000;
cnv.height = 500;

// Global variables
var identifier = 0;
var randomTimer;
var stopTime = true;
var stopwatchInterval;
var begin;
var end;
var elapsed;
let savedScores = []; // only allow 5 scores (average scores in a function), save average to account data

background("rgb(38, 176, 255)");

// Event Listener
cnv.addEventListener('mousedown', mouseClickHandler);
font("50px Arial")

// Give a proper response to mouse click
function mouseClickHandler() {
    if (identifier === 0) {
        changeColor("red", "Wait for green...", 380, 250, 1)
        randomTime();
    }   else if (identifier === 1) {
            changeColor("rgb(38, 176, 255)", "Click to start", 380, 250, 0)
    }   else if (identifier === 2) {
            changeColor("purple", elapsed + "ms", 420, 250, 0);
            savedScores.push(elapsed);
            stopStopwatch();
    }   else {
            background("rgb(38, 176, 255)");
            identifier = 0;
            stopStopwatch();
    }
}

// Change background color and text
function changeColor(bgColor, message, x, y, colorId) {
    background(bgColor);
    fill("white");
    text(message, x, y, "fill");
    identifier = colorId;
    if (bgColor !== "red") {
        clearTimeout(randomTimer);
    }
}

// Set timeout to random value
function randomTime() {
    randomTimer = setTimeout(react, randomDec(1000, 10000));
}

// Change color of canvas and start stopwatch
function react() {
    changeColor("rgb(102, 255, 102)", null, null, null, 2);
    stopTime = false;
    startStopwatch()
}

// Update Stopwatch Time
function updateStopwatch() {
    // get date in milliseconds when stopwatch stops
    end = new Date();
    // subtract ending and beginning dates to get elapsed date
    elapsed = end - begin;
}

function startStopwatch() {
    if (stopTime === false) {
        // Get date in milliseconds when stopwatch starts
        begin = new Date();
        stopwatchInterval = setInterval(updateStopwatch, 1);
    }
}

function stopStopwatch() {
    stopTime = true;
    clearTimeout(stopwatchInterval);
}