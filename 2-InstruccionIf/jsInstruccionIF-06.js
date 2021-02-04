function mostrar()
{
	let edad = document.getElementById("txtIdEdad").value;
	if(edad >= "18"){
		alert("Es mayor de dad");
	}else if(edad >= "13" && edad <= "17"){
		alert("Es adolescente");
	}else{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN