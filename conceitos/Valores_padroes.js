// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/Valores_padroes.js -o ./bundle.js -w",
*/

const soma = (a = 3, b = 6) => a + b;

console.log(soma(1));
console.log(soma());