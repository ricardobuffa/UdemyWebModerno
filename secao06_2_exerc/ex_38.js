function imprimeImpares(inicio = 0 ,fim = 100) {
    vetorderetorno = [];
    if (inicio>fim) {
        [inicio, fim] = [fim, inicio]
    }
    for (let i=inicio; i<fim; i++){
        if (i%2==1) {vetorderetorno.push(i)}
    }
    return vetorderetorno
}

console.log(imprimeImpares(55,45))