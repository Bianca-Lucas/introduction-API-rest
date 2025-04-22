import express from 'express'
import usuariosRoutes from './routes/user.js'
import fornecedoresRoutes from './routes/fornecedores.js'

const app = express()
const port = 3000

// -> permitir ler JSON no corpo da requisição
app.use(express.json())

// -> Home:
app.get('/', (req, res) => {
    res.send('Bem-vindo a API!')
})

// -> Adiciona o roteador 
app.use("/usuarios", usuariosRoutes)

// -> Router: Fornecedores
app.use("/fornecedores", fornecedoresRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})