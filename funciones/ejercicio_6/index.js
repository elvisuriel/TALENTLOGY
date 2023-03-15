

function tabla() {
  let numero = parseInt(prompt("ingrese el numero"));
  multiplicador = 0;
  if (isNaN(numero)) {
    alert("digite solo numeros");
  }
  for (multiplicador = 0; multiplicador <= 20; multiplicador++) {
    resultado = multiplicador * numero;
    console.log(numero + "x" + multiplicador + "es" + resultado);
  }
} 
tabla();