const http = require('http');
const fs = require('fs');

const port = 3002;

// Enviando arquivo html como response da request
const server = http.createServer((req, res) => {
	// Módulo fs lendo arquivo html e o enviando como a variável data
	// Caso ocorra erro, será atribuído a err
	fs.readFile('mensagem.html', function (err, data) {
		res.writeHead(200, { 'Content-Type': 'text/html' });
		res.write(data);
		return res.end();
	});
});

server.listen(port, () => {
	console.log(`Server up and running on port: ${port}`);
});
