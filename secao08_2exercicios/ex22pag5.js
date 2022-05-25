function funcaoDaSorte(numeroEscolhido){
    let numeroSorteado = Math.round(Math.random() * (10 - 1) + 1)
    if (numeroEscolhido == numeroSorteado) {
        return `Parabéns o número sorteado foi o ${numeroSorteado}`
    } else {
        return `Que pena o número sorteado foi o ${numeroSorteado}`
    }

}


console.log(funcaoDaSorte(10))
console.log(funcaoDaSorte(5))
console.log(funcaoDaSorte(5))
