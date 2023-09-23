const express = require("express");
const loginRoute = express.Router();
const jwt = require("jsonwebtoken");

loginRoute.route('/')
.post((req, res, next) => {
    /*
        TODO: 
        check if user exists in db before signing jwt
        add error handling
    */
    const body = req?.body
    const token = jwt.sign(body, process.env.JWT_SECRET, { expiresIn: '1h' })
    res.send({token: token })

})

module.exports = loginRoute