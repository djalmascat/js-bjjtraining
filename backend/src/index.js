const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://mongouser:mongopwd@cl-arka-0jybw.mongodb.net/bjjtrainingdb?retryWrites=true&w=majority', { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(express.json());

app.get('/practitioners', (request, response) => {
    return response.json({
        message: 'Hello World'
    });
});


app.listen(3333);

