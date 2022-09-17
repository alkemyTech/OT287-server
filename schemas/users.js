const { check, validationResult } = require('express-validator')
const { User } = require('../database/models')

const checkIfErrors = (req, res, next) => {
  try {
    validationResult(req).throw()
    return next()
  } catch (err) {
    return res.status(403).send({ errors: err.array() })
  }
}

const validateUser = [
  check('firstName', 'Escriba su nombre por favor')
    .exists()
    .isLength({ min: 3, max: 30 })
    .withMessage('Su nombre debe tener entre 3 - 30 letras')
    .trim()
    .escape(),

  check('lastName', 'Escriba su apellido por favor')
    .exists()
    .isLength({ min: 3, max: 30 })
    .withMessage('Su apellido debe tener entre 3 - 30 letras')
    .trim()
    .escape(),

  check('email', 'Escriba un correo válido por favor, formato nombre@dominio.com')
    .exists()
    .custom(async (value) => {
      const matchedMail = await User.findOne({ where: { email: value } })
      if (matchedMail) {
        throw new Error(
          'Este correo ya se encuentra registrado, intente loguearse o recuperar su contraseña',
        )
      } else {
        return true
      }
    })
    .isEmail()
    .trim()
    .escape()
    .normalizeEmail(),

  check(
    'password',
    'Su contraseña debe tener al menos 8 caracteres, incluir un número y una letra mayúscula',
  )
    .exists()
    .withMessage('Escriba una contraseña por favor')
    .isLength({ min: 8 })
    .matches(/\d/)
    .matches('[A-Z]')
    .trim()
    .escape(),

  (req, res, next) => {
    checkIfErrors(req, res, next)
  },
]

module.exports = {
  validateUser,
}
