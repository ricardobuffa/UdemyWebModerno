//Criando um map2

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i = 0; i < this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}


//Compare com a foreach2
/*
Array.prototype.forEach2 = function(callback) {

    for (let i = 0; i < this.length; i++) {
        
    }
}
*/
const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 5.45 }',
    '{ "nome": "Kit de Lapis", "preco": 4.45 }',
    '{ "nome": "Caneta", "preco": 1.45 }'
]



const paraObjeto = textoComJsonDentro => JSON.parse(textoComJsonDentro)
const apenasPreco = produto => produto.preco

const resultado = carrinho.map2(paraObjeto).map2(apenasPreco)

console.log(resultado)