const minimist = require('minimist');

const args = minimist(process.argv.slice(2));
const a = args['a'];
const b = args['b'];

const soma = require('./soma').soma;
soma(a, b);

// node index.js --a=5 --b=15
