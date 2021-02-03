/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	let dato = prompt("Ingrese un dato");
	txtIdNombre = document.getElementById("txtIdNombre");
	txtIdNombre.value = dato;
}

