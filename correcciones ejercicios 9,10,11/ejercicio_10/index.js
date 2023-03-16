// Crear la matriz bidimensional
const matriz = new Array(5);
for (let i = 0; i < 5; i++) {
  matriz[i] = new Array(5);
}

// Cargar la matriz con valores numéricos enteros aleatorios
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    matriz[i][j] = Math.floor(Math.random() * 10); // Números aleatorios del 0 al 9
  }
}

// Sumar los elementos de cada fila e imprimir los resultados en pantalla
for (let i = 0; i < 5; i++) {
  let sumaFila = 0;
  for (let j = 0; j < 5; j++) {
    sumaFila += matriz[i][j];
  }
  document.write(`La suma de la fila ${i+1} es ${sumaFila}`+"<br/>");
}

// Sumar los elementos de cada columna e imprimir los resultados en pantalla
for (let j = 0; j < 5; j++) {
  let sumaColumna = 0;
  for (let i = 0; i < 5; i++) {
    sumaColumna += matriz[i][j];
  }
  document.write(`La suma de la columna ${j+1} es ${sumaColumna}`+"<br/>");
}