function doisVetores(vetor1, vetor2) {
    for (let i = 0; i < vetor1.veto1.length; i++) {
        console.log(`i vale ${i}`)
        console.log(`vetor1.veto1[i] vale ${vetor1.veto1[i]}`)
        console.log(`vetor2.veto2[i] vale ${vetor2.veto2[i]}`)
        let temp11 = vetor1.veto1[i];
        let temp22 = vetor2.veto2[i];
        //[vetor1.veto1[i],vetor2.veto2[i]] = [vetor2.veto2[i],vetor1.veto1[i]]
        vetor2.veto2[i] = temp11;
        vetor1.veto1[i] = temp22;
    }
}


var vet1 = {
    veto1: [2,4,6]
}
var vet2 = {
    veto2: [6,4,2]
}
doisVetores(vet1,vet2)
console.log(vet1.veto1)
console.log(vet2.veto2)