const fs = require('fs');
const path = require('path');

//const caminho = path.join(__dirname, 'dados.txt')

function exibirConteudo(_, conteudo) {
    console.log(conteudo.toString())
}

//console.log('Inicio...')
//fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString()))
//console.log('Fim...')


// você vai passar para a promise o caminho (path)
//o resultado da promessa vai ser o conteúdo do arquivo



function lerArquivo(pathPassada = '/home/ricardo/UdemyWebModerno/secao11_esnext/') {
    const caminho = path.join(pathPassada, 'dados.txt')

    return new Promise(resolve => {
        const conteudo = fs.readFile(caminho, exibirConteudo)
        resolve(conteudo)
    })
}

lerArquivo()