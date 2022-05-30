//Set um conjunto não indexado que não aceita repetição
const times = new Set()

times.add('Vasco')
times.add('Sao Paulo').add('Palmeiras').add('Corinthians')
times.add('Flamengo')
times.add('Vasco')

console.log(times)

console.log(times.size)

console.log(times.has('vasco'))
console.log(times.has('Vasco'))

times.delete('Flamengo')
console.log(times)

const nomesArray = ['Raquel', 'Lucas', 'Julia', 'Lucas']
console.log(nomesArray)

const nomesSet = new Set(nomesArray)
console.log(nomesSet)