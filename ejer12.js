let modelo = parseInt(prompt("Ingrese el número de modelo de su automóvil:"));
let esDefectuoso = false;

for (let i = 0; i < 11; i++) {
    let modeloDefectuoso = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780][i];
    if (modelo === modeloDefectuoso) {
        esDefectuoso = true;
        break;
    }
}

if (esDefectuoso) {
    alert("El automóvil está defectuoso, llevar a garantía.");
} else {
    alert("El modelo ingresado no presenta defectos conocidos.");
}
