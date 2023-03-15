function media() {
  var total=0, res, numDatos, item;
  numDatos = arguments.length;
  for (item = 0; item < numDatos; item++)
    {
      total += arguments[item];
    }
  res = total/numDatos;


  return res;

 }

 document.write( media( 3,50,40,25,10) );