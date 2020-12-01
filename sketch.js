
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Ninja,ninjaImg;

function preload()
{
	ninjaImg = loadImage("ninja.png");
	bg = loadImage("bg.png");
	bd = loadImage("Capture.PNG"); 
	bd1 = loadImage("Capture2.PNG");
	at = loadImage("ataker.png");
	st = loadImage("star.png");
}

function setup() {
	createCanvas(1000, 700);

	gr = createSprite(500,680,1200,20);
	gr.visible = false;

	ninja = createSprite(500,600);
	ninja.addImage(ninjaImg);
	ninja.scale = 0.05

	attacker = createSprite(600,600);
	attacker.addImage(at);
	attacker.scale = 0.15

	star = createSprite(700,600);
	star.addImage(st);
	star.scale = 0.1

	bac = createSprite(850,450);
	bac.addImage(bd);
	bac.scale = 1

	bac1 = createSprite(300,450);
	bac1.addImage(bd1);
	bac1.scale = 1

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(bg);
  
  drawSprites();
 
}



