const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 5.45 }',
    '{ "nome": "Kit de Lapis", "preco": 4.45 }',
    '{ "nome": "Caneta", "preco": 1.45 }'
]

//Quero um array somente de precos

//console.log(carrinho[0])

/* MINHA SOLUCAO
let resultado = carrinho.map(function(e) {
    return JSON.parse(e)
})

let resultado2 = resultado.map(function(e) {
    return e['preco']
})

console.log(resultado2)

*/

//Solução do site

const paraObjeto = textoComJsonDentro => JSON.parse(textoComJsonDentro)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map(paraObjeto).map(apenasPreco)

console.log(resultado)