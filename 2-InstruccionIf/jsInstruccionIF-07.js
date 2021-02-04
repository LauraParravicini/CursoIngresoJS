function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	let estado_civil = document.getElementById("estadoCivil").value;
	if(edad < "18" && estado_civil != "Soltero"){
		alert("Es muy pequeño para no ser soltero");
	}

}//FIN DE LA FUNCIÓN