const tamano = parseInt(prompt('Introduce el tamaño del arreglo'));
const multiplo = parseInt(prompt('Introduce el número para generar los múltiplos'));


function llenarArregloConMultiplos(tamano, multiplo) {
  const arreglo = [];
  for (let i = 1; i <= tamano; i++) {
    arreglo.push(i * multiplo);
  }
  return arreglo;
}


function imprimirArreglo(arreglo) {
  console.log(`[${arreglo.join(', ')}]`);
}


const miArreglo = llenarArregloConMultiplos(tamano, multiplo);
imprimirArreglo(miArreglo);