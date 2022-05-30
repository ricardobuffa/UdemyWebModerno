
function convertArrayToObject(vetorDeEntrada) {
    var myObj = Object.assign({}, vetorDeEntrada)
    return myObj
}

function despesasTotais(vetorDeEntrada) {
    let objeto = convertArrayToObject(vetorDeEntrada)
    let somaDespesas = 0
    for (i = 0;i<vetorDeEntrada.length;i++){
        somaDespesas = somaDespesas + objeto[i]['preco']
    }
    return somaDespesas
}

const despesasPessoais = [
    {nome: "Jornal online", categoria: "Informação", preco: 89.99},
    {nome: "Cinema", categoria: "Entretenimento", preco: 150}
]

console.log(despesasTotais(despesasPessoais))

console.log(despesasTotais([
    {nome: "Galaxy S20", categoria: "Eletrônicos", preco: 3599.99},
    {nome: "Macbook Pro", categoria: "Eletrônicos", preco: 30999.90}
    ]) )
