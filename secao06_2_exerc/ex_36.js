function vetoreInteiro(vetor,inteiro) {
    let vetorretorno=[];
    for (let i=0;i<vetor.length;i++) {
        vetorretorno.push(vetor[i]*inteiro)
    }
    return vetorretorno;
}


function vetoreInteiro2(vetor,inteiro) {
    let vetorretorno=[];
    for (let i=0;i<vetor.length;i++) {
        if (vetor[i]*inteiro>5) {
        vetorretorno.push(vetor[i]*inteiro)
        }
    }
    return vetorretorno;
}


console.log(vetoreInteiro([1,2,3,4,5],7))
console.log(vetoreInteiro2([1,2,3,4,5],4))