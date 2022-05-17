//Adiconar card na aba comunidade
const todosOsProjetos = document.querySelector('.secao__cards')

new function (){
    mostraProjetos ()
    console.log('olá')
} 

function mostraProjetos () {
    if (localStorage.length == 0) {
        return
    }

    let todosOsProjetos = []    
    for(let i = 0; i < localStorage.length; i++){
        todosOsProjetos.push(JSON.parse(localStorage.getItem(i)))
        console.log(i)
    }
}


function criaCard () {
    let card = `
        <div class="cards">
            <div class="card__code-box">
                <code class="code__campo card__code" aria-label="Editor de Codigo"></code>
            </div>

            <div class="card__projeto">
                <h1 class="card__titulo">${detalhesDoProjeto.descricao}</h1>
                <p class="card__descricao">Essa é a descrição do meu projeto.</p>

                <div class="card__footer">
                    <div class="card__interacoes">
                        <div class="card__interacoes-box">
                            <img src="img/Vectorcomentario.svg" alt="Comentario" class="card__interacoes-comentario">
                            <p>9</p>
                        </div>

                        <div class="card__interacoes-box curtir">
                            <svg width="20" height="18" viewBox="0 0 20 18" class="card__interacoes-curtir" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"/>
                            </svg>
                            <p class="numero-curtidas">9</p>
                        </div>
                    </div>
                    <div class="card__perfil">
                        <img src="img/unnamed.webp" class="card__perfil-foto">
                        <p class="card__perfil-nome">@Igor M.G.</p>
                    </div>
                </div>
            </div>
        </div>
         `
        return card
}



/*
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

*/