const text = document.querySelector('.title')
const data = new Date();
text.innerHTML = data.toLocaleDateString('pt-BR', { dateStyle: 'full'})