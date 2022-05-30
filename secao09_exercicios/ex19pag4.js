function calcularMedia(vetorDeEntrada) {
    let somaRetorno = 0
    for (i = 0; i<vetorDeEntrada.length;i++){
        somaRetorno = somaRetorno + vetorDeEntrada[i]
    }
    return somaRetorno/vetorDeEntrada.length
}

console.log(calcularMedia([0, 10]))

console.log(calcularMedia([1, 2, 3, 4, 5]))