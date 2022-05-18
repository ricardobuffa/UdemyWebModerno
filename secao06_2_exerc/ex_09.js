function arrendondaNota(nota){
    if (nota<=40){
        if (nota>0){
            return (nota)
        } else if (nota<0){
            return (0)
        }
    } else if (nota>100) {
        return (0)
    } else {
        let restopor10 = nota % 10
        if ((restopor10 == 0)||(restopor10 == 5)||(restopor10 == 1)||(restopor10 == 2)||(restopor10 == 6)||(restopor10 == 7)){
            return (nota)
        } else {
            if (restopor10 == 3) {return (nota+2)}
            if (restopor10 == 4) {return (nota+1)}
            if (restopor10 == 8) {return (nota+2)}
            if (restopor10 == 9) {return (nota+1)}
        }
    }
}

console.log(arrendondaNota(58))