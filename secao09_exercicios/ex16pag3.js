function checarAnoBissexto(ano) {
    //De 400 em 400 é bissexto... o numero é divisivel por 400
    if ((ano%400) == 0) {
        return true;
    } else {
        let unidadedezena = ano%100;
        if (unidadedezena == 0) {
            return false;
        } else {
            let dezenaporquatro = unidadedezena % 4
            if (dezenaporquatro == 0){
                return true;
            } else {
                return false;
            }
        }

    }
}

console.log(checarAnoBissexto(2024))