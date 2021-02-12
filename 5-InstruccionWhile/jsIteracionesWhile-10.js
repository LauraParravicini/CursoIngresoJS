/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	let seguir = "s";
	let numero, promPosit, difPosNeg, resto;
	let promNeg = 0;
	let sumaPos = 0;
	let sumaNeg = 0;
	let cantPos = 0;
	let cantNeg = 0;
	let cantCeros = 0;
	let cantPar = 0;
	while(seguir == "s"){
		numero = parseInt(prompt("Ingrese un numero: "));
		
		if(numero > 0){
			sumaPos += numero;
			cantPos++;
		}else if(numero < 0){
			sumaNeg += numero;
			cantNeg++;
		}else{
			cantCeros++;
		}
		resto = numero % 2;
		if(resto == 0) cantPar++;

		if(cantPos > 0) promPosit = sumaPos / cantPos;
		
		if(cantNeg > 0) promNeg = sumaNeg / cantNeg;
		difPosNeg = sumaPos - sumaNeg;

		seguir = prompt("Quiere seguir ingresando datos? s/n ");
	}
	document.write(sumaPos + " " + sumaNeg + " " + cantPos + " " + cantNeg + " " + cantCeros + " " + cantPar + " " + promPosit + " " + promNeg + " " + difPosNeg);
}//FIN DE LA FUNCIÓN