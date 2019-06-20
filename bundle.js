"use strict";

// Template Literals
var nome = "Baccan";
var idade = 21; // Não faça isso...

/*
  console.log("Meu nome é " + nome + " e tenho " + idade + " anos agora");
*/
// Faça isso:

console.log("Meu nome \xE9 ".concat(nome, " e tenho ").concat(idade, " anos agora"));
