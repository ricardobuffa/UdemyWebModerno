function contarCaractere(caractere, string){
    let vetorDeCaracteres = string.split('')
    let contador = 0
    for (let i = 0; i<vetorDeCaracteres.length; i++) {
        if (vetorDeCaracteres[i]==caractere){
            contador++
        }
    }
    return contador
}

console.log(contarCaractere("r", "A sorte favorece os audazes"))
console.log(contarCaractere("c", "Conhece-te a ti mesmo"))