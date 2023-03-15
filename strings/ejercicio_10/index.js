const capicua= (numero)=>{
    numero = numero.toString()
    return numero.split("").reverse().join("") === numero
}
console.log(capicua(12321))