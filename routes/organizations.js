const express = require('express')
const { get } = require('../controllers/organizations')

const router = express.Router()

// Endpoint to an organization public info
router.get('/:id/public', get)

module.exports = router
