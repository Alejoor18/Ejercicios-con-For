let angulo1, angulo2, angulo3;

for (let i = 0; i < 1; i++) {
    angulo1 = parseInt(prompt("Ingrese el primer ángulo:"));
    angulo2 = parseInt(prompt("Ingrese el segundo ángulo:"));
    angulo3 = parseInt(prompt("Ingrese el tercer ángulo:"));
}

if (angulo1 + angulo2 + angulo3 === 180) {
    alert("El triángulo es válido.");
} else {
    alert("El triángulo no es válido.");
}
