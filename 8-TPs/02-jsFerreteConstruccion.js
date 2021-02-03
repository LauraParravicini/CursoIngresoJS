/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo_terreno = parseInt(document.getElementById("txtIdLargo").value);
    let ancho_terreno = parseInt(document.getElementById("txtIdAncho").value);

    let alambre = 3 * (largo_terreno * 2 + ancho_terreno * 2);
    alert("Se necesita: " + alambre + " metros de alambre.");
}
function Circulo () 
{
    let radio_terreno = parseInt(document.getElementById("txtIdRadio").value);
    let alambre = 3* 2 * Math.PI * radio_terreno;
    alert("Se necesita: " + alambre + " metros de alambre");

}
function Materiales () 
{
    let largo_terreno = parseInt(document.getElementById("txtIdLargo").value);
    let ancho_terreno = parseInt(document.getElementById("txtIdAncho").value);
    let bolsa_cemento = 2 * largo_terreno * ancho_terreno;
    let bolsa_cal = 3 * largo_terreno * ancho_terreno;
	alert("Se necesita de cemento: " + bolsa_cemento + " y de cal: " + bolsa_cal);
}