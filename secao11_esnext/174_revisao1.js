//let e const
//antigamente tinha o var

//var não tem escopo de bloco

//let tem escopo de bloco

{
    var a = 2 
    let b = 3
}

console.log(a)

//isso daria erro
//console.log(b)

//Template string
const produto = 'iPad'
console.log(`${produto} 
é caro`)

//destructuring
const [l, e, ...tras] = "Cod3r"
console.log (l, e, tras)
const [x,y,z] = [1,2,3,4]

console.log(x,y,z)

const { idade:i, nome } = { nome: 'Ana', idade: 9}

console.log(i,nome)