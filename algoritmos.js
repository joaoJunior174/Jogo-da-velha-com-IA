//Essa classe guarda todas as possibilidades que possam existir para um determinado
class Estado {
  constructor(pos1, pos2,pos3, pos4,pos5, pos6,pos7, pos8,pos9) {
    this.pos1 = pos1;
    this.pos2 = pos2;
    this.pos3 = pos3;
    this.pos4 = pos4;
    this.pos5 = pos5;
    this.pos6 = pos6;
    this.pos7 = pos7;
    this.pos8 = pos8;
    this.pos9 = pos9;
  }
}

//função que verifica se o estado passado sobre o valor informado é um estado terminal ou não
function terminal(S1,valor){

    //cada if verifica se o jogo esta completo nas colunas, linhas ou diagonais. Se tiver completo em uma dessas possibilidade
    //ele vai retornar um valor dependendo da varável "valor", que seria "X" ou "O" 
    //antes de calcular a função avaliação, verifico se o estado é terminal, se for eu retorno como valor da função, 10 ou -10
    //10 porque como são apenas dois níveis, então possa ser que quando se calcula a função utildiade
    // o valor seja 2, -2, 1 .... e isso atrapalha o funcionamento do algoritmo, que deveria ir até todos os estados terminais, tendo apenas como
    //valores possíveis 0,1 e -1, o que não é o caso. Por conta disso, se o jogador ganhar numa possibilidade ou perder, o valor retornado é 10 caso
    //o computador ganhe, ou -10 se o jogador ganhar, fazendo com que essa possibilidade seja a mais importante para a tomade de decição do computador  
    if(S1.pos1 == valor && S1.pos4 == valor && S1.pos7 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }


    if(S1.pos2 == valor && S1.pos5 == valor && S1.pos8 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }


    if(S1.pos3 == valor && S1.pos6 == valor && S1.pos9 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }


    if(S1.pos1 == valor && S1.pos2 == valor && S1.pos3 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }

    if(S1.pos4 == valor && S1.pos5 == valor && S1.pos6 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }

    if(S1.pos7 == valor && S1.pos8 == valor && S1.pos9 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }


    if(S1.pos1 == valor && S1.pos5 == valor && S1.pos9 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }


    if(S1.pos3 == valor && S1.pos5 == valor && S1.pos7 == valor){

        if(valor == "X"){
        	return -10;
        }else{

        	return 10;
        }
    }

	return -1;

}
//funçção que calcula a heuristica utilizada no jogo da velha, que seria o número de jogadas possíveis do computador - jogador
//como estou olhando a jogada pela perspectiva do computador, então tenho que fazer "O" - "X" (número de jogadas do computador - jogador humano)
function funcaoAvaliacao(S1){

    var contx=0;
    var conto=0;
    //antes de calcular a função avaliação, verifico se o estado é terminal, se for eu retorno como valor da função, 10 ou -10
    //10 porque como são apenas dois níveis, então possa ser que quando se calcula a função utildiade
    // o valor seja 2, -2, 1 .... e isso atrapalha o funcionamento do algoritmo, que deveria ir até todos os estados terminais, tendo apenas como
    //valores possíveis 0,1 e -1, o que não é o caso. Por conta disso, se o jogador ganhar numa possibilidade ou perder, o valor retornado é 10 caso
    //o computador ganhe, ou -10 se o jogador ganhar, fazendo com que essa possibilidade seja a mais importante para a tomade de decição do computador   
    var termx = terminal(S1,"X");
    var termo = terminal(S1,"O");

    if(termx == -10){

    	return termx;
    }
    else if(termo == 10){
        
        return termo;

    }
    else{

	    //calcula a função de avaliação na primeira coluna à esquerda
		if((S1.pos1 == "" || S1.pos1 == "X" ) && (S1.pos4 == "" || S1.pos4 == "X" ) && (S1.pos7 == "" || S1.pos7 == "X")){

	        
			contx=contx+1;
		}
	    //calcula a função avaliação na coluna do meio
		if((S1.pos2 == "" || S1.pos2 == "X" ) && (S1.pos5 == "" || S1.pos5 == "X" ) && (S1.pos8 == "" || S1.pos8 == "X")){

	        
			contx=contx+1;
		}
	    //calcula a função avalaição na última coluna à direita
	    if((S1.pos3 == "" || S1.pos3 == "X" ) && (S1.pos6 == "" || S1.pos6 == "X" ) && (S1.pos9 == "" || S1.pos9 == "X")){

	       

			contx=contx+1;
		}
	    //calcula a função avaliação na primeira linha
	    if((S1.pos1 == "" || S1.pos1 == "X" ) && (S1.pos2 == "" || S1.pos2 == "X" ) && (S1.pos3 == "" || S1.pos3 == "X")){

	         
			contx=contx+1;
		}
		//calcula a função avaliação na segunda linha
	    if((S1.pos4 == "" || S1.pos4 == "X" ) && (S1.pos5 == "" || S1.pos5 == "X" ) && (S1.pos6 == "" || S1.pos6 == "X")){

	       
			contx=contx+1;
		}
	    //calcula a função avaliação na terceira linha
	    if((S1.pos7 == "" || S1.pos7 == "X" ) && (S1.pos8 == "" || S1.pos8 == "X" ) && (S1.pos9 == "" || S1.pos9 == "X")){

			contx=contx+1;
		}

	    //calcula a função avaliação na diagonal principal
	    if((S1.pos1 == "" || S1.pos1 == "X" ) && (S1.pos5 == "" || S1.pos5 == "X" ) && (S1.pos9 == "" || S1.pos9 == "X")){

	        
			contx=contx+1;
		}

	    //calcula a função avaliação na diagonal secundaria
	    if((S1.pos3 == "" || S1.pos3 == "X" ) && (S1.pos5 == "" || S1.pos5 == "X" ) && (S1.pos7 == "" || S1.pos7 == "X")){

			contx=contx+1;
		}

	    //calcula a função de avaliação na primeira coluna à esquerda
		if((S1.pos1 == "" || S1.pos1 == "O" ) && (S1.pos4 == "" || S1.pos4 == "O" ) && (S1.pos7 == "" || S1.pos7 == "O")){

			conto=conto+1
		}
	    //calcula a função avaliação na coluna do meio
		if((S1.pos2 == "" || S1.pos2 == "O" ) && (S1.pos5 == "" || S1.pos5 == "O" ) && (S1.pos8 == "" || S1.pos8 == "O")){

			conto=conto+1;
		}
	    //calcula a função avalaição na última coluna à direita
	    if((S1.pos3 == "" || S1.pos3 == "O" ) && (S1.pos6 == "" || S1.pos6 == "O" ) && (S1.pos9 == "" || S1.pos9 == "O")){

			conto=conto+1;
		}
	    //calcula a função avaliação na primeira linha
	    if((S1.pos1 == "" || S1.pos1 == "O" ) && (S1.pos2 == "" || S1.pos2 == "O" ) && (S1.pos3 == "" || S1.pos3 == "O")){

			conto=conto+1;
		}
		//calcula a função avaliação na segunda linha
	    if((S1.pos4 == "" || S1.pos4 == "O" ) && (S1.pos5 == "" || S1.pos5 == "O" ) && (S1.pos6 == "" || S1.pos6 == "O")){

			conto=conto+1;
		}
	    //calcula a função avaliação na terceira linha
	    if((S1.pos7 == "" || S1.pos7 == "O" ) && (S1.pos8 == "" || S1.pos8 == "O" ) && (S1.pos9 == "" || S1.pos9 == "O")){

			conto=conto+1;
		}

	    //calcula a função avaliação na diagonal principal
	    if((S1.pos1 == "" || S1.pos1 == "O" ) && (S1.pos5 == "" || S1.pos5 == "O" ) && (S1.pos9 == "" || S1.pos9 == "O")){

			conto=conto+1;
		}

	    //calcula a função avaliação na diagonal secundaria
	    if((S1.pos3 == "" || S1.pos3 == "O" ) && (S1.pos5 == "" || S1.pos5 == "O" ) && (S1.pos7 == "" || S1.pos7 == "O")){

			conto=conto+1;
		}


	    return conto-contx;
    }
} 

//função que minimza a jogada do computador e maximiza a jogada do jogador humano
function fazerMin(S1,valor){

    //variável de controle que armazena o menor valor retornada da função de avaliação, foi colocado um valor muito grande
    //para pegar o primeiro valor que encontrar
    var minValue = 1000;

   //os ifs abaixo verificam as 9 possibilidade possíveis (se existir), para analisar a jogada do jogador humano
   if(S1.pos1 == ""){

      //como são apenas dois níveis, não faz sentido chamar a função max, então a função min foi modificada para chamar direto a função avaliação
      //o que se retorna dela é um número que maximiza a jogada do jogador (ou minimiza a do computador)
      //o estado criado aqui seria se a jogada do jogador posse na primeira linha e primeira coluna na matriz do jogo da velha
      //onde é passada a variável "valor"
      var val1 = funcaoAvaliacao(new Estado(valor,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9));
      minValue = Math.min(minValue,val1);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir 
   if(S1.pos2 == ""){

      var val2 = funcaoAvaliacao(new Estado(S1.pos1,valor,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9));
   	  minValue = Math.min(minValue,val2);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos3 == ""){
   	
   	  var val3 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,valor,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9));
      minValue = Math.min(minValue,val3);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos4 == ""){
   	
      var val4 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,S1.pos3,valor,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9));
      minValue = Math.min(minValue,val4);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos5 == ""){
   	
      var val5 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,valor,S1.pos6,S1.pos7,S1.pos8,S1.pos9));
      minValue = Math.min(minValue,val5);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos6 == ""){
   	
      var val6 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,valor,S1.pos7,S1.pos8,S1.pos9));
      minValue = Math.min(minValue,val6);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos7 == ""){
   	
      var val7 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,valor,S1.pos8,S1.pos9));
      minValue = Math.min(minValue,val7);
   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos8 == ""){
   	  
   	  var val8 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,valor,S1.pos9)); 
      minValue = Math.min(minValue,val8);

   }
   //vide explicação no primeiro "if", a lógica segue igual para os outros estados que possam existir
   if(S1.pos9 == ""){
   	
      var val9 = funcaoAvaliacao(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,valor));
      minValue = Math.min(minValue,val9);
   }
    
   return minValue;
   
}

//função que calcula o máximo dos possíveis estados seguintes
function fazerMax(S1,valor){

  //variável que serve para guarda o maior valor possível entre as possibilidades> Um valor muito pequeno foi atribuído para pegar 
  //necessariamente o primeiro valor maior que este
  var maxValue=-1000;
  //variável que armazena a posíção que tem o maior valor, retornando a posição que o computador deveria fazer
  var pos=-1;

   //abaixo, é verificado os possíveis estados seguintes ao estado atual, que são no máximo nove, por isso os 9 if's
   if(S1.pos1 == ""){

       //para cada possibilidade, é colocado o "valor" na posição possível, no caso o "O". Primeiro é verificado se esse estado é um terminal
       //se ele for um terminal, então retorna o valor desse estado sem precisar ver o estado seguinte e calcular a função de avaliação
       var termo = terminal(new Estado(valor,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"O");
 
       //se valor 10 (valor para se o estado é terminal). 10 porque como são apenas dois níveis, então possa ser que quando se calcula a função utildiade
       // o valor seja 2, -2, 1 .... e isso atrapalha o funcionamento do algoritmo, que deveria ir até todos os estados terminais, tendo apenas como
       //valores possíveis 0,1 e -1, o que não é o caso. Por conta disso, se o jogador ganhar numa possibilidade ou perder, o valor retornado é 10 caso
       //o computador ganhe, ou -10 se o jogador ganhar, fazendo com que essa possibilidade seja a mais importante para a tomade de decição do computador
       if(termo == 10){
       	  return 1;
       } 

      //caso o estado atual não seja um terminal, então chama a função max para o estado passando como valor o "X", que seria a sua vez (jogador)
      var val1 = fazerMin(new Estado(valor,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"X");
      maxValue = Math.max(maxValue,val1);
         if(maxValue == val1){
         	 pos=1
         }
   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos2 == ""){

      var termo = terminal(new Estado(S1.pos1,valor,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"O");

       if(termo == 10){
       	  return 2;
       } 

      var val2 = fazerMin(new Estado(S1.pos1,valor,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"X");
   	  maxValue = Math.max(maxValue,val2);
   	    if(maxValue == val2){
         	 pos=2;
         }
   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos3 == ""){
   	
      var termo = terminal(new Estado(S1.pos1,S1.pos2,valor,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"O");  
 
       if(termo == 10){
       	  
       	  return 3;
       } 

   	  var val3 = fazerMin(new Estado(S1.pos1,S1.pos2,valor,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"X");
      maxValue = Math.max(maxValue,val3);
       
       if(maxValue == val3){
         	 pos=3;
         }

    }
    //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos4 == ""){
   	
      var termo = terminal(new Estado(S1.pos1,S1.pos2,S1.pos3,valor,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"O");

       if(termo == 10){
       	  return 4;
       } 

      var val4 = fazerMin(new Estado(S1.pos1,S1.pos2,S1.pos3,valor,S1.pos5,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"X");
      maxValue = Math.max(maxValue,val4);
   
      if(maxValue == val4){
         	 pos=4;
         }

   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos5 == ""){
   	
       var termo = terminal(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,valor,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"O");

       if(termo == 10){
       	  return 5;
       } 

      var val5 = fazerMin(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,valor,S1.pos6,S1.pos7,S1.pos8,S1.pos9),"X");
      maxValue = Math.max(maxValue,val5);

      if(maxValue == val5){
         	 pos=5;
         }
   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos6 == ""){
   	  
      var termo = terminal(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,valor,S1.pos7,S1.pos8,S1.pos9),"O");
      
       if(termo == 10){
       	  return 6;
       } 


      var val6 = fazerMin(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,valor,S1.pos7,S1.pos8,S1.pos9),"X");
      maxValue = Math.max(maxValue,val6);

      if(maxValue == val6){
         	 pos=6;
         }
   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos7 == ""){
   	
      var termo = terminal(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,valor,S1.pos8,S1.pos9),"O");

       if(termo == 10){
       	  return 7;
       } 

      var val7 = fazerMin(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,valor,S1.pos8,S1.pos9),"X");
      maxValue = Math.max(maxValue,val7);
   
      if(maxValue == val7){
         	 pos=7;
         }
   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos8 == ""){
   	  
      var termo = terminal(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,valor,S1.pos9),"O");

       if(termo == 10){
       	  return 8;
       } 

   	  var val8 = fazerMin(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,valor,S1.pos9),"X"); 
      maxValue = Math.max(maxValue,val8);

      if(maxValue == val8){
         	 pos=8;
         }

   }
   //ver explicação dos if e seu conteúdo logo acima :), a lógica é a mesma desde " if(S1.pos1 == "") " até o útimo if
   if(S1.pos9 == ""){
   	
      var termo = terminal(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,valor),"O");

       if(termo == 10){
       	  return 9;
       } 

      var val9 = fazerMin(new Estado(S1.pos1,S1.pos2,S1.pos3,S1.pos4,S1.pos5,S1.pos6,S1.pos7,S1.pos8,valor),"X");
      maxValue = Math.max(maxValue,val9);
 
      if(maxValue == val9){
         	 pos=9;
         }

   }
   //retorna a posição que a máquina deve jogar
   return pos;

}

function computadorFazMovimento(){

    //pegar os valores atuais do jogo
    var v1 = document.getElementById("1").innerHTML;
    var v2 = document.getElementById("2").innerHTML;
    var v3 = document.getElementById("3").innerHTML;
    var v4 = document.getElementById("4").innerHTML;
    var v5 = document.getElementById("5").innerHTML;
    var v6 = document.getElementById("6").innerHTML;
    var v7 = document.getElementById("7").innerHTML;
    var v8 = document.getElementById("8").innerHTML;
    var v9 = document.getElementById("9").innerHTML;

    //criar uma instância do objeto que guarda o estado de cada celula do jogo
    var S1 = new Estado(v1,v2,v3,v4,v5,v6,v7,v8,v9);

    //aqui o computador faz sua jogada, colcoando o simbolo "O" na posição melhor disponível disponível
    //o jogo é verificad na perspectiva do computador, a árvore de decisão é construída para ele, começando com um max e um min, com apenas dois níveis.
    //se você fizer uma jogada que exige um nível de conhecimento maior que dois níveis, você ganha
    var pos = fazerMax(S1,"O");
    
    if(pos != -1){
     
       document.getElementById(pos).innerHTML = "O";    

       var v1 = document.getElementById("1").innerHTML;
       var v2 = document.getElementById("2").innerHTML;
       var v3 = document.getElementById("3").innerHTML;
       var v4 = document.getElementById("4").innerHTML;
       var v5 = document.getElementById("5").innerHTML;
       var v6 = document.getElementById("6").innerHTML;
       var v7 = document.getElementById("7").innerHTML;
       var v8 = document.getElementById("8").innerHTML;
       var v9 = document.getElementById("9").innerHTML;  

       termo = terminal(new Estado(v1,v2,v3,v4,v5,v6,v7,v8,v9),"O");

       if(termo != -1){

           alert("Você perdeu!");
           document.getElementById("1").innerHTML="";
           document.getElementById("2").innerHTML="";
           document.getElementById("3").innerHTML="";
           document.getElementById("4").innerHTML="";
           document.getElementById("5").innerHTML="";
           document.getElementById("6").innerHTML="";
           document.getElementById("7").innerHTML="";
           document.getElementById("8").innerHTML="";
           document.getElementById("9").innerHTML="";

       }
       //se o computador jogou primeiro, esse if vai verificar a ultima jogada dele para ver se a partida acabou ou não
       else if(v1!="" && v2!="" && v3!="" && v4!="" && v5!="" && v6!="" && v7!="" && v8!="" && v9!=""){

           alert("Empatou!");
           document.getElementById("1").innerHTML="";
           document.getElementById("2").innerHTML="";
           document.getElementById("3").innerHTML="";
           document.getElementById("4").innerHTML="";
           document.getElementById("5").innerHTML="";
           document.getElementById("6").innerHTML="";
           document.getElementById("7").innerHTML="";
           document.getElementById("8").innerHTML="";
           document.getElementById("9").innerHTML="";

       }

    }else{

    	alert("Empatou!");
        document.getElementById("1").innerHTML="";
        document.getElementById("2").innerHTML="";
        document.getElementById("3").innerHTML="";
        document.getElementById("4").innerHTML="";
        document.getElementById("5").innerHTML="";
        document.getElementById("6").innerHTML="";
        document.getElementById("7").innerHTML="";
        document.getElementById("8").innerHTML="";
        document.getElementById("9").innerHTML="";	
    }
}
//função apenas com o objetivo de marcar o simbolo a ser colocado, ela também verifica se você ganhou o jogo ou não
function marcarSimbolo(objeto){

 //so é colocad oo X na posição escolhida se ela está disponível
 if(objeto.innerHTML == ""){

    objeto.innerHTML = 'X';
    //pega os valores atuais do jogo
    var v1 = document.getElementById("1").innerHTML;
    var v2 = document.getElementById("2").innerHTML;
    var v3 = document.getElementById("3").innerHTML;
    var v4 = document.getElementById("4").innerHTML;
    var v5 = document.getElementById("5").innerHTML;
    var v6 = document.getElementById("6").innerHTML;
    var v7 = document.getElementById("7").innerHTML;
    var v8 = document.getElementById("8").innerHTML;
    var v9 = document.getElementById("9").innerHTML;
 
    //verifica se o estado atual é um terminal para o jogador
    termx = terminal(new Estado(v1,v2,v3,v4,v5,v6,v7,v8,v9),"X");

    //verifica se você ganhou
    if(termx != -1){
    	alert("Você ganhou!");
    	document.getElementById("1").innerHTML="";
        document.getElementById("2").innerHTML="";
        document.getElementById("3").innerHTML="";
        document.getElementById("4").innerHTML="";
        document.getElementById("5").innerHTML="";
        document.getElementById("6").innerHTML="";
        document.getElementById("7").innerHTML="";
        document.getElementById("8").innerHTML="";
        document.getElementById("9").innerHTML=""; 
    }
    //se você não ganhou, então o jogo continua
    else{
     //nessa função contém a lógica da jogada do computador
     computadorFazMovimento();
    }
 
 }

}
//função para o computador jogar primeiro ao clicar no botão
function iniciarJogadaPc(){

   document.getElementById("1").innerHTML="";
   document.getElementById("2").innerHTML="";
   document.getElementById("3").innerHTML="";
   document.getElementById("4").innerHTML="";
   document.getElementById("5").innerHTML="";
   document.getElementById("6").innerHTML="";
   document.getElementById("7").innerHTML="";
   document.getElementById("8").innerHTML="";
   document.getElementById("9").innerHTML="";
   computadorFazMovimento();

}