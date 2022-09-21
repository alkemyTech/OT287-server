function isAdmin(req, res, next) {
  if (req.roleId !== 1) {
    return res.status(404).send()
  }
  return next()
}

module.exports = isAdmin
