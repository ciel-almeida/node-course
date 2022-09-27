// Core module do node.js
const readline = require('readline').createInterface({
	input: process.stdin,
	output: process.stdout,
});

readline.question('Qual sua cor favorita? ', color => {
	console.log(`A minha cor favorita é ${color}`);

	readline.close();
});
