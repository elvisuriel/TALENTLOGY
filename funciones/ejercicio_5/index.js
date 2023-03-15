
function resultado()
{let celcius = (parseInt(prompt("ingrese los grados Celcius")));
let convertirlos = (prompt("quiere convertirlos a fahrenheit  o kelvin (escriba en minusculas)"));
switch (convertirlos)
{
case "fahrenheit":
resultado = ((celcius * 1.8) + 32) + "F"
break;

case "kelvin":
resultado= ((celcius)+ 273.15) + "K"
break;
}
console.log("la convercion es:  " + resultado);}
resultado();