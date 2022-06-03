const { reject } = require("lodash")

function gerarNumerosEntre(min, max, numerosProibidos) {
    if (min > max) {
        [min, max] = [max, min]
    }
    return new Promise((resolve, reject) => {
        const fator = max - min + 1
        const aleatorio = parseInt(Math.random() * fator) + min
        if (numerosProibidos.includes(aleatorio)) {
            reject('Número repetido!')
        } else {
            resolve(aleatorio)
        }
    })
}

async function gerarMegaSena(qtdeNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdeNumeros).fill()) {
            numeros.push(await gerarNumerosEntre(1, 60, numeros))
        }
        return numeros
    } catch (e) {
        throw "Que chato!!!"
    }
}

gerarMegaSena(15).then(console.log)
    //.catch(console.log)

//Funcao que gera os numeros da megasena numeros que ja foram sorteados - nao podem ser duplicidades