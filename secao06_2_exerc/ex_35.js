const vetorPilha = [1, 2, 3 ,4 ,5];
const vetorAdiciona = [6, 7, 8, 9, 10];

function Adiciona2Vetores(vetorPilha, vetorAdiciona) {
    let tamanhopilha = vetorPilha.length;
    let tamanhoadiciona = vetorAdiciona.length;
    let vetorretorno=[];
    if (tamanhopilha==tamanhoadiciona) {
        for (let i=0; i<tamanhopilha;i++){
            vetorretorno.push(vetorPilha[i]+vetorAdiciona[i])
        }
    }
    return vetorretorno;
}

console.log(Adiciona2Vetores(vetorPilha, vetorAdiciona))