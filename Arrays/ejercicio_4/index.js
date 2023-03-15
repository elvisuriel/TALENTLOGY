
var array = [5, 12, 8, 14, 2,7,9,10,5,16,17,20,12,13,15,4,2,1,5,19];
/*var aprobados = 0;
 
for(i = 0; i < array.length; i++){
    if (array[i] > aprobados)
    {
        aprobados = array[i];
    }
} 
console.log(aprobados);
*/





sum_aproba=0
sum_desapro=0

for (i = 0; i < array.length; i++){
//array= Math.random(0,20)
    if (array[i]> 0 && array[i] <= 20){
         if (array[i] <=10){
         document.write(array[i] +"  desaprobados"+"<br/>" );
        
        sum_desapro=sum_desapro
        //console.log(array[i] +"  desaprobados" )
         console.log(sum_desapro);
    }
    
         else if (array[i] >10 && array[i] <=20){
            document.write(array[i]+ "aprobado"+"<br/>" );
           sum_aproba=sum_aproba
          // console.log(sum_aproba)
           
           
    }
    else{
        alert("nota erronea");
    }
}
else{
    if (array[i] != undefined) {	//No es Undefined cuando se pulsa aceptar.
		alert("Introduce un numero valido"); 
    }
}
}
