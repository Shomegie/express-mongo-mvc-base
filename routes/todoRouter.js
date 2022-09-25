const express = require('express')
const todoRouter = express.Router()
const todoDB = require('../models/todoDB')


// get req's //
todoRouter.get('/',async (req,res)=>{
    const todos = await todoDB.find()
    console.log(todos)
})

// post req's //
// todoRouter.post('/', async (req,res)=>{

// })



module.exports = todoRouter