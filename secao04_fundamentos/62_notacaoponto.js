console.log(typeof console);

console.log(Math.ceil(6.1));

//Criação dinâmica de atributo
const obj1 = {}
obj1.nome = 'Bola'
//Equivalente
//obj1['nome'] = 'Bola'

console.log(obj1.nome);


function Obj(nome) {
    this.nome = nome;
    this.exec = function() {
        console.log('Exec...');
    }
};


const obj2 = new Obj('cadeira');

console.log (obj2.nome);

const obj3 = new Obj('mesa');

console.log (obj3.nome);

obj3.exec();