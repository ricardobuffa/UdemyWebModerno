require('./155_global')

console.log(MinhaApp.saudacao())
console.log(global.MinhaApp.saudacao())

//Pode mudar a qualquer hora - mas daí colocamos freeze
console.log(MinhaApp.nome)
MinhaApp.nome = 'Eita'
console.log(MinhaApp.nome)


//Você pode usar o freeze no objeto