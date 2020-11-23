// desestructuring
const [l, e, ...tras] = 'Italo' // desestruturação de string
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)

const { idade, nome } = { nome: 'Italo', idade: 19 }
console.log(idade, nome)