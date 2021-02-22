const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammer;
var stone;
var rubber;

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

    hammer = new Hammer(200,200);
    stone = new stone(150,300);
    


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightblue");

  console.log(hammer.body.position.x);
  console.log(hammer.body.position.y);
  
  hammer.display();
  stone.display();
  rubber.display();


  drawSprites();
 
}



