// Módulo para trabalhar com caminhos
const path = require('path');

const arquivo = '/musicas/bucktick/hurryupmode/inheaven.mp3';

console.log('Diretório: ', path.dirname(arquivo));
console.log('Basename: ', path.basename(arquivo));
console.log('Is absolute: ', path.isAbsolute(arquivo));
console.log('Extensão: ', path.extname(arquivo));
