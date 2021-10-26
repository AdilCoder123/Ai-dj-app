function setup()
{
    canvas=createCanvas(500,500);
    canvas.center();

    video=createCapture(VIDEO);
   video.hide()
    poseNet=ml5.poseNet(video,modelloded);
    poseNet.on('pose',gotPoses);
}
function draw()
{
    image(video,0,0,500,500);

  
    fill("#cc3300");
    stroke("#000000");

    if(scoreRIghtWrist>0.2)
    {

  
    circle(RightWristx,RightWristy,20);

    
    if(RightWristx >0  && RightWristy <=100)
    {
document.getElementById("speeed").innerHTML="Speed=0.5x";
song.rate(0.5);
    }

    else if(RightWristx >100  && RightWristy <=200)
    {
document.getElementById("speeed").innerHTML="Speed=1x";
song.rate(1);
    }
else if(RightWristx >200  && RightWristy <=300)
{
document.getElementById("speeed").innerHTML="Speed=1.5x";
song.rate(1.5);
}
else if(RightWristx >300  && RightWristy <=400)
{
document.getElementById("speeed").innerHTML="Speed=2x";
song.rate(2);
}
else if(RightWristx >400  && RightWristy <=500)
{
document.getElementById("speeed").innerHTML="Speed=2.5x";
song.rate(2.5);

    
}

}
if (scoreLeftWrist>0.2)
{


circle(leftWristx,leftWristy,20);
InNumberrleftWristY=Number(leftWristy);
remove_decimals=floor(InNumberrleftWristY);
volume=remove_decimals/500;
document.getElementById("volume").innerHTML="volume = "+volume;
song.setVolume(volume);
}    
}
song="";
leftWristx=0;
leftWristy=0;
RightWristx=0;
RightWristy=0;
scoreLeftWrist=0;
scoreRightWrist=0;

function preload()
{
    song=loadSound("music.mp3");
}

function play()
{
    song.play();
    song.setVolume(0.5);
    song.rate(1);
}
function modelloded()
{
    console.log("can you hear some nice music?");
}
function gotPoses(results)
{
if(results.length > 0)
{
    scoreLeftWrist=results[0].pose.keypoints[9].score;
    console.log(results);
    lesftWristy=results[0].pose.leftWrist.y;
    lesftWristx=results[0].pose.leftWrist.x;
 RightWristy=results[0].pose.rightWrist.y;
 RightWristx=results[0].pose.rightWrist.x;


 scoreRightWrist=results[0].pose.keypoints[10].score;
 
console.log("leftwrisy:"+leftWristy+" leftwristx:"+leftWristx)
console.log("rightwrisy:"+RightWristy+" rightwristx:"+RightWristx)

console.log("Score right wrist ="+scoreRightWrist+"score left wrist"+scoreLeftWrist);

}
}
