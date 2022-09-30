const express = require('express')
const { put, post, getById } = require('../controllers/activities')
const { activities } = require('../schemas/activities')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/:id', getById)
router.put('/:id', put)
router.post('/', validate(activities), post)

module.exports = router
