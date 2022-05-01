const botaoMenu = document.querySelector ('.icone-menu')
const menu = document.querySelector ('.menu__mobile')

const botaoLupa = document.querySelector ('.icone-lupa')
const logo = document.querySelector ('.logo__mobile')
const barradePesquisa = document.querySelector ('.barradepesquisa')


//Menu
botaoMenu.addEventListener ('click', () => {
    menu.classList.toggle ('menu')
    botaoMenu.classList.toggle ('icone-fechar')
});


//Barra de Pesquisa
botaoLupa.addEventListener ('click', () => {
    logo.classList.toggle ("logo")
    barradePesquisa.classList.toggle ("barradepesquisa__mobile")
})