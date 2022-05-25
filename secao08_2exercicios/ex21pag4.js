
function menorNumero(vetorDeEntrada) {
    let menorValor = vetorDeEntrada[0]
    for (i = 0;i<vetorDeEntrada.length;i++){
        if (vetorDeEntrada[i]<menorValor) {
            menorValor=vetorDeEntrada[i]
        }
    }
    return menorValor
}


console.log(menorNumero([10, 5, 35, 65]))
console.log(menorNumero([5, -15, 50, 3]))