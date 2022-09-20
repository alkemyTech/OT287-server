exports.members = {
  name: {
    isString: {
      errorMessage: 'The name must be a string',
    },
    notEmpty: {
      errorMessage: 'The name field cannot be empty',
    },
  },
}
