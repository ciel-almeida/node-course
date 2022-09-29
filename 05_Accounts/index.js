// Módulos externos
const chalk = require('chalk');
const inquirer = require('inquirer');

// Módulos internos
const fs = require('fs');

operation();

// Função que irá rotear as ações disponíveis para o usuário.
function operation() {
	inquirer
		.prompt([
			// Definindo o tipo de pergunta e respostas disponíveis
			{
				type: 'list',
				name: 'action',
				message: 'O que você deseja fazer?',
				choices: ['Criar conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
			},
		])
		.then(answer => {
			const resposta = answer.action;

			// Ativando a ação seguinte de acordo com a escolha do usuário.
			if (resposta === 'Criar conta') {
				createAccount();
			} else if (resposta === 'Consultar Saldo') {
				getAccountBalance();
			} else if (resposta === 'Depositar') {
				deposit();
			} else if (resposta === 'Sacar') {
				withdraw();
			} else if (resposta === 'Sair') {
				console.log(chalk.bgWhite.black('Obrigado por usar o nosso banco.'));
				process.exit();
			}
		})
		.catch(error => {
			console.log(error);
		});
}
// Função que exibe as mensagens e chama a função que cria a conta.
function createAccount() {
	console.log(chalk.bgGray.black(`Obrigado por escolher nosso banco.\n`));
	console.log('Defina agora as configurações da sua conta.');

	buildAccount();
}

function buildAccount() {
	inquirer
		// Criando a pergunta e recebendo a resposta
		.prompt([{ name: 'accountName', message: 'Digite o nome para a sua conta' }])
		.then(answer => {
			const accountName = answer['accountName'];

			// Se i diretório accounts não existir, ele é criado.
			if (!fs.existsSync('accounts')) {
				fs.mkdirSync('accounts');
			}

			// Verifica se já há uma conta de mesmo nome.
			if (fs.existsSync(`accounts/${accountName}.json`)) {
				console.log(
					chalk.bgRed.black('Essa conta já existe, tente outro nome para a sua conta.\n')
				);
				buildAccount();
				return;
			}

			// Caso ainda não exista a conta, ela é criada.
			fs.writeFileSync(`accounts/${accountName}.json`, '{"balance": 0}', error => {
				console.log(error);
			});

			// Mensagem de sucesso e usuário redirecionado para as operações novamente.
			console.log(chalk.bgGreen.black('Parabéns, sua conta foi criada com sucesso.\n'));
			operation();
		})
		.catch(error => {
			console.log(error);
		});
}

// Função para depositar dinheiro na conta.
function deposit() {
	inquirer
		// Criando a pergunta e ecebendo o input com o nome da conta
		.prompt([
			{
				name: 'accountName',
				message: 'Qual o nome da conta? ',
			},
		])
		.then(answer => {
			const accountName = answer['accountName'];

			// Se o nome da conta não existir, o fluxo é retornado para o inicio do deposito
			if (!checkAccount(accountName)) {
				return deposit();
			}

			inquirer
				// Recebendo a quantidade
				.prompt([
					{
						name: 'amount',
						message: 'Insira a quantidade que deseja depositar: ',
					},
				])
				.then(answer => {
					const amount = answer['amount'];

					// Adicionando valor a conta
					addAmount(accountName, amount);
					operation();
				})
				.catch(error => console.log(error));
		})
		.catch(error => console.log(error));
}

// Função para verificar se há uma conta com o memso nome passado
function checkAccount(accountName) {
	if (!fs.existsSync(`accounts/${accountName}.json`)) {
		console.log(chalk.bgRed('Essa conta não existe, verifique a conta e tente novamente.'));
		return false;
	}

	return true;
}

// Função para depositar um valor na conta definida
function addAmount(accountName, amount) {
	const accountData = getAccount(accountName);

	// Verifica se o valor foi passado corretamente
	if (!amount) {
		console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente.'));
		return deposit();
	}

	// Adicionando o valor atual da conta com o valor a ser depositado
	accountData.balance = parseFloat(amount) + parseFloat(accountData.balance);

	// Escrevendo novo valor na conta
	fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), error => {
		console.log(error);
	});

	console.log(chalk.bgGreen.black(`Foi depositado o valor de R$${amount} na conta.`));
}

// Função para retornar os dados da conta
function getAccount(accountName) {
	const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
		encoding: 'utf8',
		flag: 'r',
	});

	// Retornando os valores como um objeto
	return JSON.parse(accountJSON);
}

// Retorna o valor atual da conta informada.
function getAccountBalance() {
	inquirer
		.prompt([{ name: 'accountName', message: 'Qual o nome da sua conta?' }])
		.then(answer => {
			const accountName = answer['accountName'];

			// Se a conta não existir, a função é reiniciada
			if (!checkAccount(accountName)) {
				return getAccountBalance();
			}

			const accountData = getAccount(accountName);
			console.log(chalk.bgCyan.black(`O saldo da sua conta é de R$${accountData.balance}`));
			operation();
		})
		.catch(err => console.log(err));
}

// Função para sacar um valor da conta
function withdraw() {
	inquirer
		.prompt([{ name: 'accountName', message: 'Qual o nome da sua conta?' }])
		.then(answer => {
			const accountName = answer['accountName'];

			// Se conta não existir, função é reiniciada
			if (!checkAccount(accountName)) {
				return withdraw();
			}

			inquirer
				.prompt([{ name: 'amount', message: 'Quanto você deseja sacar?' }])
				.then(answer => {
					const amount = answer['amount'];

					removeAmount(accountName, amount);
				})
				.catch(err => console.log(err));
		})
		.catch(err => {
			console.log(err);
		});
}

// Subtrai o valor da conta
function removeAmount(accountName, amount) {
	const accountData = getAccount(accountName);

	// Se o valor não for inserido, o fluxo é retornado para a função withdraw
	if (!amount) {
		console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde.'));
		return withdraw();
	}

	// Se o valor for maior que o disponível na conta, o fluxo é retornado para withdraw
	if (accountData.balance < amount) {
		console.log(chalk.bgRed.black('Valor indisponível.'));
		return withdraw();
	}

	accountData.balance = parseFloat(accountData.balance) - parseFloat(amount);

	// Escrevendo os novos dados da conta no JSON
	fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), err => {
		console.log(err);
	});

	console.log(chalk.bgGreen.black(`Foi realizado um saque de R$${amount} da sua conta.`));
	operation();
}
