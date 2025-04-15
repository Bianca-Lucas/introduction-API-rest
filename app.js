import express from 'express'
const app = express()
const port = 3000

app.get('/users', (req, res) => {
    res.send('Olá usuário!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})