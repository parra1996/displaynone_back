'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     
      await queryInterface.bulkInsert('Orders', [
        {
          companyName: "correos",
          direction: "las playitas brrr",
          zip: 46025,  
          clientName: "jose parra",
          addressee:" cate andrade", 
          weight: 3.6,
          price: 5,
          order_type: "ligero",
          createdAt: "2023-09-27 15:08:21",
          updatedAt: "2023-09-27 15:08:21"
        },
        {
          companyName: "correos",
          direction: "las playitas brrr",
          zip: 46025,  
          clientName: "jose parra",
          addressee:" cate andrade", 
          weight: 3.6,
          price: 5,
          order_type: "ligero",
          createdAt: "2023-09-27 15:08:21",
          updatedAt: "2023-09-27 15:08:21"
        },
        {
          companyName: "correos",
          direction: "las playitas brrr",
          zip: 46025,  
          clientName: "jose parra",
          addressee:" cate andrade", 
          weight: 3.6,
          price: 5,
          order_type: "ligero",
          createdAt: "2023-09-27 15:08:21",
          updatedAt: "2023-09-27 15:08:21"
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
