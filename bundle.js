"use strict";

// Para ver este desafio, altere o valor do script "desafio_conceito" no arquivo "package.json"

/*
    "desafio_conceito": "babel ./desafios/ex6.js -o ./bundle.js -w"
*/
var usuario = 'Diego';
var idade = 23; // console.log('O usuário ' + usuario + ' possui ' + idade + ' anos');

console.log("O usu\xE1rio ".concat(usuario, " possui ").concat(idade, " anos"));
