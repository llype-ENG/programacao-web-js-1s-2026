const express = require('express');
const app = express();
const PORT = 3000;

let estoque = [];

app.get('/adicionar/:id/:nome/:qtd', (req, res) => {
    const { id, nome, qtd } = req.params;
    const novoProduto = { id, nome, qtd: parseInt(qtd) };
    estoque.push(novoProduto);
    res.send(`Produto ${nome} adicionado com sucesso!`);
});


app.get('/listar', (req, res) => {
    res.json(estoque);
});

app.get('/remover/:id', (req, res) => {
    const { id } = req.params;
    estoque = estoque.filter(p => p.id !== id);
    res.send(`Produto com ID ${id} removido.`);
});

app.get('/editar/:id/:qtd', (req, res) => {
    const { id, qtd } = req.params;
    const produto = estoque.find(p => p.id === id);
    
    if (produto) {
        produto.qtd = parseInt(qtd);
        res.send(`Quantidade do produto ${produto.nome} atualizada para ${qtd}.`);
    } else {
        res.status(404).send("Produto não encontrado.");
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});