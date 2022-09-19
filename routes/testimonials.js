const express = require('express')
const { destroy } = require('../controllers/testimonials')

const router = express.Router()

router.delete('/:id', destroy)

module.exports = router
