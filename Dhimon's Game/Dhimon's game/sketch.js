var backgroundImage
var character_running
var clockImage
var coinImage
var monsterImage

function preload(){
backgroundImage = loadImage("assets/background.gif")
clockImage = loadImage("assets/clock.png")
coinImage = loadImage("assets/coin.png")
monsterImage = loadImage("assets/monster.png")
character_running = loadAnimation("assets/character1.png","assets/character2.png",
"assets/character3.png", "assets/character4.png","assets/character5.png", "assets/character6.png");
}



function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundSprite = createSprite(width,height);
  backgroundSprite.addImage(backgroundImage);
}

function draw() {
  background("white");

  drawSprites();

}