//São 3 símbolos aspas duplas, aspas simples e crase para template string

const escola = "Cod3r";

//Posicao 4 da string
console.log(escola.charAt(4));

console.log(escola.charAt(5));

//retorna o código html código relacionado a tabela unicode
console.log(escola.charCodeAt(3));

//Em que posicao da string esta o 3?
console.log(escola.indexOf('3'));

//substring saia do indice 0 e ande 3
console.log(escola.substring(0, 3));

//toda string tem como método concat
console.log('Escola '.concat(escola).concat("!"));

//pode concatenar com +
console.log('Escola ' + escola +"!");

//troca um caracter por outro
console.log(escola.replace(3,'e'));

//replace pode e deve usar regex - nao tem exemplo
console.log(escola.replace(3,'e'));

//split converte um string com elementos separados por vírgula pra um array
console.log('Ana,Maria,Pedro'.split(','));

console.log('Ana,Maria,Pedro'.split(',')[0]);

//string tem preferencia na soma com numero dai concatena - saida 23
console.log("2" + 3);

