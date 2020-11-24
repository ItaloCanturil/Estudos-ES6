for (let letra of 'Italo') {
  console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
  console.log(i) // retorna os indices
}

for (let assunto of assuntosEcma) {
  console.log(assunto) // retorna os valores
}

const assuntosMap = new Map([
  ['Map', { abordado: true }],
  ['Set', { abordado: true }],
  ['Promise', { abordado: false }]
])

// percorrendo chave e valor do Map
for (let assunto of assuntosMap) {
  console.log(assunto)
}

// percorrendo apenas as chaves do Map
for (let chaves of assuntosMap) {
  console.log(chave)
}

// percorrendo apenas os valores
for (let valor of assuntosMap) {
  console.log(valor)
}

// percorrendo as entradas
for (let [chave, valor] of assuntosMap.entries()) {
  console.log(chave, valor)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
  console.log(letra)
}