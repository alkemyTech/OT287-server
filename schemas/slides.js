exports.slides = {
    imageUrl: {
      exists: {
        errorMessage: 'There should be a imageUrl',
      },
      notEmpty: {
        errorMessage: 'The imageUrl field cannot be empty',
      },
    },
    text: {
      exists: {
        errorMessage: 'There should be text',
      },
      notEmpty: {
        errorMessage: 'The text field cannot be empty',
      },
    },
    order: {
        exists: {
          errorMessage: 'There should be order',
        },
        notEmpty: {
          errorMessage: 'The order field cannot be empty',
        },
      },
    organizationId: {
        exists: {
          errorMessage: 'There should be organizationId',
        },
        notEmpty: {
          errorMessage: 'The organizationId field cannot be empty',
        },
      },
  }