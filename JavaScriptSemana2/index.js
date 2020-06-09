

function genero(){
	var genero;

	genero = document.getElementById("genero").value; // declara a variavel com o valor do input

	if(genero == 1){ //se a condição for verdadeira executa
		document.getElementById("generop").innerHTML = "Selecionou a opcao: Masculino";	
	}
	else{ // se for falsa exxecuta
		document.getElementById("generop").innerHTML = "Selecionou a opcao: Feminino";	
	}
}

function idade(){
	var idade;

	idade = document.getElementById("idade").value; // declara a variavel com o valor do input

	switch(idade){ //caso o valor da variavel seja...

	case "1":
		document.getElementById("idadep").innerHTML = "Selecionou a opcao: Menor de 17";	
	break;
	case "2":
		document.getElementById("idadep").innerHTML = "Selecionou a opcao: 18 - 30";
	break;
	case "3":
		document.getElementById("idadep").innerHTML = "Selecionou a opcao: 31 - 50";
	break;
	default:
		document.getElementById("idadep").innerHTML = "Selecionou a opcao: Maior de 36";
	}



}


function cicloFor(){
	var TextaRepetir = document.getElementById("TextaRepetir").value; // declara a variavel com o valor do input
	var VezesaRepetir = document.getElementById("VezesaRepetir").value; // declara a variavel com o valor do input
	var teste1 = 0;
	var teste2 = 2;

	if(TextaRepetir!="" && VezesaRepetir!=0){ //se as condições forem verdadeiras executa
		for(i=0; i<VezesaRepetir; i++){ // repete a quantidade de vezes da variavel
			document.getElementById("TxtRepetir").innerHTML += TextaRepetir+"<br>";
		}
	}

	//do{
		//document.getElementById("TxtRepetir").innerHTML += TextaRepetir+"<br>";
	//}while(teste1!=teste2)
}