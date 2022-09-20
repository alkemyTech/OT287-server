const express = require('express')
const { get, post, destroy } = require('../controllers/members')
const { members } = require('../schemas/members')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.post('/', validate(members), post)
router.delete('/:id', destroy)

module.exports = router
