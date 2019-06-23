"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"

/*
    "conceitos": "babel ./conceitos/Rest_Spread.js -o ./bundle.js -w",
*/
// Operadores rest/spread
// deve-se utilizar o plugin do babel: "@babel/plugin-proposal-object-rest-spread"
// REST - utilizado para pegar o "resto" das propriedades
var usuario = {
  nome: "Baccan",
  idade: 21,
  empresa: "Casa"
};

var nome = usuario.nome,
    resto = _objectWithoutProperties(usuario, ["nome"]);

console.log(nome);
console.log(resto); // pode-se aplicar em vetores

var arr = [1, 2, 3, 4];
var a = arr[0],
    b = arr[1],
    c = arr.slice(2);
console.log(a);
console.log(b);
console.log(c); // para parâmetros de funções:
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

function soma() {
  for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
    params[_key] = arguments[_key];
  }

  return params.reduce(function (total, next) {
    return total + next;
  });
}

console.log(soma(1, 3, 4)); // SPREAD - responsável por propagar as informações de um objeto para outra estrutura de dados

var arr1 = [1, 2, 3];
var arr2 = [4, 5, 6]; // para juntar os arrays utilizando SPREAD

var arr3 = [].concat(arr1, arr2);
console.log(arr3); // criando um novo objeto com as propridades de outro, e trocando propriedades

var usuario1 = {
  nome: "Baccan",
  idade: 21,
  empresa: "Casa"
};

var usuario2 = _objectSpread({}, usuario1, {
  nome: "Gustavo"
});

console.log(usuario2);
