const http = require('http');

const port = 3001;

const server = http.createServer((req, res) => {
	// Definindo o status code da response
	res.statusCode = 200;
	res.setHeader('Contenty-type', 'text/html');
	res.write('<h1 style="text-align:center;">Esse é o write.</h1>');
	// método end define o fim da response
	res.end(`<h2>Essa é o fim da resposta do servidor.</h2>`);
});

server.listen(port, () => {
	console.log(`Servidor online na porta: ${port}`);
});
