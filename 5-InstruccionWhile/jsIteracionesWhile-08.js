/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let seguir = "s";
	let numero;
	let suma = 0;
	let multipNegativos = 1;
	while(seguir == "s"){
		numero = parseInt(prompt("Ingrese un numero: "));
		
		if(numero > 0){
			suma += numero;
		}else{
			multipNegativos *= numero;
		}

		seguir = prompt("Quiere seguir ingresando datos? s/n ");
	}
	document.getElementById("txtIdSuma").value = suma;
	document.getElementById("txtIdProducto").value = multipNegativos;

}//FIN DE LA FUNCIÓN