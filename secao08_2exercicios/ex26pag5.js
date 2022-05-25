function removerVogais(stringDeEntrada) {

    stringDeSaida = stringDeEntrada

    while (stringDeSaida.includes('a')||stringDeSaida.includes('e')||stringDeSaida.includes('i')||stringDeSaida.includes('o')||stringDeSaida.includes('u')) {
        stringDeSaida = stringDeSaida.replace('a','')
        stringDeSaida = stringDeSaida.replace('e','')
        stringDeSaida = stringDeSaida.replace('i','')
        stringDeSaida = stringDeSaida.replace('o','')
        stringDeSaida = stringDeSaida.replace('u','')
    }
    return stringDeSaida
}

stringteste = "Fundamentosaaeiouaeiouasdfklasflkfaeqrerqrqweiuioiuoiuafaffsiiiasdffasfsauuafaffasdoo"

console.log(removerVogais(stringteste))
