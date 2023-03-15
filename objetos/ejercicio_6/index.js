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

    let lado1 = prompt("Ingresar Lado 1 del Triangulo");
    let lado2 = prompt("Ingrasar Lado 2 del Triangulo");
    let lado3 = prompt("Ingresar Lado 3 del Triangulo");

    const tringulo = new Triangulo(lado1, lado2, lado3);

    if (tringulo.equilatero()) {
      document.write("El triangulo es Equilatero");
    } else if (tringulo.escaleno()) {
      document.write("El triangulo es Escaleno");
    } else {
      document.write("El triangulo es Isoceles");
    }
  
