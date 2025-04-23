// -> Importando o express:
import express from 'express';
const router = express.Router()

// -> Banco de Dados de produtos:
const produtos = [
    {id: 1, nome: "Teclado", preco: 70},
    {id: 2, nome: "Led", preco: 50},
    {id: 3, nome: "TV", preco: 1000}
]

// -> Listar todos os produtos: 
router.get("/", (req, res) => {
    res.status(200).json(produtos)
})

// -> Adicionar um novo produto: 
router.post("/AdicionarProduto", (req,res) => {
    const {nome, preco} = req.body
    const id = produtos.length+1
    produtos.push({
        id: id,
        nome,
        preco
    })
    res.status(201).json(produtos)
})

// -> Atualizar um produto pelo ID: 
router.put("/AtualizarProduto/:id", (req, res) => {
    const {id} = req.params
    const {novoNome, novoPreco} = req.body

    const indice = produtos.findIndex(produto => produto.id === Number(id))
    
    if (indice === -1) {
        return res.status(404).json('Produto não encontrado!')
    } 
    
    produtos[indice].nome = novoNome
    produtos[indice].preco = novoPreco
    
    res.status(200).json(produtos)

})

// -> Remover um produto pelo ID: 
router.delete("/DeletarProdutos/:id", (req, res) => {
    const {id} = req.params
    const indice = produtos.findIndex(
        (produto) => {
            return produto.id === Number(id)
        }
    )
    if (indice === -1) {
        return res.status(404).json("Produto não encontrado")
    } 
    
    produtos.splice(indice, 1)
    res.status(200).json(produtos)
    }
)

// -> Buscar produtos pelo ID:
router.get("/BuscarProdutos/:id", (req, res) => {
    const {id} = req.params
    const produto = produtos.find(
        (produto) => {
            return produto.id === Number(id);
        }
    )
    if (!produto) {
        return res.status(404).json("Produto não encontrado")
    }


    res.status(200).json(produto)
})

export default router