// Importando módulo
const fs = require('fs');

// Utilizando módulo para abrir arquivo. Argumentos: endereço arquivo, codificação, callback function.
fs.readFile('./arquivo.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(data);
});
