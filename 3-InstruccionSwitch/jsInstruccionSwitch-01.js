function mostrar()
{
	let mes = document.getElementById("txtIdMes").value;
	switch(mes){
		case "Enero":
			alert("Que comiences bien el año!!")
		break;
		case "Marzo":
			alert("a clases!!");
		break;
		case "Julio":
			alert("se vienen las vacaciones!!");
		break;
		case "Diciembre":
			alert("felices fiestas!!");
		break;
		default: alert("Mes al pepe");
	}

}//FIN DE LA FUNCIÓN