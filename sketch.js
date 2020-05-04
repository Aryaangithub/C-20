var car,wall;
var speed ,weight;
var deformation




function setup() {
  createCanvas(1600,400);
  
deformation=(0.5*weight*speed*speed)/22500;


speed=random(55,90);
weight=random(400,1500);

car= createSprite(50,200,50,50);
car .velocityX=speed;

wall=createSprite(1500,200,60,height/2);
wall.shapeColor="blue";

}

function draw() {
  background(0); 
  
  if(isTouching(car ,wall)){

collide();
if(deformation>180){
car. shapeColor=(255,0,0);

  }

if(deformation>80 &&deformation<180 ){
car.shapeColor=(230,230,0);

}


if(deformation<80){

car.shapeColor=(0,255,0);

}
  }

  drawSprites();
}


function isTouching(a,b){
  if (a.x - b.x < b.width/2 + a.width/2
    && b.x - a.x < b.width/2 + a.width/2
    && a.y - b.y < b.height/2 + a.height/2
    && b.y - a.y < b.height/2 + a.height/2) {
    return true ;
}
else {
  return false;
}

}

function collide(){
if(isTouching(car,wall)){
car.velocityX=0;






}}







