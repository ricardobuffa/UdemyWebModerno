function ChecaIntervalo1020(vetorEntrada) {
    let dentro = 0;
    let fora = 0;
    let vetorretorno = [];
    for (let i = 0; i < vetorEntrada.length; i++) {
        if (vetorEntrada[i] >=10){
            if (vetorEntrada[i] <=20) { dentro++ }
            else { fora++ }} else fora++;
    }
    vetorretorno.push(dentro)
    vetorretorno.push(fora)
    return vetorretorno
}

console.log(ChecaIntervalo1020([1,2,3,4,5,11,15,9,213,21,34,10,423,32,10,234,20]))