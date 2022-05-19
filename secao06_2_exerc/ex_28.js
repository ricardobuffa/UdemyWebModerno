function ContaParEimpar(vetorEntrada) {
    let pares = 0;
    let impares = 0;
    let vetorretorno = [];
    for (let i = 0; i < vetorEntrada.length; i++) {
        if ((vetorEntrada[i] % 2) == 0) { pares++ } else { impares++ }
    }
    vetorretorno.push(pares)
    vetorretorno.push(impares)
    return vetorretorno
}

console.log(ContaParEimpar([1,2,3,4,5]))