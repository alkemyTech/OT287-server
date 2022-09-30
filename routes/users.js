const express = require('express')
const { destroy, get, put } = require('../controllers/users')
const { verifyToken } = require('../middlewares/JWT')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

router.delete('/:id', destroy)
router.get('/', verifyToken, isAdmin(), get)
router.put('/:id', put)

module.exports = router
