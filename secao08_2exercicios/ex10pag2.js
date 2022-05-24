

const simboloMais = function (vezesQueRepetira) {
    let stringRetorno = ''
    for (let i = 0;i<vezesQueRepetira;i++) {
        stringRetorno = stringRetorno.concat('+')
    }
    return stringRetorno
}



console.log(simboloMais(7))