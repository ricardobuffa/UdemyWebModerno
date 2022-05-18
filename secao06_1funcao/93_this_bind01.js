const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()

//Conflito entre paradigmas: funcional e OO
const falar = pessoa.falar

falar()

const falarDePessoa = pessoa.falar.bind(pessoa)
falarDePessoa()


