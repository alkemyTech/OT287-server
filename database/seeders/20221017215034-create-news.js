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
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/20221023175540_img8.png',
        content: '<p><strong><i>Lorem ipsum dolor</i> sit amet</strong>, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo</p>',
        categoryId: '1',
        type: 'news',
        createdAt: new Date,
        updatedAt: new Date
      },
      {
        name: 'Juntos por el Poder Colectivo',
        image: 'https://somosmasalkemy.s3.amazonaws.com/news/2022102318145_27067176_1914361545271622_52931177194889040_n.webp',
        content: '<p>Durante más de 15 años el constante trabajo por fortalecer el trabajo colectivo ha llevado a Somos Más por los rincones más hermosos e inesperados de Buenos Aires. Nos ha permitido luchar por el derecho que tienen los niños, niñas y adolescentes a que su voz sea escuchada, nos ha llevado a ser parte importante de la construcción colectiva y el crecimiento de la estrategia Estado Abierto en Argentina; nos ha puesto en el camino de la innovación social y en ella hemos encontrado formas disruptivas de catalizar procesos maravillosos de diálogos sociales que transforman las realidades de nuestros país.</p><figure class="image"><img src="https://mapa-conceptual.net/wp-content/uploads/2021/07/dibujos-animados-del-trabajo-en-grupo.jpg" alt="juntos" srcset="https://mapa-conceptual.net/wp-content/uploads/2021/07/dibujos-animados-del-trabajo-en-grupo.jpg 600w, https://mapa-conceptual.net/wp-content/uploads/2021/07/dibujos-animados-del-trabajo-en-grupo-300x225.jpg 300w" sizes="100vw" width="600"></figure><p>&nbsp;</p><p>Hoy nos enfrentamos a un reto a nivel mundial, reto en que la palabra colectivo amenaza la salud de miles de millones de personas en todo el mundo. En este momento que la epidemia causada por el COVID 19 nos obliga a quedarnos en casa con nuestras familias y seres queridos estamos aún más convencidos de que debemos activar el poder de la construcción colectiva para reinventar las formas en que nos relacionaremos, la manera en que habitamos nuestro territorio y los innovadores caminos en que reconstruiremos nuestras sociedades.</p><p>Es por ello que hoy Somos Más lanza la campaña JUNTOS POR EL PODER COLECTIVO, con la cual lograremos fortalecer nuestra organización para superar esta época y reinventar colectivamente muchas de las estrategias y metodologías que implementaremos para aportar a la reconstrucción de nuestro país.</p><p>Ingresa a<a href="www.google.com"> https://somosmas.com.ar/ong/podercolectivo</a>&nbsp;</p>',
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
