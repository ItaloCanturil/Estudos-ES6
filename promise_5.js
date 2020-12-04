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
  .then(v => console.log(`Valor: ${v}`))
  .then(
    v => console.log(v),
    err => console.log(`Erro Esp.: ${err}`))
  .catch( err => console.log(`Erro: ${err}`))