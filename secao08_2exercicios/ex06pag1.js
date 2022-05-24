const booleanoOuNumerico = function (parametro) {
    boolean = 1
    number = 1
    if (typeof parametro == 'boolean'){
        return !parametro
    } else if (typeof parametro== 'number') {
        return -parametro
    } else {
        return ` "booleano ou número esperados, mas o parâmetro é do tipo ${typeof(paramentro)}`
    }
}


console.log(booleanoOuNumerico(1))
console.log(booleanoOuNumerico(true))
console.log(booleanoOuNumerico(-1))
console.log(booleanoOuNumerico('a'))