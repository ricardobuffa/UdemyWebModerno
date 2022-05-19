function contaNegativos(vetorEntrada) {
    let negativos = 0;
    for (let i = 0; i < vetorEntrada.length; i++) {
        if (vetorEntrada[i] < 0){
            negativos++;
        }
    }
    return negativos;
}

console.log(contaNegativos([1,2,3,4,5,11,15,-9,213,-21,34,-10,43,32,10,234,20]))