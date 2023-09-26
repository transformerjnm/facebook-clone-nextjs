const express = require("express");
const loginRoute = express.Router();
const jwt = require("jsonwebtoken");
const User = require('../models/user')
const bcrypt = require('bcrypt')

loginRoute.route('/')
.post(async(req, res, next) => {
    if(Object.keys(req?.body).length === 0){
        res.statusCode = 400
        res.json({
            success: false,
            message: "request was sent without a body!"
        })
    }else{
        const { email, password } = req.body;

        const user = await User.findOne({ email });
      
        if (!user)
          return res.json({
            success: false,
            message: 'user not found, with the given email!',
          });
      
        const isMatch = await user.comparePassword(password);
        if (!isMatch){
            return res.json({
            success: false,
            message: 'email / password does not match!',
            });
        }else{
            const json = { email, password }
            const token = jwt.sign(json, process.env.JWT_SECRET, { expiresIn: '1h' })
            res.send({token: token })
        }
        // await User.findOne({ email: body?.email }).then(async(user, err) => {
        //     console.log(user)
        //     if(user){
        //         const isSame = await user.comparePassword(body?.password)
        //         console.log(isSame)
        //         if(isSame){
        //             const token = jwt.sign(body, process.env.JWT_SECRET, { expiresIn: '1h' })
        //             res.send({token: token })
        //         }
        //     }else{
        //         res.statusCode = 401
        //         res.json({"message": "user does not exists please register one"})
        //     }
        //     console.log('err',err)
        // })
    }
    
})

module.exports = loginRoute