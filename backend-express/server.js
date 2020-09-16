// Require Dependencies
require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
// middlewares
const todoRouter = require('./routes/todo.router')


// App Instance 
const app = express()

// Using Middleware
app.use(cors({origin:"*"}))
app.use(bodyParser.json())
app.use('/api', todoRouter)
app.use('/', express.static(path.join(__dirname,'public'))) 

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})