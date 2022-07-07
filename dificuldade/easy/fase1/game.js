function createPanel(){
	const painel = document.getElementById('painel');
	let button = [];

	for(let cont=0; cont<5;cont++){
		if(cont==0){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Up";
    
    button[cont].id = "cima";
    
    button[cont].onclick = function(){
      cima()
    }
		painel.appendChild(button[cont]);
	}

  if(cont==1){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Right";

    button[cont].id = "direita";

    button[cont].onclick = function(){
     direita()
    }
        
		painel.appendChild(button[cont]);
	}

  if(cont==2){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Down";
        
    button[cont].id = "baixo";

    button[cont].onclick = function(){
      baixo()
    }

		painel.appendChild(button[cont]);
	}

  if(cont==3){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Left";

    button[cont].id = "esquerda";

    button[cont].onclick = function(){
      esquerda()
    }

		painel.appendChild(button[cont]);
	}

  if(cont==4){
    button[cont] = document.createElement("button");
		button[cont].innerHTML="Exec";

    button[cont].onclick = function(){
     exec()
    }
        
		painel.appendChild(button[cont]);
	}

  }
}

//Negócio que pinta tundo na tela que seja HTML e fica ao rredor do bagulho
(function main(){
	createPanel();
})();




//variaveis das coordenadas do jogador
let m, n;
let comandos = [];

let primeiro = comandos[0];

let map = [

['1', '1', '1', '1', '1', '1', '1', '1'],
['1', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
['1', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
['1', ' ', '2', ' ', ' ', ' ', ' ', '1'],
['1', ' ', ' ', ' ', ' ', ' ', ' ', '1'],
['1', ' ', ' ', ' ', ' ', '3', ' ', '1'],
['1', ' ', ' ', '2', ' ', ' ', ' ', '1'],
['1', '1', '1', '1', '1', '1', '1', '1'],
]

function setup() {
    createCanvas(500, 320);
    colorMode(HSB, 360, 100, 100);
    //valor das coordenadas do jogador
    m=3;
    n=3;
    
  }
  
  function draw() {
    background(220);
    mapa();
    player();
    objetivo();
    vetor();
    
  }
function windowResized(){
	resizeCanvas(windowWidth*0.625, 320);
}

function vetor(){
  for(let i = 0;i<comandos.length;i++){
    if(comandos[i] == 'up'){
      let x = 400;
      let y = i*40;
           fill(38,90,100);
           rect(x,280-y,40,40);
    }

    if(comandos[i] == 'right'){
      let x = 400;
      let y = i*40;
           fill(163,92,74);
           rect(x,280-y,40,40);
    }

    if(comandos[i] == 'down'){
      let x = 400;
      let y = i*40;
           fill(260,82,74);
           rect(x,280-y,40,40);
    }

    if(comandos[i] == 'left'){
      let x = 400;
      let y = i*40;
           fill(340,100,100);
           rect(x,280-y,40,40);
    }
  }
}

  function mapa() {
    for(let i = 0; i<map.length;i++){
        for(let j = 0;j<map[0].length;j++){
        
          if(map[i][j] ==' '){
            let x = j*40;
            let y = i*40;
            fill(200, 150, 150);
            rect(x,y,40,40); 
            
         }
        
          if(map[i][j] =='1'){
           let x = j*40;
           let y = i*40;
           fill(255);
           rect(x,y,40,40); 
           
        }

        if(map[i][j] =='2'){
            let x = j*40;
            let y = i*40;
            fill(50);
            rect(x,y,40,40); 
            
         }

        }
    }
  }

  function player(){
    
    fill(50,100,100);
    let playe = rect(m*40, n*40, 40, 40);
    playe.id = "jogador";
  }

  function objetivo(){
    for(let i = 0; i<map.length;i++){
        for(let j = 0;j<map[0].length;j++){
        if(map[i][j] =='3'){
            let x = j*40+20;
            let y = i*40+20;
            fill(200,50,100); 
            ellipse(x, y, 20, 20);
        }
    }
    }
  }

  
//botõees
  
    function esquerda(){
      comandos.push('left');
      console.log(comandos);
      // if(m>1){
      //  m--;
       
      // } 
      // if(map[n][m]=='2')
      // {
      //  m++;
      // }

      // if(map[n][m]=='3')
      // {
      //  map[n][m]='-';
      // }
  }

  function direita(){
    comandos.push('right');
    console.log(comandos);
    // if(m<6){
    //   m++;
    //  } 

    //  if(map[n][m]=='2')
    // {
    //  m--;
    // }

    // if(map[n][m]=='3')
    // {
    //  map[n][m]='-';
    // }
}

function cima(){
  comandos.push('up');
  console.log(comandos);
  // if(n>1){
  //   n--;
  //  } 
  //  if(map[n][m]=='2')
  // {
  //  n++;
  // }

  // if(map[n][m]=='3')
  // {
  //  map[n][m]='-';
  // }
}

function baixo(){
  comandos.push('down');
  console.log(comandos);
  // if(n<6){
  //   n++;
  //  } 
  //  if(map[n][m]=='2')
  // {
  //  n--;
  // }

  // if(map[n][m]=='3')
  // {
  //  map[n][m]='-';
  // }
}
 


//BOTÃO DE EXECUTAR
function exec(){
  
while(comandos.length>=1){
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
   
  }
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
   
  }
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
   
  }
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
    
   }
}


  comandos.shift();
console.log(comandos);
}
}




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
       }
     }

     if (keyCode === UP_ARROW){
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
       }
     }
  }

  
