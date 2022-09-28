const fs = require('fs');

const oldName = 'arquivo.txt';
const newName = 'arquivo-novo.txt';

fs.rename(oldName, newName, err => {
	if (err) {
		console.log('Algo deu errado, verifique o nome dos arquivos e tente novamente.');
		return;
	}

	console.log(`O arquivo ${oldName} foi renomeado para ${newName}`);
});
