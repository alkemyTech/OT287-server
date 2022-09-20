const express = require('express')
const { get, put } = require('../controllers/members')
const { post } = require('../controllers/members')
const { members } = require('../schemas/members')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.put('/:id', put)
router.post('/', validate(members), post)

module.exports = router
