function funcionarOuNao(valor, chanceErro) {
  return new Promise((resolve, reject) => {
    if(Math.random() < chanceErro) {
      reject('ERRO')
    } else {
      resolve(valor)
    }
  })
}

funcionarOuNao('Testando...', 0.1)
  .then(console.log)