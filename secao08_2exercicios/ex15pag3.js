const receberSomenteOsParesDeIndicesPares = function(vetorDeEntrada) {
    vetorDeRetorno = []
    for (i = 0;i<vetorDeEntrada.length;i++){
        if (((vetorDeEntrada[i]%2)==0)&&((i%2)==0)) {
            vetorDeRetorno.push(vetorDeEntrada[i])
        }
    }
    return vetorDeRetorno
}

console.log(receberSomenteOsParesDeIndicesPares([1, 2, 3, 4])) // retornará [])
console.log(receberSomenteOsParesDeIndicesPares([10, 70, 22, 43])) // retornará [10, 22]) // retornará [])