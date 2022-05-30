const soma = (a, b) => a + b;

console.log(soma(2, 3))

//Se você colcoar corpo na funcao tem que obrigatoriamente colocar return
const soma2 = (a, b) => {
    a + b
}
//undefined
console.log(soma2(2, 3))

//Se você colcoar corpo na funcao tem que obrigatoriamente colocar return
const soma3 = (a, b) => {
    return a + b
}
//undefined
console.log(soma3(2, 3))

//funcao arrow o this é o exports
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

function log(texto = 'Node') {
    console.log(texto)
}

log()
log(undefined)
log('undefined2')

//operador spread ou operador rest no contexto da função os paramentros serão agrupados o nome e entao e rest
function total(...numeros) {
    let totalRetorno = 0
    numeros.forEach(n => totalRetorno += n)
    return totalRetorno
}


console.log(total(2,3,4,5))