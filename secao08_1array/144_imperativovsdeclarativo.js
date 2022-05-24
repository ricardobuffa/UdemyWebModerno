const alunos = [
    {nome: 'João', nota: 7.9},
    {nome: 'Maria', nota: 9.2},
]


//Abordagem Imperativa
let total1 = 0
for (let i = 0; i < alunos.length; i++) {
    total1 += alunos[i].nota
}
const media1 = total1 / alunos.length
console.log (media1)

//Abordagem declarativa
const getNota = aluno => aluno.nota
const soma = (total, atual) => total + atual
const total2 = alunos.map(getNota).reduce(soma)
const media2 = total2 / alunos.length
console.log (media2)