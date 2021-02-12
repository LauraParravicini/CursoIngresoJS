function mostrar()
{
	let cont = 1;
	let numeros = parseInt(prompt("Ingrese numero: "));
	while(cont <= 4){
		numeros += parseInt(prompt("Ingrese numero: "));
		cont++;
	}

	document.getElementById("txtIdSuma").value = numeros;
	document.getElementById("txtIdPromedio").value = numeros /5;
}//FIN DE LA FUNCIÓN