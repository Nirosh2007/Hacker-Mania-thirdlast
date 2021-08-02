var title, input;
var button, greetings;
var bg;
var flag = true; 
var hackerEmployee1, hackerEmployee1Img;
var evilHackerBoss, evilHackerBossImg;
var virus1, virus1Img;
var virus2, virus2Img;
var hackerEmployee2, hackerEmployee3, hackerEmployee4, hackerEmployee5,hackerEmployee6, hackerEmployee7, hackerEmployee8, hackerEmployee9, hackerEmployee10, hackerEmployee11, hackerEmployee12;
var virus1, virus2, virus3, virus4, virus5, virus6, virus7, virus8, virus9, virus10, virus11, virus12;
var character, characterImg;
var flag1 = false;


function preload(){
  bg = loadImage("Images/Hacker Front Image.jpg");
  hackerEmployee1Img = loadImage("Images/Hacker Employee 1.png")
  evilHackerBossImg = loadImage("Images/evil hacker boss.png");
  virus1Img = loadImage("Images/Virus Sprite 1.png");
  virus2Img = loadImage("Images/Virus Sprite 2.png");
  characterImg = loadAnimation("Images/character.png");
  characterLeft = loadAnimation("Images/character left.png");
  characterRight = loadAnimation("Images/character right.png");
}

function setup() {
  createCanvas(1900,975);
  title = createElement('h1');
  input = createInput("Name");
  button = createButton('Play');
  
  hackerEmployee1 = createSprite(100,100);
  hackerEmployee1.addImage(hackerEmployee1Img);
  hackerEmployee1.visible = false;
  hackerEmployee1.velocityY = 1;

  hackerEmployee2 = createSprite (200,200);
  hackerEmployee2.addImage(hackerEmployee1Img);
  hackerEmployee2.visible = false;
  hackerEmployee2.velocityY = 1;

  hackerEmployee3 = createSprite(300,100);
  hackerEmployee3.addImage(hackerEmployee1Img);
  hackerEmployee3.visible = false;
  hackerEmployee3.velocityY = 1;
  
  hackerEmployee4 = createSprite(500,100);
  hackerEmployee4.addImage(hackerEmployee1Img);
  hackerEmployee4.visible = false;
  hackerEmployee4.velocityY = 1;
  
  hackerEmployee5 = createSprite(600,200);
  hackerEmployee5.addImage(hackerEmployee1Img);
  hackerEmployee5.visible = false;
  hackerEmployee5.velocityY = 2;

  hackerEmployee6 = createSprite(700,100);
  hackerEmployee6.addImage(hackerEmployee1Img);
  hackerEmployee6.visible = false;
  hackerEmployee6.velocityY = 1;

  hackerEmployee7 = createSprite(900,100);
  hackerEmployee7.addImage(hackerEmployee1Img);
  hackerEmployee7.visible = false;
  hackerEmployee7.velocityY = 2;

  hackerEmployee8 = createSprite(1000,200);
  hackerEmployee8.addImage(hackerEmployee1Img);
  hackerEmployee8.visible = false;
  hackerEmployee8.velocityY = 1;

  hackerEmployee9 = createSprite(1100,100);
  hackerEmployee9.addImage(hackerEmployee1Img);
  hackerEmployee9.visible = false;
  hackerEmployee9.velocityY = 2;

  hackerEmployee10 = createSprite(1300,100);
  hackerEmployee10.addImage(hackerEmployee1Img);
  hackerEmployee10.visible = false;
  hackerEmployee10.velocityY = 31

  hackerEmployee11 = createSprite(1400,200);
  hackerEmployee11.addImage(hackerEmployee1Img);
  hackerEmployee11.visible = false;
  hackerEmployee11.velocityY = 2;
  
  hackerEmployee12 = createSprite(1500,100);
  hackerEmployee12.addImage(hackerEmployee1Img);
  hackerEmployee12.visible = false;
  hackerEmployee12.velocityY = 1;


  
  virus1 = createSprite(100,350);
  virus1.addImage(virus1Img);
  virus1.visible = false;
  virus1.scale = 0.3;
  virus1.velocityY = 1;

  virus2 = createSprite(250,400);
  virus2.addImage(virus2Img);
  virus2.visible = false;
  virus2.scale = 0.3;
  virus2.velocityY = 0.5;

  virus3 = createSprite(400,350);
  virus3.addImage(virus1Img);
  virus3.visible = false;
  virus3.scale = 0.3;
  virus3.velocityY = 1;

  virus4 = createSprite(550,400);
  virus4.addImage(virus2Img);
  virus4.visible = false;
  virus4.scale = 0.3;
  virus4.velocityY = 0.5;

  virus5 = createSprite(700,350);
  virus5.addImage(virus1Img);
  virus5.visible = false;
  virus5.scale = 0.3;
  virus5.velocityY = 1;

  virus6 = createSprite(850,400);
  virus6.addImage(virus2Img);
  virus6.visible = false;
  virus6.scale = 0.3;
  virus6.velocityY = 0.5;

  virus7 = createSprite(1000,350);
  virus7.addImage(virus1Img);
  virus7.visible = false;
  virus7.scale = 0.3;
  virus7.velocityY = 1;

  virus8 = createSprite(1150,400);
  virus8.addImage(virus2Img);
  virus8.visible = false;
  virus8.scale = 0.3;
  virus8.velocityY = 0.5;

  virus9 = createSprite(1300,350);
  virus9.addImage(virus1Img);
  virus9.visible = false;
  virus9.scale = 0.3;
  virus9.velocityY = 1;

  virus10 = createSprite(1450,400);
  virus10.addImage(virus2Img);
  virus10.visible = false;
  virus10.scale = 0.3;
  virus10.velocityY = 0.5;

  virus11 = createSprite(1600,350);
  virus11.addImage(virus1Img);
  virus11.visible = false;
  virus11.scale = 0.3;
  virus11.velocityY = 1;

  virus12 = createSprite(1750,400);
  virus12.addImage(virus2Img);
  virus12.visible = false;
  virus12.scale = 0.3;
  virus12.velocityY = 0.5;

  character = createSprite(950,665);
  character.addAnimation("c",characterImg);
  character.addAnimation("left",characterLeft);
  character.addAnimation("right",characterRight);
  character.visible = false;
  character.scale = 0.8;

}

function draw() {
  if(flag){
    background(bg);  
  }
  else{
    background("green");
  }
  //image(bg,0,0,1900,950);
  title.html("Hacker Mania");
  title.style('color',"red");
  title.style('font-size', '50px');
  title.position(845,350);  

  input.position(890,500);

  button.position(740,600);
  button.size(500,20);
  button.mousePressed(function(){
    flag1 = true;
  });


  if(flag1){
    startGame();
  }
  drawSprites();
}

function startGame(){
  //bg.remove();
  flag = false;
  background("green");
  title.hide();
  input.hide();
  button.hide();
  hackerEmployee1.visible = true;
  hackerEmployee2.visible = true;
  hackerEmployee3.visible = true;
  hackerEmployee4.visible = true;
  hackerEmployee5.visible = true;
  hackerEmployee6.visible = true;
  hackerEmployee7.visible = true;
  hackerEmployee8.visible = true;
  hackerEmployee9.visible = true;
  hackerEmployee10.visible = true;
  hackerEmployee11.visible = true;
  hackerEmployee12.visible = true;
  virus1.visible = true; 
  virus2.visible = true;
  virus3.visible = true;
  virus4.visible = true;
  virus5.visible = true;
  virus6.visible = true;
  virus7.visible = true;
  virus8.visible = true;
  virus9.visible = true;
  virus10.visible = true;
  virus11.visible = true;
  virus12.visible = true;
  character.visible = true;
  character.x = World.mouseX;
  character.y = World.mouseY;

  if(keyDown("a")){
    character.changeAnimation("left",characterLeft);
  }

  if(keyDown("d")){
    character.changeAnimation("right",characterRight);
  }
}