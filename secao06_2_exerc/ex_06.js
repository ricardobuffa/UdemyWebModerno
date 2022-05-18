function calculaMontanteJurosSimples(capitalinicial, taxadejuros, tempodeaplicacao){
    return (capitalinicial + (capitalinicial*taxadejuros*tempodeaplicacao))
}
function calculaMontanteJurosCompostos(capitalinicial, taxadejuros, tempodeaplicacao){
    return (capitalinicial * ( ( 1 + taxadejuros) ** tempodeaplicacao) )
}

console.log(calculaMontanteJurosSimples(100,0.1,10))
console.log(calculaMontanteJurosCompostos(100,0.1,10))