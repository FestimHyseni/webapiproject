const { DataTypes } = require('sequelize');
const sequelize = require('../db');
const User = require('./user'); // Lidhja me përdoruesin

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false, // Çdo artikull duhet të ketë një përdorues
  }
});

// Lidhja me modelin User
Item.belongsTo(User, { foreignKey: 'userId' });

module.exports = Item;
