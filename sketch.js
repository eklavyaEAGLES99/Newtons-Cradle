const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var chain1,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(400, 400);


	engine = Engine.create();
	world = engine.world;
	
	bobObject1 = new Bob(120,250,20);
	bobObject2 = new Bob(160,250,20);
	bobObject3 = new Bob(200,250,20);
	bobObject4 = new Bob(240,250,20);
	bobObject5 = new Bob(280,250,20);
	//Create the Bodies Here.

	roof = new Roof(200,150,300,10)

	chain1 = new Chain(bobObject1.body,roof.body,-80,0);
	chain2 = new Chain(bobObject2.body,roof.body,-40,0);
	chain3 = new Chain(bobObject3.body,roof.body,0,0);
	chain4 = new Chain(bobObject4.body,roof.body,40,0);
	chain5 = new Chain(bobObject5.body,roof.body,80,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45})
	}

}


