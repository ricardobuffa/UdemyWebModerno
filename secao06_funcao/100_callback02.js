const notas = [7.7, 8.0, 6.3 , 8.9, 9.0, 5.2 , 2.0]

const notasBaixas1 = []
    for (let i in notas) {
        if (notas[i] < 7) {
            notasBaixas1.push(notas[i])
        }
    }

console.log(notasBaixas1)


//Com callback
const notasBaixas2 = notas.filter(function (nota) {
    return nota < 7
})

console.log(notasBaixas2)

//Callback e arrow
const notasMenorQue7 = nota => nota < 7
const notasBaixas3 = notas.filter(notasMenorQue7)

console.log(notasBaixas3)