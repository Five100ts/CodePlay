//Painel onde cola ficam os blocos
function createPanel(){
	const painel = document.getElementById('painel');
	let button = [];

	for(let cont=0; cont<5;cont++){
    //Botão para cima
		if(cont==0){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="";
    
    button[cont].id = "cima";
    
    button[cont].onclick = function(){
      if(iniciar==false && 1>=comandos.length){
        cima()
      }
    }
		painel.appendChild(button[cont]);
	}
  //Botão para direita
  if(cont==1){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="";

    button[cont].id = "direita";

    button[cont].onclick = function(){
      if(iniciar==false && 1>=comandos.length){
     direita()
      }
    }
        
		painel.appendChild(button[cont]);
	}
   //Botão para baixo
  if(cont==2){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="";
        
    button[cont].id = "baixo";

    button[cont].onclick = function(){
      if(iniciar==false && 1>=comandos.length){
      baixo()
      }
    }

		painel.appendChild(button[cont]);
	}
   //Botão para esquerda
  if(cont==3){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="";

    button[cont].id = "esquerda";

    button[cont].onclick = function(){
      if(iniciar==false && 1>=comandos.length){
      esquerda()
      }
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
let resu;
let timer = 5;
let easing=0.5;
let eas=2;

 //Mapa formado por uma matriz
 let map = [

  ['0', '0', '0', '0', '0', '0', '0','0', '0','0', '0','0', '0', '0'],
  ['0', '-', '-', '-', '-', '-', '-','-', '-','-', '-','-', '-', '0'],
  ['0', '-', '-', '-', '-', '-', '-','-', '-','-', '-','-', '-', '0'],
  ['0', '-', '-', '-', '0', '0', '0','0', '0','-', '-','-', '-', '0'],
  ['0', '-', '-', '-', '0', '4', '4','3', '0','-', '-','-', '-', '0'],
  ['0', '-', '-', '-', '0', '0', '0','0', '0','-', '-','-', '-', '0'],
  ['0', '-', '-', '-', '-', '-', '-','-', '-','-', '-','-', '-', '0'],
  ['0', '-', '-', '-', '-', '-', '-','-', '-','-', '-','-', '-', '0'],
  ['0', '0', '0', '0', '0', '0', '0','0', '0','0', '0','0', '0', '0'],
  ]
  
  
  
  function setup() {
  
      createCanvas(windowWidth*0.8, windowHeight*0.54);
      colorMode(HSB, 360, 100, 100);
      canvas.id = 'canvas';
      //valor das coordenadas do jogador
      m=5;
      n=4;
      resu = 0;
     
    }
    
    function draw() {
      background(255)
      mapa();
      objetivo();
      vetor();
      player();
      // noStroke();
      
      console.log(everyinterval(100));
      console.log(resu);
      if(iniciar==true){
        if(everyinterval(100)){
        if(comandos[0]== 'right'){ 
          m+=1;
          if(map[n][m]=='0'){
            m=m-1;
          }

          if(map[n][m]=='3')
  {
   map[n][m]='4';
   
   obj = true;
   resu=1;
  }

        comandos.shift();
      }

    else if(comandos[0]== 'left'){ 
        m-=1;
        if(map[n][m]=='0'){
          m=m+1;
        }

        if(map[n][m]=='3')
  {
   map[n][m]='4';
   
   obj = true;
   resu=1;
   
  }

      comandos.shift();
    }

    else if(comandos[0]== 'up'){ 
      n-=1;

      if(map[n][m]=='0'){
        n=n+1;
      }

      if(map[n][m]=='3')
  {
   map[n][m]='4';
   
   obj = true;
   resu=1;
  }
    comandos.shift();
  }

  else if(comandos[0]== 'down'){ 
    n+=1;
    if(map[n][m]=='0'){
      n=n-1;
    }

    if(map[n][m]=='3')
  {
   map[n][m]='4';
   
   obj = true;
   resu=1;
  }
  comandos.shift();
}

         }

         
if(comandos.length==0){
  iniciar= false;
  
}
if(obj==true && iniciar==false)
{
  resu=1;
// vitory();
}

else if(obj==false && iniciar==false){
  resu=2;
  // fail();
  
}
        }

        if(resu==1){
          setTimeout(vitory,2000);
          resu=0;
        }

        if(resu==2){
          setTimeout(fail,2000);
          resu=0;
        }
      // strokeWeight(0);
      
      fill(260,82,74);
      rect(width*0.70,0,width*0.04,height*1.1);
      
      // console.log(m,n, obj);
    }
  function windowResized(){
    resizeCanvas(windowWidth*0.8, windowHeight*0.54);
  }

  function vetor(){
    

    for(let i = 0;i<comandos.length;i++){
      if(comandos[i] == 'up'){
        let x = width*0.804;
        let y = i*height*0.2;
             fill(38,90,100);
             rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
             image(seta_cima,x+width*0.05,height*0.83-y,width*0.04,height*0.1);

      }
  
      if(comandos[i] == 'right'){
        let x = width*0.804;
        let y = i*height*0.2;
             fill(163,92,74);
             rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
             image(seta_dir,x+width*0.05,height*0.83-y,width*0.04,height*0.1);  
              }
  
      if(comandos[i] == 'down'){
        let x = width*0.804;
        let y = i*height*0.2;;
             fill(260,79,93);
             rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
             image(seta_bai,x+width*0.05,height*0.83-y,width*0.04,height*0.1); 
              }
  
      if(comandos[i] == 'left'){
        let x = width*0.804;
        let y = i*height*0.2;
        
             fill(340,100,100);
             rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
             image(seta_esq,x+width*0.05,height*0.83-y,width*0.04,height*0.1);
            }
    }
  }
  
  function preload(){
  robo = loadImage("sprits/robo.svg")
  bateria = loadImage("sprits/bateria.svg")
  seta_esq = loadImage("icons/seta_esquerda.svg")
  seta_dir = loadImage("icons/seta_direita.svg")
  seta_cima = loadImage("icons/seta_cima.svg")
  seta_bai = loadImage("icons/seta_baixo.svg")
  
  }
  
    function mapa() {
      for(let i = 0; i<map.length;i++){
          for(let j = 0;j<map[0].length;j++){
          
            if(map[i][j] =='0'){
              let x = j*width*0.05;
              let y = i*height*0.11;
              fill(260,78,100)
              rect(x,y,width*0.051,height*0.12); 
              
           }
          
            if(map[i][j] =='-'){
             let x = j*width*0.05;
             let y = i*height*0.11;
             
             fill(271,100,42);
        
             rect(x,y,width*0.051,height*0.12); 
             
          }
  
          if(map[i][j] =='2'){
              let x = j*width*0.05;
              let y = i*height*0.11;
              fill(0);
              rect(x,y,width*0.051,height*0.12); 
              
           }

           if(map[i][j] =='4'){
            let x = j*width*0.05;
            let y = i*height*0.11;
            fill(247,39,23);
            rect(x,y,width*0.051,height*0.12); 
            
         }
  
          }
      }
    }
  
    function player(){
      
      
     let rubo = image(robo,m*width*0.048, n*height*0.09, width*0.07, height*0.19);
      
    }
  
    function objetivo(){
      for(let i = 0; i<map.length;i++){
          for(let j = 0;j<map[0].length;j++){
          if(map[i][j] =='3'){
              let x = j*width*0.05+width*0.0125;
              let y = i*height*0.11+height*0.0225;
              fill(45,60,100); 
              rect(j*width*0.05,i*height*0.11,width*0.05,height*0.11);
    
              image(bateria, x, y, width*0.024, height*0.07);
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
 
function run(){
  iniciar=true;
}

function moveDown(){
  n+=1;
}


function moveUp(){
  n-=1;
}


function moveRight(){
  m+=1;
}


function moveLeft(){
  m-=1;
}

function everyinterval(n) {
  if ((frameCount / n) % 1 == 0) {return true;}
  return false;
}

//BOTÃO DE EXECUTAR - Lê os comandos de cada bloco e implemento no movimento do jogador
function exec(){
  
  // if(frameCount == 1 || everyinterval(150)){
    
   while(0<comandos.length){
    switch(comandos[0]){
        case'down':
         moveDown();
  //         if(n<12)
  //         {
  //         n++;
  //         } 
  //         if(map[n][m]=='2')
  //         {
  //         n--;
  //         }

  // if(map[n][m]=='3')
  // {
  //  map[n][m]='1';
   
  //  obj = true;
   
  // }
  //  setTimeout(tira,1000); 
break;

case 'up':
   moveUp();
  
  //       if(n>1){
  //        n--;
         
  //       } 
  //  if(map[n][m]=='2')
  // {
  //  n++;
  // }

  // if(map[n][m]=='3')
  // {
  //  map[n][m]='1';
  //  obj = true;
  // }
  // tira();
break;

case'right':
  moveRight();
  // if(m<12){
  //   m++;
    
  //  } 

  //  if(map[n][m]=='2')
  // {
  //  m--;
  // }

  // if(map[n][m]=='3')
  // {
  //  map[n][m]='1';
  //  obj = true;
  // }
  
break;

case 'left':
   moveLeft();
  // if(m>1){
  //   m--;
    
  //  } 
  //  if(map[n][m]=='2')
  //  {
  //   m++;
  //  }

  //  if(map[n][m]=='3')
  //  {
  //   map[n][m]='1';
  //   obj = true;
  //  }
  //  tira();
 break;
  
    
    }  
  } 

if(obj==true)
{
vitory();
}
// setTimeout(tira(),4000);
// function tira(){

// }
console.log(comandos);


// i++;

}
  

// if(obj==false)
// {
// fail();}





  function keyPressed(){
    if (keyCode === LEFT_ARROW){
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
       }


    }

    if (keyCode === RIGHT_ARROW){
      let befoX = m;
        if(m<6){
           m = m+1;
          let targedX = m;
          let dx = targedX-befoX;
          console.log(befoX);
           console.log(m);
           console.log(dx);
           while(easing<dx){
            dx*easing;
           }
          console.log(m);
        } 

        if(map[n][m]=='2')
       {
        m--;
       }

       if(map[n][m]=='3')
       {
        map[n][m]='-';
       }
     }

     if (keyCode === UP_ARROW){
      
      iniciar = true;
      if(temp>1000){
        if(n>1){
         n--;
         iniciar=false;
        } 
        if(map[n][m]=='2')
       {
        n++;
       }

       if(map[n][m]=='3')
       {
        map[n][m]='-';
       }
     }
    }
     if (keyCode === DOWN_ARROW){
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
        vitory();
       }
     }
  }

  
