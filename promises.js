function falaDepoisDe(segundos, frase) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(frase)
    }, segundos * 1000)
  })
}

falaDepoisDe(3, 'Promessa concluida!')
  .then(frase => frase.concat('!?!?'))
  .then(outraFrase => console.log(outraFrase))