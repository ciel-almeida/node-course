const _ = require('lodash');

const lista1 = [1, 3, 5, 7, 8, 10];
const lista2 = [2, 3, 4, 6, 8, 10];

const diff = _.difference(lista1, lista2);
console.log(diff);
