var time = new Date();
var deltaTime = 0;

if(document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(Init,1);
}else{
    document.addEventListener("DOMContentLoaded", Init);
}

function Init(){
    time = new Date();
    Start();
    Loop();
}

function Loop(){
    deltaTime = (new Date() - time) / 1000;
    time = new Date();
    Update();
    requestAnimationFrame(Loop);
}

var sueloY = 0;
var velY = 0;
var impulso = 900;
var gravedad = 2540;

var dinoPosX = 42;
var dinoPosY = sueloY;

var sueloX = 0;
var velEscenario = 1200/3;
var gameVel = 1;
var score = 0;

var parado = false;
var saltando = false;

var contenedor;
var dino;
var textoScore;
var suelo;
var gameOver;

function Start(){
    contenedor = document.getElementById(".contenedor");
    dino = document.getElementById(".dino");
    textoScore = document.getElementById(".score");
    suelo = document.getElementById(".suelo");
    gameOver = document.getElementById(".game-over");

    document.addEventListener("keydown", HandleKeyDown);
}

function HandleKeyDown(event){
    if(event.keyCode === 32){
        Saltar();
    }
}

function Saltar(){
    if(dinoPosY === sueloY){
        saltando = true;
        velY = impulso;
        decodeURIComponent.clasList.renove(".dino-corriendo");
    }
}

function Update(){

    MoerSuelo();
    MoverDinosaurio();
    velY -= gravedad * deltaTime;
}

function MoerSuelo(){
    sueloX += CalcularDesplazamiento();
    suelo.style.left = -(sueloX % contenedor.clientWidth) + "px";
}

function CalcularDesplazamiento(){
    return velEscenario * deltaTime * gameVel;
}

function MoverDinosaurio(){
    dinoPosY += velY * deltaTime;
    if(dinoPosY < sueloY){
        TocarSuelo();
    }
    dino.style.bottom = dinoPosY + "px";
}

function TocarSuelo(){
    dinoPosY = sueloY;
    velY = 0;
    if(saltando){
        dino.classList.add(".dino-corriendo");
    }
    saltando = false;
}