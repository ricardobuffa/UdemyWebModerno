function criarProduto (nomeprod, precoprod) {
    return {
        nome: nomeprod,
        preco: precoprod,
        desconto: 0.50
    }
}

console.log(criarProduto('biscoito','3.50'))