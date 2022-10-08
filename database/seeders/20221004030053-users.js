'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [{
      "id": 1,
      "firstName": "Gottfried",
      "lastName": "Bangle",
      "email": "gbangle0@canalblog.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/112x100.png/5fa2dd/ffffff",
      "roleId": 1,
    }, {
      "id": 2,
      "firstName": "Chelsy",
      "lastName": "Bezarra",
      "email": "cbezarra1@artisteer.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/187x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "id": 3,
      "firstName": "Klarika",
      "lastName": "Dorey",
      "email": "kdorey2@kickstarter.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/192x100.png/dddddd/000000",
      "roleId": 1,
    }, {
      "id": 4,
      "firstName": "Nelle",
      "lastName": "Eagling",
      "email": "neagling3@nifty.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/204x100.png/5fa2dd/ffffff",
      "roleId": 1,
    }, {
      "id": 5,
      "firstName": "Blayne",
      "lastName": "Greenrde",
      "email": "bgreenrde4@upenn.edu",
      "password": "Init123!",
      "image": "http://dummyimage.com/139x100.png/ff4444/ffffff",
      "roleId": 1,
    }, {
      "id": 6,
      "firstName": "Karie",
      "lastName": "Bramsen",
      "email": "kbramsen5@ifeng.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/155x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "id": 7,
      "firstName": "Vyky",
      "lastName": "Bailes",
      "email": "vbailes6@mapquest.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/143x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "id": 8,
      "firstName": "James",
      "lastName": "Clemonts",
      "email": "jclemonts7@goo.ne.jp",
      "password": "Init123!",
      "image": "http://dummyimage.com/201x100.png/5fa2dd/ffffff",
      "roleId": 1,
    }, {
      "id": 9,
      "firstName": "Franky",
      "lastName": "Tingey",
      "email": "ftingey8@apple.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/184x100.png/dddddd/000000",
      "roleId": 1,
    }, {
      "id": 10,
      "firstName": "Violetta",
      "lastName": "Creighton",
      "email": "vcreighton9@geocities.jp",
      "password": "Init123!",
      "image": "http://dummyimage.com/214x100.png/cc0000/ffffff",
      "roleId": 1,
    }, {
      "id": 11,
      "firstName": "Ichabod",
      "lastName": "Managh",
      "email": "imanagh0@google.nl",
      "password": "Init123!",
      "image": "http://dummyimage.com/171x100.png/dddddd/000000",
      "roleId": 2,
    }, {
      "id": 12,
      "firstName": "Jobye",
      "lastName": "Banaszczyk",
      "email": "jbanaszczyk1@ehow.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/226x100.png/5fa2dd/ffffff",
      "roleId": 2,
    }, {
      "id": 13,
      "firstName": "Zebedee",
      "lastName": "McDonnell",
      "email": "zmcdonnell2@whitehouse.gov",
      "password": "Init123!",
      "image": "http://dummyimage.com/101x100.png/dddddd/000000",
      "roleId": 2,
    }, {
      "id": 14,
      "firstName": "Zack",
      "lastName": "Elcott",
      "email": "zelcott3@marriott.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/226x100.png/dddddd/000000",
      "roleId": 2,
    }, {
      "id": 15,
      "firstName": "Nico",
      "lastName": "Renachowski",
      "email": "nrenachowski4@bloglovin.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/217x100.png/dddddd/000000",
      "roleId": 2,
    }, {
      "id": 16,
      "firstName": "Biddy",
      "lastName": "Etherton",
      "email": "betherton5@yandex.ru",
      "password": "Init123!",
      "image": "http://dummyimage.com/162x100.png/cc0000/ffffff",
      "roleId": 2,
    }, {
      "id": 17,
      "firstName": "Lutero",
      "lastName": "Brokenshire",
      "email": "lbrokenshire6@wisc.edu",
      "password": "Init123!",
      "image": "http://dummyimage.com/148x100.png/5fa2dd/ffffff",
      "roleId": 2,
    }, {
      "id": 18,
      "firstName": "Franny",
      "lastName": "Samwayes",
      "email": "fsamwayes7@typepad.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/100x100.png/cc0000/ffffff",
      "roleId": 2,
    }, {
      "id": 19,
      "firstName": "Katrinka",
      "lastName": "Kreuzer",
      "email": "kkreuzer8@opera.com",
      "password": "Init123!",
      "image": "http://dummyimage.com/141x100.png/cc0000/ffffff",
      "roleId": 2,
    }, {
      "id": 20,
      "firstName": "Marlo",
      "lastName": "Rachuig",
      "email": "mrachuig9@so-net.ne.jp",
      "password": "Init123!",
      "image": "http://dummyimage.com/100x100.png/ff4444/ffffff",
      "roleId": 2,
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {})
  }
}