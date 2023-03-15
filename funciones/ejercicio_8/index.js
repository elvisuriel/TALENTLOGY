

let number1 = parseInt(prompt("Escriba el primer numero"));
let number2 = parseInt(prompt("Escriba el segundo numero"));
let number3 = parseInt(prompt("Escriba el tercer numero"));




function minima(number1, number2, number3) 
{
  
 let min = 0;
  let max = 0;

  if (number1 < number2 && number1 < number3 ) {
    min = number1;
    return min;
  } else if (number2 < number1 && number2 < number3) {
    min = number2;
    return min;
  } else if (number3 < number2 && number3 < number1 ) {
    min = number3;
    return min;
  }
}
console.log ("El minimo es: " + (min(number1, number2, number3)));


function medio (number1, number2, number3)
{
let min = 0
let max = 0
let med = 0
if (number1 > number2 && number1 < number3 ) {
    med = number1;
    return med;
  } else if (number2 > number1 && number2 < number3) {
    med = number2;
    return med;
  } else if (number3 > number2 && number3 < number1 ) {
    med = number3;
    return med;
  }
} 
console.log ("El medio es: "  + (medio(number1, number2, number3)));
document.write ("El medio es: "  + (medio(number1, number2, number3)));



function maxima(number1, number2, number3)
 {
  let max = 0; 
  let min = 0;

  if (number1 > number2 && number1 > number3 && number1 ) {
    max = number1;
    return max;
  } else if (number2 > number1 && number2 > number3 && number2 ) {
    max = number2;
    return maxlet (parseInt (prompt ("Digite el numero uno")));
  } else if (number3 > number2 && number3 > number1 && number3 ) {
    max = number3;
    return max;
  }
}
console.log("El maximo es: " +(maxima(number1, number2, number3)));
document.write("El maximo es: " +(maxima(number1, number2, number3)));