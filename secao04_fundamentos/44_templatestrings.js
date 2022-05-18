const nome = 'Rebeca';
const concatenacao = 'Olá ' + nome + '!';

//no template string da pra pular linha no código

const template = `
    Olá
    ${nome}!
`;

console.log(concatenacao);
console.log(template);

//expressoes
console.log(`1 + 1 = ${1 + 1}`);

const up = texto => texto.toUpperCase();

console.log(`Ei... ${up('cuidado')}!`);

//Template string é de 2015 pra frente