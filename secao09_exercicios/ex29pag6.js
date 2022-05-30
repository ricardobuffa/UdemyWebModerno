function segundoMaior(vetorDeEntrada) {
    let primeiroMaior = vetorDeEntrada[0]
    let segundoMaiorSaida = vetorDeEntrada[1]
    if (segundoMaiorSaida>primeiroMaior) {
        [primeiroMaior, segundoMaiorSaida] = [segundoMaiorSaida, primeiroMaior]
    }
    for (var i = 2; i<vetorDeEntrada.length;i++) {
        if (vetorDeEntrada[i]>=primeiroMaior) {
            segundoMaiorSaida=primeiroMaior
            primeiroMaior=vetorDeEntrada[i]
        } else if ((vetorDeEntrada[i]<primeiroMaior)&&(vetorDeEntrada[i]>=segundoMaiorSaida)) {
            segundoMaiorSaida=vetorDeEntrada[i]
        }
    }
    return segundoMaiorSaida
}


console.log(segundoMaior([12, 16, 1, 5]))

console.log(segundoMaior([8, 4, 5, 6]))

console.log(segundoMaior([213, 123,2534, 523,3465,6754, 456,745,23,63,34,754,8, 4, 5, 6]))