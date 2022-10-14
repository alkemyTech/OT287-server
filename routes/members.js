const express = require('express')
const {
  get, put, post, destroy, getById
} = require('../controllers/members')
const { members } = require('../schemas/members')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.get('/:id', getById)
router.put('/:id', validate(members), put)
router.post('/', validate(members), post)
router.delete('/:id', destroy)

module.exports = router
