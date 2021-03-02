var canvas;
var music;
var fixSprite1,fixSprite2,fixSprite3,fixSprite4;
var movingSprite;

function preload(){
    music = loadSound("music.mp3");

}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    movingSprite = createSprite(random(10,750),300,20,20);
    movingSprite.shapeColor = "white";
    movingSprite.velocityX = 3;
    movingSprite.velocityY = 3;


    //create box sprite and give velocity
    fixSprite1 = createSprite(100,590,180,20);
    fixSprite1.shapeColor = "red";

    fixSprite2 = createSprite(300,590,180,20);
    fixSprite2.shapeColor = "green";

    fixSprite3 = createSprite(500,590,180,20);
    fixSprite3.shapeColor = "blue";

    fixSprite4 = createSprite(700,590,180,20);
    fixSprite4.shapeColor = "yellow";

}

function draw() {
    background(rgb(10,10,10));
    
    if(movingSprite.x<0){
        music.stop()
        movingSprite.velocityX = 3;
    }else if(movingSprite.x>800){
        music.stop()
        movingSprite.velocityX = -3;

        if(isTouching(movingSprite,fixSprite4)){
            music.play()
            movingSprite.shapeColor = "yellow";
            bounceOff(movingSprite,fixSprite4);
        }

        if(isTouching(movingSprite,fixSprite3)){
            music.play()
            movingSprite.shapeColor = "blue";
            bounceOff(movingSprite,fixSprite3);
        }

        if(isTouching(movingSprite,fixSprite2)){
            music.play()
            movingSprite.shapeColor = "green";
            bounceOff(movingSprite,fixSprite2);
        }

        if(isTouching(movingSprite,fixSprite1)){
            music.play()
            movingSprite.shapeColor = "red";
            bounceOff(movingSprite,fixSprite1);
        }

       }  
        drawSprite();
    }
