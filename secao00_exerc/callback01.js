//----Exemplo de função callback----
const mensagem = function() {  
    console.log("Essa mensagem 1 é exibida depois de 3 segundos");
}
 
setTimeout(mensagem, 3000);
console.log('Entao essa msg zero é exibida primeiro')

//mensagem aqui é função de callback

//----Próximo exemplo----
//é o mesmo exemplo só que com função anônima, chamando uma função dentro de outra função
setTimeout(function() {  
    console.log("Essa mensagem 2 é exibida após 3 segundos");
}, 3000);

//----Próximo exemplo----
//a mesma coisa que o de cima mas agora com arrow function e funcao anonima
setTimeout(() => { 
    console.log("Essa mensagem 3 é exibida após 3 segundos");
}, 3000);