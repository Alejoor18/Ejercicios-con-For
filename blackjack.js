const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Ingrese el número de jugadores (1 o 2): ", (jugadores) => {
    let cartasCasino = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
    let puntajeCasino = cartasCasino[0] + cartasCasino[1];
    console.log("Primera carta del casino: " + cartasCasino[0]);

    let puntajes = [];

    for (let i = 0; i < jugadores; i++) {
        let cartasJugador = [Math.floor(Math.random() * 11) + 1, Math.floor(Math.random() * 11) + 1];
        let puntajeJugador = cartasJugador[0] + cartasJugador[1];
        console.log(`J${i + 1}: Tus cartas son ${cartasJugador.join(" y ")}`);
        
        rl.question(`J${i + 1}, ¿quieres pedir otra carta? (si/no): `, (respuesta) => {
            if (respuesta.toLowerCase() === "si") {
                let nuevaCarta = Math.floor(Math.random() * 11) + 1;
                puntajeJugador += nuevaCarta;
                console.log(`J${i + 1}: Tu nueva carta es ${nuevaCarta}`);
            }
            puntajes.push(puntajeJugador);
            
            if (puntajes.length == jugadores) {
                console.log("Segunda carta del casino: " + cartasCasino[1]);
                console.log("El casino tiene un total de: " + puntajeCasino);
                
                for (let j = 0; j < jugadores; j++) {
                    console.log(`J${j + 1} tiene un total de: ${puntajes[j]}`);
                    if (puntajes[j] > puntajeCasino) {
                        console.log(`J${j + 1} ganó`);
                    } else if (puntajes[j] < puntajeCasino) {
                        console.log(`J${j + 1} perdió`);
                    } else {
                        console.log(`J${j + 1} empató`);
                    }
                }
                rl.close();
            }
        });
    }
});
