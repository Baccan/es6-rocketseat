const arr = [1, 3, 4, 5, 6, 8];

// function é considerada uma função anônima por não ter um nome atribuido a ela
// const newArr = arr.map(function(item) {
//   return item * 2;
// });
// logo, ela pode ser substituida por uma arrow function, como abaixo
// const newArr = arr.map(item => {
//   return item * 2;
// });
// como não possui um corpo extenso dentro da função, tendo apenas uma linha com o retorno do item * 2, podemos simplificar mais ainda
const newArr = arr.map(item => item * 2);

console.log(newArr);

// criando funções como constantes (não recomendado)
const teste = () => "teste";
console.log(teste());
// Chamando esta função pelo nome de sua variavel temos o seguinte retorno
console.log(teste);

// exemplo de retorno de objeto
const objeto = () => ({ array: [1, 2, 3, 4, 5] });
console.log(objeto());
