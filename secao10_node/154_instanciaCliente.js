const contadorA = require('./154_instanciaUnica')
const contadorB = require('./154_instanciaUnica')
//Aqui a sintaxe tem () pois está invocando uma função Factory
const contadorC = require('./154_instanciaNova')()
const contadorD = require('./154_instanciaNova')()
//testando agora o B vai mudar tb pois 

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)

contadorC.inc()
contadorC.inc()

console.log(contadorD.valor,contadorC.valor )