//Este es un modelo de esquema
const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const User = new Schema({
    name: String,
    email: String,
    password: String,
    img:{
        type: String,
        default: ''
    }
});

const user = mongoose.model('User', User); //Const no va a volver a redefinir
module.exports = {user}