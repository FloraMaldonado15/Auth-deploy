const jwt = require ('jsonwebtoken');
//const secret = '7784AABB'

exports.verifyTkn = (req, res, next) =>{
    let token = req.headers.authorization; //obtener el token
    if(token){
        jwt.verify(token, secret, (err, decode) =>{
            if(err){
                res.status(500).json({message:'Ocurrio un error', err})
            }else{
                console.log('Decoded ==>>>', decode) //usuario que inicio
                next();
            }

        })
    }else{
        res.status(403).json({message:'Sin token'})
    }

}