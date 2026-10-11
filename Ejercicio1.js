const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese un número entero positivo (mínimo 2): ', (respuesta) => {
    const numero = parseInt(respuesta);

    if (isNaN(numero) || numero < 2 || respuesta.trim() === '') {
        console.log('Error: debe ingresar un número entero mayor o igual a 2.');
    } else {
        let contador = 2;

        console.log('Números pares:');

        while (contador <= numero) {
            console.log(contador);
            contador += 2;
        }
    }

    rl.close();
});
