'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // await queryInterface.addColumn(
    //   'st_users',
    //   'desc',
    //   {
    //     type: Sequelize.TEXT
    //   }
    // );
    // await queryInterface.addColumn(
    //   'st_users',
    //   'rating',
    //   {
    //     type: Sequelize.FLOAT
    //   }
    // );
    // await queryInterface.addColumn(
    //   'st_users',
    //   'reviewer',
    //   {
    //     type: Sequelize.INTEGER
    //   }
    // );
  },

  down: async (queryInterface, Sequelize) => {
    // await queryInterface.removeColumn('st_users', 'desc');
    // await queryInterface.removeColumn('st_users', 'rating');
    // await queryInterface.removeColumn('st_users', 'reviewer');
  }
};
