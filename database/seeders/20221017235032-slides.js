'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Slides', [
      {
      imageUrl: 'https://funerarialbacete.com/wp-content/uploads/2019/10/solidaridad-1200x688.jpg',  
      text: 'En Somos Más trabajamos con chicos y chicas, mamás y papás, abuelos y vecinos del barrio La Cava generando procesos de crecimiento y de inserción social. Uniendo las manos de todas las familias, las que viven en el barrio y las que viven fuera de él, es que podemos pensar, crear y garantizar estos procesos.',
      order: '1',
      organizationId:'1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl: 'https://static.guiainfantil.com/uploads/educacion/ninos-abrazados-p.jpg',
      text: 'Somos una ONG que se creó en 1997 con la intención de dar alimento a las familias del barrio. Con el tiempo nos involucramos con la comunidad y hoy somos un centro comunitario que acompaña a más de 700 personas.',
      order: '2',
      organizationId:'1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl: 'https://www.hola.com/imagenes/estar-bien/20200323163807/resiliencia-entrenar-solidaridad-lb/0-801-848/entrenar-solidaridad-t.jpg',
      text: 'Mejorar la calidad de vida de niños y familias en situación de vulnerabilidad, otorgando un cambio de rumbo en cada individuo a través de la educación, salud, trabajo, deporte, responsabilidad y compromiso.',
      order: '3',
      organizationId:'1',
      createdAt: new Date,
      updatedAt: new Date
    },
    {
      imageUrl: 'https://www.moralzarzal.es/wp-content/uploads/2020/11/grupo-de-ni%C3%B1os-1170x665.jpg',
      text: 'Trabajar articuladamente con los distintos aspectos de la vida de las familias, generando espacios de desarrollo personal y familiar, brindando herramientas que logren mejorar la calidad de vida a través de su propio esfuerzo.',
      order: '4',
      organizationId:'1',
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
