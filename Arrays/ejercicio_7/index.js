function duplicar(lista) {
  var resultado = [];
  for (let i = 0; i < lista.length; i++) {
    resultado.push(lista[i] * 2);
  }
  return resultado;
}
lista= [3,5,6]
console.log(duplicar(lista));
