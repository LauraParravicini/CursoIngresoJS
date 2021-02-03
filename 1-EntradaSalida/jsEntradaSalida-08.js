/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let primer_numero = parseInt(document.getElementById("txtIdNumeroDividendo").value);
	let segundo_numero = parseInt(document.getElementById("txtIdNumeroDivisor").value);
	let resto = primer_numero % segundo_numero;
	let mensaje = "El result: " + resto;
	alert(mensaje);
}
