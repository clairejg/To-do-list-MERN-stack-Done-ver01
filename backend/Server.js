const express = require('express')
// import express library
const mongoose = require('mongoose')
require('dotenv').config()

const app= express()
const PORT = process.env.port || 3500

//connect to mongoDB 
app.listen(PORT, () => console.log(`Listening on: ${PORT} successfully`))