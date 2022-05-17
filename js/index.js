const linguagem = document.querySelector('.select')
const areaDoCodigo = document.querySelector('.code__campo')
const botao = document.querySelector ('.botao')

function aplicahighlight () {
    const codigo = areaDoCodigo.innerText

    areaDoCodigo.innerHTML = `<code class="code-text hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código" data-code=""></code>`
    areaDoCodigo.querySelector('.code-text').textContent = codigo

    hljs.highlightElement(areaDoCodigo.querySelector('.code-text'))
}

botao.addEventListener('click', ()=> {
    aplicahighlight()
})

//Cards

const codigo = document.querySelector('[data-code]')
const titulo = document.querySelector ('[data-titulo]')
const descricao = document.querySelector ('[data-descricao]')
const corDoProjeto = document.querySelector('[data-color]')
const salvaProjeto = document.querySelector('.salvar')

salvaProjeto.addEventListener('click', ()=> {
    if(typeof(Storage) !== 'undefined') {
        const projetoLocalStorage = criaProjeto()

        salvaProjetoLocalStorage(projetoLocalStorage)
        console.log(projetoLocalStorage)
    }else {
        console.log('não suporta o localstrorage')
    }
})

function criaProjeto () {
    let projeto = {
        'id' : atribuiId(),
        'detalhesDoProjeto': {
            'codigo': codigo.innerText,
            'titulo': titulo.value,
            'descricao': descricao.value,
            'cor': corDoProjeto.value
        }
    }

    return projeto
}

function atribuiId() {
    return localStorage.length
}

function salvaProjetoLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
}