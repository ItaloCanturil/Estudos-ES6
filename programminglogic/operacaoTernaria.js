const pontuacaoUsuario = 999;

if(pontuacaoUsuario >= 1000) {
  console.log('VIP')
} else {
  console.log('Normal')
}

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'VIP' : 'Normal';
console.log('nivelUsuario')