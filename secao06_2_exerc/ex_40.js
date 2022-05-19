function conceito(nota){
    switch (true){
        case (nota<5) : {
            return 'D';
            break;
        }
        case (nota<7) : {
            return 'C';
            break;
        }
        case (nota<9) : {
            return 'B';
            break;
        }
        case (nota<7) : {
            return 'A';
            break;
        }
    }

}

console.log(conceito(4))