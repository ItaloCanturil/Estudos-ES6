const container = document.querySelector('.container');
const elementos = [
  {tag: 'p', text: 'Frase 1'},
  {tag: 'div', text: 'Frase 2'},
  {tag: 'footer', text: 'Frase 3'},
  {tag: 'section', text: 'Frase 4'}
];

function showElements () {
  for (let i = 0; i < elementos.length; i++) {
    let {tag, texto} = elementos[i];
    let tagCriada = document.createElement(tag);
    tagCriada.textContent = texto;
    container.append(tagCriada);
  }
}

showElements()