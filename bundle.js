"use strict";

// Constantes não podem ter seu valor inicial alterado
var a = 1; // a = 3;
// Exemplo de mutação de variável
// É quando se altera o valor de uma propriedade sem alterar sua estrutura inicial

var usuario = {
  nome: "Baccan"
};
usuario.nome = "Gustavo";
console.log(usuario); // Exemplo de variavel de escopo 'let'

function teste(x) {
  var y = 2;

  if (x > 5) {
    var _y = 4;
    console.log(x, _y);
  }
} // Descomente este console para ver o resultado de uma variavel que é chamada fora de seu escopo. No caso, y esta sendo chamado de fora da function teste()
//console.log(y)


teste(10);
