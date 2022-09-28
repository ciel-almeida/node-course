const http = require('http');
const fs = require('fs');
const url = require('url');

const port = 3000;
const hostName = 'localhost';

const server = http.createServer(reqHandler);

function reqHandler(request, response) {
	// Transformando a url em um objeto
	const q = url.parse(request.url, true);
	// Pegando o endereço a partir do / no final
	const filename = q.pathname.substring(1);

	// Criando função para enviar o status code e o filename (página)
	const showPage = function (statusCode, page = filename) {
		fs.readFile(page, function (err, data) {
			response.writeHead(statusCode, { 'Content-Type': 'text/html' });
			response.write(data);
			return response.end();
		});
	};

	// Se o filename requisitado possuir html e a página existir no server,
	// a página é envi é enviada como resposta através da função showPage.
	if (filename.includes('html')) {
		if (fs.existsSync(filename)) {
			showPage(200);
		} else {
			showPage(404, '404.html');
		}
	} else {
		showPage(404, '404.html');
	}
}

server.listen(port, hostName, () => {
	console.log(`Server in online on http://${hostName}:${port}`);
});
