function correo(email) {
    let arr;
    let nuevo;
    if (
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
        email
      )
    ) {
      arr = email.split("@");
      nuevo = arr[0] + "@" + "ceu.es.";
    } else {
      nuevo = "no es una direccion de correo ";
    }

    return nuevo;
  
  }
let x = correo(prompt("ingrese correo"));
document.write(x)