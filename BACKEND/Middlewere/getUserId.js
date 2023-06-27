
//Json Web Token
const jwt = require('jsonwebtoken');
const Jwt_Str = "Flyzon a web app"

const getUserId = (req, res, next) => {

    const token = req.header('authToken')

    if(!token){
        res.json({msg:"login first"})
    }
    // verify a token symmetric - synchronous
    let decoded = jwt.verify(token, Jwt_Str);


    req.user=decoded.user

    next()

}

module.exports = getUserId