// Importando o módulo externo inquirer para receber valores de input
const inquirer = require('inquirer');

// Usando o método prompt para criar as perguntas e depois usando then para tratar as notas
inquirer
	.prompt([
		{ name: 'p1', message: 'Qual a sua primeira nota? ' },
		{ name: 'p2', message: 'Qual a sua segunda nota? ' },
		{ name: 'p3', message: 'Qual a sua terceira nota?' },
	])
	.then(answers => {
		console.log(answers);
		const media = parseInt(answers['p1']) + parseInt(answers['p2']) + parseInt(answers['p3']) / 3;
		console.log(`Média: ${media}`);
	})
	.catch(err => console.log(err));
