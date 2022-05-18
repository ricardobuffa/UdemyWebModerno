console.log('01)', '1' == 1);
//comparacao com o tipo -- estritamente igual
console.log('02)', '1' === 1);

//Diferente sem considerar o tipo
console.log('03)', '3' != 3);

//Diferente considerando o tipo - um é string o outro é number
console.log('04)', '3' !== 3);

console.log('05)', 3 < 2);
console.log('06)', 3 > 2);
console.log('07)', 3 <= 2);
console.log('08)', 3 >= 2);


const d1 = new Date(0);
const d2 = new Date(0);
//Como é referência de memória vai dar false

console.log('09)', d1 == d2);

console.log('10)', d1 === d2);
//Já o valor buscado vira number -- numero de referencia da data e daí da verdadeiro
console.log('11)', d1.getTime() === d2.getTime());
//console.log('11)', d1.getTime() == d2.getTime());

console.log('12)', undefined == null);
console.log('13)', undefined === null);


