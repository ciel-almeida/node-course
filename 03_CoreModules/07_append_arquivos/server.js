const http = require('http');
const url = require('url');
const fs = require('fs');

const port = 3000;
const hostName = 'localhost';

const requestHandler = function (request, response) {
	// Transformando a url em um objeto com o módulo url
	const urlInfo = url.parse(request.url, true);
	// Selecionando o usuário e a senha do objeto criado anteriormente
	const usuario = urlInfo.query.usuario;
	const senha = urlInfo.query.senha;

	// Se o usuário e a senha não estiverem na url, um formulário é enviado via
	// módulo http
	if (!usuario || !senha) {
		fs.readFile('index.html', (err, data) => {
			response.writeHead(200, { 'Content-Type': 'text/html' });
			response.write(data);
			response.end();
		});
	}
	// Caso estejam definidos, através do módulo fs, eles são gravados no arquivo txt
	// e o index é retornado via módulo http
	else {
		const userInfo = `usuario:${usuario},senha:${senha};\n`;

		// Informações sendo gravadas no txt e redirecionamento para o formulário novamente
		// através do módulo http
		fs.appendFile('info.txt', userInfo, (err, data) => {
			response.writeHead(302, { Location: '/' });
			response.end();
		});
	}
};

const server = http.createServer(requestHandler);

server.listen(port, hostName, () => {
	console.log(`Servidor online em: http://${hostName}:${port}`);
});
