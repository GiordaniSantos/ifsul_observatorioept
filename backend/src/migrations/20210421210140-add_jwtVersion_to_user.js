'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   return queryInterface.addColumn('users', 'jwtVersion', {
     type: Sequelize.INTEGER,
     allowNull: false,
     after: 'password',
     defaultValue: 0,
   });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'jwtVersion');
  }
};
