'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('Clients', [{
        firstName: 'John Doe',
        lastName: 'roberts',
        email: 'John@gmail.com',
        createdAt: new Date(),
        updatedAt: new Date(),

      }], {});
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
