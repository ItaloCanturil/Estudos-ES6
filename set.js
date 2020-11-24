// não aceita repetição e não é indexado

const times = new Set()
times.add('Flamengo')
times.add('Vasco').add('Racing').add('Pain Gaming')

console.log(times)
console.log(times.size)
console.log(times.has('flamengo'))
console.log(times.has('Flamengo'))
times.delete('Vasco')

const nomes = ['Italo', 'Kimberli', 'Italo', 'Lupy']
const nomesSet = new Set(nomes)
console.log(nomesSet)