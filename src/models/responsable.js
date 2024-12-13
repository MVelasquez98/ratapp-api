// src/models/responsable.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Responsable = sequelize.define('Responsable', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  nombre: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  contacto: {
    type: DataTypes.STRING(255),
    allowNull: true  // El contacto es opcional
  }
}, {
  tableName: 'responsable',
  timestamps: false
});

module.exports = Responsable;