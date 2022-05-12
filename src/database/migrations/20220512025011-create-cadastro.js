'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('clientes', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      sobre_nome: {
        type: Sequelize.STRING(50),
        allowNull: false
      },
      cpf: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: false
      },
      tefefone: {
        type: Sequelize.STRING(11),
        allowNull: false
      }
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('clientes');
  }
}