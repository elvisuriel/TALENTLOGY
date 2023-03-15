/*Escribe un programa que lea una cadena de texto
 y determine si es un palíndromo o no. Un palíndromo es 
 una palabra o frase que se lee igual de izquierda a 
 derecha que de derecha a izquierda.
Por ejemplo, "reconocer" y "anita lava la tina" son palíndromos.*/


let str = prompt('ingrer un texto ');
str = str.replace(/ /g, '');
let arr = str.split('');
let arrReverse = arr.reverse();
let str2 = arrReverse.join('');
if (str == str2) {
	console.log('si es');
} else {
	console.log('no es');
}


