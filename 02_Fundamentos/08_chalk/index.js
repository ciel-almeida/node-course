// Chalk usado para imprimir textos coloridos no terminal
const chalk = require('chalk');

const nota = 8;

if (nota >= 8) {
	console.log(chalk.bgGreen('Parabéns, você foi aprovado.'));
} else if (nota < 8 && nota >= 5) {
	console.log(chalk.bgYellow('Sua nota foi insuficiente, você está de recuperação.'));
} else {
	console.log(
		chalk.bgRedBright('Infelizmente sua nota ficou abaixo da média, você foi reprovado.')
	);
}
