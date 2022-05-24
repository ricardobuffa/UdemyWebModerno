const calcularSalario = function (horasTrabalhadas, quantoRecebePorHora) {
    return (`Salário igual a R$ ${horasTrabalhadas*quantoRecebePorHora}`)
}

console.log(calcularSalario(150,40.5))