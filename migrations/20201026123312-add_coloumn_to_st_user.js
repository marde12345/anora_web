'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn(
    //   'st_users',
    //   'profile_img',
    //   {
    //     type: Sequelize.STRING
    //   }
    // );
    // await queryInterface.addColumn(
    //   'st_users',
    //   'level',
    //   {
    //     type: Sequelize.INTEGER
    //   }
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('st_users', 'profile_img');
    // await queryInterface.removeColumn('st_users', 'level');
  }
};
