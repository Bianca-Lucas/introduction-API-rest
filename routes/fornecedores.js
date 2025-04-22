import express from 'express'
const router = express.Router();

// -> Banco de Dados de Fornecedores:
const fornecedores = [
    {id: 1, nome: "ExtaPrint"},
    {id: 2, nome: "PMenosLab"}
]

// -> Rota para mostrar todos os fornecedores:
router.get('/all', (req, res) => {
    res.status(200).json(fornecedores)
})

export default router;