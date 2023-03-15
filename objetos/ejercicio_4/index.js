
    class Alumno {
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

    let nombre = prompt("Nombre del Estudiante ");
    let nota = prompt("Escribe la nota de estudiante ");

    const notas = new Alumno(nombre, +nota);

    if (notas.aprobado()) {
      console.log(notas.toString() + " Aprobo");
    } else {
      console.log(notas.toString() + " No Aprobo");
    }
  