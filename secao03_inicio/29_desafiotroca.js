let a = 7;
let b = 94;
let temp = a;
//troca a com b
a = b;
b = temp;


console.log(a);
console.log(b);

//Outra sintaxe para troca de valores [a,b]=[b,a] veja com as variaveis c e d
let c = 7;
let d = 94;
[c, d] = [d, c];

console.log(c);
console.log(d);