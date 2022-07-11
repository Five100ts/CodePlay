//MENU
var audio = new Audio('./b1.mp3');
var audio2 = new Audio('./b2.mp3');
var audio3 = new Audio('./vic.mp3');
var audio4 = new Audio('./lose.mp3');

/* A barra de navegação ocupa 25% da tela */
function openNav() {
  audio.play();
    document.getElementById("mySidenav").style.width = "25%";
    document.body.style.backgroundColor = "#451C99";
    /*document.getElementById("myModalDica").style.backgroundColor = "#451C99";*/
  }
  
  /* A barra de navegação ocupa 0% da tela */
  function closeNav() {
    audio2.play();
    document.getElementById("mySidenav").style.width = "0%";
    document.body.style.backgroundColor = "#5522BD";
  }
  
  function confi(){
    audio.play();
    document.getElementById("conteudoModalConfig").style.display = "block";
    document.body.style.backgroundColor = "#451C99";
    document.getElementById("menuE").style.display = "none";
    document.getElementById("resetG").style.display = "none";
    document.getElementById("confirm").style.display = "none";
    document.getElementById("myBtnDica").style.display = "none";
    document.getElementById("mySidenav").style.width = "0%";
  }

  function closeConfi(){
    audio2.play();
    document.getElementById("conteudoModalConfig").style.display = "none";
    document.body.style.backgroundColor = "#5522BD";
    document.getElementById("menuE").style.display = "block";
    document.getElementById("resetG").style.display = "block";
    document.getElementById("confirm").style.display = "block";
    document.getElementById("myBtnDica").style.display = "block";
  }

  function exit(){
    audio2.play();
    window.location.href='../hard.html';
  }




//DICA

// Obtem o modal
var modalDica = document.getElementById("myModalDica");

// Pega o botão que abre o modal
var btnDica = document.getElementById("myBtnDica");


// Obtem o elemento <span> que fecha o modal
var spanDica = document.getElementsByClassName("closeDica")[0];

// Quando o usuário clicar no botão, abra o modal 
btnDica.onclick = function() {
  modalDica.style.display = "block";
  audio.play();
}

// Quando o usuário clicar no X, feche o modal
spanDica.onclick = function() {
  modalDica.style.display = "none";
  audio2.play();
}

//Quando o usuário clicar fora do modal, feche o modal
window.onclick = function(event) {
  if (event.target == modalDica) {
    modalDica.style.display = "none";
    audio2.play();
  }

  
}

document.getElementById("demo").innerHTML = 0;

function randomN(){
  document.getElementById("demo").innerHTML =
Math.floor(Math.random() * 10);

if(document.getElementById("demo").innerHTML <=5){
  document.getElementById("conteudoModalDefeat").style.display = "block";
  document.body.style.color = "#451C99";
  document.getElementById("menuE").style.display = "none";
  document.getElementById("resetG").style.display = "none";
  document.getElementById("confirm").style.display = "none";
  document.getElementById("myBtnDica").style.display = "none";
  audio4.play();
 
  
}

if(document.getElementById("demo").innerHTML >5){
  document.getElementById("conteudoModalVitory").style.display = "block";
  document.body.style.color = "#451C99";
  document.getElementById("menuE").style.display = "none";
  document.getElementById("resetG").style.display = "none";
  document.getElementById("confirm").style.display = "none";
  document.getElementById("myBtnDica").style.display = "none";
  audio3.play();
  
}
}

function back1(){
  audio2.play();
  window.location.href='../../../inicio.html';
}

function reset(){
  audio2.play();
  window.location.href='fase4.html';
}

function next(){
  audio.play();
  window.location.href='../fase5/fase5.html';
}


  


  