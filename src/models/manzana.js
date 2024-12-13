// src/models/manzana.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Manzana = sequelize.define('Manzana', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  territorioid: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'territorio',  // Nombre de la tabla a la que se referencia
      key: 'id'
    }
  },
  descripcion: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  estadocompletado: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  }
}, {
  tableName: 'manzana',
  timestamps: false
});

module.exports = Manzana;