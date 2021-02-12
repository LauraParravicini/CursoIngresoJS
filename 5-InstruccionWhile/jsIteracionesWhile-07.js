/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	let seguir = "s";
	let numero;
	let suma = 0;
	let promedio = 0; 
	let contador = 0;
	while(seguir == "s"){
		numero = parseInt(prompt("Ingrese un numero: "));
		suma += numero;
		contador++;
		seguir = prompt("Quiere seguir ingresando datos? s/n ");
	}
	promedio = suma / contador;
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdPromedio").value = promedio;

}//FIN DE LA FUNCIÓN