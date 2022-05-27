//console.log(module.exports === this)
//console.log(module.exports === exports)


this.a = 1
exports.b = 2
module.exports.c = 3

exports = null

//console.log(module.exports)

exports = {
    nome: 'teste'
}

//Continua valendo a 1 b 2 c 3
//console.log(module.exports)


//Se eu quiser atribuir um novo objeto pra ser exportado
//Obrigatoriamente use module.exports

module.exports = { publico: true}