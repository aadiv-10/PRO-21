
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var grounds;
var leftside;
var rightside;
var groundObj;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	grounds= new Ground(width/2,670,width,20);
	leftside = new Ground(1100,600,20,120);
	rightside = new Ground(390,200,20,120);

	//Create the Bodies Here.
	var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	ball= Bodies.circle(200,100,100,20,ball_options);
	World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
 

  rectMode(CENTER);
  background(0);

  groundObj.display();

  drawSprites();
 
}

function keyPressed() {
	
	if (keyCode===UP_ARROW){

		Matter.Body.applyForce(ball,{x:0,y:0}, {x:0.05,y:0.05})
	}
}



