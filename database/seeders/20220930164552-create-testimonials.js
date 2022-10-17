'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Testimonials', [
        {          
          name: "Valeria Valadez",
          image: "https://i.imgur.com/IdpHoy7.png",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Christian Vergara",
          image: "https://i.imgur.com/u2At4i7.jpeg",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Michelle Arellano",
          image: "https://i.imgur.com/yHCKYv9.png",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Simón Briseño Segundo",
          image: "https://i.imgur.com/Sv2Sr9r.png",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Dante Elizondo",
          image: "https://i.imgur.com/ypfZHrT.jpeg",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Martín Arroyo",
          image: "https://i.imgur.com/il9rkcF.png",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "María Galván",
          image: "https://i.imgur.com/EHVGVoL.png",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Miranda Gaitán",
          image: "https://i.imgur.com/bB4YlG6.jpeg",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Josue Montemayor",
          image: "https://i.imgur.com/WZxLPIp.png",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
        },
        {          
          name: "Emmanuel Escobar",
          image: "https://i.imgur.com/1Q5s75a.jpeg",
          content: "lorem Ipsum dolor sit amet, consectetur adipiscing elit sed diam nonumy eirmod tempor invidue nonumy eirmod et interpolation tempus. Ut enim ad minim veniam, quis nostrud exerci nulla pariatur. Excepteur sint occaecat cupiditat non proident, sunt in culpa qui officia deserunt modules qui officia deserunt mollit anim id est laborum.",
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
