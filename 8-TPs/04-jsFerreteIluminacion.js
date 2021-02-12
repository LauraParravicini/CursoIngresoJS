/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
    let cantLamp = parseInt(document.getElementById("txtIdCantidad").value);
    let marca = document.getElementById("Marca").value;
    let total, impuesto;
    let precioUnidad = 35;
    switch(cantLamp){   
        case 3:
            if(marca == "ArgentinaLuz"){
                precioUnidad -= precioUnidad * 15/100;
            }else if(marca == "FelipeLamparas"){
                precioUnidad -= precioUnidad * 10/100;
            }else{
                precioUnidad -= precioUnidad * 5/100;
            }        
        break;
        case 4:
            if(marca == "ArgentinaLuz" || marca == "FelipeLamparas"){
                precioUnidad -= precioUnidad * 25/100;
            }else{
                precioUnidad -= precioUnidad * 20/100;
            }
        break;
        case 5:
            if(marca == "ArgentinaLuz"){
                precioUnidad -= precioUnidad * 40/100;
            }else{
                precioUnidad -= precioUnidad * 30/100;   
            }
        break;
        default: 
            if(cantLamp >= 6){
                precioUnidad -= precioUnidad * 50/100;  
            }
        break;
    }
    
    total = cantLamp * precioUnidad;
    
    if(total > 120){
        impuesto = total *10/100;
        alert("Usted pago de ISSB" + impuesto);
        total += impuesto;
    }
    document.getElementById("txtIdprecioDescuento").value = total;
}
