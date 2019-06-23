// Para visualizar este script, reconfigure o webpack ou copie-o e cole em './main.js'
const minhaPromise = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('OK')
  }, 2000)
})

// forma cascata
/* 
  minhaPromise().then(response => {
      console.log(response)
    })
    .catch(err => {

    })
*/

// Forma resumida com await/async
// Sem arrow function
/*
  async function executaPromise() {
    console.log(await minhaPromise())
    console.log(await minhaPromise())
    console.log(await minhaPromise())
  }
*/

// Com arrow function
const executaPromise = async () => {
  console.log(await minhaPromise())
  console.log(await minhaPromise())
  console.log(await minhaPromise())
}

executaPromise()