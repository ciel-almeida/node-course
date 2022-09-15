const fs = require('fs');

fs.readFile('./musica.txt', 'utf-8', (err, data) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log('--- Letra da música ---');
	console.log(data);
});
