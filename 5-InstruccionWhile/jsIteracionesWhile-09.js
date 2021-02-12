/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	
	let seguir = "s";
	let numero;
	let maximo = 0;
	let minimo = Number.MAX_VALUE;
	while(seguir == "s"){
		numero = parseInt(prompt("Ingrese un numero: "));	
		if(maximo < numero){
			maximo = numero;
		}
		if(numero < minimo){
			minimo = numero;
		}
		seguir = prompt("Quiere seguir ingresando datos? s/n ");
	}
	document.getElementById("txtIdMaximo").value = maximo;
	document.getElementById("txtIdMinimo").value = minimo;
}//FIN DE LA FUNCIÓN