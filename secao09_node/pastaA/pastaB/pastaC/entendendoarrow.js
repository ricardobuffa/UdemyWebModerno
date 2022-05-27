const soma3 = (numero1, numero2) => {
    return numero1+numero2;
}

//é o mesmo que

const soma2 = function(numero1, numero2) {
    return numero1+numero2;
}

console.log(soma3(2,3))
console.log(soma2(2,3))

//como o corpo de soma3 tem uma unica instrução é possivel omitir os parenteses depois da seta
//nome que em soma3 e soma4 o retorno é implícito
const soma4 = (numero1, numero2) => numero1+numero2;

//nos casos onde a função tem só 1 paramentro tb é possível omitir os parênteses
const funcaoDobro = param => 2*param

console.log(funcaoDobro(5))