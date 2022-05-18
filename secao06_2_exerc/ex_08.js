
let listaPedro = "20 17 27 16 12 5 8 33"


function posicaoPiorVetorRecord(listaPontuacoes) {
    let txtquebrado2 = listaPontuacoes.split(" ");
    let txtquebrado = []
    txtquebrado2.forEach(str => {
        txtquebrado.push(Number(str));
      });
    let tempmelhorresultado = txtquebrado[0]
    let temppiorresultado = txtquebrado[0]
    let posicaopior = 0;
    let vetorresposta = [txtquebrado[0]]
    for (let i = 1; i < txtquebrado.length; i++) {
        //console.log(`i vale ${i}`)
        //console.log(`posicaopior vale ${posicaopior}`)
        //console.log(`txtquebrado i vale ${txtquebrado[i]}`)
        //console.log(`tempmelhorresultado vale ${tempmelhorresultado}`)
        //console.log(`temppiorresultado vale ${temppiorresultado}`)
        
        if (tempmelhorresultado < txtquebrado[i]) {
            tempmelhorresultado = txtquebrado[i]
            //console.log('passo')
            vetorresposta.push(txtquebrado[i])
        }
        if (temppiorresultado > txtquebrado[i]) {
            temppiorresultado = txtquebrado[i]
            //console.log('PASSO')
            posicaopior = i
        }
        console.log(' ')

    }
    vetorresposta.push(posicaopior)
    return (vetorresposta)
}


console.log(posicaoPiorVetorRecord(listaPedro))