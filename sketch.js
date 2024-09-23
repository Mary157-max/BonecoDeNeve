let cor;
let circuloY;
let circuloX;

let posicaoHorizontal2;
let posicaoVertical2;




function setup() {
  createCanvas(400, 400);
  background("black")
  cor = color (random(0,255),random(0,255), random(0,255));
  
  circuloX=[0, 0];
  circuloY=[]
  
  
  posicaoHorizontal = 0;
   posicaoVertical = random(height)

 posicaoHorizontal = 0;
   posicaoVertical = random(height)
}

function draw(){
  fill(cor);
  circle(posicaoHorizontal, posicaoVertical, 50);
  
  posicaoHorizontal+= random(0,3);
  posicaoVertical+= random(-3,3);
  
  posicaoHorizontal+= random(0,3);
  posicaoVertical+= random(-3,3);
  
  if(mouseIsPressed){
    cor= color(random(0,255), random(0,255), random(0,255));
 } 
}