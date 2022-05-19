function calcula(mes, mensalidade){
    let i = 0.05;
    let C = mensalidade;
    let t = mes - 1;
    if (t == 0) { 
        return mensalidade
    } else return C* ((1 + i)**t);
}

console.log(calcula(12,100))