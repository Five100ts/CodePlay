//Painel onde cola ficam os blocos
function createPanel(){
	const painel = document.getElementById('painel');
	let button = [];

	for(let cont=0; cont<5;cont++){
    //Botão para cima
		if(cont==0){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Up";
    
    button[cont].id = "cima";
    
    button[cont].onclick = function(){
      cima()
    }
		painel.appendChild(button[cont]);
	}
  //Botão para direita
  if(cont==1){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Right";

    button[cont].id = "direita";

    button[cont].onclick = function(){
     direita()
    }
        
		painel.appendChild(button[cont]);
	}
   //Botão para baixo
  if(cont==2){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Down";
        
    button[cont].id = "baixo";

    button[cont].onclick = function(){
      baixo()
    }

		painel.appendChild(button[cont]);
	}
   //Botão para esquerda
  if(cont==3){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Left";

    button[cont].id = "esquerda";

    button[cont].onclick = function(){
      esquerda()
    }

		painel.appendChild(button[cont]);
	}

  // if(cont==4){
  //   button[cont] = document.createElement("button");
	// 	button[cont].innerHTML="Exec";

  //   button[cont].onclick = function(){
  //    exec()
  //   }
        
	// 	painel.appendChild(button[cont]);
	// }

  }
}

//Negócio que pinta tundo na tela que seja HTML e fica ao rredor do bagulho
(function main(){
	createPanel();
})();

//variaveis das coordenadas do jogador
let m, n;
 //Vetor que vai receber os blocos
let comandos = [];
//Teste
let primeiro = comandos[0];
let obj = new Boolean(false);
let iniciar = new Boolean(false);
let timer = 5;
let easing=0.5;
let eas=2;

 //Mapa formado por uma matriz
 let map = [

  ['1', '1', '1', '1', '1', '1', '1','1', '1'],
  ['1', '1', '1', '1', '1', '1', '1','1', '1'],
  ['1', '1', '0', '0', '0', '0', '0','1', '1'],
  ['1', '1', '0', '1', '1', '3', '0','1', '1'],
  ['1', '1', '0', '0', '0', '0', '0','1', '1'],
  ['1', '1', '1', '1', '1', '1', '1','1', '1'],
  ['1', '1', '1', '1', '1', '1', '1','1', '1'],
  ['1', '1', '1', '1', '1', '1', '1','1', '1'],
  ['1', '1', '1', '1', '1', '1', '1','1', '1'],
  ]
  
  
  
  function setup() {
  
      createCanvas(480, 200);
      colorMode(HSB, 360, 100, 100);
      canvas.id = 'canvas';
      //valor das coordenadas do jogador
      m=3;
      n=3;
      
    }
    
    function draw() {
      background(255)
      mapa();
      player();
      objetivo();
      vetor();
      noStroke();
      fill(260,82,74);
      rect(width*0.4541,0,width*0.0625,height*1.1);
      
    }
  function windowResized(){
    resizeCanvas(windowWidth*0.625, windowHeight*0.66);
  }
  
  function vetor(){
    for(let i = 0;i<comandos.length;i++){
      if(comandos[i] == 'up'){
        let x = width*0.515;
        let y = i*height*0.11;
             fill(38,90,100);
             rect(x,height*0.886-y,width*0.05,height*0.11);
      }
  
      if(comandos[i] == 'right'){
        let x = width*0.515;
        let y = i*height*0.11;
             fill(163,92,74);
             rect(x,height*0.886-y,width*0.05,height*0.11);    }
  
      if(comandos[i] == 'down'){
        let x = width*0.515;
        let y = i*height*0.11;
             fill(260,82,74);
             rect(x,height*0.886-y,width*0.027,height*0.11);    }
  
      if(comandos[i] == 'left'){
        let x = width*0.515;
        let y = i*height*0.11;
             fill(340,100,100);
             rect(x,height*0.886-y,width*0.027,height*0.11);    }
    }
  }
  
  function preload(){
  chao = loadImage("sprits/chão.svg")
  parede = loadImage("sprits/parede.svg")
  
  }
  
    function mapa() {
      for(let i = 0; i<map.length;i++){
          for(let j = 0;j<map[0].length;j++){
          
            if(map[i][j] =='0'){
              let x = j*width*0.05;
              let y = i*height*0.11;
              
              image(parede,x-width*0.025,y-height*0.05,width*0.1,height*0.22); 
              
           }
          
            if(map[i][j] =='1'){
             let x = j*width*0.05;
             let y = i*height*0.11;
             fill(255);
             image(chao,x-width*0.025,y-height*0.05,width*0.1,height*0.22); 
             
          }
  
          if(map[i][j] =='2'){
              let x = j*width*0.05;
              let y = i*height*0.11;
              fill(50);
              rect(x,y,width*0.05,height*0.11); 
              
           }
  
          }
      }
    }
  
    function player(){
      
      fill(50,100,100);
      let playe = ellipse(m*width*0.05+width*0.025, n*height*0.11+height*0.055, width*0.05, height*0.11);
      playe.id = "jogador";
    }
  
    function objetivo(){
      for(let i = 0; i<map.length;i++){
          for(let j = 0;j<map[0].length;j++){
          if(map[i][j] =='3'){
              let x = j*width*0.05+width*0.025;
              let y = i*height*0.11+height*0.055;
              fill(200,50,100); 
              ellipse(x, y, width*0.025, height*0.055);
          }
      }
      }
    }

  

    //Função que coloca o bloco "esquerda" no vetor
    function esquerda(){
      comandos.push('left');
      console.log(comandos);
  }
  //Função que coloca o bloco "direita" no vetor
  function direita(){
    comandos.push('right');
    console.log(comandos);
}
  //Função que coloca o bloco "cima" no vetor
function cima(){
  comandos.push('up');
  console.log(comandos);
}
//Função que coloca o bloco "baixo" no vetor
function baixo(){
  comandos.push('down');
  console.log(comandos);
}
 

//BOTÃO DE EXECUTAR - Lê os comandos de cada bloco e implemento no movimento do jogador
function exec(){
 
   do{
        
        if(comandos[0] == 'down'){
          if(n<6){
          n++;
          
                  } 
          if(map[n][m]=='2')
          {
          n--;
          }

  if(map[n][m]=='3')
  {
   map[n][m]='-';
   
   obj = true;
   
  }
   tira(); 
}

if(comandos[0] == 'up'){
  
        if(n>1){
         n--;
         
        } 
   if(map[n][m]=='2')
  {
   n++;
  }

  if(map[n][m]=='3')
  {
   map[n][m]='-';
   obj = true;
  }
  tira();
}

if(comandos[0] =='right'){
  
  if(m<6){
    m++;
    
   } 

   if(map[n][m]=='2')
  {
   m--;
  }

  if(map[n][m]=='3')
  {
   map[n][m]='-';
   obj = true;
  }
  tira();
}

if(comandos[0] == 'left'){
  if(m>1){
    m--;
    
   } 
   if(map[n][m]=='2')
   {
    m++;
   }

   if(map[n][m]=='3')
   {
    map[n][m]='-';
    obj = true;
   }
   tira();
  }


if(obj==true)
{
vitory();
}

function tira(){
  comandos.shift();
}
console.log(comandos);



}while(comandos.length>=1);
if(obj==false)
{
fail();}
}



  // function keyPressed(){
  //   if (keyCode === LEFT_ARROW){
  //      if(m>1){
        
  //        m--;
  //      } 
  //      if(map[n][m]=='2')
  //      {
  //       m++;
  //      }

  //      if(map[n][m]=='3')
  //      {
  //       map[n][m]='-';
  //      }


  //   }

  //   if (keyCode === RIGHT_ARROW){
  //     let befoX = m;
  //       if(m<6){
  //          m = m+1;
  //         let targedX = m;
  //         let dx = targedX-befoX;
  //         console.log(befoX);
  //          console.log(m);
  //          console.log(dx);
  //          while(easing<dx){
  //           dx*easing;
  //          }
  //         console.log(m);
  //       } 

  //       if(map[n][m]=='2')
  //      {
  //       m--;
  //      }

  //      if(map[n][m]=='3')
  //      {
  //       map[n][m]='-';
  //      }
  //    }

  //    if (keyCode === UP_ARROW){
      
  //     iniciar = true;
  //     if(temp>1000){
  //       if(n>1){
  //        n--;
  //        iniciar=false;
  //       } 
  //       if(map[n][m]=='2')
  //      {
  //       n++;
  //      }

  //      if(map[n][m]=='3')
  //      {
  //       map[n][m]='-';
  //      }
  //    }
  //   }
  //    if (keyCode === DOWN_ARROW){
  //       if(n<6){
  //        n++;
  //       } 
  //       if(map[n][m]=='2')
  //      {
  //       n--;
  //      }

  //      if(map[n][m]=='3')
  //      {
  //       map[n][m]='-';
  //       vitory();
  //      }
  //    }
  // }

  