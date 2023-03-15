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

    let valor1 = prompt("Ingresar el Valor 1");
    let valor2 = prompt("Ingresar el Valor 2");

    const calculadora = new Calculadora(+valor1, +valor2);

    document.write("Suma = " + calculadora.suma()+ "<br/>");
    document.write("Resta = " + calculadora.resta() + "<br/>");
    document.write("Multiplicacion = " + calculadora.multiplicacion()+ "<br/>");
    document.write("Division = " + calculadora.division()+ "<br/>");
  
     