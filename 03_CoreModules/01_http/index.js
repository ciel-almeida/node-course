const http = require('http');

// Porta onde o servidor ficará disponível.
const port = 3002;

// Criando o servidor, e defirindo a response
const server = http.createServer((req, res) => {
	res.write('Olá, esse é meu servidor node.');
	res.end();
});

// Inicializando o servidor com a função listen
server.listen(port, () => {
	console.log(`Servidor rodando na porta: ${port}`);
});
