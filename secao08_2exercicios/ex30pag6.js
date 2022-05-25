function calcularMedia(vetorDeEntrada) {
    let somaRetorno = 0
    for (i = 0; i<vetorDeEntrada.length;i++){
        somaRetorno = somaRetorno + vetorDeEntrada[i]
    }
    return somaRetorno/vetorDeEntrada.length
}

//console.log(calcularMedia([0, 10]))

//console.log(calcularMedia([1, 2, 3, 4, 5]))

function recerberMelhorEstudante(objetoDeEntrada) {
    console.log(Object.values(objetoDeEntrada))
    console.log(Object.keys(objetoDeEntrada)[0])

    var objetoDeSaida = {}
    var posicaoDoMaiorMedia = 0
    let media = 0
    let maiorMedia = 0
    quantidadeDeEstudantes = Object.values(objetoDeEntrada).length;
    
    for (var i = 0; i<quantidadeDeEstudantes; i++) {
        media = calcularMedia(Object.values(objetoDeEntrada)[i])
        if (media>maiorMedia) {
            maiorMedia = media
            posicaoDoMaiorMedia = i
        }
    }
    Object.defineProperty(objetoDeSaida, 'nome', {
        enumerable: true,
        configurable: true,
        writable: true,
        value: Object.keys(objetoDeEntrada)[posicaoDoMaiorMedia]
    })
    Object.defineProperty(objetoDeSaida, 'media', {
        enumerable: true,
        configurable: true,
        writable: true,
        value: media
    })
    return objetoDeSaida
}






objetoListaEstudantes = {
    Joao: [8, 7.6, 8.9, 6], 
    Mariana: [9, 6.6, 7.9, 8], 
    Carla: [7, 7, 8, 9]
}

console.log(recerberMelhorEstudante(objetoListaEstudantes))