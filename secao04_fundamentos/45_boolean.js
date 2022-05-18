let isAtivo = false;
console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
//Se imprimir direto ele é tipo number
console.log(isAtivo);
console.log(typeof isAtivo);

//Coloca negação que é a exclamação para converter... e a negação da negação faz voltar pro valor original
//1 equivale ao verdadeiro e 0 false
console.log(!!isAtivo);
console.log(!isAtivo);

console.log('os verdadeiros');

console.log(!!3);
console.log(!!-1);
console.log(!!2);
console.log(!!' ');
console.log(!![]);
console.log(!!{});
console.log(!!Infinity);
//atribuicao ele olha o que está do lado direito
console.log(!!(isAtivo = Infinity));
console.log(!!(isAtivo = true));

console.log('os falsos');
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
//atribuicao ele olha o que está do lado direito
console.log(!!(isAtivo = false));


//|| é o ou lógico só um deles sendo v já da verdadeiro
console.log(!!('' || null || 0 || ''));

let nome = '';

console.log(nome || 'Desconhecido');

let nome2 = 'Lucas';

console.log(nome2 || 'Desconhecido');