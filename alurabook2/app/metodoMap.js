// o método map modifica a aparição dos elementos do arrey

function aplicarDesconto(livros) {
    const desconto = 0.3
    livrosComDesconto = livros.map(livro => {
        return {...livro, preco: livro.preco - (livro.preco * desconto)}
            // "..." faz uma cópia do array/objeto para outro
    })
    return livrosComDesconto
}