const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
    user: String,
    todo: String,
    todoDate: {
        type:Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model('todo', todoSchema)