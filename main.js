// Operadores rest/spread
// deve-se utilizar o plugin do babel: "@babel/plugin-proposal-object-rest-spread"

// REST - utilizado para pegar o "resto" das propriedades
const usuario = {
  nome: "Baccan",
  idade: 21,
  empresa: "Casa"
};

const { nome, ...resto } = usuario;

console.log(nome);
console.log(resto);

// pode-se aplicar em vetores
const arr = [1, 2, 3, 4];
const [a, b, ...c] = arr;

console.log(a);
console.log(b);
console.log(c);

// para parâmetros de funções:
// ao invés de:
/*
    function soma(a, b, c){
        return a + b + c
    }
*/
// faça:
/*
  function soma(...params) {
    return params;
  }
*/
// exemplo com reduce apra somar todos os numeros
function soma(...params) {
  return params.reduce((total, next) => total + next);
}

console.log(soma(1, 3, 4));

// SPREAD - responsável por propagar as informações de um objeto para outra estrutura de dados

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// para juntar os arrays utilizando SPREAD
const arr3 = [...arr1, ...arr2];

console.log(arr3);

// criando um novo objeto com as propridades de outro, e trocando propriedades
const usuario1 = {
  nome: "Baccan",
  idade: 21,
  empresa: "Casa"
};

const usuario2 = {
  ...usuario1,
  nome: "Gustavo"
};

console.log(usuario2);
