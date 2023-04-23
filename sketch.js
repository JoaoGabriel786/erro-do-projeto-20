
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);















	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.
var plane_opitions={
	isStatic:true
}
Block1 = Bodies.circle(220,10,10,Block1_options);
World.add(World,block1);


Block2 = Bodies.rectangle (110,50,10,10,Block2_options);
World.add (World,block2);




Block3 = Bodies.rectangle (350,50,10,10,Block3_options);
World.add (World,block3);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(50);
  
  drawSprites();
 Engine.update
}



