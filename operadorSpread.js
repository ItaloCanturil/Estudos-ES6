// operador ... rest( juntar ) / spread ( espalhar )
// usar rest com parâmetro de função

// usar spread com objeto
const funcionario = { nome: 'Maria', salario: 12350.99}
const clone = { ...funcionario, ativo: true } // o spread espalha o obj funcionario e coloca os elementos dentro do obj clone
console.log(clone)

// usar spread com array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)