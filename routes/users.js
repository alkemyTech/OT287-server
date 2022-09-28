const express = require('express')
const { destroy, get } = require('../controllers/users')
const { verifyToken } = require('../middlewares/JWT')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

router.delete('/:id', destroy)
router.get('/', verifyToken, isAdmin(), get)

module.exports = router
