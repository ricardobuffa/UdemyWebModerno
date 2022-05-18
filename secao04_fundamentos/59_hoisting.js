//Hoisting é içar

console.log('a =', a);

var a = 2;

console.log('a =', a);


/* 
O código final equivalente
var a;

console.log('a =', a);

a = 2;

console.log('a =', a);
*/

//O efeito de içamento não ocorre com let