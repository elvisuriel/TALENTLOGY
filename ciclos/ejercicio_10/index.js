let ahorro = 0;
for (i = 1; i <= 12; i++) {
  let mes = parseInt(prompt("ingrese lo ahorrado del mes"));
  ahorro += mes;
  console.log("ahorro en el mes:" + i + "es de:" + mes+ "</br>");
  document.write("ahorro en el mes:" + i + "es de:" + mes+ "</br>");
  
  
  
}

console.log("ahorro en el año:" + ahorro);




document.write("ahorro en el año:" + ahorro);