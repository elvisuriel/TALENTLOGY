
function producto(producto) {
let productoArray = producto.split(",")
console.log(productoArray, "PRODUCTO ARRAY")
for (var i = 0; i < productoArray.length; i++) {
  console.log(productoArray[i]);
  document.write(productoArray[i]+ "<br/>");
}
  
  return (
     producto
  );
}
let x = producto(prompt("ingrese los productos del mercado separados con una coma (,)"));
