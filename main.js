// Object Short Syntax
const nome = "Baccan";
const idade = 21;

// Não faça isso...
/*
  const usuario = {
    nome: nome,
    idade: idade,
    empresa: 'Casa'
  }
*/
// faça isso:
const usuario = {
  nome,
  idade,
  empresa: "Casa"
};

console.log(usuario);
