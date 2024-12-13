// src/models/territorio.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Territorio = sequelize.define('Territorio', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  numerodelterritorio: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'territorio',
  timestamps: false
});

module.exports = Territorio;