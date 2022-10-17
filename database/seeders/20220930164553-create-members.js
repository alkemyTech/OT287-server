'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
      await queryInterface.bulkInsert('Members', [
        {          
          name: "Alejandra Mayorga",
          image: "https://i.imgur.com/lfgeM7Z.jpeg",
        },
        {          
            name: "José Bonilla",
            image: "https://i.imgur.com/ou7GlaV.png",
          },
          {          
            name: "Maximiliano Castro",
            image: "https://i.imgur.com/PAoXJGo.png",
          },
          {          
            name: "Juan David Cortés",
            image: "https://i.imgur.com/LKSBARb.jpeg",
          },
          {          
            name: "Irene Romo",
            image: "https://i.imgur.com/IqtMoFr.png",
          },
          {          
            name: "Clara Granados",
            image: "https://i.imgur.com/CsEmspO.jpeg    ",
          },
          {          
            name: "Ximena Reyes",
            image: "https://i.imgur.com/2bFLKzJ.jpeg",
          },
          {          
            name: "Lucas Salas",
            image: "https://i.imgur.com/lfgeM7Z.jpeg",
          },
          {          
            name: "Agustín López",
            image: "https://i.imgur.com/EqbFyGe.png",
          },
          {          
            name: "Valery Elizondo",
            image: "https://i.imgur.com/SkzzZli.png",
          },
          {          
            name: "Agustina Quintana",
            image: "https://i.imgur.com/S1tXqVm.png",
          },
          {          
            name: "Mariana Gutiérrez",
            image: "https://i.imgur.com/IlV9Npa.jpeg",
          },
          {          
            name: "Rafael Manguino",
            image: "https://i.imgur.com/xm4DTAc.png",
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
