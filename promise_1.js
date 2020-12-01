const primeiroElemento = arraOuString => arraOuString[0]
const letraMinuscula = letra => letra.toLowerCase()

new Promise(function(resolte) {
  resolve(['Ana', 'Bia', 'CH', 'Daniel'])
})

  .then(primeiroElemento)
  .then(primeiroElemento)
  .then(letraMinuscula)
  .then(console.log) // não precisa declarar o que vai ser retornado no console, por padrão ja vai retornar o valor da resposta do then acima.