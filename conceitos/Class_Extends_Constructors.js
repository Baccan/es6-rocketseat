// Para ver este script, altere o valor do script "conceitos" no arquivo "package.json"
/*
    "conceitos": "babel ./conceitos/Class_Extends_Constructors.js -o ./bundle.js -w",
*/

class List {
  constructor() {
    this.data = []
  }

  add(data) {
    this.data.push(data)
    console.log(this.data)
  }
}
// extends tem a função de copiar/realizar as mesmas funcionalidades de outra classe
class TodoList extends List {
  // constructor(){
  //     this.todos = []
  // }

  // addTodo(){
  //     this.todos.push('Novo todo')
  //     console.log(this.todos)
  // }

  // super é responsável por reutilizar o método constructor da classe extendida
  constructor() {
    super()

    this.usuario = 'Baccan'
  }

  mostrausuario() {
    console.log(this.usuario)
  }
}

const MinhaLista = new TodoList()

document.querySelector('#novoTodo').onclick = function () {
  MinhaLista.add('Novo todo')
}

MinhaLista.mostrausuario()