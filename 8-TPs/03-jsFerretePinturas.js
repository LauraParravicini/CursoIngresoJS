/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let temp_fahrenh = parseInt(document.getElementById("txtIdTemperatura").value);
    let temp_grados = (temp_fahrenh - 32) * (5/9);
    alert(temp_fahrenh + " Fahrenheit son " + temp_grados + " grados centigrados.");
}

function CentigradosFahrenheit () 
{
	let temp_grados = parseInt(document.getElementById("txtIdTemperatura").value);
    let temp_fahrenh = ( temp_grados * (9/5) ) + 32;
    alert(temp_grados + " grados centigrados son " + temp_fahrenh + " Fahrenheit.");
}
