const express = require('express')
const { post, get } = require('../controllers/contacts')
const { contacts } = require('../schemas/contacts')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.post('/', validate(contacts), post)
router.get('/', get)

module.exports = router
