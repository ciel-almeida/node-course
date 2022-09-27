const chalk = require('chalk');
const inquirer = require('inquirer');

// Usando módulo externo inquirer para receber inputs e depois usa-los
inquirer
	.prompt([
		{ name: 'nome', message: 'Qual o seu nome? ' },
		{ name: 'idade', message: 'Qual sua idade? ' },
	])
	.then(respostas => {
		if (!respostas['nome'] || !respostas['idade'])
			throw new Error('As informações são necessárias para continuar a execução.');

		console.log(
			chalk.bgYellow.black(
				`O nome do usuário é ${respostas['nome']} e ele tem ${respostas['idade']} anos.`
			)
		);
	})
	.catch(err => console.log(err));
