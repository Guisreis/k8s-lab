const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const MESSAGE = process.env.MESSAGE || 'Olá do Kubernetes!';

app.get('/', (req, res) => {
    res.send(MESSAGE);
});

app.listen(PORT, () => {
    console.log(`App rodando na porta ${PORT}`);
});
