// Aumento

function novoSalario(plano,salario){
    switch (plano){
        case 'A': {
            return salario*1.1;
        }
        case 'B': {
            return salario*1.15;
        }
        case 'C': {
            return salario*1.2;
        }
        default: {
            return 'plano invalido'
        }
    }
}

console.log (novoSalario('A',1000))
console.log (novoSalario('B',1000))
console.log (novoSalario('C',1000))
console.log (novoSalario('D',1000))