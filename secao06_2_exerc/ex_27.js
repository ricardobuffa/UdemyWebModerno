function verificaSePassaraAltura(alt1,alt2,tx1,tx2) {
    let diferenca = alt1 - alt2;
    let interacoes = 1;

    while (interacoes<80) {
        alt1 = alt1 + interacoes*tx1;
        alt2 = alt2 + interacoes*tx2;
        if (alt1<=alt2) {
            return interacoes;
            console.log('passo')
            break;
        }
        interacoes++;
    }
}

console.log(verificaSePassaraAltura(1.6,0.8,0.1,0.2))