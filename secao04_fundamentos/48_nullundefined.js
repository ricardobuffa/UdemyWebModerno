const a = {name: 'Teste'};

console.log(a);

const b = a;

console.log(b);

b.name = 'Opa';

console.log(a);

//a e b tem endereços e é o mesmo endereço
//os 2 apontam a mesma parte da memoria
//atribuicao de objetos é por referencia
let c = 3;
let d = c;
d++;

//Valor primitivo é atribuição cópia por valor então eles são diferentes
console.log(d);
console.log(c);

let valor; //nao inicializada - o valor padrao e undefined
console.log(valor);

/* Aqui é not defined
console.log(valor2);
*/

valor = null;
console.log(valor);

//console.log(valor.toString()) //Erro

const produto = {};
//outro undefined
console.log(produto.preco);

console.log(produto);

produto.preco = 3.50;

console.log(produto);

