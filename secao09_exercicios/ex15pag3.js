const receberSomenteOsParesDeIndicesPares = function(vetorDeEntrada) {
    vetorDeRetorno = []
    for (i = 0;i<vetorDeEntrada.length;i++){
        if (((vetorDeEntrada[i]%2)==0)&&((i%2)==0)) {
            vetorDeRetorno.push(vetorDeEntrada[i])
        }
    }
    return vetorDeRetorno
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornarĂ¡ [])
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornarĂ¡ [10, 22]) // retornarĂ¡ [])