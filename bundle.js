"use strict";

// Para ver este desafio, altere o valor do script "desafio_conceito" no arquivo "package.json"

/*
    "desafio_conceito": "babel ./desafios/ex4.js -o ./bundle.js -w"
*/
// 4.1 Desestruturação simples
var empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC'
  }
};
var nome = empresa.nome,
    _empresa$endereco = empresa.endereco,
    cidade = _empresa$endereco.cidade,
    estado = _empresa$endereco.estado;
console.log(nome); // Rocketseat

console.log(cidade); // Rio do Sul

console.log(estado); // SC
// 4.2 Desestruturação em parâmetros

function mostraInfo(usuario) {
  var nome = usuario.nome,
      idade = usuario.idade;
  return "".concat(nome, " tem ").concat(idade, " anos."); // return `${usuario.nome} tem ${usuario.idade} anos.`;
}

console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}));
