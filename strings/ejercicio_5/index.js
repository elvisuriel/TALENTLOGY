let cadena = prompt("introduce nombre");
let letra = prompt("introduce vocal")
esVocal(letra);

function esVocal(letra) {
   let arrayCadena = cadena.split("")
   let nuevaCadena = []

   /*if (["a", "e", "i", "o", "u"].includes(letra)){
      console.log("salto al vacio")
   }
*/
   if (letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u') {

      arrayCadena.forEach((letraArray) => {
         if (letraArray === letra) {
            nuevaCadena.push(letraArray.toUpperCase())
         } else {
            nuevaCadena.push(letraArray)
         }
      })

      let cadena2 = nuevaCadena.join("")
      console.log(cadena2)


   } else {
      console.log("no es vocal")
   }
}









