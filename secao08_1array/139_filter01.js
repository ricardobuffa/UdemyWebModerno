const produtos = [
    {nome: 'Notebook', preco: 2499, fragil: true},
    {nome: 'Ipad Pro', preco: 4199, fragil: true},
    {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
    {nome: 'Copo de Plástico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p) {
    return p.preco > 2400
}))

console.log(produtos.filter(function(p) {
    return (p.preco > 2400 && p.fragil == true)
}))

//Sem arrow
resultado2 = produtos.filter(function(p) {return p.preco > 2400}).filter(function(q) {return q.fragil == true})

//Com arrow
resultado3 = produtos.filter(p => p.preco > 2400).filter(q => q.fragil)

console.log(resultado2)
console.log(resultado3)


//Resposta do site

const caro = produto => produto.preco >= 500
const fragil = produto => produto.fragil

console.log(produtos.filter(caro).filter(fragil))