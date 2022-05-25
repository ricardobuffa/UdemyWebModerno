function inverter(objetoDeEntrada) {
    var objetoDeSaida = {};
    vetorDeKeys = Object.keys(objetoDeEntrada)
    vetorDeValores = Object.values(objetoDeEntrada)
    for (var i = 0; i<vetorDeKeys.length;i++){
        let converteValorParaString = vetorDeValores[i].toString()
        let conveteKeyParaString = vetorDeKeys[i].toString()
        Object.defineProperty(objetoDeSaida, converteValorParaString, {
            enumerable: true,
            configurable: true,
            writable: true,
            value: conveteKeyParaString
        })
        console.log(converteValorParaString)
        console.log(conveteKeyParaString)
    }
    return objetoDeSaida
}
objetofora = { a: 1, b: 2, c: 3}
console.log(inverter(objetofora))
/*
objetofora = { a: 1, b: 2, c: 3}
console.log (objetofora)
console.log (Object.keys(objetofora))
console.log (Object.values(objetofora))

*/
var objetofora2 = {};

Object.defineProperty(objetofora2, 'key', {
    enumerable: true,   // não enumerável
    configurable: true, // não configurável
    writable: true,     // não gravável
    value: 'static'
  });

console.log(objetofora2)
