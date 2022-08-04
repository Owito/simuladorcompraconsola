//Bienvenidos al simulador interactivo de precios de la tienda de Carlos//
let producto = prompt("¿Qué producto quieres adquirir? \n1.PS5 \n2.Nintendo \n3.XBOX")
let cuotas = 2;
let PS5 = 60000;
let Nintendo = 200000;
let XBOX = 30000;




const calcularValorCuota = (cuotas) => {

    if ((producto == "1") || (producto == "PS5") || (producto == "pS5") || (producto == "Ps5")) {
        do {
            alert(` El precio de lista de la PS5 es de: $${PS5}`)
            porcentajeCuota = PS5 * 0.10;
            valorFinal = porcentajeCuota * cuotas;
            nuevoPrecioPS5 = PS5 + valorFinal;
            valorCuota = nuevoPrecioPS5 / cuotas;
            alert(`En ${cuotas} cuotas te quedaria el precio de la PS5 en $${nuevoPrecioPS5} y el valor de cada cuota en $${valorCuota}`);
            cuotas++;
        } while (cuotas <= 12)
    } else if ((producto == "2") || (producto == "Nintendo") || (producto == "nintendo") || (producto == "NINTENDO")) {
        do {
            alert(` El precio de lista de la Nintendo es de: $${Nintendo}`)
            porcentajeCuota = Nintendo * 0.10;
            valorFinal = porcentajeCuota * cuotas;
            nuevoPrecioNintendo = Nintendo + valorFinal;
            valorCuota = nuevoPrecioNintendo / cuotas;
            alert(`En ${cuotas} cuotas te quedaria el precio de la Nintendo en $${nuevoPrecioNintendo} y el valor de cada cuota en $${valorCuota}`);
            cuotas++;
        } while (cuotas <= 12)
    } else if ((producto == "3") || (producto == "XBOX = ") || (producto == "xbox") || (producto == "Xbox")) {
        do {
            alert(` El precio de lista de la XvoxnuevoPrecioXvox es de: ${XBOX}`)
            porcentajeCuota = XBOX * 0.10;
            valorFinal = porcentajeCuota * cuotas;
            nuevoPrecioXvox = XBOX + valorFinal;
            valorCuota = nuevoPrecioXvox / cuotas;
            alert(`En ${cuotas} cuotas te quedaria el precio de la Webcam en $$ {nuevoPrecioXvox el valor de cada cuota en $${valorCuota}`);
            cuotas++;
        } while (cuotas <= 12)
    }


}


calcularValorCuota(cuotas)