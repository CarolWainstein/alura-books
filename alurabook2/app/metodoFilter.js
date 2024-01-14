// o método filter filtra o que se pede na função:

const btnFiltro = document.querySelectorAll('.btn')

btnFiltro.forEach(btn => btn.addEventListener('click', filtrarLivros))

function filtrarLivros() {
    const elementoBtn = document.getElementById(this.id) // sabe qual é o id da onde se clica
    const categoria = elementoBtn.value // captura o valor do que foi clicado

    let livrosFiltrados = categoria == 'disponivel' ? filtrarPorDisponibilidade() : filtrarPorCategoria(categoria)
    //let livrosFiltrados = livros.filter(livro => livro.categoria == categoria)

    exibirLivrosNaTela(livrosFiltrados)

    if (categoria == 'disponivel') {
        const valorTotal = calcularValorTotalDeLivrosDisponiveis(livrosFiltrados)
        exibirValorTotalDeLivrosDisponiveis(valorTotal)
    }
    console.log("Clicou em filtrarLivros")
}

function filtrarPorCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria)
}

function filtrarPorDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0)
}

function exibirValorTotalDeLivrosDisponiveis(valorTotal) {

    elementoComValorTotalDeLivrosDisponiveis.innerHTML = `
        <div class="livros__disponiveis">
            <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
        </div>
    `;
}


