const botaoCurtir = document.querySelector ('.curtir')
const curtir = document.querySelector ('.card__interacoes-curtir')

const numeroCurtidas = document.querySelector ('.numero-curtidas')


//Cutir

botaoCurtir.addEventListener('click', () => {

    curtir.classList.toggle ('curtiu')

    if (curtir.classList[1] == 'curtiu') {
        numeroCurtidas.innerText = '10'
    } else {
        numeroCurtidas.innerText = '9'
    }
})


//Adiconar card na aba comunidade

const salvar = document.querySelector ('.salvar')

salvar.addEventListener('click', () => {
    console.log('olá mundo')
})