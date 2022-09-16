const express = require('express')
const { destroy } = require('../controllers/entries')

const router = express.Router()

// Endpoint to delete a new by id
router.delete('/:id', destroy)

module.exports = router
