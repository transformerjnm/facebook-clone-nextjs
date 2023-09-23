const express = require('express')
const app = express()
const port = 8080
const bodyparser = require('body-parser')
const cookieparser = require('cookie-parser')
const jwt = require("jsonwebtoken");
require('dotenv').config()
const verifyToken = require('./middleware/verifyToken')
const loginRoute = require('./routes/loginRoute')
const homeRoute = require('./routes/homeRoute')

/* 
    TODO
    add db connection 
*/

//MIDDLEWARE
app.use(bodyparser.json()) //parse body into json
app.use(cookieparser()) //parse cookies
app.use(verifyToken) //verify jwt


app.use('/login', loginRoute)

app.use('/home', homeRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})