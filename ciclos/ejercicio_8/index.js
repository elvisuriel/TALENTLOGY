const dato  = parseInt(prompt('Ingrese numero')); // Número del que queremos calcular el factorial
let r = 1;
for(let i = dato; i>0; i--){
    r *= i;
}
console.log(r);
document.write(r + " Es el factorial de " + dato)