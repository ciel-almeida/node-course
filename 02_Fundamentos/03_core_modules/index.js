const path = require('path');

// Core módules que já estão incluidos no node.js

const extension = path.extname('./arquivo.txt');
const basename = path.basename('./arquivo.txt');
const directorie = path.dirname('./arquivo.txt');
console.log(extension);
console.log(basename);
console.log(directorie);
