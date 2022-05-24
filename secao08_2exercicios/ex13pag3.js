const filtrarNumeros = function(vetorDeEntrada) {
    vetorDeRetorno = []
    for (let i = 0; i<vetorDeEntrada.length;i++){
        if (typeof vetorDeEntrada[i]=='number') {
            vetorDeRetorno.push(vetorDeEntrada[i])
        }
    }
    return vetorDeRetorno
}

console.log(filtrarNumeros(["Javascript", 1, "3", "Web", 20])) // retornará [1, 20])
