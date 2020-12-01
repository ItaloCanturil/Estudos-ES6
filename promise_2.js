function esperarPor(tempo = 2000) {
  return new Promise(function(resolve) {
    setTimeout(() => {
      console.log('Executando a promise...')
      resolve()
    }, tempo)
  })
}

esperarPor(3000)
  .then(() => esperarPor())
  .then(esperarPor)