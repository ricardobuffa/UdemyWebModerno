

const axios = require('axios');

//entendendo essa linha aqui
const chineses = f => f.pais === 'China'




const soma4 = (numero1, numero2) => numero1+numero2;


const soma2 = function(numero1, numero2) {
    return numero1+numero2;
}





async function makeGetRequest() {
    let res = await axios.get('http://files.cod3r.com.br/curso-js/funcionarios.json');
    let objetoFuncionarios = res.data;
    const func = objetoFuncionarios
        .filter(function(value) { return value.pais=='China'})
        .filter(g => g.genero=='F')
        .reduce(function(acumulador, atual) { 
                    if (acumulador.salario<atual.salario) { return acumulador }
                    else {return atual}
                })
    console.log(func)
}


makeGetRequest();