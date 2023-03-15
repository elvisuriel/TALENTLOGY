let x = 0; 
        let cant1 = 0;
        let cant2 = 0;
        while (x < 5) {
            let nota;
            nota = parseInt(prompt('Ingrese nota'));
            if (nota >= 3) {
                cant1 = cant1 + 1;
            } else {
                cant2 = cant2 + 1;
            }
            x = x + 1;
        }
        document.write('Cantidad de alumnos con notas mayores o iguales a 3:' + cant1);
        document.write('<br>');
        document.write('Cantidad de alumnos con notas menores a 3:' + cant2);