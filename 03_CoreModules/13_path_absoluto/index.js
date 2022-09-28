const path = require('path');

// Caminho do unidade c até o arquivo
console.log(path.resolve('arquivo.txt'));

const midFolder = 'arquivos';
const file = 'contas.txt';

// Caminho criado a partir de strings
console.log(path.join('/', 'projetos', midFolder, file));
