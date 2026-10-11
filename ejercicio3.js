const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese el número de filas: ', (respuestaFilas) => {
    const filas = parseInt(respuestaFilas);

    if (isNaN(filas) || filas <= 0 || respuestaFilas.trim() === '') {
        console.log('Error: debe ingresar un número entero de filas mayor a 0.');
        rl.close();
        return;
    }

    rl.question('Ingrese el número de coluumnas: ', (respuestaColumnas) => {
        const columnas = parseInt(respuestaColumnas);

        if (isNaN(columnas) || columnas <= 0 || respuestaColumnas.trim() === '') {
            console.log('Error: debe ingresar un número entero de columnas mayor a 0.');
            rl.close();
            return;
        }

        console.log('\n===== CUADRÍCULA DE COORDENADAS =====');

        for (let fila = 1; fila <= filas; fila++) {
            let linea = '';

            for (let columna = 1; columna <= columnas; columna++) {
                linea += `[${fila}, ${columna}] `;
            }

            console.log(linea);
        }

        rl.close();
    });
});
