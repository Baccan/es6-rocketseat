// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/Object_short_syntax.js -o ./bundle.js -w",
*/

// Object Short Syntax
const nome = "Baccan";
const idade = 21;

// Não faça isso...
/*
  const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Casa'
  }
*/
// faça isso:
const usuario = {
  nome,
  idade,
  empresa: "Casa"
};

console.log(usuario);