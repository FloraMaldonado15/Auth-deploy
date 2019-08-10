const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 3000; //si no esta disponile el 3000 tome el puerto por default
/*mongoose.connect('mongodb+srv://devf15:flora123456789@cluster0-fif0n.gcp.mongodb.net/test?retryWrites=true&w=majority', {userNewUrlParser: true}, (err) =>{
if(!err){
    console.log('Mongo conectado correctamente');
}
})*/
const mongoUrl = 'mongodb+srv://devf15:flora123456789r@clusterdev-fi9jc.gcp.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoUrl, {useNewUrlParser: true}, (err) => {
if(!err){
console.log('mongo conectado correctamente');
}
}); 
const {User} = require('./models/user');
app.use(bodyParser.urlencoded({ extended: false })); 
// parse application/json
app.use(bodyParser.json()); 

app.get('/', (req, res) => {
    res.send('Hola mundo');
})

app.post('/new/user', (req, res) =>{
    let params = req.body;
    if(params.email && params.password && params.name){
      user.findOne({email: params.email}, (err, respuesta) => {
        if(err){
          res.status(500).json({message:'Ocurrio un Error'});
        }else if(respuesta !== null){
          res.status(200).json({message:respuesta})
        }else{
          bcrypt.gentSalt(saltRounds, function(err, salt){
            bcrypt.hash(params.password, salt, function(err, hash){
              let newUser = user({
                name: params.name,
                email: params.email,
                password: hash
              });
              newUser.save((err, resp) =>{
                if(err){
                  res.status(500).json({message: 'Ocurrio un error', err});
                } if (resp){
                  newUser.password = ':('
                  res.status(201).json({status:'Ok', data:resp});
                }else{
                  res.status(400).json({message:'No se creo el usuario'});
                }
              });
            });
          })
        }
      })
      console.log(params);
     /* let newUser = user ({
        name: params.name,
        email: params.email,
        password: params.password  
      });
      //console.log(newUser);
      newUser.save();
      res.status(201).json({status:'Ok', data : newuser});*/

    }else{
      res.status(400).json({message:'Sin datos'})
    }

});
app.post('/login', (req, res) =>{

})

   app.listen(PORT, () => {
   console.log(`Servidor Escuchando en puerto ${PORT}`);
   
 })       