noseX = 0;
noseY = 0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup() {
video = createCapture(VIDEO);
video.size(550, 500);
canvas = createCanvas(550, 550);
canvas.position(560,100);
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}
function modelLoaded() {
    console.log('poseNet is initialised');
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " + noseX + " noseY = " + noseY);
        rightWristX = results[0].pose.rightWrist.x;
        leftWristX = results[0].pose.leftWrist.x;
        difference = floor(leftWristX - rightWristX);
        console.log("rightwristx = " + rightWristX + " leftwristx = " + leftWristX+" difference = "+difference);
        
} else {
console.error("nobody in front of camera");
    }
}
function draw() {
    background('blue');
    fill("pink");
    stroke("black");
    square(noseX, noseY, difference);
    document.getElementById("square_size").innerHTML = "width and height of square is " + difference+"px";
}