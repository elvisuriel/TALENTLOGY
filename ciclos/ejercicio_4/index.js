const factorial = numero => {
	if (numero < 0) numero = numero * -1;
	if (numero <= 0) return 1;
	let factorial = 1;
	while (numero > 1) {
		factorial = factorial * numero;
		numero--;
	}
	return factorial;
}

for (let x = 0; x <= 10; x++) {
	document.write(`El factorial de ${x} es ${factorial(x)}</br>`);
}