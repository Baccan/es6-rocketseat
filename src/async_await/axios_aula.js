// Para visualizar este script, reconfigure o webpack ou copie-o e cole em './main.js'
import axios from 'axios'

class Api {
  static async getUserInfo(username) {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`)

      console.log(response)
    } catch (err) {
      console.warn('Erro na API')
    }
  }
}

Api.getUserInfo('baccan')
Api.getUserInfo('baccafasd fasdn')