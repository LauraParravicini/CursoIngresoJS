/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let primer_precio = parseInt(document.getElementById("txtIdPrecioUno").value);
    let segundo_precio = parseInt(document.getElementById("txtIdPrecioDos").value);
    let tercer_precio = parseInt(document.getElementById("txtIdPrecioTres").value);
    let suma = primer_precio + segundo_precio + tercer_precio;
    alert("La suma es: " + suma);
}
function Promedio () 
{
    let primer_precio = parseInt(document.getElementById("txtIdPrecioUno").value);
    let segundo_precio = parseInt(document.getElementById("txtIdPrecioDos").value);
    let tercer_precio = parseInt(document.getElementById("txtIdPrecioTres").value);
    let promedio = (primer_precio + segundo_precio + tercer_precio)/3;
    alert("El promedio es: " + promedio);
}
function PrecioFinal () 
{
    let primer_precio = parseInt(document.getElementById("txtIdPrecioUno").value);
    let segundo_precio = parseInt(document.getElementById("txtIdPrecioDos").value);
    let tercer_precio = parseInt(document.getElementById("txtIdPrecioTres").value);
    let total = (primer_precio + segundo_precio + tercer_precio);
    total += total * 21 /100;
    alert("El promedio es: " + total);
}