const express = require("express");
const registerRoute = express.Router();
const bcrypt = require('bcrypt')
const User = require('../models/user')

registerRoute.route('/')
.post(async(req, res, next) => {
    if(Object.keys(req?.body).length === 0){
        res.json({
            success: false, 
            message: "request was sent without a body!"
        })
    }else{
        const { email, password } = req.body;
        const isNewUser = await User.isThisEmailInUse(email);
        if (!isNewUser){
            return res.json({
                success: false,
                message: 'This email is already in use, try sign-in',
            });
        }else{
            const user = await User({
                email,
                password,
            });
            await user.save();
            res.json({ 
                success: true, 
                message: "user has been created!" 
            });
        }
        
    }
})

module.exports = registerRoute