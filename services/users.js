const bcrypt = require('bcrypt')
const { ErrorObject } = require('../helpers/error')
const { User } = require('../database/models')

const encryptPassword = async (password) => {
  try {
    const stringPassword = password.toString()
    return await bcrypt.hash(stringPassword, 10)
  } catch (error) {
    throw new ErrorObject(error.message, error.statusCode || 500)
  }
}

module.exports = {
  createUser: async (data) => {
    try {
      const {
        firstName, lastName, email, password, image,
      } = data

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
      return response
    } catch (error) {
      throw new ErrorObject(error.message, error.statusCode || 500)
    }
  },
}
