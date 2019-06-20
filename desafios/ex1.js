// Para ver este desafio, altere o valor do script "desafio_conceito" no arquivo "package.json"
/*
    "desafio_conceito": "babel ./desafios/ex1.js -o ./bundle.js -w"
*/

class Usuario {
  constructor(email, senha) {
    this.email = email;
    this.senha = senha;
  }

  isAdmin() {
    return this.admin ? true : false;
  }

  //   Não mostre a senha do usuario, esta função é apenas para teste do desafio rsrs
  mostrarUsuario() {
    return `Email: ${this.email}\nSenha: ${
      this.senha
    }\nAdmin: ${this.isAdmin()}`;
  }
}

class Admin extends Usuario {
  constructor(email, senha) {
    super(email, senha);

    this.admin = true;
  }
}

const User1 = new Usuario("email@teste.com", "senha123");
const Adm1 = new Admin("gustavobaccang@gmail.com", "paçoca");
console.log(User1.isAdmin()); // false
console.log(Adm1.isAdmin()); // true
console.log(Adm1.mostrarUsuario());
