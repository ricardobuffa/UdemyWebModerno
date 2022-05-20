//pessoa -> 123 -> {textojoao}
const pessoa = { nome: 'Joao'}
//quando eu faço a mudança no atributo não mexe no endereço de memoria
pessoa.nome = 'Pedro'

console.log(pessoa)


//Mas quando a variável pessoa vai apontar pra um outro endereço
// pessoa -> 456 -> {textoana}
//daí esse código a seguir dará erro, pois pessoa é uma constante
/*
pessoa = { nome: 'Ana'}
*/

//Agora se quiser que o objeto fique imutável use o método freeze
Object.freeze(pessoa)

//não dá erro simplesmente ignora a atribuição
//Não pode alterar um atributo que já existe
//não pode adicionar atributos
pessoa.nome = 'Maria'
pessoa.endereco = 'Rua ABC'
console.log(pessoa)

//Criar um objeto nascendo Freeze
const pessoaConstante = Object.freeze({nome: 'Joao'})
pessoaConstante.nome = 'Maria'
console.log(pessoaConstante)