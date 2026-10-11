
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('¿Cuántas notas desea ingresar?: ', (respuesta) => {
    const cantidad = parseInt(respuesta);

    if (isNaN(cantidad) || cantidad <= 0 || respuesta.trim() === '') {
        console.log('Error: debe ingresar una cantidad mayor a 0.');
        rl.close();
        return;
    }

    let suma = 0;
    let contador = 0;

    function solicitarNotas() {
        if (contador < cantidad) {
            rl.question(`Ingrese la nota ${contador + 1}: `, (entrada) => {
                const nota = parseFloat(entrada);

                if (entrada.trim() === '' || isNaN(nota)) {
                    console.log('Error: ingrese una nota numérica válida.');
                    solicitarNotas();
                    return;
                }

                suma += nota;
                contador++;

                solicitarNotas();
            });
        } else {
            const promedio = suma / cantidad;

            console.log('\n===== RESULTADOS =====');
            console.log(`Suma total: ${suma.toFixed(2)}`);
            console.log(`Promedio final: ${promedio.toFixed(2)}`);

            rl.close();
        }
    }

    solicitarNotas();
});
```
