//Operador de desestruturação

//Novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
};

//Extrair valores com destructuring
//Tire de dentro do objeto - esses valores
const {nome, idade } = pessoa

console.log(nome, idade);

//Se eu quiser trocar o nome das variaveis pra não ficar igual ao do objeto
const {nome: nameer, idade: age } = pessoa

console.log(nameer, age);

const { sobrenome, bemHumorada = true} = pessoa

console.log(sobrenome, bemHumorada);

const { endereco: {logradouro, numero, cep}} = pessoa;

//cep é undefined
console.log(logradouro, numero, cep);

