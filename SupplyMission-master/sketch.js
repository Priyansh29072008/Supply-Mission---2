var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,rect1,box2,box3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("new.png")
	packageIMG=loadImage("package.png")
	backgroundIMG=loadImage("background.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
    rect1 = new Rectangle(400,600,100,20)
	rect2 = new Rectangle(440,550,20,100)
	rect3 = new Rectangle(360,550,20,100)
}


function draw() {
  rectMode(CENTER);
  background(backgroundIMG)
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect1.display()
  rect2.display()
  rect3.display()
  
  drawSprites();
}

function keyPressed() {
	if (keyCode == DOWN_ARROW) {
	   // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
       Matter.Body.setStatic(packageBody,false) 
	 }
   }