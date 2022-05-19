function eFrutaUtil(dia){
    let text = dia.toString();
    switch (text) {
        case 'maçã':
            return "Não vendemos esta fruta aqui";
            break;
        case 'kiwi':
            return "Estamos com escassez de kiwis";
            break;
        case 'melancia':
            return "Aqui está, são 3 reais o quilo";
            break;
        default:
            return 'entrada invalida';
    }
}


console.log(eFrutaUtil('maçã'))
console.log(eFrutaUtil('kiwi'))
console.log(eFrutaUtil('melancia'))
console.log(eFrutaUtil('entradaqq'))