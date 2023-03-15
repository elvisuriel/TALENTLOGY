
function fecha(fecha) {
let fechaArray = fecha.split("/")
console.log(fechaArray, "FECHA ARRAY")

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  return (
    "usted nacio el dia " + fechaArray[0] + " del mes " + meses[fechaArray[1] - 1] + " del año " + fechaArray[2]
  );
}
let x = fecha(prompt("ingrese fecha"));
document.write(x);
(x) //te entrega Fri, 02 Jul 2021 13:06:02 GMT