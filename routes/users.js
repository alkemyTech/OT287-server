const express = require('express')

const router = express.Router()
const { destroy } = require('../controllers/users')

router.delete('/:id', destroy)

module.exports = router
