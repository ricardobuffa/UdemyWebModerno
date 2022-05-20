//Funcoes importantes de objects

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa))
console.log(Object.values(pessoa))
//volta um array com os elementos do objecto
console.log(Object.entries(pessoa))

Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})

//dando um nome para variavel
//Isso chama destructuring  desestruturação
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

//Definir características de uma propriedade
Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

//Object.assign _ECMAScript 20215)
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
//const obj = Object.assign(dest, o1, o2)


//note que o a de obj recebe 4 pq? nao sei
//console.log(obj)

const obj2 = Object.assign(o2,dest)
console.log(obj2)