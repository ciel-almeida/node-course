const http = require('http');
const url = require('url');

const port = 3003;
const address = '';

const server = http.createServer((request, response) => {
	// Transformando a url da request em um objeto
	const urlInfo = url.parse(request.url, true);
	const name = urlInfo.query.name;

	// Se não houver um name definido na url, um formulário é exibido
	// para que seja inserido o name.
	if (!name) {
		response.end(`
        <h1>Preencha o seu nome</h1>
        <form method='GET'>
            <input type="text" name="name">
            <input type="submit" value="Enviar">
        </form>
        `);
	} else {
		// Caso o name esteja definido, é exibido um titulo com o nome dinâmicamente
		response.statusCode = 200;
		response.setHeader('Contenty-Type', 'text/html');
		response.end(`<h1>Seja bem vindo ${name}</h1>`);
	}
});

server.listen(port, () => {
	console.log(`Server online na porta ${port}`);
});
