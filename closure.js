// Closure é uma função que consegue ler variaveis dentro e fora do escopo dela mesmo
// Closure na pratica: Pode-se usar onde normalmente usaria um objeto de um unico método

// Nesse exemplo a função "baa" é uma função closure pois consegue ler a const a que está fora do seu escopo

function foo () {
  const a = 1 + 2 
  function baa () {
    return console.log(a)   
  }

  baa()
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

arr.forEach(item => {
  const a = item + 1 
  function show () {
    return console.log(a)
  }

  show()
})

foo()