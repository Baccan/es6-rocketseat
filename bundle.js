"use strict";

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var usuarios = [{
  nome: "Diego",
  idade: 23,
  empresa: "Rocketseat"
}, {
  nome: "Gabriel",
  idade: 15,
  empresa: "Rocketseat"
}, {
  nome: "Lucas",
  idade: 30,
  empresa: "Facebook"
}]; // 2.1 - map

var idadeUsuarios = usuarios.map(function (usuario) {
  return usuario.idade;
});
console.log(idadeUsuarios); // 2.2 - filter

var rocketMaiorIdade = usuarios.filter(function (usuario) {
  return usuario.empresa === "Rocketseat" && usuario.idade >= 18;
});
console.log(rocketMaiorIdade); // 2.3 - find

var googleEmployed = usuarios.find(function (usuario) {
  return usuario.empresa === "Google";
});
console.log(googleEmployed); // 2.4 - Unindo operações

var multiplicaIdades = usuarios.map(function (usuario) {
  return _objectSpread({}, usuario, {
    idade: usuario.idade * 2
  });
}).filter(function (usuario) {
  return usuario.idade <= 50;
});
console.log(multiplicaIdades);
