//Factory é um padrão de projeto 
/*
const prod1 = {
    nome: '...',
    preco: 45
}


const prod2 = {
    nome: '...',
    preco: 12345
}
*/

//Factory simples
function criarPessoa() {
    return{
        nome: 'Ana',
        sobrenome: 'Silva'
    }
}

console.log(criarPessoa())