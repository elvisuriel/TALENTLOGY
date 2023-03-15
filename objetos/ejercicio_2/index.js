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
