exports.contacts = {
  name: {
    exists: {
      errorMessage: 'There should be a name',
    },
    notEmpty: {
      errorMessage: 'The name field cannot be empty',
    },
  },
  email: {
    exists: {
      errorMessage: 'There should be an email',
    },
    notEmpty: {
      errorMessage: 'The email field cannot be empty',
    },
    isEmail: {
      errorMessage: 'The email format is invalid',
    },
  },
}
