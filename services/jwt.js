const jwt = require ('jsonwebtoken');
const secret = '7784AABB'


exports.creatToken = (user) => {
    return jwt.sign({user}, secret, {expiresIn: '1hr'})
}