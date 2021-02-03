/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	let primer_numero_s = document.getElementById("txtIdNumeroUno").value;
	let segundo_numero_s = document.getElementById("txtIdNumeroDos").value;
	let primer_numero = parseInt(primer_numero_s);
	let segundo_numero = parseInt(segundo_numero_s);
	let suma = primer_numero + segundo_numero;
	alert(suma);
}

