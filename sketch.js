var database;
var canvas, backgroundImg;

var gameState=0;
var playerCount;
var allPlayers;

var form, player, game;

var car1,car2,car3,car4;
var car1_img,car2_img,car3_img,car4_img,roadImg;
var cars;

var bg;

function preload(){
  car1_img=loadImage("images/car1.png");
  car2_img=loadImage("images/car2.png");
  car3_img=loadImage("images/car3.png");
  car4_img=loadImage("images/car4.png");
  roadImg=loadImage("images/track.jpg");
  bg=loadImage("images/fondo.jpg");
}
function setup(){
  canvas = createCanvas(displayWidth-80,displayHeight-160);

  database = firebase.database();
  
  game = new Game();
  game.getState();
  game.start();
}
function draw(){
  if(playerCount === 4){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2){
    game.end();
  }
}