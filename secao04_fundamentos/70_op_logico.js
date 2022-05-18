function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTV50 = trabalho1 && trabalho2;
    //const comprarTV32 = !!(trabalho1 ^ trabalho2); //bitwise xor
    const comprarTV32 = trabalho1 != trabalho2; //operador diferença simula o ou exclusivo
    const manterSaudavel = !comprarSorvete;
    // jeito antigo return { sorvete: comprarSorvete, comprouTV50: comprarTV50, comprouTV32: comprarTV32, mnterSaudavel: manterSaudavel };
    // Se o atributo for o mesmo nome da constante da pra usar assim
    return { comprarSorvete, comprarTV50, comprarTV32, manterSaudavel };
};

console.log(compras(true,true));
console.log(compras(true,false));
console.log(compras(false,true));
console.log(compras(false,false));