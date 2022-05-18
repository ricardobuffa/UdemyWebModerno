//definido com var então não tem escopo de bloco

for (var i = 0; i < 10; i++){
    //Aqui de zero a nove
    console.log(i);
};

//Aqui ele vale 10
console.log(i);