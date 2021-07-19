const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;
var engine ,world,platform1,demon,platform2,bouncer,p1;
function setup() {
  createCanvas(1300,600);
  engine = Engine.create()
  world = engine.world;
  platform1= new Platform(200,350,400,60);
  platform2 = new Platform(1200,500,200,40);
  bouncer = new Bouncer(700,500,100);
  p1 = new Player(350,300,30,30);
  p1.shapeColor = "red"
  demon = createSprite(30,300,50,50);
  demon.shapeColor="black"

}

function draw() {
  background(0,255,0);
  platform1.display();
  platform2.display();
  bouncer.display();
  p1.display();
    drawSprites();
  
}