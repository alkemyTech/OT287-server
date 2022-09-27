exports.register = {
  firstName: {
    isString: { errorMessage: 'First name is not a string' },
    exists: {
      errorMessage: 'firstName cannot be empty',
      options: { checkFalsy: true },
    },
  },
  lastName: {
    isString: { errorMessage: 'lastName is not a string' },
    exists: {
      errorMessage: 'lastName cannot be empty',
      options: { checkFalsy: true },
    },
  },
  email: {
    isEmail: { errorMessage: 'invalid email' },
    exists: {
      errorMessage: 'email cannot be empty',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'email is not a string' },
  },
  password: {
    isString: { errorMessage: 'password is not a string' },
    exists: {
      errorMessage: 'password cannot be empty',
      options: { checkFalsy: true },
    },
    isStrongPassword: true,
    errorMessage: 'The password is weak',
  },
}

exports.loginSchema = {
  email: {
    isEmail: { errorMessage: 'invalid email' },
    exists: {
      errorMessage: 'email cannot be empty',
      options: { checkFalsy: true },
    },
    isString: { errorMessage: 'email is not a string' },
  },
  password: {
    isString: { errorMessage: 'password is not a string' },
    exists: {
      errorMessage: 'password cannot be empty',
      options: { checkFalsy: true },
    },
    isStrongPassword: true,
    errorMessage: 'The password is weak',
  },
}
