'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("cpfs", {
      id:{
        allownull:false,
        autoIncrement:true,
        type: Sequelize.INTEGER
      },
      isadm:{
        allownull:false,
        type: Sequelize.BOOLEAN
      },
      cpf: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("cpfs");
  }
};
