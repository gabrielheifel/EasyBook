'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable("users", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },

      idade: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      endereco: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      cpf: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false,
        references: {         
          model: 'cpfs',
          key: 'cpf'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      sexo: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      password_hash: {
        allownull: false,
        type: Sequelize.STRING
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
    return queryInterface.dropTable("users");
  }
};
