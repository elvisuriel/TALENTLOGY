parseInt(prompt("Ingresar  1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir" ));




n1 = parseInt(prompt('Ingresar numero 1'));
n2 = parseInt(prompt('Ingresar numero 2'));
 
 function sumar()
{
    var resultado;
    resultado = n1 + n2;
    return resultado;
}
 document.write("La suma de " + n1 + " y " + n2 + " es " +sumar(n1,n2)+ " <br/>");
 


n1 = parseInt(prompt('Ingresar numero 1'));
 n2 = parseInt(prompt('Ingresar numero 2'));
 
 function restar()
{
    var resultado;
    resultado = n1 - n2;
    return resultado;
}

document.write("La resta de " + n1 + " y " + n2 + " es " +restar(n1,n2) );
 



n1 = parseInt(prompt('Ingresar numero 1'));
 n2 = parseInt(prompt('Ingresar numero 2'));
 
 function multiplicar()
{
    var resultado;
    resultado = n1 * n2;
    return resultado;
}

document.write("La multiplicacion de " + n1 + " y " + n2 + " es " +multiplicar(n1,n2) );
 



n1 = parseInt(prompt('Ingresar numero 1'));
n2 = parseInt(prompt('Ingresar numero 2'));
 
 function dividir()
{
    var resultado;
    resultado = n1 / n2;
    return resultado;
}

document.write("La divicion de " + n1 + " y " + n2 + " es " +dividir(n1,n2) );
 