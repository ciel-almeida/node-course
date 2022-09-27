const num = 10;

if (Number.isInteger(num)) {
	throw new Error('O valor não é um inteiro.');
}

console.log('Concluido');
