const botaoMenu = document.querySelector ('.icone-menu')
const menu = document.querySelector ('.menu')

const botaoLupa = document.querySelector ('.icone-lupa')
const logo = document.querySelector ('.logo__mobile')
const barradePesquisa = document.querySelector ('.barradepesquisa')



botaoMenu.addEventListener ('click', () => {
    menu.classList.toggle ('menu__mobile')
    botaoMenu.classList.toggle ('icone-fechar')
});

botaoLupa.addEventListener ('click', () => {
    logo.classList.toggle ("logo")
    barradePesquisa.classList.toggle ("barradepesquisa__mobile")
})