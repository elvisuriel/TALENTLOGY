let edad,genero;


genero = prompt('Ingresar sexo');
edad= prompt('Ingrese su edad');



if ((genero === "hombre" && edad >=60) || (genero === "mujer" && edad >= 54)){
    document.write("ya puede jubilarsex"  +"<br>");
} else {
	document.write("aun no se puede jubilarsex"  + "<br>" );  
}



