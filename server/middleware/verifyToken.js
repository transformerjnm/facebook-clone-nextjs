const jwt = require("jsonwebtoken");
require('dotenv').config()

const verifyToken = (req, res, next) => {
    if(req?.url === '/login' || req?.url === '/register'){
        next()
    }else{
        const auth = req?.headers?.authorization
        if(!auth){
            res.statusCode = 401
            res.json({
                success: false, 
                message: 'dont forget to send request with token as a cookie in the header!'
            })
        }
            
        if(auth){
            const token = auth.split(" ")[1]
            const isValid = jwt.verify(token, process.env.JWT_SECRET, function(error, decoded){
                if(error)
                    return false
        
                if(!error)
                    return true
            })
            if(!isValid){
                res.statusCode = 401
                res.send({success: false, message: "token is not valid, please generate a new one!"})
            }else{
                //token is valid
                next()
            } 
        }
    }

}

module.exports = verifyToken