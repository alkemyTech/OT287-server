'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Entries', [
        {
        name: 'Juntos en la vuelta al cole',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img1.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Merienda para los mas chicos',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img2.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Se abre convocatoria para clases voluntarias',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img3.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {        
        name: 'Participa como coach de deportes infantiles',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img4.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Ultima semana de pileta municipal, ¡veni a participar!',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img5.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Taller de habilidades para los mas pequeños',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img6.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Talleres de arte para niños con carencias',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img7.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Sponsoring de becas, vos podes formar parte',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221015152856_img8.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
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
