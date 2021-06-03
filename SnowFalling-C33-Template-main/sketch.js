const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var Snow1 = [];
var maxSnow = 500;

function preload(){
  bg = loadImage("snow3.jpg");
}

function setup() {
  engine=Engine.create();   
  world=engine.world
  createCanvas(600,600);
  if(frameCount % 150 === 0){ for(var i=0; i<maxSnow; i++){
    Snow1.push(new Snow(random(0,600), random(0,600))); } }

}

function draw() {
  background(bg);
  Engine.update(engine)
  
  for(var i = 0; i < maxSnow; i++){
    Snow1[i].display();
    Snow1[i].update();
}

  
  drawSprites();
}