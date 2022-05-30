const porta = 3003

const express = require('express')
const app = express()

const bodyParser = require('body-parser')

const bancoDeDados = require('./bancoDeDados')

app.use(bodyParser.urlencoded( { extended: true }))

app.get('/produtos', (req, res, next) => {
    res.send(bancoDeDados.getProdutos()) // converte para JSON
})

app.get('/produtos/:id', (req,res, next) => {
    res.send(bancoDeDados.getProduto(req.params.id))
})

app.post('/produtos', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Isso aqui vai gerar um JSON
})

app.put('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //Isso aqui vai gerar um JSON
})

app.delete('/produtos/:id', (req, res, next) => {
    const produto = bancoDeDados.excluirProduto(req.params.id)
    res.send(produto) //Isso aqui vai gerar um JSON
})


app.listen(porta, () => {
    console.log(`Servidor esta executando na porta ${porta}.`)
})

/*
app.get('/produtos', (req, res, next) => {
    console.log('Middleware1...')
    next()
})


app.get('/produtos', (req, res, next) => {
    res.send({nome: 'Notebook', preco: 123.45}) // converte para JSON
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}.`)
})

*/