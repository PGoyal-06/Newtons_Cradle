
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

	roof = new Roof(800,700);
	bobObject1 = new Bob(400,300);
	rope1 = new Rope(bobObject1.body,roofObject.body, -bobDiameter*2, 0);
	bobObject2 = new Bob(450,300);
	rope2 = new Rope(bobObject2.body,roofObject.body, -bobDiameter*2, 0);
	bobObject3 = new Bob(500,300);
	rope3 = new Rope(bobObject3.body,roofObject.body, -bobDiameter*2, 0);
	bobObject4 = new Bob(550,300);
	rope4 = new Rope(bobObject4.body,roofObject.body, -bobDiameter*2, 0);
	bobObject5 = new Bob(600,300);
	rope5 = new Rope(bobObject5.body,roofObject.body, -bobDiameter*2, 0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



