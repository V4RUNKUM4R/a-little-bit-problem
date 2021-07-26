var track;
var track_Img;
var boy;
var boy_Anm;

function preload(){
  //pre-load images
  track_Img=loadImage("path.png");
  boy_Anm=loadAnimation("Jake1.png","Jake2.png","Jake3.png","Jake4.png","Jake5.png",);
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track=createSprite(200,200);
  track.addImage(track_Img);
  track.scale = 1.2;

  boy=createSprite(200,310,20,20);
  boy.addAnimation("boy_Anm",boy_Anm);
  boy.scale = 0.8;
}

function draw() {

  createEdgeSprites();

  track.velocityY=4;
  if(track.y <400){
    track.y=track.height/2;
  }

  boy.x=World.mouseX;
  boy.collide(rightedge);
  boy.collide(leftedge);

  background("green");

  drawSprites();
}
