// forEach executa uma dada função em cada elemento do array

const elementoParaInserirLivros = document.getElementById('livros')
const elementoComValorTotalDeLivrosDisponiveis = document.getElementById('valor_total_livros_disponiveis')

// Exibe os livros na tela:
function exibirLivrosNaTela(listaDeLivros) {

    elementoComValorTotalDeLivrosDisponiveis.innerHTML = ''

    elementoParaInserirLivros.innerHTML = ''
    listaDeLivros.forEach(livro => {
        //let disponibilidade = verificarDisponibilidade(livro) // para opção classica
        let disponibilidade = livro.quantidade > 0 ? 'livro__imagens' : 'livro__imagens indisponivel' // opção ternaria
        elementoParaInserirLivros.innerHTML += `
        <div class="livro">
            <img class="${disponibilidade}" src="${livro.imagem}" alt="${livro.alt}"/>
            <h2 class="livro__titulo">
            ${livro.titulo}
            </h2>
            <p class="livro__descricao">${livro.autor}</p>
            <p class="livro__preco" id="preco">R$${livro.preco.toFixed(2)}</p>
            <div class="tags">
            <span class="tag">${livro.categoria}</span>
            </div>
        </div>
        
        `
    });
}

// Verifica disponibilidade do livro:

/* opção classica:

function verificarDisponibilidade(livro) {
    console.log('Verificando disponibilidade para:', livro.titulo);
    console.log('Quantidade:', livro.quantidade);

    if (livro.quantidade > 0) {
        return 'livro__imagens'
    } else {
        return 'livro__imagens indisponivel'
    }
}

*/


