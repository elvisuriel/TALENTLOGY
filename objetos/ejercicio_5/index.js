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

    let nombre = prompt("Nombre de la Persona");
    let edad = prompt("Edad de la Persona");
    const mayorDeEdad = new Edad(nombre, +edad);

    if (mayorDeEdad.VerificarEdad()) {
      console.log(mayorDeEdad.toString() + " Mayor de edad ");
    } else {
      console.log(mayorDeEdad.toString() + " Menor de edad ");
    }
  