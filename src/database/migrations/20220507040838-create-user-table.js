'use strict';

const { password } = require("pg/lib/defaults");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('login',{
      id:{
        type: Sequelize.INTEGER,
        primarykey: true,
        autoIncrement: true,
        allowNull: false,
      },
      email:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      senha:{
        type: Sequelize.STRING(50),
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
    })

  },

  async down (queryInterface, Sequelize) {
    
  }
};
