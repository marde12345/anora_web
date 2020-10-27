'use strict';

const { st_users } = require("./st_users");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('st_users', st_users, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('st_users', null, {});
  }
};
