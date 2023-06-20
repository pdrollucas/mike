/*  Movimento Menu Lateral */

const botaoMenu = document.querySelector('.menu-hamburguer')
const menu = document.querySelector('.menu-lateral')

botaoMenu.addEventListener('click', () => {
    menu.classList.toggle('menu-lateral--ativo')
})