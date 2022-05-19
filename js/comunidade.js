//Adiconar card na aba comunidade
const areaDosProjetos = document.querySelector('.secao__cards')

new function (){
    mostraProjetos()

} 

function mostraProjetos () {
    if (localStorage.length == 0) {
        return
    }
    let todosOsProjetos = []  
    for(let i = 0; i < localStorage.length; i++){
        todosOsProjetos.push(JSON.parse(localStorage.getItem(i)))
    }

    todosOsProjetos.forEach(projeto => {
        areaDosProjetos.innerHTML += criaCard(projeto)
        const codigoHTML = areaDosProjetos.querySelector(`[data-id="${projeto.id}"]`)
        codigoHTML.querySelector('code').innerText = projeto.detalhesDoProjeto.codigo
    })
}


function criaCard (projeto) {
    if(projeto == null){
        projeto++
    }
    const = 
    let card = `
        <div class="card" data-id="${projeto.id}">
            <div class="card__code-box" style="background-color: ${projeto.detalhesDoProjeto.cor};">
                <code class="code__campo hljs ${projeto.detalhesDoProjeto.codigo}" aria-label="Editor de Codigo"></code>
            </div>

            <div class="card__projeto">
                <h1 class="card__titulo">${projeto.detalhesDoProjeto.titulo}</h1>
                <p class="card__descricao">${projeto.detalhesDoProjeto.descricao}</p>

                <div class="card__footer">
                    <div class="card__interacoes">
                        <div class="card__interacoes-box">
                            <img src="img/Vectorcomentario.svg" alt="Comentario" class="card__interacoes-comentario">
                            <p>9</p>
                        </div>

                        <div class="card__interacoes-box">
                            <svg width="20" height="18" viewBox="0 0 20 18" class="card__interacoes-curtir" data-curtir="" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.0587 1.44659C15.9181 -0.377597 12.7346 -0.0494787 10.7698 1.97783L10.0003 2.77078L9.23077 1.97783C7.26987 -0.0494787 4.08243 -0.377597 1.94185 1.44659C-0.51123 3.5403 -0.640134 7.29804 1.55514 9.56752L9.11359 17.3721C9.60186 17.876 10.3948 17.876 10.8831 17.3721L18.4415 9.56752C20.6407 7.29804 20.5118 3.5403 18.0587 1.44659Z"/>
                            </svg>
                            <p class="numero-curtidas">9</p>
                        </div>

                        <div class="card__interacoes-box">
                            <img src="img/icons8-lixo (1).svg" alt="Comentario" class="card__interacoes-lixeira">
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

//Cutir

const botaoCurtir = document.querySelectorAll ('[data-curtir]')
const curtir = document.querySelector ('.card__interacoes-curtir')

const numeroCurtidas = document.querySelectorAll ('.numero-curtidas')

for (let id = 0; id < botaoCurtir.length; id++){
    const botaoId = botaoCurtir[id]
    
    botaoId.onclick = function () {
        botaoId.classList.toggle ('curtiu')

        if (botaoId.classList[1] == 'curtiu') {
            numeroCurtidas[id].innerText = '10'
        } else {
            numeroCurtidas[id].innerText = '9'
        }
    }
}

//Exluir projeto

const excluir = document.querySelectorAll ('.card__interacoes-lixeira')

for (let e = 0; e < excluir.length; e++) {
    const excluirId = excluir[e]

    excluirId.onclick = function () {

        if (confirm ('Você tem certeza que deseja excluir esse item')){
            excluiProjetoLocalStorage()
        }
    }
}