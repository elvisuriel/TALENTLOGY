const invertirNumero = numero => {
  
    let invertido = 0;
    while (numero != 0) {
        invertido = 10 * invertido + numero % 10
        numero = (Math.floor(numero / 10))
    }
    return invertido
};
const invertirNumeroComoCadena = numero => {
    const numeroInvertidoComoCadena = numero.toString().split("").reverse().join("");
    // Si quieres puedes hacer un parseFloat() para regresarlo como número y no como cadena
    return numeroInvertidoComoCadena;
};
// Probar
const numeros = [1, 2, 800, 912, 1000, 1283, 2811];
for (const numero of numeros) {
    const invertidoComoNumero = invertirNumero(numero);
    const invertidoComoCadena = invertirNumeroComoCadena(numero);
    console.log("El número '%s' es '%s' invertido como número, y '%s' como cadena", numero, invertidoComoNumero, invertidoComoCadena);
}