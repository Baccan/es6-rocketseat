// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/Template_literals.js -o ./bundle.js -w",
*/

// Template Literals
const nome = "Baccan";
const dt = new Date();
const idade = dt.getFullYear() - 1997;

// Não faça isso...
/*
  console.log("Meu nome é " + nome + " e tenho " + idade + " anos agora");
*/
// Faça isso:
console.log(`Meu nome é ${nome} e tenho aproximadamente ${idade} anos agora`);