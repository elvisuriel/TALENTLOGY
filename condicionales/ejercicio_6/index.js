let peliculas = {
 avengers : 8000,
 terminator: 4000,
 El_transportador: 2000,
 Chuki : 1000,

};



var valor1,valor2,valor3,vsuma;

valor1 = parseInt(prompt('Ingresar valor 1'));
valor2 = parseInt(prompt('Ingresar valor 2'));
valor3 = parseInt(prompt('Ingresar valor 3'));
document.write(Math.max( valor1, valor2, valor3));



	if( valor1 > valor2 ){
	vsuma = valor2 + valor3;
    alert(vsuma + " pague 2 peliculas lleve 3 peliculas " );
      
	}
	else {
	alert("No existe valor de la pelicula");
}
	//document. write('La suma es '+vsuma);

		
	//}else{ ( number <= number2 )
	
		//alert(number   + " Es menor que " + number2);
	
	//}
		
	




//var number = 1000;
//var myNumeral = numeral(number);
//var currencyString = myNumeral.format('$0,0.00');

//console.log(suma)