let precioBase = 0;
let opcion = prompt("Ingrese el tamaño del sándwich (pequeño o grande):");

if (opcion === "pequeño") precioBase = 6000;
if (opcion === "grande") precioBase = 12000;

let total = precioBase;

let extras = ["tocineta", "pavo", "queso"];
let precios = [3000, 3000, 2500];

for (let i = 0; i < 3; i++) { 
    if (prompt("Desea " + extras[i] + " (sí o no):") === "sí") {
        total += precios[i];
    }
}

alert("El costo total de su sándwich es: $" + total);
