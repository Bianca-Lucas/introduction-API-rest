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

// -> Home:
app.get('/', (req, res) => {
    res.send('Bem-vindo a API!')
})

// -> Usuários Cadastrados:
app.get('/usuarios', (req, res) => {
    // res.send(usuarios)
    //res.json(usuarios)
    res.status(200).json(usuarios)
})

// -> Atualiza Usuário:
app.put("/usuario/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoEmail } = req.body
    
    const indice = usuarios.findIndex(
        (user) => {
            return user.id == id
        })

        switch(indice){
            case -1:

                break
            default:

        }
        if (indice === -1){
            res.status(404).json("Usuário não encontrado")

    usuarios[indice].nome = novoNome
    usuarios[indice].email = novoEmail 
        
    res.send(usuarios)
        }

    //if (indice === -1) {
    //    res.status(404)
    //} else {
        
    //}
})

// -> Deletar um usuário pelo id
app.delete("/usuario/:id", (req, res) => {
    const { id } = req.params
    const indice = usuarios.findIndex(
        (user) => {
            return user.id == id
        }
    )
    usuarios.splice(indice, 1)
    res.send(usuarios)
})


// -> Criar Usuário:
app.post("/criarUsuario", (req, res) => {
    const { nome, email } = req.body;
    const id = usuarios.length + 1
    // id: usuarios[usuarios.length-1].id + 1;
    usuarios.push({
        id: id,
        nome,
        email
    })

    res.status(201).json(usuarios)
})

// -> Rota Extra

app.post("/usuario", (req, res) => {
    const { nome, email } = req.body;
    const id = usuarios.length + 1
    // id: usuarios[usuarios.length-1].id + 1;
    usuarios.push({
        id: id,
        nome,
        email
    })
    res.send(usuarios)

    app.delete("/usuario/:id", (req, res) => {
        const { id } = req.params
        const indice = usuarios.findIndex(
            (user) => {
                return user.id == id
            }
        )
        usuarios.splice(indice, 1)
        res.send(usuarios)
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})