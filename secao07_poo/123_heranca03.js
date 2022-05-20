const pai = { nome: 'Pedro', corCabelo: 'preto'}

const filha1 = Object.create(pai)
filha1.nome = 'Ana'

//A filha herda a corCabelo na hora do comando Object.create
console.log(filha1.corCabelo)

const filha2 = Object.create(pai, {
    nome: { value: 'Bia', writeable: false, enumerable: true}
})

console.log(filha2.nome)

filha2.nome = 'Carla'

console.log(`${filha2.nome} tem cabelo ${filha2.cabelo}`)

console.log(Object.keys(filha1))
console.log(Object.keys(filha2))


//hasOwnProperty é o cara que mostra que o atributo é do próprio objeto
for (let key in filha2) {
    filha2.hasOwnProperty(key) ?
        console.log(key) : console.log(`Por heranca ${key}`)
    
}