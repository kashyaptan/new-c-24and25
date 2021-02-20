const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1, pig1;
var bg


function preload() {
    bg = loadImage('sprites/bg.png')
    dust = loadImage('sprites/dustbin.png')

    
}

function setup() {
    var canvas = createCanvas(1200, 400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600, height, 1200, 20)




    log4 = new Log(670, 340, 100, PI);
    log5 = new Log(870, 340, 100, PI);
    log6 = new Log(770, 380, 180, PI/2);
    bird1 = new Bird(200, 120, 50, 50 )


}

function draw() {
    background('white');
    Engine.update(engine);
    ground.display();
    log4.display();
    log5.display();
    log6.display();
    bird1.display()
    image(dust, 630,240, 270, 150)
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bird1.body, bird1.body.position, {x:140, y:-110})
    }
}