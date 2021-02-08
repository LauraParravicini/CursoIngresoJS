function mostrar()
{
	let destino = document.getElementById("txtIdDestino").value;
	switch(destino){
		case "Bariloche":
		case "Ushuaia":
			alert("FRIO");
		break;

		case "Cataratas":
		case "Mar del plata":
			alert("CALOR");
		break;
	}
}//FIN DE LA FUNCIÓN