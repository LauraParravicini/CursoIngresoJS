function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Febrero":
			alert("Mes con 28 dias");
		break;
		
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Mes con 31 dias");
		break;

		default: alert("Mes con 30 dias");
	}

}//FIN DE LA FUNCIÓN