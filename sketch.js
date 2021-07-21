const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
var bg
var maxsnow=500
var snow=[]


function preload(){
   bg=loadImage("snow3.jpg")
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  if(frameCount%100===0){
    for(var i=0;i < maxsnow; i++)
    snow.push(new Snow(random(0,800),random(0,400),10));
    snow.velocityY=0.2
  }
  
}

function draw() {
  background(bg);  
  Engine.update(engine)
  
  

 //display the snow
  for (var k = 0; k < maxsnow; k++) {
   snow[k].display();
   
  
    }
  drawSprites();
}