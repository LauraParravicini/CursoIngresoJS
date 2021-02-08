function mostrar()
{
	/*
	una agencia de viajes debe sacar las tarifas de los viajes
					, se cobra $15.000 por cada estadia como base,
					 se pide el ingreso de una estacion del año y localidad para vacacionar para
					poder  calcular el precio final


				</br> </br>en Invierno:
				 	bariloche tiene un aumento del 20% 
					cataratas y Cordoba tiene un descuento del 10%
					Mar del plata  tiene un descuento del 20%
				</br></br> en Verano:
				 	bariloche tiene un descuento del 20% 
					cataratas y Cordoba tiene un aumento del 10%
					Mar del plata  tiene un aumento del 20%
				</br></br> en Otoño y Primavera:
				 	bariloche tiene un aumento del 10% 
					cataratas tiene un aumento del 10%
					Mar del plata  tiene un aumento del 10%
					y Cordoba tiene el precio sin descuento */

	let precioViaje = 15000;
	let estacion = document.getElementById("txtIdEstacion").value;
	let destino = document.getElementById("txtIdDestino").value;
	switch(estacion){
		case "Invierno":
			if(destino == "Cataratas" || destino == "Cordoba"){
				precioViaje -= precioViaje *10/100;
			}else if(destino == "Mar del plata"){
				precioViaje -= precioViaje *20/100;
			}else{
				precioViaje += precioViaje *20/100;
			}
		break;
		case "Verano":
			if(destino == "Cataratas" || destino == "Cordoba"){
				precioViaje += precioViaje *10/100;
			}else if(destino == "Mar del plata"){
				precioViaje += precioViaje *20/100;
			}else{
				precioViaje -= precioViaje *20/100;
			}
		break;
		case "Otoño":
		case "Primavera":
			if(destino != "Cordoba"){
				precioViaje += precioViaje *10/100;
			}
		break;
	}
	alert("El precio final es: " + precioViaje);
}//FIN DE LA FUNCIÓN