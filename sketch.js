
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine;
var world;
var chao;
var lixeira1,lixeira2;
var ball;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    chao = new ground(400,650,800,20)
    lixeira1 = new ground(500,580,15,120)
    lixeira2 = new ground(700,580,15,120)
    
	var optionsb={
      density:1.5,
	  restitution:0.5,
    }

	ball = Bodies.circle(150,100,30,optionsb)
	World.add(world,ball)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  chao.display()
  lixeira1.display()
  lixeira2.display()
  
  fill("white")
  ellipse(ball.position.x,ball.position.y,30,30)

  drawSprites();
 
}
function keyPressed(){
  if(keyCode == UP_ARROW)
	Matter.Body.applyForce(ball,ball.position,{x:30,y:-50})
}


