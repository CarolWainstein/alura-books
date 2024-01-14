/*
    O sort é para ordenar os elementos em ordem crascente de acordo com os valores units.
Esse método transforma os elementos em strings e usa-lo puro funciona bem com plavras,
contudo não é bom em ordenação de números, pois como se baseia nos valores units, não 
captura o valor númerico do elemento.
    Para ordenar com sort os valores numericos usar seguinte função:

    ORDEM CRESCENTE:

let array = [1, 101, 2]

let ordenar = array.sort(function (a, b) {
    return a - b
})

OU

let ordenar = array.sort((a, b) => a - b)

    Para a ORDEM DECRESCENTE é só inverter o calculo da função para "b - a".
*/

let btnOrdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

btnOrdenarPorPreco.addEventListener('click', ordenarLivrosPorPreco)

function ordenarLivrosPorPreco() {
    let livrosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    exibirLivrosNaTela(livrosOrdenados)
}