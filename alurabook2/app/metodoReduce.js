function calcularValorTotalDeLivrosDisponiveis(livros) {
    return livrosDisponiveis.reduce((total, livro) => total + livro.preco, 0).toFixed(2); // reduce combina os valores dos elementos do array e retorna um valor unico
}