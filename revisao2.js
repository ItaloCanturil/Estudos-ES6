// Arrow Function
const soma = (a, b) => a + b 
console.log(soma(1, 2))

// Arrow Function (this)
const lexico1 = () => console.log(this === exports) // O this numa função error não muda mesmo se voce colocar um bind ou um apply, diferente de uma função tradicional

// parametro default 
function log(texto = 'Node') {
  console.log(texto)
}

// operador rest
function total(...numeros) {
  let total = 0
  numeros.forEach(n => total += n)
  return total
}
console.log(total(3, 3, 3))