function calculaFatorial(numero) {
    let fatorial = 1
    for (let i = numero; i > 0; i--){
        fatorial *= i;
    }
    return(fatorial);
}

console.log(calculaFatorial(7))