const express = require('express')
const {
  get, getById, put, post, destroy,
} = require('../controllers/organizations')
const { verifyToken } = require('../middlewares/JWT')
const isAdmin = require('../middlewares/isAdmin')
const { organizations } = require('../schemas/organizations')
const { validate } = require('../middlewares/validations')

const router = express.Router()

// Endpoint to an organization public info
router.get('/', get)
router.get('/:id/public', getById)
router.put('/:id', verifyToken, isAdmin(), put)
router.post('/', validate(organizations), post)
router.delete('/:id', destroy)

module.exports = router
