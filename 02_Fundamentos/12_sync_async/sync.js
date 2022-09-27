const fs = require('fs');

const conteudo = `
So there I was, coming to
yearn for someone like this
Unable to even imagine it
The future is always a place
of new heartthrobs and chance meetings
I knew immediately that your name was "hope"`;

// Exemplo de função sincrona, a ordem de execução é preservada.
console.log('Inicio');

fs.writeFileSync('arquivo.txt', conteudo);

console.log('Fim');
