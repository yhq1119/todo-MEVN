const mongoose = require('mongoose')
const {Schema} = require('mongoose')
const {FgGreen} = require('../utils/console.color')
const uri = process.env.MONGODB;
console.log(uri)
mongoose.connect(uri, {useNewUrlParser: true}).then(()=>console.log(FgGreen,'MongoDB "basic" connected'));


module.exports = mongoose