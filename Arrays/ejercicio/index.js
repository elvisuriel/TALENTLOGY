
Array.prototype.random = function () {
  const random = this[Math.floor(Math.random() * (this.length -1 ))];
  return random;
}



function frutasArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function randomElements(array, quantity) {
return frutasArray([...array]).slice(0, quantity);
}
let frutas = ['manzana','banana','uva','sandía','melón', 'pera', 'naranja', 'piña'];

console.log(randomElements(frutas,2));







const frutass = ["pera", "manzana", "banano", "lulo", "melon", "mandarina"];


console.log("El arreglo es: ");

console.log(frutass);

console.log("Y un aleatorio es: ");

