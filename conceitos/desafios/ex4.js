// Para ver este desafio, altere o valor do script "desafio_conceito" no arquivo "package.json"
/*
    "desafio_conceito": "babel ./desafios/ex4.js -o ./bundle.js -w"
*/

// 4.1 Desestruturação simples
const empresa = {
  nome: 'Rocketseat',
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  }
}

const {
  nome,
  endereco: {
    cidade,
    estado
  }
} = empresa

console.log(nome); // Rocketseat
console.log(cidade); // Rio do Sul
console.log(estado); // SC

// 4.2 Desestruturação em parâmetros
function mostraInfo(usuario) {
  const {
    nome,
    idade
  } = usuario
  return `${nome} tem ${idade} anos.`;
  // return `${usuario.nome} tem ${usuario.idade} anos.`;
}
console.log(mostraInfo({
  nome: 'Diego',
  idade: 23
}))