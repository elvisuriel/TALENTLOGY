

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
  
  

  //SET DE TODA LA CUENTA
  cuenta.ingreso = prompt("Actualizar el ingreso, digite nuevo valor: ");
  cuenta.reintegro = prompt("Actualizar el reintegro, digite nuevo valor: ");
  cuenta.transferencia = prompt(
    "Actualizar la transferencia, digite nuevo valor: "
  );

  console.log("Nueva " + cuenta.toString());
}