const express = require('express')
const { 
    get, put,
} = require('../controllers/organizations')
const { verifyToken } = require('../middlewares/JWT')
const isAdmin = require('../middlewares/isAdmin')

const router = express.Router()

// Endpoint to an organization public info
router.get('/:id/public', get)
router.put('/:id/edit', verifyToken, isAdmin(), put)

module.exports = router
