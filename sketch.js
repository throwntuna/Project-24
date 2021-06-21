const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    iron1 = new Iron(10, 10);
    iron2 = new Iron(20, 50)
    iron3 = new Iron(40, 60)
    stone1 = new Stone(30, 20)
    stone2 = new Stone(20, 70)
    stone3 = new Stone(40, 90)
    rubber1 = new Rubber(10, 20, 20)
    rubber2 = new Rubber(20, 20, 10)
    rubber3 = new Rubber(70, 20, 30)
}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    iron1.display();
    iron2.display();
    iron3.display();
    stone1.display();
    stone2.display();
    stone3.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
}