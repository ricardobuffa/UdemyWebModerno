function maiorMenor(vetorEntrada) {
    let maior = vetorEntrada[0];
    let menor = vetorEntrada[0];
    let vetorretorno = [];
    for (let i = 0; i < vetorEntrada.length; i++) {
        if (vetorEntrada[i] > maior){
            maior = vetorEntrada[i];
        }

        if (vetorEntrada[i] < menor){
            menor = vetorEntrada[i];
        }
    }    
    vetorretorno.push(maior)
    vetorretorno.push(menor)
    return vetorretorno
}

console.log(maiorMenor([1,2,3,4,5,11,15,9,213,21,34,10,43,32,10,234,20]))