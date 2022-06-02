/*
setTimeout(function() {
    console.log('Executando callback')

    setTimeout(function() {
        console.log('Executando callback2')
        setTimeout(function() {
            console.log('Executando callback3')
        }, 2000)
    }, 2000)
}, 2000)
*/
//Equivalente com promises minha autoria... não rolou
/*
let p = new Promise(function(resolve) {
    resolve(['Executando callback'])
})

const esperaDoisSeg = function(texto) {
    setTimeout(function() {
        console.log(texto)
    }, 2000)
    return(texto)
}
p.then(esperaDoisSeg)
 .then(esperaDoisSeg)
 .then(esperaDoisSeg)
 */

function esperarPor(tempo = 2000) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log('Executando promise')
            resolve('Vishhh')
        }, tempo)
    })
}

 let p = esperarPor().then(() => esperarPor())
                     .then(esperarPor)