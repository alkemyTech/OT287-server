exports.entriesSchema = {
  name: {
    notEmpty: {
      errorMessage: 'The name field cannot be empty',
    },
  },
  content: {
    notEmpty: {
      errorMessage: 'The content field cannot be empty',
    },
  },
  image: {
    notEmpty: {
      errorMessage: 'The image field cannot be empty',
    },
  },
}
