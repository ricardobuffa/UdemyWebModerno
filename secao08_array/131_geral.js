//Isso da function

console.log(typeof Array)

//Isso da object pq new de uma function é um objeto

console.log(typeof new Array)

//E também o array literal - quando você usa chaves - também é object

console.log(typeof [])

//Forma não recomendada mas válida de criar um array
let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados)

//Agora a notação literal
aprovados = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Abia') 

console.log(aprovados.length)

aprovados[9] = 'Rafael'

console.log(aprovados)

console.log(aprovados.length)

console.log(aprovados[8] === undefined)

console.log(aprovados)

//Isso aqui não preenche os vazios... ele pula
aprovados.push('Bianca')
aprovados.push('Carla')
aprovados.push('Diogo')
aprovados.push('Epaminondas')
aprovados.push('Fabio')

console.log(aprovados)

//Ordenando - mudou o array original - ele não retorna um array
aprovados.sort()
console.log(aprovados)

//Ele não reordena nem puxa os elementos pra baixo... na posicao 1 vai ficar undefined
delete aprovados[1]
console.log(aprovados)

console.log(aprovados[2])

//Vamos remontar o array pra ficar mais fácil

//Splice serve para algumas coisas... adicionar em um determinado indice.... remover em um lugar especifico e remover e adicionar ao mesmo tempo
aprovados = ['Bia', 'Carlos', 'Ana']
//qual a altura e quantos elementos excluir... logo a linha de baixo exclui o carlos
aprovados.splice(1, 1)

aprovados = ['Bia', 'Carlos', 'Ana']
//já o proximo comando 1,2 remove 2 elementos então o carlos e a Ana - sobra só a Bia
aprovados.splice(1, 2)
console.log(aprovados)

//E como faz pra adicionar elementos? a partir do indice 1, excluir 2 elementos e adiciona os 2 elementos
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 2, 'Elemento1', 'Elemento2')
console.log(aprovados)

// E para adicionar sem excluir ninguém - use o zero - ele adiciona naquela posicao e "empurra" os outros mais pra frente
aprovados = ['Bia', 'Carlos', 'Ana']
aprovados.splice(1, 0, 'Elemento1', 'Elemento2')
console.log(aprovados)