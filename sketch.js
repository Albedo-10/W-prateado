let xBall=300;
let yBall=225;
let speedxBall=6
let speedyBall=5
let diametro=25
let raio=diametro/2
//rect
let rectX=5
let rectY=150
let rectL=10
let rectA=90
//enemy
let xEnemy = 585;
let yEnemy = 150;
let speedYEnemy = 0;
let funcion = [1, 2]
function setup() {
  createCanvas(600, 450);
}

function draw() {
  background(12);
  ball();
  move();
  colision();
  rectCreate();
  rectMove();
  enemyMove();
}
function ball(){
   circle(xBall, yBall,diametro);
}
function move(){
  xBall+=speedxBall;
  yBall+=speedyBall;
}
function colision(){
  let aleatorio = random(funcion)
  if(xBall+raio > width || xBall-raio < 0){
    speedxBall*= -1; 
  }
   if(yBall+raio > height || yBall-raio < 0){
    speedyBall*= -1; 
  }
  if (xBall-raio<rectX+rectL&&yBall-raio < rectY + rectA && yBall+raio >rectY ){
    if (aleatoria = 1) {
      speedxBall *= -1;
    } else{
      speedxBall *= -1;
      speedyBall*= -1;
    }

  }
    if (xBall+raio>xEnemy+5){
    speedxBall *= -1;
  }
}
function rectCreate(){
  rect(xEnemy, yEnemy, rectL, rectA);
  rect(rectX, rectY, rectL, rectA);
}
function rectMove() {
  if(keyIsDown(UP_ARROW)) {
    rectY -= 10;
  }
  if(keyIsDown(DOWN_ARROW)) {
    rectY += 10;
  }
}

function enemyMove() {
  speedYEnemy = yBall-yEnemy - rectL / 2 - 30;
  yEnemy += speedYEnemy;
}