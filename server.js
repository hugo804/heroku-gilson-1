const express = require('express');
const cors = require('cors'); // Importe o pacote cors
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
let credito = 0;
app.post('/credito', (req, res) => {
    credito = 90;
    res.json({ message: 'Comando recebido: credito' });
});
app.post('/setacima', (req, res) => {
    credito = 10;
    res.json({ message: 'Comando recebido: seta cima' });
});

app.post('/setabaixo', (req, res) => {
    credito = 20;
    res.json({ message: 'Comando recebido: seta baixo' });
});

app.post('/setaesquerda', (req, res) => {
    credito = 30;
    res.json({ message: 'Comando recebido: seta esquerda' });
});

app.post('/setadireita', (req, res) => {
    credito = 40;
    res.json({ message: 'Comando recebido: seta direita' });
});

app.post('/descer', (req, res) => {
    credito = 50;
    res.json({ message: 'Comando recebido: descer' });
});

app.get('/setacima', (req, res) => {
    res.json({ value: credito });
    credito = 0;
});

app.get('/setabaixo', (req, res) => {
    res.json({ value: credito });
    credito = 0;
});

app.get('/setaesquerda', (req, res) => {
    res.json({ value: credito });
    credito = 0;
});

app.get('/setadireita', (req, res) => {
    res.json({ value: credito });
    credito = 0;
});

app.get('/descer', (req, res) => {
    res.json({ value: credito });
    credito = 0;
});
app.get('/credito', (req, res) => {
    res.json({ value: credito });
    credito = 0;
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});