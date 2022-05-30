//ES8 Object.values / Object.entries -- uma matriz array de array

const obj = {a:1, b: 2, c:3}

console.log(Object.values(obj))
console.log(Object.entries(obj))

//melhorias na notacao literal
const nome = 'Carla'
//Antigamente tinha que escrever nome:nome
const pessoa1 = {
    nome: nome
}
console.log (pessoa1)
//Ja que hoje nao e antigamente Antigamente tinha que escrever nome:nome
const pessoa2 = {
    nome
}
console.log (pessoa2)

//Antigamente tinha que escrever function (no ola)
const pessoa3 = {
    nome,
    ola: function(){
        return 'Oi pessu'
    }
}
console.log (pessoa3)
console.log (pessoa3.ola())

//Ja que hoje nao e antigamente Antigamente tinha que escrever function (no ola)
const pessoa4 = {
    nome,
    ola (){
        return 'Oi gentem'
    }
}
console.log (pessoa4)
console.log (pessoa4.ola())

//Classes linguagens orientadas a classe - internamente ela convertida pra funcao
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'AuAU!'
    }
}

snoopy = new Cachorro()
console.log(snoopy.falar())