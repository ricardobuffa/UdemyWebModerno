const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// O axios serve para fazer requisições e puxar a informacao do servidor
const axios = require('axios')


const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual
}


//Mulher Chinesa com o menor salário
axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios)
    //console.log(funcionarios)
    const func = funcionarios
    .filter(chineses)
    .filter(mulheres)
    .reduce(menorSalario)
    console.log(func)
})

