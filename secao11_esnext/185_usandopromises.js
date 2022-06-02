//com promise

const http = require('http')

const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    return new Promise((resolve, reject) => {
        http.get (url, res => {
            let resultado = ''
    
            res.on('data', dados => {
                resultado += dados
            })
    
            res.on('end', () => {
                try {
                    resolve(JSON.parse(resultado))
                } catch(e) {
                    reject(e)
                }
            })
        })
    })
}

let nomes = []
getTurma('A').then(alunos => {
    //console.log(alunos) // todos da turma A aqui para testar
    nomes = nomes.concat(alunos.map( a => `A: ${a.nome}`))
    //console.log(nomes)
    getTurma('B').then(alunos => {
        //console.log(alunos) // todos da turma A e B aqui para testar
        nomes = nomes.concat(alunos.map( a => `B: ${a.nome}`))
        //console.log(nomes)
        getTurma('C').then(alunos => {
            //console.log(alunos) // todos da turma A e B e C aqui para testar
            nomes = nomes.concat(alunos.map( a => `C: ${a.nome}`))
            console.log(nomes)
        
            
        })
        
    })

})

Promise.all([getTurma('A'), getTurma('B'),getTurma('C')])
    .then(turmas => [].concat(...turmas))
    .then(alunos => alunos.map(aluno => aluno.nome))
    .then(x => console.log(x))

