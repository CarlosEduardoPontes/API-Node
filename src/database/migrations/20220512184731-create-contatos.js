'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Clientes', {
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
        allowNull: true
      },
      email: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      email_2: {
        type: Sequelize.STRING(150),
        allowNull: true
      },
      telefone: {
        type: Sequelize.STRING(11),
        allowNull: false
      },
      telefone_2: {
        type: Sequelize.STRING(11),
        allowNull: true
      }
      
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Clientes');
  }
}