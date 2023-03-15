let x = 0; 
        

        
while (x < 3) {
let cadena;
cadena = prompt('Ingrese su nombre');
cadena = cadena.toLowerCase();
document.write(cadena+ "</br>")

cadena = cadena.toUpperCase()
document.write(cadena.toUpperCase());

cadena = ' MI TEXTO DE PRUEBA ';
cadena = cadena.toLowerCase();
document.write(cadena);

let primeraLetra = cadena[0].toUpperCase();

console.log(primeraLetra);
document.write(cadena);
// devuelve la letra 'H' en este caso

 x = x + 1;
}
