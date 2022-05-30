const removerPropriedade = function (objeto, propriedade) {
    cloneObjeto = Object.assign({},objeto)
    delete cloneObjeto[propriedade]
    return cloneObjeto
}

objetoDeTestes = {
    propriedade1: 10,
    propriedade2: 20
}

console.log(removerPropriedade(objetoDeTestes,"propriedade1"))

console.log(objetoDeTestes)


console.log(removerPropriedade({a: 1, b: 2}, "a")) // retornará {b: 2})

console.log (removerPropriedade({
    id: 20,
    nome: "caneta",
    descricao: "Não preenchido"
    }, "descricao")) // retornará {id: 20, nome: "caneta"}

objetoDeTestes2 = objetoDeTestes
console.log(Object.is(objetoDeTestes2,objetoDeTestes))
console.log(Object.is(removerPropriedade(objetoDeTestes, "descricao"), objetoDeTestes))