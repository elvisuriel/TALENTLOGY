let cantpares = 0;
        let cantimpares = 0;
        let x = 0;
        let valor;
        while (x < 5) {
            valor = parseInt(prompt('Ingrese un valor'));
            if (valor % 2 == 0) {
                cantpares = cantpares + 1;
            } else {
                cantimpares = cantimpares + 1;
            }
            x = x + 1;
        }
        document.write('Cantidad de valores pares ingresados:' + cantpares);
        document.write('<br>');
        document.write('Cantidad de valores impares ingresados:' + cantimpares);