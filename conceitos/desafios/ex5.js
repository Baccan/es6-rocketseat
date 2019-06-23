// Para ver este desafio, altere o valor do script "desafio_conceito" no arquivo "package.json"
/*
    "desafio_conceito": "babel ./desafios/ex5.js -o ./bundle.js -w"
*/

// 5.1 Rest
const array = [1, 2, 3, 4, 5, 6]

const [
  x,
  ...y
] = array

console.log(x); // 1
console.log(y); // [2, 3, 4, 5, 6]

// function soma...
const soma = (...params) => params.reduce((total, next) => total + next)

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3

// 5.2 Spread
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    uf: 'SC',
    pais: 'Brasil',
  }
};

const usuario2 = {
  ...usuario,
  nome: "Gabriel"
}

const usuario3 = {
  ...usuario,
  endereco: {
    ...usuario.endereco,
    cidade: 'Lontras'
  }
}

console.log(usuario)
console.log(usuario2)
console.log(usuario3)