var moving, fixed;
var gameObject1,gameObject2,gameObject3;

function setup() {
  createCanvas(800,400);
 fixed= createSprite(400, 200, 50, 50);
 moving= createSprite(200,200,50,50);
 fixed.shapeColor="green";
 moving.shapeColor="green";
 fixed.debug=true;
 moving.debug=true;
gameObject1=createSprite(170,200,50,50);
gameObject1.shapeColor="green";
gameObject2=createSprite(100,200,50,50);
gameObject2.shapeColor="green";
gameObject3=createSprite(300,200,50,50);
gameObject3.shapeColor="green";


}

function draw() {
  background(255,255,255);  
   moving.x=mouseX;
   moving.y=mouseY;

  
   if(isTouching(moving,gameObject3)){
     moving.shapeColor="red";
     gameObject3.shapeColor="red";
   }
   else
   {
    moving.shapeColor="green";
    gameObject3.shapeColor="green";
   }
  
  
  drawSprites();
}

