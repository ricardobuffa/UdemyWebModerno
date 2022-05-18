//definido com var então não tem escopo de bloco

for (let i = 0; i < 10; i++){
    //Aqui de zero a nove
    console.log(i);
};

//Aqui ele dá erro está fora do escopo
//console.log(i);