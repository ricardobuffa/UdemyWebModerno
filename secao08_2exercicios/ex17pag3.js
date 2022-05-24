function somarNumeros(vetorDeEntrada) {
    let soma = vetorDeEntrada.reduce (function(acumulador, atual){
        return acumulador + atual});
    return soma
}


let vetorteste = [1,2,3,4,5,6]

let soma = vetorteste.reduce (function(acumulador, atual){
    return acumulador + atual});

console.log(soma)

console.log(somarNumeros([10, 10, 10]))
console.log(somarNumeros([15, 15, 15, 15]))