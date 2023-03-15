
let nota = window.prompt("¿ingrese la calificacion?");

if (nota == nota) {
	//SI LA NOTA ES ENTRE 0 Y 10 COMPRUEBA EL RANGO Y DA UN MENSAJE
	if (nota > 0 && nota <= 10) {
		if (nota <= 3) {
			alert("insuficiente");
		}
		else if (nota <= 7) {
			alert("suficiete");
		}
		else if (nota <= 9) {
			alert("Bien");
			
		}else if (nota >=  10) {
			alert("exelente");
	}
	//SI LA NOTA NO ES ENTRE 0 Y 10
	else {
		alert("Nota erronea");
	}
}
//SI LA NOTA INTRODUCIDA NO ES UN NÚMERO
else {
	//SI SE HA PULSADO ACEPTAR SIN INTRODUCIR NADA
	if (nota != undefined) {	//No es Undefined cuando se pulsa aceptar.
		alert("Introduce un numero valido");
	}
}
}

function names() {
  var nombres = [];
  var edades =[];
  var cont = "";

  for (var i = 0; i <= 2; i++) {
    cont += nombres[i] + " " + edades [i]+", ";
    
}
console.log([cont])

  for (var i = 0; i <= 2; i++) {
      var x = prompt("Ingresa tu nombre:");
      var y = prompt("Ingresa tu edad:");
      nombres[i] = x;
      edades[i] = y;

      if (edades == edades) {
        //SI LA EDAD ES MAYOR A 18 ES MAYOR DE EDAD
        if (edades > 0 && edades <= 120) {
          if (y <= 18) {
            console.log(x +" menor de edad");
          }
          else if (edad => 18) {
            console.log(x + " " +" mayor de edad");
          }
        }  
        //SI LA EDAD NO ES ENTRE 0 Y 120
        else {
          console.log(x +" " +"edad erronea");
        }
      }
  }
  


}

names();

function ejercicio1() {
    class Cuenta {
      constructor(ingreso, reintegro, transferencia) {
        this._ingreso = ingreso;
        this._reintegro = reintegro;
        this._transferencia = transferencia;
      }

      get ingreso() {
        return this._ingreso;
      }
      set ingreso(ingreso) {
        this._ingreso = ingreso;
      }

      get reintegro() {
        return this._reintegro;
      }
      set reintegro(reintegro) {
        this._reintegro = reintegro;
      }

      get transferencia() {
        return this._transferencia;
      }
      set transferencia(transferencia) {
        this._transferencia = transferencia;
      }

      toString() {
        return `Cuenta:\n - Ingreso: ${this._ingreso}\n - Reintegro: ${this._reintegro}\n - Transferencia: ${this._transferencia}`;
      }
    }

    let ingreso = prompt("Digite el ingreso: ");
    let reintegro = prompt("Digite el reintegro: ");
    let transferencia = prompt("Digite la tranferencia: ");

    const cuenta = new Cuenta(ingreso, reintegro, transferencia);
    console.log(cuenta.toString());

    //SET DE TODA LA CUENTA
    cuenta.ingreso = prompt("Actualizar el ingreso, digite nuevo valor: ");
    cuenta.reintegro = prompt("Actualizar el reintegro, digite nuevo valor: ");
    cuenta.transferencia = prompt(
      "Actualizar la transferencia, digite nuevo valor: "
    );

    console.log("Nueva " + cuenta.toString());
  }

  function ejercicio2() {
    class Contador {
      constructor(contador) {
        this._contador = contador;
      }

      get contador() {
        return this._contador;
      }
      set contador(contador) {
        this._contador = contador;
      }

      incrementar() {
        return this._contador++;
      }

      decrementar() {
        return this._contador--;
      }

      toString() {
        return `contador: ${this._contador}`;
      }
    }

    let contador = prompt("Digite el contador: ");
    const count = new Contador(contador);

    let desicion = 0;
    do {
      desicion = prompt("1.aumentar \n 2.disminuir \n 3.salir  " + contador);

      if (desicion == 1) {
        count.incrementar();
      } else if (desicion == 2) {
        count.decrementar();
      }
    } while (desicion != 3);

    console.log("Nueva: " + count.toString());
  }

  function ejercicio3() {
    class Cuenta2 {
      constructor(titular, cantidad) {
        this._titular = titular;
        this._cantidad = cantidad;
      }

      get titular() {
        return this._titular;
      }

      set titular(titular) {
        this._titular = titular;
      }

      get cantidad() {
        return this._cantidad;
      }

      set cantidad(cantidad) {
        this._titular = cantidad;
      }

      toString() {
        return `Cuenta{ Titular= ${this._titular}, Cantidad= ${this._cantidad} }`;
      }

      ingresar(cantidad) {
        if (cantidad <= 0) {
          return;
        }
        this._cantidad += cantidad;
      }

      retirar(cantidad) {
        if (cantidad <= 0) {
          return;
        } else if (this._cantidad - cantidad < 0) {
          this._cantidad = 0;
        } else {
          this._cantidad -= cantidad;
        }
      }
    }

    let titular = prompt("Escriba el nombre del titular: ");
    let cantidad = prompt("Digite la cantidad de la cuenta: ");

    const cuenta = new Cuenta2(titular, +cantidad);

    let ingreso = prompt("cantidad que desde ringresar");
    let retirar = prompt("cantidad que desde retirar");

    cuenta.ingresar(+ingreso);

    cuenta.retirar(+retirar);

    console.log(cuenta.toString());
  }

  function ejercicio4() {
    class Notas {
      constructor(nombre, nota) {
        this._nombre = nombre;
        this._nota = nota;
      }

      get nombre() {
        return this._nombre;
      }
      set nombre(nombre) {
        this._nombre = nombre;
      }

      get nota() {
        return this._nota;
      }
      set nota(nota) {
        this._nota = nota;
      }

      aprobado() {
        console.log(typeof this._nota);
        if (this._nota >= 3) {
          return true;
        }

        return false;
      }

      toString() {
        return `Nombre: ${this._nombre}\n - Nota: ${this._nota}`;
      }
    }

    let nombre = prompt("escribe lel nombre del estudiante ");
    let nota = prompt("escribe la nota de estudiante ");

    const notas = new Notas(nombre, +nota);

    if (notas.aprobado()) {
      console.log(notas.toString() + " aprobo");
    } else {
      console.log(notas.toString() + " no aprobo");
    }
  }

  function ejercicio5() {
    class Edad {
      constructor(nombre, edad) {
        this._nombre = nombre;
        this._edad = edad;
      }

      get nombre() {
        return this._nombre;
      }
      set nombre(nombre) {
        this._nombre = nombre;
      }

      get edad() {
        return this._edad;
      }
      set edad(edad) {
        this._edad = edad;
      }

      VerificarEdad() {
        if (this._edad >= 18) {
          return true;
        }
        return false;
      }

      toString() {
        return `Nombre: ${this._nombre}\n - Edad: ${this._edad}`;
      }
    }

    let nombre = prompt("nombre de la persona");
    let edad = prompt("edad de la persona");
    const mayorDeEdad = new Edad(nombre, +edad);

    if (mayorDeEdad.VerificarEdad()) {
      console.log(mayorDeEdad.toString() + " Mayor de edad ");
    } else {
      console.log(mayorDeEdad.toString() + " Menor de edad ");
    }
  }

  function ejercicio6() {
    class Triangulo {
      constructor(lado1, lado2, lado3) {
        this._lado1 = lado1;
        this._lado2 = lado2;
        this._lado3 = lado3;
      }

      get lado1() {
        return this._lado1;
      }
      set lado1(lado1) {
        this._lado1 = lado1;
      }

      get lado2() {
        return this._lado2;
      }
      set lado2(lado2) {
        this._lado2 = lado2;
      }

      get lado3() {
        return this._lado3;
      }
      set lado3(lado3) {
        this._lado3 = lado3;
      }

      equilatero() {
        if (this._lado1 == this._lado2 && this._lado2 == this._lado3) {
          return true;
        }
        return false;
      }

      escaleno() {
        if (this._lado1 != this._lado2 && this._lado2 != this._lado3) {
          return true;
        }
        return false;
      }
    }

    let lado1 = prompt("lado1");
    let lado2 = prompt("lado2");
    let lado3 = prompt("lado3");

    const tringulo = new Triangulo(lado1, lado2, lado3);

    if (tringulo.equilatero()) {
      console.log("equiñatero");
    } else if (tringulo.escaleno()) {
      console.log("escaleno");
    } else {
      console.log("isoceles");
    }
  }

  function ejercicio7() {
    class Agenda {
      constructor(nombre, telefono, email) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._email = email;
      }

      get nombre() {
        return this._nombre;
      }
      set nombre(nombre) {
        this._nombre = nombre;
      }

      get telefono() {
        return this._telefono;
      }
      set telefono(telefono) {
        this._telefono = telefono;
      }

      get email() {
        return this._email;
      }
      set email(email) {
        this._email = email;
      }

      toString() {
        return `Nombre :${this._nombre}\n - Telefono: ${this._telefono}\n - Email: ${this._email} \n`;
      }
    }

    class Contacto {
      constructor() {
        this.array = new Array();
      }

      anadir(agenda) {
        const agendas = new Agenda(agenda);

        this.array.push(agenda);
      }

      listado() {
        return this.array;
      }

      buscar(telefono) {
        let results = this.array.filter((obj) => obj.telefono == telefono);

        let agenda = results[0];

        console.log("nombre buscado: " + agenda._nombre);
        console.log("telefono buscado : " + agenda._telefono);
        console.log("email buscado : " + agenda._email);

        return agenda;
      }

      editar(nombre, telefono, email, deseo) {
        this.array.map(function (obj) {
          if (obj.nombre == deseo) {
            obj.nombre = nombre;
            obj.telefono = telefono;
            obj.emial = email;
          }
        });

        return this.array;
      }
    }
    const contacto = new Contacto();
    let option;
    let nombre;
    let telefono;
    let email;
    let busca;
    do {
      option = prompt(
        `selecione la opcion \n -1.Añadir contacto :\n - 2.Lista de contacto \n - 3.Bucar contacto \n - 4.editar contacto \n  -5.Cerrar contacto `
      );

      switch (+option) {
        case 1:
          nombre = prompt(" nombre");
          telefono = prompt(" telefono");
          email = prompt(" email");

          const agenda = new Agenda(nombre, telefono, email);

          contacto.anadir(agenda);

          break;
        case 2:
          alert(contacto.listado());
          console.log(contacto.listado());
          break;

        case 3:
          busca = prompt(
            "Digite el numero de telefono de la persona que desea buscar "
          );

          document.write("persona encontrada " + contacto.buscar(busca));

          break;

        case 4:
          busca = prompt("nombre d ela persona la cual desea editar");
          nombre = prompt("nombre editado");
          telefono = prompt("telefono editado");
          email = prompt(" email editado ");

          contacto.editar(nombre, telefono, email, busca);

          break;
      }
    } while (option != 5);

    console.log(contacto.listado());
  }

  function ejercicio8() {
    class Calculadora {
      constructor(valor1, valor2) {
        this._valor1 = valor1;
        this._valor2 = valor2;
      }

      get valor1() {
        return this._valor1;
      }
      set valor1(valor1) {
        this._valor1 = valor1;
      }

      get valor2() {
        return this._valor2;
      }
      set valor2(valor2) {
        this._valor2 = valor2;
      }

      suma() {
        return this._valor1 + this._valor2;
      }
      resta() {
        return this._valor1 - this._valor2;
      }
      multiplicacion() {
        return this._valor1 * this._valor2;
      }
      division() {
        return this._valor1 / this._valor2;
      }
    }

    let valor1 = prompt("valor 1");
    let valor2 = prompt("valor 2");

    const calculadora = new Calculadora(+valor1, +valor2);

    document.write("suma= " + calculadora.suma());
    document.write("resta= " + calculadora.resta());
    document.write("multiplicacion= " + calculadora.multiplicacion());
    document.write("division= " + calculadora.division());
  }