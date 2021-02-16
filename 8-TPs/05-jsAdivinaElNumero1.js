/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
let numeroSecreto; 
let contadorIntentos = 0;

function comenzar()
{
	numeroSecreto = Math.floor(Math.random() * 100) + 1;
	alert("Numero Generado");

}

function verificar()
{
  let numeroIngresado = document.getElementById("txtIdNumero").value;
  contadorIntentos++;
  document.getElementById("txtIdIntentos").value = contadorIntentos;
	if(numeroIngresado == numeroSecreto){
    alert("Gano! con " + contadorIntentos + " intentos");
  }else if (numeroIngresado < numeroSecreto){
    alert("Falta falta..");
  }else{
    alert("Te pasaste..");
  } 
}