'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const salt = await bcrypt.genSalt(8, 'a');
    const senhaCrypto = await bcrypt.hash('admin123', salt);
    await queryInterface.bulkInsert('Users', [{
      nome: "Adminstrador do Sistema",
      login: 'root',
      senha: senhaCrypto,
      createdAt: new Date(),
      updatedAt: new Date()
    }], {})
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
