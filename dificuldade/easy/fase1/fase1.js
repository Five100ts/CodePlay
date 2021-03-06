//Painel onde ficam os blocos
function createPanel()
{
	const painel = document.getElementById('painel');
	let button = [];

	  for(let cont=0; cont<5;cont++)
    {
     //Botão para cima
		  if(cont==0)
      {
      button[cont] = document.createElement("button");
		  button[cont].innerHTML="";
      button[cont].id = "cima";
      button[cont].onclick = function()
      {
        if(iniciar==false && 1>=comandos.length)
        {
        cima()
        }
      }
		    painel.appendChild(button[cont]);
	    }
      //Botão para direita
      if(cont==1)
      {
      button[cont] = document.createElement("button");
		  button[cont].innerHTML="";
      button[cont].id = "direita";
      button[cont].onclick = function()
      {
        if(iniciar==false && 1>=comandos.length)
        {
        direita()
        }
      }
		    painel.appendChild(button[cont]);
	    }
      //Botão para baixo
      if(cont==2)
      {
      button[cont] = document.createElement("button");
		  button[cont].innerHTML="";  
      button[cont].id = "baixo";
      button[cont].onclick = function()
      {
        if(iniciar==false && 1>=comandos.length)
        {
        baixo()
        }
      }
		  painel.appendChild(button[cont]);
	  }
    //Botão para esquerda
    if(cont==3)
    {
      button[cont] = document.createElement("button");
		  button[cont].innerHTML="";
      button[cont].id = "esquerda";
      button[cont].onclick = function()
      {
        if(iniciar==false && 1>=comandos.length)
        {
        esquerda()
        }
      }
		  painel.appendChild(button[cont]);
	  }
  }
}

//Desenha o painel
(function main()
{
	createPanel();
})();

//variaveis das coordenadas do jogador
let m, n;
 //Vetor que vai receber os blocos
let comandos = [];
//Variaveis que vão definir alguns eventos
let primeiro = comandos[0];
let obj = new Boolean(false);
let iniciar = new Boolean(false);
let resu;

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
  
  function setup() 
    {
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
      
  

        // Quando o botão de confirmar for apertado, esse if ira ler cada um dos blocos e executar as instruções no robo
      if(iniciar==true)
      {
        if(everyinterval(100))
        {
          if(comandos[0]== 'right')
          { 
            if(m<12){
            m+=1;
            }
            audio5.play();
            if(map[n][m]=='0')
            {
              m=m-1;
              audio7.play();
            }

            if(map[n][m]=='3')
            {
              map[n][m]='4';
              audio6.play();
              obj = true;
              resu=1;
            }
            comandos.shift();
          }

          else if(comandos[0]== 'left')
          { 
            m-=1;
            audio5.play();
            if(map[n][m]=='0')
            {
              m=m+1;
              audio7.play();
            }

            if(map[n][m]=='3')
            {
              map[n][m]='4';
              audio6.play();
              obj = true;
              resu=1;
            }
            comandos.shift();
          }

          else if(comandos[0]== 'up')
          { 
            n-=1;
            audio5.play();
          if(map[n][m]=='0')
          {
            n=n+1;
            audio7.play();
          }

          if(map[n][m]=='3')
          {
            map[n][m]='4';
            audio6.play();
            obj = true;
            resu=1;
          }
          comandos.shift();
          }

          else if(comandos[0]== 'down')
          { 
          n+=1;
          audio5.play();
          if(map[n][m]=='0')
          {
            n=n-1;
            audio7.play();
          }

          if(map[n][m]=='3')
          {
            map[n][m]='4'; 
            audio6.play(); 
            obj = true;
            resu=1;
          }
          comandos.shift();
          }
        }
        if(comandos.length==0)
        {
          iniciar= false;
        }
        if(obj==true && iniciar==false)
        {
          resu=1;
        }

        else if(obj==false && iniciar==false)
        {
          resu=2; 
        }
      }

      if(resu==1)
      {
        setTimeout(victory,2000);
        resu=0;
      }

      if(resu==2)
      {
        setTimeout(fail,2000);
        resu=0;
      } 

      //Retangulo que divide o mapa e o bloco que recebe os blocos
      fill(260,82,74);
      rect(width*0.70,0,width*0.04,height*1.1);  
    }

    //Responsividade do canvas 
    function windowResized()
    {
      resizeCanvas(windowWidth*0.8, windowHeight*0.54);
    }

    //Recebe os blocos que o usuario interagiu e desenha
    function vetor()
    {
      for(let i = 0;i<comandos.length;i++)
      {
        if(comandos[i] == 'up')
        {
          let x = width*0.804;
          let y = i*height*0.2;
          fill(38,90,100);
          rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
          image(seta_cima,x+width*0.05,height*0.83-y,width*0.04,height*0.1);
        }
  
        if(comandos[i] == 'right')
        {
          let x = width*0.804;
          let y = i*height*0.2;
          fill(163,92,74);
          rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
          image(seta_dir,x+width*0.05,height*0.83-y,width*0.04,height*0.1);  
        }
  
        if(comandos[i] == 'down')
        {
          let x = width*0.804;
          let y = i*height*0.2;;
          fill(260,79,93);
          rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
          image(seta_bai,x+width*0.05,height*0.83-y,width*0.04,height*0.1); 
        }
  
        if(comandos[i] == 'left')
        {
          let x = width*0.804;
          let y = i*height*0.2;
          fill(340,100,100);
          rect(x,height*0.8-y,width*0.135,height*0.17,height*0.035); 
          image(seta_esq,x+width*0.05,height*0.83-y,width*0.04,height*0.1);
        }
      }
    }
    
    //Carrega os sprites
    function preload()
    {
      robo = loadImage("sprites/robo.svg")
      bateria = loadImage("sprites/bateria.svg")
      seta_esq = loadImage("icons/seta_esquerda.svg")
      seta_dir = loadImage("icons/seta_direita.svg")
      seta_cima = loadImage("icons/seta_cima.svg")
      seta_bai = loadImage("icons/seta_baixo.svg")
    }
  
    //Desenha o mapa com base nos valores da matriz
    function mapa() 
    {
      for(let i = 0; i<map.length;i++)
      {
        for(let j = 0;j<map[0].length;j++)
        { 
          if(map[i][j] =='0')
          {
            let x = j*width*0.05;
            let y = i*height*0.11;
            fill(260,78,100)
            rect(x,y,width*0.051,height*0.12);   
          }
          
          if(map[i][j] =='-')
          {
            let x = j*width*0.05;
            let y = i*height*0.11;
            fill(271,100,42);
            rect(x,y,width*0.051,height*0.12); 
          }
  
          if(map[i][j] =='2')
          {
            let x = j*width*0.05;
            let y = i*height*0.11;
            fill(0);
            rect(x,y,width*0.051,height*0.12); 
          }

          if(map[i][j] =='4')
          {
            let x = j*width*0.05;
            let y = i*height*0.11;
            fill(247,39,23);
            rect(x,y,width*0.051,height*0.12); 
          }
        }
      }
    }
  
    //Desenha o personagem controlado pelo jogador (o robô)
    function player()
    {
      let rubo = image(robo,m*width*0.048, n*height*0.075, width*0.07, height*0.19);
    }
  

    //Desenha o objetivo da fase (a bateria)
    function objetivo()
    {
      for(let i = 0; i<map.length;i++)
      {
          for(let j = 0;j<map[0].length;j++)
          {
            if(map[i][j] =='3')
            {
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
    function esquerda()
    {
      comandos.push('left');
      console.log(comandos);
    }
    //Função que coloca o bloco "direita" no vetor
    function direita()
    {
      comandos.push('right');
      console.log(comandos);
    }
    //Função que coloca o bloco "cima" no vetor
    function cima()
    {
      comandos.push('up');
      console.log(comandos);
    }
    //Função que coloca o bloco "baixo" no vetor
    function baixo()
    {
      comandos.push('down');
      console.log(comandos);
    }
 
    function run()
    {
      iniciar=true;
    }

    //Um "cronometro" para fazer os intervalos entre cada movimento do robô
    function everyinterval(n) 
    {
      if ((frameCount / n) % 1 == 0) {return true;}
      return false;
    }



