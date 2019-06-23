class App {
  constructor() {
    this.repositories = [];

    this.fromEl = document.querySelector('#repo-form');

    this.registerHandlers();
  }

  registerHandlers() {
    this.fromEl.onsubmit = event => this.addRepository(event)
  }

  addRepository(event) {
    event.preventDefault();

    this.repositories.push({
      name: 'rocketseat.com.br',
      description: 'Tire a sua ideia do papel e dê vida à sua startup.',
      avatar_url: 'https://avatars0.githubusercontent.com/u/28929274?v=4',
      html_url: 'http://github.com/baccan/es6-rocketseat',
    })

    console.log(this.repositories)
  }
}

new App()