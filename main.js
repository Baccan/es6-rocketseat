// Reatribuindo nome de uma funcao ao importar
/*
  import {
    soma as somaFuncao,
    sub
  } from './funcoes'
*/

// Importando um "export defaul e outros exports"
/*
  import soma, {
    sub
  } from './funcoes'
*/

// Importando todos os exports de um arquivo e atribuindo a uma variavel
import * as funcoes from './funcoes'

import somaFunction from './soma2'

console.log(funcoes.default(1, 2))
console.log(funcoes.sub(1, 2))
console.log(somaFunction(3, 2))