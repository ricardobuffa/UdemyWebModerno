//sem promise e callback

const http = require('http')

const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    http.get (url, res => {
        let resultado = ''

        res.on('data', dados => {
            resultado += dados
        })

        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

let nomes = []
getTurma('A', alunos => {
    //console.log(alunos) // todos da turma A aqui para testar
    nomes = nomes.concat(alunos.map( a => `A: ${a.nome}`))
    //console.log(nomes)
    getTurma('B', alunos => {
        //console.log(alunos) // todos da turma A e B aqui para testar
        nomes = nomes.concat(alunos.map( a => `B: ${a.nome}`))
        //console.log(nomes)
        getTurma('C', alunos => {
            //console.log(alunos) // todos da turma A e B e aqui para testar
            nomes = nomes.concat(alunos.map( a => `C: ${a.nome}`))
            console.log(nomes)
        
            
        })
        
    })

})