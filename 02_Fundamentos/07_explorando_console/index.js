const a = 10;
const b = 15;
const nome = 'Ciel';

// Conta o número de console.count realizados
console.count('Essa é o console count');
console.count('Essa é o console count');
console.count('Essa é o console count');
console.count('Essa é o console count');

// Impressão de variável entre uma string com %s (string)
console.log('Esse é um teste feito por %s e vale %s pontos', nome, a);

// Limpando o console com console.clear()
setTimeout(() => {
	console.clear();
	console.log('Limpando...');
	setTimeout(() => {
		console.clear();
		console.log('Limpo');
	}, 2000);
}, 1000);
