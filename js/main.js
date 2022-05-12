const botaoMenu = document.querySelector ('.icon-menu')
const menu = document.querySelector ('.menu')

const botaoLupa = document.querySelector ('.icon-lupa')
const logo = document.querySelector ('.logo')
const barradePesquisa = document.querySelector ('.header__barradepesquisa')

const tab = document.getElementById('tab')

//Menu
botaoMenu.addEventListener ('click', () => {
    menu.classList.toggle ('ativa')
    botaoMenu.classList.toggle ('icone-fechar')
});


//Barra de Pesquisa
botaoLupa.addEventListener ('click', () => {
    logo.classList.toggle ('disabled')
    barradePesquisa.classList.toggle ("ativa")
    botaoLupa.classList.toggle ('icone-fechar')
    botaoMenu.classList.toggle ('disabled')
})

//Cor do Editor

const color = document.querySelector('.projeto__color');
const editorColor =document.querySelector('.code__campo--box');

color.addEventListener('change', () =>{
    editorColor.style.backgroundColor = color.value
})
