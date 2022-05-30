const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
// O axios serve para fazer requisições e puxar a informacao do servidor
const axios = require('axios')



//Mulher Chinesa com o menor salário
function filtraMulherChinesaMenorSalario(objetoDeEntrada) {
    let menorsalario = 16158.43

    Object.keys(objetoDeEntrada).forEach((item) => {
            if ((objetoDeEntrada[item]['genero']=='F')&&(objetoDeEntrada[item]['pais']=='China')) {
                if (objetoDeEntrada[item]['salario']<menorsalario) {
                menorsalario = objetoDeEntrada[item]['salario']
                }
            }
    })
    return menorsalario
}



axios.get(url).then(response => {
    const funcionarios = response.data
    //console.log(funcionarios[0]['salario'])
    console.log (filtraMulherChinesaMenorSalario(funcionarios))
})



const obj = {
    "column01": "Coluna 01",
    "column02": "Coluna 02"
  };
  
  Object.keys(obj).forEach((item) => {
    console.log(item + " = " + obj[item]);
  });
  
  for (const property in obj) {
    console.log(property + " = " + obj[property]);
  }