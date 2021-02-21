const pessoa = {
  nome: 'Italo',
  sobrenome: 'Canturil',
  idade: 19,
  endereco: {
    rua: 'bleibs',
    numero: 03
  }
}

// Atribuição via desestruturação
const { nome, sobrenome } = pessoa;
console.log(nome, sobrenome);

// Mudando o nome da variavel
const { nome: firstName, sobrenome: lastName } = pessoa;
console.log(firstName, lastName);

// Colocando valor padrão
const { primerioNome = 'Italu' } = pessoa;
console.log(primerioNome);

// Pegando valores dentro de outro objeto
const { endereco: { rua, numero } } = pessoa;
console.log(rua, numero);

// Operador rest
const {...resto } = pessoa;
console.log(resto)