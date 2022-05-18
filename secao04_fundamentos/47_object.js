//Json significa Java Script Object Notation
//Json parece muito mas é um formato textual não é a mesma coisa
//diferente de criar objetos de uma forma literal

//par de chaves representa um objeto

const prod1 = {};

//O nome - um atributo - é criado dinâmicamente em JS
prod1.nome = 'Celular Ultra Mega';
prod1.valor = 45234.90;

prod1['Desconto Legal'] = 0.40; //evitar atributos com espaco

//Um objeto pode ter outro objeto dentro? Sim produto pode ter valor

//Um objeto é um conjunto de n chave(s) - valor(es)

console.log(prod1);

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
};

console.log(prod2);

/*Pra ilustrar o Json seria assim do prod2
'{ "nome": "Camisa Polo", "preco": 79.90}'
*/