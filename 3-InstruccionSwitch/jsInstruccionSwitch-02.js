function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
			alert("Todavia no llego el invierno.");
		break;
		case "Julio":
		case "Agosto":
			alert("Abrigate que hace frio");
		break;
		default: alert("Ya pasamos el frio, ahora calor!!");
	}


}//FIN DE LA FUNCIÓN