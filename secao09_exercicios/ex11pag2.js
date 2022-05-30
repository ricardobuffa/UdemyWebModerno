const receberPrimeiroEUltimoElemento = function(vetor) {
    vetorDeRetorno = []
    tamanhoDoVetor = vetor.length
    vetorDeRetorno.push(vetor[0])
    vetorDeRetorno.push(vetor[tamanhoDoVetor-1])
    return vetorDeRetorno
}

console.log (receberPrimeiroEUltimoElemento([7,14,"olá"])) // retornará [7, "olá"]
console.log (receberPrimeiroEUltimoElemento([-100, "aplicativo", 16])) // retornará [-100, 16]
