function gerarNumerosEntre(min, max,tempo) {
  if (min > max)[max, min] = [min, max]
  return new Promise(resolve => {
    setTimeout(function() {
      const fator = max - min + 1
      const aleatorio = parseInt(Math.random() + fator) + min
      resolve(aleatorio)
    }, tempo)
  })
}

// Essas promises so serar retornadas quando todas as promises forem resolvidas

function gerarVariosNumeros() {
  return Promise.all([
    gerarNumerosEntre(1, 30, 3000),
    gerarNumerosEntre(1, 30, 5000),
    gerarNumerosEntre(1, 30, 500),
    gerarNumerosEntre(1, 30, 100),
    gerarNumerosEntre(1, 30, 1000),
  ])
}

gerarVariosNumeros()
  .then(numeros => console.log(numeros))