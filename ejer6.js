let n1, n2, n3;

for (let i = 1; i <= 3; i++) {
    let numero = parseInt(prompt(`Ingrese el número ${i}:`));
    if (i === 1) n1 = numero;
    else if (i === 2) n2 = numero;
    else n3 = numero;
}

alert("El número mayor es: " + Math.max(n1, n2, n3));
