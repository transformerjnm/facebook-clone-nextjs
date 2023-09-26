const express = require('express')
const app = express()
const port = 8080
const cookieparser = require('cookie-parser')
const verifyToken = require('./middleware/verifyToken')
const loginRoute = require('./routes/loginRoute')
const homeRoute = require('./routes/homeRoute')
const mongoose = require('mongoose');
const registerRoute = require('./routes/registerRoute')
require('dotenv').config()

/*
    TODO
    when verifying jwt check to make sure user is same (depends on user IDs) using crypto???
    prevent cross scirpting attacks/sql injection
    figure out how to generate IDs and map to data
*/

/* CONNECT TO DB */
mongoose.connect(process.env.DB_CONNECTION)
.then(() => console.log('db has been connected!'))

//MIDDLEWARE
app.use(express.json()) //parse body into json
app.use(cookieparser()) //parse cookies
app.use(verifyToken) //verify jwt

//ROUTES
app.use('/register', registerRoute)
app.use('/login', loginRoute)
app.use('/home', homeRoute)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})