console.log (this === global)

console.log (this === module)

//Exports e module exports apontam pra mesma referência
console.log (this === module.exports)

console.log (this === exports)

function logThis() {
    console.log('Dentro de uma funcao')
    console.log(this === exports)
    console.log(this === module.exports)
    console.log(this === global)

    this.perigo = '...'
}

//Aqui é module exports
this.perigo2 = '...'

//This dentro de uma funcao aponta pra global
logThis()