import express from 'express'
const app = express()
const port = 3000

// -> permitir ler JSON no corpo da requisição
app.use(express.json())

// -> Banco de Dados in memory
const usuarios = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Ana', email: 'ana@email.com' }
]

app.get('/', (req, res) => {
    res.send('Bem vindo a API!')
})

app.get('/usuario', (req, res) => {
    res.send(usuarios)
})

app.post("/criarUsuario", (req, res) => {
    const { nome, sobrenome } = req.body;
    res.send(`
        
        Nome Completo é: ${nome} ${sobrenome}

        `)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})