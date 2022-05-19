function eDiaUtil(dia){
    let text = dia.toString();
    switch (text) {
        case '1':
            return false;
            break;
        case '2':
            return true;
            break;
        case '3':
            return true;
            break;
        case '4':
            return true;
            break;
        case '5':
            return true;
            break;
        case '6':
            return true;
            break;
        case '7':
            return false;
            break;
        default:
            return 'numero invalido';
    }
}

console.log(eDiaUtil('as'))