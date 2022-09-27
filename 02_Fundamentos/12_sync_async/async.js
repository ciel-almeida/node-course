const fs = require('fs');

const conteudo = 'Conteudo do arquivo a ser criado';

// Exemplo de código assíncrono, a ordem de execução não é preservada.
console.log('Inicio');

fs.writeFile('arquivo-async.txt', conteudo, function () {
	setTimeout(function () {
		console.log('Arquivo Criado.');
	}, 1000);
});

console.log('Fim');
