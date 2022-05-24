const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

console.log( alunos.map(a => a.bolsista))

const resultado = alunos.map(a => a.bolsista).reduce(function(todosbolsistas, atual){
    console.log(todosbolsistas, atual)
    return todosbolsistas && atual
}, true)

const resultado2 = alunos.map(a => a.bolsista).reduce(function(todosbolsistas, atual){
    console.log(todosbolsistas, atual)
    return todosbolsistas || atual
}, false)