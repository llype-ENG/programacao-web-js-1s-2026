const express = require('express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Config Mustache
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', path.join(__dirname, 'views'));

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Rota principal
app.get('/', (req, res) => {
    res.render('form');
});

// Rota de envio
app.post('/agendamento', (req, res) => {
    const dados = req.body;
    let erros = [];

    // Validações simples
    if (!dados.nome) erros.push("Nome é obrigatório");
    if (!dados.sobrenome) erros.push("Sobrenome é obrigatório");
    if (!dados.cpf) erros.push("CPF é obrigatório");
    if (!dados.dataNascimento) erros.push("Data de nascimento é obrigatória");
    if (!dados.telefone) erros.push("Telefone é obrigatório");
    if (!dados.cep) erros.push("CEP é obrigatório");
    if (!dados.endereco) erros.push("Endereço é obrigatório");

    if (!dados.clinica) erros.push("Clínica é obrigatória");
    if (!dados.especialidade) erros.push("Especialidade é obrigatória");
    if (!dados.dataConsulta) erros.push("Data da consulta é obrigatória");
    if (!dados.horaConsulta) erros.push("Hora da consulta é obrigatória");

    if (erros.length > 0) {
        return res.render('error', { erros });
    }

    res.render('agendamento', dados);
});

// Servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});