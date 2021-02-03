/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	let txtIdNombre = document.getElementById("txtIdNombre").value;
	let txtIdEdad = document.getElementById("txtIdEdad").value;
	let titulo = "Usted se llama " + txtIdNombre + " y tiene " + txtIdEdad + " años"; 
	alert(titulo);
}

