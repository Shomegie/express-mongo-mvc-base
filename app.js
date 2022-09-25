require('dotenv').config()

// express variables //
const express = require('express')
const app = express()
app.use(express.json())

// db connection //
let db_uri = 'mongodb://localhost:27017/test';
const mongoose = require('mongoose')
mongoose.connect(db_uri)

const db = mongoose.connection
db.on('error', (err)=>{
    console.error('error connecting to db: ',err)
})

db.once('open', ()=>{
    console.log('successfully connected to database')
})


// routes //
app.get('/', function (req, res) {
  res.send('Hello World')
})

// routes via mvc //
const todoRouter = require('./routes/todoRouter')
app.use('/todo',todoRouter)


// Listen //
app.listen(3000,()=>{
    console.log("on port: 3000")
})