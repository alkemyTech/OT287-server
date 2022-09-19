const express = require('express')
const { post } = require('../controllers/entries')
const { entriesSchema } = require('../schemas/entries')
const { validate } = require('../middlewares/validations')
const {
  get, getById, destroy, put,
} = require('../controllers/entries')

const router = express.Router()

router.post('/', validate(entriesSchema), post)

router.get('/', get)
router.get('/:id', getById)
router.delete('/:id', destroy)
router.put('/:id', put)

module.exports = router
