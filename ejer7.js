let genero, edad, ayuda;

for (let i = 0; i < 1; i++) {
    genero = prompt("Ingrese su género (femenino/masculino):");
    edad = parseInt(prompt("Ingrese su edad:"));
}

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30) {
        ayuda = 100000;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
}

alert("El valor de ayuda mensual es: $" + ayuda);
