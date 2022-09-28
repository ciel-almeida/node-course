const fs = require('fs');
const http = require('http');
const url = require('url');

const port = 3005;
const hostName = 'localhost';

// Criando o servidor e passando a callback function para lidar com as request e responses
const server = http.createServer(requestHandler);

function requestHandler(request, response) {
	// Transformando a url em um objeto com o método parse
	const urlInfo = url.parse(request.url, true);
	// Pegando name passado pela url
	const name = urlInfo.query.name;

	// Se o nome não estiver definido a pagina index com o form é enviada.
	if (!name) {
		fs.readFile('index.html', (err, data) => {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(data);
			response.end();
		});
	}
	// Caso o name esteja definido, o nome é gravado no arquivo txt
	// e a response é enviada com um redirecionamento para o index.
	else {
		fs.writeFile('arquivo.txt', name, (err, data) => {
			response.writeHead(302, { Location: '/' });
			response.end();
		});
	}
}

server.listen(port, hostName, () => {
	console.log(`Server online em http://${hostName}:${port}`);
});
