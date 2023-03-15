let frase=prompt("escriba una frase")
let vocal=prompt("vocal que quieres cambiar")

let vocales = frase.replaceAll(vocal, vocal.toUpperCase());

document.write("nueva frase es "+vocales)



   

