// Date é contado em milesimos de segundos a partir do dia 01/01/1970
// se tiver só um paramêtro no construtor Date, é milisegundos.
// Dois paramêtros são ano e mês os outros podem ser omitidos, que são, dia, hora, minuto, segundo e milesimos.
// Pode ser mandado uma string 
const data = new Date('2019-01-20 20:17:00')
// console.log('Dia', data.getDate());
// console.log('Mês', data.getMonth()); // Mês começa do zero
// console.log('Ano', data.getFullYear());
// console.log('Hora', data.getHours());
// console.log('Min', data.getMinutes());
// console.log('Seg', data.getSeconds());
// console.log('ms', data.getMilliseconds());
// console.log('Dia semana', data.getDay()); // 0 é domingo, 6 é sabado
// console.log(data.toString());

formataData(data)

function formataData(data) {
  const dia = zeroAEsquerda(data.getDate());
  const mes = zeroAEsquerda(data.getMonth() + 1);
  const ano = zeroAEsquerda(data.getFullYear());
  const hora = zeroAEsquerda(data.getHours());
  const min = zeroAEsquerda(data.getMinutes());
  const segundos = zeroAEsquerda(data.getSeconds());

  return console.log(`${dia}/${mes}/${ano} ${hora}:${min}:${segundos}`)
}

function zeroAEsquerda (num) {
  return num >= 10 ? num : `0${num}`
}