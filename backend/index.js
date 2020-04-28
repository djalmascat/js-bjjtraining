const express = require('express');

const app = express();

app.get('/practitioners', (req, res) => {
    return res.json({
        evento: 'Semana Omnistack 11',
        aluno: 'Allan Lessa',
    });
});


app.listen(3333);