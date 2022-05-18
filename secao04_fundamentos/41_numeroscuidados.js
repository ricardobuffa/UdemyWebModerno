//Esse tipo existe em javascipt é infinity
console.log(7/0);

//Já virgula no texto ele não aceita, vai só concatenar
console.log("10,2"+2);

//mas se for sem virgula aceita

console.log("10"/2);

console.log("10.2"/2);

//Com ponto vai tb mas é impreciso... é especificação do IEEE pra linguagem ficar rapido
console.log(0.1+0.7);

//Esse próximo aqui da unexpected token
//console.log(10.toString);

//Com parenteses funciona tofixed corta as casas
console.log((10.4234).toFixed(2));

//Dividir um texto por um numero gera um not a number NaN
console.log("ERRONAN"/2);



//string tem preferencia na soma com numero dai concatena - saida 23
console.log("2" + 3);