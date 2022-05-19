function calculadora(valor1, operacao, valor2){
    let textop = operacao.toString();
    let numero1 = valor1;
    let numero2 = valor2;
    switch (textop) {
        case '+':
            return numero1 + numero2;
            break;
        case '-':
            return numero1 - numero2;
            break;
        case '/':
            return numero1 / numero2;
            break;
        case '*':
            return numero1 * numero2;
            break;            
        default:
            return 'Erro na entrada de dados';
    }
}

console.log (calculadora('1','+','3'))