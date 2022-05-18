//array em js é uma estrutura indexada
//array é heterogeneo - da pra colocar qualquer coisa
//cresce e diminui a vontade não tem tamanho fixo

//declaração de forma literal
let valores = [7.7, 8.9, 6.3, 9.2];

console.log(valores[0], valores[3]);

//ele vai dar só undefined
console.log(valores[4]);

//mas da pra definir
valores[4] = 10;
console.log(valores[4]);

//quantos elementos
console.log(valores.length);

//adiciona ao final
valores.push({id: 3}, false, null, 'teste');

//console.log(valores);


//arranca do array o ultimo valor

valores.pop();

//console.log(valores);

delete valores[0];

console.log(valores);