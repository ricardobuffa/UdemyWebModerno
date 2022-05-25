function buscarPalavrasSemelhantes(stringParaBuscar, vetorDeStringsEntrada) {
    let vetorDeStringsSaida = [] 
    for (var i = 0; i<vetorDeStringsEntrada.length;i++){
        if (vetorDeStringsEntrada[i].search(stringParaBuscar)!=-1){
            vetorDeStringsSaida.push(vetorDeStringsEntrada[i])
        }
    }
    return vetorDeStringsSaida
}


vetor = buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])
console.log(vetor)

vetor2 = buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])
console.log(vetor2)