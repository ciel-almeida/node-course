const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const nome = args['nome'];
const idade = args['idade'];
const profissao = args['profissao'];
console.log('Argumentos: ', args);
console.log(`Meu nome é ${nome}, tenho ${idade} anos e trabalho como ${profissao}`);
