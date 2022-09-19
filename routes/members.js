const express = require('express')
const { get, destroy } = require('../controllers/members')

const router = express.Router()

router.get('/', get)
router.delete('/:id', destroy)

module.exports = router
