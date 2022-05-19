function eCarroLegal(dia){
    let text = dia.toString();
    switch (text) {
        case 'hatch':
            return "Compra efetuada com sucesso";
            break;
        case 'sedan':
            return "Tem certeza que não prefere este modelo?";
            break;
        case 'motocicleta':
            return "Tem certeza que não prefere este modelo?";
            break;
        case 'caminhonetes':
            return "Tem certeza que não prefere este modelo?";
            break;            
            
        default:
            return 'Não trabalhamos com este tipo de automóvel aqui';
    }
}


console.log(eCarroLegal('hatch'))
console.log(eCarroLegal('sedan'))
console.log(eCarroLegal('motocicleta'))
console.log(eCarroLegal('caminhonetes'))
console.log(eCarroLegal('entradaqq'))