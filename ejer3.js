let tipoLavadora, cantidad, horas;

for (let i = 0; i < 1; i++) {
    tipoLavadora = parseInt(prompt("Ingrese el tipo de lavadora (1 para grande, 2 para pequeña):"));
    cantidad = parseInt(prompt("Ingrese la cantidad de lavadoras alquiladas:"));
    horas = parseInt(prompt("Ingrese las horas de alquiler:"));
}

let costoPorHora = (tipoLavadora === 1) ? 4000 : 3000;
let costoTotal = cantidad * horas * costoPorHora;

if (cantidad > 3) {
    let descuento = costoTotal * 0.03;
    costoTotal -= descuento;
}

alert("Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horas + " horas: $" + costoTotal);
