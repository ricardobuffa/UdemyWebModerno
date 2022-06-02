//let a = 1
//console.log(a)

//a promise recebe uma funcao que vai ser a funcao que eu quero chamar ela quando for cumprir a promessa
let p = new Promise(function(resolve) {
    resolve(['Ana','Bia','Carlos','Daniel'])
})

//Then é um método que também recebe uma função como parâmetro e o valor passado
// pra function dentro de then é o valor que foi cumprido na promessa (no caso (3))

//Quando a promessa for cumprida então vai rodar o p.then

p
    .then(valor  => console.log(valor))

//O then encadeado vai pegando a saida de um e trablando na próxima chamada veja
const primeiroElemento = (array) => array[0]

const primeiraLetra = (string) => string[0]


const letraMinuscula = letra => letra.toLowerCase()

p
    .then(primeiroElemento)
    .then(primeiraLetra)
    .then(letraMinuscula)
    .then(console.log)