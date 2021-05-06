
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var chain2;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1 = new Mango(1100,100,30);
	mango2 = new Mango(1000,100,30);
	mango3 = new Mango(1000,170,30);
	mango4 = new Mango(900,170,30);
	mango5 = new Mango(950,230,30);
	mango6 = new Mango(1200,230,30);
	mango7 = new Mango(1100,230,30);
	mango8 = new Mango(1150,170,30);

	treeObj = new Tree(1050,580);
	groundObject = new Ground(width/2,600,width,20);
    stoneObj = new Stone(210,350,50);
	chain2 = new Chain(stoneObj.body,{x:240,y:410});

	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
 
  stoneObj.display();
  groundObject.display();
  chain2.display();

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);
  detectCollision(stoneObj,mango6);
  detectCollision(stoneObj,mango7);
  detectCollision(stoneObj,mango8);

}
function mouseDragged(){
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
 chain2.fly();
}

function detectCollision(stone,mango){
   mangoObjectPosition = mango.body.position;
   stoneObjectPosition = stone.body.position;
   var distance = dist(stoneObjectPosition.x,stoneObjectPosition.y,mangoObjectPosition.x,mangoObjectPosition.y)
   if(distance<= mango.r + stone.r){
     Matter.Body.setStatic(mango.body,false)
   }
}

function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stoneObj.body,{x : 235,y : 420})
 //chain2.attach(stoneObj.body);
 chain2 = new Chain(stoneObj.body,{x:240,y:410});
}
}
