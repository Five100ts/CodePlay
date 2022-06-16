//MENU

/* A barra de navegação ocupa 25% da tela */
function openNav() {
    document.getElementById("mySidenav").style.width = "25%";
    document.body.style.backgroundColor = "#451C99";
    /*document.getElementById("myModalDica").style.backgroundColor = "#451C99";*/
  }
  
  /* A barra de navegação ocupa 0% da tela */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
    document.body.style.backgroundColor = "#5522BD";
  }

  function confi(){
    document.getElementById("conteudoModalConfig").style.display = "block";
    document.body.style.backgroundColor = "#451C99";
    document.getElementById("menuE").style.display = "none";
    document.getElementById("resetG").style.display = "none";
    document.getElementById("confirm").style.display = "none";
    document.getElementById("myBtnDica").style.display = "none";
    document.getElementById("mySidenav").style.width = "0%";
  }
  
  function closeConfi(){
    document.getElementById("conteudoModalConfig").style.display = "none";
    document.body.style.backgroundColor = "#5522BD";
    document.getElementById("menuE").style.display = "block";
    document.getElementById("resetG").style.display = "block";
    document.getElementById("confirm").style.display = "block";
    document.getElementById("myBtnDica").style.display = "block";
  }
  
  function exit(){
    window.location.href='../easy.html';
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
}

// Quando o usuário clicar no X, feche o modal
spanDica.onclick = function() {
  modalDica.style.display = "none";
}

//Quando o usuário clicar fora do modal, feche o modal
window.onclick = function(event) {
  if (event.target == modalDica) {
    modalDica.style.display = "none";
  }

  
}

//Tirar os elementos da tela quando a tela de vitoria ou derrota aparecer

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


}

if(document.getElementById("demo").innerHTML >5){
document.getElementById("conteudoModalVitory").style.display = "block";
document.body.style.color = "#451C99";
document.getElementById("menuE").style.display = "none";
document.getElementById("resetG").style.display = "none";
document.getElementById("confirm").style.display = "none";
document.getElementById("myBtnDica").style.display = "none";

}
}

function back1(){
window.location.href='../../../inicio.html';
}

function reset(){
window.location.href='fase1.html';
}

function next(){
window.location.href='../fase2/fase2.html';
}













  