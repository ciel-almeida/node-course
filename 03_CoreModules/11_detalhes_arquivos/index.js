const fs = require('fs');

// função do módulo fs para descobrir informações sobre um arquivos
fs.stat('arquivo.txt', (err, stats) => {
	if (err) {
		console.log(err);
		return;
	}

	console.log(stats);
	console.log(stats.isFile());
	console.log(stats.isDirectory());
	console.log(stats.isSymbolicLink());
	console.log(stats.ctime);
});
