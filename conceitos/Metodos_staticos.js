// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/Metodos_staticos.js -o ./bundle.js -w",
*/

class TodoList {
  construction() {
    this.todos = []
  }

  // static não recebe as funcionalidades do constructor
  // Utilizado para passar informações e retornar informações independente das outras funcionalidades da classe
  static addTodo() {
    this.todos.push('Novo todo')
    console.log(this.todos)
  }
}

class Matematica {
  static soma(a, b) {
    return a + b
  }
}

console.log(Matematica.soma(1, 2))

TodoList.addTodo() // Erro proposital para verificar o funcionamento do método static