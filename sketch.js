var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var nuvem, imagemnuvem, gruponuvem;
var obstaculo, imagemobstaculo1, imagemobstaculo2, imagemobstaculo3, imagemobstaculo4, imagemobstaculo5, imagemobstaculo6, grupoobstaculos;
var stadosdojogo = "correr"
var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  imagemnuvem = loadImage("cloud.png");
  groundImage = loadImage("ground2.png");
  imagemobstaculo1 = loadImage("obstacle1.png")
  imagemobstaculo2 = loadImage("obstacle2.png")
  imagemobstaculo3 = loadImage("obstacle3.png")
  imagemobstaculo4 = loadImage("obstacle4.png")
  imagemobstaculo5 = loadImage("obstacle5.png")
  imagemobstaculo6 = loadImage("obstacle6.png")



}

function setup() {

  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.addImage("stop", trex_collided)
  trex.scale = 0.5;
  
  //crie sprite ground (solo)
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  
  //crie um solo invisível
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //gerar números aleatórios
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //definir cor do plano de fundo
  background(180);
 
if (stadosdojogo === "correr"){
  // pulando o trex ao pressionar a tecla de espaço
  if(keyDown("space")&& trex.y >= 160) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  ground.velocityX = -4;
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  nuvens()
 obstaculos()
if (trex.isTouching (grupoobstaculos)) {
stadosdojogo = "gameover"

}


}
else if (stadosdojogo === "gameover"){
trex.velocityY = 0 
ground.velocityX = 0
trex.changeAnimation("stop", trex_collided)
grupoobstaculos.setVelocityXEach(0)
gruponuvem.setVelocityXEach(0)
}
  
  
  //impedir que o trex caia
  trex.collide(invisibleGround);
  

  
  drawSprites();
}

//função para gerar as nuvens
function nuvens(){
 //escreva seu código aqui
 if (frameCount%60===0){
nuvem = createSprite (600,50)
nuvem.addImage ("branca",imagemnuvem)
nuvem.velocityX = -5
nuvem.y = Math.round (random(10,100))
nuvem.lifetime = 120
 }
}

function obstaculos(){
  if (frameCount%60===0){
     obstaculo= createSprite (600,170)
    obstaculo.velocityX = -5
    pedra = Math.round (random(1, 6))
    obstaculo.scale = 0.5
    obstaculo.lifetime = 120
switch(pedra){
  case 1:obstaculo.addImage(imagemobstaculo1);
break;
case 2:obstaculo.addImage(imagemobstaculo2);
break;
case 3:obstaculo.addImage(imagemobstaculo3);
break;
case 4:obstaculo.addImage(imagemobstaculo4);
break;
case 5:obstaculo.addImage(imagemobstaculo5);
break;
case 6:obstaculo.addImage(imagemobstaculo6);
break;
default:
  break


}
}
}

