var status_a = "";
var objects = [];
var pictures = ["natural-wildlife-in-Thailand.jpeg","test-elephants-image.jpeg","dog_cat.jpg"];
var numbe = 0;
function setup(){
canvas = createCanvas(600,365);
canvas.position(315,220);

video = createCapture(VIDEO);
video.hide();

//intailizing model



}

function modelLoaded(){
    console.log('model loaded');
    document.getElementById("status").innerHTML = "Detecting object";
    status_a = true;

}

function gotResult(error,result){

      if(error){
          console.log(error);
      }

      else{

        console.log(result);
        objects = result;


      }
}


function preload(){
    
}

function Start(){
    object_detector = ml5.objectDetector("cocossd",modelLoaded);
}



function draw(){
    image(video,0,0,600,365);
    
    if(status_a != ""){


     object_detector.detect(video,gotResult);
    document.getElementById("status").innerHTML = "Objects Detected";
    number = objects.length;
    document.getElementById("numberOfObjects").innerHTML = number;
    
    for(i=0; i<objects.length; i++){

        fill("#c77408");
        textSize(30);
        text(objects[i].label,objects[i].x,objects[i].y);

        noFill();
        stroke("red");
        rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);

        
        
       

    }
   
    


      
    
    
    }
}