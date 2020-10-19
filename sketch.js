
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var projectile;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
var boxV1,boxV2,boxV3,boxV4,boxV5,boxV6,boxV7,boxV8,boxV9;
var ground, roof1, roof2;
var chain;

function setup() {
	createCanvas(1518, 726);
	
	engine = Engine.create();
	world = engine.world;

ground = new Ground(759, 716, 1518, 17);
roof1 = new Ground(760, 500, 300, 16);
roof2 = new Ground(1335, 400, 250, 16);
// roof1
box1= new Box(650, 490, 30, 40);
box2= new Box(680, 480, 30, 40);
box3= new Box(710, 490, 30, 40);
box4= new Box(740, 480, 30, 40);
box5= new Box(770, 490, 30, 40);
box6= new Box(800, 480, 30, 40);
box7= new Box(830, 490, 30, 40);
box8= new Box(680, 400, 30, 40);
box9= new Box(710, 400, 30, 40);
box10= new Box(740, 400, 30, 40);
box11= new Box(770, 400, 30, 40);
box12= new Box(800, 400, 30, 40);
box13= new Box(710, 350, 30, 40);
box14= new Box(740, 350, 30, 40);
box15= new Box(770, 350, 30, 40);
box16= new Box(740, 300, 30, 40);
// roof2
boxV1= new Box(1390, 380, 30, 40);
boxV2= new Box(1360, 380, 30, 40);
boxV3= new Box(1330, 380, 30, 40);
boxV4= new Box(1300, 380, 30, 40);
boxV5= new Box(1270, 380, 30, 40);
boxV6= new Box(1360, 340, 30, 40);
boxV7= new Box(1330, 340, 30, 40);
boxV8= new Box(1300, 340, 30, 40);
boxV9= new Box(1330, 300, 30, 40);
projectile = new Projectile(200, 600, 30);
chain = new Chain(projectile.body, {x:200, y:600})
Engine.run(engine);
}


function draw() {
  background("black");
drawSprites();
  ground.display();
  roof1.display();
  roof2.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  boxV1.display();
  boxV2.display();
  boxV3.display();
  boxV4.display();
  boxV5.display();
  boxV6.display();
  boxV7.display();
  boxV8.display();
  boxV9.display();
  projectile.display()
  chain.display();
  // keypressed();
}



function mouseDragged(){
  Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}

function keyPressed(){
  if(keyCode === 32){
    chain.attach(projectile.body);
  }
  }

function mouseReleased(){
  chain.fly();
}


