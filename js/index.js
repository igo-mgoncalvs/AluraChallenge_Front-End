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
const corDoEditor = document.querySelector('.code__campo--box')
const salvaProjeto = document.querySelector('.salvar')

salvaProjeto.addEventListener('click', ()=> {        
    if(typeof(Storage) !== 'undefined') {
        const projetoLocalStorage = criaProjeto()

        salvaProjetoLocalStorage(projetoLocalStorage)
        console.log(projetoLocalStorage)
    }
    if(confirm ('Seu projeto foi salvo e pode ser visto na aba de Comunidade')){
        apagaDados()
    }
})

function criaProjeto () {
    let projeto = {
        'id' : atribuiId(),
        'detalhesDoProjeto': {
            'codigo': areaDoCodigo.querySelector ('code').innerText,
            'titulo': titulo.value,
            'descricao': descricao.value,
            'cor': corDoProjeto.value,
            'linguagem': linguagem.value
        }
    }

    return projeto
}

function apagaDados () {
    areaDoCodigo.querySelector('code').innerText = ''
    titulo.value = ''
    descricao.value = ''
    corDoProjeto.value ='#6BD1FF'
    corDoEditor.style.backgroundColor = '#6BD1FF'
    linguagem.value = 'javascript'
}

function atribuiId() {
    return localStorage.length
}

function salvaProjetoLocalStorage(objetoJson){
    localStorage.setItem(objetoJson.id, JSON.stringify(objetoJson))
    console.log(objetoJson.id)
}