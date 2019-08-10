//require ('dontenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const verify = require('./middlewares/verifyToken')
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const app = express();
const PORT = process.env.PORT;
//const PORT = process.env.PORT || 3000;
const mongoUrl = 'mongodb+srv://devf15:flora123456789@cluster0-fif0n.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, { useNewUrlParser: true }, (err) => {
    if (!err) {
        console.log('Mongo conectado correctamente');
    }
});

//const { user } = require('./models/user');
const {login} = requiere ('./controllers/auth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('<h1>Server</h1>');
})

app.post('/new/user', verify,verifyTkn, register);
//app.post('/login', login);

app.listen(PORT, () => {
    console.log(`Servidor Escuchando en port ${PORT}`);
})

//End points