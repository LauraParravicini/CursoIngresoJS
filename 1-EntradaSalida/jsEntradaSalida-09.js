/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	let sueldo = parseFloat(document.getElementById("txtIdSueldo").value);
	sueldo += sueldo *10/100;
	document.getElementById("txtIdResultado").value = sueldo;
}
