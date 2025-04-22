import express from 'express'
const router = express.Router();

// -> Banco de Dados in memory
const usuarios = [
    { id: 1, nome: 'João', email: 'joao@email.com' },
    { id: 2, nome: 'Ana', email: 'ana@email.com' }
]

// -> Criar Usuário:
router.post("/criarUsuario", (req, res) => {
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

// -> Usuários Cadastrados:
router.get('/usuarios', (req, res) => {
    res.send(usuarios) 
    // or res.json(usuarios)res.status(200).json(usuarios)
})

// -> Atualiza Usuário:
router.put("/usuario/:id", (req, res) => {
    const { id } = req.params
    const { novoNome, novoEmail } = req.body
    
    const indice = usuarios.findIndex(
        (user) => {
            return user.id == id
        })

        if (indice === -1){
            return res.status(404).json("Usuário não encontrado")


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
router.delete("/usuario/:id", (req, res) => {
    const { id } = req.params
    const indice = usuarios.findIndex(
        (user) => {
            return user.id == id
        }
    )
    usuarios.splice(indice, 1)
    res.send(usuarios)
})

// -> Rota Extra
router.post("/usuario", (req, res) => {
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
        if (indice === -1) {
            res.status(404).json("Usuário não encontrado")
        } else {
            usuarios.splice(indice, 1)
            res.send(usuarios)
        }

    })
})

// -> Exportando somente o router para o arquivo "app.js"
export default router 