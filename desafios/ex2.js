const usuarios = [
  { nome: "Diego", idade: 23, empresa: "Rocketseat" },
  { nome: "Gabriel", idade: 15, empresa: "Rocketseat" },
  { nome: "Lucas", idade: 30, empresa: "Facebook" }
];

// 2.1 - map
const idadeUsuarios = usuarios.map(usuario => usuario.idade);

console.log(idadeUsuarios);

// 2.2 - filter
const rocketMaiorIdade = usuarios.filter(
  usuario => usuario.empresa === "Rocketseat" && usuario.idade >= 18
);

console.log(rocketMaiorIdade);

// 2.3 - find
const googleEmployed = usuarios.find(usuario => usuario.empresa === "Google");

console.log(googleEmployed);

// 2.4 - Unindo operações
const multiplicaIdades = usuarios
  .map(usuario => ({
    ...usuario,
    idade: usuario.idade * 2
  }))
  .filter(usuario => usuario.idade <= 50);
console.log(multiplicaIdades);
