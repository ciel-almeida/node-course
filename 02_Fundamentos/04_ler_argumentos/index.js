console.log(process.argv);

// Os dois primeiros argumentos são padrão, caminho de instalação do node e caminho onde o arquivo
// atual está sendo executado.
const args = process.argv.slice(2);
console.log(args);

// Loop apenas sobre os argumentos passados
args.forEach(arg => {
	const data = arg.split('=');
	console.log(`Informação: ${data[0]} = ${data[1]}`);
});

// Argumentos são passados juntos do comando para executar o script, e então resgatados no process.argv
// node ./index.js nome="Ciel" idade="24" hobbie="Ler" comidaFavorita="Pasta de amendoin"
