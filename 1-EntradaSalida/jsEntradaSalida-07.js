/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	let primer_numero = parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundo_numero = parseInt(document.getElementById("txtIdNumeroDos").value);
	let suma = primer_numero + segundo_numero;
	let mensaje = "La suma es: " + suma;
	alert(mensaje);	
}

function restar()
{
	let primer_numero = parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundo_numero = parseInt(document.getElementById("txtIdNumeroDos").value);
	let resta = primer_numero - segundo_numero;
	let mensaje = "La resta es: " + resta;
	alert(mensaje);	
}

function multiplicar()
{ 
	let primer_numero = parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundo_numero = parseInt(document.getElementById("txtIdNumeroDos").value);
	let mult = primer_numero * segundo_numero;
	let mensaje = "La mult es: " + mult;
	alert(mensaje);		
}

function dividir()
{
	let primer_numero = parseInt(document.getElementById("txtIdNumeroUno").value);
	let segundo_numero = parseInt(document.getElementById("txtIdNumeroDos").value);
	let division = primer_numero / segundo_numero;
	let mensaje = "La division es: " + division;
	alert(mensaje);	
}

