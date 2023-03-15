var num1 = parseInt(prompt("Introduzca el primer número"));
var num2 = parseInt(prompt("Introduzca el segundo número"));
 
document.write("Los números pares que existen entre " + num1 + " y " + num2 + " son: ");
 
 
for (var i = num1; i < num2; i++) {
 
    document.write("<br>" + i +"<br>");
 
    if (i % 2 == 0) {
        i++;
   }
}