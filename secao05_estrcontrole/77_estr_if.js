function soBoaNoticia(nota) {
    if (nota >= 7){
        console.log('Aprovado com a nota : ' + nota);
    };
};


function seForVerdadeEuFalor(valor) {
    if (valor){
        console.log("É verdade ..." + valor);
    };
};

soBoaNoticia(8.1);

seForVerdadeEuFalor('');
seForVerdadeEuFalor(0);
seForVerdadeEuFalor(NaN);
seForVerdadeEuFalor(null);
seForVerdadeEuFalor(-1);
seForVerdadeEuFalor(' ');


