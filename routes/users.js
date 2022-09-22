const express = require('express')

const router = express.Router()
const { register } = require('../schemas/users')
const {
  post, destroy, get,
} = require('../controllers/users')
const { validate } = require('../middlewares/validations')

router.post('/register', validate(register), post)
router.delete('/:id', destroy)
router.get('/auth/me', get)
module.exports = router
