const bcrypt = require('bcrypt')

'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const encryptedPassword = await bcrypt.hash("Init123!", 10)
    await queryInterface.bulkInsert('Users', [
      {      
        firstName: 'Usuario',
        lastName: 'Demo',
        email: 'test@test.com',
        password: encryptedPassword,
        image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
        roleId: 1,        
      },
      {      
      "firstName": "Gottfried",
      "lastName": "Bangle",
      "email": "gbangle0@canalblog.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Chelsy",
      "lastName": "Bezarra",
      "email": "cbezarra1@artisteer.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/187x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Klarika",
      "lastName": "Dorey",
      "email": "kdorey2@kickstarter.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/192x100.png/dddddd/000000",
      "roleId": 1,
    }, {
      "firstName": "Nelle",
      "lastName": "Eagling",
      "email": "neagling3@nifty.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Blayne",
      "lastName": "Greenrde",
      "email": "bgreenrde4@upenn.edu",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/139x100.png/ff4444/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Karie",
      "lastName": "Bramsen",
      "email": "kbramsen5@ifeng.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/155x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Vyky",
      "lastName": "Bailes",
      "email": "vbailes6@mapquest.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/143x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "firstName": "James",
      "lastName": "Clemonts",
      "email": "jclemonts7@goo.ne.jp",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Franky",
      "lastName": "Tingey",
      "email": "ftingey8@apple.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/184x100.png/dddddd/000000",
      "roleId": 1,
    }, {
      "firstName": "Violetta",
      "lastName": "Creighton",
      "email": "vcreighton9@geocities.jp",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/214x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "firstName": "Ichabod",
      "lastName": "Managh",
      "email": "imanagh0@google.nl",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/171x100.png/dddddd/000000",
      "roleId": 2,
    }, {
      "firstName": "Jobye",
      "lastName": "Banaszczyk",
      "email": "jbanaszczyk1@ehow.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
      "roleId": 2,
    }, {
      "firstName": "Zebedee",
      "lastName": "McDonnell",
      "email": "zmcdonnell2@whitehouse.gov",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/101x100.png/dddddd/000000",
      "roleId": 2,
    }, {
      "firstName": "Zack",
      "lastName": "Elcott",
      "email": "zelcott3@marriott.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/226x100.png/dddddd/000000",
      "roleId": 2,
    }, {  
      "firstName": "Nico",
      "lastName": "Renachowski",
      "email": "nrenachowski4@bloglovin.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/217x100.png/dddddd/000000",
      "roleId": 2,
    }, {  
      "firstName": "Biddy",
      "lastName": "Etherton",
      "email": "betherton5@yandex.ru",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/162x100.png/cc0000/ffffff",
      "roleId": 2,
    }, {  
      "firstName": "Lutero",
      "lastName": "Brokenshire",
      "email": "lbrokenshire6@wisc.edu",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
      "roleId": 2,
    }, {  
      "firstName": "Franny",
      "lastName": "Samwayes",
      "email": "fsamwayes7@typepad.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
      "roleId": 2,
    }, {  
      "firstName": "Katrinka",
      "lastName": "Kreuzer",
      "email": "kkreuzer8@opera.com",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/141x100.png/cc0000/ffffff",
      "roleId": 2,
    }, {  
      "firstName": "Marlo",
      "lastName": "Rachuig",
      "email": "mrachuig9@so-net.ne.jp",
      "password": encryptedPassword,
      "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
      "roleId": 2,
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}
