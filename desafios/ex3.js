// Para ver este desafio, altere o valor do script "desafio_conceito" no arquivo "package.json"
/*
    "desafio_conceito": "babel ./desafios/ex3.js -o ./bundle.js -w"
*/

// 3.1
/*
  const arr = [1, 2, 3, 4, 5];
  arr.map(function(item) {
    return item + 10;
  });
*/
const arr = [1, 2, 3, 4, 5];
console.log(arr.map(item => item + 10));

// 3.2
// Dica: Utilize uma constante pra function
/*
  const usuario = { nome: "Diego", idade: 23 };
  function mostraIdade(usuario) {
    return usuario.idade;
  }
  mostraIdade(usuario);
*/
const usuario = { nome: "Diego", idade: 23 };
const mostraIdade = usuario => usuario.idade;

console.log(mostraIdade(usuario));

// 3.3
// Dica: Utilize uma constante pra function
/*
  const nome = "Diego";
  const idade = 23;
  function mostraUsuario(nome = "Diego", idade = 18) {
    return { nome, idade };
  }

  mostraUsuario(nome, idade);
  mostraUsuario(nome);
*/
const nome = "Diego";
const idade = 23;

const mostraUsuario = (nome = "Diego", idade = 18) => ({
  nome,
  idade
});

console.log(mostraUsuario(nome, idade));
console.log(mostraUsuario(nome));

// 3.4
/*
  const promise = function() {
    return new Promise(function(resolve, reject) {
      return resolve();
    });
  };
*/
const promise = () => new Promise((resolve, reject) => resolve());

console.log(promise());
