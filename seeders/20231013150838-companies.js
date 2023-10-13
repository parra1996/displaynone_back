'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.bulkInsert('Companies', [
     {
       name: 'Seur',
       zip: '450289,44852,43852',
       email:'seur@gmail.com',
       createdAt: new Date(),
        updatedAt: new Date()
     },
     {
       name: 'correos',
       zip: '420289,41852,40852',
       email:'correos@gmail.com',
       createdAt: new Date(),
        updatedAt: new Date()
     },
     {
       name: 'invent',
       zip: '',
       email:'invent@gmail.com',
       createdAt: new Date(),
        updatedAt: new Date()
     },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
