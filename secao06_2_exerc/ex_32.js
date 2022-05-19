function mediaAritimetica(vetorEntrada) {
    let media = vetorEntrada[0];
    for (let i = 1; i < vetorEntrada.length; i++) {
        media += vetorEntrada[i];
    }
    return media / vetorEntrada.length;
}

console.log(mediaAritimetica([1,2]))
console.log(mediaAritimetica([1,2,3]))
console.log(mediaAritimetica([1,2,3,4,5]))
console.log(mediaAritimetica([1,2,3,4,5,11,15,-9,213,-21,34,-10,43,32,10,234,20]))
