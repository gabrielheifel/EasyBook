'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('produtos',{
      id:{
        allownull:false,
        autoIncrement:true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      titulo:{
        allownull:false,
        type: Sequelize.STRING
      },
      sinopse:{
        allownull:false,
        type: Sequelize.STRING
      },
      autor:{
        allownull:false,
        type: Sequelize.STRING
      },
      editora:{
        allownull:false,
        type: Sequelize.STRING
      },
      imagem:{
        allownull:false,
        type: Sequelize.STRING
      },
      preco:{
        allownull:false,
        type: Sequelize.INTEGER
      },
      estoque:{
        allownull:false,
        type: Sequelize.INTEGER
      },
      categoria:{
        allownull:false,
        type: Sequelize.STRING
      },
      created_at:{
        allowNull:false,
        type:Sequelize.DATE
      },
      updated_at:{
        allowNull:false,
        type:Sequelize.DATE
      }

      })
  },

  down: (queryInterface, Sequelize) => {
   
      return queryInterface.dropTable('produtos');
    
  }
};