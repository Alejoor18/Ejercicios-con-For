let operador = prompt("Ingrese su operador (Claro, Tigo o Movistar):");
let minutos = parseInt(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));

let datosOperador = {
    "Tigo": { cargoFijo: 45000, valorMinuto: 200, valorDatos: 12000 },
    "Claro": { cargoFijo: 30000, valorMinuto: 100, valorDatos: 18000 },
    "Movistar": { cargoFijo: 40000, valorMinuto: 250, valorDatos: 8000 }
};

let total = 0;

for (let nombreOperador in datosOperador) {
    if (operador === nombreOperador) {
        let datos = datosOperador[nombreOperador];
        total = datos.cargoFijo + (minutos * datos.valorMinuto) + datos.valorDatos;
        break;
    }
}

alert(total ? `El costo total de su paquete es: $${total}` : "Operador no válido");
