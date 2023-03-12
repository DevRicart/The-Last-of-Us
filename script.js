/*
OBJETIVO - Quando clicarmos no botão temos que mostrar a imagem de fundo correspondente.

Passo 1 - Dar um jeito de pegar o elemento HTML dos botões.

Passo 2 - Dar um jeito de identificar o clique do usuário no botão.

Passo 3 - Desmarcar o botão selecionado anteriormente.

Passo 4 - Marcar o botão clicado como se estivesse selecionado.

Passo 5 - Esconder a imagem anterior.

Passo 6 - Fazer aparecer a imagem correspondente ao botão clicado.
*/

const carouselButtons = document.querySelectorAll('.button');
const images = document.querySelectorAll('.image')

carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const buttonSelected = document.querySelector('.selected');
    buttonSelected.classList.remove('selected');

    button.classList.add('selected')

    const activeImage = document.querySelector('.active');
    activeImage.classList.remove('active')

    images[index].classList.add('active')
  })
})