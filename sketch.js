const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
 
var engine,world;
var bg,boy;

function preload(){
  bg=loadImage("bg.jpg");
  boy=loadImage("boy.png");
}
  


function setup() {
  createCanvas(windowWidth,windowHeight);
  engine=Engine.create();
  world=engine.world;
}

function draw() {
  background(bg);  
  image(boy,150,260,200,400)
}