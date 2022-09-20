exports.activities = {
  name: {
    exists: {
      errorMessage: 'There should be a name',
    },
    notEmpty: {
      errorMessage: 'The name field cannot be empty',
    },
  },
  content: {
    exists: {
      errorMessage: 'There should be content',
    },
    notEmpty: {
      errorMessage: 'The content field cannot be empty',
    },
  },
}
