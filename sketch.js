var canvas;
var music;
var surface1, surface2, surface3, surface4;
var box;
var edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    surface1 = createSprite(50, 550, 300, 50);
    surface1.shapeColor = "red";
    surface2 = createSprite(310, 550, 200, 50);
    surface2.shapeColor = "blue";
    surface3 = createSprite(510, 550, 200, 50);
    surface3.shapeColor = "lime";
    surface4 = createSprite(720, 550, 200, 50);
    surface4.shapeColor = "yellow";
    




    //create box sprite and give velocity
box = createSprite(100, 100, 50, 50);
box.velocityX = 4
box.velocityY = 4

}

function draw() {
    background(0);
    if(keyDown("1")){
        box.velocityX = 3;
        box.velocityY = 3;
        
    
       }
       
       edges =  createEdgeSprites();
    box.bounceOff(edges);
    // box.bounceOff(surface1);
    // box.bounceOff(surface2);
    // box.bounceOff(surface3);
    // box.bounceOff(surface4);


   
    if (box.bounceOff(surface1)){
        console.log("red")
        box.shapeColor = "red";
    }
    if (box.bounceOff(surface2)){
        console.log("blue")
        box.shapeColor = "blue";
    }
    if (box.bounceOff(surface3)){
        console.log("lime")
        box.shapeColor = "lime";
    }
    if (box.bounceOff(surface4)){
        console.log("yellow")
        box.shapeColor = "yellow";  
    }



    //add condition to check if box touching surface and make it box
    drawSprites();

}

