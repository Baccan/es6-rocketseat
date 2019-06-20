"use strict";

// Exemplo de desestruturação
var usuario = {
  nome: "Baccan",
  idade: 21,
  endereco: {
    cidade: "São Paulo",
    estado: "SP"
  }
}; // Imagine que vc precise dos seguintes valores do usuario: nome, idade, cidade
// Você não precisa fazer algo desta forma:

/*
    console.log(usuario.nome)
    console.log(usuario.idade)
    console.log(usuario.endereco.cidade)
*/
// Utilize a desestruturação
// No caso, estamos criando 3 constantes (nome, idade e cidade) do usuario

var nome = usuario.nome,
    idade = usuario.idade,
    cidade = usuario.endereco.cidade;
console.log(nome);
console.log(idade);
console.log(cidade); // também é possivel utilizar em funções
// Sem desestruturação:

/*
    function mostraNome(usuario){
        console.log(usuario.nome)
    }
*/
// com desestruturação:

function mostraNome(_ref) {
  var nome = _ref.nome,
      idade = _ref.idade,
      cidade = _ref.endereco.cidade;
  console.log(nome, idade, cidade);
}

mostraNome(usuario);
