const { ErrorObject } = require('../helpers/error')
const { User } = require('../database/models')
const { encryptPassword } = require('../services/user')

const createUser = async (req, res) => {
  try {
    const {
      firstName, lastName, email, password, image,
    } = req.body

    const encrypted = await encryptPassword(password)

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      password: encrypted,
      image,
    })

    const response = {
      nombre: newUser.firstName,
      apellido: newUser.lastName,
      correo: newUser.email,
    }
    res.status(201).json({
      msg: 'Usuario creado',
      response,
    })
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = {
  createUser,
}
