const objetoParaArray = function(objetoDeEntrada) {
    vetorDeRetorno = []
    vetorDeChaves = Object.values(objetoDeEntrada)
    vetorDeValores = Object.keys(objetoDeEntrada)
    vetorDeRetorno.push(vetorDeChaves)
    vetorDeRetorno.push(vetorDeValores)
    return vetorDeRetorno
}

/*
objetoDeTestes = {
    propriedade1: 10,
    propriedade2: 20
}

console.log(Object.keys(objetoDeTestes))
*/
objeto3 = objetoParaArray({
    nome: "Maria",
    profissao: "Desenvolvedora de software"
    });

console.log(objeto3)