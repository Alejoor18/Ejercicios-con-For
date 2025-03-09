let opcion, valor;

for (let i = 0; i < 1; i++) {
    opcion = parseInt(prompt("Ingrese la opción de suscripción:\n1. 15 días - $18,000\n2. 30 días - $35,000\n3. 3 meses - $86,000"));
}

if (opcion === 1) {
    valor = 18000;
} else if (opcion === 2) {
    valor = 35000;
} else if (opcion === 3) {
    valor = 86000;
}

alert("El valor de su suscripción es: $" + valor);
