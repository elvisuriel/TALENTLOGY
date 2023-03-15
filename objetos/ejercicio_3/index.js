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

    let titular = prompt("Escriba el nombre del Titular: ");
    let cantidad = prompt("Digite Saldo en la Cuenta: ");

    const cuenta = new Cuenta2(titular, +cantidad);

    let ingreso = prompt("Cantidad a Depositar");
    let retirar = prompt("Cantidad a Retirar");

    cuenta.ingresar(+ingreso);

    cuenta.retirar(+retirar);

    console.log(cuenta.toString());
  