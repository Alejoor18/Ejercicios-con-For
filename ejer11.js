let pitido, discoGira;

for (let i = 0; i < 2; i++) {
    if (i === 0) pitido = prompt("¿La computadora emite un pitido al iniciar? (si/no)");
    if (i === 1) discoGira = prompt("¿El disco duro gira? (si/no)");
}

if (pitido === "si" && discoGira === "si") {
    alert("Póngase en contacto con el técnico de apoyo");
} else if (pitido === "si" && discoGira === "no") {
    alert("Verificar contactos de la unidad");
} else if (pitido === "no" && discoGira === "no") {
    alert("Traiga la computadora para repararla en la central");
} else {
    alert("Compruebe las conexiones de altavoces");
}
