const linguagem = document.querySelector('.selecao')
const areaDoCodigo = document.querySelector('.code__campo')
const botao = document.querySelector ('.botao')

function aplicahighlight () {
    const codigo = areaDoCodigo.innerText

    areaDoCodigo.innerHTML = '<code class="code-text hljs ${linguagem.value}" contenteditable="true" aria-label="Editor de código"></code>'
    areaDoCodigo.querySelector('.code-text').textContent = codigo

    hljs.highlightElement(areaDoCodigo.querySelector('.code-text'))
}

botao.addEventListener('click', ()=> {
    aplicahighlight()
})