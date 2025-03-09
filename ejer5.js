let materias = ["Física", "Química", "Biología", "Matemáticas", "Informática"];
let sumaCalificaciones = 0;

for (let i = 0; i < materias.length; i++) {
    let calificacion = parseInt(prompt("Ingrese su calificación en " + materias[i] + ":"));
    sumaCalificaciones += calificacion;
}

let porcentajeFinal = (sumaCalificaciones / 50) * 100;

let calificacionFinal;
if (porcentajeFinal < 60) {
    calificacionFinal = "Mala";
} else if (porcentajeFinal <= 80) {
    calificacionFinal = "Buena";
} else {
    calificacionFinal = "Excelente";
}

alert("Tu porcentaje es " + porcentajeFinal + "% y tu calificación es " + calificacionFinal + ".");
