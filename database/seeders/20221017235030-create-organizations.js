'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Organizations', [
      {
      id: 1,
      name: 'Somos Mas',
      image:'https://i.imgur.com/nIclrvm.png',
      address: 'avenida siempre viva 123',
      phone: '11-342576',
      email: 'somosmas@gmail.com',
      fbUrl: 'https://www.facebook.com/corpsomosmas/',
      igUrl: 'https://www.instagram.com/somosmascomunidad/?hl=es',
      ldUrl :'under construction',
      welcomeText:'Bienvenido a Somos Mas',
      aboutUsText: 'en Somos Más trabajamos con los chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social',

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
