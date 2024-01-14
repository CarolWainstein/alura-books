let livros = []
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'
getBucarLivrosDaAPI()


// Captura o arquivo JSON da requisição:
async function getBucarLivrosDaAPI() {
    const resposta = await fetch(endpointDaAPI)
    livros = await resposta.json()
   // console.table(livros) // mostra uma talbela no console, em vez do texto em linhas
    //exibirLivrosNaTela(livros)
    let livrosComDesconto = aplicarDesconto(livros)
    exibirLivrosNaTela(livrosComDesconto)
}


