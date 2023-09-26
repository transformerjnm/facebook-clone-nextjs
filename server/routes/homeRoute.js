

const express = require("express");
const homeRoute = express.Router();
const jwt = require("jsonwebtoken");

homeRoute.route('/')
.get((req, res) => {
    res.json({
        isValid: res.statusCode === 200 ? true : false
    })
})

module.exports = homeRoute