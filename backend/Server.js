//file: to connect to MongoDB

const express = require('express')
// import express library
const mongoose = require('mongoose')
const cors = require("cors")
//
require('dotenv').config()


//from Server.js.1
const routes = require('./routes/ToDoRoutes')  

const app= express()
const PORT = process.env.port || 3001

app.use(express.json())
app.use(cors())


//connect to mongoDB 
mongoose
    .connect(process.env.MONGODB_URL)
    .then(()=> console.log(`Successfully connected to MonogDB !`))

    .catch((err)=> console.log(err))
    //  catch(err) only compiles when there is an error 

    //from Server.js.2
    app.use(routes)


//connet to the server of the port

app.listen(PORT, () => console.log(`Successfully Listening on: ${PORT} ! `))
//  we use ${ } to use the declared variable into a string

//compile command: backend % nodemon Server.js