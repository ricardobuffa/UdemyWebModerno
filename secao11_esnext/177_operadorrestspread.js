//Caso rest - é o do exemplo da revisao 2
//operador spread ou operador rest no contexto da função os paramentros serão agrupados o nome e entao e rest
function total(...numeros) {
    let totalRetorno = 0
    numeros.forEach(n => totalRetorno += n)
    return totalRetorno
}


console.log(total(2,3,4,5))

//operador Spread - ele está espalhando dentro do objeto clone o objeto funcionario

const funcionario = { nome: 'Maria', salario: 12348.99}
const clone = { ativo: true, ...funcionario}
console.log(clone)

//usar o spread no contexto de array
const grupoA = ['João', 'Pedro', 'Gloria']
const grupoFinal = ['Maria', ...grupoA, 'Rafaela']
console.log(grupoFinal)