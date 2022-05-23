const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']

pilotos.pop() // massa saiu da prova remove o último elemento do array

console.log(pilotos)


pilotos.push('Verstappen')
console.log(pilotos)

pilotos.shift() //remove o primeiro elemento da lista

console.log(pilotos)

//Adiciona no inicio do array
pilotos.unshift('Hamilton')

console.log(pilotos)

//splice pode adicionar e remover elementos

//adicionar a partir da posicao 2
pilotos.splice(2, 0, 'Bottas','Massa')

console.log(pilotos)

//remover a partir do indice
pilotos.splice(3, 1) //massa quebrou novamente
console.log(pilotos)

//Pŕoximo método --> slice retorna um novo array cortando a partir da posicao 2 
const algunsPilotos1 = pilotos.slice(2)
console.log(algunsPilotos1)

//Do indice 1 (inclusive 1) ate o indice 4 (o indice 4 não entra)
const algunsPilotos2 = pilotos.slice(1, 4)
console.log(algunsPilotos2)