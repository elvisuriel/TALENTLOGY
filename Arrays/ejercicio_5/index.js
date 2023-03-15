
var array = [5,12,8,14,2];
var mayor=-Infinity,menor=+Infinity,suma=0,media=0;

//SUMA
for(i=0;i<array.length;i++){
    suma=parseInt(array[i])+suma;
    }
    console.log(suma+ " Es la suma");
    //MEDIA
    media=suma/array.length;
    console.log(media +" Es la media");
    //MENOR
    for(i=0;i<array.length;i++){
    if(parseInt(array[i])<menor) menor=array[i];
    
    }
    console.log(menor + " Es el menor");
    //MAYOR
    for(i=0;i<array.length;i++){
    if(parseInt(array[i])>mayor) mayor=array[i];
    
    }
    console.log(mayor +" Es el mayor");