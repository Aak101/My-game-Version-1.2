const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var b1,b2,b3,b4,b5,b6,b7,b8;
var edges;


function setup(){
    var canvas = createCanvas(900,600);
    // engine = Engine.create();
    // world = engine.world;
    player = createSprite(700,100,50,50);

    b1 = createSprite(600,100,50,50);
    b1.shapeColor = 'red'
    b2 = createSprite(600,200,50,50);
    b2.shapeColor = 'green'
    b3 = createSprite(600,300,50,50);
    b3.shapeColor = 'blue'
    b4 = createSprite(600,400,50,50);
    b4.shapeColor = 'yellow'
    b5 = createSprite(800,100,50,50);
    b5.shapeColor = 'green'
    b6 = createSprite(800,200,50,50);
    b6.shapeColor = 'blue'
    b7 = createSprite(800,300,50,50);
    b7.shapeColor = 'yellow'
    b8 = createSprite(800,400,50,50);
    b8.shapeColor = 'red'
    
}

function draw(){
    background('#CFE8EE');
    edges = createEdgeSprites();
    if(player.isTouching(edges)){
        player.x = 700;
        player.y = 100;
    }
   // Engine.update(engine);
     
    if(keyDown(LEFT_ARROW)){
        player.x = player.x - 50;
    }
    else if(keyDown(RIGHT_ARROW)){
        player.x = player.x + 50;
    }
    else if(keyDown(UP_ARROW)){
        player.y = player.y - 50;
    }
    else if(keyDown(DOWN_ARROW)){
        player.y = player.y + 50;
    }
    textSize(25)
    text("Click each Row's switches in the right order:",50,100)
    text("Row 1 - Green, Red, Yellow, Blue",75,200)
    text("Row 2 - Red, Yellow, Green , Blue",75,300)

    array1 = ["green","red","yellow","blue"];
    playerArray = [];
    

    drawSprites();
}