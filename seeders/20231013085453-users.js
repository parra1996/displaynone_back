'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('Users', [
        {
        username: 'John Doe',
        role: 'client',
        password: '$2b$12$o/D126cmgrUxnSStzBklfuILm6MgjKAs9QZNiLdwoc01Fwk9zU0k2',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        username: 'molly',
        role: 'client',
        password: '$2b$12$o/D126cmgrUxnSStzBklfuILm6MgjKAs9QZNiLdwoc01Fwk9zU0k2',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        username: 'jesus897',
        role: 'admin',
        password: '$2b$12$o/D126cmgrUxnSStzBklfuILm6MgjKAs9QZNiLdwoc01Fwk9zU0k2',
        createdAt: new Date(),
        updatedAt: new Date()
        },
        {
        username: 'tete77',
        role: 'admin',
        password: '$2b$12$o/D126cmgrUxnSStzBklfuILm6MgjKAs9QZNiLdwoc01Fwk9zU0k2',
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
