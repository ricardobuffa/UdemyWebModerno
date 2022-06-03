function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            //console.log('Executando promise')
            resolve()
        }, tempo)
    })
}

// esperarPor(2000)
//     .then(esperarPor)
//     .then(esperarPor)

//let p = esperarPor().then(() => esperarPor())
                    //.then(esperarPor)

function retornarValor() {
    return new Promise(resolve => {
        setTimeout(() => resolve(10),5000)
    })
}

async function executar() {
    //await
    valor = await retornarValor()
    
    await esperarPor(1500)
    console.log(`executar1 ${valor}`)

    await esperarPor(1500)
    console.log(`executar2 ${valor + 1}`)

    await esperarPor(1500)
    console.log(`executar3 ${valor + 2}`)    

    return valor + 3
}

executar()

//Se eu fizer isso vou ter uma promise
//const v = executar()
//console.log(v)



async function executarDeVerdade() {
    const valor = await executar()
    console.log(valor)
}

executarDeVerdade()