const repetir = function (paramParaRepetir, vezesQueRepetira) {
    let vetorRetorno = []
    for (let i = 0;i<vezesQueRepetira;i++) {
        vetorRetorno.push(paramParaRepetir)
    }
    return vetorRetorno
}

console.log(repetir('cod', 4))
console.log(repetir(7, 3))