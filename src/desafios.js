// Para visualizar este script, reconfigure o webpack ou copie-o e cole em './main.js'

import axios from 'axios'; //2

// Funão delay aciona o .then após 1s
const delay = () => new Promise(resolve => setTimeout(resolve, 1000));

/*
  function umPorSegundo() {
    delay().then(() => {
      console.log('1s');
      delay().then(() => {
        console.log('2s');
        delay().then(() => {
          console.log('3s');
        });
      })
    });
  }
*/

const umPorSegundo = async () => {
  await delay();
  console.log("1s");

  await delay();
  console.log("2s");

  await delay();
  console.log("3s");
}

umPorSegundo();

// 2
/*
function getUserFromGithub(user) {
  axios.get(`https://api.github.com/users/${user}`)
    .then(response => {
      console.log(response.data);
    })
    .catch(err => {
      console.log('Usuário não existe');
    })
}
*/

const getUserFromGithub = async (user) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)

    console.log(response.data);
  } catch {
    console.warn('Usuário não existe');
  }
}

getUserFromGithub('diego3g');
getUserFromGithub('diego3g124123');

// 3
/*
class Github {
  static getRepositories(repo) {
    axios.get(`https://api.github.com/repos/${repo}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log('Repositório não existe');
      })
  }
}
*/

class Github {
  static async getRepositories(repo) {
    try {
      const response = await axios.get(`https://api.github.com/repos/${repo}`)

      console.log(response.data)
    } catch {
      console.warn('Repositório não existe');
    }

  }
}

Github.getRepositories('baccan/es6-rocketseat');

// 5
/*
  const buscaUsuario = usuario => {
    axios.get(`https://api.github.com/users/${user}`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log('Usuário não existe');
      });
  }
*/

const buscaUsuario = async user => {
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`)

    console.log(response.data);
  } catch {
    console.warn('Usuário não existe');
  }
}

buscaUsuario('diego3g');