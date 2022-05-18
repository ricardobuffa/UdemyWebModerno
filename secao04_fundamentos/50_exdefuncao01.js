//Exemplo básicos de funções

//Função sem retorno

function imprimirSoma(a, b) { 
    console.log(a+b);
};

imprimirSoma(2, 3);

imprimirSoma(2, 32, 32, 3);

imprimirSoma();

//Funcao com retorno

function soma(a, b = 0){ 
    return a + b;    
};

console.log(soma(2,3));
console.log(soma(2));