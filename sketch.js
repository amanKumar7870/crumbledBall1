
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var options={
		'restitution':0.3,
		isStatic:false,
		'friction':0.5,
		'density':1.2
	}

	ball=Bodies.circle(100,310,5,options);
	World.add(world,ball);

	var ab={
		isStatic:true
	}

	ground=Bodies.rectangle(width/2,340,1200,10,ab);
	World.add(world,ground);

	var oj={
	isStatic:true
	
	}

	dustbin1=Bodies.rectangle(800,310,10,50,oj);
	fill('red');
	
	World.add(world,dustbin1);

	dustbin2=Bodies.rectangle(845,330,100,10,oj);
	World.add(world,dustbin2);

	dustbin3=Bodies.rectangle(890,310,10,50,oj);
	World.add(world,dustbin3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('black');
  

  if(keyCode===UP_ARROW){
   ball.position.x=845;
   ball.position.y=310;
  }
  drawSprites();
  circle(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,1200,10);
  rect(dustbin1.position.x,dustbin1.position.y,10,50);
  rect(dustbin2.position.x,dustbin2.position.y,100,10);
  rect(dustbin3.position.x,dustbin3.position.y,10,50);


}



