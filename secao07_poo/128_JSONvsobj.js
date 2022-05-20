const obj = { a: 1, b : 2, c: 3, soma() {return a + b + c}}

//note que a função é excluída - pois é um formato de dados
console.log(JSON.stringify(obj))

// console.log(JSON.parse("{ a: 1, b: 2, c: 3}"))
// console.log(JSON.parse("{ 'a': 1, 'b': 2, 'c': 3}"))
console.log(JSON.parse('{ "a": 1, "b": 2, "c": 3 }'))
console.log(JSON.parse('{ "a": 1.7, "b": "string", "c": true, "d": {}, "e": [] }'))