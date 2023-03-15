function res() {
  let op = parseInt(prompt("digite un numero"));

  if (isNaN(op)) {
    alert("digite solo numeros");
  }
  switch (op) {
    case 1:
      op = "el numero es uno";
      break;
    case 2:
      op = "el numero es dos";
      break;
    case 3:
      op = "el numero es tres";
      break;
    case 4:
      op = "el numero es cuatro";
      break;
    case 5:
      op = "el numero es cinco";
      break;
    case 6:
      op = "el numero es seis";
      break;
    case 7:
      op = "el numero es siete";
      break;
    case 8:
      op = "el numero es ocho";
      break;
    case 9:
      op = "el numero es nueve";
      break;
    case 10:
      op = "el numero es diez";
      break;
  }
  console.log("el resultado es:" + op);
}
res();
 
