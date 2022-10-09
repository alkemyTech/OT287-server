const express = require('express')
const { getById, put, post, get, destroy } = require('../controllers/activities')
const { activities } = require('../schemas/activities')
const { validate } = require('../middlewares/validations')

const router = express.Router()

router.get('/', get)
router.get('/:id', getById)
router.put('/:id', put)
router.post('/', validate(activities), post)
router.delete('/:id', destroy)

module.exports = router
