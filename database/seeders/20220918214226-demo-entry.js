'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Entries', [{
      name: 'Donaciones de domingo',
      content: 'dona lo que puedas',
      image: 'https://www.infobae.com/tag/novedades/',
      categoryId: null,
      type: 'mi tipo',
      createdAt: new Date()
    }]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Entries', null, {});
  }
};
