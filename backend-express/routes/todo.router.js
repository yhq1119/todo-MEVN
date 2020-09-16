const router = require('express').Router()
const { Create, Read, ReadOne, Update, Delete, DeleteAll } = require('../controllers/todo.controller')

router.get('/todo', Read)
router.get('/todo/:id', ReadOne)
router.post('/todo', Create)
router.patch('/todo/:id', Update)
router.delete('/todo/:id', Delete)
router.delete('/todo', DeleteAll)

module.exports = router