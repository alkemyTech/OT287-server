exports.users = {
  firstName: {
    exists: {
      errorMessage: 'Agregue un Nombre',
    },
    isLength: {
      min: 3,
      max: 30,
      errorMessage: 'El rango del nombre debe ser entre 3 y 30 caracteres',
    },
    notEmpty: {
      errorMessage: 'El campo no puede estar vacio',
    },
  },
  lastName: {
    exists: {
      errorMessage: 'Agregue un Apellido',
    },
    isLength: {
      min: 3,
      max: 30,
      errorMessage: 'El rango del apellido debe ser entre 3 y 30 caracteres',
    },
    notEmpty: {
      errorMessage: 'El campo no puede estar vacio',
    },
  },
  email: {
    exists: {
      errorMessage: 'Agregue un email',
    },
    notEmpty: {
      errorMessage: 'El campo no puede estar vacio',
    },
    isEmail: {
      errorMessage: 'El formato de correo es invalido',
    },
  },
  password: {
    exists: {
      errorMessage: 'Agregue una contraseña',
    },
    isLength: {
      min: 8,
      errorMessage: 'La contraseña debe tener al menos 8 caracteres',
    },
    notEmpty: {
      errorMessage: 'El campo no puede estar vacio',
    },
  },
}
