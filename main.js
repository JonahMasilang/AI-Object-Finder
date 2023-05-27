status = "";
value = "";
objects = [];

function preload() {

}

function setup() {
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.size(480, 380);
    video.hide();
}
 
function draw() {
    image(video, 0, 0, 480, 380);

    if(status != "") { 
        objectDetector.detect(video, gotResult); 
        for (i = 0; i < objects.length; i++) { 
            document.getElementById("status").innerHTML = "Status : Object Detected";
        }
    }
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting objects.";

    value = document.getElementById("input").value;
}

function modelLoaded() {
    console.log("Model loaded.");
    status = "true";
}

function gotResult(error, results) {
    if (error) {
        console.error(error);
    }
    
    else {
        console.log(results);
    }
}