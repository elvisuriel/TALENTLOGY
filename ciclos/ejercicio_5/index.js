

const sumafra = numero => {
	if (numero < 1) numero = numero + 1/2;
	if (numero <= 0) return 1;
	let sumafra = 1/2;
	while (numero > 1) {
		sumafra = sumafra + numero;
		numero--;
	}
	return sumafra;
}

for (let x = 1; x <= 10; x++ ) {
	document.write(`la suma de  ${x} es ${sumafra(x)}</br>`);
}


/*
class Fraccion {
    /*
        https://parzibyte.me/blog
    
    constructor(numerador, denominador) {
        this.setNumerador(numerador);
        this.setDenominador(denominador);
    }

    setNumerador(numerador) {
        this.numerador = numerador;
    }
    setDenominador(denominador) {
        if (denominador === 0) {
            throw "El denominador debe ser distinto de 0";
        }
        this.denominador = denominador;
    }
    // Ayudantes

    maximoComunDivisor(a, b) {
        let temporal;//Para no perder b
        while (b != 0) {
            temporal = b;
            b = a % b;
            a = temporal;
        }
        return a;
    }

    minimoComunMultiplo(a, b) {
        return (a * b) / this.maximoComunDivisor(a, b);
    }
    // Operaciones

    suma(otra) {
        const mcm = this.minimoComunMultiplo(this.denominador, otra.denominador);
        const diferenciaFraccionActual = mcm / this.denominador;
        const diferenciaOtraFraccion = mcm / otra.denominador;
        const resultado = new Fraccion();
        resultado.setNumerador(
            (diferenciaFraccionActual * this.numerador) + (diferenciaOtraFraccion * otra.numerador));
        resultado.setDenominador(mcm);
        return resultado;
    }
/**/