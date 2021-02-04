function mostrar()
{
	let nota = Math.floor(Math.random() * 10) + 1;
	if(nota >= 9){
		alert("Excelente");
	}else if(nota >= 4){
		alert("Aprobo");
	}else{
		alert("La proxima");
	}
}//FIN DE LA FUNCIÓN