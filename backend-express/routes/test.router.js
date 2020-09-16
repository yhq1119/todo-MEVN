const router = require('express').Router()
const {test} = require('../controllers/todo.controller')

router.get('/test', test)
router.post('/test', test)
router.patch('/test', test)
router.delete('/test', test)

module.exports = router