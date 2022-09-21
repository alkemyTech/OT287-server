const { User } = require('../database/models')

function isAdmin(req, res, next) {
  const user = User.findById(req.roleId)
  if (user.name !== 'Admin') {
    return res.status(404).send()
  }
  return next()
}

module.exports = isAdmin
