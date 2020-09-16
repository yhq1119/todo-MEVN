const mongoDB = require('../mongodb')
const { Schema } = require('mongoose')

/**
 * id: represent the id of the item
 * content: body of the todo item
 * status: 0,1,2 represt todo, doing, done
 * create_date: time when created the item
 * finish_date: time when finished the item
 */
const itemSchema = new Schema({
    id: {
        type: Number,
        unique: true,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    status: Number,
    create_date: Date,
    finish_date: Date
}, { timestamps: true })

module.exports = mongoDB.model('todo', itemSchema)