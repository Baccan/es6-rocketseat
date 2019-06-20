"use strict";

var arr = [1, 3, 4, 5, 6, 8]; // map() percorre um array e retorna algo
// item = valor recebido 1 a um pelo array
// index = posição do itemno array

var newArr = arr.map(function (item, index) {
  return item + index;
});
console.log(newArr); // Reduce - consome o vetor e transforma em um unico valor
// total = cada vez que executa, pega o valor do retorno e atriu-se
// next = próximo valor

var sum = arr.reduce(function (total, next) {
  return total + next; // 1ª vez - total = 0 e next = 1
  // 2ª vez - total = 1 e next = 3
  // 3ª vez - total = 4 e next = 4
  // 4ª vez - total = 8 e next = 5
  // assim por todo o array...
});
console.log(sum); // filter - pega determinados valores do array

var filter = arr.filter(function (item) {
  // filtro para tem um array com apenas os numeros pares
  return item % 2 === 0;
});
console.log(filter); // find - utilizado para verificar se existe algo ou se é possivel encontrar algo no array

var find = arr.find(function (item) {
  // encontre um item que seja igual a 4
  return item === 4;
});
console.log(find);
