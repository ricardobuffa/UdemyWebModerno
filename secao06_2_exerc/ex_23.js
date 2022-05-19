function calculaMedia(codigo,nota1,nota2,nota3){
    let vetorretorno = [];
    let media = 0;
    vetorretorno.push(codigo);
    if ((nota1>=nota2)&&(nota1>=nota3)) {
        media = (nota1*4 + nota2*3 + nota3*3) / 10
    } else if ((nota2>=nota1)&&(nota2>=nota3)) {
        media = (nota2*4 + nota1*3 + nota3*3) / 10
    } else if ((nota3>=nota1)&&(nota3>=nota2)) {
        media = (nota3*4 + nota1*3 + nota2*3) / 10
    }
    vetorretorno.push(media);
    return vetorretorno;
}


console.log(calculaMedia(1234,10,10,10))
console.log(calculaMedia(1234,10,10,9))
console.log(calculaMedia(1234,10,9,9))
console.log(calculaMedia(1234,9,10,10))
console.log(calculaMedia(1234,9,9,10))
console.log(calculaMedia(1234,10,9,10))
