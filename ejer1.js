let nombre = prompt("Ingrese su nombre:");
let horas;

for (let i = 0; i < 1; i++) {
    horas = parseInt(prompt("Ingrese el número de horas trabajadas:"));
    if (horas <= 0 || isNaN(horas)) {
        i--; 
    }
}

let tarifa = (horas <= 10) ? 30000 : 33000;
let salario = horas * tarifa;

alert(`Señor/a, ${nombre}, el número de horas es ${horas} y su salario es $${salario}`);
