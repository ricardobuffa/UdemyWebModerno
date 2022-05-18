let num1 = 1;
let num2 = 2;

num1++;

console.log(num1);

--num1;
console.log(num1);

//num2 só recebe decremento 1 depois da comparacao por isso a linha abaixo da true
console.log(++num1 === num2--);