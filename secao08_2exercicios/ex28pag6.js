function filtrarPorQuantidadeDeDigitos(vetorDeEntrada, quantidadeDeDigitos){
    let vetorDeRetorno = []
    for (var i =0; i <vetorDeEntrada.length; i++){
        let numeroComoString = vetorDeEntrada[i].toString();
        if (numeroComoString.length==quantidadeDeDigitos) {
            vetorDeRetorno.push(vetorDeEntrada[i])
        }
    }
    return vetorDeRetorno
}
console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1) )


