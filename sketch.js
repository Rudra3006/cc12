
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,wL,wR,ball;

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground=new Ground(600,690,1200,20)
    wL=new Ground(950,650,20,100)
	wR=new Ground(1150,650,20,100)

	var options = {
		restitution:0.3,isStatic:false,friction:0,density:1.2
	   }
	   ball = Bodies.circle(100,100,20,options)
	   World.add(world,ball)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background(0);
  ground.show();
  wL.show();
  wR.show();
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})
	}
}