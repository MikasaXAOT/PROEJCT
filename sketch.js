var bgImg

function preload() {
  bgIMG = loadImage ("snow2.jpg")
}


function setup() {
createSprite 

  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background("snow2.jpg");  
  drawSprites();
}