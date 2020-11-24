const tecnologias = new Map()
tecnologias.set('react', { framework: false })
tecnologias.set('vue', { framework: true })

console.log(tecnologias.react) // maneira errada de pegar o valor de um map
console.log(tecnologias.get('react'.framework)) // maneira certa

const chavesVariadas = new Map()([
  [function () { }, 'Função'],
  [{}, 'Objeto'],
  [123, 'Número']
])

chavesVariadas.forEach((valor, chave) => {
  console.log(chave, valor)
})

console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)