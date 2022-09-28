const fs = require('fs');

// Se o diretório log não existir, ele é criado
if (!fs.existsSync('./logs')) {
	console.log('Pasta logs não existe.');
	fs.mkdirSync('logs');
} else {
	console.log('Pasta logs existe.');
}
