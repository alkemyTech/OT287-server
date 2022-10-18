'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Categories', [
      {
        name: 'news',
        description: 'News about the organization.',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'campaigns',
        description: 'Special articles to call attention to special events.',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'other',
        description: 'Any other type of entries.',
        createdAt: new Date,
        updatedAt: new Date
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
