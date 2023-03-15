let nota1,nota2,nota3,nota4,sumanota,totalnota;

nota1 = parseInt(prompt('Ingresar Nota 1'));
nota2 = parseInt(prompt('Ingresar Nota  2'));
nota3 = parseInt(prompt('Ingresar Nota 3'));
nota4 = parseInt(prompt('Ingresar Nota 4'));

sumanota = nota1 + nota2 + nota3 + nota4;

totalnota = (sumanota / 4);

document.write( sumanota + " Es la suma total de las notas" +"<br>"  );

document.write( totalnota + "  Es el promedio de la notas"+"<br>");


document.write(Math.max( nota1, nota2, nota3, nota4 )," Es la maxima calificacion  " +"<br>");
document.write(Math.min( nota1, nota2, nota3, nota4 ), "  Es la minima calificacion " +"<br>");


console.log(sumanota);
console.log(totalnota);