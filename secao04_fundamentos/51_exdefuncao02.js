//Exemplo básicos de funções

//Armazenando uma funcao em uma variavel

const imprimirSoma = function (a, b) { 
    console.log(a + b);
};

imprimirSoma(2, 3);

//Função arrow
const soma = (a, b) => {
    return a + b;
};

console.log(soma(3, 4));

//retorno implícito
const subtracao = (a, b) => a - b;

console.log(subtracao(3, 4));