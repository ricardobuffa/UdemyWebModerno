function notasNecessarias(valor) {
    vetorresposta = [];
    switch (true) {
        case (valor >= 100) : {
            let quantasdecem = Math.floor(valor/100)
            vetorresposta.push(`são ${quantasdecem} notas de R$100,00`)
            valor = valor -100*quantasdecem
            let modulo100 = valor % 100;
            if (modulo100>=50) {
                vetorresposta.push(`são 1 notas de R$50,00`)
                valor = valor - 50;
                let quantasdedez = Math.floor(valor/10)
                vetorresposta.push(`são ${quantasdedez} notas de R$10,00`)
                let modulo10 = valor % 10;
                if (modulo10>=5) {
                    vetorresposta.push(`são 1 notas de R$5,00`)
                    if (modulo10>5) {
                        vetorresposta.push(`são ${modulo10 - 5} notas de R$1,00`)
                    }
                }
            } else if (modulo100<50) {
                let quantasdedez = Math.floor(valor/10)
                vetorresposta.push(`são ${quantasdedez} notas de R$10,00`)
                let modulo10 = valor % 10;
                if (modulo10>=5) {
                    vetorresposta.push(`são 1 notas de R$5,00`)
                    if (modulo10>5) {
                        vetorresposta.push(`são ${modulo10 - 5} notas de R$1,00`)
                    }
                }
            };
            break;
        }
        case (valor >= 50) : {
            vetorresposta.push(`são 1 notas de R$50,00`)
            valor = valor - 50;
            let quantasdedez = Math.floor(valor/10)
            vetorresposta.push(`são ${quantasdedez} notas de R$10,00`)
            let modulo10 = valor % 10;
            if (modulo10>=5) {
                vetorresposta.push(`são 1 notas de R$5,00`)
                if (modulo10>5) {
                    vetorresposta.push(`são ${modulo10 - 5} notas de R$1,00`)
                }
            } else if (modulo10<5) {
                vetorresposta.push(`são ${modulo10} notas de R$1,00`)
            }
            break;
        }
        case (valor >= 10) : {
            let quantasdedez = Math.floor(valor/10)
            vetorresposta.push(`são ${quantasdedez} notas de R$10,00`)
            let modulo10 = valor % 10;
            if (modulo10>=5) {
                vetorresposta.push(`são 1 notas de R$5,00`)
                if (modulo10>5) {
                    vetorresposta.push(`são ${modulo10 - 5} notas de R$1,00`)
                }
            } else if (modulo10<5) {
                vetorresposta.push(`são ${modulo10} notas de R$1,00`)
            }
            break;
        }
        case (valor >= 5) : {
            vetorresposta.push(`são 1 notas de R$5,00`)
            let quantasdeum = valor - 5;
            if (quantasdeum>0) { vetorresposta.push(`são ${quantasdeum} notas de R$1,00`)}
            break;
        }
        case (valor >= 1) : {
            vetorresposta.push(`são ${valor} notas de R$1,00`)
            break;
        }
    }

    return vetorresposta;
}

console.log (notasNecessarias(186)) 
