/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	let sexo = prompt("Ingrese sexo: ");
	while(sexo != "f" && sexo != "m"){
		sexo = prompt("Ingrese sexo: ");
	}
	document.getElementById("txtIdSexo").value = sexo;
}//FIN DE LA FUNCIÓN