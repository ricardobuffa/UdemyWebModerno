const a = 1
const b = 2
const c = 3

//notacao antiga
const obj1 = { a : a, b: b, c: c}

//notacao nova - notacao reduzida
const obj2 = { a, b, c}

console.log(obj1,obj2)

//notacao antiga
const nomeAttr = 'nota'
const valorAttr = 7.87

const obj3 = {}
obj3[nomeAttr] = valorAttr

console.log(obj3)

//Versao nova
const obj4 = {[nomeAttr]: valorAttr}
console.log(obj4)

//objeto literal - forma antigoa
const obj5 = {
    funcao1: function() {

    }
}

//objeto literal - forma nova em funcao2
const obj6 = {
    funcao1: function() {

    },
    funcao2(){

    }
}

console.log(obj6)