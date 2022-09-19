const express = require('express')
const { post } = require('../controllers/contacts')
const { contacts } = require('../schemas/contacts')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.post('/', validate(contacts), post)

module.exports = router
