const jwt = require("jsonwebtoken");
const ENV = require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req?.headers?.cookie
    if(req?.url === '/login'){
        next()
    }else{
        if(!token){
            res.statusCode = 401
            res.send('dont forget to send request with token as a cookie in the header!')
        }
            
        if(token){
            const cookie = token.split("=")[1]
            const isValid = jwt.verify(cookie, process.env.JWT_SECRET, function(error, decoded){
                if(error)
                    return false
        
                if(!error)
                    return true
            })
            if(!isValid){
                res.statusCode = 401
                res.send('token not valid, regenerate a token with /login!')
            }else{
                console.log('token is verified!')
                next()
            } 
        }
    }

}

module.exports = verifyToken